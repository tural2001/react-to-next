import React from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';
import { useTranslation } from './TranslationContext';

export const TariffsPopup = () => {
  const { translate, Language } = useTranslation();

  return (
    <Popup
      trigger={
        <button className="w-[100px] h-[30px] text-[8px] font-medium text-white bg-[#AB31D6] rounded-full">
          {translate('More', Language)}
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
              {translate('Tariff_pop', Language)}
            </p>
          </div>
        </>
      )}
    </Popup>
  );
};
