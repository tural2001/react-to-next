import React, { useCallback, useEffect, useState } from 'react';
import { useVisibleContext } from '../components/VisibleContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { base_url } from '../utils/base_url';
import { config } from '../utils/axiosconfig';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
export async function getServerSideProps() {
  try {
    const Formresponse = await axios.get(`${base_url}/api/form-fields`, config);
    return {
      props: {
        FormData: Formresponse.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: 'An error occurred while fetching data',
      },
    };
  }
}

let schema = yup.object({
  label: yup.string().required('Name is Required'),
  type: yup.string().required('Question is Required'),
  name: yup.string().required('Question is Required'),
});
const registration = ({ FormData }) => {
  const [isFileDetected, setIsFileDetected] = useState(false);

  console.log(FormData?.data);
  const dataArray = FormData?.data;
  const data = dataArray?.map((item) => ({
    data: item.data,
  }));
  var typeSixData = dataArray.filter(function (item) {
    return item.type == 6;
  });
  const SelectData = typeSixData?.map((item) => ({
    data: item.data,
  }));

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles) => {
    formik.setFieldValue('cv', acceptedFiles);
    setIsFileDetected(true);

    // acceptedFiles'ı axios.post isteği içinde kullanma
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]); // Varsayılan olarak sadece bir dosya ekleyeceğinizi varsayıyorum.

    axios
      .post(`${base_url}/api/upload-media`, formData, {
        headers: {
          ...config.headers, // headers konfigürasyonunu kullanarak gerekli başlıkları ekleyin
          'Content-Type': 'multipart/form-data',
          // Dosya yükleme işlemi olduğu için bu başlığı ayarlamalısınız.
        },
      })
      .then((response) => {
        // İşlem başarılıysa yapılacak işlemleri burada gerçekleştirin.
      })
      .catch((error) => {
        // Hata durumunda yapılacak işlemleri burada gerçekleştirin.
      });

    // dispatch(uploadImg(acceptedFiles)); işlemi Redux veya benzeri bir yönetim sistemi kullanıyorsanız uygun bir şekilde yerleştirilmelidir.
  }, []);

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      label: FormData?.data?.data?.label,
      type: FormData?.data?.data?.type,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      axios.post(`${base_url}/api/form-fields`, values, config);
      formik.resetForm();
    },
  });

  return (
    <>
      {visible && (
        <div className="home-wrapper-1 container max-w-5xl max-sm:hidden py-10 mx-auto relative overflow-hidden max-xl:hidden">
          <div className="grid grid-cols-3 justify-items-center">
            <Link href="/services/fiberoptik">
              <div className="">
                <div className="bg-[#DCC5F6] w-[102px] h-[102px] rounded-3xl flex items-center mx-auto">
                  <Image
                    src="/assets/world.png"
                    width={500}
                    height={300}
                    className="w-[56px] h-[56px] mx-auto"
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="flex justify-center">
                    {' '}
                    <h3 className=" font-medium text-[28px] py-4  tracking-[0.5px]">
                      Internet
                    </h3>
                  </div>

                  <ul className="flex flex-col justify-center items-center gap-2 text-[#909090]  font-normal ">
                    <li>Fiber optik</li>
                    <li>Simsiz</li>
                    <li>Ayrılmış internet xətti</li>
                    <li>ADSL</li>
                  </ul>
                </div>
              </div>
            </Link>
            <Link href="/services/fiberoptik">
              <div className="">
                <div className="bg-[#BFFFCD] w-32 h-32 rounded-3xl flex items-center mx-auto">
                  <Image
                    src="/assets/tvstroke.png"
                    width={500}
                    height={300}
                    className="w-[56px] h-[56px] mx-auto"
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <h3 className=" font-medium text-[28px] py-4  tracking-[0.5px]">
                    TV
                  </h3>
                </div>
                <ul className="flex flex-col justify-center items-center gap-2 text-[#909090]  font-normal text-[]">
                  <li>iP TV</li>
                </ul>
              </div>
            </Link>
            <Link href="/services/fiberoptik">
              <div className="">
                <div className="bg-[#D1E3FF] w-32 h-32 rounded-3xl flex items-center mx-auto">
                  <Image
                    src="/assets/phonestroke.png"
                    width={500}
                    height={300}
                    className="w-[56px] h-[56px] mx-auto"
                    alt="Telefon Çizgisi"
                  />
                </div>
                <div className="flex justify-center">
                  <h3 className="font-medium text-[28px] py-4 tracking-[0.5px]">
                    Telefon
                  </h3>
                </div>
                <ul className="flex flex-col justify-center items-center gap-2 text-[#909090] font-normal text-[]">
                  <li>SiP telefoniya</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      )}
      <div className="container max-w-[937px] mx-auto  py-10 register">
        <h3 className="text-[40px] text-center text-[#5B2D90] font-semibold tracking-[0.3px] inter max-md:text-[20px]">
          Azəronline-a xoş gəlmisiniz !
        </h3>
        <p className="text-[16px] text-[#94A2B3] text-center mb-5 mt-2">
          Qeydiyyat formu
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const requiredFields = ['label', 'type'];
            const errors = {};
            requiredFields.forEach((fieldName) => {
              if (formik.touched[fieldName] && !formik.values[fieldName]) {
                errors[fieldName] = 'This field is Required';
              }
            });

            formik.handleSubmit(e);
          }}
          className="grid grid-cols-2 gap-5 py-10 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:gap-7 max-md:mx-10"
        >
          {FormData?.data?.map((item) => (
            <div
              className={`w-[442px] max-sm:w-full flex-col 
               justify-center gap-2`}
              key={item.id}
            >
              <div className="flex-row">
                <label htmlFor="" className="text-[#637381] text-[20px]">
                  {item.label}
                  <span className="text-[#ED1C24]">*</span>
                </label>
              </div>
              {item.type == 1 && (
                <input
                  type="text"
                  name={item.name}
                  className="border-none bg-[#F4F4F4] rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[item.name]}
                />
              )}
              {item.type == 2 && (
                <input
                  type="tel"
                  name={item.label}
                  className="border-none bg-[#F4F4F4] rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0"
                  placeholder="+994 _ _  _ _ _  _ _  _ _"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[item.name]}
                />
              )}

              {item.type == 3 &&
                item.data
                  .toString()
                  .split('|')
                  .map((value, index) => {
                    return (
                      <>
                        <div className="">
                          <label htmlFor="">{value}</label>
                          <input
                            type="radio"
                            id={value}
                            name={item.name}
                            className="border-none bg-[#F4F4F4] rounded-xl w-4 max-sm:w-full h-4 focus:ring-0"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[item.name]}
                            checked={formik.values.value}
                            key={index}
                          />
                        </div>
                      </>
                    );
                  })}
              {item.type == 4 &&
                item.data
                  .toString()
                  .split('|')
                  .map((value, index) => {
                    return (
                      <>
                        <div className="">
                          <label htmlFor="">{value}</label>
                          <input
                            type="checkbox"
                            id={value}
                            name={item.name}
                            className="border-none bg-[#F4F4F4] rounded-xl w-4 max-sm:w-full h-4 focus:ring-0"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[item.name]}
                            checked={formik.values.value}
                            key={index}
                          />
                        </div>
                      </>
                    );
                  })}
              {item.type == 5 && (
                <Dropzone onDrop={onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />

                        <div className="border border-[#DBDBDB] w-[445px] h-[189px] max-xl:w-11/12    bg-[#F4F4F4] rounded-lg flex justify-center items-center">
                          <label
                            htmlFor="dropzone-file"
                            className={`flex flex-col items-center justify-center w-full h-48    rounded-lg cursor-pointer  ${
                              isFileDetected
                                ? 'bg-green-200'
                                : ' hover:bg-gray-100'
                            } `}
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              {isFileDetected ? (
                                <p className="mb-2 text-sm text-yellow-600 dark:text-yellow-400">
                                  File detected
                                </p>
                              ) : (
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{' '}
                                  or drag and drop
                                </p>
                              )}

                              <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{' '}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </section>
                  )}
                </Dropzone>
              )}
              {item.type == 6 && (
                <select
                  name={item.name}
                  id={item.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[item.name]}
                >
                  <option value="">Lütfen seçin</option>

                  {item.data
                    .toString()
                    .split('|')
                    .map((value, index) => (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    ))}
                </select>
              )}
              {item.type == 7 && (
                <textarea name={item.name} id="" cols="10" rows="8"></textarea>
              )}
              {/* Diğer durumlar için gerekli giriş alanlarını buraya ekleyin */}
            </div>
          ))}
          <button type="submit">gg</button>
        </form>
      </div>
    </>
  );
};

export default registration;
