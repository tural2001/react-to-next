import React, { useCallback } from 'react';
import { GrMenu } from 'react-icons/gr';
import { LiaTimesSolid } from 'react-icons/lia';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useVisibleContext } from './VisibleContext';
import { useBlogData } from './BlogData';
import { useTranslation } from './TranslationContext';

const Header = () => {
  const { blogData } = useBlogData();
  const { serviceData } = useBlogData();
  console.log(serviceData);
  const slug =
    blogData?.data?.filter((item) => item.slug)?.map((item) => item.slug) || [];

  const { isOpen, toggleMenu } = useVisibleContext();
  const router = useRouter();

  const { visible, setVisible } = useVisibleContext();

  const handleClick = () => {
    setVisible(!visible);
  };

  const scrollToUstunluklerimiz = useCallback(() => {
    let scrollToPosition;
    if (window.innerWidth <= 650) {
      scrollToPosition = 620;
    } else if (window.innerWidth <= 1100) {
      scrollToPosition = 1050;
    } else {
      scrollToPosition = 1250;
    }

    if (router.pathname !== '/a') {
      router.push('/').then(() => {
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth',
        });
      });
    } else {
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  const { translate, changeLanguage, currentLanguage, Language } =
    useTranslation();

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    changeLanguage(newLanguage);
  };

  return (
    <>
      <div className="">
        <Image
          src="/assets/ellipse.png"
          width={160}
          height={100}
          className="absolute top-0 right-0 z-10  max-xxl:hidden"
          alt=""
        />
      </div>
      <div className="w-full  bg-[#5B2D90] drop-shadow-lg ">
        <div className="container max-w-[1100px]  mx-auto  py-2 flex justify-between items-start border-b-[1px] border-black border-opacity-30 max-sm:items-center max-lg:items-center">
          <ul className="flex justify-center items-center gap-5 text-white max-xl:hidden">
            <li className="">
              <Link href="/" className="">
                <Image
                  src="/assets/logo2.png"
                  width={182}
                  height={180}
                  style={{ width: '182px', height: '33px' }}
                  className="w-[182px]"
                  alt=""
                />
              </Link>
            </li>
            <li className="">
              <Link href="/faq"> {translate('FAQ', Language)}</Link>
            </li>
            <li className="">
              <Link href="/payment"> {translate('Payment', Language)}</Link>
            </li>
            <li className="">
              <Link href="/career"> {translate('Career', Language)}</Link>
            </li>
            <li className="">
              <Link href={`/blog/${slug[0]}`}>
                {translate('Blog', Language)}
              </Link>
            </li>
          </ul>
          <ul className="flex justify-center items-center">
            <li>
              <Link href="/" className="hidden max-xl:block ">
                {' '}
                <Image
                  src="/assets/logo.png"
                  width={99}
                  style={{ width: '100%', height: '100%' }}
                  height={88}
                  priority
                  className="max-xxl:w-[99px] max-xxl:ml-3"
                  alt=""
                />
              </Link>
            </li>
          </ul>
          <ul className="flex  gap-2 max-sm:gap-1 ">
            <li className="overflow-hidden">
              <a
                href="tel:8220"
                className="text-white flex items-center gap-2 max-sm:gap-1 overflow-hidden"
              >
                <div className="container bg-white mx-auto w-7 h-7 rounded-full flex justify-center items-center overflow-hidden">
                  <Image
                    src="/assets/cellphone.png"
                    width={300}
                    height={500}
                    className="w-6 h-7 max-sm:w-5 max-sm:h-6"
                    alt=""
                  />
                </div>
                <span className="text-[15px] font-medium max-sm:text-[12px]">
                  8220
                </span>
              </a>
            </li>
            <li className="text-white flex items-center gap-1 max-sm:gap-0  max-sm:border-r-[2px] max-xl:border-r-[2px] ">
              <div className="container bg-white mx-auto w-7 h-7 rounded-full flex justify-center items-center ">
                <Image
                  src="/assets/world.png"
                  width={300}
                  height={500}
                  className="w-4  max-sm:h-4"
                  alt=""
                />
              </div>
              <div className="">
                <select
                  id="countries"
                  className="text-white bg-inherit border-none text-[15px] max-sm:text-[12px]  font-medium rounded-lg block w-full p-0 focus:ring-0 select"
                  onChange={handleLanguageChange}
                  value={currentLanguage}
                >
                  <option className="text-black" value="az">
                    AZE
                  </option>
                  <option className="text-black" value="en">
                    ENG
                  </option>
                </select>
              </div>
            </li>
            <li className="hidden max-xl:block   max-sm:mr-1  max-xl:mr-5">
              <div
                className="container bg-white mx-auto w-7 h-7 rounded-full flex justify-center items-center "
                onClick={toggleMenu}
              >
                {isOpen ? <LiaTimesSolid /> : <GrMenu />}
              </div>
              {isOpen && (
                <div className="absolute   bg-white right-0 top-[43px] border-t-[2px] rounded-t-[5px] border-[#5B2D90] max-sm:w-[300px] max-md:w-[300px] max-lg:w-[300px] max-xl:w-[300px] flex justify-center items-center gap-10 pt-10 pb-5 pl-10 max-sm:pr-0 max-xl:pr-7 rounded-b-3xl nav-menu">
                  <ul className="flex flex-col gap-4 justify-center items-end  z-10">
                    <li
                      className="border  rounded-3xl bg-[#5B2D90] text-white w-[170px] h-[40px] flex justify-center items-center"
                      onClick={toggleMenu}
                    >
                      <Link href="/installment">
                        {' '}
                        {translate('Installment', Language)}
                      </Link>
                    </li>

                    <li
                      className="border  rounded-3xl bg-[#5B2D90] text-white w-[170px] h-[40px] flex justify-center items-center"
                      onClick={toggleMenu}
                    >
                      {translate('Private_cabinet', Language)}
                    </li>

                    <li
                      className="border border-[#5B2D90] text-[#5B2D90] p-2 rounded-3xl w-[170px] h-[40px] text-center overflow-hidden"
                      onClick={toggleMenu}
                    >
                      <Link href="/registration">
                        {' '}
                        {translate('Registration', Language)}
                      </Link>
                    </li>

                    <li className="" onClick={toggleMenu}>
                      <Link href="/about">
                        {' '}
                        {translate('About_us', Language)}
                      </Link>
                    </li>
                    <li className="" onClick={toggleMenu}>
                      <Link href={`/services/${serviceData?.data[0]?.id}`}>
                        {' '}
                        {translate('Services', Language)}
                      </Link>
                    </li>
                    <li
                      className=""
                      onClick={() => {
                        toggleMenu();
                        scrollToUstunluklerimiz();
                      }}
                    >
                      <Link href="/">
                        {' '}
                        {translate('Our_advantages', Language)}
                      </Link>
                    </li>
                    <li className="" onClick={toggleMenu}>
                      <Link href="/campaigns">
                        {' '}
                        {translate('Campaigns', Language)}
                      </Link>
                    </li>
                    <li className="" onClick={toggleMenu}>
                      <Link href="/speedtest">
                        {' '}
                        {translate('Speedtest', Language)}
                      </Link>
                    </li>
                    <div className="w-3/4 border-b-[1px] border-[#464646] " />
                    <li className="" onClick={toggleMenu}>
                      <Link href="/faq"> {translate('FAQ', Language)}</Link>
                    </li>
                    <li className="" onClick={toggleMenu}>
                      <Link href="/payment">
                        {translate('Payment', Language)}
                      </Link>
                    </li>
                    <li className="" onClick={toggleMenu}>
                      <Link href="/career">
                        {' '}
                        {translate('Career', Language)}
                      </Link>
                    </li>
                    <li className="" onClick={toggleMenu}>
                      <Link href={`/blog/${slug[0]}`}>
                        {translate('Blog', Language)}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="container max-w-[1087px] py-4  mx-auto  max-xl:hidden ">
          <div className="flex  justify-between ">
            <ul className="navbar-items  max-sm:hidden flex items-center  gap-5 text-white text-[13px]  font-medium tracking-[0.5px]">
              <li className="">
                <Link href="/about"> {translate('About_us', Language)}</Link>
              </li>
              <li className="cursor-pointer" onClick={scrollToUstunluklerimiz}>
                {translate('Our_advantages', Language)}
              </li>
              <li className="">
                <button onClick={handleClick}>
                  {' '}
                  {translate('Services', Language)}
                </button>
                {visible &&
                  location.pathname !== '/services/fiberoptik' &&
                  location.pathname !== '/services/iptv' &&
                  location.pathname !== '/services/simsiz' &&
                  location.pathname !== '/services/adsl' &&
                  location.pathname !== '/services/aix' && (
                    <div className="absolute mt-3 triangle w-0 h-0 border-l-[35px] border-l-transparent border-b-[20px] border-b-white border-r-[35px] border-r-transparent"></div>
                  )}
              </li>
              <li className="">
                <Link href="/campaigns">
                  {' '}
                  {translate('Campaigns', Language)}
                </Link>
              </li>
              <li className="">
                <Link href="/speedtest">
                  {' '}
                  {translate('Speedtest', Language)}
                </Link>
              </li>
            </ul>
            <ul className="navbar-items  max-sm:hidden flex items-center  gap-5 text-white text-[12px]  font-medium tracking-[0.5px]">
              <li className="border p-2 rounded-3xl bg-white text-[#5B2D90] w-[139px] h-[35px] flex justify-center items-center">
                <Link href="/installment">
                  {' '}
                  {translate('Installment', Language)}
                </Link>
              </li>
              <li className="border p-2 rounded-3xl bg-white text-[#5B2D90] w-[104px] h-[35px] flex justify-center items-center">
                <Link href="/registration">
                  {' '}
                  {translate('Registration', Language)}
                </Link>
              </li>
              <li className="border p-2 rounded-3xl w-[130px] h-[40px] flex justify-center items-center">
                {translate('Private_cabinet', Language)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
