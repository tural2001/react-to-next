import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const scrollToUstunluklerimiz = () => {
    let scrollToPosition;

    if (window.innerWidth <= 650) {
      scrollToPosition = 620; // Küçük cihazlar için kaydırma pozisyonu
    } else if (window.innerWidth <= 1100) {
      scrollToPosition = 850; // Orta boy cihazlar için kaydırma pozisyonu
    } else {
      scrollToPosition = 1500; // Büyük cihazlar için kaydırma pozisyonu
    }

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative  w-full bg-[#5B2D90]">
      <div className="container max-w-5xl max-sm:w-full mx-auto py-14 max-sm:py-10 grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-5 ma max-lg:grid-cols-2 max-lg:gap-5 max-lg:px-10 ">
        <div className="flex items-start max-sm:col-span-2 max-lg:col-span-2">
          <Link href="/" onClick={handleScrollUp}>
            {' '}
            <Image
              src="/assets/logo2.png"
              width={182}
              height={50}
              style={{ width: '100%', height: '100%' }}
              className="w-[182px]"
              alt=""
            />
          </Link>
        </div>{' '}
        <div className="text-white flex flex-col gap-5  justify-start items-start ml-10">
          <h3 className="text-[20px] font-semibold tracking-[0.5px] max-sm:text-[16px]">
            Haqqımızda
          </h3>
          <ul className="text-[14px] font-regular flex flex-col gap-3">
            <li className="">
              {' '}
              <Link href="services" onClick={handleScrollUp}>
                Xidmətlərimiz
              </Link>
            </li>{' '}
            <li className="">
              <Link href="campaigns" onClick={handleScrollUp}>
                Kampaniyalar
              </Link>
            </li>{' '}
            <li className="">
              <Link href="/" onClick={scrollToUstunluklerimiz}>
                Üstünlüklərimiz
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white flex flex-col gap-5 ml-10">
          <h3 className="text-[20px] font-semibold tracking-[0.5px] max-sm:text-[16px]">
            FAQ
          </h3>
          <ul className="text-sm font-light flex flex-col gap-3">
            <li className="">
              {' '}
              <Link href="career" onClick={handleScrollUp}>
                Karyera{' '}
              </Link>
            </li>

            <li className="">
              {' '}
              <Link href="blog" onClick={handleScrollUp}>
                Bloq{' '}
              </Link>
            </li>
            <li className="">
              {' '}
              <Link href="payment" onClick={handleScrollUp}>
                Ödəniş{' '}
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white flex flex-col max-sm:w-[250px] max-lg:w-[250px]  justify-start items-start ml-10  gap-3 max-sm:col-span-2 max-lg:col-span-2">
          {' '}
          <h3 className="text-[20px] font-semibold  tracking-[0.5px] max-sm:text-[16px]  ">
            Bizimlə əlaqə:
          </h3>{' '}
          <ul className="text-sm font-light grid grid-cols-5 gap-2 justify-center items-center w-[200px] max-sm:w-[200px]  max-sm:flex max-lg:w-[200px]  max-lg:flex    ">
            <Link
              href="/"
              className="  mx-0 w-7 h-7 rounded-full  flex justify-center items-center "
            >
              <Image
                src="/assets/fb.png"
                width={7}
                height={7}
                className="w-7"
                alt=""
              />
            </Link>
            <Link
              href="/"
              className="  mx-0 w-7 h-7 rounded-full flex justify-center items-center"
            >
              {' '}
              <Image
                src="/assets/instagram.png"
                width={7}
                height={7}
                className="w-7"
                alt=""
              />
            </Link>
            <Link
              href="/"
              className="  mx-0 w-7 h-7 rounded-full flex justify-center items-center"
            >
              {' '}
              <Image
                src="/assets/linkedin.png"
                width={7}
                height={7}
                className="w-7"
                alt=""
              />
            </Link>
            <Link href="/" legacyBehavior>
              <a className="flex justify-start col-span-4 w-2/4 items-center gap-2 max-sm:ml-2">
                <div className="bg-white mx-0 w-7 h-7 rounded-full flex items-center">
                  <Image
                    src="/assets/cellphone.png"
                    width={5}
                    height={0}
                    style={{ width: '100%', height: '100%' }}
                    className="w-7"
                    alt=""
                  />
                </div>
                <p>8220</p>
              </a>
            </Link>

            <Link href="/" className="flex">
              <div
                onClick={handleScrollUp}
                className="absolute right-52 bottom-20 shadow-2xl shadow-black bg-[#5B2D90]  rounded-full w-14 h-14 flex justify-center items-center max-sm:hidden max-md:hidden max-lg:hidden max-xxl:hidden"
              >
                <Image
                  src="/assets/arrow.png"
                  width={5}
                  height={2}
                  className="w-5 h-2"
                  alt=""
                />
              </div>
            </Link>
          </ul>
        </div>
      </div>
      <div className=" border-b-[1px] border-white mx-8 border-opacity-30" />
      <div className="container max-w-[1000px] max-xxl:w-full mx-auto  py-2 flex flex-row justify-between items-center max-sm:justify-between   text-white  font-medium text-[12px] max-sm:px-10">
        <Link href="/privacypolicy" onClick={handleScrollUp}>
          <p>Məxfilik siyasəti</p>
        </Link>
        <Link href="/">
          <p>&copy; Bütün hüquqlar qorunur</p>
        </Link>
        <Link href="/">
          <p className="max-sm:hidden max-xl:hidden">
            {' '}
            {new Date().getFullYear()}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
