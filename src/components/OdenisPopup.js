import Image from 'next/image';
import React from 'react';
import Popup from 'reactjs-popup';

export const OdenisPopup = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={201}
          height={108}
          src="/assets/payment/odenis.png"
          className="w-[102px] h-[108px]"
          alt=""
        />
      }
      modal
      nested
      contentStyle={{
        padding: '0px',
        borderRadius: '50px',
        borderColor: 'white',
        width: '1110px',
        height: '575px',
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
          <div className="flex justify-center mt-32 gap-5">
            <div className="flex justify-center items-center">
              {' '}
              <Image
                width={285}
                height={315}
                src="/assets/popup/odenispopup.png"
                className="rounded-3xl w-[285px] h-[315px]"
                alt=""
              />
            </div>
            <div className="w-[595px] h-[300px] leading-[115%] overflow-hidden">
              <h2 className="text-[#444444] text-[13.5px] font-bold mt-32">
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
