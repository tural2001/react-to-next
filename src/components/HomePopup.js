import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
export const HomePopup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      if (router.pathname !== '/registration') {
        const hasSeenPopup = localStorage.getItem('hasSeenPopup');

        if (!hasSeenPopup) {
          const timeout = setTimeout(() => {
            setIsOpen(true);
            localStorage.setItem('hasSeenPopup', 'true');
          }, 5000);

          return () => {
            clearTimeout(timeout);
          };
        }
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const handleTriggerClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleTriggerClick}
        className="border p-2 rounded-3xl text-white text-[15px] w-[170px] h-[40px] max-sm:w-[120px] max-sm:h-[32px] max-sm:text-[11px] text-center mt-5 max-sm:mt-2 flex justify-center items-center overflow-hidden"
      >
        Onlayn qeydiyyat
      </button>

      <Popup
        open={isOpen}
        onClose={() => setIsOpen(false)}
        modal
        nested
        contentStyle={{
          padding: '0px',
          borderRadius: '50px',
          borderColor: '#5b2d90',
          width: '919px',
          height: '492px',
          overflow: 'hidden',
        }}
      >
        {(close) => (
          <>
            <div className="popup-content-2"></div>
            <Image
              src="/assets/popup/x.png"
              className="absolute right-5 top-5 w-[40px] h-[42px]"
              alt=""
              width={40}
              height={42}
              onClick={() => {
                close();
                setIsOpen(false);
              }}
            />
            <Image
              src="/assets/popupqeydiyyat.png"
              width={100}
              height={100}
              layout="responsive"
              className="w-full"
              alt=""
            />
            <div className="absolute top-32 w-[439px]  left-10">
              {' '}
              <p className="text-white text-[28px] font-light">
                Onlayn qeydiyyatdan keç, {}
                <span className="text-white text-[44px] font-extrabold">
                  OPTİK İNTERNETƏ DAHA TEZ QOŞUL!
                </span>
              </p>
              <Link href="registration">
                <button className="w-[254px] h-[45px] border-[1px] border-white text-[20px] text-white rounded-full mt-3">
                  Onlayn qeydiyyat
                </button>
              </Link>
            </div>
          </>
        )}
      </Popup>
    </>
  );
};
