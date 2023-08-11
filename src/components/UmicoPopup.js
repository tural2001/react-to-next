import Image from 'next/image';
import React from 'react';
import Popup from 'reactjs-popup';

export const UmicoPopup = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={209}
          height={53}
          src="/assets/payment/umico.png"
          className="w-[209px] h-[53px]"
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
                src="/assets/popup/umicopopup.png"
                className="rounded-3xl w-[285px] h-[315px]"
                alt=""
              />
            </div>
            <div className="w-[595px] h-[300px] leading-[115%] overflow-hidden">
              <h2 className="text-[#444444] text-[13.5px] font-bold mt-20">
                UMICO{' '}
              </h2>
              <ul className="text-[12px] text-[#B4B4B4] mt-3 text-justify">
                Azeronline xidmət haqqı ödənişlərini Umico mobil tətbiqindən
                etmək üçün:
                <li>1. Tətbiqi açdıqda "Bank" bölməsinə keçid edin;</li>
                <li>2. Ödəniş növlərindən "İnternet"i seçin;</li>
                <li>3. Siyahıda "Azeronline"-ı tapıb üzərinə basın;</li>
                <li>4. Abunəçi kodunuzu qeyd edərək davam edin;</li>
                <li>
                  5. Sonda isə ödəniş növünüzü seçərək ödəmək istədiyiniz
                  məbləği daxil edin.
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};
