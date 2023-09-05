import React, { useEffect, useState } from 'react';
import { useVisibleContext } from '../components/VisibleContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';
import StrokeMap from '../components/StrokeMap';
import rotationMap from '../components/RotationMap';

const Speedtest = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [btnStatus, setBtnStatus] = useState(0);
  const [rotation, setRotation] = useState(-155);
  const [dashOffset, setDashOffset] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);
  // const getStoredData = () => {
  //   const storedData = JSON.parse(localStorage.getItem('myData'));
  //   if (storedData) {
  //     return storedData;
  //   }
  //   return {
  //     downloadSpeed: 0,
  //     uploadSpeed: 0,
  //     latency: '0',
  //     useLocation: ' - ',
  //     userIp: '0.0.0.0',
  //   };
  // };

  // const [data, setData] = useState(getStoredData);

  // // Verileri Local Storage'a kaydet
  // useEffect(() => {
  //   localStorage.setItem('myData', JSON.stringify(data));
  // }, [data]);

  const config = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  };

  const [data, setData] = useState({
    downloadSpeed: 0,
    uploadSpeed: 0,
    latency: '0',
    useLocation: ' - ',
    userIp: '0.0.0.0',
  });

  const { visible, setVisible } = useVisibleContext();
  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const onSubmit = () => {
    setLoading(true);

    axios
      .post('http://localhost:4000/speed', config)
      .then((val) => {
        setLoading(false);
        setData(val?.data?.data);
      })
      .catch((e) => {
        setLoading(false);
        message.error('Something went wrong..!!', 5);
      });
  };

  const pathLength = 1700;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isIncreasing) {
        setDashOffset((prevOffset) => prevOffset + 10);
        if (dashOffset >= pathLength) {
          setIsIncreasing(false);
        }
      } else {
        setDashOffset((prevOffset) => prevOffset - 10);
        if (dashOffset <= 0) {
          setIsIncreasing(true);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [dashOffset, isIncreasing]);
  const [needleStyle, setNeedleStyle] = useState({
    transformOrigin: '262px 302.5px 0',
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 3s ease',
  });
  <rotationMap />;
  function getStrokeDashOffset(downloadSpeed) {
    <StrokeMap />;
    if (downloadSpeed > 100) {
      return '1708.9490966796875px';
    } else {
      const matchingEntry = StrokeMap.find(
        (entry) => entry.downloadSpeed === downloadSpeed
      );

      if (matchingEntry) {
        return matchingEntry.strokeDashoffset;
      } else {
        return '854.4745483398438px';
      }
    }
  }

  const strokeDashoffset = getStrokeDashOffset(data.downloadSpeed);
  const findRotationForSpeed = (speed) => {
    for (let i = 0; i < rotationMap.length; i++) {
      const entry = rotationMap[i];
      if (speed <= entry.downloadSpeed) {
        return entry.rotate;
      }
    }
    return 0;
  };

  useEffect(() => {
    const newRotation = findRotationForSpeed(data.downloadSpeed);

    const newNeedleStyle = {
      transformOrigin: '262px 302.5px 0',
      transform: `rotate(${newRotation}deg)`,
      transition: 'transform 3s ease',
    };

    setNeedleStyle(newNeedleStyle);
  }, [data.downloadSpeed]);

  const pageTitle = 'Your Speedtest Post Title';
  const pageDescription = 'Description of your speedtest post.';
  return (
    <>
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

      <div className="w-full py-10  mx-auto bg-radial   bg-gradient-to-br from-[#5B2D90] via-[#5e2f93] to-[#5B2D90] bg-radial ">
        <div className="w-[1100px] mx-auto flex gap-10 justify-between items-center  max-xl:hidden">
          <div className="flex flex-col gap-10">
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
                <p className="text-[16px] font-bold text-white">
                  {data.userIp === 0
                    ? localStorage.getItem('userIp')
                    : data.userIp}
                </p>
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
                <p className="text-[8px] font-normal text-white">Server()</p>
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
          <div className="flex flex-col justify-center items-center pl-10">
            <svg
              width="606"
              height="535"
              viewBox="0 0 536 535"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_140_97)">
                <path
                  d="M262.965 152.046V163.937"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-1"
                ></path>
                <path
                  d="M275.704 156.516L275.227 161.984"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-2"
                ></path>
                <path
                  d="M288.346 158.234L287.396 163.641"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-3"
                ></path>
                <path
                  d="M300.787 161.048L299.369 166.348"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-4"
                ></path>
                <path
                  d="M312.94 164.935L311.062 170.09"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-5"
                ></path>
                <path
                  d="M324.706 169.864L322.387 174.838"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-6"
                ></path>
                <path
                  d="M335.997 175.801L333.254 180.554"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-7"
                ></path>
                <path
                  d="M346.729 182.701L343.58 187.197"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-8"
                ></path>
                <path
                  d="M356.818 190.51L353.289 194.711"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-9"
                ></path>
                <path
                  d="M369.908 195.448L359.475 205.877"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-10"
                ></path>
                <path
                  d="M374.77 208.607L370.564 212.136"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-11"
                ></path>
                <path
                  d="M382.495 218.757L377.998 221.907"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-12"
                ></path>
                <path
                  d="M389.302 229.548L384.549 232.291"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-13"
                ></path>
                <path
                  d="M395.146 240.887L390.172 243.206"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-14"
                ></path>
                <path
                  d="M399.983 252.693L394.824 254.571"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-15"
                ></path>
                <path
                  d="M403.769 264.876L398.469 266.294"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-16"
                ></path>
                <path
                  d="M406.476 277.341L401.074 278.295"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-17"
                ></path>
                <path
                  d="M408.091 289.996L402.623 290.473"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-18"
                ></path>
                <path
                  d="M413.932 302.743H397.77"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-19"
                ></path>
                <path
                  d="M407.986 315.487L402.518 315.01"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-20"
                ></path>
                <path
                  d="M406.268 328.128L400.861 327.174"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-21"
                ></path>
                <path
                  d="M403.455 340.571L398.154 339.149"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-22"
                ></path>
                <path
                  d="M399.571 352.723L394.412 350.845"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-23"
                ></path>
                <path
                  d="M394.638 364.49L389.664 362.171"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-24"
                ></path>
                <path
                  d="M388.7 375.78L383.947 373.037"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-25"
                ></path>
                <path
                  d="M250.219 156.415L250.696 161.878"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-26"
                ></path>
                <path
                  d="M237.576 158.128L238.526 163.535"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-27"
                ></path>
                <path
                  d="M225.135 160.942L226.553 166.243"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-28"
                ></path>
                <path
                  d="M212.982 164.829L214.86 169.988"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-29"
                ></path>
                <path
                  d="M201.215 169.759L203.534 174.732"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-30"
                ></path>
                <path
                  d="M189.926 175.695L192.669 180.448"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-31"
                ></path>
                <path
                  d="M179.191 182.595L182.341 187.091"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-32"
                ></path>
                <path
                  d="M169.104 190.404L172.633 194.609"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-33"
                ></path>
                <path
                  d="M156.016 195.342L166.449 205.775"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-34"
                ></path>
                <path
                  d="M151.152 208.501L155.357 212.03"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-35"
                ></path>
                <path
                  d="M143.426 218.656L147.922 221.801"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-36"
                ></path>
                <path
                  d="M136.619 229.442L141.372 232.185"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-37"
                ></path>
                <path
                  d="M130.777 240.781L135.751 243.1"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-38"
                ></path>
                <path
                  d="M125.939 252.588L131.099 254.465"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-39"
                ></path>
                <path
                  d="M122.154 264.77L127.455 266.192"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-40"
                ></path>
                <path
                  d="M119.445 277.235L124.847 278.189"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-41"
                ></path>
                <path
                  d="M117.83 289.89L123.298 290.371"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-42"
                ></path>
                <path
                  d="M111.99 302.637H128.152"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-43"
                ></path>
                <path
                  d="M117.936 315.381L123.404 314.904"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-44"
                ></path>
                <path
                  d="M119.654 328.022L125.061 327.068"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-45"
                ></path>
                <path
                  d="M122.467 340.465L127.767 339.047"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-46"
                ></path>
                <path
                  d="M126.35 352.617L131.509 350.74"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-47"
                ></path>
                <path
                  d="M131.283 364.384L136.257 362.065"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-48"
                ></path>
                <path
                  d="M137.221 375.674L141.973 372.931"
                  stroke="#FFA35B"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-49"
                ></path>
                <path
                  d="M262.358 339.286C282.872 339.286 299.501 322.656 299.501 302.143C299.501 281.629 282.872 264.999 262.358 264.999C241.844 264.999 225.215 281.629 225.215 302.143C225.215 322.656 241.844 339.286 262.358 339.286Z"
                  stroke="#2F184E"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-50"
                ></path>
                <path
                  d="M262.358 347.881C287.619 347.881 308.097 327.404 308.097 302.143C308.097 276.882 287.619 256.404 262.358 256.404C237.097 256.404 216.619 276.882 216.619 302.143C216.619 327.404 237.097 347.881 262.358 347.881Z"
                  stroke="#2F184E"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-51"
                ></path>
                <path
                  d="M262.358 356.482C292.369 356.482 316.697 332.153 316.697 302.143C316.697 272.132 292.369 247.804 262.358 247.804C232.348 247.804 208.02 272.132 208.02 302.143C208.02 332.153 232.348 356.482 262.358 356.482Z"
                  stroke="#2F184E"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-52"
                ></path>
                <path
                  d="M262.359 365.082C297.119 365.082 325.298 336.903 325.298 302.143C325.298 267.382 297.119 239.204 262.359 239.204C227.599 239.204 199.42 267.382 199.42 302.143C199.42 336.903 227.599 365.082 262.359 365.082Z"
                  stroke="#2F184E"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-53"
                ></path>
                <path
                  d="M262.359 373.682C301.869 373.682 333.898 341.653 333.898 302.143C333.898 262.633 301.869 230.604 262.359 230.604C222.849 230.604 190.82 262.633 190.82 302.143C190.82 341.653 222.849 373.682 262.359 373.682Z"
                  stroke="#2F184E"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-54"
                ></path>
                <path
                  d="M262.358 382.282C306.617 382.282 342.497 346.402 342.497 302.143C342.497 257.883 306.617 222.004 262.358 222.004C218.098 222.004 182.219 257.883 182.219 302.143C182.219 346.402 218.098 382.282 262.358 382.282Z"
                  stroke="#2F184E"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-55"
                ></path>
                <path
                  d="M262.358 390.877C311.365 390.877 351.092 351.149 351.092 302.143C351.092 253.136 311.365 213.408 262.358 213.408C213.351 213.408 173.623 253.136 173.623 302.143C173.623 351.149 213.351 390.877 262.358 390.877Z"
                  stroke="#2F184E"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-56"
                ></path>
                <path
                  d="M262.358 399.477C316.115 399.477 359.693 355.899 359.693 302.143C359.693 248.386 316.115 204.808 262.358 204.808C208.602 204.808 165.023 248.386 165.023 302.143C165.023 355.899 208.602 399.477 262.358 399.477Z"
                  stroke="#2F184E"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-57"
                ></path>
                <path
                  d="M262.359 408.077C320.865 408.077 368.293 360.649 368.293 302.143C368.293 243.636 320.865 196.208 262.359 196.208C203.852 196.208 156.424 243.636 156.424 302.143C156.424 360.649 203.852 408.077 262.359 408.077Z"
                  stroke="#2F184E"
                  strokeWidth="0.883415"
                  strokeMiterlimit="10"
                  class="svg-elem-58"
                ></path>
                <g
                  id="needle"
                  style={needleStyle}
                  filter="url(#filter1_d_140_97)"
                >
                  <path
                    d="M262.359 277.367C248.68 277.367 237.584 288.459 237.584 302.143C237.584 315.822 248.675 326.918 262.359 326.918C276.043 326.918 287.135 315.827 287.135 302.143C287.135 288.459 276.043 277.367 262.359 277.367ZM262.359 323.42C250.61 323.42 241.082 313.892 241.082 302.143C241.082 290.393 250.61 280.866 262.359 280.866C274.109 280.866 283.636 290.393 283.636 302.143C283.636 313.892 274.113 323.42 262.359 323.42Z"
                    fill="#FFA35B"
                  />
                  <path
                    d="M262.359 320.602C272.554 320.602 280.818 312.337 280.818 302.143C280.818 291.948 272.554 283.684 262.359 283.684C252.165 283.684 243.9 291.948 243.9 302.143C243.9 312.337 252.165 320.602 262.359 320.602Z"
                    fill="#FFA35B"
                  />
                  <path
                    d="M244.076 328.158L342.104 186.846"
                    stroke="#FFA35B"
                    strokeWidth="1.76683"
                    strokeMiterlimit="10"
                  />
                </g>
              </g>
              <path
                d="M440.633 403.537C457.906 372.377 466.692 337.226 466.111 301.603C465.53 265.98 455.603 231.135 437.324 200.554C419.045 169.973 393.055 144.729 361.954 127.349C330.853 109.969 295.733 101.062 260.108 101.519C224.484 101.977 189.604 111.783 158.96 129.957C128.316 148.13 102.983 174.033 85.495 205.074C68.0074 236.114 58.9791 271.203 59.3137 306.829C59.6482 342.455 69.3338 377.369 87.4012 408.075"
                stroke="#43256C"
                strokeWidth="72.0865"
                strokeLinecap="round"
                class="svg-elem-59"
              ></path>
              <path
                d="M440.633 403.537C457.906 372.377 466.692 337.226 466.111 301.603C465.53 265.98 455.603 231.135 437.324 200.554C419.045 169.973 393.055 144.729 361.954 127.349C330.853 109.969 295.733 101.062 260.108 101.519C224.484 101.977 189.604 111.783 158.96 129.957C128.316 148.13 102.983 174.033 85.495 205.074C68.0074 236.114 58.9791 271.203 59.3137 306.829C59.6482 342.455 69.3338 377.369 87.4012 408.075"
                stroke="#2F184E"
                strokeWidth="58.0007"
                strokeLinecap="round"
                class="svg-elem-60"
              ></path>
              <path
                d="M440.633 403.537C457.906 372.377 466.692 337.226 466.111 301.603C465.53 265.98 455.603 231.135 437.324 200.554C419.045 169.973 393.055 144.729 361.954 127.349C330.853 109.969 295.733 101.062 260.108 101.519C224.484 101.977 189.604 111.783 158.96 129.957C128.316 148.13 102.983 174.033 85.495 205.074C68.0074 236.114 58.9791 271.203 59.3137 306.829C59.6482 342.455 69.3338 377.369 87.4012 408.075"
                stroke="#3A2061"
                strokeWidth="50.5434"
                strokeLinecap="round"
                class="svg-elem-61"
              ></path>
              <path
                d="M440.633 403.537C457.906 372.377 466.692 337.226 466.111 301.603C465.53 265.98 455.603 231.135 437.324 200.554C419.045 169.973 393.055 144.729 361.954 127.349C330.853 109.969 295.733 101.062 260.108 101.519C224.484 101.977 189.604 111.783 158.96 129.957C128.316 148.13 102.983 174.033 85.495 205.074C68.0074 236.114 58.9791 271.203 59.3137 306.829C59.6482 342.455 69.3338 377.369 87.4012 408.075"
                stroke="#5B328C"
                strokeWidth="38.1147"
                strokeMiterlimit="4.13936"
                strokeLinecap="round"
                class="svg-elem-62"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M 442.281 402.994 C 458.506 367.46 465.01 339.862 464.63 306.461 C 464.239 272.128 461.494 239.728 445.353 208.769 C 433.357 185.761 401.144 148.373 371.5 129.454 C 341.431 110.264 294.556 98.486 258.785 99.325 C 223.297 100.157 189.136 111.783 158.602 129.957 C 128.067 148.13 102.826 174.033 85.401 205.074 C 67.976 236.114 58.98 271.203 59.314 306.829 C 59.646 342.455 69.298 377.369 87.3 408.075"
                stroke="#FFA35B"
                strokeWidth="38.1147"
                strokeMiterlimit="4.13936"
                strokeLinecap="round"
                class="needlex"
                style={{
                  strokeDashoffset,
                  strokeDasharray: '854.4745483398438px',
                  transition: 'stroke-dashoffset 3s ease',
                }}
              ></path>

              <circle
                id="circle"
                style={needleStyle}
                cx="367.951"
                cy="134.231"
                // r="98.1868"
                r={data.downloadSpeed !== 0 ? '98.1868' : '0'}
                fill="url(#paint0_radial_140_97)"
                fill-opacity="0.47"
              />

              <path
                d="M57.1917 472.263C56.317 472.263 55.533 472.039 54.8397 471.591C54.157 471.143 53.613 470.493 53.2077 469.639C52.813 468.786 52.6157 467.751 52.6157 466.535C52.6157 465.319 52.813 464.285 53.2077 463.431C53.613 462.578 54.157 461.927 54.8397 461.479C55.533 461.031 56.317 460.807 57.1917 460.807C58.0557 460.807 58.8343 461.031 59.5277 461.479C60.221 461.927 60.765 462.578 61.1597 463.431C61.5543 464.285 61.7517 465.319 61.7517 466.535C61.7517 467.751 61.5543 468.786 61.1597 469.639C60.765 470.493 60.221 471.143 59.5277 471.591C58.8343 472.039 58.0557 472.263 57.1917 472.263ZM57.1917 470.839C57.7783 470.839 58.2903 470.679 58.7277 470.359C59.1757 470.039 59.5223 469.559 59.7677 468.919C60.0237 468.279 60.1517 467.485 60.1517 466.535C60.1517 465.586 60.0237 464.791 59.7677 464.151C59.5223 463.511 59.1757 463.031 58.7277 462.711C58.2903 462.391 57.7783 462.231 57.1917 462.231C56.605 462.231 56.0877 462.391 55.6397 462.711C55.1917 463.031 54.8397 463.511 54.5837 464.151C54.3383 464.791 54.2157 465.586 54.2157 466.535C54.2157 467.485 54.3383 468.279 54.5837 468.919C54.8397 469.559 55.1917 470.039 55.6397 470.359C56.0877 470.679 56.605 470.839 57.1917 470.839Z"
                fill="white"
                class="svg-elem-63"
              ></path>
              <path
                d="M2.656 249.715V239.155L3.344 239.907H0.128V238.515H4.24V249.715H2.656Z"
                fill="white"
                class="svg-elem-64"
              ></path>
              <path
                d="M520.257 249.843C519.468 249.843 518.7 249.721 517.953 249.475C517.217 249.23 516.614 248.899 516.145 248.483L516.881 247.219C517.254 247.571 517.74 247.859 518.337 248.083C518.934 248.307 519.569 248.419 520.241 248.419C521.094 248.419 521.75 248.238 522.209 247.875C522.668 247.513 522.897 247.027 522.897 246.419C522.897 246.003 522.796 245.641 522.593 245.331C522.39 245.022 522.038 244.787 521.537 244.627C521.046 244.457 520.369 244.371 519.505 244.371H516.961L517.553 238.515H523.873V239.907H518.145L518.977 239.123L518.513 243.747L517.681 242.979H519.841C520.961 242.979 521.862 243.123 522.545 243.411C523.228 243.699 523.724 244.099 524.033 244.611C524.342 245.113 524.497 245.694 524.497 246.355C524.497 246.995 524.342 247.582 524.033 248.115C523.724 248.638 523.254 249.059 522.625 249.379C522.006 249.689 521.217 249.843 520.257 249.843ZM530.405 249.843C529.53 249.843 528.746 249.619 528.053 249.171C527.37 248.723 526.826 248.073 526.421 247.219C526.026 246.366 525.829 245.331 525.829 244.115C525.829 242.899 526.026 241.865 526.421 241.011C526.826 240.158 527.37 239.507 528.053 239.059C528.746 238.611 529.53 238.387 530.405 238.387C531.269 238.387 532.047 238.611 532.741 239.059C533.434 239.507 533.978 240.158 534.373 241.011C534.767 241.865 534.965 242.899 534.965 244.115C534.965 245.331 534.767 246.366 534.373 247.219C533.978 248.073 533.434 248.723 532.741 249.171C532.047 249.619 531.269 249.843 530.405 249.843ZM530.405 248.419C530.991 248.419 531.503 248.259 531.941 247.939C532.389 247.619 532.735 247.139 532.981 246.499C533.237 245.859 533.365 245.065 533.365 244.115C533.365 243.166 533.237 242.371 532.981 241.731C532.735 241.091 532.389 240.611 531.941 240.291C531.503 239.971 530.991 239.811 530.405 239.811C529.818 239.811 529.301 239.971 528.853 240.291C528.405 240.611 528.053 241.091 527.797 241.731C527.551 242.371 527.429 243.166 527.429 244.115C527.429 245.065 527.551 245.859 527.797 246.499C528.053 247.139 528.405 247.619 528.853 247.939C529.301 248.259 529.818 248.419 530.405 248.419Z"
                fill="white"
                class="svg-elem-65"
              ></path>
              <path
                d="M429.465 103.417V102.329L434.025 97.9287C434.43 97.5447 434.729 97.2087 434.921 96.9207C435.124 96.622 435.257 96.35 435.321 96.1047C435.396 95.8487 435.433 95.6033 435.433 95.3687C435.433 94.7927 435.23 94.3393 434.825 94.0087C434.42 93.678 433.828 93.5127 433.049 93.5127C432.452 93.5127 431.913 93.614 431.433 93.8167C430.953 94.0087 430.537 94.3127 430.185 94.7287L429.097 93.7847C429.524 93.2407 430.094 92.8247 430.809 92.5367C431.534 92.238 432.329 92.0887 433.193 92.0887C433.972 92.0887 434.649 92.2167 435.225 92.4727C435.801 92.718 436.244 93.0753 436.553 93.5447C436.873 94.014 437.033 94.5687 437.033 95.2087C437.033 95.5713 436.985 95.9287 436.889 96.2807C436.793 96.6327 436.612 97.006 436.345 97.4007C436.078 97.7953 435.694 98.238 435.193 98.7287L431.129 102.649L430.745 102.025H437.513V103.417H429.465ZM443.389 103.545C442.514 103.545 441.73 103.321 441.037 102.873C440.354 102.425 439.81 101.774 439.405 100.921C439.01 100.067 438.813 99.0327 438.813 97.8167C438.813 96.6007 439.01 95.566 439.405 94.7127C439.81 93.8593 440.354 93.2087 441.037 92.7607C441.73 92.3127 442.514 92.0887 443.389 92.0887C444.253 92.0887 445.032 92.3127 445.725 92.7607C446.418 93.2087 446.962 93.8593 447.357 94.7127C447.752 95.566 447.949 96.6007 447.949 97.8167C447.949 99.0327 447.752 100.067 447.357 100.921C446.962 101.774 446.418 102.425 445.725 102.873C445.032 103.321 444.253 103.545 443.389 103.545ZM443.389 102.121C443.976 102.121 444.488 101.961 444.925 101.641C445.373 101.321 445.72 100.841 445.965 100.201C446.221 99.5607 446.349 98.766 446.349 97.8167C446.349 96.8673 446.221 96.0727 445.965 95.4327C445.72 94.7927 445.373 94.3127 444.925 93.9927C444.488 93.6727 443.976 93.5127 443.389 93.5127C442.802 93.5127 442.285 93.6727 441.837 93.9927C441.389 94.3127 441.037 94.7927 440.781 95.4327C440.536 96.0727 440.413 96.8673 440.413 97.8167C440.413 98.766 440.536 99.5607 440.781 100.201C441.037 100.841 441.389 101.321 441.837 101.641C442.285 101.961 442.802 102.121 443.389 102.121Z"
                fill="white"
                class="svg-elem-66"
              ></path>
              <path
                d="M86.0598 103.545C85.2704 103.545 84.5024 103.422 83.7558 103.177C83.0198 102.931 82.4171 102.601 81.9478 102.185L82.6838 100.921C83.0571 101.273 83.5424 101.561 84.1398 101.785C84.7371 102.009 85.3718 102.121 86.0438 102.121C86.8971 102.121 87.5531 101.939 88.0118 101.577C88.4704 101.214 88.6998 100.729 88.6998 100.121C88.6998 99.7047 88.5984 99.342 88.3958 99.0327C88.1931 98.7233 87.8411 98.4887 87.3398 98.3287C86.8491 98.158 86.1718 98.0727 85.3078 98.0727H82.7638L83.3558 92.2167H89.6758V93.6087H83.9478L84.7798 92.8247L84.3158 97.4487L83.4838 96.6807H85.6438C86.7638 96.6807 87.6651 96.8247 88.3478 97.1127C89.0304 97.4007 89.5264 97.8007 89.8358 98.3127C90.1451 98.814 90.2998 99.3953 90.2998 100.057C90.2998 100.697 90.1451 101.283 89.8358 101.817C89.5264 102.339 89.0571 102.761 88.4278 103.081C87.8091 103.39 87.0198 103.545 86.0598 103.545Z"
                fill="white"
                class="svg-elem-67"
              ></path>
              <path
                d="M255.019 45V34.44L255.707 35.192H252.491V33.8H256.603V45H255.019ZM263.629 45.128C262.754 45.128 261.97 44.904 261.277 44.456C260.594 44.008 260.05 43.3573 259.645 42.504C259.25 41.6507 259.053 40.616 259.053 39.4C259.053 38.184 259.25 37.1493 259.645 36.296C260.05 35.4427 260.594 34.792 261.277 34.344C261.97 33.896 262.754 33.672 263.629 33.672C264.493 33.672 265.272 33.896 265.965 34.344C266.658 34.792 267.202 35.4427 267.597 36.296C267.992 37.1493 268.189 38.184 268.189 39.4C268.189 40.616 267.992 41.6507 267.597 42.504C267.202 43.3573 266.658 44.008 265.965 44.456C265.272 44.904 264.493 45.128 263.629 45.128ZM263.629 43.704C264.216 43.704 264.728 43.544 265.165 43.224C265.613 42.904 265.96 42.424 266.205 41.784C266.461 41.144 266.589 40.3493 266.589 39.4C266.589 38.4507 266.461 37.656 266.205 37.016C265.96 36.376 265.613 35.896 265.165 35.576C264.728 35.256 264.216 35.096 263.629 35.096C263.042 35.096 262.525 35.256 262.077 35.576C261.629 35.896 261.277 36.376 261.021 37.016C260.776 37.656 260.653 38.4507 260.653 39.4C260.653 40.3493 260.776 41.144 261.021 41.784C261.277 42.424 261.629 42.904 262.077 43.224C262.525 43.544 263.042 43.704 263.629 43.704Z"
                fill="white"
                class="svg-elem-68"
              ></path>
              <path
                d="M468.814 472.135V461.575L469.502 462.327H466.286V460.935H470.398V472.135H468.814ZM477.424 472.263C476.549 472.263 475.765 472.039 475.072 471.591C474.389 471.143 473.845 470.493 473.44 469.639C473.045 468.786 472.848 467.751 472.848 466.535C472.848 465.319 473.045 464.285 473.44 463.431C473.845 462.578 474.389 461.927 475.072 461.479C475.765 461.031 476.549 460.807 477.424 460.807C478.288 460.807 479.067 461.031 479.76 461.479C480.453 461.927 480.997 462.578 481.392 463.431C481.787 464.285 481.984 465.319 481.984 466.535C481.984 467.751 481.787 468.786 481.392 469.639C480.997 470.493 480.453 471.143 479.76 471.591C479.067 472.039 478.288 472.263 477.424 472.263ZM477.424 470.839C478.011 470.839 478.523 470.679 478.96 470.359C479.408 470.039 479.755 469.559 480 468.919C480.256 468.279 480.384 467.485 480.384 466.535C480.384 465.586 480.256 464.791 480 464.151C479.755 463.511 479.408 463.031 478.96 462.711C478.523 462.391 478.011 462.231 477.424 462.231C476.837 462.231 476.32 462.391 475.872 462.711C475.424 463.031 475.072 463.511 474.816 464.151C474.571 464.791 474.448 465.586 474.448 466.535C474.448 467.485 474.571 468.279 474.816 468.919C475.072 469.559 475.424 470.039 475.872 470.359C476.32 470.679 476.837 470.839 477.424 470.839ZM488.096 472.263C487.221 472.263 486.437 472.039 485.744 471.591C485.061 471.143 484.517 470.493 484.112 469.639C483.717 468.786 483.52 467.751 483.52 466.535C483.52 465.319 483.717 464.285 484.112 463.431C484.517 462.578 485.061 461.927 485.744 461.479C486.437 461.031 487.221 460.807 488.096 460.807C488.96 460.807 489.739 461.031 490.432 461.479C491.125 461.927 491.669 462.578 492.064 463.431C492.459 464.285 492.656 465.319 492.656 466.535C492.656 467.751 492.459 468.786 492.064 469.639C491.669 470.493 491.125 471.143 490.432 471.591C489.739 472.039 488.96 472.263 488.096 472.263ZM488.096 470.839C488.683 470.839 489.195 470.679 489.632 470.359C490.08 470.039 490.427 469.559 490.672 468.919C490.928 468.279 491.056 467.485 491.056 466.535C491.056 465.586 490.928 464.791 490.672 464.151C490.427 463.511 490.08 463.031 489.632 462.711C489.195 462.391 488.683 462.231 488.096 462.231C487.509 462.231 486.992 462.391 486.544 462.711C486.096 463.031 485.744 463.511 485.488 464.151C485.243 464.791 485.12 465.586 485.12 466.535C485.12 467.485 485.243 468.279 485.488 468.919C485.744 469.559 486.096 470.039 486.544 470.359C486.992 470.679 487.509 470.839 488.096 470.839ZM497.517 470.039V463.031H498.861V470.039H497.517ZM494.605 467.175V465.911H501.773V467.175H494.605Z"
                fill="white"
                class="svg-elem-69"
              ></path>
              <defs>
                <filter
                  id="filter0_d_140_97"
                  x="107.99"
                  y="152.046"
                  width="309.941"
                  height="264.473"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_140_97"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_140_97"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter1_d_140_97"
                  x="233.441"
                  y="186.343"
                  width="118.503"
                  height="155.576"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dx="2.48574" dy="6.62865"></feOffset>
                  <feGaussianBlur stdDeviation="3.31432"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.52 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_140_97"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_140_97"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter2_f_140_97"
                  x="234.383"
                  y="0.663914"
                  width="267.135"
                  height="267.135"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="17.6904"
                    result="effect1_foregroundBlur_140_97"
                  ></feGaussianBlur>
                </filter>
                <radialGradient
                  id="paint0_radial_140_97"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(367.95 134.231) rotate(90) scale(98.1868)"
                >
                  <stop stop-color="#FFD075"></stop>
                  <stop offset="1" stop-color="#D9D9D9" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
            <button
              className="bg-[##5B328C] text-[#cFC75B] hover:text-[#FFC75B] border-[5px] w-[251px]  leading-[24px] h-[68px] text-[20px] rounded-[70px]  border-[#2F184E]"
              loading={loading}
              type="dashed"
              onClick={() => onSubmit()}
            >
              Sürəti test et
            </button>
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
                {data.downloadSpeed}
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
                {data.uploadSpeed}
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
                {data.latency}
                <span className="text-white text-[8px] font-bold">ms</span>
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

export default Speedtest;
