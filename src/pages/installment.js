import React, { useCallback, useEffect, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { useVisibleContext } from '../components/VisibleContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { base_url } from '../utils/base_url';
import { config } from '../utils/axiosconfig';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { useTranslation } from '../components/TranslationContext';
import Service from '../components/Service';
import Dropzone from 'react-dropzone';

export async function getServerSideProps() {
  try {
    const Formresponse = await axios.get(
      `${base_url}/api/installment-payment-form-fields`,
      config
    );
    const Settingresponse = await axios.get(`${base_url}/api/settings`, config);
    const Pageresponse = await axios.get(`${base_url}/api/pages`, config);
    const ServiceCategoryresponse = await axios.get(
      `${base_url}/api/service-categories`,
      config
    );

    return {
      props: {
        FormsData: Formresponse.data,
        SettingData: Settingresponse.data,
        ServiceCategoryData: ServiceCategoryresponse.data,
        PageData: Pageresponse.data,
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

const faq = ({ SettingData, FormsData, PageData }) => {
  const { visible, setVisible } = useVisibleContext();
  const [isFileDetected, setIsFileDetected] = useState(false);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const onDrop = useCallback(async (acceptedFiles, fieldName) => {
    try {
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);

      const response = await axios.post(
        `${base_url}/api/upload-media`,
        formData,
        {
          headers: {
            ...config.headers,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const url = response.data.url;
      formik.setFieldValue(fieldName, url);
      setIsFileDetected(true);
    } catch (error) {
      console.error('Hata:', error);
    }
  }, []);

  const initialValues = {};

  FormsData?.data?.forEach((item) => {
    initialValues[item.name] = '';
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      if (check == false) {
        setErrorCheck(true);
        return;
      }

      const errors = {};

      FormsData.data.forEach((item) => {
        if (item.name && item.required && !values[item.name]) {
          errors[item.name] = `${item.label} is required`;
        }
      });
      if (Object.keys(errors).length > 0) {
        formik.setErrors(errors);
        return;
      }
      console.log(errors);

      const dataString = JSON.stringify(values);

      try {
        const response = await axios.post(
          `${base_url}/api/installment-payment-form-data`,
          {
            data: dataString,
          },
          config
        );

        setTimeout(() => {
          setIsFileDetected(false);
          setErrorCheck(false);
          setCheck(false);
        }, 100);

        setShowSuccessAlert(true);

        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 10000);

        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handlePhoneChange = (e, itemName) => {
    const inputValue = e.target.value;

    const cleanedInput = inputValue.replace(/\D/g, '');
    const formattedPhone = cleanedInput.startsWith('994')
      ? `+994${cleanedInput.substring(3)}`
      : `+994${cleanedInput}`;
    if (formattedPhone.length <= 13) {
      formik.setFieldValue(itemName, formattedPhone);
      setShowTextErrors((prevErrors) => ({
        ...prevErrors,
        [itemName]: inputValue.trim() === '',
      }));
    }
  };

  const initialShowTextErrors = {};
  FormsData?.data?.forEach((item) => {
    initialShowTextErrors[item.name] = true;
  });

  const [showTextErrors, setShowTextErrors] = useState(initialShowTextErrors);

  const handleTextChange = (e, itemName) => {
    const inputValue = e.target.value;
    formik.handleChange(e);
    setShowTextErrors((prevErrors) => ({
      ...prevErrors,
      [itemName]: inputValue.trim() === '',
    }));
  };

  const handleRadioChange = (e, itemName) => {
    const inputValue = e.target.value;
    formik.handleChange(e);
    setShowTextErrors((prevErrors) => ({
      ...prevErrors,
      [itemName]: inputValue.trim() === '',
    }));
  };

  const handleCheckboxChange = (e, itemName, value) => {
    const inputValue = e.target.value;
    formik.setFieldValue(itemName, value);
    setShowTextErrors((prevErrors) => ({
      ...prevErrors,
      [itemName]: inputValue.trim() === '',
    }));
  };

  const handleTextareaChange = (e, itemName) => {
    const inputValue = e.target.value;
    formik.handleChange(e);
    setShowTextErrors((prevErrors) => ({
      ...prevErrors,
      [itemName]: inputValue.trim() === '',
    }));
  };
  const [errorFields, setErrorFields] = useState([]);

  const [check, setCheck] = useState(false);

  const [errorCheck, setErrorCheck] = useState(false);

  const HandleChecked = () => {
    setCheck(!check);
  };

  useEffect(() => {
    const newErrorFields = Object.keys(formik.errors);
    setErrorFields(newErrorFields);
  }, [formik.errors]);

  const { isOpen, toggleMenu } = useVisibleContext();

  const pageTitle = SettingData?.data
    .filter((item) => item.key === 'faq_page_meta_title')
    ?.map((item) => item.value);
  const pageDescription = SettingData?.data
    ?.filter((item) => item.key === 'faq_page_meta_description')
    .map((item) => item.value);

  const { translate, Language } = useTranslation();

  const filteredData = PageData?.data?.filter(
    (item) => item.slug === 'takistle-ödeme'
  );
  const Installment_title = filteredData?.map((item) => item?.title);
  const Installment_content = filteredData?.map((item) => item?.content);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {isLoading ? <LoadingOverlay /> : null}
      {visible ? <Service ServiceCategoryData={ServiceCategoryData} /> : null}
      <div className="max-xl:relative absolute max-xl:z-[-1] w-full  ">
        {' '}
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className=" h-[535px]  top-32 w-full  max-sm:h-[150px] max-md:h-[300px] max-xl:h-[300px] max-xxl:h-[300px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className=" max-w-[1100px] max-xl:w-3/4  mx-auto">
        <div className="h-[450px] max-xxl:h-auto  ">
          <h3 className="h3  text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px]  ">
            {translate('Installment', Language)}
          </h3>
          <div className="absolute  z-[1] max-xl:z-[-1]  right-0 top-24  max-sm:top-10 max-xl:top-10 max-xxl:top-20 max-md:top-20 ">
            <Image
              src="/assets/taksit.png"
              width={454}
              height={355}
              className="w-[600px] h-[600px]  max-sm:mr-2 mt-10 max-lg:mr-0 max-sm:w-[158px] max-sm:h-[158px]    max-md:w-[250px] max-md:h-[250px]  max-xxl:w-[400px] max-xxl:h-[400px]"
              alt=""
            />
          </div>
        </div>
        <div className="w-[988px] max-xl:w-full max-xl:mx-5 mx-auto flex flex-col gap-10 justify-center items-center mt-0 max-xl:mt-0 max-xxl:mt-40  py-20  max-xl:py-10">
          <div
            className={`${
              isOpen ? 'z-[-1]' : 'z-0'
            } flex flex-col w-full max-xl:justify-center max-xl:items-center`}
          >
            <h3 className="text-[40px] max-md:text-[20px] max-xxl:text-[30px] w-full max-xl:w-full mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center ">
              {Installment_title ? Installment_title : ''}
            </h3>
            <p className="text-[20px] font-light mt-32  text-[#6A7583]  ">
              {Installment_content ? Installment_content : ''}
            </p>
            <div className="border-b-[1px] w-full pb-20 border-b-[#D0D5DD]" />
            <h3 className=" max-xl:text-center mt-20 mb-7 text-[36px] max-md:text-[16px] max-xxl:text-[26px] w-full max-xl:w-full mx-auto   text-[#5B2D90] font-bold  ">
              {translate('Existing_subscriber', Language)}
            </h3>
            <button
              type="submit"
              className="w-[250px]  h-[58px] max-xl:w-[160px] max-xl:h-[44px] bg-[#5B2D90] text-white rounded-full text-[16px] max-xl:text-[12px]"
            >
              <Link href="/continuepay">{translate('Continue', Language)}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white mt-40">
        <div className="container w-[1010px] max-xl:w-full mx-auto py-10">
          <h3 className="text-[40px] flex max-xl:justify-center max-xl:items-center max-md:text-[20px] max-xl:text-[30px] text-[#5B2D90] font-bold  z-10 relative">
            {translate('New_registration', Language)}
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const errors = {};
              FormsData?.data?.forEach((item) => {
                if (item.name && item.required && !formik.values[item.name]) {
                  errors[item.name] = `${item.label} is required`;
                }
              });

              formik.setErrors(errors);
              console.log(errors);
              if (Object.keys(errors).length === 0) {
                formik.handleSubmit(e);
              }
            }}
            className="grid grid-cols-2  gap-5 py-10 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:gap-7 max-md:mx-10"
          >
            {/* Type 1 */}
            {FormsData?.data
              ?.filter((item) => item.type == 1)
              .map((item) => {
                console.log(item);
                return (
                  <div
                    className={`w-[442px]  max-sm:w-full 
             justify-center gap-2`}
                    key={item.id}
                  >
                    <label htmlFor="" className="text-[#637381] text-[20px]">
                      {item.label}
                      {item.required == true && showTextErrors[item.name] && (
                        <span className="text-[#ED1C24]">*</span>
                      )}
                      <div className="error text-red-500"></div>
                    </label>
                    <input
                      type="text"
                      name={item.name}
                      className={`${
                        !formik.errors[item.name] &&
                        formik.touched[item.name] &&
                        formik.values[item.name].length > 0
                          ? 'border-green-500'
                          : formik.errors[item.name]
                          ? 'border-red-500'
                          : ''
                      } border p-2 bg-[#F4F4F4]  rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0`}
                      onChange={(e) => handleTextChange(e, item.name)}
                      onBlur={formik.handleBlur}
                      value={formik.values[item.name]}
                    />
                  </div>
                );
              })}

            {/* Type 2 */}
            {FormsData?.data
              ?.filter((item) => item.type == 2)
              .map((item) => (
                <div
                  className={`w-[442px]  max-sm:w-full 
             justify-center gap-2`}
                  key={item.id}
                >
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {item.required && showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}
                    <div className="error text-red-500"></div>
                  </label>
                  <input
                    type="tel"
                    className={`${
                      !formik.errors[item.name] &&
                      formik.touched[item.name] &&
                      formik.values[item.name].length > 0
                        ? 'border-green-500'
                        : formik.errors[item.name]
                        ? 'border-red-500'
                        : ''
                    } border p-2 bg-[#F4F4F4]  rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0`}
                    placeholder="+994 _ _  _ _ _  _ _  _ _"
                    name={item.label}
                    onChange={(event) => handlePhoneChange(event, item.name)}
                    onBlur={formik.handleBlur}
                    value={formik.values[item.name]}
                  />
                </div>
              ))}

            {/* Type 6 */}
            {FormsData?.data
              ?.filter((item) => item.type == 6)
              .map((item) => (
                <div
                  className={`w-[442px]  max-sm:w-full 
             justify-center gap-2`}
                  key={item.id}
                >
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {item.required && showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}
                    <div className="error text-red-500"></div>
                  </label>
                  <select
                    name={item.name}
                    onChange={(event) => handleTextChange(event, item.name)}
                    onBlur={formik.handleBlur}
                    value={formik.values[item.name]}
                    className={`flex flex-row border ${
                      !formik.errors[item.name] &&
                      formik.touched[item.name] &&
                      formik.values[item.name].length > 0
                        ? 'border-green-500'
                        : formik.errors[item.name]
                        ? 'border-red-500'
                        : ''
                    } border  justify-space p-2 bg-[#F4F4F4] rounded-xl w-full h-[50px] gap-5  `}
                  >
                    <option value="">Select</option>

                    {item.data
                      .toString()
                      .split('|')
                      .map((value, index) => (
                        <option value={value} key={index}>
                          {value}
                        </option>
                      ))}
                  </select>
                </div>
              ))}

            {FormsData?.data
              ?.filter((item) => item.type == 3)
              .map((item) => (
                <div
                  className={`w-[442px]  max-sm:w-full 
             justify-center gap-2`}
                  key={item.id}
                >
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {item.required && showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}
                    <div className="error text-red-500"></div>
                  </label>
                  <div
                    className={`flex flex-row border ${
                      formik.errors[item.name] ? 'border-red-500' : ''
                    }  justify-space p-2 bg-[#F4F4F4] rounded-xl h-[50px] gap-5  `}
                  >
                    {item.data
                      .toString()
                      .split('|')
                      .map((value, index) => (
                        <div className="flex gap-2 items-center" key={index}>
                          <label htmlFor={value}>{value}</label>
                          <input
                            type="radio"
                            name={item.name}
                            className={`${
                              !formik.errors[item.name] &&
                              formik.touched[item.name] &&
                              formik.values[item.name].length > 0
                                ? 'border-green-500'
                                : formik.errors[item.name]
                                ? 'border-red-500'
                                : ''
                            }   p-2 border  bg-[#F4F4F4] rounded-xl w-4 max-sm:w-full h-4 focus:ring-0`}
                            onChange={(event) =>
                              handleRadioChange(event, item.name)
                            }
                            onBlur={formik.handleBlur}
                            value={value}
                            checked={formik.values[item.name] === value}
                            key={index}
                          />
                          <div className="error text-white">
                            {formik.touched[item.name] &&
                              formik.errors[item.name]}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}

            {/* Type 4 */}
            {FormsData?.data
              ?.filter((item) => item.type == 4)
              .map((item) => (
                <div
                  className={`w-[442px]  max-sm:w-full 
             justify-center gap-2`}
                  key={item.id}
                >
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {item.required && showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}
                    <div className="error text-red-500"></div>
                  </label>
                  <div
                    className={`flex flex-row border ${
                      !formik.errors[item.name] &&
                      formik.touched[item.name] &&
                      formik.values[item.name].length > 0
                        ? 'border-green-500'
                        : formik.errors[item.name]
                        ? 'border-red-500'
                        : ''
                    }   justify-space p-2 bg-[#F4F4F4] rounded-xl h-[50px] gap-5  `}
                  >
                    {item.data
                      .toString()
                      .split('|')
                      .map((value, index) => (
                        <div className="flex gap-2 items-center" key={index}>
                          <>
                            <label htmlFor={value}>{value}</label>
                            <input
                              type="checkbox"
                              name={item.name}
                              className=" p-10 bg-[#F4F4F4] rounded-xl w-4 max-sm:w-full h-4 focus:ring-4"
                              onChange={(event) => {
                                const isChecked = event.target.checked;
                                let updatedValueString =
                                  formik.values[item.name] || '';

                                if (isChecked) {
                                  updatedValueString =
                                    updatedValueString +
                                    (updatedValueString ? ',' : '') +
                                    value;
                                } else {
                                  updatedValueString = updatedValueString
                                    .split(',')
                                    .filter((v) => v !== value)
                                    .join(',');
                                }

                                formik.setFieldValue(
                                  item.name,
                                  updatedValueString
                                );

                                setShowTextErrors((prevErrors) => ({
                                  ...prevErrors,
                                  [item.name]: updatedValueString.trim() === '',
                                }));
                              }}
                              onBlur={formik.handleBlur}
                              value={value}
                              checked={(formik.values[item.name] || '')
                                .split(',')
                                .includes(value)}
                              key={index}
                            />
                          </>
                        </div>
                      ))}
                  </div>
                </div>
              ))}

            {/* Type 5 */}
            {FormsData?.data
              ?.filter((item) => item.type == 5)
              .map((item) => (
                <div
                  className={`w-[442px]  max-sm:w-full 
             justify-center gap-2`}
                  key={item.id}
                >
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {item.required === true &&
                    showTextErrors[item.name] &&
                    !isFileDetected ? (
                      <span className="text-[#ED1C24]">*</span>
                    ) : (
                      ''
                    )}

                    <div className="error text-red-500"></div>
                  </label>
                  <Dropzone
                    onDrop={(acceptedFiles) => onDrop(acceptedFiles, item.name)}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />

                          <div
                            className={`w-[442px] h-[189px] max-xl:w-11/12  ${
                              !formik.errors[item.name] &&
                              formik.touched[item.name] &&
                              formik.values[item.name].length > 0
                                ? 'border-green-500'
                                : formik.errors[item.name]
                                ? 'border-red-500'
                                : ''
                            }  border   bg-[#F4F4F4] rounded-lg py-2 flex justify-center items-center`}
                          >
                            <label
                              htmlFor="dropzone-file"
                              className={`flex flex-col items-center justify-center w-full h-48    rounded-lg cursor-pointer  ${
                                isFileDetected ? 'bg-green-200' : ''
                              } `}
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                {isFileDetected ? (
                                  <p className="mb-2 text-sm text-yellow-600 dark:text-yellow-400">
                                    {translate('File_Detected', Language)}
                                  </p>
                                ) : (
                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
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
              ))}

            {/* Type 7 */}
            {FormsData?.data
              ?.filter((item) => item.type == 7)
              .map((item) => (
                <div
                  className={`w-[442px]  col-span-2 max-sm:w-full 
             justify-center gap-2`}
                  key={item.id}
                >
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {item.required && showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}
                    <div className="error text-red-500"></div>
                  </label>
                  <textarea
                    className={`w-[920px] p-3 max-xl:w-full ${
                      !formik.errors[item.name] &&
                      formik.touched[item.name] &&
                      formik.values[item.name].length > 0
                        ? 'border-green-500'
                        : formik.errors[item.name]
                        ? 'border-red-500'
                        : ''
                    } border bg-[#F4F4F4] rounded-xl`}
                    name={item.name}
                    cols="10"
                    rows="8"
                    onChange={(event) => handleTextareaChange(event, item.name)}
                    onBlur={formik.handleBlur}
                    value={formik.values[item.name]}
                  ></textarea>
                </div>
              ))}
            {FormsData?.data?.length !== 0 ? (
              <div className="flex justify-start   items-center gap-2 mt-8">
                <input
                  type="checkbox"
                  onChange={HandleChecked}
                  className="rounded"
                  checked={check}
                  name=""
                  id=""
                />
                <p className="text-[12px] text-[#5E5E5E]">
                  <Link href="/check"> Şərtlərlə tanış oldum</Link>
                </p>
                {errorCheck && !check ? (
                  <div className="text-red-500 text-[10px]">
                    Şərtlərlə tanış olun
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            <button
              type="submit"
              className="col-span-2 w-[240px] h-[56px] max-sm:w-[160px] max-sm:h-[44px] max-sm:text-[12px] bg-[#5B2D90] text-white rounded-full"
            >
              {translate('Complete_registration', Language)}
            </button>
          </form>

          {showSuccessAlert && (
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
  );
};

export default faq;
