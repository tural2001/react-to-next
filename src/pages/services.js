import React, { useContext, useState } from 'react';
import { TariffsPopup } from '../components/TariffsPopup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useVisibleContext } from '../components/VisibleContext';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const services = () => {
  const [selectedItem, setSelectedItem] = useState('fiber');
  const [selectedItem2, setSelectedItem2] = useState('ferdi');
  const [selectedItem3, setSelectedItem3] = useState('ferdi');
  const [selectedItem4, setSelectedItem4] = useState('ferdi');
  const [selectedItem5, setSelectedItem5] = useState('ferdi');
  const [selectedItem6, setSelectedItem6] = useState('ferdi');
  const [selectedItem7, setSelectedItem7] = useState('ferdi');

  const handleItemClick = (item, position) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
    }
    scrollToStatus();
    const animationElement = document.querySelector('.animation');
    animationElement.className = `animation ${position}`;
  };
  const handleItemClick2 = (item) => {
    if (selectedItem2 !== item) {
      setSelectedItem2(item);
    }
  };
  const handleItemClick3 = (item) => {
    if (selectedItem3 !== item) {
      setSelectedItem3(item);
    }
  };
  const handleItemClick4 = (item) => {
    if (selectedItem4 !== item) {
      setSelectedItem4(item);
    }
  };
  const handleItemClick5 = (item) => {
    if (selectedItem5 !== item) {
      setSelectedItem5(item);
    }
  };
  const handleItemClick6 = (item) => {
    if (selectedItem6 !== item) {
      setSelectedItem6(item);
    }
  };
  const handleItemClick7 = (item) => {
    if (selectedItem7 !== item) {
      setSelectedItem7(item);
    }
  };

  const data1 = [
    {
      id: 1,
      image: '/assets/packets/basic.png',
      width: 26,
      height: 29,
      name: 'Basic',
      speed: 20,
      title: 'Pulsuz qoşulma 1',
      description: 'Pulsuz qoşulma',
      price: 15,
    },
    {
      id: 2,
      image: '/assets/packets/silver.png',
      width: 30,
      height: 28,
      name: 'Silver',
      speed: 40,
      title: 'Geniş əhatə dairəsi',
      description: 'Pulsuz qoşulma',
      price: 18,
    },
    {
      id: 3,
      image: '/assets/packets/gold.png',
      width: 40,
      height: 35,
      name: 'Gold',
      speed: 50,
      title: 'Keyfiyyətli xidmət',
      description: 'Pulsuz qoşulma',
      price: 19,
    },
    {
      id: 4,
      id: 'pro',
      image: '/assets/packets/platinum.png',
      width: 41,
      height: 30,
      name: 'Platinum',
      speed: 50,
      title: '24/7 Müştəri Dəstəyi',
      description: 'Pulsuz qoşulma',
      price: 25,
    },
    {
      id: 5,
      image: '/assets/packets/extra.png',
      width: 34,
      height: 28,
      name: 'Extra',
      speed: 70,
      title: 'Geniş Texniki İmkanlar',
      description: 'Pulsuz qoşulma',
      price: 35,
    },
  ];
  const data2 = [
    {
      id: 1,
      image: '/assets/packets/basic.png',
      width: 26,
      height: 29,
      name: 'Basic',
      speed: 20,
      title: 'Pulsuz qoşulma 1',
      description: 'Pulsuz qoşulma',
      price: 15,
    },
    {
      id: 2,
      image: '/assets/packets/gold.png',
      width: 40,
      height: 35,
      name: 'Gold',
      speed: 50,
      title: 'Keyfiyyətli xidmət',
      description: 'Pulsuz qoşulma',
      price: 19,
    },
    {
      id: 3,
      id: 'pro',
      image: '/assets/packets/platinum.png',
      width: 41,
      height: 30,
      name: 'Platinum',
      speed: 50,
      title: '24/7 Müştəri Dəstəyi',
      description: 'Pulsuz qoşulma',
      price: 25,
    },
  ];
  const data3 = [
    {
      id: 1,
      image: '/assets/packets/basic.png',
      width: 26,
      height: 29,
      name: 'Basic',
      speed: 20,
      title: 'Pulsuz qoşulma 1',
      description: 'Pulsuz qoşulma',
      price: 15,
    },
  ];
  const data4 = [
    {
      id: 1,
      image: '/assets/packets/basic.png',
      width: 26,
      height: 29,
      name: 'Basic',
      speed: 20,
      title: 'Pulsuz qoşulma 1',
      description: 'Pulsuz qoşulma',
      price: 15,
    },
    {
      id: 2,
      id: 'pro',
      image: '/assets/packets/platinum.png',
      width: 41,
      height: 30,
      name: 'Platinum',
      speed: 50,
      title: '24/7 Müştəri Dəstəyi',
      description: 'Pulsuz qoşulma',
      price: 25,
    },
  ];
  const data5 = [
    {
      id: 1,
      image: '/assets/packets/basic.png',
      width: 26,
      height: 29,
      name: 'Basic',
      speed: 20,
      title: 'Pulsuz qoşulma 1',
      description: 'Pulsuz qoşulma',
      price: 15,
    },
    {
      id: 2,
      image: '/assets/packets/silver.png',
      width: 30,
      height: 28,
      name: 'Silver',
      speed: 40,
      title: 'Geniş əhatə dairəsi',
      description: 'Pulsuz qoşulma',
      price: 18,
    },
    {
      id: 3,
      image: '/assets/packets/gold.png',
      width: 40,
      height: 35,
      name: 'Gold',
      speed: 50,
      title: 'Keyfiyyətli xidmət',
      description: 'Pulsuz qoşulma',
      price: 19,
    },
    {
      id: 4,
      id: 'pro',
      image: '/assets/packets/platinum.png',
      width: 41,
      height: 30,
      name: 'Platinum',
      speed: 50,
      title: '24/7 Müştəri Dəstəyi',
      description: 'Pulsuz qoşulma',
      price: 25,
    },
    {
      id: 5,
      image: '/assets/packets/extra.png',
      width: 34,
      height: 28,
      name: 'Extra',
      speed: 70,
      title: 'Geniş Texniki İmkanlar',
      description: 'Pulsuz qoşulma',
      price: 35,
    },
  ];

  const scrollToStatus = () => {
    const element = document.getElementById('');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  const { visible, setVisible } = useVisibleContext();

  const pageTitle = 'Your Home Post Title';
  const pageDescription = 'Description of your home post.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {/* {visible && (
        <div className="home-wrapper-1 container max-w-5xl max-sm:hidden py-10 mx-auto relative overflow-hidden">
          <div className="grid grid-cols-3 justify-items-center">
            <Link to="services">
              <div className="">
                <div className="bg-[#DCC5F6] w-[102px] h-[102px] rounded-3xl flex items-center mx-auto">
                  <Image
                    src={worldstroke}
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
            <Link to="services">
              <div className="">
                <div className="bg-[#BFFFCD] w-32 h-32 rounded-3xl flex items-center mx-auto">
                  <Image
                    src={tvstroke}
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
            <Link to="services">
              <div className="">
                <div className="bg-[#D1E3FF] w-32 h-32 rounded-3xl flex items-center mx-auto">
                  <Image
                    src={phonestroke}
                    className="w-[56px] h-[56px] mx-auto"
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <h3 className=" font-medium text-[28px] py-4  tracking-[0.5px]">
                    Telefon
                  </h3>
                </div>
                <ul className="flex flex-col justify-center items-center gap-2 text-[#909090]  font-normal text-[]">
                  <li>SiP telefoniya</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      )} */}
      <div className="services-wrapper-1 max-w-[1100px] mx-auto pt-20 max-xl:pt-10">
        <div className="services-header mx-5 max-xl:hidden">
          <nav className="w-5xl relative h-[70px] rounded-[8px] text-[0px] border-b-[1px] flex justify-between  px-5 items-center overflow-hidden">
            <Link
              href="#fiber"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center ${
                selectedItem === 'fiber' ? 'active' : ''
              }`}
              onClick={() => {
                handleItemClick('fiber', 'start-fiber');
              }}
            >
              {selectedItem === 'fiber' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                  {' '}
                  <Image
                    src="/assets/services/speed.png"
                    width={25}
                    height={19}
                    className="h-[19px] white-img"
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  src="/assets/services/speed.png"
                  className="h-[25px]"
                  width={32}
                  height={25}
                  alt=""
                />
              )}{' '}
              Fiber Optik
            </Link>
            <a
              href="#iptv"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center ${
                selectedItem === 'iptv' ? 'active' : ''
              }`}
              onClick={() => {
                handleItemClick('iptv', 'start-tv');
              }}
            >
              {selectedItem === 'iptv' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center ">
                  {' '}
                  <Image
                    src="/assets/services/tv.png"
                    width={19}
                    height={19}
                    className="h-[19px] white-img "
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  src="/assets/services/tv.png"
                  width={25}
                  height={25}
                  className="h-[25px]"
                  alt=""
                />
              )}{' '}
              IP TV
            </a>
            <a
              href="#simsiz"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center ${
                selectedItem === 'simsiz' ? 'active' : ''
              }`}
              onClick={() => {
                handleItemClick('simsiz', 'start-simsiz');
              }}
            >
              {selectedItem === 'simsiz' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                  {' '}
                  <Image
                    src="/assets/services/router.png"
                    width={19}
                    height={19}
                    className="h-[19px] white-img"
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  src="/assets/services/router.png"
                  width={19}
                  height={25}
                  className="h-[25px]"
                  alt=""
                />
              )}{' '}
              SimSIz
            </a>
            <a
              href="#aix"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center ${
                selectedItem === 'aix' ? 'active' : ''
              }`}
              onClick={() => {
                handleItemClick('aix', 'start-aix');
              }}
            >
              {selectedItem === 'aix' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                  {' '}
                  <Image
                    src="/assets/services/aix.png"
                    width={19}
                    height={19}
                    className="h-[19px] white-img"
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  src="/assets/services/aix.png"
                  width={19}
                  height={25}
                  className="h-[25px]"
                  alt=""
                />
              )}{' '}
              AYRILMIS INTERNET XETTI
            </a>
            <a
              href="#adsl"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center ${
                selectedItem === 'adsl' ? 'active' : ''
              }`}
              onClick={() => {
                handleItemClick('adsl', 'start-adsl');
              }}
            >
              {selectedItem === 'adsl' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                  {' '}
                  <Image
                    src="/assets/services/aix.png"
                    width={19}
                    height={19}
                    className="h-[19px] white-img"
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  src="/assets/services/aix.png"
                  width={19}
                  height={25}
                  className="h-[25px]"
                  alt=""
                />
              )}{' '}
              ADSL
            </a>
            <div className="animation start-home "></div>
          </nav>
        </div>
        <div className="services-header  hidden max-xl:block ">
          <nav className="grid grid-cols-2 w-11/12 max-sm:gap-3 gap-5 ml-3 ">
            <a
              href="#fiber"
              className={`text-[12px] uppercase   leading-[50px] flex gap-1 justify-center items-center border border-[#5B2D90]  w-11/12 h-[33px] rounded-lg ${
                selectedItem === 'fiber'
                  ? 'border-[#5B2D90]'
                  : 'border-[#C6D0DD]'
              }`}
              onClick={() => {
                handleItemClick('fiber', 'start-fiber');
              }}
            >
              {selectedItem === 'fiber' ? (
                <Image
                  src="/assets/services/speed.png"
                  width={15}
                  height={15}
                  className="h-[15px] "
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/services/speed.png"
                  width={15}
                  height={15}
                  className="h-[15px] "
                  alt=""
                />
              )}
              Fiber Optik
            </a>
            <a
              href="#iptv"
              className={`text-[12px] uppercase   leading-[50px] flex gap-1 justify-center items-center border border-[#5B2D90] w-11/12 h-[33px] rounded-lg  ${
                selectedItem === 'iptv'
                  ? 'border-[#5B2D90]'
                  : 'border-[#C6D0DD]'
              }`}
              onClick={() => {
                handleItemClick('iptv', 'start-tv');
              }}
            >
              {selectedItem === 'iptv' ? (
                <Image
                  src="/assets/services/tv.png"
                  width={15}
                  height={15}
                  className="h-[15px] "
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/services/tv.png"
                  width={15}
                  height={15}
                  className="h-[15px]"
                  alt=""
                />
              )}{' '}
              IP TV
            </a>
            <a
              href="#simsiz"
              className={`text-[12px] uppercase   leading-[50px] flex gap-1 justify-center items-center border border-[#5B2D90] w-11/12 h-[33px] rounded-lg ${
                selectedItem === 'simsiz'
                  ? 'border-[#5B2D90]'
                  : 'border-[#C6D0DD]'
              }`}
              onClick={() => {
                handleItemClick('simsiz', 'start-simsiz');
              }}
            >
              {selectedItem === 'simsiz' ? (
                <Image
                  src="/assets/services/router.png"
                  width={15}
                  height={15}
                  className="h-[15px] "
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/services/router.png"
                  width={15}
                  height={15}
                  className="h-[15px]"
                  alt=""
                />
              )}{' '}
              SimSIz
            </a>
            <a
              href="#adsl"
              className={`text-[12px] uppercase   leading-[50px] flex gap-1 justify-center items-center border border-[#5B2D90] w-11/12 h-[33px] rounded-lg z-[-1] ${
                selectedItem === 'adsl'
                  ? 'border-[#5B2D90]'
                  : 'border-[#C6D0DD]'
              }`}
              onClick={() => {
                handleItemClick('adsl', 'start-adsl');
              }}
            >
              {selectedItem === 'adsl' ? (
                <Image
                  src="/assets/services/aix.png"
                  width={15}
                  height={15}
                  className="h-[13px] "
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/services/aix.png"
                  width={15}
                  height={15}
                  className="h-[15px]"
                  alt=""
                />
              )}{' '}
              Adsl
            </a>
            <a
              href="#aix"
              className={`text-[12px] uppercase   leading-[50px] flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                selectedItem === 'aix' ? 'border-[#5B2D90]' : 'border-[#C6D0DD]'
              }`}
              onClick={() => {
                handleItemClick('aix', 'start-aix');
              }}
            >
              {selectedItem === 'aix' ? (
                <Image
                  src="/assets/services/aix.png"
                  width={15}
                  height={13}
                  className="h-[13px] "
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/services/aix.png"
                  width={15}
                  height={15}
                  className="h-[15px]"
                  alt=""
                />
              )}{' '}
              AYRILMIS INTERNET XETTI
            </a>
          </nav>
        </div>
        <div
          className="grid grid-cols-3 max-xl:grid-cols-2 py-20 max-xl:mx-5 gap-10"
          id="fiber"
        >
          <div className="col-span-1 max-xl:col-span-2">
            <Image
              src="/assets/services/fiberoptik.png"
              width={100}
              height={100}
              className="max-xl:hidden"
              alt=""
            />
            <Image
              src="/assets/services/smfiberoptik.png"
              width={100}
              height={100}
              className="hidden max-xl:block"
              alt=""
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center gap-5">
            <h3 className="text-purple-900 text-[40px] font-bold leading-10 max-md:text-[20px] max-xl:text-[30px] uppercase overflow-hidden">
              Fiber optik
            </h3>{' '}
            <p className="text-[#757575] text-[16px] max-xl:text-[12px] font-medium">
              Ölkənin ən qabaqcıl İnternet provayderlərindən biri olan
              Azeronline ölkə üzrə bir çox ərazilərdə GPON texnologiyası ilə
              internet xidməti təqdim edir. Təqdim edilən xidmət üzrə mövcud
              olan tariflər aşağıda göstərilmişdir. Bakı və Abşeron ərazisi üzrə
              seçim Silver tarifindən başlayır. 
              <br /> <br />
              Ətraflı məlumat və şərtlər ilə tariflər bölməsindən tanış ola,
              əhatə dairəmizdə olub olmadığınızı isə əsas səhifədən yoxlaya
              bilərsiniz.
            </p>
          </div>
        </div>
      </div>
      <div className="services-wrapper-2 max-w-[1100px] mx-auto py-10">
        <div className="max-xl:hidden">
          <nav className="w-[1020px] relative h-[70px] rounded-[8px] text-[0px] border-b-[1px] flex justify-center  px-5 items-center gap-64 overflow-hidden">
            <a
              href="#/"
              className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                selectedItem === 'ferdi' ? 'active' : ''
              }`}
              onClick={() => {
                handleItemClick('ferdi', 'start-ferdi');
              }}
            >
              {selectedItem === 'ferdi' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                  {' '}
                  <Image
                    src="/assets/services/speed.png"
                    width={25}
                    height={19}
                    className="h-[19px] white-img"
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  src="/assets/services/speed.png"
                  width={32}
                  height={19}
                  className="h-[25px]"
                  alt=""
                />
              )}{' '}
              Fərdi
            </a>
            <a
              href="#/"
              className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                selectedItem === 'biznes' ? 'active' : ''
              }`}
              onClick={() => {
                handleItemClick('biznes', 'start-biznes');
              }}
            >
              {selectedItem === 'biznes' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                  {' '}
                  <Image
                    src="/assets/services/biznes.png"
                    width={19}
                    height={19}
                    className="h-[19px] white-img"
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  src="/assets/services/biznes.png"
                  width={25}
                  height={25}
                  className="h-[25px]"
                  alt=""
                />
              )}{' '}
              Biznes
            </a>
            <div className="animation2 start-ferdi"></div>
          </nav>
        </div>
        <div className="hidden max-xl:block">
          <nav className=" flex gap-10 justify-center mx-5">
            <a
              href="#/"
              className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                selectedItem2 === 'ferdi'
                  ? 'border-[#5B2D90]'
                  : 'border-[#C6D0DD]'
              }`}
              onClick={() => {
                handleItemClick2('ferdi', 'start-ferdi');
              }}
            >
              {selectedItem2 === 'ferdi' ? (
                <Image
                  src="/assets/services/speed.png"
                  width={13}
                  height={13}
                  className="h-[13px] white-img"
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/services/speed.png"
                  width={15}
                  height={15}
                  className="h-[15px]"
                  alt=""
                />
              )}{' '}
              Fərdi
            </a>
            <a
              href="#/"
              className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                selectedItem2 === 'biznes'
                  ? 'border-[#5B2D90]'
                  : 'border-[#C6D0DD]'
              }`}
              onClick={() => {
                handleItemClick2('biznes', 'start-biznes');
              }}
            >
              {selectedItem2 === 'biznes' ? (
                <Image
                  src="/assets/services/biznes.png"
                  width={13}
                  height={13}
                  className="h-[13px]"
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/services/biznes.png"
                  width={15}
                  height={15}
                  className="h-[15px]"
                  alt=""
                />
              )}{' '}
              Biznes
            </a>
          </nav>
        </div>
        <div className="grid grid-cols-5 justify-items-center gap-5 mt-10 max-xl:hidden">
          {data1.map((item) => (
            <div className="h-[500px] w-[210px] p-0 op" key={item.id}>
              <div
                key={item.id}
                className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0  mt-5  ml-1 ${
                  item.id === 'key' ? 'outline-red' : ''
                }`}
              >
                <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    alt=""
                  />
                </div>
                <p className="text-[20px] font-bold text-white">{item.name}</p>
                <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                <p className="text-white text-[24px] font-bold">
                  {item.speed} Mb/s
                </p>
                <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                  <Image
                    src="/assets/packets/tv2.png"
                    width={10}
                    height={10}
                    alt=""
                  />
                  <p className="text-[10px] font-bold text-[#5B2D90]">IP TV</p>
                </div>
                <p className="text-white text-[10px] font-bold flex gap-1">
                  <Image
                    src="/assets/packets/pq2.png"
                    width={11}
                    height={15}
                    alt=""
                  />
                  {item.description}
                </p>
                <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                  {item.price}{' '}
                  <Image
                    src="/assets/packets/azn.png"
                    width={20}
                    height={20}
                    className="h-5"
                    alt=""
                  />
                </p>
                <TariffsPopup />
              </div>
              <div className="flex justify-center">
                <div
                  className={`${
                    item.id === 'pro' ? 'flag-services' : 'hidden'
                  }   mt-0 text-[8px] text-center font-medium justify-center`}
                >
                  Üstünlük verilən
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper">
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={230}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper2"
          >
            {data1.map((item) => (
              <SwiperSlide key={item.id}>
                {' '}
                <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                  <div
                    key={item.id}
                    className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                      item.id === 'pro' ? 'outline-red' : ''
                    }`}
                  >
                    <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                      <Image
                        src={item.image}
                        width={item.width}
                        height={item.height}
                        alt=""
                      />
                    </div>
                    <p className="text-[20px] font-bold text-white">
                      {item.name}
                    </p>
                    <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                    <p className="text-white text-[24px] font-bold">
                      {item.speed} Mb/s
                    </p>
                    <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                      <Image
                        src="/assets/packets/tv2.png"
                        width={10}
                        height={10}
                        alt=""
                      />
                      <p className="text-[10px] font-bold text-[#5B2D90]">
                        IP TV
                      </p>
                    </div>
                    <p className="text-white text-[10px] font-bold flex gap-1">
                      <Image
                        src="/assets/packets/pq2.png"
                        width={11}
                        height={15}
                        alt=""
                      />
                      {item.description}
                    </p>
                    <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                    <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                      {item.price}{' '}
                      <Image
                        src="/assets/packets/azn.png"
                        width={20}
                        height={20}
                        className="h-5"
                        alt=""
                      />
                    </p>
                    <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                      Ətraflı məlumat
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className={`${
                        item.id === 'pro' ? 'flag-services' : 'hidden'
                      }   mt-0 text-[8px] text-center font-medium justify-center`}
                    >
                      Üstünlük verilən
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="max-xl:hidden">
          <nav className="w-[1020px] relative h-[70px] rounded-[8px] text-[0px] border-b-[1px] flex justify-center  px-5 items-center gap-64 overflow-hidden">
            <a
              href="#/"
              className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                selectedItem3 === 'ferdi' ? 'active' : ''
              }`}
              onClick={() => {
                handleItemClick3('ferdi', 'start-ferdi');
              }}
            >
              {selectedItem3 === 'ferdi' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                  {' '}
                  <Image
                    src="/assets/services/speed.png"
                    width={25}
                    height={19}
                    className="h-[19px] white-img"
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  src="/assets/services/speed.png"
                  width={32}
                  height={25}
                  className="h-[25px]"
                  alt=""
                />
              )}{' '}
              Fərdi
            </a>
            <a
              href="#/"
              className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                selectedItem3 === 'biznes' ? 'active' : ''
              }`}
              onClick={() => {
                handleItemClick3('biznes', 'start-biznes');
              }}
            >
              {selectedItem3 === 'biznes' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                  {' '}
                  <Image
                    src="/assets/services/biznes.png"
                    width={19}
                    height={19}
                    className="h-[19px] white-img"
                    alt=""
                  />
                </div>
              ) : (
                <Image
                  src="/assets/services/biznes.png"
                  width={25}
                  height={25}
                  className="h-[25px]"
                  alt=""
                />
              )}{' '}
              Biznes
            </a>
            <div className="animation2 start-ferdi"></div>
          </nav>
        </div>
        <div className="hidden max-xl:block">
          <nav className=" flex gap-10 justify-center mx-5">
            <a
              href="#/"
              className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                selectedItem3 === 'ferdi'
                  ? 'border-[#5B2D90]'
                  : 'border-[#C6D0DD]'
              }`}
              onClick={() => {
                handleItemClick3('ferdi', 'start-ferdi');
              }}
            >
              {selectedItem3 === 'ferdi' ? (
                <Image
                  src="/assets/services/speed.png"
                  width={13}
                  height={13}
                  className="h-[13px] white-img"
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/services/speed.png"
                  width={15}
                  height={15}
                  className="h-[15px]"
                  alt=""
                />
              )}{' '}
              Fərdi
            </a>
            <a
              href="#/"
              className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                selectedItem3 === 'biznes'
                  ? 'border-[#5B2D90]'
                  : 'border-[#C6D0DD]'
              }`}
              onClick={() => {
                handleItemClick3('biznes', 'start-biznes');
              }}
            >
              {selectedItem3 === 'biznes' ? (
                <Image
                  src="/assets/services/biznes.png"
                  width={13}
                  height={13}
                  className="h-[13px]"
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/services/biznes.png"
                  width={15}
                  height={15}
                  className="h-[15px]"
                  alt=""
                />
              )}{' '}
              Biznes
            </a>
          </nav>
        </div>

        <div className="flex  gap-5  justify-center  mt-10 max-xl:hidden">
          {data2.map((item) => (
            <div className="h-[500px] w-[210px] p-0 op" key={item.id}>
              <div
                key={item.id}
                className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0  mt-5  ml-1 ${
                  item.id === 'pro' ? 'outline-red' : ''
                }`}
              >
                <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    alt=""
                  />
                </div>
                <p className="text-[20px] font-bold text-white">{item.name}</p>
                <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                <p className="text-white text-[24px] font-bold">
                  {item.speed} Mb/s
                </p>
                <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                  <Image
                    src="/assets/packets/tv2.png"
                    width={5}
                    height={5}
                    alt=""
                  />
                  <p className="text-[10px] font-bold text-[#5B2D90]">IP TV</p>
                </div>
                <p className="text-white text-[10px] font-bold flex gap-1">
                  <Image
                    src="/assets/packets/pq2.png"
                    width={11}
                    height={15}
                    alt=""
                  />
                  {item.description}
                </p>
                <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                  {item.price}{' '}
                  <Image
                    src="/assets/packets/azn.png"
                    width={20}
                    height={20}
                    className="h-5"
                    alt=""
                  />
                </p>
                <TariffsPopup />
              </div>
              <div className="flex justify-center">
                <div
                  className={`${
                    item.id === 'pro' ? 'flag-services' : 'hidden'
                  }   mt-0 text-[8px] text-center font-medium justify-center`}
                >
                  Üstünlük verilən
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper">
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={230}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper2"
          >
            {data2.map((item) => (
              <SwiperSlide key={item.id}>
                {' '}
                <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                  <div
                    key={item.id}
                    className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                      item.id === 'key' ? 'outline-red' : ''
                    }`}
                  >
                    <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                      <Image
                        src={item.image}
                        width={item.width}
                        height={item.height}
                        alt=""
                      />
                    </div>
                    <p className="text-[20px] font-bold text-white">
                      {item.name}
                    </p>
                    <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                    <p className="text-white text-[24px] font-bold">
                      {item.speed} Mb/s
                    </p>
                    <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                      <Image
                        src="/assets/packets/tv2.png"
                        width={10}
                        height={10}
                        alt=""
                      />{' '}
                      <p className="text-[10px] font-bold text-[#5B2D90]">
                        IP TV
                      </p>
                    </div>
                    <p className="text-white text-[10px] font-bold flex gap-1">
                      <Image
                        src="/assets/packets/pq2.png"
                        width={11}
                        height={15}
                        alt=""
                      />
                      {item.description}
                    </p>
                    <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                    <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                      {item.price}
                      <Image
                        src="/assets/packets/azn.png"
                        width={20}
                        height={20}
                        className="h-5"
                        alt=""
                      />
                    </p>
                    <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                      Ətraflı məlumat
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className={`${
                        item.id === 'pro' ? 'flag-services' : 'hidden'
                      }   mt-0 text-[8px] text-center font-medium justify-center`}
                    >
                      Üstünlük verilən
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="services-wrapper-3 bg-[#F7F6FB]" id="iptv">
        <div className="max-w-[1010px] mx-auto py-10" id="">
          <div className="flex flex-col gap-5 justify-center items-center py-10">
            {' '}
            <h3 className="text-purple-900 text-[40px] font-bold leading-10 uppercase overflow-hidden">
              IP TV
            </h3>
            <p className="text-center max-w-4xl">
              IPTV Fiber optik internet vasitəsilə fəaliyyət göstərən yeni nəsil
              rəqəmsal televiziyadır. Xidmət vasitəsilə siz, 200+ yerli və
              əcnəbi telekanala baxa bilərsiniz.
            </p>
          </div>

          <div className="max-xl:hidden">
            <nav className="w-[1020px] relative h-[70px] rounded-[8px] text-[0px] border-b-[1px] flex justify-center  px-5 items-center gap-64 overflow-hidden">
              <a
                href="#/"
                className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                  selectedItem4 === 'ferdi' ? 'active' : ''
                }`}
                onClick={() => {
                  handleItemClick4('ferdi', 'start-ferdi');
                }}
              >
                {selectedItem4 === 'ferdi' ? (
                  <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                    {' '}
                    <Image
                      src="/assets/services/speed.png"
                      width={25}
                      height={19}
                      className="h-[19px] white-img"
                      alt=""
                    />
                  </div>
                ) : (
                  <Image
                    src="/assets/services/speed.png"
                    width={32}
                    height={25}
                    className="h-[25px]"
                    alt=""
                  />
                )}{' '}
                Fərdi
              </a>
              <a
                href="#/"
                className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                  selectedItem4 === 'biznes' ? 'active' : ''
                }`}
                onClick={() => {
                  handleItemClick4('biznes', 'start-biznes');
                }}
              >
                {selectedItem4 === 'biznes' ? (
                  <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                    {' '}
                    <Image
                      src="/assets/services/biznes.png"
                      width={19}
                      height={19}
                      className="h-[19px] white-img"
                      alt=""
                    />
                  </div>
                ) : (
                  <Image
                    src="/assets/services/biznes.png"
                    width={25}
                    height={25}
                    className="h-[25px]"
                    alt=""
                  />
                )}{' '}
                Biznes
              </a>
              <div className="animation2 start-ferdi"></div>
            </nav>
          </div>
          <div className="hidden max-xl:block">
            <nav className=" flex gap-10 justify-center mx-5">
              <a
                href="#/"
                className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                  selectedItem4 === 'ferdi'
                    ? 'border-[#5B2D90]'
                    : 'border-[#C6D0DD]'
                }`}
                onClick={() => {
                  handleItemClick4('ferdi', 'start-ferdi');
                }}
              >
                {selectedItem4 === 'ferdi' ? (
                  <Image
                    src="/assets/services/speed.png"
                    width={13}
                    height={13}
                    className="h-[13px] white-img"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/assets/services/speed.png"
                    width={15}
                    height={15}
                    className="h-[15px]"
                    alt=""
                  />
                )}{' '}
                Fərdi
              </a>
              <a
                href="#/"
                className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                  selectedItem4 === 'biznes'
                    ? 'border-[#5B2D90]'
                    : 'border-[#C6D0DD]'
                }`}
                onClick={() => {
                  handleItemClick4('biznes', 'start-biznes');
                }}
              >
                {selectedItem4 === 'biznes' ? (
                  <Image
                    src="/assets/services/biznes.png"
                    width={13}
                    height={13}
                    className="h-[13px]"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/assets/services/biznes.png"
                    width={15}
                    height={15}
                    className="h-[15px]"
                    alt=""
                  />
                )}{' '}
                Biznes
              </a>
            </nav>
          </div>
          <div className="flex  justify-center items-center gap-5 mt-10 max-xl:hidden">
            {data3.map((item) => (
              <div className="h-[500px] w-[210px] p-0 op" key={item.id}>
                <div
                  key={item.id}
                  className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0  mt-5  ml-1 ${
                    item.id === 'key' ? 'outline-red' : ''
                  }`}
                >
                  <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt=""
                    />
                  </div>
                  <p className="text-[20px] font-bold text-white">
                    {item.name}
                  </p>
                  <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                  <p className="text-white text-[24px] font-bold">
                    {item.speed} Mb/s
                  </p>
                  <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                    <Image
                      src="/assets/packets/tv2.png"
                      width={10}
                      height={10}
                      alt=""
                    />
                    <p className="text-[10px] font-bold text-[#5B2D90]">
                      IP TV
                    </p>
                  </div>
                  <p className="text-white text-[10px] font-bold flex gap-1">
                    <Image
                      src="/assets/packets/pq2.png"
                      width={11}
                      height={15}
                      alt=""
                    />
                    {item.description}
                  </p>
                  <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                  <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                    {item.price}{' '}
                    <Image
                      src="/assets/packets/azn.png"
                      width={20}
                      height={20}
                      className="h-5"
                      alt=""
                    />
                  </p>
                  <TariffsPopup />
                </div>
                <div className="flex justify-center">
                  <div
                    className={`${
                      item.id === 'pro' ? 'flag-services' : 'hidden'
                    }   mt-0 text-[8px] text-center font-medium justify-center`}
                  >
                    Üstünlük verilən
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper">
            <Swiper
              slidesPerView={2}
              centeredSlides={true}
              spaceBetween={230}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper2"
            >
              {data2.map((item) => (
                <SwiperSlide key={item.id}>
                  {' '}
                  <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                    <div
                      key={item.id}
                      className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                        item.id === 'pro' ? 'outline-red' : ''
                      }`}
                    >
                      <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                        <Image
                          src={item.image}
                          width={item.width}
                          height={item.height}
                          alt=""
                        />
                      </div>
                      <p className="text-[20px] font-bold text-white">
                        {item.name}
                      </p>
                      <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                      <p className="text-white text-[24px] font-bold">
                        {item.speed} Mb/s
                      </p>
                      <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                        <Image
                          src="/assets/packets/tv2.png"
                          width={10}
                          height={10}
                          alt=""
                        />{' '}
                        <p className="text-[10px] font-bold text-[#5B2D90]">
                          IP TV
                        </p>
                      </div>
                      <p className="text-white text-[10px] font-bold flex gap-1">
                        <Image
                          src="/assets/packets/pq2.png"
                          width={11}
                          height={15}
                          alt=""
                        />
                        {item.description}
                      </p>
                      <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                      <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                        {item.price}
                        <Image
                          src="/assets/packets/azn.png"
                          width={20}
                          height={20}
                          className="h-5"
                          alt=""
                        />
                      </p>
                      <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                        Ətraflı məlumat
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div
                        className={`${
                          item.id === 'pro' ? 'flag-services' : 'hidden'
                        }   mt-0 text-[8px] text-center font-medium justify-center`}
                      >
                        Üstünlük verilən
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="max-xl:hidden">
            <nav className="w-[1020px] relative h-[70px] rounded-[8px] text-[0px] border-b-[1px] flex justify-center  px-5 items-center gap-64 overflow-hidden">
              <a
                href="#/"
                className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                  selectedItem5 === 'ferdi' ? 'active' : ''
                }`}
                onClick={() => {
                  handleItemClick5('ferdi', 'start-ferdi');
                }}
              >
                {selectedItem5 === 'ferdi' ? (
                  <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                    {' '}
                    <Image
                      src="/assets/services/speed.png"
                      width={25}
                      height={19}
                      className="h-[19px] white-img"
                      alt=""
                    />
                  </div>
                ) : (
                  <Image
                    src="/assets/services/speed.png"
                    width={32}
                    height={25}
                    className="h-[25px]"
                    alt=""
                  />
                )}{' '}
                Fərdi
              </a>
              <a
                href="#/"
                className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                  selectedItem5 === 'biznes' ? 'active' : ''
                }`}
                onClick={() => {
                  handleItemClick5('biznes', 'start-biznes');
                }}
              >
                {selectedItem5 === 'biznes' ? (
                  <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                    {' '}
                    <Image
                      src="/assets/services/biznes.png"
                      width={19}
                      height={19}
                      className="h-[19px] white-img"
                      alt=""
                    />
                  </div>
                ) : (
                  <Image
                    src="/assets/services/biznes.png"
                    width={25}
                    height={25}
                    className="h-[25px]"
                    alt=""
                  />
                )}{' '}
                Biznes
              </a>
              <div className="animation2 start-ferdi"></div>
            </nav>
          </div>
          <div className="hidden max-xl:block">
            <nav className=" flex gap-10 justify-center mx-5">
              <a
                href="#/"
                className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                  selectedItem5 === 'ferdi'
                    ? 'border-[#5B2D90]'
                    : 'border-[#C6D0DD]'
                }`}
                onClick={() => {
                  handleItemClick5('ferdi', 'start-ferdi');
                }}
              >
                {selectedItem5 === 'ferdi' ? (
                  <Image
                    src="/assets/services/speed.png"
                    width={13}
                    height={13}
                    className="h-[13px] white-img"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/assets/services/speed.png"
                    width={15}
                    height={15}
                    className="h-[15px]"
                    alt=""
                  />
                )}{' '}
                Fərdi
              </a>
              <a
                href="#/"
                className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                  selectedItem5 === 'biznes'
                    ? 'border-[#5B2D90]'
                    : 'border-[#C6D0DD]'
                }`}
                onClick={() => {
                  handleItemClick5('biznes', 'start-biznes');
                }}
              >
                {selectedItem5 === 'biznes' ? (
                  <Image
                    src="/assets/services/biznes.png"
                    width={13}
                    height={13}
                    className="h-[13px]"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/assets/services/biznes.png"
                    width={15}
                    height={15}
                    className="h-[15px]"
                    alt=""
                  />
                )}{' '}
                Biznes
              </a>
            </nav>
          </div>

          <div className="flex  justify-center items-center gap-5 mt-10 max-xl:hidden">
            {data4.map((item, index) => (
              <div className="h-[500px] w-[210px] p-0 op" key={item.id}>
                <div
                  key={item.id}
                  className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0  mt-5  ml-1 ${
                    item.id === 'key' ? 'outline-red' : ''
                  }`}
                >
                  <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt=""
                    />
                  </div>
                  <p className="text-[20px] font-bold text-white">
                    {item.name}
                  </p>
                  <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                  <p className="text-white text-[24px] font-bold">
                    {item.speed} Mb/s
                  </p>
                  <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                    <Image
                      src="/assets/packets/tv2.png"
                      width={10}
                      height={10}
                      alt=""
                    />
                    <p className="text-[10px] font-bold text-[#5B2D90]">
                      IP TV
                    </p>
                  </div>
                  <p className="text-white text-[10px] font-bold flex gap-1">
                    <Image
                      src="/assets/packets/pq2.png"
                      width={11}
                      height={15}
                      alt=""
                    />
                    {item.description}
                  </p>
                  <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                  <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                    {item.price}{' '}
                    <Image
                      src="/assets/packets/azn.png"
                      width={20}
                      height={20}
                      className="h-5"
                      alt=""
                    />
                  </p>
                  <TariffsPopup />
                </div>
                <div className="flex justify-center">
                  <div
                    className={`${
                      item.id === 'pro' ? 'flag-services' : 'hidden'
                    }   mt-0 text-[8px] text-center font-medium justify-center`}
                  >
                    Üstünlük verilən
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper">
            <Swiper
              slidesPerView={2}
              centeredSlides={true}
              spaceBetween={230}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper2"
            >
              {data2.map((item) => (
                <SwiperSlide key={item.id}>
                  {' '}
                  <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                    <div
                      key={item.id}
                      className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                        item.id === 'pro' ? 'outline-red' : ''
                      }`}
                    >
                      <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                        <Image
                          src={item.image}
                          width={item.width}
                          height={item.height}
                          alt=""
                        />
                      </div>
                      <p className="text-[20px] font-bold text-white">
                        {item.name}
                      </p>
                      <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                      <p className="text-white text-[24px] font-bold">
                        {item.speed} Mb/s
                      </p>
                      <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                        <Image
                          src="/assets/packets/tv2.png"
                          width={10}
                          height={10}
                          alt=""
                        />{' '}
                        <p className="text-[10px] font-bold text-[#5B2D90]">
                          IP TV
                        </p>
                      </div>
                      <p className="text-white text-[10px] font-bold flex gap-1">
                        <Image
                          src="/assets/packets/pq2.png"
                          width={11}
                          height={15}
                          alt=""
                        />
                        {item.description}
                      </p>
                      <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                      <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                        {item.price}
                        <Image
                          src="/assets/packets/azn.png"
                          width={20}
                          height={20}
                          className="h-5"
                          alt=""
                        />
                      </p>
                      <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                        Ətraflı məlumat
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div
                        className={`${
                          item.id === 'pro' ? 'flag-services' : 'hidden'
                        }   mt-0 text-[8px] text-center font-medium justify-center`}
                      >
                        Üstünlük verilən
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="">
            <h3 className="text-center py-3 text-[#757575] text-[16px] max-xl:text-[12px] overflow-hidden">
              Kanallar Olkeler uzre
            </h3>
            <div className="flex w-full mx-auto justify-center items-center rounded-lg  ">
              <table className="w-2/4  max-xl:w-border-[2px] border-[#C4C4C4]  rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 max-sm:px-3 max-sm:py-0"
                    >
                      Ölkə
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 max-sm:px-3 max-sm:py-0"
                    >
                      TV sayı
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 max-sm:px-3 max-sm:py-0"
                    >
                      Kanallar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 max-sm:px-3 max-sm:py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Azərbaycan
                    </th>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">21</td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">
                      Baxmaq
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 max-sm:px-3 max-sm:py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Türkiyə
                    </th>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">37</td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">
                      Baxmaq
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 max-sm:px-3 max-sm:py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Rusiya
                    </th>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">96</td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-0">
                      Baxmaq
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[16px] text-[#757575] max-xl:text-[12px] font-medium text-center py-3">
              DAHA ƏTRAFLI MƏLUMAT ÜÇÜN AZERONLINE IPTV BÖLÜMÜNƏ KEÇİD EDİN
            </p>
          </div>
          <div className="">
            <h3 className="text-black font-medium text-[24px] max-xl:text-[20px] text-center mt-20">
              Yerli və əcnəbi telekanallar xidmətinizdə
            </h3>
            <div className="mt-5 max-xl:mx-10">
              <Image
                src="/assets/services/telekanallar.png"
                width={100}
                height={100}
                className="max-xl:hidden"
                alt=""
              />
              <Image
                src="/assets/services/smtelekanallar.png"
                width={100}
                height={100}
                className="hidden max-xl:block"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="services-wrapper-4 max-w-[1087px] mx-auto pt-20"
        id="simsiz"
      >
        <div className="grid grid-cols-3 max-xl:grid-cols-2 py-20 max-xl:mx-7 gap-10">
          <div className="col-span-1 max-xl:col-span-2">
            <Image
              src="/assets/services/simsiz.png"
              width={100}
              height={100}
              className="max-xl:hidden"
              alt=""
            />
            <Image
              src="/assets/services/smsimsiz.png"
              width={100}
              height={100}
              className="hidden max-xl:block"
              alt=""
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center gap-5">
            <h3 className="text-purple-900 text-[40px] font-bold leading-10 max-md:text-[20px] max-xl:text-[30px] uppercase overflow-hidden">
              SimSiz
            </h3>{' '}
            <p className="text-[#757575] text-[16px] max-xl:text-[12px] font-medium">
              Naqilsiz, hava ilə ötürülən Simsiz internet xidmətinə birdəfəlik
              qoşulma haqqı 225 AZN təşkil edir. Birdəfəlik qoşulma haqqına
              kabel çəkilişi, müvafiq avadanlıq və Wi-Fi ruteri daxildir. Ruter
              abunəçinin mülkiyyətinə verilir. <br /> <br />
              <span className="text-black">ƏHATƏ DAİRƏMİZ</span> <br />
              Bakı, Ağcabədi, Ağdaş, Astara, Bərdə, Cəlilabad, Gəncə, İmişli,
              İsmayıllı, Lənkəran, Lənkəran, Masallı, Qazax, Quba, Sabirabad,
              Salyan, Şamaxi, Şəki, Şəmkir, Şirvan, Sumqayıt, Tağıyev qəsəbəsi,
              Yevlax, Zaqatala <br /> <br /> Təqdim edilən xidmət üzrə mövcud
              olan tariflər ilə aşağıdan tanış ola bilərsiniz.
            </p>
          </div>
        </div>
        <div className="services-wrapper max-w-[1087px] mx-auto py-10">
          <div className="max-xl:hidden">
            <nav className="w-[1020px] relative h-[70px] rounded-[8px] text-[0px] border-b-[1px] flex justify-center  px-5 items-center gap-64 overflow-hidden">
              <a
                href="#/"
                className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                  selectedItem6 === 'ferdi' ? 'active' : ''
                }`}
                onClick={() => {
                  handleItemClick6('ferdi', 'start-ferdi');
                }}
              >
                {selectedItem6 === 'ferdi' ? (
                  <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                    {' '}
                    <Image
                      src="/assets/services/speed.png"
                      width={25}
                      height={19}
                      className="h-[19px] white-img"
                      alt=""
                    />
                  </div>
                ) : (
                  <Image
                    src="/assets/services/speed.png"
                    width={32}
                    height={25}
                    className="h-[25px]"
                    alt=""
                  />
                )}{' '}
                Fərdi
              </a>
              <a
                href="#/"
                className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                  selectedItem6 === 'biznes' ? 'active' : ''
                }`}
                onClick={() => {
                  handleItemClick6('biznes', 'start-biznes');
                }}
              >
                {selectedItem6 === 'biznes' ? (
                  <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                    {' '}
                    <Image
                      src="/assets/services/biznes.png"
                      width={19}
                      height={19}
                      className="h-[19px] white-img"
                      alt=""
                    />
                  </div>
                ) : (
                  <Image
                    src="/assets/services/biznes.png"
                    width={25}
                    height={25}
                    className="h-[25px]"
                    alt=""
                  />
                )}{' '}
                Biznes
              </a>
              <div className="animation2 start-ferdi"></div>
            </nav>
          </div>
          <div className="hidden max-xl:block">
            <nav className=" flex gap-10 justify-center mx-5">
              <a
                href="#/"
                className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                  selectedItem7 === 'ferdi'
                    ? 'border-[#5B2D90]'
                    : 'border-[#C6D0DD]'
                }`}
                onClick={() => {
                  handleItemClick7('ferdi', 'start-ferdi');
                }}
              >
                {selectedItem7 === 'ferdi' ? (
                  <Image
                    src="/assets/services/speed.png"
                    width={13}
                    height={13}
                    className="h-[13px] white-img"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/assets/services/speed.png"
                    width={15}
                    height={15}
                    className="h-[15px]"
                    alt=""
                  />
                )}{' '}
                Fərdi
              </a>
              <a
                href="#/"
                className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                  selectedItem7 === 'biznes'
                    ? 'border-[#5B2D90]'
                    : 'border-[#C6D0DD]'
                }`}
                onClick={() => {
                  handleItemClick7('biznes', 'start-biznes');
                }}
              >
                {selectedItem7 === 'biznes' ? (
                  <Image
                    src="/assets/services/biznes.png"
                    width={13}
                    height={13}
                    className="h-[13px]"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/assets/services/biznes.png"
                    width={15}
                    height={15}
                    className="h-[15px]"
                    alt=""
                  />
                )}{' '}
                Biznes
              </a>
            </nav>
          </div>
          <div className="grid grid-cols-5 justify-items-center gap-5 mt-10 max-xl:hidden">
            {data1.map((item, index) => (
              <div className="h-[500px] w-[210px] p-0 op" key={item.id}>
                <div
                  key={index}
                  className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0  mt-5  ml-1 ${
                    item.id === 'pro' ? 'outline-red' : ''
                  }`}
                >
                  <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt=""
                    />
                  </div>
                  <p className="text-[20px] font-bold text-white">
                    {item.name}
                  </p>
                  <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                  <p className="text-white text-[24px] font-bold">
                    {item.speed} Mb/s
                  </p>
                  <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                    <Image
                      src="/assets/packets/tv2.png"
                      width={10}
                      height={10}
                      alt=""
                    />
                    <p className="text-[10px] font-bold text-[#5B2D90]">
                      IP TV
                    </p>
                  </div>
                  <p className="text-white text-[10px] font-bold flex gap-1">
                    <Image
                      src="/assets/packets/pq2.png"
                      width={11}
                      height={15}
                      alt=""
                    />
                    {item.description}
                  </p>
                  <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                  <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                    {item.price}{' '}
                    <Image
                      src="/assets/packets/azn.png"
                      width={20}
                      height={20}
                      className="h-5"
                      alt=""
                    />
                  </p>
                  <TariffsPopup />
                </div>
                <div className="flex justify-center">
                  <div
                    className={`${
                      item.id === 'pro' ? 'flag-services' : 'hidden'
                    }   mt-0 text-[8px] text-center font-medium justify-center`}
                  >
                    Üstünlük verilən
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper">
            <Swiper
              slidesPerView={2}
              centeredSlides={true}
              spaceBetween={230}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper2"
            >
              {data2.map((item, index) => (
                <SwiperSlide key={index}>
                  {' '}
                  <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                    <div
                      key={index}
                      className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                        item.id === 'pro' ? 'outline-red' : ''
                      }`}
                    >
                      <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                        <Image
                          src={item.image}
                          width={item.width}
                          height={item.height}
                          alt=""
                        />
                      </div>
                      <p className="text-[20px] font-bold text-white">
                        {item.name}
                      </p>
                      <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                      <p className="text-white text-[24px] font-bold">
                        {item.speed} Mb/s
                      </p>
                      <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                        <Image
                          src="/assets/packets/tv2.png"
                          width={10}
                          height={10}
                          alt=""
                        />{' '}
                        <p className="text-[10px] font-bold text-[#5B2D90]">
                          IP TV
                        </p>
                      </div>
                      <p className="text-white text-[10px] font-bold flex gap-1">
                        <Image
                          src="/assets/packets/pq2.png"
                          width={11}
                          height={15}
                          alt=""
                        />
                        {item.description}
                      </p>
                      <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                      <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                        {item.price}
                        <Image
                          src="/assets/packets/azn.png"
                          width={20}
                          height={20}
                          className="h-5"
                          alt=""
                        />
                      </p>
                      <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                        Ətraflı məlumat
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div
                        className={`${
                          item.id === 'pro' ? 'flag-services' : 'hidden'
                        }   mt-0 text-[8px] text-center font-medium justify-center`}
                      >
                        Üstünlük verilən
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="max-xl:hidden">
            <nav className="w-[1020px] relative h-[70px] rounded-[8px] text-[0px] border-b-[1px] flex justify-center  px-5 items-center gap-64 overflow-hidden">
              <a
                href="#/"
                className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                  selectedItem7 === 'ferdi' ? 'active' : ''
                }`}
                onClick={() => {
                  handleItemClick7('ferdi', 'start-ferdi');
                }}
              >
                {selectedItem7 === 'ferdi' ? (
                  <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                    {' '}
                    <Image
                      src="/assets/services/speed.png"
                      width={25}
                      height={19}
                      className="h-[19px] white-img"
                      alt=""
                    />
                  </div>
                ) : (
                  <Image
                    src="/assets/services/speed.png"
                    width={32}
                    height={25}
                    className="h-[25px]"
                    alt=""
                  />
                )}{' '}
                Fərdi
              </a>
              <a
                href="#/"
                className={`text-[20px] uppercase relative    leading-[50px] flex gap-1 justify-center items-center ${
                  selectedItem7 === 'biznes' ? 'active' : ''
                }`}
                onClick={() => {
                  handleItemClick7('biznes', 'start-biznes');
                }}
              >
                {selectedItem7 === 'biznes' ? (
                  <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center">
                    {' '}
                    <Image
                      src="/assets/services/biznes.png"
                      width={19}
                      height={19}
                      className="h-[19px] white-img"
                      alt=""
                    />
                  </div>
                ) : (
                  <Image
                    src="/assets/services/biznes.png"
                    width={25}
                    height={25}
                    className="h-[25px]"
                    alt=""
                  />
                )}{' '}
                Biznes
              </a>
              <div className="animation2 start-ferdi"></div>
            </nav>
          </div>
          <div className="hidden max-xl:block">
            <nav className=" flex gap-10 justify-center mx-5">
              <a
                href="#/"
                className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                  selectedItem7 === 'ferdi'
                    ? 'border-[#5B2D90]'
                    : 'border-[#C6D0DD]'
                }`}
                onClick={() => {
                  handleItemClick7('ferdi', 'start-ferdi');
                }}
              >
                {selectedItem7 === 'ferdi' ? (
                  <Image
                    src="/assets/services/speed.png"
                    width={13}
                    height={13}
                    className="h-[13px] white-img"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/assets/services/speed.png"
                    width={15}
                    height={15}
                    className="h-[15px]"
                    alt=""
                  />
                )}{' '}
                Fərdi
              </a>
              <a
                href="#/"
                className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                  selectedItem7 === 'biznes'
                    ? 'border-[#5B2D90]'
                    : 'border-[#C6D0DD]'
                }`}
                onClick={() => {
                  handleItemClick7('biznes', 'start-biznes');
                }}
              >
                {selectedItem7 === 'biznes' ? (
                  <Image
                    src="/assets/services/biznes.png"
                    width={13}
                    height={13}
                    className="h-[13px]"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/assets/services/biznes.png"
                    width={15}
                    height={15}
                    className="h-[15px]"
                    alt=""
                  />
                )}{' '}
                Biznes
              </a>
            </nav>
          </div>

          <div className="flex flex-cols  justify-center items-center gap-10  mt-10 max-xl:hidden">
            {data2.map((item, index) => (
              <div className="h-[500px] w-[210px] p-0 op" key={item.id}>
                <div
                  key={index}
                  className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0  mt-5  ml-1 ${
                    item.id === 'pro' ? 'outline-red' : ''
                  }`}
                >
                  <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt=""
                    />
                  </div>
                  <p className="text-[20px] font-bold text-white">
                    {item.name}
                  </p>
                  <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                  <p className="text-white text-[24px] font-bold">
                    {item.speed} Mb/s
                  </p>
                  <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                    <Image
                      src="/assets/packets/tv2.png"
                      width={10}
                      height={10}
                      alt=""
                    />
                    <p className="text-[10px] font-bold text-[#5B2D90]">
                      IP TV
                    </p>
                  </div>
                  <p className="text-white text-[10px] font-bold flex gap-1">
                    <Image
                      src="/assets/packets/pq2.png"
                      width={11}
                      height={15}
                      alt=""
                    />
                    {item.description}
                  </p>
                  <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                  <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                    {item.price}{' '}
                    <Image
                      src="/assets/packets/azn.png"
                      width={20}
                      height={20}
                      className="h-5"
                      alt=""
                    />
                  </p>
                  <TariffsPopup />
                </div>
                <div className="flex justify-center">
                  <div
                    className={`${
                      item.id === 'pro' ? 'flag-services' : 'hidden'
                    }   mt-0 text-[8px] text-center font-medium justify-center`}
                  >
                    Üstünlük verilən
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper">
            <Swiper
              slidesPerView={2}
              centeredSlides={true}
              spaceBetween={230}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper2"
            >
              {data2.map((item, index) => (
                <SwiperSlide key={index}>
                  {' '}
                  <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                    <div
                      key={index}
                      className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                        item.id === 'pro' ? 'outline-red' : ''
                      }`}
                    >
                      <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                        <Image
                          src={item.image}
                          width={item.width}
                          height={item.height}
                          alt=""
                        />
                      </div>
                      <p className="text-[20px] font-bold text-white">
                        {item.name}
                      </p>
                      <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                      <p className="text-white text-[24px] font-bold">
                        {item.speed} Mb/s
                      </p>
                      <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                        <Image
                          src="/assets/packets/tv2.png"
                          width={10}
                          height={10}
                          alt=""
                        />{' '}
                        <p className="text-[10px] font-bold text-[#5B2D90]">
                          IP TV
                        </p>
                      </div>
                      <p className="text-white text-[10px] font-bold flex gap-1">
                        <Image
                          src="/assets/packets/pq2.png"
                          width={11}
                          height={15}
                          alt=""
                        />
                        {item.description}
                      </p>
                      <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                      <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                        {item.price}
                        <Image
                          src="/assets/packets/azn.png"
                          width={20}
                          height={20}
                          className="h-5"
                          alt=""
                        />
                      </p>
                      <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                        Ətraflı məlumat
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div
                        className={`${
                          item.id === 'pro' ? 'flag-services' : 'hidden'
                        }   mt-0 text-[8px] text-center font-medium justify-center`}
                      >
                        Üstünlük verilən
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="services-wrapper-5 bg-[#F7F6FB]" id="aix">
        <div className="max-w-[1087px] mx-auto py-10">
          <div className="grid grid-cols-3 max-xl:grid-cols-2 py-20 max-xl:mx-7 gap-10">
            <div className="col-span-1 max-xl:col-span-2">
              <Image
                src="/assets/services/ayrilmisinternetxetti.png"
                width={100}
                height={100}
                className="max-xl:hidden"
                alt=""
              />
              <Image
                src="/assets/services/smayrilmisinternetxetti.png"
                width={100}
                height={100}
                className="hidden max-xl:block"
                alt=""
              />
            </div>
            <div className="col-span-2 flex flex-col justify-center gap-5">
              <h3 className="text-purple-900 text-[40px] font-bold leading-10 max-md:text-[20px] max-xl:text-[30px] uppercase overflow-hidden">
                AYRILMIŞ İNTERNET XƏTTİ
              </h3>{' '}
              <p className="text-[#757575] text-[16px] max-xl:text-[12px] font-medium">
                Azeronline korporativ müştərilərinə yüksək sürətli və etibarlı
                internet bağlantısı -  “Ayrılmış İnternet Xətti”  xidmətini
                təklif edir. 
              </p>
              <br /> <br /> Üstünlüklər və imkanlar:
              <ul className="text-[#757575] text-[16px] max-xl:text-[12px] font-medium">
                <li> AYRILMIŞ İNTERNET XƏTTİ</li>
                <li> AYRILMIŞ İNTERNET XƏTTİ</li>
              </ul>
              <br />
              Ayrılmış İnternet Xətti” xidmətinə dair daha ətraflı məlumat və
              sifariş üçün (+994) 12 450-2020 nömrəsinə və ya
              business@azeronline.net e-poçt ünvanına müraciət edin.
            </div>
          </div>

          <div className="">
            <h3 className="text-center text-purple-900 text-[40px] font-bold leading-10 uppercase py-5 overflow-hidden max-md:text-[20px] max-xl:text-[30px]">
              Tərəfdaşlarımız
            </h3>{' '}
            <div className="mt-5 max-xl:mx-10">
              <Image
                src="/assets/services/terefdaslarimiz.png"
                width={100}
                height={100}
                className="max-xl:hidden"
                alt=""
              />
              <Image
                src="/assets/services/smterefdaslarimiz.png"
                width={100}
                height={100}
                className="hidden max-xl:block"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="services-wrapper-6 max-w-[1087px] mx-auto pt-10"
        id="adsl"
      >
        <h3 className="text-center text-purple-900 text-[40px] font-bold leading-10 uppercase overflow-hidden">
          ADSL
        </h3>
        <div className="flex  justify-center gap-3  items-center  mt-10 max-xl:hidden">
          {data5.map((item, index) => (
            <div className="h-[500px] w-[210px] p-0 op" key={item.id}>
              <div
                key={index}
                className={`w-[200px] h-[350px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0  mt-5  ml-1 ${
                  item.id === 'pro' ? 'outline-red' : ''
                }`}
              >
                <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    alt=""
                  />
                </div>
                <p className="text-[20px] font-bold text-white">{item.name}</p>
                <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                <p className="text-white text-[24px] font-bold">
                  {item.speed} Mb/s
                </p>
                <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                  <Image
                    src="/assets/packets/tv2.png"
                    width={10}
                    height={10}
                    alt=""
                  />
                  <p className="text-[10px] font-bold text-[#5B2D90]">IP TV</p>
                </div>
                <p className="text-white text-[10px] font-bold flex gap-1">
                  <Image
                    src="/assets/packets/pq2.png"
                    width={11}
                    height={15}
                    alt=""
                  />
                  {item.description}
                </p>
                <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                  {item.price}{' '}
                  <Image
                    src="/assets/packets/azn.png"
                    width={20}
                    height={20}
                    className="h-5"
                    alt=""
                  />
                </p>
                <TariffsPopup />
              </div>
              <div className="flex justify-center">
                <div
                  className={`${
                    item.id === 'pro' ? 'flag-services' : 'hidden'
                  }   mt-0 text-[8px] text-center font-medium justify-center`}
                >
                  Üstünlük verilən
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper">
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={230}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper2"
          >
            {data2.map((item, index) => (
              <SwiperSlide key={index}>
                {' '}
                <div className="h-[450px] w-[210px] flex flex-col justify-center items-center p-0 op">
                  <div
                    key={index}
                    className={`w-[200px] h-[350px] max-sm:w-[195px] max-sm:h-[332px] rounded-t-[100px]  rounded-b-[20px] bg-gradient-to-r from-[#653E98] to-[#3E2164] flex flex-col justify-start items-center gap-3  relative  0   ${
                      item.id === 'pro' ? 'outline-red' : ''
                    }`}
                  >
                    <div className="flex justify-center items-center w-[65px] h-[65px] bg-[#AB31D6] rounded-full mt-3">
                      <Image
                        src={item.image}
                        width={item.width}
                        height={item.height}
                        alt=""
                      />
                    </div>
                    <p className="text-[20px] font-bold text-white">
                      {item.name}
                    </p>
                    <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                    <p className="text-white text-[24px] font-bold">
                      {item.speed} Mb/s
                    </p>
                    <div className="bg-[#FFA35B] w-full h-10 hover:flex justify-center items-center gap-2 hidden fiber">
                      <Image
                        src="/assets/packets/tv2.png"
                        width={10}
                        height={10}
                        alt=""
                      />{' '}
                      <p className="text-[10px] font-bold text-[#5B2D90]">
                        IP TV
                      </p>
                    </div>
                    <p className="text-white text-[10px] font-bold flex gap-1">
                      <Image
                        src="/assets/packets/pq2.png"
                        width={11}
                        height={15}
                        alt=""
                      />
                      {item.description}
                    </p>
                    <div className="border-[1px] w-32 border-[#f1f1f1] opacity-20" />
                    <p className="text-[20px] font-bold text-[#FFA35B] flex justify-center items-center gap-1 overflow-hidden">
                      {item.price}
                      <Image
                        src="/assets/packets/azn.png"
                        width={20}
                        height={20}
                        className="h-5"
                        alt=""
                      />
                    </p>
                    <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
                      Ətraflı məlumat
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className={`${
                        item.id === 'pro' ? 'flag-services' : 'hidden'
                      }   mt-0 text-[8px] text-center font-medium justify-center`}
                    >
                      Üstünlük verilən
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default services;
