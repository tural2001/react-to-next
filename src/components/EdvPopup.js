import React from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';

export const EdvPopup = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={292}
          height={191}
          src="/assets/payment/edv.png"
          className="w-[195px] h-[63px]"
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
                src="/assets/popup/edvpopup.png"
                className="rounded-3xl w-[285px] h-[315px]"
                alt=""
              />
            </div>
            <div className="w-[595px] h-[300px] leading-[115%] overflow-hidden">
              <h2 className="text-[#444444] text-[13.5px] font-bold ">
                ƏDV GERİ AL
              </h2>
              <p className="text-[12px] text-[#B4B4B4] leading-5">
                Azeronline abunəçiləri “ƏDV geri al” veb saytında
                (www.edvgerial.az) və Kapital Bankın “BirBank” mobil tətbiqində
                olan şəxsi kabinet üzərindən geri alınmış ƏDV məbləğindən
                Azeronline xidməti ödənişlərini edə bilərlər. <br /> <br /> Veb
                sayt üzərindən <br /> Əsas səhifə Ödəniş İnternet Azeronline
                Müştəri kodu Ödəniləcək məbləğ Təsdiq BirBank mobil tətbiqi
                üzərindən Menu Bonus ƏDV geri al Ödəniş İnternet Azeronline
                Müştəri kodu Ödəniləcək məbləğ Təsdiq <br /> <br /> Qeydlər:{' '}
                <br /> Təqdim olunan ödəniş imkanı yalnız fiziki şəxs olan
                istehlakçılara şamil edilir Birdəfəlik minimal ödəniş məbləği 1
                AZN, maksimal məbləğ isə 200 AZN-dir.
              </p>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};
