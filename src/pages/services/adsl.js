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

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const { isOpen, toggleMenu } = useVisibleContext();
  const filteredData = TariffData.data.filter((item) => item.title === 'ipsum');

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
              {TariffData?.data
                ?.filter((item) => item.service?.title.az == 'Lorem ipsum')
                .map((item, index) => (
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
