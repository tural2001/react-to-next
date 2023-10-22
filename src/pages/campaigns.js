import React, { useEffect, useState } from 'react';
import { useVisibleContext } from '../components/VisibleContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { base_url } from '../utils/base_url';
import { config } from '../utils/axiosconfig';
import axios from 'axios';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { useTranslation } from '../components/TranslationContext';
import Service from '../components/Service';

export async function getServerSideProps() {
  try {
    const Campaignsresponse = await axios.get(
      `${base_url}/api/campaigns?inactive=true`,
      config
    );
    const Settingresponse = await axios.get(`${base_url}/api/settings`, config);
    const ServiceCategoryresponse = await axios.get(
      `${base_url}/api/service-categories`,
      config
    );
    return {
      props: {
        CampaignsData: Campaignsresponse.data,
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
const Campaigns = ({ CampaignsData, SettingData, ServiceCategoryData }) => {
  console.log(CampaignsData);
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();
  const { isOpen, toggleMenu } = useVisibleContext();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const pageTitle = SettingData?.data
    .filter((item) => item.key === 'campaign_page_meta_title')
    ?.map((item) => item.value);
  const pageDescription = SettingData?.data
    ?.filter((item) => item.key === 'campaign_page_meta_description')
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

      <div className="max-xl:relative  absolute max-xl:z-[-1] w-full  bg-[#F7F6FB] pb-10">
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className="h-[535px]  top-32 w-full  max-sm:h-[150px] max-md:h-[300px] max-xl:h-[300px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className="bg-[#F7F6FB]  h-[450px] max-xl:h-0">
        <h3 className="h3 text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px] max-xxl:text-white ">
          {translate('Campaigns', Language)}
        </h3>
        <div className="absolute z-[1] max-xl:z-[-1]  right-48  max-sm:top-20 max-xl:right-5  max-xl:top-14 max-xxl:right-20  max-xxl:top-64">
          <Image
            src="/assets/campaigns/mikrafon.png"
            width={581}
            height={651}
            className="w-[551px] h-[631px] max-sm:w-[155px] max-sm:h-[175px]  max-xl:w-[350px] max-xl:h-[350px]  max-xxl:w-[450px] max-xxl:h-[450px]"
            alt=""
          />
        </div>
      </div>
      {CampaignsData?.data?.length == 0 && (
        <div className=" min-h-[450px]"></div>
      )}
      {CampaignsData?.data.map((campaign, index) => {
        if (index % 2 === 0) {
          return (
            <div className="w-full z-[-1]   bg-[#F7F6FB]" key={index}>
              <div className="bg-[#F7F6FB] py-5 mt-20 max-xl:mt-0 max-sm:py-0 max-xl:px-5 max-w-6xl  mx-auto">
                <div className="z-[-1] grid grid-cols-5  gap-5 max-xl:grid-cols-1  ">
                  <div
                    class={`relative max-xl:hidden col-span-2 w-[400px]  h-[485px]    max-xl:w-[251px] max-xl:h-[160px] max-xl:mx-auto rounded-xl bg-[#F7F6FB] flex justify-center white mt-10  `}
                  >
                    <Image
                      className="absolute w-full h-full max-xl:hidden   object-contain  mr-10 max-xl:w-3/4 "
                      src={campaign.Image}
                      alt=""
                      width={1000}
                      height={500}
                    />
                    <div class="w-[347px] max-xl:w-11/12 h-full max-xl:hidden bg-[#5B2D90] rounded-2xl"></div>
                  </div>
                  <div
                    class={`hidden   col-span-2 w-[400px]  h-[485px]    max-xl:w-[251px] max-xl:h-[160px] max-xl:mx-auto rounded-xl bg-[#F7F6FB] max-xl:flex  justify-center white mt-10  `}
                  >
                    <div class="w-[347px] max-xl:w-11/12 h-full hidden max-xl:block  bg-[#5B2D90] rounded-2xl">
                      <Image
                        className="max-xl:block w-full h-full hidden  object-contain  px-2 "
                        src={campaign.image}
                        alt=""
                        width={1000}
                        height={500}
                      />
                    </div>
                  </div>
                  <div className=" col-span-3 max-xl:col-span-1 flex flex-col  justify-center max-xl:items-center max-xl:pb-10   gap-5">
                    <h3 className="text-purple-900 text-[40px] font-bold leading-10 uppercase max-xl:text-center max-xl:text-[30px] max-lg:text-[20px]">
                      {campaign.name}
                    </h3>
                    <span
                      className="text-[16px]  break-words text-[#757575]"
                      dangerouslySetInnerHTML={{ __html: campaign.description }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="w-full bg-white" key={index}>
              <div className="bg-white py-5 max-xl:px-5">
                <div className="grid grid-cols-5  gap-5  max-w-6xl mx-auto max-xl:grid-cols-1">
                  <div
                    class={`relative max-xl:hidden  col-span-2 w-[400px]  h-[485px]    max-xl:w-[251px] max-xl:h-[160px] max-xl:mx-auto rounded-xl bg-white flex justify-center white mt-10 `}
                  >
                    <Image
                      className={`absolute w-full h-full max-xl:hidden  object-contain mr-20 max-xl:w-3/4  `}
                      src={campaign.image}
                      alt=""
                      width={1000}
                      height={500}
                    />
                    <div class="w-[347px] max-xl:w-11/12 h-full max-xl:hidden bg-[#5B2D90] rounded-2xl"></div>
                  </div>
                  <div
                    class={` hidden   col-span-2 w-[400px]  h-[485px]    max-xl:w-[251px] max-xl:h-[160px] max-xl:mx-auto rounded-xl bg-white max-xl:flex justify-center white mt-10 `}
                  >
                    <div class="w-[347px] max-xl:w-11/12 h-full hidden max-xl:block bg-[#5B2D90] rounded-2xl">
                      <Image
                        className={`hidden max-xl:block w-full h-full  object-contain px-2  `}
                        src={campaign.image}
                        alt=""
                        width={1000}
                        height={500}
                      />
                    </div>
                  </div>

                  <div className="col-span-3 flex flex-col justify-center gap-5  max-xl:items-center order-first max-xl:pb-10 max-xl:order-last">
                    <h3 className="text-purple-900 text-[40px] font-bold leading-10 uppercase max-xl:text-center max-xl:text-[30px] max-lg:text-[20px] ">
                      {campaign.name}
                    </h3>{' '}
                    <span
                      className="text-[16px]  break-words text-[#757575]"
                      dangerouslySetInnerHTML={{ __html: campaign.description }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Campaigns;
