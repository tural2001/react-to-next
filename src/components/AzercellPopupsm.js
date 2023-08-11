import Image from 'next/image';
import React from 'react';
import Popup from 'reactjs-popup';

export const AzercellPopupsm = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={292}
          height={191}
          src="/assets/payment/azercell.png"
          className="w-[292px] h-[191px] max-xl:w-[75px] max-xl:h-[24px]"
          alt=""
        />
      }
      modal
      nested
      contentStyle={{
        padding: '0px',
        borderRadius: '30px',
        borderColor: 'white',
        width: '292px',
        height: '801px',
        overflowX: 'hidden',
        overflow: 'scroll',
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
                src="/assets/popup/azercellsm.png"
                width={292}
                height={190}
                className="rounded-3xl w-[292px] h-[190px] object-cover"
                alt=""
              />
            </div>
            <div className="w-11/12 mx-3">
              <h2 className="text-[#444444] text-[13.5px] font-bold">
                AZERCELL KABİNETİM{' '}
              </h2>
              <p className="text-[12px] text-[#B4B4B4] text-justify ">
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
