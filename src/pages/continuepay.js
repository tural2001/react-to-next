import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useVisibleContext } from '../components/VisibleContext';
import Image from 'next/image';
import Link from 'next/link';
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
          {translate('Payment_information', Language)}
        </h3>
        <form
          action=""
          className="w-full max-xl:w-11/12 max-xl:mx-auto gap-5 py-10 "
        >
          <div className="border-b-[1px] border-[#ECECEC] pb-10 w-full flex flex-col col-span-3 justify-center gap-2">
            <label
              htmlFor=""
              className="text-[#637381] text-[20px] max-xl:text-[16px]"
            >
              {translate('Subscriber_code', Language)}
              <span className="text-[#ED1C24]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className="border-none text-[20px] max-xl:text-[12px] bg-[#F4F4F4] rounded-xl w-[1010px] max-xl:w-full  h-[67px] max-xl:h-[47px]  p-2  focus:ring-0 "
                placeholder="Lorem ipsum"
              />
              <BsSearch className="absolute right-[20px] text-2xl max-xl:text-xl top-[22px] max-xl:top-[14px]   text-gray-400" />
            </div>
            <p className="text-[12px] text-[#637381] italic">
              {translate('Enter_your_customer_code', Language)}
            </p>
          </div>
          <button className="w-[400px] max-xl:w-full mt-5 text-[16px] h-[55px] bg-[#5B2D90] text-white rounded-full">
            <Link href="/pay">{translate('Proceed_to_payment', Language)}</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default PaybyBankCard;
