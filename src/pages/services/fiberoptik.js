import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import ServiceLayout from './layout';
import { TariffsPopup } from '../../components/TariffsPopup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Head from 'next/head';
import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosconfig';
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

const fiberoptik = ({ TariffData }) => {
  const filteredData = TariffData.data.filter((item) => item.title === 'ipsum');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const [selectedItem, setSelectedItem] = useState('ferdi');

  const handleItemClick = (item, position) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
    }
  };

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
        <div className="services-wrapper-1 max-w-[1100px] mx-auto pt-20 max-xl:pt-10">
          <div
            className="grid grid-cols-3 max-xl:grid-cols-2 py-20 max-xl:mx-5 gap-10"
            id="fiber"
          >
            <div className="col-span-1 max-xl:col-span-2">
              <Image
                src="/assets/services/fiberoptik.png"
                width={500}
                height={300}
                layout="responsive"
                className="max-xl:hidden"
                alt=""
              />
              <Image
                src="/assets/services/smfiberoptik.png"
                width={100}
                height={100}
                layout="responsive"
                className="hidden max-xl:block"
                alt=""
              />
            </div>
            <div className="col-span-2 flex flex-col justify-center gap-5">
              <h3 className="text-purple-900 text-[40px] font-bold leading-10 max-md:text-[20px] max-xl:text-[30px] uppercase overflow-hidden">
                Fiber optik
              </h3>{' '}
              <p className="text-[#757575] text-[16px] max-xl:text-[12px] font-medium">
                Ölkənin ən qabaqcıl İnternet provayderlərindən biri olan
                Azeronline ölkə üzrə bir çox ərazilərdə GPON texnologiyası ilə
                internet xidməti təqdim edir. Təqdim edilən xidmət üzrə mövcud
                olan tariflər aşağıda göstərilmişdir. Bakı və Abşeron ərazisi
                üzrə seçim Silver tarifindən başlayır.
                <br /> <br />
                Ətraflı məlumat və şərtlər ilə tariflər bölməsindən tanış ola,
                əhatə dairəmizdə olub olmadığınızı isə əsas səhifədən yoxlaya
                bilərsiniz.
              </p>
            </div>
          </div>
        </div>
        <div className="services-wrapper-2 max-w-[1100px] mx-auto py-10">
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
                    height={19}
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
          <div className="hidden max-xl:block">
            <nav className=" flex gap-10 justify-center mx-5">
              <a
                href="#/"
                className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
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
              <div className="grid grid-cols-5 justify-items-center gap-5 mt-10 max-xl:hidden">
                {TariffData?.data
                  ?.filter((item) => item.type == 1)
                  .map((tariff) => (
                    <div className="h-[500px] w-[210px] p-0 op" key={tariff.id}>
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
              <div className="flex  gap-5  justify-center  mt-10 max-xl:hidden">
                {TariffData?.data
                  ?.filter((item) => item.type == 2)
                  .map((tariff) => (
                    <div className="h-[500px] w-[210px] p-0 op" key={tariff.id}>
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
        </div>
      </ServiceLayout>
    </>
  );
};

export default fiberoptik;
