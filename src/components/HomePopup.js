import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Popup from 'reactjs-popup';

export const HomePopup = () => {
  return (
    <Popup
      trigger={
        <button className="border p-2 rounded-3xl text-white text-[15px] w-[170px] h-[40px] max-sm:w-[120px] max-sm:h-[32px] max-sm:text-[11px] text-center mt-5 max-sm:mt-2 flex justify-center items-center overflow-hidden">
          Onlayn qeydiyyat
        </button>
      }
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
            src="/assets/Popup/x.png"
            className="absolute right-5 top-5 w-[40px] h-[42px]"
            alt=""
            width={40}
            height={42}
            onClick={close}
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
            <Link href="registiration">
              <button className="w-[254px] h-[45px] border-[1px] border-white text-[20px] text-white rounded-full mt-3">
                Onlayn qeydiyyat
              </button>
            </Link>
          </div>
        </>
      )}
    </Popup>
  );
};
