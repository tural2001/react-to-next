import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { useVisibleContext } from '../../components/VisibleContext';
import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosconfig';
import axios from 'axios';
import { LoadingOverlay } from '../../components/LoadingOverlay';
import { useTranslation } from '../../components/TranslationContext';
import Service from '../../components/Service';

export async function getServerSideProps({ query }) {
  try {
    const { slug } = query;
    const Blogresponse = await axios.get(
      `${base_url}/api/posts?published=true`,
      config
    );
    const ServiceCategoryresponse = await axios.get(
      `${base_url}/api/service-categories`,
      config
    );

    return {
      props: {
        BlogData: Blogresponse.data,
        ServiceCategoryData: ServiceCategoryresponse.data,
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

const blog = ({ BlogData, slug, ServiceCategoryData }) => {
  const { isOpen, toggleMenu } = useVisibleContext();

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  const currentPage = BlogData.data.findIndex((item) => item.slug === slug) + 1;
  const [isLoading, setIsLoading] = useState(true);

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
  const { translate, Language } = useTranslation();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {isLoading ? <LoadingOverlay /> : null}
      {visible ? <Service ServiceCategoryData={ServiceCategoryData} /> : null}

      {paginatedBlogs.map((item) => (
        <>
          <div key={item.id}>
            <div className="max-xl:hidden absolute max-xxl:z-[-1] w-full ">
              <Image
                src="/assets/home1.png"
                className=" h-[535px]  top-32 w-full  max-sm:h-[150px] max-md:h-[300px] max-xl:h-[350px] max-xl:top-14"
                alt=""
                priority
                width={535}
                height={200}
              />
            </div>
            <div className="max-w-[1050px] w-full  max-xl:py-20  mx-auto">
              <Image
                src="/assets/home1.png"
                className=" h-[535px] max-xl:block hidden absolute z-[-1] top-20 w-full  max-sm:h-[200px] max-md:h-[300px] max-xl:h-[350px] max-xl:top-0"
                alt=""
                priority
                width={535}
                height={200}
              />
              <div className="flex flex-col justify-center items-center gap-10">
                <h3 className="h3  text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xxl:text-[30px] max-xxl:text-white ">
                  {translate('Blog', Language)}
                </h3>
                <div className=" max-w-[1110px]   max-md:mx-5 max-xl:mx-10 z-[1] max-xxl:z-[-1]  ">
                  <Image
                    src={item.image}
                    className="object-cover max-h-[650px] rounded-3xl"
                    alt=""
                    width={1110}
                    height={200}
                  />
                </div>
              </div>
              <div
                className={`${
                  isOpen ? 'z-[-1]' : 'z-1'
                }flex flex-col mt-10  max-w-[1050px] max-md:mx-5 max-xl:mx-10 relative    max-xl:mt-20`}
              >
                <div className="flex justify-between mb-5">
                  <h3 className="text-[36px] font-semibold max-sm:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="text-[24px] text-[#B7B7B7] max-sm:text-[16px]">
                    {item.published_at ? item.published_at.slice(0, 10) : ''}
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
      <div className="flex justify-between max-w-[1050px] max-md:mx-5 max-xl:mx-10 mx-auto items-center my-10">
        <button
          onClick={goToPreviousPage}
          className="flex text-[20px] text-[#5B2D90] w-[292px] h-[68px] max-sm:w-[124px] max-sm:h-[40px] max-sm:text-[12px] items-center justify-center bg-[#F9F9F9] gap-2 rounded-full"
        >
          <BsArrowLeft />
          {translate('Previous', Language)}
        </button>
        <button
          onClick={goToNextPage}
          className="flex text-[20px] text-white w-[292px] h-[68px] max-sm:w-[124px] max-sm:h-[40px] max-sm:text-[12px] items-center justify-center bg-[#5B2D90] gap-2 rounded-full"
        >
          {translate('Next', Language)}

          <BsArrowRight />
        </button>
      </div>
    </>
  );
};

export default blog;
