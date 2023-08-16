import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

function ServiceLayout({ children }) {
  const [selectedItem, setSelectedItem] = useState('/services/fiberoptik');
  const [animationClasses, setAnimationClass] = useState(
    getAnimationClass('/services/fiberoptik')
  );

  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleItemClick = (item) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
      setAnimationClass(getAnimationClass(item));
    }
  };

  const handleLinkClick = (href) => {
    if (selectedItem !== href) {
      setIsNavigating(true);
      setSelectedItem(href);
      setAnimationClass(getAnimationClass(href));
      router.push(href);
    }
  };

  function getAnimationClass(selectedItem) {
    const animationClasses = {
      '/services/fiberoptik': 'start-fiberoptik',
      '/services/iptv': 'start-iptv',
      '/services/simsiz': 'start-simsiz',
      '/services/aix': 'start-aix',
      '/services/adsl': 'start-adsl',
    };

    return animationClasses[selectedItem] || '';
  }

  useEffect(() => {
    setSelectedItem(router.pathname);
  }, [router.pathname]);

  return (
    <div>
      <div className="services-wrapper-1 max-w-[1100px] mx-auto pt-10 max-xl:pt-10">
        <h3 className="text-purple-900 text-[40px] text-center font-bold leading-10 pb-10 uppercase overflow-hidden">
          XİDMƏTLƏR
        </h3>
        <div className="services-header mx-5 max-xl:hidden">
          <nav className="w-5xl relative h-[70px] rounded-[8px] text-[0px] border-b-[1px] flex justify-between  px-5 items-center overflow-hidden">
            <Link
              href="/services/fiberoptik"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center`}
              onClick={() => {
                handleItemClick('/services/fiberoptik');
                handleLinkClick('/services/fiberoptik');
              }}
            >
              {selectedItem === '/services/fiberoptik' ? (
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
            <Link
              href="/services/iptv"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center 
              }`}
              onClick={() => {
                handleItemClick('/services/iptv');
                handleLinkClick('/services/iptv');
              }}
            >
              {selectedItem === '/services/iptv' ? (
                <div className="w-[44px] h-[44px] rounded-full bg-[#5B2D90] flex justify-center items-center ">
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
            </Link>
            <Link
              href="/services/simsiz"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center 
              }`}
              onClick={() => {
                handleItemClick('/services/simsiz');
                handleLinkClick('/services/simsiz');
              }}
            >
              {selectedItem == '/services/simsiz' ? (
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
            </Link>
            <Link
              href="/services/aix"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center`}
              onClick={() => {
                handleItemClick('/services/aix');
                handleLinkClick('/services/aix');
              }}
            >
              {selectedItem === '/services/aix' ? (
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
            </Link>
            <Link
              href="/services/adsl"
              className={`text-[20px] uppercase relative   leading-[50px] flex gap-1 justify-center items-center `}
              onClick={() => {
                handleLinkClick('/services/adsl');
                handleItemClick('/services/adsl');
              }}
            >
              {selectedItem === '/services/adsl' ? (
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
            </Link>
            <div className={`animation ${getAnimationClass(selectedItem)}`} />
          </nav>
        </div>
      </div>
      {children} {/* Render the content of the specific service page */}
    </div>
  );
}

export default ServiceLayout;
