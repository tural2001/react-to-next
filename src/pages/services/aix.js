import React from 'react';
import ServiceLayout from './layout';
import Image from 'next/image';
import Head from 'next/head';

const aix = () => {
  const pageTitle = 'Your Services Post Title';
  const pageDescription = 'Description of your services post.';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <ServiceLayout>
        <div className="services-wrapper-5 bg-[#F7F6FB]" id="aix">
          <div className="max-w-[1087px] mx-auto py-10">
            <div className="grid grid-cols-3 max-xl:grid-cols-2 py-20 max-xl:mx-7 gap-10">
              <div className="col-span-1 max-xl:col-span-2">
                <Image
                  src="/assets/services/ayrilmisinternetxetti.png"
                  width={500}
                  height={300}
                  layout="responsive"
                  className="max-xl:hidden"
                  alt=""
                />
                <Image
                  src="/assets/services/smayrilmisinternetxetti.png"
                  width={100}
                  height={100}
                  className="hidden max-xl:block"
                  alt=""
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center gap-5">
                <h3 className="text-purple-900 text-[40px] font-bold leading-10 max-md:text-[20px] max-xl:text-[30px] uppercase overflow-hidden">
                  AYRILMIŞ İNTERNET XƏTTİ
                </h3>{' '}
                <p className="text-[#757575] text-[16px] max-xl:text-[12px] font-medium">
                  Azeronline korporativ müştərilərinə yüksək sürətli və etibarlı
                  internet bağlantısı -  “Ayrılmış İnternet Xətti”  xidmətini
                  təklif edir.
                </p>
                <br /> <br /> Üstünlüklər və imkanlar:
                <ul className="text-[#757575] text-[16px] max-xl:text-[12px] font-medium">
                  <li> AYRILMIŞ İNTERNET XƏTTİ</li>
                  <li> AYRILMIŞ İNTERNET XƏTTİ</li>
                </ul>
                <br />
                Ayrılmış İnternet Xətti” xidmətinə dair daha ətraflı məlumat və
                sifariş üçün (+994) 12 450-2020 nömrəsinə və ya
                business@azeronline.net e-poçt ünvanına müraciət edin.
              </div>
            </div>

            <div className="">
              <h3 className="text-center text-purple-900 text-[40px] font-bold leading-10 uppercase py-5 overflow-hidden max-md:text-[20px] max-xl:text-[30px]">
                Tərəfdaşlarımız
              </h3>{' '}
              <div className="mt-5 max-xl:mx-10">
                <Image
                  src="/assets/services/terefdaslarimiz.png"
                  width={500}
                  height={300}
                  layout="responsive"
                  className="max-xl:hidden"
                  alt=""
                />
                <Image
                  src="/assets/services/smterefdaslarimiz.png"
                  width={100}
                  height={100}
                  className="hidden max-xl:block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default aix;
