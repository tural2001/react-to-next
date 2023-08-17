import Image from 'next/image';
import React, { useState } from 'react';
import { TariffsPopup } from '../../components/TariffsPopup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ServiceLayout from './layout';
import Head from 'next/head';
const simsiz = () => {
  const [selectedItem, setSelectedItem] = useState('ferdi');
  const handleItemClick = (item) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
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

  const pageTitle = 'Your Services Post Title';
  const pageDescription = 'Description of your services post.';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <ServiceLayout>
        <div
          className="services-wrapper-4 max-w-[1087px] mx-auto pt-20"
          id="simsiz"
        >
          <div className="grid grid-cols-3 max-xl:grid-cols-2 py-20 max-xl:mx-7 gap-10">
            <div className="col-span-1 max-xl:col-span-2">
              <Image
                src="/assets/services/simsiz.png"
                width={500}
                height={300}
                layout="responsive"
                className="max-xl:hidden"
                alt=""
              />
              <Image
                src="/assets/services/smsimsiz.png"
                width={100}
                height={100}
                layout="responsive"
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
                kabel çəkilişi, müvafiq avadanlıq və Wi-Fi ruteri daxildir.
                Ruter abunəçinin mülkiyyətinə verilir. <br /> <br />
                <span className="text-black">ƏHATƏ DAİRƏMİZ</span> <br />
                Bakı, Ağcabədi, Ağdaş, Astara, Bərdə, Cəlilabad, Gəncə, İmişli,
                İsmayıllı, Lənkəran, Lənkəran, Masallı, Qazax, Quba, Sabirabad,
                Salyan, Şamaxi, Şəki, Şəmkir, Şirvan, Sumqayıt, Tağıyev
                qəsəbəsi, Yevlax, Zaqatala <br /> <br /> Təqdim edilən xidmət
                üzrə mövcud olan tariflər ilə aşağıdan tanış ola bilərsiniz.
              </p>
            </div>
          </div>
          <div className="services-wrapper max-w-[1087px] mx-auto py-10">
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
                    selectedItem === 'ferdi'
                      ? 'border-[#5B2D90]'
                      : 'border-[#C6D0DD]'
                  }`}
                  onClick={() => {
                    handleItemClick('ferdi', 'start-ferdi');
                  }}
                >
                  {selectedItem === 'ferdi' ? (
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
                    selectedItem === 'biznes'
                      ? 'border-[#5B2D90]'
                      : 'border-[#C6D0DD]'
                  }`}
                  onClick={() => {
                    handleItemClick('biznes', 'start-biznes');
                  }}
                >
                  {selectedItem === 'biznes' ? (
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
            {selectedItem === 'ferdi' && (
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
            )}
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
            <div className="hidden max-xl:block">
              <nav className=" flex gap-10 justify-center mx-5">
                <a
                  href="#/"
                  className={`text-[12px] uppercase relative    leading-[50px] w-full flex gap-1 justify-center items-center border border-[#5B2D90] max-sm:w-[225px]  h-[33px] rounded-lg ${
                    selectedItem === 'ferdi'
                      ? 'border-[#5B2D90]'
                      : 'border-[#C6D0DD]'
                  }`}
                  onClick={() => {
                    handleItemClick('ferdi', 'start-ferdi');
                  }}
                >
                  {selectedItem === 'ferdi' ? (
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
                    selectedItem === 'biznes'
                      ? 'border-[#5B2D90]'
                      : 'border-[#C6D0DD]'
                  }`}
                  onClick={() => {
                    handleItemClick('biznes', 'start-biznes');
                  }}
                >
                  {selectedItem === 'biznes' ? (
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
            {selectedItem === 'biznes' && (
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
            )}
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
      </ServiceLayout>
    </>
  );
};

export default simsiz;
