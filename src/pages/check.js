import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useVisibleContext } from '../components/VisibleContext';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { base_url } from '../utils/base_url';
import { config } from '../utils/axiosconfig';
import { LoadingOverlay } from '../components/LoadingOverlay';
import Service from '../components/Service';

export async function getStaticProps() {
  try {
    const Pageresponse = await axios.get(`${base_url}/api/pages`, config);

    return {
      props: {
        PageData: Pageresponse.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: 'An error occurred while fetching data',
      },
    };
  }
}

const check = ({ PageData }) => {
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const filteredData = PageData?.data?.filter(
    (item) => item.slug === 'sertler-ve-qaydalar'
  );
  const pageTitle = filteredData?.map((item) => item.meta_title);
  const pageDescription = filteredData?.map((item) => item.meta_description);
  console.log(pageTitle);
  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {isLoading ? <LoadingOverlay /> : null}
      {visible ? <Service ServiceCategoryData={ServiceCategoryData} /> : null}

      {PageData?.data
        .filter((item) => item.slug === 'sertler-ve-qaydalar')
        .map((item) => {
          return (
            <div className="container max-w-[1060px] min-h-screen max-xxl:w-full py-10 mx-auto ">
              <h3 className="text-[40px] text-[#5B2D90] font-bold text-center max-md:text-[20px] max-xl:text-[30px]">
                {item.title}
              </h3>
              <div className="flex flex-col gap-10 mt-10 ">
                <div className="flex flex-col gap-5 max-sm:w-3/4   max-xl:w-11/12  max-xl:mx-auto">
                  <span
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default check;
