import React from 'react';
import Popup from 'reactjs-popup';

import Image from 'next/image';

export const OdenisPopupsm = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={40}
          height={43}
          src="/assets/payment/odenis.png"
          className="w-[40px] h-[43px]"
          alt=""
        />
      }
      modal
      nested
      contentStyle={{
        padding: '0px',
        borderRadius: '30px',
        borderColor: 'white',
        width: '293px',
        height: '350px',
        overflow: 'hidden',
      }}
    >
      {(close) => (
        <>
          <Image
            src="/assets/popup/x.png"
            className="absolute right-5 top-5 w-[40px] h-[42px]"
            alt=""
            width={40}
            height={42}
            onClick={close}
          />
          <div className="flex flex-col justify-center  gap-5">
            <div className="flex justify-center items-center">
              {' '}
              <Image
                width={293}
                height={191}
                src="/assets/popup/odenis.png"
                className="rounded-3xl w-[293px] h-[191px] object-cover"
                alt=""
              />
            </div>
            <div className="w-11/12 mx-3">
              <h2 className="text-[#444444] text-[13.5px] font-bold mt-3">
                {' '}
                ÖDƏNİŞ TERMİNALLARI{' '}
              </h2>
              <p className="text-[12px] text-[#B4B4B4]">
                Azeronline müştəriləri "MilliÖn", "eManat", "ExpressPay",
                "Kapital Bank", "ASAN ödəniş" və digər ödəniş terminalları
                vasitəsilə internet balanslarını artıra bilərlər.
              </p>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};
