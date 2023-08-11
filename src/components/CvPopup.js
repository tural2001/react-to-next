import React from 'react';
import Popup from 'reactjs-popup';
import Dropzone from 'react-dropzone';
import Image from 'next/image';

export const CvPopup = (props) => {
  return (
    <Popup
      trigger={
        <button
          aria-describedby={props.description}
          suppressHydrationWarning={true}
          className="w-[154px] h-[33px]  max-xl:w-[100px] max-xl:h-[24px] bg-[#5B2D90] rounded-full text-white text-[12px] max-xl:text-[8px]"
        >
          Müraciət et
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
          <div className="flex flex-col justify-center  mt-20 gap-5">
            <div className="w-[470px] mx-auto   flex flex-col justify-center  gap-2">
              <label htmlFor="" className="text-black font-medium  text-[16px]">
                CV faylını yükləyin <span className="text-[#ED1C24]">*</span>
              </label>
              <Dropzone>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div
                      {...getRootProps()}
                      className="border border-[#DBDBDB] w-[470px] h-[189px]  bg-[#F4F4F4] rounded-lg flex justify-center items-center"
                    >
                      <input {...getInputProps()} />
                      <p className="uppercase text-[12px] text-[#9A9A9A] flex flex-col justify-center items-center font-semibold  gap-4">
                        <Image
                          src="/assets/addfile.png"
                          width={78}
                          height={78}
                          alt=""
                          className="w-[78px] h-[78px]"
                        />
                        PDF, DOC, DOCX, maks 2 mb
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
              <button className="w-[197px] h-[38px] bg-[#5B2D90] rounded-full text-white text-[16px] mt-3">
                Müraciət göndər
              </button>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};
