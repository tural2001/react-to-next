import React from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';

export const CibPopupsm = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={40}
          height={26}
          src="/assets/payment/cib.png"
          className="w-[40px] h-[26px]"
          alt=""
        />
      }
      modal
      nested
      contentStyle={{
        padding: '0px',
        borderRadius: '30px',
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
                src="/assets/popup/cibpopup.png"
                className="rounded-3xl w-[285px] h-[315px]"
                alt=""
              />
            </div>
            <div className="w-11/12 mx-3">
              <h2 className="text-[#444444] text-[13.5px] font-bold">UMİCO</h2>
              <p className="text-[12px] text-[#B4B4B4]">
                <ul>
                  Azeronline xidmət haqqı ödənişlərini Umico mobil tətbiqindən
                  etmək üçün:
                  <li>1.Tətbiqi açdıqda "Bank" bölməsinə keçid edin;</li>
                  <li>Ödəniş növlərindən "İnternet"i seçin;</li>
                  <li>Siyahıda "Azeronline"-ı tapıb üzərinə basın;</li>
                  <li>Abunəçi kodunuzu qeyd edərək davam edin;</li>
                  <li>
                    Sonda isə ödəniş növünüzü seçərək ödəmək istədiyiniz məbləği
                    daxil edin.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};
