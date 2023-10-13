import React, { use, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TariffsPopup } from '../../components/TariffsPopup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import axios from 'axios';

import { base_url } from '../../utils/base_url';

import { config } from '../../utils/axiosconfig';
import { useTranslation } from '../../components/TranslationContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useVisibleContext } from '../../components/VisibleContext';
import Popup from 'reactjs-popup';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export async function getServerSideProps({ query }) {
  try {
    const { id } = query;
    const Tariffresponse = await axios.get(
      `${base_url}/api/tariffs?channels=true`,
      config
    );
    const ServiceCatageoryresponse = await axios.get(
      `${base_url}/api/service-categories`,
      config
    );
    const Serviceresponse = await axios.get(
      `${base_url}/api/services?channels=true`,
      config
    );
    const Countryresponse = await axios.get(
      `${base_url}/api/countries`,
      config
    );
    const Partneresponse = await axios.get(`${base_url}/api/partners`, config);
    const Channelresponse = await axios.get(`${base_url}/api/channels`, config);
    return {
      props: {
        TariffData: Tariffresponse.data,
        ServiceCategoryData: ServiceCatageoryresponse.data,
        ServiceData: Serviceresponse.data,
        PartnerData: Partneresponse.data,
        ChannelData: Channelresponse.data,
        CountryData: Countryresponse.data,
        id: id,
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

const service = ({
  TariffData,
  ServiceCategoryData,
  ServiceData,
  PartnerData,
  ChannelData,
  CountryData,
  id,
}) => {
  const CombineData = ServiceData?.data?.filter((item) => item.id == [id])[0]
    ?.tariffs;
  const CountryyData = CombineData?.map((item) => ({
    channels: item.channels,
    countries: item.countries,
  }));

  const groupedData = {};
  CountryyData?.forEach((item) => {
    const countryID = item?.countries[0]?.id;
    if (!groupedData[countryID]) {
      groupedData[countryID] = {
        channels: [],
        countries: [],
      };
    }
    groupedData[countryID].channels = groupedData[countryID].channels.concat(
      item.channels
    );
    groupedData[countryID].countries.push(item.countries[0]);
  });

  const mergedData = Object.values(groupedData);

  console.log(mergedData);

  console.log(CombineData);

  const countryChannelsMap = {};

  CountryyData.forEach((item) => {
    const countryName = item.countries[0]?.name;

    if (countryName !== undefined) {
      if (!countryChannelsMap[countryName]) {
        countryChannelsMap[countryName] = [];
      }

      countryChannelsMap[countryName].push(...item.channels);
    }
  });

  console.log(countryChannelsMap);
  const [selectedItem1, setSelectedItem1] = useState(`/services/${id}`);
  const { visible, setVisible } = useVisibleContext();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const router = useRouter();
  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleItemClick1 = (item) => {
    if (selectedItem1 !== item) {
      setSelectedItem1(item);
    }
  };

  const handleLinkClick1 = (href) => {
    if (selectedItem1 !== href) {
      setIsNavigating(true);
      setSelectedItem1(href);

      router.push(href);
    }
  };

  useEffect(() => {
    setSelectedItem1(`/services/${id}`);
  }, []);

  const [selectedItem, setSelectedItem] = useState('ferdi');
  console.log(selectedItem);

  const handleItemClick = (item) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
    }
  };

  const { translate, Language } = useTranslation();
  const { isOpen, toggleMenu } = useVisibleContext();

  const [markerStyle, setMarkerStyle] = useState({});
  useEffect(() => {
    const initialHref = `/services/${id}`;
    const initialLink = document.querySelector(`nav a[href="${initialHref}"]`);

    if (initialLink) {
      const left = `${initialLink.offsetLeft}px`;
      const width = `${initialLink.offsetWidth}px`;
      setMarkerStyle({ left, width });
    }
  }, [id]);

  function indicator(e) {
    setMarkerStyle({
      left: `${e.target.offsetLeft}px`,
      width: `${e.target.offsetWidth}px`,
    });
  }
  const handleLinkClick = (e) => {
    indicator(e);
  };
  console.log(ServiceData);
  return (
    <>
      {visible && (
        <div className="home-wrapper-1 container max-w-5xl max-sm:hidden py-10 mx-auto relative overflow-hidden max-xl:hidden">
          <div className="grid grid-cols-3 justify-items-center">
            {ServiceCategoryData?.data?.map((item, index) => {
              console.log(item);
              return (
                <div className="">
                  <div className="bg-[#DCC5F6] w-[102px] h-[102px] rounded-3xl flex items-center mx-auto">
                    <Image
                      src={item.icon}
                      width={500}
                      height={300}
                      className="w-[56px] h-[56px] mx-auto"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="flex justify-center">
                      <h3 className=" font-medium text-[28px] py-4  tracking-[0.5px]">
                        {item.name}
                      </h3>
                    </div>
                    <ul className="flex flex-col justify-center items-center gap-2 text-[#909090]  font-normal ">
                      {item.services?.map((service, serviceIndex) => {
                        return (
                          <li key={serviceIndex}>
                            <Link href={`/services/${service.id}`}>
                              {service.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="services-wrapper-1 max-w-[1100px] mx-auto pt-10 max-xl:pt-5">
        <h3 className="text-purple-900 text-[40px] text-center font-bold leading-10 pb-10 max-xl:pb-5 uppercase max-lg:text-[20px] max-xl:text-[30px]">
          {translate('Services', Language)}
        </h3>
        <div className="services-header mx-5 max-xl:hidden">
          <nav
            className={`text-[10px] uppercase relative border-b-2  leading-[50px] flex gap-1 justify-center items-center`}
          >
            {ServiceCategoryData?.data?.map((item) => {
              return (
                <>
                  {item?.services?.map((service) => {
                    return (
                      <>
                        <div id="marker" style={markerStyle}></div>
                        {selectedItem1 === `/services/${service.id}` ? (
                          <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                            {' '}
                            <Image
                              src={service.icon}
                              width={25}
                              height={19}
                              className="h-[19px] w-[25px] white-img"
                              alt=""
                            />
                          </div>
                        ) : (
                          <div>
                            <Image
                              src={service.icon}
                              className="h-[25px] w-[32px]"
                              width={32}
                              height={25}
                              alt=""
                            />
                          </div>
                        )}{' '}
                        <Link
                          href={`/services/${service.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleItemClick1(`/services/${service.id}`);
                            handleLinkClick1(`/services/${service.id}`);
                            handleLinkClick(e);
                          }}
                        >
                          {service.title}
                        </Link>
                      </>
                    );
                  })}
                </>
              );
            })}
          </nav>
        </div>
        <div className="services-header   hidden max-xl:block ">
          <nav className="grid grid-cols-2   max-sm:gap-3 gap-5 ">
            {ServiceCategoryData?.data?.map((item) => {
              return (
                <>
                  {item?.services?.map((service) => {
                    return (
                      <>
                        <Link
                          href={`/services/${service.id}`}
                          className={`text-[12px] uppercase  ${
                            isOpen ? 'z-[-1]' : 'z-0'
                          }  leading-[30px] flex gap-2 max-sm:gap-1 justify-start pl-2  items-center border  ${
                            selectedItem1 === `/services/${service.id}`
                              ? 'border-[#5b2d90]'
                              : 'border-[#C6D0DD]'
                          } w-10/12 h-[33px] rounded-lg `}
                          onClick={(e) => {
                            e.preventDefault();
                            handleItemClick1(`/services/${service.id}`);
                            handleLinkClick1(`/services/${service.id}`);
                            handleLinkClick(e);
                          }}
                        >
                          {selectedItem1 === `/services/${service.id}` ? (
                            <Image
                              src="/assets/services/speed.png"
                              width={20}
                              height={15}
                              className="h-[15px] "
                              alt=""
                            />
                          ) : (
                            <Image
                              src="/assets/services/speed.png"
                              width={20}
                              height={15}
                              className="h-[15px] "
                              alt=""
                            />
                          )}{' '}
                          {service.title}
                        </Link>
                      </>
                    );
                  })}
                </>
              );
            })}
          </nav>
        </div>
      </div>

      {ServiceData?.data
        ?.filter((item) => {
          const itemId = item.id;
          const queryId = parseInt(router.query.id);
          return itemId === queryId && router.pathname.includes('/services/');
        })
        .map((service) => {
          console.log(service);
          return (
            <>
              {}
              <div className="services-wrapper-1 max-w-[1100px] mx-auto pt-20 max-xl:pt-10 ">
                <div
                  className="grid grid-cols-3 max-xl:grid-cols-2 py-20 max-xl:mx-5 gap-10"
                  id="fiber"
                >
                  {service.icon !== '' ? (
                    <div className="col-span-1 max-xl:col-span-2 max-xl:flex max-xl:justify-center">
                      <div className="w-[347px] h-[427px] max-xl:hidden">
                        <Image
                          src={service.icon}
                          width={500}
                          height={300}
                          layout="responsive"
                          className="max-xl:hidden"
                          alt=""
                        />
                      </div>

                      <Image
                        src="/assets/services/smfiberoptik.png"
                        width={100}
                        height={100}
                        layout="responsive"
                        className="hidden max-xl:block max-xl:mx-5"
                        alt=""
                      />
                    </div>
                  ) : null}

                  <div
                    className={` ${
                      service.icon !== ''
                        ? 'col-span-2'
                        : 'col-span-3 items-center '
                    }  flex flex-col justify-center  gap-5 max-xl:mx-5 `}
                  >
                    <h3 className="text-purple-900 text-[40px] font-bold leading-10 max-md:text-[20px] max-xl:text-[30px] uppercase overflow-hidden">
                      {service.title}
                    </h3>{' '}
                    <p className="text-[#757575] text-[16px] max-xl:text-[12px] font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
              {service?.tariffs.length !== 0 && service.adsl === false ? (
                <div className="services-wrapper-2 max-w-[1100px] mx-auto py-5">
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
                        {selectedItem == 'ferdi' ? (
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
                        {translate('Individual', Language)}
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
                        {translate('Business', Language)}
                      </a>
                      <div className="animation2 start-ferdi"></div>
                    </nav>
                  </div>
                  <div className="hidden max-xl:block">
                    <nav className=" flex  justify-center mx-2">
                      <a
                        href="#/"
                        className={`text-[12px] uppercase relative leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90]  h-[33px] rounded-lg ${
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
                            className="h-[13px]"
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
                        {translate('Individual', Language)}
                      </a>
                      <a
                        href="#/"
                        className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90]  h-[33px] rounded-lg ${
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
                        {translate('Business', Language)}
                      </a>
                    </nav>
                  </div>
                  {selectedItem === 'ferdi' && (
                    <>
                      <div className="grid grid-cols-5 justify-items-center gap-5 mt-10 max-xl:hidden">
                        {ServiceData?.data
                          ?.filter((item) => {
                            const itemId = item.id;
                            const queryId = parseInt(router.query.id);
                            return (
                              itemId === queryId &&
                              router.pathname.includes('/services/')
                            );
                          })
                          .map((filtered) =>
                            filtered?.tariffs
                              ?.filter((item) => item.type == 1)
                              .map((tariff) => {
                                console.log(tariff);
                                return (
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
                                      <Popup
                                        trigger={
                                          <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                                            {translate('More', Language)}
                                          </button>
                                        }
                                        modal
                                        nested
                                        contentStyle={{
                                          padding: '0px',
                                          borderRadius: '50px',
                                          borderColor: 'white',
                                          width: '759px',
                                          height: '392px',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        {(close) => (
                                          <>
                                            <Image
                                              src="/assets/popup/x.png"
                                              width={40}
                                              height={42}
                                              className="absolute right-5 top-5 w-[40px] h-[42px]"
                                              alt=""
                                              onClick={close}
                                            />
                                            <div className="w-[657px] mx-auto flex justify-center mt-20 gap-5">
                                              <p className="text-16px leading-6">
                                                {tariff.description}
                                              </p>
                                            </div>
                                          </>
                                        )}
                                      </Popup>
                                    </div>
                                    <div className="flex justify-center">
                                      <div
                                        className={`${
                                          tariff.id === 'pro'
                                            ? 'flag-services'
                                            : 'hidden'
                                        }   mt-0 text-[8px] text-center font-medium justify-center`}
                                      >
                                        {translate('Preferred', Language)}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                          )}
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
                          {ServiceData?.data
                            ?.filter((item) => {
                              const itemId = item.id;
                              const queryId = parseInt(router.query.id);

                              return (
                                itemId === queryId &&
                                router.pathname.includes('/services/')
                              );
                            })
                            .map((filtered) =>
                              filtered?.tariffs
                                ?.filter((item) => item.type == 1)
                                .map((tariff) => {
                                  return (
                                    <SwiperSlide key={tariff.id}>
                                      {' '}
                                      <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                                        <div
                                          key={tariff.id}
                                          className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                                            tariff.id === 'key'
                                              ? 'outline-red'
                                              : ''
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
                                          <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                                            {translate('More', Language)}
                                          </button>
                                        </div>
                                        <div className="flex justify-center">
                                          <div
                                            className={`${
                                              tariff.id === 'key'
                                                ? 'flag-services'
                                                : 'hidden'
                                            }   mt-0 text-[8px] text-center font-medium justify-center`}
                                          >
                                            {translate('Preferred', Language)}
                                          </div>
                                        </div>
                                      </div>
                                    </SwiperSlide>
                                  );
                                })
                            )}
                        </Swiper>
                      </div>
                    </>
                  )}
                  {selectedItem === 'biznes' && (
                    <>
                      <div className="grid grid-cols-5  justify-items-center  gap-5    mt-10 max-xl:hidden">
                        {ServiceData?.data
                          ?.filter((item) => {
                            const itemId = item.id;
                            const queryId = parseInt(router.query.id);

                            return (
                              itemId === queryId &&
                              router.pathname.includes('/services/')
                            );
                          })
                          .map((filtered) =>
                            filtered?.tariffs
                              ?.filter((item) => item.type == 2)
                              .map((tariff) => {
                                return (
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
                                      <Popup
                                        trigger={
                                          <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                                            {translate('More', Language)}
                                          </button>
                                        }
                                        modal
                                        nested
                                        contentStyle={{
                                          padding: '0px',
                                          borderRadius: '50px',
                                          borderColor: 'white',
                                          width: '759px',
                                          height: '392px',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        {(close) => (
                                          <>
                                            <Image
                                              src="/assets/popup/x.png"
                                              width={40}
                                              height={42}
                                              className="absolute right-5 top-5 w-[40px] h-[42px]"
                                              alt=""
                                              onClick={close}
                                            />
                                            <div className="w-[657px] mx-auto flex justify-center mt-20 gap-5">
                                              <p className="text-16px leading-6">
                                                {translate(
                                                  'Tariff_pop',
                                                  Language
                                                )}
                                              </p>
                                            </div>
                                          </>
                                        )}
                                      </Popup>
                                    </div>
                                    <div className="flex justify-center">
                                      <div
                                        className={`${
                                          tariff.id === 'pro'
                                            ? 'flag-services'
                                            : 'hidden'
                                        }   mt-0 text-[8px] text-center font-medium justify-center`}
                                      >
                                        Üstünlük verilən
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                          )}
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
                                      {translate('More', Language)}
                                    </button>
                                  </div>
                                  <div className="flex justify-center">
                                    <div
                                      className={`${
                                        item.id === 'pro'
                                          ? 'flag-services'
                                          : 'hidden'
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
                </div>
              ) : (
                ''
              )}

              {service?.tariffs.length !== 0 && service.adsl === true ? (
                <>
                  <div className="services-wrapper-2 max-w-[1100px] mx-auto py-5">
                    <div className="grid grid-cols-5 justify-items-center gap-5 mt-10 max-xl:hidden">
                      {ServiceData?.data
                        ?.filter((item) => {
                          const itemId = item.id;
                          const queryId = parseInt(router.query.id);
                          return (
                            itemId === queryId &&
                            router.pathname.includes('/services/')
                          );
                        })
                        .map((filtered) =>
                          filtered?.tariffs
                            ?.filter((item) => item.type == 1)
                            .map((tariff) => {
                              console.log(tariff);
                              return (
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
                                    <Popup
                                      trigger={
                                        <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                                          {translate('More', Language)}
                                        </button>
                                      }
                                      modal
                                      nested
                                      contentStyle={{
                                        padding: '0px',
                                        borderRadius: '50px',
                                        borderColor: 'white',
                                        width: '759px',
                                        height: '392px',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      {(close) => (
                                        <>
                                          <Image
                                            src="/assets/popup/x.png"
                                            width={40}
                                            height={42}
                                            className="absolute right-5 top-5 w-[40px] h-[42px]"
                                            alt=""
                                            onClick={close}
                                          />
                                          <div className="w-[657px] mx-auto flex justify-center mt-20 gap-5">
                                            <p className="text-16px leading-6">
                                              {tariff.description}
                                            </p>
                                          </div>
                                        </>
                                      )}
                                    </Popup>
                                  </div>
                                  <div className="flex justify-center">
                                    <div
                                      className={`${
                                        tariff.id === 'pro'
                                          ? 'flag-services'
                                          : 'hidden'
                                      }   mt-0 text-[8px] text-center font-medium justify-center`}
                                    >
                                      {translate('Preferred', Language)}
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                        )}
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
                        {ServiceData?.data
                          ?.filter((item) => {
                            const itemId = item.id;
                            const queryId = parseInt(router.query.id);

                            return (
                              itemId === queryId &&
                              router.pathname.includes('/services/')
                            );
                          })
                          .map((filtered) =>
                            filtered?.tariffs
                              ?.filter((item) => item.type == 1)
                              .map((tariff) => {
                                return (
                                  <SwiperSlide key={tariff.id}>
                                    {' '}
                                    <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                                      <div
                                        key={tariff.id}
                                        className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                                          tariff.id === 'key'
                                            ? 'outline-red'
                                            : ''
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
                                        <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                                          {translate('More', Language)}
                                        </button>
                                      </div>
                                      <div className="flex justify-center">
                                        <div
                                          className={`${
                                            tariff.id === 'key'
                                              ? 'flag-services'
                                              : 'hidden'
                                          }   mt-0 text-[8px] text-center font-medium justify-center`}
                                        >
                                          {translate('Preferred', Language)}
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                );
                              })
                          )}
                      </Swiper>
                    </div>
                  </div>
                </>
              ) : null}

              {service?.partner === true ? (
                <div className="w-6xl">
                  <h3 className="text-center text-purple-900 text-[40px] font-bold leading-10 uppercase py-5  max-md:text-[20px] max-xl:text-[30px]">
                    {translate('Partners', Language)}
                  </h3>{' '}
                  <div className="mt-5 w-10/12 mx-auto max-xl:grid max-xl:grid-cols-3 flex flex-wrap justify-center ">
                    {PartnerData.data?.map((item) => {
                      console.log(item);
                      return (
                        <>
                          <div className="">
                            <Image
                              src="/assets/show.png"
                              width={200}
                              height={200}
                              layout="responsive"
                              className=""
                              alt=""
                            />
                            <Image
                              src="/assets/aztv.png"
                              width={200}
                              height={200}
                              layout="responsive"
                              className=""
                              alt=""
                            />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ''
              )}

              {service?.tariffs?.channel ? (
                <>
                  <div className="">
                    <h3 className="text-center py-3 text-[#757575] text-[16px] max-xl:text-[12px] overflow-hidden">
                      {translate('Channel_country', Language)}
                    </h3>

                    <div className="relative w-3/6  mx-auto border-[2px] border-[#C4C4C4] overflow-x-auto shadow-md  sm:rounded-lg">
                      <table className="w-full text-sm text-center text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-4 max-sm:px-3 max-sm:py-0"
                            >
                              {translate('Country', Language)}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 max-sm:px-3 max-sm:py-0"
                            >
                              {translate('TV_number', Language)}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 max-sm:px-3 max-sm:py-0"
                            >
                              {translate('Channels', Language)}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.keys(countryChannelsMap).map(
                            (countryName, index) => {
                              return (
                                <tr
                                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                  key={index}
                                >
                                  <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    {countryName}
                                  </th>
                                  <td className="px-6 py-4">
                                    {' '}
                                    {countryChannelsMap[countryName]?.length}
                                  </td>
                                  <td className="px-6 py-4">
                                    {' '}
                                    <Popup
                                      trigger={
                                        <button className="">
                                          {' '}
                                          {translate('Look', Language)}
                                        </button>
                                      }
                                      modal
                                      nested
                                      contentStyle={{
                                        padding: '0px',
                                        borderRadius: '50px',
                                        borderColor: 'white',
                                        width: '700px',
                                        height: '300px',

                                        overflow: 'scroll',
                                      }}
                                    >
                                      {(close) => (
                                        <>
                                          <Image
                                            src="/assets/popup/x.png"
                                            width={40}
                                            height={42}
                                            className="absolute right-5 top-5 w-[40px] h-[42px]"
                                            alt=""
                                            onClick={close}
                                          />

                                          <div className="mt-10 w-10/12 mx-auto  flex flex-wrap justify-center items-center ">
                                            {countryChannelsMap[
                                              countryName
                                            ].map((item) => {
                                              console.log(item);
                                              return (
                                                <div className="" key={item}>
                                                  <Image
                                                    src="/assets/aztv.png"
                                                    width={100}
                                                    height={100}
                                                    layout=""
                                                    className=""
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                            })}
                                          </div>
                                        </>
                                      )}
                                    </Popup>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[16px] mt-10 text-[#757575] max-xl:text-[12px] font-medium text-center py-3">
                      {translate('Ip', Language)}
                    </p>
                  </div>
                  <div className="w-6xl">
                    <h3 className="text-center  text-[24px] font-bold leading-10 uppercase py-5 overflow-hidden  max-xl:text-[16px]">
                      {translate('Ip_channel', Language)}
                    </h3>{' '}
                    <div className="mt-5 w-10/12 mx-auto max-xl:grid max-xl:grid-cols-3 flex flex-wrap justify-center ">
                      {PartnerData.data?.map((item) => {
                        console.log(item);
                        return (
                          <>
                            <div className="">
                              <Image
                                src={item.icon}
                                width={200}
                                height={200}
                                layout="responsive"
                                className=""
                                alt=""
                              />
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                ''
              )}
            </>
          );
        })}
    </>
  );
};

export default service;
