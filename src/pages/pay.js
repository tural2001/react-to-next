import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useVisibleContext } from '../components/VisibleContext';
import Image from 'next/image';
import { LoadingOverlay } from '../components/LoadingOverlay';
import Service from '../components/Service';
import { useTranslation } from '../components/TranslationContext';

const PaybyBankCard = ({}) => {
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const { translate, Language } = useTranslation();

  return (
    <>
      {' '}
      {isLoading ? <LoadingOverlay /> : null}
      {visible ? <Service ServiceCategoryData={ServiceCategoryData} /> : null}
      <div className="container max-w-[1010px] mx-auto  py-10 register">
        <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px] text-center text-[#5B2D90] font-semibold tracking-[0.3px] inter">
          {translate('Select_the_payment_type', Language)}
        </h3>
        <div className="py-20 max-xl:py-10 flex gap-40 justify-center max-xl:flex-col max-xl:gap-10 max-xl:items-center">
          <div className="border-[2px] border-[#D7D7D7] rounded-3xl max-xl:rounded-[40px] w-[344px] h-[208px] max-md:w-[160px] max-md:h-[100px]  bg-white flex justify-center items-center ">
            <Image
              src="/assets/kapital.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '70%', height: 'auto' }}
              alt=""
            />
          </div>
          <div className="border-[2px] border-[#D7D7D7] rounded-3xl  max-xl:rounded-[40px] w-[344px] h-[208px] max-md:w-[160px] max-md:h-[100px]  bg-white flex justify-center items-center ">
            <Image
              src="/assets/unibank.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '70%', height: 'auto' }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaybyBankCard;
