import Image from 'next/image';
import React from 'react';
import Popup from 'reactjs-popup';

export const EdvPopupsm = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={77}
          height={24}
          src="/assets/payment/edv.png"
          className="w-[77px] h-[24px]"
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
        height: '650px',
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
                src="/assets/popup/edvpopup.png"
                className="rounded-3xl w-[293px] h-[191px] object-cover"
                alt=""
              />
            </div>
            <div className="w-11/12 mx-3">
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
