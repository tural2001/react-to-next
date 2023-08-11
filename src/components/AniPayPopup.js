import React from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';

export const AniPayPopup = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={81}
          height={89}
          src="/assets/payment/anipay.png"
          className="w-[81px] h-[89px]"
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
                src="/assets/popup/anipaypopup.png"
                width={285}
                height={315}
                className="rounded-3xl w-[285px] h-[315px]"
                alt=""
              />
            </div>
            <div className="w-[595px] h-[300px] leading-[115%] overflow-hidden">
              <h2 className="text-[#444444] text-[13.5px] font-bold mt-20">
                ANİPAY{' '}
              </h2>
              <p className="text-[12px] text-[#B4B4B4]">
                Azeronline abunəçiləri istifadə etdikləri internet xidmətləri
                üzrə müvafiq haqları AniPay mobil tətbiqi vasitəsi ilə ödəyə
                bilərlər. AniPay mobil tətbiqi həm Android, həm də İOS
                platformalarında mövcuddur. <br /> <br /> Ödəniş qaydası
                aşağıdaki kimidir: Birbaşa Ödəniş İnternet Azeronline Müştəri
                kodu Ödəniləcək məbləğ Təsdiq
              </p>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};
