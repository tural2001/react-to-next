import React, { useContext, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useVisibleContext } from '../components/VisibleContext';
import Image from 'next/image';
import Head from 'next/head';

const blog = () => {
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/');
  }, [router.pathname]);

  const pageTitle = 'Your Blog Post Title';
  const pageDescription = 'Description of your blog post.';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {visible && (
        <div className="home-wrapper-1 container max-w-5xl max-sm:hidden py-10 mx-auto relative overflow-hidden">
          <div className="grid grid-cols-3 justify-items-center">
            <Link href="/services">
              <div className="">
                <div className="bg-[#DCC5F6] w-[102px] h-[102px] rounded-3xl flex items-center mx-auto">
                  <Image
                    src="/assets/worldstroke.png"
                    width={56}
                    height={56}
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
            <Link href="/services">
              <div className="">
                <div className="bg-[#BFFFCD] w-32 h-32 rounded-3xl flex items-center mx-auto">
                  <Image
                    src="/assets/tvstroke.png"
                    width={56}
                    height={56}
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
            <Link href="/services">
              <div className="">
                <div className="bg-[#D1E3FF] w-32 h-32 rounded-3xl flex items-center mx-auto">
                  <Image
                    src="/assets/phonestroke.png"
                    width={56}
                    height={56}
                    className="w-[56px] h-[56px] mx-auto"
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <h3 className=" font-medium text-[28px] py-4  tracking-[0.5px]">
                    Telefon
                  </h3>
                </div>
                <ul className="flex flex-col justify-center items-center gap-2 text-[#909090]  font-normal text-[]">
                  <li>SiP telefoniya</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      )}
      <div className="max-xl:relative absolute max-xxl:z-[-1] w-full   ">
        {' '}
        <Image
          src="/assets/home1.png"
          className=" h-[535px]  top-32 w-full  max-sm:h-[200px] max-md:h-[300px] max-xl:h-[350px] max-xl:top-14"
          alt=""
          priority
          width={535}
          height={200}
        />
      </div>
      <div className="container max-w-[1100px] w-full  mt-6 mx-auto">
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
              Fiber optik
            </h3>
            <p className="text-[24px] text-[#B7B7B7] max-sm:text-[16px]">
              27.06.2023
            </p>
          </div>
          <div className="text-[16px] text-[#637381] leading-[25px] max-xl:text-justify">
            {' '}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Placeat reiciendis, beatae alias harum labore maxime
              doloremque exercitationem quibusdam amet suscipit impedit vel
              deleniti omnis sapiente iure voluptate minima, nesciunt libero.{' '}
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/blog2.png"
              className="w-full h-auto z-10 max-sm:w-[300px] max-sm:h-[180px] mt-10 max-lg:w-8/12 max-lg:h-8/12 max-xxl:w-10/12 max-xxl:h-10/12 "
              alt="page"
              width={535}
              height={350}
            />
          </div>

          <div className="flex justify-between items-center my-10">
            <button className="flex text-[20px] text-[#5B2D90] w-[292px]   h-[68px] max-sm:w-[124px] max-:h-[40px] max-sm:text-[12px] items-center justify-center bg-[#F9F9F9] gap-2 rounded-full">
              <BsArrowLeft />
              Əvvəlki
            </button>
            <button className="flex text-[20px] text-white w-[292px] h-[68px] max-sm:w-[124px] max-sm:h-[40px] max-sm:text-[12px] items-center justify-center bg-[#5B2D90] gap-2 rounded-full">
              Növbəti
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
