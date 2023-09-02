import React, { useEffect } from 'react';
import { useVisibleContext } from '../components/VisibleContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Speedometer } from '../components/Speedometer';
import { speedbutton } from '../../public/assets';
import Home from '../components/spee';

const speedtest = () => {
  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const pageTitle = 'Your Speedtest Post Title';
  const pageDescription = 'Description of your speedtest post.';
  return (
    <>
      {/* <Image src={speedtest} className="absolute w-full" alt="" /> */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {visible && (
        <div className="home-wrapper-1  max-w-5xl max-sm:hidden py-10 mx-auto   max-xl:hidden">
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

      <div className="w-full py-10  mx-auto bg-radialw-full  bg-gradient-to-br from-[#5B2D90] via-[#5e2f93] to-[#5B2D90] bg-radial ">
        <div className="flex gap-10 justify-center items-center  max-xl:hidden">
          <div className="flex flex-col gap-10 ">
            <div className="flex justify-center items-center gap-5">
              <div className="">
                <Image
                  src="/assets/speedtest/ipaddress.png"
                  width={22}
                  height={15}
                  className="w-[22px] h-[15px]"
                  alt=""
                />
              </div>
              <div className="w-[82px] h-[35px]">
                <p className="text-[16px] font-bold text-white">192.168.0.1</p>
                <p className="text-[8px] font-normal text-white"> IP Address</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="">
                <Image
                  src="/assets/speedtest/azeronline.png"
                  width={22}
                  height={15}
                  className="w-[22px] h-[15px]"
                  alt=""
                />
              </div>
              <div className="w-[82px] h-[35px]">
                <p className="text-[16px] font-bold text-white">Azeronline</p>
                <p className="text-[8px] font-normal text-white">Server(s)</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="">
                <Image
                  src="/assets/speedtest/connections.png"
                  width={22}
                  height={15}
                  className="w-[22px] h-[15px]"
                  alt=""
                />
              </div>
              <div className="w-[82px] h-[35px]">
                <p className="text-[16px] font-bold text-white">Connections</p>
                <p className="text-[8px] font-normal text-white">Multi</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-10 justify-center items-center">
            {/* <Image src={speedometer} className="w-[586px] h-[595px] " alt="" /> */}
            {/* <Speedometer />
            <Image
              src="/assets/speedbutton.png"
              width={300}
              height={100}
              className="w-[250px] h-[100px]"
              alt=""
            /> */}
            <Home />
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="w-[207px] h-[138px] flex flex-col justify-center items-center ">
              <Image
                src="/assets/speedtest/bar.png"
                width={22}
                height={15}
                className="absolute px-2 "
                alt=""
              />
              <h3 className="relative text-[12px] flex gap-2 text-[#FFA35B]">
                <Image
                  src="/assets/speedtest/download.png"
                  width={17}
                  height={13}
                  className="w-[17px] h-[13px]"
                  alt=""
                />
                Download
              </h3>
              <p className="relative flex flex-col justify-center items-center text-white text-[28px] font-bold">
                18.36{' '}
                <span className="text-white text-[8px] font-bold">mb/s</span>
              </p>
            </div>
            <div className="w-[207px] h-[138px] flex flex-col justify-center items-center ">
              <Image
                src="/assets/speedtest/bar.png"
                width={22}
                height={15}
                className="absolute"
                alt=""
              />
              <h3 className="relative text-[12px] flex gap-2 text-[#FFA35B]">
                <Image
                  src="/assets/speedtest/download.png"
                  width={17}
                  height={13}
                  className="w-[17px] h-[13px]"
                  alt=""
                />
                Upload
              </h3>
              <p className="relative flex flex-col justify-center items-center text-white text-[28px] font-bold">
                18.36{' '}
                <span className="text-white text-[8px] font-bold">mb/s</span>
              </p>
            </div>
            <div className="w-[207px] h-[138px] flex flex-col justify-center items-center ">
              <Image
                src="/assets/speedtest/bar.png"
                width={22}
                height={15}
                className="absolute"
                alt=""
              />
              <h3 className="relative text-[12px] flex gap-2 text-[#FFA35B]">
                <Image
                  src="/assets/speedtest/ping.png"
                  width={17}
                  height={13}
                  className="w-[17px] h-[13px]"
                  alt=""
                />
                Ping
              </h3>
              <p className="relative flex flex-col justify-center items-center text-white text-[28px] font-bold">
                18.36{' '}
                <span className="text-white text-[8px] font-bold">mb/s</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden max-xl:flex max-xl:flex-col max-xl:gap-10 max-xl:justify-center max-xl:items-center">
          <div className="relative flex flex-col gap-10 mt-10 justify-center items-center">
            {/* <Image src={speedometer} className="w-[200px] h-[193px] " alt="" /> */}
            <Image
              src="/assets/speedtest/button.png"
              width={166}
              height={40}
              className="w-[166px] "
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="w-[207px] h-[138px] flex flex-col justify-center items-center ">
              <Image
                src="/assets/speedtest/bar.png"
                width={22}
                height={15}
                className="absolute px-2 "
                alt=""
              />
              <h3 className="relative text-[12px] flex gap-2 text-[#FFA35B]">
                <Image
                  src="/assets/speedtest/dowload.png"
                  width={17}
                  height={13}
                  className="w-[17px] h-[13px]"
                  alt=""
                />
                Download
              </h3>
              <p className="relative flex flex-col justify-center items-center text-white text-[20px] font-bold">
                18.36{' '}
                <span className="text-white text-[8px] font-bold">mb/s</span>
              </p>
            </div>
            <div className="w-[207px] h-[138px] flex flex-col justify-center items-center ">
              <Image
                src="/assets/speedtest/bar.png"
                width={22}
                height={15}
                className="absolute"
                alt=""
              />
              <h3 className="relative text-[12px] flex gap-2 text-[#FFA35B]">
                <Image
                  src="/assets/speedtest/download.png"
                  width={17}
                  height={13}
                  className="w-[17px] h-[13px]"
                  alt=""
                />
                Upload
              </h3>
              <p className="relative flex flex-col justify-center items-center text-white text-[20px] font-bold">
                18.36{' '}
                <span className="text-white text-[8px] font-bold">mb/s</span>
              </p>
            </div>
            <div className="w-[207px] h-[138px] flex flex-col justify-center items-center ">
              <Image
                src="/assets/speedtest/bar.png"
                width={22}
                height={15}
                className="absolute"
                alt=""
              />{' '}
              <h3 className="relative text-[12px] flex gap-2 text-[#FFA35B]">
                <Image
                  src="/assets/speedtest/ping.png"
                  width={17}
                  height={13}
                  className="w-[17px] h-[13px]"
                  alt=""
                />
                Ping
              </h3>
              <p className="relative flex flex-col justify-center items-center text-white text-[20px] font-bold">
                18.36{' '}
                <span className="text-white text-[8px] font-bold">mb/s</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 relative mb-10">
            <div className="flex justify-center items-center gap-5">
              <div className="">
                <Image
                  src="/assets/speedtest/ipaddress.png"
                  width={22}
                  height={15}
                  className="w-[22px] h-[15px]"
                  alt=""
                />
              </div>
              <div className="w-[82px] h-[35px]">
                <p className="text-[16px] font-bold text-white">192.168.0.1</p>
                <p className="text-[8px] font-normal text-white"> IP Address</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="">
                <Image
                  src="/assets/speedtest/azeronline.png"
                  width={22}
                  height={15}
                  className="w-[22px] h-[15px]"
                  alt=""
                />
              </div>
              <div className="w-[82px] h-[35px]">
                <p className="text-[16px] font-bold text-white">Azeronline</p>
                <p className="text-[8px] font-normal text-white">Server(s)</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="">
                <Image
                  src="/assets/speedtest/connections.png"
                  width={22}
                  height={15}
                  className="w-[22px] h-[15px]"
                  alt=""
                />
              </div>
              <div className="w-[82px] h-[35px]">
                <p className="text-[16px] font-bold text-white">Connections</p>
                <p className="text-[8px] font-normal text-white">Multi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default speedtest;
