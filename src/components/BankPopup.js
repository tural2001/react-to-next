import React from 'react';
import Popup from 'reactjs-popup';

import Image from 'next/image';

export const BankPopup = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={79}
          height={81}
          src="/assets/payment/bank.png"
          className="w-[79px] h-[81px]"
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
                src="/assets/popup/bankpopup.png"
                className="rounded-3xl w-[285px] h-[315px]"
                alt=""
              />
            </div>
            <div className="w-[595px] h-[300px] leading-[115%] overflow-hidden">
              <h2 className="text-[#444444] text-[13.5px] font-bold mt-32">
                BANK VƏ POÇT FİLİALLARINDA ÖDƏMƏ{' '}
              </h2>
              <p className="text-[12px] text-[#B4B4B4]">
                Azeronline xidmətləri üzrə nağd ödə nişlər istənilən Azərpoçt,
                Naxçıvanpoçt və bank filiallarında qəbul olunur. Ödəniş üçün
                tələb olan məlumat: müştəri kodu və ödəniş məbləği.
              </p>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};
