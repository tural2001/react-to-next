import Image from 'next/image';
import React from 'react';
import Popup from 'reactjs-popup';

export const AzercellPopup = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={190}
          height={60}
          src="/assets/payment/azercell.png"
          className="w-[190px] h-[60px]"
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
                src="/assets/popup/azercellpopup.png"
                width={285}
                height={315}
                className="rounded-3xl w-[285px] h-[315px]"
                alt=""
              />
            </div>
            <div className="w-[595px] h-[300px] leading-[115%] overflow-hidden">
              <h2 className="text-[#444444] text-[13.5px] font-bold">
                AZERCELL KABİNETİM{' '}
              </h2>
              <p className="text-[12px] text-[#B4B4B4]">
                Azeronline xidmətlərinin ödənişini etmək üçün Azercell Kabinetim
                mobil tətbiqində: <br />
                 1. “Menyu”-dan “Mobil Ödəmə” bölməsinə daxil olur;
                <br />  2. Sonra “İnternet” bölümündə “Azeronline” seçərək,
                ödəniş üçün lazım olan məlumatları (müştəri kodunu və ödəniş
                məbləğini) daxil etməklə ödənişi edirsiniz. <br /> Ödənişdən
                sonra məbləğin nömrənizin balansından silindiyi barədə bildiriş
                alacaqsınız. <br /> Tarixçə bölməsində son 90 günün ödəniş
                tarixçəsini görə bilərsiniz. <br /> Qeydlər:  <br /> Yalnız
                fiziki şəxslərə aid nömrələr və Azercell fakturasız xətt
                abunəçiləri bu xidmətdən istifadə edə bilər. <br /> Fakturalı
                xətt abunəçiləri isə avans balanslarından istifadə edərək
                ödənişlərini həyata keçirə bilərlər. <br /> Birdəfəlik minimal
                ödəniş məbləği 1 AZN, maksimal məbləğ isə 50 AZN-dir. <br /> Bir
                ay ərzində bir nömrə üzərindən maksimal ödəniş məbləği 500
                AZN-dir. <br /> Ödəniş edə bilmək üçün balans 3 AZN-dən çox
                olmalıdır. <br /> Bir ay ərzində bir nömrə üzərindən maksimal
                ödəniş məbləği 500 AZN-dir. <br /> Ödəniş edə bilmək üçün balans
                3 AZN-dən çox olmalıdır.
              </p>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};
