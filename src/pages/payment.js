import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useVisibleContext } from '../components/VisibleContext';
import Head from 'next/head';
import axios from 'axios';
import { base_url } from '../utils/base_url';
import { config } from '../utils/axiosconfig';
import Popup from 'reactjs-popup';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { useTranslation } from '../components/TranslationContext';
import Service from '../components/Service';

export async function getServerSideProps() {
  try {
    const Paymentresponse = await axios.get(`${base_url}/api/payments`, config);
    const Popupresponse = await axios.get(`${base_url}/api/popups`, config);
    const Settingresponse = await axios.get(`${base_url}/api/settings`, config);
    const ServiceCategoryresponse = await axios.get(
      `${base_url}/api/service-categories`,
      config
    );

    return {
      props: {
        PaymentData: Paymentresponse.data,
        PopupData: Popupresponse.data,
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

const payment = ({ PaymentData, SettingData, ServiceCategoryData }) => {
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const pageTitle = SettingData?.data
    .filter((item) => item.key === 'payment_page_meta_title')
    ?.map((item) => item.value);
  const pageDescription = SettingData?.data
    ?.filter((item) => item.key === 'payment_page_meta_description')
    .map((item) => item.value);

  const { translate, Language } = useTranslation();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {isLoading ? <LoadingOverlay /> : null}
      {visible ? <Service ServiceCategoryData={ServiceCategoryData} /> : null}
      <div className="max-xl:relative absolute max-xl:z-[-1] w-full  bg-[#F7F6FB] ">
        {' '}
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className=" h-[535px]  top-32 w-full  max-sm:h-[200px] max-md:h-[300px] max-xl:h-[300px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className="bg-[#F7F6FB]  w-full   mx-auto ">
        <div className="bg-[#F7F6FB] h-[450px] max-xxl:h-auto  ">
          {' '}
          <h3 className="h3  text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px] max-xxl:text-white ">
            {translate('Payment', Language)}
          </h3>
          <div className="absolute  z-[1] max-xl:z-[-1]  right-48 max-xxl:right-5 max-sm:top-20 max-xxl:top-40">
            {' '}
            <Image
              src="/assets/payment/payment.png"
              width={402}
              height={402}
              className="w-[402px] h-[402px]  mr-24 max-lg:mr-5  max-md:w-[152px]   max-md:h-[152px] max-xxl:w-[252px] max-xxl:h-[252px]"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#F7F6FB] w-full mt-0 max-xl:mt-0 max-xxl:mt-96">
          <div className=" w-[1110px] max-xxl:w-full mx-auto flex flex-col gap-10 justify-center items-center mt-20 max-xl:mt-0 ">
            <div className=" ">
              {' '}
              <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px]  mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center mt-20">
                {translate('Pay', Language)}
              </h3>
            </div>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-5 py-5">
              {PaymentData?.data
                .filter((item) => item.redirect_link !== null)
                .map((item) => {
                  return (
                    <div
                      className="border-[2px] ]border-[#D7D7D7] rounded-3xl w-[344px] h-[208px] max-xl:w-[138px] max-xl:h-[84px] bg-white flex justify-center items-center"
                      key={item.id}
                    >
                      <Link href={item.redirect_link}>
                        <Image
                          src="/assets/payment/hokumetodenisportali.png"
                          width={259}
                          height={107}
                          className="w-[259px] h-[107px] max-xl:w-[104px] max-xl:h-[42px]"
                          alt=""
                        />
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="relative w-[1110px] max-xxl:w-full mx-auto flex flex-col gap-10 justify-center items-center mt-10 ">
            <div className=" ">
              {' '}
              <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px]  mx-auto overflow-hidden pt-10 text-[#5B2D90] font-bold text-center">
                {translate('All_payment_methods', Language)}
              </h3>
            </div>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-5 py-5">
              {PaymentData?.data
                .filter((item) => item.redirect_link === null)
                .map((item) => {
                  return (
                    <div
                      className="border-[2px] border-[#D7D7D7] rounded-3xl w-[344px] h-[208px]  bg-white flex justify-center items-center max-xl:hidden"
                      key={item.id}
                    >
                      <Popup
                        trigger={
                          <Image
                            // aria-describedby={props.description}
                            suppressHydrationWarning={true}
                            width={292}
                            height={191}
                            layout="responsive"
                            src="/assets/payment/azercell.png"
                            className=" max-xl:w-[75px] max-xl:h-[24px]"
                            alt=""
                            key={item.id}
                          />
                        }
                        modal
                        nested
                        contentStyle={{
                          padding: '0px',
                          borderRadius: '50px',
                          borderColor: 'white',
                          width: '1110px',
                          height: '575px',
                          overflow: 'hidden',
                        }}
                      >
                        {(close) => (
                          <>
                            <Image
                              src="/assets/popup/x.png"
                              className="absolute right-5 top-5 w-[40px] h-[42px]"
                              alt=""
                              width={40}
                              height={42}
                              onClick={close}
                            />
                            {PaymentData?.data.map((payment) => {
                              return (
                                <div
                                  className="flex justify-center mt-32 gap-5"
                                  key={payment.id}
                                >
                                  <div className="flex justify-center items-center">
                                    {' '}
                                    <Image
                                      width={285}
                                      height={315}
                                      src={payment.image}
                                      className="rounded-3xl w-[285px] h-[315px]"
                                      alt=""
                                    />
                                  </div>
                                  <div className="w-[595px] h-[300px] leading-[115%] overflow-hidden">
                                    <h2 className="text-[#444444] text-[13.5px] font-bold mt-32">
                                      {payment.name}
                                    </h2>
                                    <p className="text-[12px] text-[#B4B4B4]">
                                      {payment.description}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </Popup>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default payment;
