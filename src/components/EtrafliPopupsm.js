import React from 'react';
import Popup from 'reactjs-popup';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { CiLocationOn } from 'react-icons/ci';
import Image from 'next/image';

export const EtrafliPopupsm = (props) => {
  return (
    <Popup
      trigger={
        <button
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          className="w-[142px] h-[33px] max-xl:w-[100px] max-xl:h-[24px] bg-[#F9F9F9] rounded-full  text-[#5B2D90] text-[12px] max-xl:text-[8px] flex justify-center items-center gap-2"
        >
          Ətraflı <HiOutlineArrowLongRight className="text-lg" />
        </button>
      }
      modal
      nested
      contentStyle={{
        padding: '0px',
        borderRadius: '30px',
        borderColor: 'white',
        width: '295px',
        height: '793px',
        overflowX: 'hidden',
        overflow: 'scroll',
      }}
    >
      {(close) => (
        <>
          <Image
            src="/assets/popup/x.png"
            width={40}
            height={42}
            className="absolute right-2 top-5 w-[40px] h-[42px]"
            alt=""
            onClick={close}
          />
          <div className="w-11/12 mx-5  flex flex-col justify-center mt-5 gap-3">
            <p className="text-[12px] flex items-center gap-1 text-[#939393] ">
              <CiLocationOn /> Bakı,Azərbaycan
            </p>
            <h3 className="text-[16px] text-black font-bold">
              Developer full stack
            </h3>
            <p className="text-[12px] text-[#757575] leading-6">
              Tələb olunan namizəd gülərüz və kollektivə tez uyğunlaşan,
              intizamlı, məsuliyyətli qabiliyyətlərə malik olmalı, avtomobilləri
              təmir üçün servislərə aparmalı və təmir prossesinə nəzarət
              etməlidir.
              <br />
              <br />
              <span className="font-bold">İşin təsviri:</span>
              <ul className=" list-disc">
                <li>
                  Avtonəqliyyat vasitələrinə mütəmadi texniki baxışlar keçirmək,
                  müştərilərə təhvil verilməli olan avtomobillərin texniki
                  hazırlığını təmin etmək.
                </li>
                <li>
                  Rəhbərlik tərəfindən verilən tapşırıqların vaxtında yerinə
                  yetirmək.
                </li>
              </ul>
              <br />
              <br />
              <span className="font-bold">Tələblər:</span>
              <ul className="list-disc">
                <li className="list-disc">Yaş həddi: 25-45</li>
                <li className="list-disc">
                  Yol hərəkəti qaydalarını və yol xəritəsini yaxşı bilmək.
                </li>
                <li className="list-disc">Sürücülük vəsiqəsi mütləqdir.</li>
                <li className="list-disc">Yalnız bəy namizədlər.</li>
                <li className="list-disc">3 il iş təcrübəsi.</li>
              </ul>
              <br />
              <br />
              <span className="font-bold">İş şəraiti:</span>
              <ul>
                <li>İş saatı: 09-30-dan 18-30-dək;</li>
                <li>İş günü: Həftənin 6 günü;</li>
                <li>İstirahət günü: Bazar günü;</li>
                <li>AR ƏM-nə uyğun sənədləşmə;</li>
                <li>Əmək haqqı : 600-700 Azn</li>
              </ul>
              İş yeri: Bakı Nizami r-nu, Heydər Əliyev pr 115, Caspian Sport
              Plaza B korpus <br /> Xahiş olunur namizədlər CV-sini “Sürücü”
              başlığı ilə hrmassi2@gmail.com ünvanına göndərsinlər.
            </p>
            <button className="w-[154px] h-[33px] bg-[#5B2D90] rounded-full text-white text-[12px] mt-1 mb-10">
              Müraciət et
            </button>
          </div>
        </>
      )}
    </Popup>
  );
};
