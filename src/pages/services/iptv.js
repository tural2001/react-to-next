import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { TariffsPopup } from '../../components/TariffsPopup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import ServiceLayout from './layout';
import Head from 'next/head';
import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosconfig';
import axios from 'axios';
import { LoadingOverlay } from '../../components/LoadingOverlay';

export async function getServerSideProps() {
  try {
    const Tariffresponse = await axios.get(`${base_url}/api/tariffs`, config);
    return {
      props: {
        TariffData: Tariffresponse.data,
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

const iptv = ({ TariffData }) => {
  const [selectedItem, setSelectedItem] = useState('ferdi');
  const filteredData = TariffData.data.filter(
    (item) => item.title === 'Lorem ipsum'
  );

  const handleItemClick = (item) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const pageTitle = filteredData.map((item) => item.meta_title);
  const pageDescription = filteredData.map((item) => item.meta_description);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {isLoading ? <LoadingOverlay /> : null}
      <ServiceLayout>
        <div className="services-wrapper-3 bg-[#F7F6FB] max-lg:mt-10" id="iptv">
          <div className="max-w-[1010px] mx-auto py-10" id="">
            <div className="flex flex-col gap-5 justify-center items-center py-10">
              {' '}
              <h3 className="text-purple-900 text-[40px] font-bold leading-10 uppercase overflow-hidden">
                IP TV
              </h3>
              <p className="text-center max-w-4xl">
                IPTV Fiber optik internet vasitəsilə fəaliyyət göstərən yeni
                nəsil rəqəmsal televiziyadır. Xidmət vasitəsilə siz, 200+ yerli
                və əcnəbi telekanala baxa bilərsiniz.
              </p>
            </div>

            <div className="max-xl:hidden">
              <nav className="w-[1020px] relative h-[70px] rounded-[8px] text-[0px] border-b-[1px] flex justify-center  px-5 items-center gap-64 overflow-hidden">
                <a
                  href="#/"
                  className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                    selectedItem === 'ferdi' ? 'active' : ''
                  }`}
                  onClick={() => {
                    handleItemClick('ferdi', 'start-ferdi');
                  }}
                >
                  {selectedItem === 'ferdi' ? (
                    <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                      {' '}
                      <Image
                        src="/assets/services/speed.png"
                        width={25}
                        height={19}
                        className="h-[19px] white-img"
                        alt=""
                      />
                    </div>
                  ) : (
                    <Image
                      src="/assets/services/speed.png"
                      width={32}
                      height={25}
                      className="h-[25px]"
                      alt=""
                    />
                  )}{' '}
                  Fərdi
                </a>
                <a
                  href="#/"
                  className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                    selectedItem === 'biznes' ? 'active' : ''
                  }`}
                  onClick={() => {
                    handleItemClick('biznes', 'start-biznes');
                  }}
                >
                  {selectedItem === 'biznes' ? (
                    <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                      {' '}
                      <Image
                        src="/assets/services/biznes.png"
                        width={19}
                        height={19}
                        className="h-[19px] white-img"
                        alt=""
                      />
                    </div>
                  ) : (
                    <Image
                      src="/assets/services/biznes.png"
                      width={25}
                      height={25}
                      className="h-[25px]"
                      alt=""
                    />
                  )}{' '}
                  Biznes
                </a>
                <div className="animation2 start-ferdi"></div>
              </nav>
            </div>
            <div className="hidden  max-xl:block">
              <nav className="flex gap-10 justify-center mx-5">
                <a
                  href="#/"
                  className={`text-[12px] uppercase     leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                    selectedItem === 'ferdi'
                      ? 'border-[#5B2D90]'
                      : 'border-[#C6D0DD]'
                  }`}
                  onClick={() => {
                    handleItemClick('ferdi', 'start-ferdi');
                  }}
                >
                  {selectedItem === 'ferdi' ? (
                    <Image
                      src="/assets/services/speed.png"
                      width={13}
                      height={13}
                      className="h-[13px] white-img"
                      alt=""
                    />
                  ) : (
                    <Image
                      src="/assets/services/speed.png"
                      width={15}
                      height={15}
                      className="h-[15px]"
                      alt=""
                    />
                  )}{' '}
                  Fərdi
                </a>
                <a
                  href="#/"
                  className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                    selectedItem === 'biznes'
                      ? 'border-[#5B2D90]'
                      : 'border-[#C6D0DD]'
                  }`}
                  onClick={() => {
                    handleItemClick('biznes', 'start-biznes');
                  }}
                >
                  {selectedItem === 'biznes' ? (
                    <Image
                      src="/assets/services/biznes.png"
                      width={13}
                      height={13}
                      className="h-[13px]"
                      alt=""
                    />
                  ) : (
                    <Image
                      src="/assets/services/biznes.png"
                      width={15}
                      height={15}
                      className="h-[15px]"
                      alt=""
                    />
                  )}{' '}
                  Biznes
                </a>
              </nav>
            </div>
            {selectedItem === 'ferdi' && (
              <>
                <div className="flex  justify-center items-center gap-5 mt-10 max-xl:hidden">
                  {TariffData?.data
                    ?.filter((item) => item.type == 1)
                    .map((tariff) => (
                      <div
                        className="h-[500px] w-[210px] p-0 op"
                        key={tariff.id}
                      >
                        <div
                          key={tariff.id}
                          className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0  mt-5  ml-1 ${
                            tariff.id === 'key' ? 'outline-red' : ''
                          }`}
                        >
                          <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                            {/* <Image
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            alt=""
                          /> */}
                          </div>
                          <p className="text-[20px] font-bold text-white">
                            {tariff.name}
                          </p>
                          <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                          <p className="text-white text-[24px] font-bold">
                            {tariff.speed} Mb/s
                          </p>
                          <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                            <Image
                              src="/assets/packets/tv2.png"
                              width={10}
                              height={10}
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
                            {tariff.description}
                          </p>
                          <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                          <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                            {tariff.price}{' '}
                            <Image
                              src="/assets/packets/azn.png"
                              width={20}
                              height={20}
                              className="h-5"
                              alt=""
                            />
                          </p>
                          <TariffsPopup />
                        </div>
                        <div className="flex justify-center">
                          <div
                            className={`${
                              tariff.id === 'pro' ? 'flag-services' : 'hidden'
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
                    spaceBetween={230}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper2"
                  >
                    {TariffData?.data
                      ?.filter((item) => item.type == 1)
                      .map((item) => (
                        <SwiperSlide key={item.id}>
                          {' '}
                          <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                            <div
                              key={item.id}
                              className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                                item.id === 'pro' ? 'outline-red' : ''
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
                                  width={10}
                                  height={10}
                                  alt=""
                                />{' '}
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
                                  item.id === 'pro' ? 'flag-services' : 'hidden'
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
              </>
            )}
            {selectedItem === 'biznes' && (
              <>
                <div className="flex  justify-center items-center gap-5 mt-10 max-xl:hidden">
                  {TariffData?.data
                    ?.filter((item) => item.type == 2)
                    .map((tariff) => (
                      <div
                        className="h-[500px] w-[210px] p-0 op"
                        key={tariff.id}
                      >
                        <div
                          key={tariff.id}
                          className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0  mt-5  ml-1 ${
                            tariff.id === 'key' ? 'outline-red' : ''
                          }`}
                        >
                          <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                            {/* <Image
                              src={item.image}
                              width={item.width}
                              height={item.height}
                              alt=""
                            /> */}
                          </div>
                          <p className="text-[20px] font-bold text-white">
                            {tariff.name}
                          </p>
                          <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                          <p className="text-white text-[24px] font-bold">
                            {tariff.speed} Mb/s
                          </p>
                          <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                            <Image
                              src="/assets/packets/tv2.png"
                              width={10}
                              height={10}
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
                            {tariff.description}
                          </p>
                          <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                          <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                            {tariff.price}{' '}
                            <Image
                              src="/assets/packets/azn.png"
                              width={20}
                              height={20}
                              className="h-5"
                              alt=""
                            />
                          </p>
                          <TariffsPopup />
                        </div>
                        <div className="flex justify-center">
                          <div
                            className={`${
                              tariff.id === 'pro' ? 'flag-services' : 'hidden'
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
                    spaceBetween={230}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper2"
                  >
                    {TariffData?.data
                      ?.filter((item) => item.type == 2)
                      .map((item) => (
                        <SwiperSlide key={item.id}>
                          {' '}
                          <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                            <div
                              key={item.id}
                              className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                                item.id === 'pro' ? 'outline-red' : ''
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
                                  width={10}
                                  height={10}
                                  alt=""
                                />{' '}
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
                                  item.id === 'pro' ? 'flag-services' : 'hidden'
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
              </>
            )}
            {selectedItem !== 'biznes' && (
              <>
                <div className="">
                  <h3 className="text-center py-3 text-[#757575] text-[16px] max-xl:text-[12px] overflow-hidden">
                    Kanallar Olkeler uzre
                  </h3>
                  <div className="flex w-full mx-auto justify-center items-center rounded-lg  ">
                    <table className="w-2/4  max-xl:w-border-[2px] border-[#C4C4C4]  rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-4 max-sm:px-3 max-sm:py-0"
                          >
                            Ölkə
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 max-sm:px-3 max-sm:py-0"
                          >
                            TV sayı
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 max-sm:px-3 max-sm:py-0"
                          >
                            Kanallar
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 max-sm:px-3 max-sm:py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Azərbaycan
                          </th>
                          <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">
                            21
                          </td>
                          <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">
                            Baxmaq
                          </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 max-sm:px-3 max-sm:py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Türkiyə
                          </th>
                          <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">
                            37
                          </td>
                          <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">
                            Baxmaq
                          </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                          <th
                            scope="row"
                            className="px-6 py-4 max-sm:px-3 max-sm:py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Rusiya
                          </th>
                          <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">
                            96
                          </td>
                          <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">
                            Baxmaq
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[16px] text-[#757575] max-xl:text-[12px] font-medium text-center py-3">
                    DAHA ƏTRAFLI MƏLUMAT ÜÇÜN AZERONLINE IPTV BÖLÜMÜNƏ KEÇİD
                    EDİN
                  </p>
                </div>
                <div className="">
                  <h3 className="text-black font-medium text-[24px] max-xl:text-[20px] text-center mt-20">
                    Yerli və əcnəbi telekanallar xidmətinizdə
                  </h3>
                  <div className="mt-5 max-xl:mx-10">
                    <Image
                      src="/assets/services/telekanallar.png"
                      width={500}
                      height={300}
                      layout="responsive"
                      className="max-xl:hidden"
                      alt=""
                    />
                    <Image
                      src="/assets/services/smtelekanallar.png"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="hidden max-xl:block"
                      alt=""
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default iptv;
