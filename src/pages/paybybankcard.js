import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useVisibleContext } from '../components/VisibleContext';
import Image from 'next/image';
import Link from 'next/link';

const PaybyBankCard = () => {
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);
  return (
    <>
      {' '}
      {visible && (
        <div className="home-wrapper-1 container max-w-5xl max-sm:hidden py-10 mx-auto relative overflow-hidden max-xl:hidden">
          <div className="grid grid-cols-3 justify-items-center">
            <Link href="/services/fiberoptik">
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
            <Link href="/services/fiberoptik">
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
            <Link href="/services/fiberoptik">
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
      <div className="container max-w-[1010px] mx-auto  py-10 register">
        <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px] text-center text-[#5B2D90] font-semibold tracking-[0.3px] inter">
          Bank kartı ilə ödəniş
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
              Müştəri kodu <span className="text-[#ED1C24]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className="border-none text-[20px] max-xl:text-[12px] bg-[#F4F4F4] rounded-xl w-[1010px] max-xl:w-full  h-[67px] max-xl:h-[47px] focus:ring-0 "
                placeholder="Lorem ipsum"
              />
              <BsSearch className="absolute right-[20px] text-2xl max-xl:text-xl top-[22px] max-xl:top-[14px]   text-gray-400" />
            </div>
            <p className="text-[12px] text-[#637381] italic">
              Müştəri kodunuzu yoxlayın
            </p>
          </div>

          <div className="flex gap-5 my-10 max-xl:grid ">
            {' '}
            <div className=" justify-center  w-[403px] h-[67px]  max-xl:w-full">
              {' '}
              <input
                type="text"
                className="border-none text-[20px] max-xl:text-[12px]  bg-[#F4F4F4] rounded-xl w-[403px] h-[67px] max-xl:h-[47px] max-xl:w-full focus:ring-0"
                placeholder="Ad Soyad"
              />
            </div>
            <div className=" flex w-[583px] h-[67px] max-xl:grid  max-xl:w-full ">
              <div className="relative max-xl:w-full">
                <input
                  type="text"
                  className="border-none text-[20px] max-xl:text-[12px] bg-[#F4F4F4] rounded-xl w-[583px] max-xl:w-full h-[67px] max-xl:h-[47px] focus:ring-0 pl-5"
                  placeholder="Ödəməli olduğunuz məbləğ"
                  readOnly
                />

                <p className="absolute right-[20px] text-[28px] max-xl:text-[20px] top-[15px] max-xl:top-[10px] text-[#637381] italic ">
                  50 m
                </p>
              </div>
            </div>
          </div>
          <button className="w-[400px] max-xl:w-full mt-5 text-[16px] h-[55px] bg-[#5B2D90] text-white rounded-full">
            Ödəniş et
          </button>
        </form>
      </div>
    </>
  );
};

export default PaybyBankCard;
