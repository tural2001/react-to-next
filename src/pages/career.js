import React, { useContext, useEffect } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import Dropzone from 'react-dropzone';
import { CvPopup } from '../components/CvPopup';
import { EtrafliPopup } from '../components/EtrafliPopup';
import { EtrafliPopupsm } from '../components/EtrafliPopupsm';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useVisibleContext } from '../components/VisibleContext';
import Head from 'next/head';

const career = () => {
  const data = [
    {
      title: 'Developer full stack',
      location: 'Bakı, Azərbaycan',
    },
    {
      title: 'Developer full stack',
      location: 'Bakı, Azərbaycan',
    },
    {
      title: 'Developer full stack',
      location: 'Bakı, Azərbaycan',
    },
    {
      title: 'Developer full stack',
      location: 'Bakı, Azərbaycan',
    },
    {
      title: 'Developer full stack',
      location: 'Bakı, Azərbaycan',
    },
    {
      title: 'Developer full stack',
      location: 'Bakı, Azərbaycan',
    },
    {
      title: 'Developer full stack',
      location: 'Bakı, Azərbaycan',
    },
  ];
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const pageTitle = 'Your Career Post Title';
  const pageDescription = 'Description of your career post.';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
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
      <div className="bg-[#F7F6FB]  w-full   mx-auto">
        <div className="h-[450px] max-xxl:h-auto  ">
          {' '}
          <h3 className="h3  text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px] max-xxl:text-white ">
            Karyera
          </h3>
          <div className="absolute  z-[1] max-xl:z-[-1]  right-48 max-xxl:right-5 max-sm:top-20 max-xxl:top-40">
            {' '}
            <Image
              src="/assets/career.png"
              width={448}
              height={448}
              className="w-[448px] h-[448px] max-xl:w-[155px] max-xl:h-[155px]  mr-16 max-xl:mr-5  "
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#F7F6FB]  w-full mt-10 max-xl:mt-0">
          <div className=" w-[1110px] max-xl:w-full mx-auto flex flex-col gap-10 justify-center items-center mt-40 max-xl:mt-0 ">
            <div className=" ">
              {' '}
              <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px]  mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center">
                Mövcud vakansiyalar
              </h3>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 max-xl:w-11/12 gap-7">
              {data.map((item, index) => {
                return (
                  <div
                    className="border-l-[14px] border-[#5B2D90] w-[540px] h-[202px] max-xl:w-full max-xl:h-[135px] bg-white flex flex-col justify-center px-5 gap-7 rounded-xl"
                    key={index}
                  >
                    <h4 className="text-[24px] max-xl:text-[16px]">
                      {item.title}
                    </h4>
                    <p className="text-[12px] flex items-center gap-1 text-[#939393]">
                      <CiLocationOn /> {item.location}
                    </p>
                    <div className="flex justify-between">
                      {' '}
                      <CvPopup />
                      <div className="max-xl:hidden">
                        <EtrafliPopup />
                      </div>
                      <div className="hidden max-xl:block">
                        <EtrafliPopupsm />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="relative w-[920px] max-xl:w-full mx-auto flex flex-col gap-10 justify-center items-center mt-10 ">
            <div className=" ">
              {' '}
              <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px]  mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center">
                Müraciət forması
              </h3>
            </div>
            <form
              action=""
              className="grid grid-cols-2 max-xl:flex max-xl:flex-col max-xl:w-full max-xl:justify-center max-xl:items-center gap-7 py-10 "
            >
              <div className="w-full flex flex-col justify-center max-xl:items-center gap-2 ">
                {' '}
                <label htmlFor="" className="text-black  text-[16px]">
                  Ad Soyad <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="text"
                  className="border border-[#DBDBDB]  bg-[#F4F4F4] rounded-lg w-[442px] h-[50px] max-xl:w-11/12  focus:ring-0"
                  placeholder="Lorem ipsum"
                />
              </div>
              <div className="w-full flex flex-col justify-center  gap-2 max-xl:items-center">
                {' '}
                <label htmlFor="" className="text-black  text-[16px]">
                  Əlaqə nömrəsi <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="text"
                  className="border border-[#DBDBDB]  bg-[#F4F4F4] rounded-lg w-[442px] h-[50px] max-xl:w-11/12  focus:ring-0"
                  placeholder="+994 _ _  _ _ _  _ _  _ _"
                />
              </div>
              <div className="w-full flex flex-col justify-center gap-2 max-xl:items-center">
                {' '}
                <label htmlFor="" className="text-black  text-[16px]">
                  Müraciət etdiyiniz vakansiyanın adı
                  <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="text"
                  className="border border-[#DBDBDB]  bg-[#F4F4F4] rounded-lg w-[442px] h-[50px] max-xl:w-11/12  focus:ring-0"
                  placeholder="Lorem ipsum"
                />
              </div>
              <div className="w-full   flex flex-col justify-center gap-2 max-xl:items-center">
                {' '}
                <label htmlFor="" className="text-black  text-[16px]">
                  E-poçt ünvanı <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="text"
                  className="border border-[#DBDBDB]  bg-[#F4F4F4] rounded-lg w-[442px] h-[50px] max-xl:w-11/12   focus:ring-0"
                  placeholder="Lorem ipsum"
                />
              </div>
              <div className="w-full flex flex-col justify-center gap-2 max-xl:items-center">
                <label htmlFor="" className="text-black  text-[16px]">
                  Qeydiniz <span className="text-[#ED1C24]">*</span>
                </label>
                <textarea
                  className="border-[#DBDBDB] w-[445px] h-[189px] max-xl:w-11/12     bg-[#F4F4F4] rounded-lg"
                  name=""
                  cols="10"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full   flex flex-col justify-center gap-2 max-xl:items-center">
                <label htmlFor="" className="text-black  text-[16px]">
                  CV faylını yükləyin <span className="text-[#ED1C24]">*</span>
                </label>
                <Dropzone>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div
                        {...getRootProps()}
                        className="border border-[#DBDBDB] w-[445px] h-[189px] max-xl:w-11/12    bg-[#F4F4F4] rounded-lg flex justify-center items-center"
                      >
                        <input {...getInputProps()} />
                        <p className="uppercase text-[12px] max-xl:text-[10px]  text-[#9A9A9A] flex flex-col justify-center items-center font-semibold  gap-4">
                          <Image
                            src="/assets/addfile.png"
                            width={78}
                            height={78}
                            alt=""
                            className="w-[78px] h-[78px] max-xl:w-[40px] max-xl:h-[40px]"
                          />
                          PDF, DOC, DOCX, maks 2 mb
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>

              <button className="col-span-2 w-[349px] h-[66px] max-xl:w-full  max-xl:h-[35px] text-[16px] bg-[#5B2D90] text-white rounded-full mt-5">
                Göndər
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default career;
