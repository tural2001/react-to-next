import React, { useEffect, useState } from 'react';
import { useVisibleContext } from '../components/VisibleContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { base_url } from '../utils/base_url';
import { config } from '../utils/axiosconfig';
import axios from 'axios';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { useTranslation } from '../components/TranslationContext';
import Service from '../components/Service';

export async function getServerSideProps() {
  try {
    const Valuesresponse = await axios.get(
      `${base_url}/api/our-values`,
      config
    );
    const Structureresponse = await axios.get(
      `${base_url}/api/structures`,
      config
    );
    const Settingresponse = await axios.get(`${base_url}/api/settings`, config);
    const Pageresponse = await axios.get(`${base_url}/api/pages`, config);
    const ServiceCategoryresponse = await axios.get(
      `${base_url}/api/service-categories`,
      config
    );
    return {
      props: {
        ValuesData: Valuesresponse.data,
        PageData: Pageresponse.data,
        StructureData: Structureresponse.data,
        SettingData: Settingresponse.data,
        ServiceCategoryData: ServiceCategoryresponse.data,
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

const about = ({
  ValuesData,
  StructureData,
  PageData,
  SettingData,
  ServiceCategoryData,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();
  const filteredData = PageData?.data?.filter(
    (item) => item.slug === 'haqqimizda'
  );
  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const pageTitle = filteredData?.map((item) => item.meta_title);
  const pageDescription = filteredData?.map((item) => item.meta_description);
  const mission_title = SettingData?.data
    .filter((item) => item.key === 'about_page_mission_title')
    ?.map((item) => item.value);

  const mission_description = SettingData?.data
    .filter((item) => item.key === 'about_page_mission_description')
    ?.map((item) => item.value);
  const { translate, Language } = useTranslation();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {isLoading ? <LoadingOverlay /> : null}
      {visible ? <Service ServiceCategoryData={ServiceCategoryData} /> : null}

      <div className="max-xl:relative hidden max-xl:block max-xl:z-[-1] w-full ">
        {' '}
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className=" h-[535px]  top-32 w-ful max-sm:pb-20  max-sm:h-[220px] max-md:h-[300px] max-xl:h-[300px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className="about-wrapper-1 max-w-[1100px] grid grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-1 max-xl:grid-cols-1 gap-10 mx-auto max-sm:py-10  py-20  bg-white">
        {PageData?.data
          ?.filter((item) => item.slug === 'haqqimizda')
          .map((item, index) => {
            return (
              <>
                <div
                  className="max-sm:mx-10 max-lg:mx-10 max-xl:mx-10"
                  key={item.id}
                >
                  <h3 className="max-xl:hidden text-purple-900 text-[40px] font-bold leading-10 overflow-hidden max-sm:text-[20px] max-lg:text-[30px] max-xl:text-[30px] ">
                    {item.title}
                  </h3>{' '}
                  <h3 className="h3 text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px] max-xxl:text-white ">
                    {item.title}
                  </h3>
                  <div className="hidden max-xl:block absolute  z-[1] max-xl:z-[-1] top-[130px] right-48 max-xxl:right-0  max-xxl:top-20 ">
                    <Image
                      src="/assets/about/about.png"
                      width={210}
                      height={193}
                      className="w-[210px] h-[193px]"
                      alt=""
                    />
                  </div>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></span>
                </div>
                <div className="max-xl:hidden flex justify-center items-center">
                  {' '}
                  <div className="w-[475px] h-[264px] flex justify-center items-center  rounded-xl bg-[#5B2D90] ">
                    {' '}
                    <Image
                      className="w-[497.67px] h-[457px] mt-20  max-xl:hidden"
                      src="/assets/about/about.png"
                      width={497}
                      height={457}
                      alt=""
                    />
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="about-wrapper-2 bg-[#F7F6FB] py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-20">
          <div className="col-span-2 max-sm:mx-10 max-lg:mx-10 max-xl:mx-10">
            {SettingData?.data.map((setting) => {
              <>
                <h3 className=" text-purple-900 text-[40px] font-bold leading-10 overflow-hidden max-sm:text-[20px] max-lg:text-[30px] max-xl:text-[30px] ">
                  {mission_title}
                </h3>
                <p className=" text-justify text-neutral-500 text-[20px] font-normal leading-7 mt-5 max-sm:text-[16px] max-lg:text-[18px]">
                  {mission_description}
                </p>
              </>;
            })}{' '}
          </div>
          <div className="col-span-2 max-sm:flex max-sm:flex-col max-sm:mx-10 max-lg:mx-10 max-xl:mx-10">
            <h3 className="text-purple-900 text-[40px] font-bold leading-10 overflow-hidden max-sm:text-[20px] max-lg:text-[30px] max-xl:text-[30px]">
              {translate('Our_values', Language)}
            </h3>
            <div className="grid grid-cols-3 gap-10 mx-auto mt-10 max-sm:flex max-sm:flex-col max-sm:mx-5 max-sm:justify-center max-sm:items-center max-lg:grid-cols-2  max-lg:gap-5 max-xl:gap-2 ">
              {ValuesData?.data?.slice(0, 6).map((item) => {
                return (
                  <div
                    className=" w-[323.30px] h-[400px] max-sm:w-[300px] max-sm:h-[312px]  max-lg:w-[280px] max-lg:h-[342px] max-xl:w-[270px] max-xl:h-[400px] px-[39px] py-[40px]  bg-white rounded-3xl  justify-center items-center  flex flex-col gap-5"
                    key={item.id}
                  >
                    <div className="w-[225px] h-[270.25px] flex flex-col gap-3">
                      {' '}
                      <Image src={item.icon} width={68} height={44} alt="" />
                      <h4 className=" text-black text-[24px] font-semibold max-sm:text-[20px]">
                        {item.title}
                      </h4>
                      <p className=" text-neutral-500 text-[16px] font-normal leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrapper-2 bg-white py-10 relative max-w-[1100px] mx-auto max-sm:mx-10 max-lg:mx-10 max-xl:mx-10">
        <h3 className="text-purple-900 text-[40px] font-bold leading-10 overflow-hidden max-sm:text-[20px] max-lg:text-[30px] max-xl:text-[30px]">
          {translate('Structure', Language)}
        </h3>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-3 max-lg:mt-10 mt-20 max-sm:mt-5 max-xl:mt-5  max-xl:gap-5">
          {StructureData?.data?.map((item) => {
            return (
              <div
                className="w-[246.31px] max-sm:w-[132px] max-lg:w-[222px] max-img:w-[202px] max-sm:h-[262px] max-lg:h-[400px]  max-md:h-[330px] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:gap-1  max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-2  max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:gap-1   "
                key={item.id}
              >
                <Image
                  className="w-[244px] h-[309px] max-sm:w-[132px] max-m:w-[162px] max-sm:h-[168px] max-lg:w-[220px] max-lg:h-[268px] max-md:h-[238px] max-md:w-[200px] rounded-2xl"
                  src={item.image}
                  width={244}
                  height={309}
                  layout="responsive"
                  alt=""
                />
                <h3 className=" text-center text-black text-[21px] font-bold leading-loose max-sm:text-[12px]">
                  {item.name}
                </h3>
                <h2 className=" text-center text-stone-300 text-[15px] font-medium leading-snug max-sm:text-[12px]">
                  {item.profession}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default about;
