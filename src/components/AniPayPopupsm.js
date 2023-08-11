import Image from 'next/image';
import React from 'react';
import Popup from 'reactjs-popup';

export const AniPayPopupsm = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={32}
          height={35}
          src="/assets/payment/anipay.png"
          className="w-[32px] h-[35px]"
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
        height: '450px',
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
                src="/assets/popup/anipaypopup.png"
                width={293}
                height={191}
                className="rounded-3xl w-[293px] h-[191px] object-cover"
                alt=""
              />
            </div>
            <div className="w-11/12 mx-3">
              <h2 className="text-[#444444] text-[13.5px] font-bold mt-10">
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
