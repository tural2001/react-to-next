import React, { useEffect, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';

import { useVisibleContext } from '../components/VisibleContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const faq = () => {
  const data = [
    {
      h4: 'İnternet xidmətinə qoşulmaq üçün nə etməliyəm?',
      p: 'Sağ üst küncdə yerləşən “Onlayn qeydiyyat” düyməsinə klikləməklə  qeydiyyat formasına keçid edə bilərsiniz. Tələb edilənməlumatların hamısını qeyd etdikdən sonra qoşulma üçünəməkdaşlarımız tərəfindən sizinlə əlaqə saxlanılacaqdır.',
    },
    {
      h4: 'Xidmət sahəsində olub olmadığımı necə yoxlaya bilərəm?',
      p: ' Əsas səhifədə yerləşən “Bölgəni seçin” düyməsindən öz ünvanınızı seçməklə və ya xəritə vizualının üzərində sizə lazım olan əraziyə klikləməklə həmin ərazinin xidmət sahəmizə aid olub-olmadığını öyrənə bilərsiniz.',
    },
    {
      h4: 'Şəxsi kabinetimə necə daxil ola bilərəm?',
      p: '  Şəxsi kabinetə daxil olmaq üçün sağ üst hissədə yerləşən “Şəxsi kabinet” düyməsinə klik edirsiniz. Müqavilənizdə sizə təqdim edilən müştəri kodunuzu, “Şifrə” bölümünə isə şifrənizi qeyd edirsiniz.',
    },
    {
      h4: 'Müştəri kodumu itirmişəm.',
      p: ' Müştəri xidmətlərimiz və ya bizə onlayn müraciət etməklə qeydiyyatdan keçdiyiniz mobil nömrəni təqdim edərək müştəri məlumatlarınızı əldə edə bilərsiniz.',
    },
    {
      h4: 'İnternet balansım nə vaxt bitir?',
      p: ' Şəxsi kabinetinizdə “Tarixçə” bölməsinə daxil olaraq ödənişinizin tarixçəsini izləyə bilərsiniz. ',
    },
    {
      h4: 'Wifi şifrəsini necə dəyişə bilərəm?',
      p: ' Google-a daxil olduqda 192.168.100.1 qeyd edib, USERNAME bölümünə “root”, PASSWORD bölümünə “admin” (admin uyğun gəlmədikdə: Azol123!) daxil edirsiniz. Düzəlişlər WLAN bölümündən olunur. ',
    },
    {
      h4: 'Əlavə sualım var.',
      p: ' Bizimlə (012) 450 2020 və 8220 əlaqə nömrələrimiz və onlayn çat xidməti vasitəsi ilə əlaqə saxlaya və ya aşağıdakı bölmədə sualınızı qeyd edə bilərsiniz.',
    },
  ];
  const [faqItems, setFaqItems] = useState(data.map(() => false));

  const toggleContent = (index) => {
    const updatedFaqItems = faqItems.map((item, i) =>
      i === index ? !item : false
    );
    setFaqItems(updatedFaqItems);
  };

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const pageTitle = 'Your Faq Post Title';
  const pageDescription = 'Description of your faq post.';
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
      <div className="max-xl:relative absolute max-xl:z-[-1] w-full  ">
        {' '}
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className=" h-[535px]  top-32 w-full  max-sm:h-[200px] max-md:h-[300px] max-xl:h-[300px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className=" max-w-[1100px] max-xl:w-3/4  mx-auto">
        <div className="h-[450px] max-xxl:h-auto  ">
          {' '}
          <h3 className="h3  text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px] max-xxl:text-white ">
            Tez-tez verilən suallar
          </h3>
          <div className="absolute  z-[1] max-xl:z-[-1]  right-48 max-xxl:right-5 max-sm:top-20 max-xxl:top-40">
            {' '}
            <Image
              src="/assets/faq.png"
              width={454}
              height={355}
              className="w-[454px] h-[355px]  mr-24 mt-10 max-lg:mr-5  max-xl:w-[192px] max-xl:h-[152px] max-xxl:w-[252px] max-xxl:h-[252px]"
              alt=""
            />
          </div>
        </div>

        <div className=" w-[826px] max-xl:w-full max-xl:mx-5 mx-auto flex flex-col gap-10 justify-center items-center mt-40 max-md:mt-20 max-xl:mt-10 ">
          <div className=" max-xl:z-[-1]">
            {' '}
            <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px] w-3/4 max-xl:w-full mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center ">
              Daha öncədən cavablandırılan suallar{' '}
            </h3>
          </div>

          <ul className="flex flex-col gap-10 w-[826px] max-xl:w-full  mx-auto pb-10 ">
            {data.map((item, index) => {
              const isLastItem = index === data.length - 1;

              return (
                <li
                  className="flex flex-col gap-5 w-[826px] max-xl:w-full  mx-auto "
                  key={index}
                >
                  <div className="flex" onClick={() => toggleContent(index)}>
                    <span className="w-[24px] h-[24px] rounded-full bg-[#5B2D90] text-white flex justify-center items-center max-xl:hidden">
                      {faqItems[index] ? <BiMinus /> : <BiPlus />}
                    </span>
                    <h4 className="font-medium text-[16px] w-[680px] max-xl:w-full mx-auto">
                      {item.h4}
                    </h4>
                    <span className="w-[24px] h-[24px] rounded-full  text-black  justify-center items-center hidden max-xl:flex z-[-1]">
                      {faqItems[index] ? <BsChevronDown /> : <BsChevronDown />}
                    </span>
                  </div>
                  {faqItems[index] && (
                    <p className="text-[16px] text-[#6A7583] font-light leading-6 tracking-wide w-[680px] max-xl:w-3/4 mx-auto ease-in duration-300 z-[-1]">
                      {item.p}
                    </p>
                  )}
                  {isLastItem ? null : <div className="h-[1px] bg-[#D0D5DD]" />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="bg-[#F7F6FB]">
        <div className="container w-[1010px] max-xl:w-full mx-auto py-5">
          <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px] text-[#5B2D90] font-bold text-center z-10 relative">
            Sualınız var?
          </h3>
          <form
            action=""
            className="grid grid-cols-2 max-xl:grid-cols-1 gap-5  justify-items-between py-10 max-xl:mx-5"
          >
            <div className="w-full flex flex-col  justify-center gap-2">
              {' '}
              <label htmlFor="" className="text-black  text-[16px] font-medium">
                Ad Soyad <span className="text-[#ED1C24]">*</span>
              </label>
              <input
                type="text"
                className="border-[#5B2D90]  bg-white rounded-md w-[469px] h-[58px] max-xl:w-full focus:ring-0"
                placeholder="Mark"
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              {' '}
              <label htmlFor="" className="text-black  text-[16px]">
                Əlaqə nömrəsi <span className="text-[#ED1C24]">*</span>
              </label>
              <input
                type="text"
                className="border-[#5B2D90]  bg-white rounded-xl w-[469px] h-[58px] max-xl:w-full focus:ring-0"
                placeholder="+994 _ _  _ _ _  _ _  _ _"
              />
            </div>
            <div className="w-full flex flex-col col-span-2 max-xl:col-span-1 justify-center gap-2">
              <label htmlFor="" className="text-black  text-[16px]">
                Sualınız <span className="text-[#ED1C24]">*</span>
              </label>
              <textarea
                className="border-[#5B2D90] w-[980px] max-xl:w-full  bg-white rounded-xl"
                name=""
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <button className="w-[250px] h-[58px] bg-[#5B2D90] text-white rounded-full text-[16px]">
              Göndər
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default faq;
