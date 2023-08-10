import { HiOutlineArrowSmallDown } from 'react-icons/hi2';
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { useVisibleContext } from '../components/VisibleContext';
import Image from 'next/image';

import { Pagination } from 'swiper/modules';
import { SwiperNavButtons } from '../components/SwiperNavButtons';
import { SVG } from '../components/SVG';
import { HomePopup } from '../components/HomePopup';
import Head from 'next/head';
import Link from 'next/link';

const home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, toggleMenu } = useVisibleContext();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const testimonials = [
    {
      id: 1,
      quote:
        'Blog1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo hic eius rerum modi in. Non itaque, sed numquam quos tempore illo eos voluptatibus voluptatum deserunt dolore voluptatem pariatur nulla!',
      author: 'Lorem ',
      width: 54,
      height: 54,
      image: '/assets/rey.png',
    },
    {
      id: 2,
      quote:
        'Blog1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo hic eius rerum modi in. Non itaque, sed numquam quos tempore illo eos voluptatibus voluptatum deserunt dolore voluptatem pariatur nulla!',
      author: 'Lorem ',
      width: 54,
      height: 54,
      image: '/assets/rey.png',
    },
    {
      id: 3,
      quote:
        'Blog1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo hic eius rerum modi in. Non itaque, sed numquam quos tempore illo eos voluptatibus voluptatum deserunt dolore voluptatem pariatur nulla!',
      author: 'Lorem ',
      width: 54,
      height: 54,
      image: '/assets/rey.png',
    },
  ];

  const data = [
    {
      id: 1,
      image: '/assets/pq.png',
      width: 32,
      height: 32,
      title: 'Pulsuz qoşulma 1',
      backgroundColor: '#DCC5F6',
    },
    {
      id: 2,
      image: '/assets/ged.png',
      width: 33,
      height: 35,
      title: 'Geniş əhatə dairəsi',
      backgroundColor: '#C0D9FF',
    },
    {
      id: 3,
      image: '/assets/kx.png',
      width: 36,
      height: 34,
      title: 'Keyfiyyətli xidmət',
      backgroundColor: '#C4FFD5',
    },
    {
      id: 4,
      image: '/assets/md.png',
      width: 40,
      height: 39,
      title: '24/7 Müştəri Dəstəyi',
      backgroundColor: '#FFD7BA',
    },
    {
      id: 5,
      image: '/assets/gti.png',
      width: 33,
      height: 35,
      title: 'Geniş Texniki İmkanlar',
      backgroundColor: '#FFE1E1',
    },
    {
      id: 6,
      image: '/assets/pk.png',
      width: 38,
      height: 31,
      title: 'Professional komanda',
      backgroundColor: '#F6C5EE',
    },
  ];
  const data1 = [
    {
      id: 1,
      image: '/assets/packets/basic.png',
      width: 26,
      height: 29,
      name: 'Basic',
      speed: 20,
      title: 'Pulsuz qoşulma 1',
      description: 'Pulsuz qoşulma',
      price: 15,
    },
    {
      id: 2,
      image: '/assets/packets/silver.png',
      width: 30,
      height: 28,
      name: 'Silver',
      speed: 40,
      title: 'Geniş əhatə dairəsi',
      description: 'Pulsuz qoşulma',
      price: 18,
    },
    {
      id: 3,
      image: '/assets/packets/gold.png',
      width: 40,
      height: 35,
      name: 'Gold',
      speed: 50,
      title: 'Keyfiyyətli xidmət',
      description: 'Pulsuz qoşulma',
      price: 19,
    },
    {
      id: 4,
      key: 'key',
      image: '/assets/packets/platinum.png',
      width: 41,
      height: 30,
      name: 'Platinum',
      speed: 50,
      title: '24/7 Müştəri Dəstəyi',
      description: 'Pulsuz qoşulma',
      price: 25,
    },
    {
      id: 5,
      image: '/assets/packets/extra.png',
      width: 34,
      height: 28,
      name: 'Extra',
      speed: 70,
      title: 'Geniş Texniki İmkanlar',
      description: 'Pulsuz qoşulma',
      price: 35,
    },
  ];

  const { visible, setVisible } = useVisibleContext();

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/');
  }, [router.pathname]);

  const pageTitle = 'Your Home Post Title';
  const pageDescription = 'Description of your home post.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {visible && (
        <div className="home-wrapper-1 container max-w-5xl max-sm:hidden py-10 mx-auto relative overflow-hidden max-xl:hidden">
          <div className="grid grid-cols-3 justify-items-center">
            <Link href="/services">
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
            <Link href="/services">
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
            <Link href="/services">
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
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Image
            src="/assets/loading.gif"
            width="100"
            height="100"
            style={{ width: 'auto', height: 'auto' }}
            priority
            alt="Loading"
          />
        </div>
      ) : (
        <>
          <div className="max-xl:relative absolute max-xl:z-[-1] w-full  bg-[#F7F6FB] ">
            {' '}
            <Image
              src="/assets/home1.png"
              width={500}
              height={300}
              className=" h-[535px]  w-full max-sm:h-[200px] max-md:h-[280px] max-xl:h-[350px] max-xl:top-14"
              alt=""
            />
          </div>
          <div className="home-wrapper-2   bg-[#F7F6FB] pb-10  hidden max-xl:block  overflow-hidden">
            {' '}
            <div className="absolute   max-xl:z-[-1]    max-xxl:right-0  max-sm:top-[105px] max-xxl:top-[145px]">
              <Image
                src="/assets/home2.png"
                width={200}
                height={150}
                className="max-sm:w-[200px]   max-md:w-[250px] max-lg:w-[350px] max-xl:w-[400px]  max-xxl:w-[500px]"
                alt=""
              />
            </div>
            <div
              className={`absolute ${
                isOpen ? 'z-[-1]' : 'z-[1]'
              }    max-xxl:left-1  max-xxl:top-20`}
            >
              <div className="relative mx-0 max-xxl:w-full max-xxl:h-[40px]">
                {' '}
                <div className="max-sm:left-2 max-sm:top-3  max-lg:left-3 max-xl:mx-1  max-xl:top-5 max-xl:left-2  max-xxl:left-20 max-xxl:w-full  flex flex-col">
                  <p className="text-[40px] text-white  font-light max-sm:text-[13px]  max-md:text-[20px] max-xl:text-[30px] ">
                    Onlayn qeydiyyatdan keç, <br />{' '}
                    <span className="font-extrabold">
                      Fiber optik internetə qoşul!
                    </span>{' '}
                  </p>
                  <HomePopup />
                </div>
                <div className="absolute top-[30rem] left-72 bg-white w-16 h-16 max-xxl:hidden rounded-full flex justify-center items-center">
                  <HiOutlineArrowSmallDown className="text-[#5B2D90] text-[30px] stroke-2" />
                </div>
              </div>
            </div>
            <div className="container max-w-[1087px] mx-auto mt-20 max-sm:mt-10 ">
              {' '}
              <div className="flex flex-col justify-center items-center gap-3">
                <h3 className="text-[40px] text-[#5B2D90] font-bold tracking-[0.5px] max-sm:text-[20px] max-xxl:text-[30px]">
                  Əhatə dairəmiz
                </h3>{' '}
                Bölgəni seçin
                <p className="text-center text-[#94A2B3] w-3/4 max-sm:text-[10px] max-sm:w-[307px] max-sm:mx-auto ">
                  “Bölgəni seçin” başlığından öz ünvanınızı seçməklə və ya
                  xəritə vizualının üzərində sizə lazım olan əraziyə klikləməklə
                  həmin ərazinin xidmət sahəmizə aid olub-olmadığını öyrənə
                  bilərsiniz.
                </p>
              </div>
              <div className="grid grid-cols-3  mt-14 max-xxl:justify-items-center">
                <div className="max-xxl:col-span-3 max-xxl:flex max-xxl:flex-col max-xxl:justify-center max-xxl:items-center">
                  <h3 className="text-[40px] text-[#5B2D90] font-bold tracking-[0.5px] max-sm:text-[20px] max-sm:text-center"></h3>
                  <div className="border border-[#637381] rounded-3xl w-3/4 max-sm:w-[204px] max-sm:h-[40px] overflow-hidden max-sm:mt-3">
                    <select
                      id=""
                      className="text-[#637381] bg-inherit  border-none text-[15px] font-medium rounded-lg block w-full p-2.5 focus:ring-0 hom"
                    >
                      <option value="">Seçin</option>

                      <option value="">AZE</option>
                      <option value="US">ENG</option>
                    </select>
                  </div>
                  <button className="w-[178px] h-[40px]  bg-[#5B2D90] rounded-3xl text-[16px] text-white font-medium mt-5 max-sm:w-[132px] max-sm:h-[28px] max-sm:text-[12px] overflow-hidden ">
                    Bax
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
                    <li className="flex gap-2 items-center">
                      <div className="w-9 h-9 rounded-full bg-[#5B2D90]" />
                      Xidmət var
                    </li>
                    <li className="flex gap-2 items-center">
                      <div className="w-9 h-9 rounded-full bg-[#9A7DFF]" />
                      Xidmət veriləcək
                    </li>{' '}
                    <li className="flex gap-2 items-center">
                      <div className="w-9 h-9  rounded-full bg-[#D3D3D3]" />
                      Xidmət yoxdur
                    </li>{' '}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="home-wrapper-2   bg-[#F7F6FB] pb-10 max-xl:hidden  relative overflow-hidden">
            {' '}
            <Image
              src="/assets/home1.png"
              width={500}
              height={100}
              className="w-full"
              alt=""
            />
            <Image
              src="/assets/home2.png"
              width={500}
              height={300}
              className="absolute top-40 right-20 max-sm:top-10 max-sm:w-[200px] max-xxl:top-32 max-md:right-[-20px] max-xxl:right-[25px] overflow-hidden max-md:w-[250px] max-lg:w-[350px] max-xl:w-[400px]  max-xxl:w-[500px] "
              alt=""
            />
            <div className="max-w-[1010px] mx-auto ">
              <div className=" mx-auto max-xxl:w-[200px] max-xxl:h-[40px]">
                {' '}
                <div className="absolute  top-32 left-44 max-sm:left-2 max-sm:top-3  max-lg:left-3 max-xl:mx-1  max-xl:top-5 max-xl:left-2  max-xxl:left-20 max-xxl:w-[520px] overflow-hidden flex flex-col">
                  <p className="text-[40px] text-white  font-light max-sm:text-[16px] max-xl:text-[30px] ">
                    Onlayn qeydiyyatdan keç, <br />{' '}
                    <span className="font-extrabold">
                      Fiber optik internetə qoşul!
                    </span>{' '}
                  </p>
                  <HomePopup />
                </div>
                <Link href="#">
                  <div className="absolute top-[30rem] left-72 bg-white w-16 h-16 max-xxl:hidden rounded-full flex justify-center items-center">
                    <HiOutlineArrowSmallDown className="text-[#5B2D90] text-[30px] stroke-2" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="container max-w-[1087px] mx-auto mt-20 max-sm:mt-10 ">
              {' '}
              <div className="flex flex-col justify-center items-center gap-3">
                <h3 className="text-[40px] text-[#5B2D90] font-bold tracking-[0.5px] max-sm:text-[20px] max-xxl:text-[30px]">
                  Əhatə dairəmiz
                </h3>
                <p className="text-center text-[#94A2B3] w-3/4 max-sm:text-[10px] max-sm:w-[307px] max-sm:mx-auto ">
                  “Bölgəni seçin” başlığından öz ünvanınızı seçməklə və ya
                  xəritə vizualının üzərində sizə lazım olan əraziyə klikləməklə
                  həmin ərazinin xidmət sahəmizə aid olub-olmadığını öyrənə
                  bilərsiniz.
                </p>
              </div>
              <div className="grid grid-cols-3  mt-14 max-xxl:justify-items-center">
                <div className="max-xxl:col-span-3 max-xxl:flex max-xxl:flex-col max-xxl:justify-center max-xxl:items-center">
                  <h3 className="text-[40px] text-[#5B2D90] font-bold tracking-[0.5px] max-sm:text-[20px] max-sm:text-center">
                    Bölgəni seçin
                  </h3>
                  <div className="border border-[#637381] rounded-3xl w-3/4 max-sm:w-[204px] max-sm:h-[40px] overflow-hidden max-sm:mt-3">
                    <select
                      id="countries"
                      className="text-[#637381] bg-inherit  border-none text-[15px] font-medium rounded-lg block w-full p-2.5 focus:ring-0 "
                    >
                      <option value="">Seçin</option>

                      <option value="">AZE</option>
                      <option value="US">ENG</option>
                    </select>
                  </div>
                  <button className="w-[178px] h-[40px]  bg-[#5B2D90] rounded-3xl text-[16px] text-white font-medium mt-5 max-sm:w-[132px] max-sm:h-[28px] max-sm:text-[12px] overflow-hidden ">
                    Bax
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
                    <li className="flex gap-2 items-center">
                      <div className="w-9 h-9 rounded-full bg-[#5B2D90]" />
                      Xidmət var
                    </li>
                    <li className="flex gap-2 items-center">
                      <div className="w-9 h-9 rounded-full bg-[#9A7DFF]" />
                      Xidmət veriləcək
                    </li>{' '}
                    <li className="flex gap-2 items-center">
                      <div className="w-9 h-9  rounded-full bg-[#D3D3D3]" />
                      Xidmət yoxdur
                    </li>{' '}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Image
        src="/assets/wifi.png"
        width={300}
        height={300}
        className={`absolute right-32 ${
          visible ? 'top-[108rem]' : 'top-[84em]'
        } max-sm:top-[39rem] max-sm:right-0 z-10 w-[300px] h-[300px] max-sm:w-[126px] max-xxl:hidden`}
        alt=""
      />
      <div
        className="home-wrapper-4 w-full  pt-20 mx-auto relative overflow-hidden"
        id="ustunluklerimiz"
      >
        <div className="container max-w-[1087px] mx-auto">
          <h3 className="text-[40px] text-[#5B2D90] font-bold text-center max-sm:text-[20px] max-xxl:text-[30px]">
            Üstünlüklərimiz
          </h3>
          <div className="grid grid-cols-3 justify-items-center gap-5 mt-10 max-lg:grid-cols-1 max-xxl:grid-cols-2">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-[344px] h-[204px] max-sm:h-[124px] max-sm:w-[308px] max-xxl:h-[174px] max-xxl:w-[445px]  flex flex-col justify-center items-center border border-[#CDCDCD] p-5 gap-5 rounded-2xl max-xl:flex-row max-xl:justify-strech   max-xl:items-center  max-xxl:flex-col max-xxl:justify-strech   max-xxl:items-start"
              >
                <div className="flex flex-col max-xl:flex-row justify-between items-center max-xl:justify-center max-xl:items-center max-xxl:justify-center max-xxl:items-center  gap-3   w-full">
                  <div
                    style={{ backgroundColor: item.backgroundColor }}
                    className="flex justify-center items-center w-[65px] h-[65px] rounded-xl "
                  >
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt=""
                    />
                  </div>
                  <p className="text-[24px] font-semibold max-md:text-[15px] max-xxl:text-[16px]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="home-wrapper-5 w-full   py-10 max-lg:py-0 overflow-hidden">
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
          <h3 className="text-[40px] text-white relative  mt-40 max-xl:mt-14 font-bold text-center max-lg:text-[20px]  max-xxl:text-[25px] max-sm:mt-14 ">
            Fiber optik
          </h3>
          <div className="relative text-[20px] max-lg:text-[16px] max-xl:text-[18px] font-medium text-[#94A2B3] flex gap-5 justify-center items-center mt-3 overflow-hidden">
            <button className="border w-[192px] h-[59px] max-xl:w-[140px] max-xl:h-[36px] border-[#94A2B3]  rounded-3xl  hover:border-white hover:text-white  overflow-hidden flex justify-center items-center">
              Fərdi
            </button>
            <button className="border w-[192px] h-[59px]  max-xl:w-[140px] max-xl:h-[36px] border-[#94A2B3]  px-12 py-3 rounded-3xl hover:border-white hover:text-white overflow-hidden flex justify-center items-center">
              Biznes
            </button>
          </div>
          <div className="grid grid-cols-5  max-w-[1099px]  justify-items-center gap-5 mt-10 max-xl:hidden">
            {data1.map((item) => (
              <div className="h-[500px] w-[210px]  p-0 op" key={item.id}>
                <div
                  className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative z-10  mt-5  ml-1 ${
                    item.id === 'key' ? 'outline-red' : ''
                  }`}
                >
                  <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
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
                    <p className="text-[10px] font-bold text-[#5B2D90]">
                      IP TV
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
                  <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                    Ətraflı məlumat
                  </button>
                </div>
                <div className="flex justify-center">
                  <div
                    className={`${
                      item.id === 'key' ? 'flag-home' : 'hidden'
                    }   mt-0 text-[8px] text-center font-medium justify-center`}
                  >
                    Üstünlük verilən
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              {data1.map((item) => (
                <SwiperSlide key={item.id}>
                  {' '}
                  <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                    <div
                      className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative z-10   ${
                        item.id === 'key' ? 'outline-red' : undefined
                      }`}
                    >
                      <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                        <Image
                          src={item.image}
                          width={item.width}
                          height={item.height}
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
                          width={500}
                          height={300}
                          alt=""
                        />
                        <p className="text-[10px] font-bold text-[#5B2D90]">
                          IP TV
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
                      <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                        Ətraflı məlumat
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div
                        className={`${
                          item.id === 'key' ? 'flag-home' : 'hidden'
                        }   mt-0 text-[8px] text-center font-medium justify-center`}
                      >
                        Üstünlük verilən
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="relative   text-[20px] max-xl:text-[16px] font-medium text-white flex gap-5 justify-center items-center ">
            <button className="border  w-[244px] h-[60px] max-xl:w-[196px] max-xl:h-[36px]  border-white  flex justify-center items-center max-sm:p-0 rounded-3xl ">
              Digər tariflər
            </button>
          </div>{' '}
        </div>
      </div>{' '}
      <Image
        src="/assets/packets/wifi2.png"
        width={300}
        height={300}
        className={`absolute left-32    ${
          visible ? 'top-[218rem]' : 'top-[190rem]'
        }  max-xxl:hidden`}
        alt=""
      />
      <div className="home-wrapper-6 w-full mt-40 mx-auto relative overflow-hidden">
        <div className="container max-w-7xl   mx-auto  flex flex-col gap-10 justify-center items-center">
          <h3 className="text-[40px] text-[#5B2D90] font-bold text-center max-md:text-[20px]  max-xl:text-[30px]">
            Müştəri rəyləri
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
                {testimonials.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      {' '}
                      <div className="flex overflow-hidden" key={item.id}>
                        <div className="w-[600px] h-[400px] border flex flex-col justify-center p-10 gap-8 rounded-2xl mt-10 border-[#C4C4C4]">
                          <p className="text-[14px] text-[#5F7285] leading-6 font-medium italic">
                            {item.quote}
                          </p>
                          <div className="flex items-center gap-1">
                            <Image
                              src={item.image}
                              width={item.width}
                              height={item.height}
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
                  {testimonials.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        {' '}
                        <div className="flex overflow-hidden" key={item.id}>
                          <div className="w-[600px] h-[400px] mx-2 border flex flex-col justify-center p-10 gap-8 rounded-2xl mt-10 border-[#C4C4C4]">
                            <p className="text-[14px] text-[#5F7285] leading-6 font-medium italic">
                              {item.quote}
                            </p>
                            <div className="flex items-center gap-1">
                              <Image
                                src={item.image}
                                width={item.width}
                                height={item.height}
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
      <div className="home-wrapper-7 w-full mt-10 pb-20 mx-auto relative max-xxl:flex max-xxl:flex-col max-xxl:justify-center max-xxl:items-center  bg-[#F7F6FB]  overflow-hidden">
        <h3 className="text-[40px] max-md:text-[20px] max-xxl:text-[30px] text-[#5B2D90] relative  my-10 font-bold text-center">
          Bloq
        </h3>
        <div className="container max-w-[966px]  mx-auto  grid grid-cols-3 justify-items-center max-md:grid-cols-1 max-xl:grid-cols-2  max-xxl:mx-10  gap-12">
          {data.map((item) => (
            <div
              className="flex flex-col justify-center max-xxl:w-[315px]  gap-2 h-[347px] "
              key={item.id}
            >
              <Link href="/blog" onClick={handleScrollUp} key={item.id}>
                <div className="max-sm:flex max-sm:flex-col max-sm:justify-center">
                  {' '}
                  <Image
                    src="/assets/blog.png"
                    width={500}
                    height={300}
                    className="w-[280px] h-[168px] "
                    alt=""
                  />
                  <p className="bg-[#5B2D90] text-[12px] rounded-xl w-[136px] text-center py-2   mb-2 text-white mt-5">
                    09 fevral 2023
                  </p>
                  <h3 className="text-[#212B36] text-[24px] font-bold">
                    Fiber optik
                  </h3>
                  <p className="text-[#94A2B3] text-[16px] font-normal">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/assets/packets/wifi2.png"
        width={300}
        height={300}
        className={`absolute right-[13rem]  ${
          visible ? 'top-[325rem]' : 'top-[301rem]'
        } max-sm:right-0 max-sm:top-[356rem] max-md:top-[400rem]  z-10 max-md:w-[130px] max-xxl:hidden`}
        alt=""
      />
      <div className="home-wrapper-8 w-full  pb-20 mx-auto relative  py-20  overflow-hidden">
        <div className="container max-w-6xl mx-auto flex justify-center">
          <div className="w-[752px] h-[337px] max-sm:w-[280px] max-sm:h-[280px] max-md:w-[450px] max-md:h-[300px] bg-[#5B2D90] p-10 max-md:px-2 max-md:py-5 rounded-3xl flex flex-col gap-10 max-sm:gap-3 max-md:gap-10  justify-center items-center">
            <h2 className="text-white text-[24px] font-bold max-md:text-[20px] max-md:text-center">
              KARYERANIZI BİZİMLƏ QURUN!
            </h2>
            <p className="text-white text-[16px] w-4/5 font-normal text-center max-md:text-[12px] max-sm:w-full overflow-hidden">
              Böyük və mehriban kollektivimizin üzvü olmaq üçün şansını sına!
              Vakansiyalar ilə aşağıdakı “Müraciət et” düyməsinə klikləməklə
              tanış ola bilərsiniz.
            </p>
            <Link href="/career" onClick={handleScrollUp}>
              <button className="w-[172px] h-[52px] max-md:w-[190px] max-md:h-[41px] bg-white text-[#5B2D90] rounded-full text-[16px] font-medium">
                Müraciət et
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default home;
