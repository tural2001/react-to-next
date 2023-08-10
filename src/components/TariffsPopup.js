import React from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';

export const TariffsPopup = () => {
  return (
    <Popup
      trigger={
        <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
          Ətraflı məlumat
        </button>
      }
      modal
      nested
      contentStyle={{
        padding: '0px',
        borderRadius: '50px',
        borderColor: 'white',
        width: '759px',
        height: '392px',
        overflow: 'hidden',
      }}
    >
      {(close) => (
        <>
          <Image
            src="/assets/popup/x.png"
            width={40}
            height={42}
            className="absolute right-5 top-5 w-[40px] h-[42px]"
            alt=""
            onClick={close}
          />
          <div className="w-[657px] mx-auto flex justify-center mt-20 gap-5">
            <p className="text-16px leading-6">
              <span className="font-bold">
                Aylıq xidmət haqqı ödənişi növbəti 30 gün ərzində internetdən
                istifadə imkanı verir.
              </span>{' '}
              <br />
              Balansın bitdiyi gün internet yalnız saat 23:59-a qədər aktiv
              qalacaq. Balansına 3 ay ardıcıl seçilmiş tarifə uyğun ödəniş
              etməyən abonentlə müqaviləyə avtomatik xitam verilir. <br />
              Qeyd: Qoşulma şərtləri ərazi üzrə fərqlənə bilər. Daha dəqiq
              məlumat üçün müştəri xidmətlərimiz ilə əlaqə saxlaya və ya onlayn
              çat xidmətimiz vasitəsilə bizə müraciət edə bilərsiniz. <br />
              <br />
              Xidmətdən yararlanmaq üçün qeydiyyatdan keçin, vaxt itirmədən
              sürətli internetə qoşulun.
            </p>
          </div>
        </>
      )}
    </Popup>
  );
};
