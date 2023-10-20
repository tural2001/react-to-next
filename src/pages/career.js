import React, { useEffect, useRef, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import Dropzone from 'react-dropzone';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useVisibleContext } from '../components/VisibleContext';
import Head from 'next/head';
import { config } from '../utils/axiosconfig';
import { base_url } from '../utils/base_url';
import axios from 'axios';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { useTranslation } from '../components/TranslationContext';
import Popup from 'reactjs-popup';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Service from '../components/Service';

export async function getServerSideProps() {
  try {
    const Vacanciesresponse = await axios.get(
      `${base_url}/api/careers`,
      config
    );
    const Settingresponse = await axios.get(`${base_url}/api/settings`, config);
    const ServiceCategoryresponse = await axios.get(
      `${base_url}/api/service-categories`,
      config
    );
    return {
      props: {
        VacanciesData: Vacanciesresponse.data,
        SettingData: Settingresponse.data,
        ServiceCategoryData: ServiceCategoryresponse.data,
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
  name: yup.string(),
  email: yup.string(),
  phone: yup.string(),
  notes: yup.string(),
  vacancy_name: yup.string().required('*'),
  cv: yup.mixed().required('*'),
});

const career = ({ VacanciesData, SettingData, ServiceCategoryData }) => {
  const [isFileDetected, setIsFileDetected] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showNameError, setShowNameError] = useState(true);
  const [showEmailError, setShowEmailError] = useState(true);
  const [showPhoneError, setShowPhoneError] = useState(true);
  const [showVacancy_nameError, setShowVacancy_nameError] = useState(true);
  const [showNotesError, setShowNotesError] = useState(true);
  const [showCvError, setShowCvError] = useState(true);
  const [vname, setvname] = useState('');
  const [cv, setcv] = useState(null);

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const onDrop = (acceptedFiles, itemName) => {
    console.log(itemName);
    setvname(itemName);
    if (acceptedFiles.length > 0) {
      setShowCvError(false);
    }
    formik.setFieldValue('cv', acceptedFiles);
    setcv(acceptedFiles);
    setIsFileDetected(true);

    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    axios
      .post(`${base_url}/api/upload-media`, formData, {
        headers: {
          ...config.headers,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {})
      .catch((error) => {});
  };

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
    onSubmit: async (values) => {
      if (values.phone.length >= 5 && values.phone.length < 13) {
        setShowPhoneError(true);
        formik.setFieldError('phone', 'Nömrəni doğru daxil edin');
        return;
      }

      try {
        await axios.post(`${base_url}/api/career-forms`, values, config);
        setTimeout(() => {
          setIsFileDetected(false);
        }, 100);
        setShowSuccessAlert(true);
        setShowNameError(true);
        setShowEmailError(true);
        setShowPhoneError(true);
        setShowVacancy_nameError(true);
        setShowNotesError(true);
        setShowCvError(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 10000);
        formik.resetForm();
      } catch (error) {}
    },
  });

  console.log(vname);

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    formik.handleChange(e);
    setShowNameError(inputValue.trim() === '');
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;

    const cleanedInput = inputValue.replace(/\D/g, '');
    const formattedPhone = cleanedInput.startsWith('994')
      ? `+994${cleanedInput.substring(3)}`
      : `+994${cleanedInput}`;
    if (formattedPhone.length <= 13) {
      formik.setFieldValue('phone', formattedPhone);
    }

    setShowPhoneError(formattedPhone.trim() === '');
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    formik.handleChange(e);
    setShowEmailError(inputValue.trim() === '');
  };

  const handleVacancyChange = (e) => {
    const inputValue = e.target.value;
    formik.handleChange(e);
    setShowVacancy_nameError(inputValue.trim() === '');
  };

  const handleNotesChange = (e) => {
    const inputValue = e.target.value;
    formik.handleChange(e);
    setShowNotesError(inputValue.trim() === '');
  };

  const pageTitle = SettingData?.data
    .filter((item) => item.key === 'career_page_meta_title')
    ?.map((item) => item.value);
  const pageDescription = SettingData?.data
    ?.filter((item) => item.key === 'career_page_meta_description')
    .map((item) => item.value);
  const { translate, Language } = useTranslation();

  const handleClick = (e) => {
    if (vname) {
      handleSubmit(e);
    }
  };

  const [success, setSuccess] = useState(false);
  const firstPopupRef = useRef();
  const secondPopupRef = useRef();

  const handleSubmit = (e) => {
    if (cv?.length > 0) {
      const formData = new FormData();
      formData.append('cv', cv[0], cv[0]?.name);
      formData.append('vacancy_name', vname);
      formData.append('name', '');
      formData.append('phone', '');
      formData.append('email', '');
      formData.append('notes', '');

      axios
        .post(`${base_url}/api/career-forms`, formData, config)
        .then((response) => {
          console.log(response);
          setSuccess(true);
          firstPopupRef.current.close();
          secondPopupRef.current.close();
          setcv(null);
          setvname('');
          setIsFileDetected(false);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        })
        .catch((error) => {});
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {isLoading ? <LoadingOverlay /> : null}
      {visible ? <Service ServiceCategoryData={ServiceCategoryData} /> : null}
      <div className="max-xl:relative absolute max-xl:z-[-1] w-full  bg-[#F7F6FB] ">
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className=" h-[535px]  top-32 w-full  max-sm:h-[200px] max-sm:pb-14  md:pb-20  max-md:h-[300px] max-xl:h-[350px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className="bg-[#F7F6FB]  w-full   mx-auto">
        <div className="h-[450px] max-xxl:h-auto  ">
          <h3 className="h3  text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px] max-xxl:text-white ">
            {translate('Career', Language)}
          </h3>
          <div className="absolute  z-[1] max-xl:z-[-1]  right-48 max-xxl:right-1 max-sm:top-[90px] max-xl:top-20 max-xxl:top-40">
            <Image
              src="/assets/career.png"
              width={448}
              height={448}
              className="w-[448px] h-[448px] max-sm:w-[155px] max-sm:h-[155px] max-md:w-[250px] max-md:h-[250px] max-xl:w-[305px] max-xl:h-[305px]  "
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#F7F6FB]  w-full mt-10 max-xl:mt-0 max-xxl:mt-[480px]">
          <div className=" w-[1110px] max-xl:w-full mx-auto flex flex-col gap-10 justify-center items-center mt-40 max-xl:mt-0 ">
            <div className=" ">
              <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px]  mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center">
                {translate('Available_vacancies', Language)}
              </h3>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1   gap-7">
              {VacanciesData?.data.map((item, index) => {
                return (
                  <div
                    className="border-l-[14px] border-[#5B2D90] w-[540px] h-[202px] max-sm:w-[290px]  max-xl:w-[400px]  max-xl:h-[135px] bg-white flex flex-col justify-center px-5 gap-7 rounded-xl"
                    key={index}
                  >
                    <h4 className="text-[24px] max-xl:text-[16px]">
                      {item.name}
                    </h4>
                    <p className="text-[12px] flex items-center gap-1 text-[#939393]">
                      <CiLocationOn /> {item.address}
                    </p>
                    <div className="flex justify-between">
                      {' '}
                      <Popup
                        ref={firstPopupRef}
                        trigger={
                          <button className="w-[154px] h-[33px]  max-xl:w-[100px] max-xl:h-[24px] bg-[#5B2D90] rounded-full text-white text-[12px] max-xl:text-[8px]">
                            {translate('Apply', Language)}
                          </button>
                        }
                        modal
                        nested
                        closeOnDocumentClick={false}
                        contentStyle={{
                          padding: '0px',
                          borderRadius: '50px',
                          borderColor: 'white',
                          minWidth: '40%',
                          overflow: 'hidden',
                        }}
                      >
                        {(close) => (
                          <>
                            <Image
                              src="/assets/popup/x.png"
                              width={40}
                              height={42}
                              className="absolute right-5 top-5 w-[40px] h-[42px] max-sm:w-[20px] max-sm:h-[21px]"
                              alt=""
                              onClick={close}
                            />

                            <div className="w-full mx-auto  flex flex-col justify-center items-center  gap-2">
                              <div className="flex flex-col gap-2 justify-center mt-10 items-start max-xl:items-center">
                                <label
                                  htmlFor=""
                                  className="text-black font-medium  text-[16px] max-xl:text-[10px] max-xl:text-center"
                                >
                                  {translate('CV', Language)}
                                  <span className="text-[#ED1C24]">*</span>
                                </label>

                                <Dropzone
                                  onDrop={(acceptedFiles) =>
                                    onDrop(acceptedFiles, item.name)
                                  }
                                >
                                  {({ getRootProps, getInputProps }) => (
                                    <section>
                                      <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <div
                                          className={`border  ${
                                            formik.touched.cv &&
                                            formik.errors.cv
                                              ? 'border-[#ED1C24]'
                                              : 'border-[#DBDBDB]'
                                          }  w-[445px] h-[189px] max-xl:w-3/4 max-xl:mx-auto max-sm:h-[100px]  bg-[#F4F4F4] rounded-lg flex justify-center items-center`}
                                        >
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
                                                <p className="mb-2 text-sm max-xl:text-[10px] text-yellow-600 dark:text-yellow-400">
                                                  {translate(
                                                    'File_Detected',
                                                    Language
                                                  )}
                                                </p>
                                              ) : (
                                                <p className="mb-2 text-sm max-sm:text-[8px] max-sm:text-center text-gray-500 dark:text-gray-400">
                                                  {translate(
                                                    'Image_Drop',
                                                    Language
                                                  )}
                                                </p>
                                              )}

                                              <svg
                                                aria-hidden="true"
                                                className="w-10 h-10 mb-3 text-gray-400 max-sm:w-4"
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
                                              <p className="text-xs max-xl:hidden max-xl:text-[10px] max-xl:text-center text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF (MAX.
                                                800x400px)
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
                                <button
                                  type="submit"
                                  onClick={() => handleClick(item.name)}
                                  className="w-[197px] h-[38px] max-xl:h-[30px] max-xl:text-[10px] max-xl:w-full bg-[#5B2D90] rounded-full text-white text-[16px] mt-3"
                                >
                                  {translate('Apply', Language)}
                                </button>
                              </div>

                              <div className="mt-10">
                                {success && (
                                  <div
                                    className="p-4 mb-4 text-sm max-xl:text-[10px] text-white rounded-lg bg-[#5B2D90] flex justify-center items-center  "
                                    role="alert"
                                  >
                                    <span className="font-medium max-xl:text-[10px]">
                                      {translate(
                                        'Your_request_has_been_sent_and_we_will_get_back_to_you_soon',
                                        Language
                                      )}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </Popup>
                      <div className="">
                        <Popup
                          ref={secondPopupRef}
                          trigger={
                            <button className="w-[142px] h-[33px] max-xl:w-[100px] max-xl:h-[24px] bg-[#F9F9F9] rounded-full  text-[#5B2D90] text-[12px] max-xl:text-[8px] flex justify-center items-center gap-2">
                              {translate('More', Language)}
                              <HiOutlineArrowLongRight className="text-lg" />
                            </button>
                          }
                          modal
                          nested
                          closeOnDocumentClick={false}
                          contentStyle={{
                            padding: '0px',
                            borderRadius: '50px',
                            borderColor: 'white',
                            minWidth: '80%',
                            minHeight: '80%',
                            overflow: 'scroll',
                          }}
                        >
                          {(close) => (
                            <>
                              <div
                                className="popup-content-2"
                                key={index}
                              ></div>
                              <Image
                                src="/assets/popup/x.png"
                                className="absolute right-5 top-5 w-[40px] h-[42px] max-sm:w-[20px] max-sm:h-[21px]"
                                alt=""
                                width={40}
                                height={42}
                                onClick={() => {
                                  close();
                                  setIsOpen(false);
                                }}
                              />
                              <div className="absolute  w-10/12  left-10 top-10">
                                <p className="text-[16px] flex items-center gap-1 text-[#939393]">
                                  <CiLocationOn /> {item.address}
                                </p>
                                <h3 className="mt-10 text-[24px] max-xl:text-[16px] font-bold ">
                                  {item.name}
                                </h3>

                                <p className="text-white text-[28px] max-xl:text-[18px] mb-5 font-light">
                                  {item.description}
                                </p>
                                <button
                                  onClick={() => {
                                    firstPopupRef.current.open();
                                    handleClick(item.name);
                                  }}
                                  className="w-[154px] h-[33px]  max-xl:w-[100px] max-xl:h-[24px] bg-[#5B2D90] rounded-full text-white text-[12px] max-xl:text-[8px]"
                                >
                                  {translate('Apply', Language)}
                                </button>
                                <div className="mt-10">
                                  {success && (
                                    <div
                                      className="p-4 mb-4 text-sm text-white rounded-lg bg-[#5B2D90] flex justify-center items-center  "
                                      role="alert"
                                    >
                                      <span className="font-medium"></span>{' '}
                                      {translate(
                                        'Your_request_has_been_sent_and_we_will_get_back_to_you_soon',
                                        Language
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </>
                          )}
                        </Popup>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-white mt-10 ">
          <div className="container w-[920px] max-xl:w-full mx-auto py-5">
            <h3 className="text-[40px] max-md:text-[20px] max-xl:text-[30px]  mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center">
              {translate('Application_form', Language)}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const requiredFields = ['cv', 'vacancy_name'];
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
              className="grid grid-cols-2  gap-5  justify-items-between pt-10 pb-5 max-xl:mx-[30px]"
            >
              <div className="w-full flex max-xl:col-span-2 flex-col  justify-center gap-2">
                {' '}
                <label
                  htmlFor=""
                  className="text-black flex gap-2 items-center  text-[16px] max-md:text-[12px] font-medium"
                >
                  {translate('Name', Language)}
                </label>
                <input
                  type="text"
                  className={`border  ${
                    !showNameError
                      ? 'border-[#3cb255]'
                      : formik.touched.name && formik.errors.name
                      ? 'border-[#ED1C24]'
                      : 'border-[#DBDBDB]'
                  }  bg-[#F4F4F4] p-2 rounded-md w-[442px] h-[50px]  max-xl:h-[44px]  max-xl:w-full focus:ring-0`}
                  name="name"
                  onChange={handleNameChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
              <div className="w-full flex flex-col max-xl:col-span-2  justify-center gap-2">
                <label
                  htmlFor=""
                  className="text-black flex gap-2 items-center  text-[16px] max-md:text-[12px] font-medium"
                >
                  {translate('Phone', Language)}
                  <div className="error text-red-500">
                    {formik.touched.phone && formik.errors.phone}
                  </div>
                </label>
                <input
                  type="tel"
                  className={`border   ${
                    !showPhoneError
                      ? 'border-[#3cb255]'
                      : formik.touched.phone && formik.errors.phone
                      ? 'border-[#ED1C24]'
                      : 'border-[#DBDBDB]'
                  }  bg-[#F4F4F4] p-2 rounded-md w-[442px] h-[50px]  max-xl:h-[44px]  max-xl:w-full focus:ring-0`}
                  placeholder="+994 _ _  _ _ _  _ _  _ _"
                  name="phone"
                  onChange={handlePhoneChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </div>
              <div className="w-full flex flex-col max-xl:col-span-2  justify-center gap-2">
                {' '}
                <label
                  htmlFor=""
                  className="text-black flex gap-2 items-center  text-[16px] max-md:text-[12px] font-medium"
                >
                  {translate('Vacancy_Form', Language)}
                  {showVacancy_nameError && (
                    <span className="text-[#ED1C24]">*</span>
                  )}
                  <div className="error text-white">
                    {formik.touched.vacancy_name && formik.errors.vacancy_name}
                  </div>
                </label>
                <input
                  type="text"
                  className={`border  ${
                    !showVacancy_nameError
                      ? 'border-[#3cb255]'
                      : formik.touched.vacancy_name &&
                        formik.errors.vacancy_name
                      ? 'border-[#ED1C24]'
                      : 'border-[#DBDBDB]'
                  }  bg-[#F4F4F4] p-2 rounded-md w-[442px] h-[50px]  max-xl:h-[44px]  max-xl:w-full focus:ring-0`}
                  name="vacancy_name"
                  onChange={handleVacancyChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.vacancy_name}
                />
              </div>
              <div className="w-full flex flex-col max-xl:col-span-2  justify-center gap-2">
                {' '}
                <label
                  htmlFor=""
                  className="text-black flex gap-2 items-center  text-[16px] max-md:text-[12px] font-medium"
                >
                  {translate('Email', Language)}
                </label>
                <input
                  type="email"
                  className={`border ${
                    !showEmailError
                      ? 'border-[#3cb255]'
                      : formik.touched.email && formik.errors.email
                      ? 'border-[#ED1C24]'
                      : 'border-[#DBDBDB]'
                  }  bg-[#F4F4F4] p-2 rounded-md w-[442px] h-[50px]  max-xl:h-[44px]  max-xl:w-full focus:ring-0`}
                  name="email"
                  onChange={handleEmailChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className="w-full flex flex-col max-xl:col-span-2  justify-center gap-2">
                <label
                  htmlFor=""
                  className="text-black flex gap-2 items-center  text-[16px] max-md:text-[12px] font-medium"
                >
                  {translate('Note', Language)}{' '}
                </label>
                <textarea
                  className={`border   ${
                    !showNotesError
                      ? 'border-[#3cb255]'
                      : formik.touched.notes && formik.errors.notes
                      ? 'border-[#ED1C24]'
                      : 'border-[#DBDBDB]'
                  }  w-[445px] h-[189px] max-xl:w-full   p-3  bg-[#F4F4F4] rounded-md`}
                  cols="10"
                  rows="8"
                  name="notes"
                  onChange={handleNotesChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.notes}
                ></textarea>
              </div>
              <div className="w-full flex flex-col max-xl:col-span-2  justify-center gap-2">
                <label
                  htmlFor=""
                  className="text-black flex gap-2 items-center  text-[16px] max-md:text-[12px] font-medium"
                >
                  {translate('Cv', Language)}
                  {showCvError && <span className="text-[#ED1C24]">*</span>}
                  <div className="error text-white">
                    {formik.touched.cv && formik.errors.cv}
                  </div>
                </label>
                <Dropzone onDrop={onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />

                        <div
                          className={`border  ${
                            !showCvError
                              ? 'border-[#3cb255]'
                              : formik.touched.cv && formik.errors.cv
                              ? 'border-[#ED1C24]'
                              : 'border-[#DBDBDB]'
                          } w-[445px] h-[189px] max-xl:w-11/12    bg-[#F4F4F4] rounded-lg flex justify-center items-center`}
                        >
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
                                <p className="mb-2 text-sm max-xl:text-[10px] text-yellow-600 dark:text-yellow-400">
                                  {translate('File_Detected', Language)}
                                </p>
                              ) : (
                                <p className="mb-2 text-sm max-xl:text-[10px] text-gray-500 dark:text-gray-400">
                                  {translate('Image_Drop', Language)}
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
                              <p className="text-xs max-xl:text-[10px] text-gray-500 dark:text-gray-400">
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
                {translate('Send', Language)}
              </button>
            </form>
            {showSuccessAlert && (
              <div
                className="p-4 mb-4 text-sm text-white rounded-lg w-full bg-[#5B2D90] flex justify-center items-center  "
                role="alert"
              >
                <span className="font-medium"></span>{' '}
                {translate(
                  'Your_request_has_been_sent_and_we_will_get_back_to_you_soon',
                  Language
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default career;
