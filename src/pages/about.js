import React, { useEffect } from 'react';
import { useVisibleContext } from '../components/VisibleContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const about = () => {
  const data = [
    {
      name: 'Elçin Niyazov',
      job: 'direktor',
      image: '/assets/about/img.png',
    },
    {
      name: 'Elçin Niyazov',
      job: 'direktor',
      image: '/assets/about/img.png',
    },
    {
      name: 'Elçin Niyazov',
      job: 'direktor',
      image: '/assets/about/img.png',
    },
    {
      name: 'Elçin Niyazov',
      job: 'direktor',
      image: '/assets/about/img.png',
    },
    {
      name: 'Elçin Niyazov',
      job: 'direktor',
      image: '/assets/about/img.png',
    },
  ];

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const pageTitle = 'Your About Post Title';
  const pageDescription = 'Description of your about post.';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
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
      <div className="max-xl:relative hidden max-xl:block max-xl:z-[-1] w-full ">
        {' '}
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className=" h-[535px]  top-32 w-full  max-sm:h-[220px] max-md:h-[300px] max-xl:h-[300px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className="about-wrapper-1 max-w-[1100px] grid grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-1 max-xl:grid-cols-1 gap-10 mx-auto max-sm:py-10  py-20  bg-white">
        <div className="max-sm:mx-10 max-lg:mx-10 max-xl:mx-10">
          <h3 className="max-xl:hidden block text-center text-purple-900 text-[40px] max-sm:text-[20px] max-lg:text-[30px] font-bold leading-10 overflow-hidden max-xl:text-[30px]  ">
            HAQQIMIZDA
          </h3>{' '}
          <h3 className="h3 text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px] max-xxl:text-white ">
            HAQQIMIZDA
          </h3>
          <div className="hidden max-xl:block absolute  z-[1] max-xl:z-[-1] top-[130px] right-48 max-xxl:right-5  max-xxl:top-20 ">
            <Image
              src="/assets/about/about.png"
              width={210}
              height={193}
              className="w-[210px] h-[193px]"
              alt=""
            />
          </div>
          <p className="text-justify text-neutral-500 text-[20px] font-normal leading-7 mt-10 max-sm:text-[16px] max-lg:text-[18px] ">
            “Azeronline LTD” Birgə Müəssisəsi 1999-cu il, 29 dekabr tarixində
            Azercell Telekom BM tərəfindən təsis edilmişdır. Azərbaycanda
            yaranan ilk İnternet provayder şirkətlərindən biri olan Azeronline
            həm fərdi, həm də korporativ müştərilərinə müasir texnologiyalara
            əsaslanan Fiber optik, Simsiz və Ayrılmış xətt kimi İnternet
            xidmətləri də təqdim edir. Müştərilərimiz arasında iri şirkətlər,
            banklar, eləcə də dövlət qurumları yer almaqdadır.
            <br />
            <br />
          </p>
        </div>
        <div className="max-xl:hidden flex justify-center items-center">
          {' '}
          <div className="w-[475px] h-[264px] flex justify-center items-center  rounded-xl bg-[#5B2D90] ">
            {' '}
            <Image
              className="w-[497.67px] h-[457px]   max-xl:hidden"
              src="/assets/about/about.png"
              width={497}
              height={457}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="about-wrapper-2 bg-[#F7F6FB] py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-20">
          <div className="col-span-2 max-sm:mx-10 max-lg:mx-10 max-xl:mx-10">
            {' '}
            <h3 className=" text-purple-900 text-[40px] font-bold leading-10 overflow-hidden max-sm:text-[20px] max-lg:text-[30px] max-xl:text-[30px] ">
              MİSSİYAMIZ
            </h3>
            <p className=" text-justify text-neutral-500 text-[20px] font-normal leading-7 mt-5 max-sm:text-[16px] max-lg:text-[18px]">
              İnsanlara rahat həyat və səmərəli biznes üçün təqdim etdiyimiz
              yüksək keyfiyyətli rəqəmsal xidmət və kompleks həlləri ölkənin ən
              uzaq nöqtələrində belə əlçatan etmək, yeni və innovativ ideyalara
              fokuslanaraq xidmət keyfiyyətini daha yüksək standartlara
              uyğunlaşdırıb lider pozisiyamızı qorumaqdır.
            </p>
          </div>
          <div className="col-span-2 max-sm:flex max-sm:flex-col max-sm:mx-10 max-lg:mx-10 max-xl:mx-10">
            <h3 className="text-purple-900 text-[40px] font-bold leading-10 overflow-hidden max-sm:text-[20px] max-lg:text-[30px] max-xl:text-[30px]">
              DƏYƏRLƏRİMİZ
            </h3>
            <div className="grid grid-cols-3 gap-10 mx-auto mt-10 max-sm:flex max-sm:flex-col max-sm:mx-5 max-sm:justify-center max-sm:items-center max-lg:grid-cols-2  max-lg:gap-5 max-xl:gap-2 ">
              <div className=" w-[323.30px] h-[400px] max-sm:w-[300px] max-sm:h-[312px]  max-lg:w-[280px] max-lg:h-[342px] max-xl:w-[270px] max-xl:h-[400px] px-[39px] py-[40px]  bg-white rounded-3xl  justify-center items-center  flex flex-col gap-5">
                <div className="w-[225px] h-[270.25px] flex flex-col gap-3">
                  {' '}
                  <Image
                    src="/assets/about/yes.png"
                    width={68}
                    height={44}
                    className="w-[68px] max-sm:w-[44px]"
                    alt=""
                  />
                  <h4 className=" text-black text-[24px] font-semibold max-sm:text-[20px]">
                    Yüksək etik standartlar
                  </h4>
                  <p className=" text-neutral-500 text-[16px] font-normal leading-snug">
                    Dürüstlük və məsuliyyət üzərində qurulmuş iş prinsipi.
                  </p>
                </div>
              </div>
              <div className=" w-[323.30px] h-[400px] max-sm:w-[300px] max-sm:h-[312px]  max-lg:w-[280px] max-lg:h-[342px] max-xl:w-[270px] max-xl:h-[400px] px-[39px] py-[40px]  bg-white rounded-3xl  justify-center items-center  flex flex-col gap-5">
                <div className="w-[225px] h-[270.25px] flex flex-col gap-3">
                  <Image
                    src="/assets/about/my.png"
                    width={68}
                    height={44}
                    className="w-[68px] max-sm:w-[44px]"
                    alt=""
                  />

                  <h4 className=" text-black text-[24px] font-semibold max-sm:text-[20px]">
                    Müştəri
                    <br />
                    yönümlülük
                  </h4>
                  <p className=" text-neutral-500 text-[16px] font-normal leading-snug">
                    Artan keyfiyyət qarşısında münasib
                    <br />
                    xidmət haqqı.
                  </p>
                </div>
              </div>
              <div className=" w-[323.30px] h-[400px] max-sm:w-[300px] max-sm:h-[312px]  max-lg:w-[280px] max-lg:h-[342px] max-xl:w-[270px] max-xl:h-[400px] px-[39px] py-[40px]  bg-white rounded-3xl  justify-center items-center  flex flex-col gap-5">
                <div className="w-[225px] h-[270.25px] flex flex-col gap-3">
                  <Image
                    src="/assets/about/irq.png"
                    width={68}
                    height={44}
                    className="w-[68px] max-sm:w-[44px]"
                    alt=""
                  />

                  <h4 className=" text-black text-[24px] font-semibold max-sm:text-[20px]">
                    İnsan resurslarına qayğı
                  </h4>
                  <p className="  text-neutral-500 text-[16px] font-normal leading-snug">
                    Komandamız ən dəyərli silahımızdır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrapper-2 bg-white py-10 relative max-w-[1100px] mx-auto max-sm:mx-10 max-lg:mx-10 max-xl:mx-10">
        <h3 className="text-purple-900 text-[40px] font-bold leading-10 overflow-hidden max-sm:text-[20px] max-lg:text-[30px] max-xl:text-[30px]">
          Sturuktur
        </h3>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-3 max-lg:mt-10 mt-20 max-sm:mt-5 max-xl:mt-5  max-xl:gap-5">
          {data.map((item, index) => {
            return (
              <div
                className="w-[246.31px] max-sm:w-[132px] max-lg:w-[222px] max-img:w-[202px] max-sm:h-[262px] max-lg:h-[400px]  max-md:h-[330px] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:gap-1  max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-2  max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:gap-1   "
                key={index}
              >
                <Image
                  className="w-[244px] h-[309px] max-sm:w-[132px] max-m:w-[162px] max-sm:h-[168px] max-lg:w-[220px] max-lg:h-[268px] max-md:h-[238px] max-md:w-[200px] rounded-2xl"
                  src={item.image}
                  width={244}
                  height={309}
                  alt=""
                />
                <h3 className=" text-center text-black text-[21px] font-bold leading-loose max-sm:text-[12px]">
                  {item.name}
                </h3>
                <h2 className=" text-center text-stone-300 text-[15px] font-medium leading-snug max-sm:text-[12px]">
                  {item.job}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default about;
