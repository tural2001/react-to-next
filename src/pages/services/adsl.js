import React from 'react';
import ServiceLayout from './layout';
import { TariffsPopup } from '../../components/TariffsPopup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Head from 'next/head';
import { useVisibleContext } from '../../components/VisibleContext';
import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosconfig';
import axios from 'axios';

export async function getServerSideProps() {
  try {
    const Tariffresponse = await axios.get(`${base_url}/api/tariffs`, config);
    return {
      props: {
        TariffData: Tariffresponse.data,
      },
    };
  } catch (error) {
    // Handle errors appropriately
    console.error(error);
    return {
      props: {
        error: 'An error occurred while fetching data',
      },
    };
  }
}

const adsl = ({ TariffData }) => {
  console.log(TariffData);
  const { isOpen, toggleMenu } = useVisibleContext();

  const data5 = [
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
      id: 'pro',
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
  const pageTitle = 'Your Services Post Title';
  const pageDescription = 'Description of your services post.';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <ServiceLayout>
        <div
          className="services-wrapper-6 max-w-[1087px] mx-auto pt-20"
          id="adsl"
        >
          <h3 className="text-center text-purple-900 text-[40px] font-bold leading-10  max-xl:text-[30px] uppercase">
            ADSL
          </h3>
          <div className="flex justify-center gap-3  items-center  mt-10 max-xl:hidden">
            {TariffData?.data
              ?.filter((item) => item.service?.title.az == 'Lorem ipsum')
              .map((tariff, index) => (
                <div className="h-[500px] w-[210px] p-0 op" key={tariff.id}>
                  <div
                    key={tariff.id}
                    className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3   mt-5  ml-1 ${
                      tariff.id === 'pro' ? 'outline-red' : ''
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
                    <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 ">
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
          <div className={`swiper ${isOpen ? 'open' : ''}`}>
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
              {data5.map((item, index) => (
                <SwiperSlide key={index}>
                  {' '}
                  <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0">
                    <div
                      key={index}
                      className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center  gap-3 ${
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
                      <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 ">
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
        </div>
      </ServiceLayout>
    </>
  );
};

export default adsl;
