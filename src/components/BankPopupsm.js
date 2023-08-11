import React from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';

export const BankPopupsm = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={31}
          height={32}
          src="/assets/payment/bank.png"
          className="w-[31px] h-[32px]"
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
        height: '360px',
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
                src="/assets/popup/bankpopup.png"
                className="rounded-3xl w-[293px] h-[191px] object-cover"
                alt=""
              />
            </div>
            <div className="w-11/12 mx-3">
              <h2 className="text-[#444444] text-[13.5px] font-bold ">
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
