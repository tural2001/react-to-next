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

export async function getServerSideProps() {
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

const privacypolicy = ({ PageData }) => {
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const filteredData = PageData.data.filter(
    (item) => item.slug === 'mexfilik-siyaseti'
  );
  const pageTitle = filteredData.map((item) => item.meta_title);
  const pageDescription = filteredData.map((item) => item.meta_description);
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
      {visible && (
        <div className="home-wrapper-1 container max-w-5xl max-sm:hidden py-10 mx-auto relative overflow-hidden max-xl:hidden">
          <div className="grid grid-cols-3 justify-items-center">
            <Link href="/services/fiberoptik">
              <div className="">
                <div className="bg-[#DCC5F6] w-[102px] h-[102px] rounded-3xl flex items-center mx-auto">
                  <Image
                    src="/assets/world.png"
                    width={500}
                    height={300}
                    className="w-[56px] h-[56px] mx-auto"
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="flex justify-center">
                    {' '}
                    <h3 className=" font-medium text-[28px] py-4  tracking-[0.5px]">
                      Internet
                    </h3>
                  </div>

                  <ul className="flex flex-col justify-center items-center gap-2 text-[#909090]  font-normal ">
                    <li>Fiber optik</li>
                    <li>Simsiz</li>
                    <li>Ayrılmış internet xətti</li>
                    <li>ADSL</li>
                  </ul>
                </div>
              </div>
            </Link>
            <Link href="/services/fiberoptik">
              <div className="">
                <div className="bg-[#BFFFCD] w-32 h-32 rounded-3xl flex items-center mx-auto">
                  <Image
                    src="/assets/tvstroke.png"
                    width={500}
                    height={300}
                    className="w-[56px] h-[56px] mx-auto"
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <h3 className=" font-medium text-[28px] py-4  tracking-[0.5px]">
                    TV
                  </h3>
                </div>
                <ul className="flex flex-col justify-center items-center gap-2 text-[#909090]  font-normal text-[]">
                  <li>iP TV</li>
                </ul>
              </div>
            </Link>
            <Link href="/services/fiberoptik">
              <div className="">
                <div className="bg-[#D1E3FF] w-32 h-32 rounded-3xl flex items-center mx-auto">
                  <Image
                    src="/assets/phonestroke.png"
                    width={500}
                    height={300}
                    className="w-[56px] h-[56px] mx-auto"
                    alt="Telefon Çizgisi"
                  />
                </div>
                <div className="flex justify-center">
                  <h3 className="font-medium text-[28px] py-4 tracking-[0.5px]">
                    Telefon
                  </h3>
                </div>
                <ul className="flex flex-col justify-center items-center gap-2 text-[#909090] font-normal text-[]">
                  <li>SiP telefoniya</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      )}
      {PageData?.data
        .filter((item) => item.slug === 'mexfilik-siyaseti')
        .map((item) => {
          return (
            <div className="container max-w-[1060px] max-xxl:w-full py-10 mx-auto ">
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

export default privacypolicy;
