import React, { useContext, useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Image from 'next/image';
import Head from 'next/head';

import { useVisibleContext } from '../../components/VisibleContext';
import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosconfig';
import axios from 'axios';

export async function getServerSideProps({ query }) {
  try {
    const { slug } = query;
    const Blogresponse = await axios.get(
      `${base_url}/api/posts?published=true`,
      config
    );
    return {
      props: {
        BlogData: Blogresponse.data,
        slug: slug,
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

const blogsPerPage = 1;

const blog = ({ BlogData, slug }) => {
  console.log(BlogData);
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  const currentPage = BlogData.data.findIndex((item) => item.slug === slug) + 1;

  useEffect(() => {
    setVisible(router.pathname === '/');
  }, [router.pathname]);

  const totalPages = Math.ceil(BlogData.data.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const paginatedBlogs = BlogData.data.slice(startIndex, endIndex);

  const [isNavigating, setIsNavigating] = useState(false);

  const goToPreviousPage = async () => {
    if (currentPage > 1) {
      setIsNavigating(true);
      const previousBlogId = BlogData.data[currentPage - 2]?.slug;
      await router.push(`/blog/${previousBlogId}`);
      setIsNavigating(false);
    }
  };

  const goToNextPage = async () => {
    if (currentPage < totalPages) {
      setIsNavigating(true);
      const nextBlogId = BlogData.data[currentPage]?.slug;
      await router.push(`/blog/${nextBlogId}`);
      setIsNavigating(false);
    }
  };

  const pageTitle = paginatedBlogs.map((item) => item.meta_title);
  const pageDescription = paginatedBlogs.map((item) => item.meta_description);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
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
      {paginatedBlogs.map((item) => (
        <>
          <div key={item.id}>
            <div className="max-xl:relative absolute max-xxl:z-[-1] w-full ">
              <Image
                src="/assets/home1.png"
                className=" h-[535px]  top-32 w-full  max-sm:h-[200px] max-md:h-[300px] max-xl:h-[350px] max-xl:top-14"
                alt=""
                priority
                width={535}
                height={200}
              />
            </div>
            <div className="container max-w-[1050px] w-full  max-md:py-10  mx-auto">
              <div className="flex flex-col justify-center items-center gap-10">
                {' '}
                <h3 className="h3  text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xxl:text-[30px] max-xxl:text-white ">
                  Bloq
                </h3>
                <div className="absolute  z-[1] max-xxl:z-[-1] h3 max-sm:mt-10 max-md:mt-14  max-xl:mt-20">
                  {' '}
                  <Image
                    src="/assets/blog2.png"
                    className="w-full  h-full"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-10 max-sm:w-3/4 max-xl:w-11/12  max-xl:mx-auto max-xl:mt-20">
                <div className="flex justify-between mb-5">
                  {' '}
                  <h3 className="text-[36px] font-semibold max-sm:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="text-[24px] text-[#B7B7B7] max-sm:text-[16px]">
                    {item.published_at.slice(0, 10)}
                  </p>
                </div>
                <div className="text-[16px] text-[#637381] leading-[25px] max-xl:text-justify">
                  {' '}
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="flex justify-between max-w-[1050px] max-xl:mx-5 mx-auto items-center my-10">
        <button
          onClick={goToPreviousPage}
          className="flex text-[20px] text-[#5B2D90] w-[292px] h-[68px] max-sm:w-[124px] max-sm:h-[40px] max-sm:text-[12px] items-center justify-center bg-[#F9F9F9] gap-2 rounded-full"
        >
          <BsArrowLeft />
          Əvvəlki
        </button>
        <button
          onClick={goToNextPage}
          className="flex text-[20px] text-white w-[292px] h-[68px] max-sm:w-[124px] max-sm:h-[40px] max-sm:text-[12px] items-center justify-center bg-[#5B2D90] gap-2 rounded-full"
        >
          Növbəti
          <BsArrowRight />
        </button>
      </div>
    </>
  );
};

export default blog;
