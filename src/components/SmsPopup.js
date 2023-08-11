import React from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';

export const SmsPopup = (props) => {
  return (
    <Popup
      trigger={
        <Image
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          width={91}
          height={78}
          src="/assets/payment/sms.png"
          className="w-[91px] h-[78px]"
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
                src="/assets/popup/smspopup.png"
                className="rounded-3xl w-[285px] h-[315px]"
                alt=""
              />
            </div>
            <div className="w-[595px] h-[300px] leading-[115%] overflow-hidden">
              <h2 className="text-[#444444] text-[13.5px] font-bold">
                SMS ÖDƏMƏ{' '}
              </h2>
              <p className="text-[12px] text-[#B4B4B4]">
                ADSL istifadəçi adınızı (qoşulmuş telefon nömrəsi) SMS
                vasitəsilə 91705 və ya 91710 qısa nömrələrinə göndərin.
                Balansınızda 5₼ və ya 10₼ məbləğində internet aktivləşəcək.
              </p>
              <table className="w-full border-[1px] border-[#B4B4B4]   text-sm text-left text-gray-500 mt-10 ">
                <thead className="text-xs text-gray-700 uppercase ">
                  <tr className=" border-b">
                    <th scope="col" className="px-6 py-3">
                      Qısa nömrə
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tarif (1 SMS üçün)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      91705
                    </th>
                    <td className="px-6 py-4">5 m</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      91710
                    </th>
                    <td className="px-6 py-4">10 m</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[12px] text-[#7B7B7B] italic mt-3">
                Qeyd: Yalnız Fakturasız Xətt abunəçiləri üçün
              </p>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};
