import { HiOutlineArrowSmallDown } from 'react-icons/hi2';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { SwiperNavButtons } from '../components/SwiperNavButtons';
import { SVG } from '../components/SVG';
import Head from 'next/head';
import Link from 'next/link';
import { useVisibleContext } from '../components/VisibleContext';
import { base_url } from '../utils/base_url';
import { config } from '../utils/axiosconfig';
import axios from 'axios';
import { LoadingOverlay } from '../components/LoadingOverlay';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from '../components/TranslationContext';
import Service from '../components/Service';

export async function getServerSideProps() {
  try {
    const request = [
      axios.get(`${base_url}/api/popups`, config),
      axios.get(`${base_url}/api/tariffs`, config),
      axios.get(`${base_url}/api/reviews`, config),
      axios.get(`${base_url}/api/colors`, config),
      axios.get(`${base_url}/api/advantages`, config),
      axios.get(`${base_url}/api/posts?published=true`, config),
      axios.get(`${base_url}/api/regions`, config),
      axios.get(`${base_url}/api/settings`, config),
      axios.get(`${base_url}/api/service-categories`, config),
      axios.get(`${base_url}/api/slides`, config),
    ];

    const [
      Popupresponse,
      Tariffresponse,
      Reviewresponse,
      Colorresponse,
      Advantageresponse,
      Blogresponse,
      Regionresponse,
      Settingresponse,
      ServiceCategoryresponse,
      Slideresponse,
    ] = await Promise.all(request);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      props: {
        TariffData: Tariffresponse.data,
        ReviewData: Reviewresponse.data,
        BlogData: Blogresponse.data,
        RegionData: Regionresponse.data,
        AdvantageData: Advantageresponse.data,
        ColorData: Colorresponse.data,
        SettingData: Settingresponse.data,
        ServiceCategoryData: ServiceCategoryresponse.data,
        SlideData: Slideresponse.data,
        PopupData: Popupresponse.data,
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

const home = ({
  TariffData,
  ReviewData,
  BlogData,
  RegionData,
  AdvantageData,
  ColorData,
  SettingData,
  ServiceCategoryData,
  SlideData,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const [selectedValue, setSelectedValue] = useState('');
  const [svgValue, setSvgValue] = useState('');

  const { isOpen, toggleMenu } = useVisibleContext();

  const handleScrollToFiber = () => {
    router.push('#fiber');
  };

  const { visible, setVisible } = useVisibleContext();

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router.pathname]);

  const handleClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  const pageTitle = SettingData?.data
    .filter((item) => item.key === 'home_page_meta_title')
    ?.map((item) => item.value);
  const pageDescription = SettingData?.data
    ?.filter((item) => item.key === 'home_page_meta_description')
    .map((item) => item.value);

  const career_title = SettingData?.data
    .filter((item) => item.key === 'home_page_career_title')
    ?.map((item) => item.value);

  const career_description = SettingData?.data
    .filter((item) => item.key === 'home_page_career_description')
    ?.map((item) => item.value);
  const home_page_other_tariffs_button_link = SettingData?.data
    .filter((item) => item.key === 'home_page_other_tariffs_button_link')
    ?.map((item) => item.value);

  const home_page_slide_down_button = SettingData?.data
    .filter((item) => item.key === 'home_page_slide_down_button')
    ?.map((item) => item.value);

  const map_title = SettingData?.data
    .filter((item) => item.key === 'home_page_map_title')
    ?.map((item) => item.value);

  const map_description = SettingData?.data
    .filter((item) => item.key === 'home_page_map_description')
    ?.map((item) => item.value);

  const handleButtonClick = () => {
    if (selectedValue) {
      setSvgValue(selectedValue);
    } else {
      setSvgValue(null);
    }
  };
  const [selectedItem, setSelectedItem] = useState('ferdi');

  const handleItemClick = (item, position) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  const { translate, Language } = useTranslation();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {visible ? <Service ServiceCategoryData={ServiceCategoryData} /> : null}
      {isLoading ? <LoadingOverlay /> : null}
      <div className="max-xl:relative absolute max-xl:z-[-1] w-full  bg-[#F7F6FB] ">
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className=" h-[535px]  w-full max-sm:h-[200px] max-md:h-[280px] max-xl:h-[390px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className="home-wrapper-2   bg-[#F7F6FB] pb-10  hidden max-xl:block ">
        <div
          className={`absolute ${
            isOpen ? 'z-[-1]' : 'z-1'
          }   w-11/12   top-1/4 max-sm:top-[120px] max-xl:top-[200px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
        >
          <Carousel
            infiniteLoop={true}
            autoPlay={false}
            interval={5000}
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={() => null}
            renderArrowNext={() => null}
          >
            {SlideData?.data?.map((slide) => (
              <div key={slide.id} className={` flex justify-between `}>
                <div className="flex justify-start flex-col">
                  {' '}
                  <p className="text-[20px] flex justify-start text-white font-light max-sm:text-[13px] max-md:text-[20px] max-xl:text-[30px]">
                    {slide.title}
                  </p>
                  <p className="text-[20px] flex justify-start text-white font-light max-sm:text-[13px] max-md:text-[20px] max-xl:text-[30px]">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.button_link ? slide.button_link : '#/'}
                    className="border p-2 rounded-3xl text-white text-[15px] w-[170px] h-[40px] max-sm:w-[120px] max-sm:h-[32px] max-sm:text-[11px] text-center mt-5 max-sm:mt-2 flex justify-center items-center overflow-hidden"
                  >
                    {slide.button_text}
                  </Link>
                </div>
                <div
                  className={`max-sm:w-[150px] ${
                    isOpen ? 'z-[-1]' : 'z-1'
                  }   max-md:w-[250px] max-lg:w-[300px] max-xl:w-[300px] `}
                >
                  <Image
                    src={slide.image}
                    width={500}
                    height={300}
                    className={`${isOpen ? 'z-[-1]' : 'z-1'} `}
                    layout="responsive"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="absolute top-[30rem] left-72 bg-white w-16 h-16 max-xxl:hidden rounded-full flex justify-center items-center">
          <Link
            href={
              home_page_slide_down_button ? home_page_slide_down_button : '#/'
            }
          >
            <HiOutlineArrowSmallDown className="text-[#5B2D90] text-[30px] stroke-2" />
          </Link>
        </div>
        <div className="container max-w-[1087px] mx-auto mt-0 ">
          {' '}
          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="text-[40px] text-[#5B2D90] font-bold tracking-[0.5px] max-sm:text-[20px] max-xxl:text-[30px]">
              {map_title}
            </h3>{' '}
            {translate('Select_the_region', Language)}
            <p className="text-center text-[#94A2B3] w-3/4 max-sm:text-[10px] max-sm:w-[307px] max-sm:mx-auto ">
              {map_description}
            </p>
          </div>
          <div className="grid grid-cols-3  mt-14 max-xxl:justify-items-center">
            <div className="max-xxl:col-span-3 max-xxl:flex max-xxl:flex-col max-xxl:justify-center max-xxl:items-center">
              <h3 className="text-[40px] text-[#5B2D90] font-bold tracking-[0.5px] max-sm:text-[20px] max-sm:text-center"></h3>
              <div className="border border-[#637381] rounded-3xl w-3/4 max-sm:w-[204px] max-sm:h-[40px] overflow-hidden max-sm:mt-3">
                <select
                  className="text-[#637381] bg-inherit border-none text-[15px] font-medium rounded-lg block w-full p-2.5 focus:ring-0 hom"
                  value={selectedValue}
                  id=""
                  onChange={(e) => setSelectedValue(e.target.value)}
                >
                  <option value=""> {translate('Select', Language)}</option>
                  {RegionData?.data?.map((region) => (
                    <option key={region.id} value={region.handle}>
                      {region.handle}
                    </option>
                  ))}
                </select>
              </div>
              <button className="w-[178px] h-[40px]  bg-[#5B2D90] rounded-3xl text-[16px] text-white font-medium mt-5 max-sm:w-[132px] max-sm:h-[28px] max-sm:text-[12px] overflow-hidden ">
                {translate('Look', Language)}
              </button>
            </div>{' '}
            <div className="col-span-2 flex justify-end items-center max-xxl:hidden">
              <div className="bg-[#5B2D90] col-span-2 h-96 w-3/4 rounded-3xl overflow-hidden">
                <div className="absolute max-xxl:hidden svg">
                  <SVG />
                </div>
              </div>
            </div>
            <div className="col-span-3 pt-20 max-xxl:hidden">
              <ul className="flex justify-center gap-20 text-[16px] font-medium">
                {ColorData?.data?.map((item) => {
                  return (
                    <li className="flex gap-2 items-center" key={item.id}>
                      <div className={`w-9 h-9 rounded-full`} />
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-wrapper-2   bg-[#F7F6FB] pb-10 max-xl:hidden  relative ">
        {' '}
        <Image
          src="/assets/home1.png"
          width={500}
          height={100}
          className="w-full"
          alt=""
        />{' '}
        <div className="absolute container w-[1100px] mx-10 top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:left-2 max-sm:top-3 max-lg:left-3   max-xl:left-2 ">
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            showArrows={false}
            showStatus={false}
            className=""
            renderArrowPrev={() => null}
            renderArrowNext={() => null}
          >
            {SlideData?.data?.map((slide) => (
              <div
                key={slide.id}
                className="carousel flex justify-between max-w-[1150px]"
              >
                <div className="flex justify-start flex-col">
                  {' '}
                  <p className="text-[40px] flex justify-start text-white font-light max-sm:text-[13px] max-md:text-[20px] max-xl:text-[30px]">
                    {slide.title}
                  </p>
                  <p className="text-[40px] flex justify-start text-white font-light max-sm:text-[13px] max-md:text-[20px] max-xl:text-[30px]">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.button_link ? slide.button_link : '#/'}
                    className="border p-2 rounded-3xl text-white text-[15px] w-[170px] h-[40px] max-sm:w-[120px] max-sm:h-[32px] max-sm:text-[11px] text-center mt-5 max-sm:mt-2 flex justify-center items-center overflow-hidden"
                  >
                    {slide.button_text}
                  </Link>
                </div>
                <div className="w-[650px] h-[522px] flex justify-end  top-20 right-0 max-sm:top-10 max-sm:w-[200px] max-xxl:top-32 max-md:right-[-20px] max-xxl:right-[25px] overflow-hidden max-md:w-[250px] max-lg:w-[350px] max-xl:w-[400px]  max-xxl:w-[500px] ">
                  <Image
                    src={slide.image}
                    width={500}
                    height={300}
                    layout="responsive"
                    alt=""
                    className={`${isOpen ? 'z-[-1]' : 'z-0'}`}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="absolute b-a top-[30rem] left-72 bg-white w-16 h-16 max-xxl:hidden rounded-full flex justify-center items-center">
          <Link
            href={
              home_page_slide_down_button ? home_page_slide_down_button : '#/'
            }
          >
            <HiOutlineArrowSmallDown className="text-[#5B2D90] text-[30px] stroke-2" />
          </Link>
        </div>
        <div className="container max-w-[1087px] mx-auto mt-20 max-sm:mt-10 ">
          {' '}
          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="text-[40px] text-[#5B2D90] font-bold tracking-[0.5px] max-sm:text-[20px] max-xxl:text-[30px]">
              {map_title}
            </h3>
            <p className="text-center text-[#94A2B3] w-3/4 max-sm:text-[10px] max-sm:w-[307px] max-sm:mx-auto ">
              {map_description}
            </p>
          </div>
          <div className="grid grid-cols-3  mt-14 max-xxl:justify-items-center">
            <div className="max-xxl:col-span-3 max-xxl:flex max-xxl:flex-col max-xxl:justify-center max-xxl:items-center">
              <h3 className="text-[40px] text-[#5B2D90] font-bold tracking-[0.5px] max-sm:text-[20px] max-sm:text-center">
                {translate('Select_the_region', Language)}
              </h3>

              <div className="border border-[#637381] rounded-3xl w-3/4 max-sm:w-[204px] max-sm:h-[40px] overflow-hidden max-sm:mt-3">
                <select
                  className="text-[#637381] bg-inherit border-none text-[15px] font-medium rounded-lg block w-full p-2.5 focus:ring-0 hom"
                  value={selectedValue}
                  id=""
                  onChange={(e) => setSelectedValue(e.target.value)}
                >
                  <option value=""> {translate('Select', Language)}</option>
                  {RegionData?.data?.map((region) => (
                    <option key={region.id} value={region.handle}>
                      {region.handle}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleButtonClick}
                className="w-[178px] h-[40px]  bg-[#5B2D90] rounded-3xl text-[16px] text-white font-medium mt-5 max-sm:w-[132px] max-sm:h-[28px] max-sm:text-[12px] overflow-hidden "
              >
                {translate('Look', Language)}
              </button>
            </div>{' '}
            <div className="col-span-2 flex justify-end items-center max-xxl:hidden">
              <div className="bg-[#5B2D90] col-span-2 h-96 w-3/4 rounded-3xl overflow-hidden">
                <div className="absolute max-xxl:hidden svg">
                  <SVG region={svgValue} RegionData={RegionData} />
                </div>
              </div>
            </div>
            <div className="col-span-3 pt-20 max-xxl:hidden">
              <ul className="flex justify-center gap-20 text-[16px] font-medium">
                {ColorData?.data?.map((item, index) => {
                  return (
                    <li className="flex gap-2 items-center" key={index}>
                      <div
                        className={`w-9 h-9 rounded-full `}
                        style={{ backgroundColor: item.code }}
                      />
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'z-[-1]' : 'z-0'
        } home-wrapper-4 w-full  pt-20 mx-auto relative `}
        id="ustunluklerimiz"
      >
        <div className="container relative max-w-[1087px] mx-auto">
          <h3
            className={`${
              isOpen ? 'z-[-1]' : 'z-0'
            } text-[40px] text-[#5B2D90] font-bold text-center max-sm:text-[20px] max-xxl:text-[30px]`}
          >
            {translate('Our_advantages', Language)}
          </h3>
          <div className="grid grid-cols-3 justify-items-center gap-5 mt-10 max-lg:grid-cols-1 max-xxl:grid-cols-2">
            {AdvantageData?.data?.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="w-[344px] h-[204px] max-sm:h-[124px] max-sm:w-[308px] max-xxl:h-[174px] max-xxl:w-[445px]  flex flex-col justify-center items-center border border-[#CDCDCD] p-7  gap-5 rounded-2xl max-xl:flex-row max-xl:justify-strech   max-xl:items-center  max-xxl:flex-col max-xxl:justify-strech   max-xxl:items-start"
              >
                <div className="flex flex-col max-xl:flex-row justify-between items-start max-xl:justify-space max-xl:items-center max-xxl:justify-center max-xxl:items-center  gap-3   w-full">
                  <div
                    style={{ backgroundColor: item.backgroundColor }}
                    className="flex justify-center items-center w-[65px] h-[65px] rounded-xl "
                  >
                    <Image src={item.image} width={40} height={40} alt="" />
                  </div>
                  <p className="text-[24px] font-semibold max-md:text-[15px] max-xxl:text-[16px]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Image
            src="/assets/wifi.png"
            height={300}
            width={300}
            className="wifi max-md:w-[130px] max-xl:w-[200px] w-[300px]"
            alt=""
          />
        </div>
      </div>
      <div className="home-wrapper-5 w-full pb-20 relative   pt-10 max-lg:py-0 ">
        <Image
          src="/assets/home3.png"
          width={500}
          height={300}
          className=" absolute w-full h-[1100px] max-xl:hidden   "
          alt=""
        />
        <Image
          src="/assets/home4.png"
          width={500}
          height={300}
          className=" absolute w-[1130px] max-lg:h-[740px] max-xl:h-[770px] hidden max-xl:block  "
          alt=""
        />
        <div className="container max-w-[1100px] mx-auto pt-12 ">
          <h3
            className="text-[40px] text-white relative  mt-40 max-xl:mt-14 font-bold text-center max-lg:text-[20px]  max-xxl:text-[25px] max-sm:mt-14 "
            id="fiber"
          >
            {translate('Fiber_optic', Language)}{' '}
          </h3>
          <div className="relative text-[20px] max-lg:text-[16px] max-xl:text-[18px] font-medium text-[#94A2B3] flex gap-5 justify-center items-center mt-3 overflow-hidden">
            <button
              onClick={() => {
                handleItemClick('ferdi');
              }}
              className={`border w-[192px] h-[59px] max-xl:w-[140px] max-xl:h-[36px]  rounded-3xl ${
                selectedItem === 'ferdi'
                  ? 'border-white' && 'text-white'
                  : 'border-[#94A2B3] '
              }  overflow-hidden flex justify-center items-center`}
            >
              {translate('Individual', Language)}
            </button>
            <button
              onClick={() => {
                handleItemClick('biznes');
              }}
              className={`border w-[192px] h-[59px]  max-xl:w-[140px] max-xl:h-[36px] ${
                selectedItem === 'biznes'
                  ? 'border-white' && 'text-white'
                  : 'border-[#94A2B3] '
              }  px-12 py-3 rounded-3xl  overflow-hidden flex justify-center items-center`}
            >
              {translate('Business', Language)}
            </button>
          </div>
          <div
            className="grid grid-cols-5  max-w-[1099px]  justify-items-center gap-5 mt-10 max-xl:hidden"
            id="fiber"
          >
            {selectedItem === 'ferdi' && (
              <>
                {TariffData?.data
                  ?.filter((item) => item.type == 1)
                  .slice(-5)
                  .map((item) => (
                    <div className="h-[500px] w-[210px]  p-0 op" key={item.id}>
                      <div
                        className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-b from-[#653E98] via-[transparent] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative z-10  mt-5  ml-1 ${
                          item.most_wanted === 1 ? 'outline-red' : ''
                        }`}
                      >
                        <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                          <Image
                            src={item.image}
                            width={26}
                            height={29}
                            alt=""
                          />
                        </div>
                        <p className="text-[20px] font-bold text-white">
                          {item.name}
                        </p>
                        <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                        <p className="text-white text-[24px] font-bold">
                          {item.speed} Mb/s
                        </p>
                        <div
                          className={`${
                            item.most_wanted === 1 ? 'block' : 'hidden'
                          } bg-[#FFA35B] w-full h-[28px]  flex  justify-center items-center gap-2  `}
                        >
                          <Image
                            src="/assets/packets/tv2.png"
                            width={11}
                            height={15}
                            alt=""
                          />
                          <p className="text-[10px] font-bold text-[#5B2D90]">
                            {translate('IP_TV', Language)}
                          </p>
                        </div>
                        <p className="text-white text-[10px] font-bold flex gap-1">
                          <Image
                            src="/assets/packets/pq2.png"
                            width={11}
                            height={15}
                            alt=""
                          />
                          {item.description}
                        </p>
                        <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                        <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                          {item.price}
                          <Image
                            src="/assets/packets/azn.png"
                            width={20}
                            height={20}
                            className="h-5"
                            alt=""
                          />
                        </p>
                        <Link
                          href={
                            home_page_other_tariffs_button_link
                              ? home_page_other_tariffs_button_link
                              : '#/'
                          }
                          className="w-[100px] h-[30px] text-[8px] flex justify-center items-center font-medium text-white bg-[#AB31D6] rounded-full"
                        >
                          {translate('Detailed_information', Language)}
                        </Link>
                      </div>
                      <div className="flex justify-center">
                        <div
                          className={`${
                            item.most_wanted === 1 ? 'flag-home' : 'hidden'
                          }   mt-0 text-[8px] text-center font-medium justify-center`}
                        >
                          {translate('Preferred', Language)}
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
            {selectedItem === 'biznes' && (
              <>
                {TariffData?.data
                  ?.filter((item) => item.type == 2)
                  .slice(-5)

                  .map((item) => (
                    <div className="h-[500px] w-[210px]  p-0 op" key={item.id}>
                      <div
                        className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-b from-[#653E98] via-[transparent] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative z-10  mt-5  ml-1 ${
                          item.most_wanted === 1 ? 'outline-red' : ''
                        }`}
                      >
                        <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                          <Image
                            src={item.icon}
                            width={26}
                            height={29}
                            alt=""
                          />
                        </div>
                        <p className="text-[20px] font-bold text-white">
                          {item.name}
                        </p>
                        <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                        <p className="text-white text-[24px] font-bold">
                          {item.speed} Mb/s
                        </p>
                        <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                          <Image
                            src="/assets/packets/tv2.png"
                            width={11}
                            height={15}
                            alt=""
                          />
                          <div
                            className={`${
                              item.most_wanted === 1 ? 'block' : 'hidden'
                            } bg-[#FFA35B] w-full h-[28px]  flex  justify-center items-center gap-2  `}
                          >
                            <Image
                              src="/assets/packets/tv2.png"
                              width={11}
                              height={15}
                              alt=""
                            />
                            <p className="text-[10px] font-bold text-[#5B2D90]">
                              {translate('IP_TV', Language)}
                            </p>
                          </div>
                        </div>
                        <p className="text-white text-[10px] font-bold flex gap-1">
                          <Image
                            src="/assets/packets/pq2.png"
                            width={11}
                            height={15}
                            alt=""
                          />
                          {item.description}
                        </p>
                        <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                        <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                          {item.price}
                          <Image
                            src="/assets/packets/azn.png"
                            width={20}
                            height={20}
                            className="h-5"
                            alt=""
                          />
                        </p>
                        <Link
                          href={
                            home_page_other_tariffs_button_link
                              ? home_page_other_tariffs_button_link
                              : '#/'
                          }
                          className="w-[100px] h-[30px] text-[8px] flex justify-center items-center font-medium text-white bg-[#AB31D6] rounded-full"
                        >
                          {translate('Detailed_information', Language)}
                        </Link>
                      </div>
                      <div className="flex justify-center">
                        <div
                          className={`${
                            item.most_wanted === 1 ? 'flag-home' : 'hidden'
                          }   mt-0 text-[8px] text-center font-medium justify-center`}
                        >
                          {translate('Preferred', Language)}
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
          {selectedItem === 'ferdi' && (
            <>
              <div className="swiper">
                <Swiper
                  slidesPerView={2}
                  centeredSlides={true}
                  spaceBetween={170}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {TariffData?.data
                    ?.filter((item) => item.type == 1)
                    .slice(-5)
                    .map((item) => (
                      <SwiperSlide key={item.id}>
                        {' '}
                        <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                          <div
                            className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative z-10   ${
                              item.most_wanted === 1 ? 'outline-red' : undefined
                            }`}
                          >
                            <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                              <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt=""
                              />
                            </div>
                            <p className="text-[20px] font-bold text-white">
                              {item.name}
                            </p>
                            <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                            <p className="text-white text-[24px] font-bold">
                              {item.speed} Mb/s
                            </p>
                            <div
                              className={`${
                                item.most_wanted === 1 ? 'block' : 'hidden'
                              } bg-[#FFA35B] w-full h-[28px]  flex  justify-center items-center gap-2  `}
                            >
                              <Image
                                src="/assets/packets/tv2.png"
                                width={11}
                                height={15}
                                alt=""
                              />
                              <p className="text-[10px] font-bold text-[#5B2D90]">
                                {translate('IP_TV', Language)}
                              </p>
                            </div>
                            <p className="text-white text-[10px] font-bold flex gap-1">
                              <Image
                                src="/assets/packets/pq2.png"
                                width={10}
                                height={10}
                                alt=""
                              />
                              {item.description}
                            </p>
                            <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                            <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                              {item.price}{' '}
                              <Image
                                src="/assets/packets/azn.png"
                                width={20}
                                height={20}
                                className="h-5"
                                alt=""
                              />
                            </p>
                            <Link
                              href={
                                home_page_other_tariffs_button_link
                                  ? home_page_other_tariffs_button_link
                                  : '#/'
                              }
                              className="w-[100px] h-[30px] text-[8px] flex justify-center items-center font-medium text-white bg-[#AB31D6] rounded-full"
                            >
                              {translate('Detailed_information', Language)}
                            </Link>
                          </div>
                          <div className="flex justify-center">
                            <div
                              className={`${
                                item.most_wanted === 1 ? 'flag-home' : 'hidden'
                              }   mt-0 text-[8px] text-center font-medium justify-center`}
                            >
                              {translate('Preferred', Language)}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </>
          )}
          {selectedItem === 'biznes' && (
            <>
              <div className="swiper">
                <Swiper
                  slidesPerView={2}
                  centeredSlides={true}
                  spaceBetween={170}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {TariffData?.data
                    ?.filter((item) => item.type == 1)
                    .slice(-5)
                    .map((item) => (
                      <SwiperSlide key={item.id}>
                        {' '}
                        <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                          <div
                            className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative z-10   ${
                              item.most_wanted === 1 ? 'outline-red' : undefined
                            }`}
                          >
                            <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                              <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt=""
                              />
                            </div>
                            <p className="text-[20px] font-bold text-white">
                              {item.name}
                            </p>
                            <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                            <p className="text-white text-[24px] font-bold">
                              {item.speed} Mb/s
                            </p>
                            <div
                              className={`${
                                item.most_wanted === 1 ? 'block' : 'hidden'
                              } bg-[#FFA35B] w-full h-[28px]  flex  justify-center items-center gap-2  `}
                            >
                              <Image
                                src="/assets/packets/tv2.png"
                                width={11}
                                height={15}
                                alt=""
                              />
                              <p className="text-[10px] font-bold text-[#5B2D90]">
                                {translate('IP_TV', Language)}
                              </p>
                            </div>
                            <p className="text-white text-[10px] font-bold flex gap-1">
                              <Image
                                src="/assets/packets/pq2.png"
                                width={10}
                                height={10}
                                alt=""
                              />
                              {item.description}
                            </p>
                            <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                            <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                              {item.price}{' '}
                              <Image
                                src="/assets/packets/azn.png"
                                width={20}
                                height={20}
                                className="h-5"
                                alt=""
                              />
                            </p>
                            <Link
                              href={
                                home_page_other_tariffs_button_link
                                  ? home_page_other_tariffs_button_link
                                  : '#/'
                              }
                              className="w-[100px] h-[30px] text-[8px] flex justify-center items-center font-medium text-white bg-[#AB31D6] rounded-full"
                            >
                              {translate('Detailed_information', Language)}
                            </Link>
                          </div>
                          <div className="flex justify-center">
                            <div
                              className={`${
                                item.most_wanted === 1 ? 'flag-home' : 'hidden'
                              }   mt-0 text-[8px] text-center font-medium justify-center`}
                            >
                              {translate('Preferred', Language)}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </>
          )}
          <div className="relative   text-[20px] max-xl:text-[16px] font-medium text-white flex gap-5 justify-center items-center ">
            <button className="border  w-[244px] h-[60px] max-xl:w-[196px] max-xl:h-[36px]  border-white  flex justify-center items-center max-sm:p-0 rounded-3xl ">
              <Link
                href={
                  home_page_other_tariffs_button_link
                    ? home_page_other_tariffs_button_link
                    : '#/'
                }
              >
                {translate('Other_tariffs', Language)}
              </Link>
            </button>
          </div>{' '}
          <Image
            src="/assets/packets/wifi2.png"
            width={300}
            height={300}
            className="wifi_2 max-md:w-[130px] max-xl:w-[200px] w-[300px]"
            alt=""
          />
        </div>
      </div>{' '}
      <div
        className={`  home-wrapper-5 w-full   mx-auto pt-20 pb-20 relative  `}
      >
        <div className="container max-w-7xl   mx-auto  flex flex-col gap-10 justify-center items-center">
          <h3 className="text-[40px] text-[#5B2D90] font-bold text-center max-md:text-[20px]  max-xl:text-[30px]">
            {translate('Customer_reviews', Language)}
          </h3>
          <div className="w-full flex   ">
            <div className="swiper">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={{
                  prevEl: '.custom-prev',
                  nextEl: '.custom-next',
                }}
                className="mySwiper3"
              >
                {ReviewData?.data?.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      {' '}
                      <div className="flex overflow-hidden" key={item.id}>
                        <div className="w-[600px] h-[400px] border flex flex-col justify-center p-10 gap-8 rounded-2xl mt-10 border-[#C4C4C4]">
                          <p className="text-[14px] text-[#5F7285] leading-5 font-medium italic">
                            {item.comment}
                          </p>
                          <div className="flex items-center gap-1">
                            <Image
                              src={item.reviewer_image}
                              width={54}
                              height={54}
                              alt=""
                            />
                            <h4 className="text-[14px] text-[#1B263D] font-semibold">
                              {item.reviewer_name}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <SwiperNavButtons />
              </Swiper>
            </div>
          </div>
          <div className="w-full">
            <div className="swiper">
              <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper2"
              >
                <>
                  {ReviewData?.data?.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        {' '}
                        <div className="flex overflow-hidden" key={item.id}>
                          <div className="w-[600px] h-[400px] mx-2 border flex flex-col justify-center p-10 gap-8 rounded-2xl mt-10 border-[#C4C4C4]">
                            <p className="text-[14px] text-[#5F7285] leading-5 font-medium italic">
                              {item.quote}
                            </p>
                            <div className="flex items-center gap-1">
                              <Image
                                src={item.reviewer_image}
                                width={54}
                                height={54}
                                alt=""
                              />
                              <h4 className="text-[14px] text-[#1B263D] font-semibold">
                                {item.author}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="home-wrapper-7 w-full mt-10 pb-20 mx-auto relative max-xxl:flex max-xxl:flex-col max-xxl:justify-center max-xxl:items-center  bg-[#F7F6FB]  ">
        <h3 className="text-[40px] max-md:text-[20px] max-xxl:text-[30px] text-[#5B2D90] relative  my-10 font-bold text-center">
          {translate('Blog', Language)}
        </h3>
        <div className="container max-w-[966px]  mx-auto  grid grid-cols-3 justify-items-center max-md:grid-cols-1 max-xl:grid-cols-2  max-xxl:mx-10  gap-12">
          {BlogData?.data?.map((item) => {
            return (
              <div
                className="flex flex-col justify-center max-xxl:w-[315px]  gap-2 h-[347px] "
                key={item.id}
              >
                <div key={item.id} onClick={() => handleClick(item.slug)}>
                  <div className="max-sm:flex max-sm:flex-col max-sm:justify-center">
                    {' '}
                    <Image
                      src={item.image}
                      width={500}
                      height={300}
                      layout="responsive"
                      className="w-[280px] h-[168px] "
                      alt=""
                    />
                    <h2 className="bg-[#5B2D90] text-[12px] rounded-xl w-[136px] text-center py-2   mb-2 text-white mt-5">
                      {item.published_at}
                    </h2>
                    <h3 className="text-[#212B36] text-[24px] font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-wrapper-8 w-full  pb-20 mx-auto relative  py-20  ">
        <div className=" max-w-5xl mx-auto flex justify-center">
          <div className="relative w-[752px] h-[337px] max-sm:w-[280px] max-sm:h-[280px] max-md:w-[450px] max-md:h-[300px] bg-[#5B2D90] p-10 max-md:px-2 max-md:py-5 rounded-3xl flex flex-col gap-10 max-sm:gap-3 max-md:gap-10  justify-center items-center">
            <Image
              src="/assets/packets/wifi2.png"
              width={300}
              height={300}
              className="wifi_3 max-md:w-[130px] max-xl:w-[200px] w-[300px]"
              alt=""
            />
            <h2 className="text-white text-[24px] font-bold max-md:text-[20px] max-md:text-center">
              {career_title}
            </h2>
            <p className="text-white text-[16px] w-4/5 font-normal text-center max-md:text-[12px] max-sm:w-full overflow-hidden">
              {career_description}
            </p>
            <Link href="/career" onClick={handleScrollUp}>
              <button className="w-[172px] h-[52px] max-md:w-[190px] max-md:h-[41px] bg-white text-[#5B2D90] rounded-full text-[16px] font-medium">
                {translate('Apply', Language)}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
