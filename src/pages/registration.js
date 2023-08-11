import React, { useEffect } from 'react';
import { useVisibleContext } from '../components/VisibleContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const registration = () => {
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);
  return (
    <>
      {visible && (
        <div className="home-wrapper-1 container max-w-5xl max-sm:hidden py-10 mx-auto relative overflow-hidden max-xl:hidden">
          <div className="grid grid-cols-3 justify-items-center">
            <Link href="/services">
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
            <Link href="/services">
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
            <Link href="/services">
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
      <div className="container max-w-[937px] mx-auto  py-10 register">
        <h3 className="text-[40px] text-center text-[#5B2D90] font-semibold tracking-[0.3px] inter max-md:text-[20px]">
          Azəronline-a xoş gəlmisiniz !
        </h3>
        <p className="text-[16px] text-[#94A2B3] text-center mb-5 mt-2">
          Qeydiyyat formu
        </p>
        <form
          action=""
          className="grid grid-cols-2  gap-5 py-10 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:gap-7  max-md:mx-10 "
        >
          <div className="w-[442px] max-sm:w-full max-sm:mx-auto flex flex-col gap-2">
            {' '}
            <label
              htmlFor=""
              className="text-[#637381] text-[20px] max-sm:text-[16px]"
            >
              Şəhər/Rayon <span className="text-[#ED1C24]">*</span>
            </label>
            <div className="">
              <select
                id="countries"
                className="h-[50px] text-[#637381] border border-[#637381] rounded-xl   bg-[#F4F4F4]  border-none text-[15px] font-medium  block w-full p-2.5 focus:ring-0 "
              >
                <option value="">Seçin</option>

                <option value="">AZE</option>
                <option value="US">ENG</option>
              </select>
            </div>
          </div>
          <div className="w-[442px]  max-sm:w-full flex flex-col gap-2">
            {' '}
            <label htmlFor="" className="text-[#637381] text-[20px]">
              Ərazi <span className="text-[#ED1C24]">*</span>
            </label>
            <div className="">
              <select
                id="countries"
                className="h-[50px] text-[#637381] border border-[#637381] rounded-xl   bg-[#F4F4F4]  border-none text-[15px] font-medium  block w-full p-2.5 focus:ring-0 "
              >
                <option value="">Seçin</option>

                <option value="">AZE</option>
                <option value="US">ENG</option>
              </select>
            </div>
          </div>

          <div className="w-[442px]   max-sm:w-full  flex flex-col justify-center gap-2">
            {' '}
            <label htmlFor="" className="text-[#637381]  text-[20px]">
              Ünvan <span className="text-[#ED1C24]">*</span>
            </label>
            <input
              type="text"
              className="border-none  bg-[#F4F4F4] rounded-xl  w-[442px]  max-sm:w-full  h-[50px] focus:ring-0"
              placeholder="Lorem ipsum"
            />
          </div>
          <div className="w-[442px] max-sm:w-full  flex flex-col justify-center gap-2">
            {' '}
            <label htmlFor="" className="text-[#637381]  text-[20px]">
              Əlaqə nömrəsi <span className="text-[#ED1C24]">*</span>
            </label>
            <input
              type="text"
              className="border-none  bg-[#F4F4F4] rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0"
              placeholder="+994 _ _  _ _ _  _ _  _ _"
            />
          </div>
          <div className="w-[442px] max-sm:w-full  flex flex-col justify-center gap-2">
            {' '}
            <label htmlFor="" className="text-[#637381]  text-[20px]">
              Ad Soyad <span className="text-[#ED1C24]">*</span>
            </label>
            <input
              type="text"
              className="border-none  bg-[#F4F4F4] rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0"
              placeholder="Lorem ipsum"
            />
          </div>
          <div className="w-[442px] max-sm:w-full  flex flex-col justify-center gap-2">
            {' '}
            <label htmlFor="" className="text-[#637381]  text-[20px]">
              ŞV FİN kod <span className="text-[#ED1C24]">*</span>
            </label>
            <input
              type="text"
              className="border-none  bg-[#F4F4F4] rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0"
              placeholder="*******"
            />
          </div>
          <div className="w-[442px] max-sm:w-full   flex flex-col gap-2">
            {' '}
            <label htmlFor="" className="text-[#637381] text-[20px]">
              Xidmət növü <span className="text-[#ED1C24]">*</span>
            </label>
            <div className="">
              <select
                id="countries"
                className="h-[50px] text-[#637381] border border-[#637381] rounded-xl   bg-[#F4F4F4]  border-none text-[15px] font-medium  block w-full max-sm:w-full p-2.5 focus:ring-0 "
              >
                <option value="">Seçin</option>

                <option value="">AZE</option>
                <option value="US">ENG</option>
              </select>
            </div>
          </div>
          <div className="w-[442px] max-sm:w-full  flex flex-col gap-2">
            <label htmlFor="" className="text-[#637381] text-[20px]">
              Tarif <span className="text-[#ED1C24]">*</span>
            </label>
            <div className="">
              <select
                id="countries"
                className="h-[50px] text-[#637381] border border-[#637381] rounded-xl   bg-[#F4F4F4]  border-none text-[15px] font-medium  block w-full max-sm:w-full p-2.5 focus:ring-0 "
              >
                <option value="">Seçin</option>

                <option value="">AZE</option>
                <option value="US">ENG</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start  items-center gap-2 mt-8">
            <input type="checkbox" className="rounded" name="" id="" />
            <p className="text-[12px] text-[#5E5E5E]">Şərtlərlə tanış oldum</p>
          </div>
          <button className="col-span-2 w-[240px] h-[56px] max-sm:w-[160px] max-sm:h-[44px] max-sm:text-[12px] bg-[#5B2D90] text-white rounded-full">
            Qeydiyyatı tamamla
          </button>
        </form>
      </div>
    </>
  );
};

export default registration;
