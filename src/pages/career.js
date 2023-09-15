import React, { useCallback, useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import Dropzone from 'react-dropzone';
import { CvPopup } from '../components/CvPopup';
import { EtrafliPopup } from '../components/EtrafliPopup';
import { EtrafliPopupsm } from '../components/EtrafliPopupsm';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useVisibleContext } from '../components/VisibleContext';
import Head from 'next/head';
import { config } from '../utils/axiosconfig';
import { base_url } from '../utils/base_url';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
export async function getServerSideProps() {
  try {
    const Vacanciesresponse = await axios.get(
      `${base_url}/api/vacancies`,
      config
    );
    return {
      props: {
        VacanciesData: Vacanciesresponse.data,
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
  name: yup.string().required('Name is Required'),
  email: yup.string().required('Email is Required'),
  phone: yup.string().required('Phone is Required'),
  notes: yup.string().required('Notes is Required'),
  vacancy_name: yup.string().required('Vancancy is Required'),
  cv: yup.mixed().required('Cv is Required'),
});

const career = ({ VacanciesData }) => {
  const [isFileDetected, setIsFileDetected] = useState(false);

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const pageTitle = 'Your Career Post Title';
  const pageDescription = 'Description of your career post.';

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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      phone: '',
      email: '',
      notes: '',
      vacancy_name: '',
      cv: null,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      axios.post(`${base_url}/api/career-forms`, values, config);
      formik.resetForm();
    },
  });
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
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
      <div className="max-xl:relative absolute max-xl:z-[-1] w-full  bg-[#F7F6FB] ">
        {' '}
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className=" h-[535px]  top-32 w-full  max-sm:h-[200px] max-md:h-[300px] max-xl:h-[300px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className="bg-[#F7F6FB]  w-full   mx-auto">
        <div className="h-[450px] max-xxl:h-auto  ">
          {' '}
          <h3 className="h3  text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px] max-xxl:text-white ">
            Karyera
          </h3>
          <div className="absolute  z-[1] max-xl:z-[-1]  right-48 max-xxl:right-5 max-sm:top-20 max-xxl:top-40">
            {' '}
            <Image
              src="/assets/career.png"
              width={448}
              height={448}
              className="w-[448px] h-[448px] max-xl:w-[155px] max-xl:h-[155px]  mr-16 max-xl:mr-5  "
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#F7F6FB]  w-full mt-10 max-xl:mt-0">
          <div className=" w-[1110px] max-xl:w-full mx-auto flex flex-col gap-10 justify-center items-center mt-40 max-xl:mt-0 ">
            <div className=" ">
              {' '}
              <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px]  mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center">
                Mövcud vakansiyalar
              </h3>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 max-xl:w-11/12 gap-7">
              {VacanciesData.data.map((item, index) => {
                return (
                  <div
                    className="border-l-[14px] border-[#5B2D90] w-[540px] h-[202px] max-xl:w-full max-xl:h-[135px] bg-white flex flex-col justify-center px-5 gap-7 rounded-xl"
                    key={index}
                  >
                    <h4 className="text-[24px] max-xl:text-[16px]">
                      {item.title}
                    </h4>
                    <p className="text-[12px] flex items-center gap-1 text-[#939393]">
                      <CiLocationOn /> {item.location}
                    </p>
                    <div className="flex justify-between">
                      {' '}
                      <CvPopup />
                      <div className="max-xl:hidden">
                        <EtrafliPopup />
                      </div>
                      <div className="hidden max-xl:block">
                        <EtrafliPopupsm />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="relative w-[920px] max-xl:w-full mx-auto flex flex-col gap-10 justify-center items-center mt-10 ">
            <div className=" ">
              {' '}
              <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px]  mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center">
                Müraciət forması
              </h3>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const requiredFields = [
                  'name',
                  'phone',
                  'cv',
                  'email',
                  'notes',
                  'vacancy_name',
                ];
                const errors = {};
                requiredFields.forEach((fieldName) => {
                  if (formik.touched[fieldName] && !formik.values[fieldName]) {
                    errors[fieldName] = 'This field is Required';
                  }
                });
                if (Object.keys(errors).length > 0) {
                  toast.error('Please fill in the required fields.');
                  return;
                }
                formik.handleSubmit(e);
              }}
              className="grid grid-cols-2 max-xl:flex max-xl:flex-col max-xl:w-full max-xl:justify-center max-xl:items-center gap-7 py-10 "
            >
              <div className="w-full flex flex-col justify-center max-xl:items-center gap-2 ">
                {' '}
                <label htmlFor="" className="text-black  text-[16px]">
                  Ad Soyad <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="text"
                  className="border border-[#DBDBDB]  bg-[#F4F4F4] rounded-lg w-[442px] h-[50px] max-xl:w-11/12  focus:ring-0"
                  placeholder="Lorem ipsum"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
              <div className="w-full flex flex-col justify-center  gap-2 max-xl:items-center">
                {' '}
                <label htmlFor="" className="text-black  text-[16px]">
                  Əlaqə nömrəsi <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="tel"
                  className="border border-[#DBDBDB]  bg-[#F4F4F4] rounded-lg w-[442px] h-[50px] max-xl:w-11/12  focus:ring-0"
                  placeholder="+994 _ _  _ _ _  _ _  _ _"
                  name="phone"
                  onChange={(e) => {
                    const inputPhone = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                    if (inputPhone.length <= 9) {
                      formik.setFieldValue('phone', inputPhone); // Update the field value
                    }
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </div>
              <div className="w-full flex flex-col justify-center gap-2 max-xl:items-center">
                {' '}
                <label htmlFor="" className="text-black  text-[16px]">
                  Müraciət etdiyiniz vakansiyanın adı
                  <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="text"
                  className="border border-[#DBDBDB]  bg-[#F4F4F4] rounded-lg w-[442px] h-[50px] max-xl:w-11/12  focus:ring-0"
                  placeholder="Lorem ipsum"
                  name="vacancy_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.vacancy_name}
                />
              </div>
              <div className="w-full   flex flex-col justify-center gap-2 max-xl:items-center">
                {' '}
                <label htmlFor="" className="text-black  text-[16px]">
                  E-poçt ünvanı <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="email"
                  className="border border-[#DBDBDB]  bg-[#F4F4F4] rounded-lg w-[442px] h-[50px] max-xl:w-11/12  focus:ring-0"
                  placeholder="Lorem ipsum"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className="w-full flex flex-col justify-center gap-2 max-xl:items-center">
                <label htmlFor="" className="text-black  text-[16px]">
                  Qeydiniz <span className="text-[#ED1C24]">*</span>
                </label>
                <textarea
                  className="border-[#DBDBDB] w-[445px] h-[189px] max-xl:w-11/12     bg-[#F4F4F4] rounded-lg"
                  cols="10"
                  rows="8"
                  name="notes"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.notes}
                ></textarea>
              </div>
              <div className="w-full   flex flex-col justify-center gap-2 max-xl:items-center">
                <label htmlFor="" className="text-black  text-[16px]">
                  CV faylını yükləyin <span className="text-[#ED1C24]">*</span>
                </label>
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
              </div>

              <button
                type="submit"
                className="col-span-2 w-[349px] h-[66px] max-xl:w-full  max-xl:h-[35px] text-[16px] bg-[#5B2D90] text-white rounded-full mt-5"
              >
                Göndər
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default career;
