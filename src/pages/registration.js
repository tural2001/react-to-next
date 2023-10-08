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
import { LoadingOverlay } from '../components/LoadingOverlay';
import Head from 'next/head';
import { useTranslation } from '../components/TranslationContext';
import Service from '../components/Service';
export async function getServerSideProps() {
  try {
    const Formresponse = await axios.get(`${base_url}/api/form-fields`, config);
    const Settingresponse = await axios.get(`${base_url}/api/settings`, config);
    const ServiceCategoryresponse = await axios.get(
      `${base_url}/api/service-categories`,
      config
    );

    return {
      props: {
        FormsData: Formresponse.data,
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

// let schema = yup.object({
//   label: yup.string().required('Name is Required'),
//   type: yup.string().required('Question is Required'),
//   name: yup.string().required('Question is Required'),
// });
const registration = ({ FormsData, SettingData, ServiceCategoryData }) => {
  const [isFileDetected, setIsFileDetected] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

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

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);

  const initialValues = {};

  FormsData?.data?.forEach((item) => {
    initialValues[item.name] = '';
  });
  console.log(initialValues);

  const formik = useFormik({
    initialValues,
    // validationSchema: schema,
    onSubmit: async (values) => {
      const errors = {};

      // Iterate through the form fields and check for required fields
      FormsData.data.forEach((item) => {
        if (item.name && item.required && !values[item.name]) {
          errors[item.name] = `${item.label} is required`;
        }
      });

      if (Object.keys(errors).length > 0) {
        formik.setErrors(errors);
        return;
      }

      const dataString = JSON.stringify(values);

      try {
        const response = await axios.post(
          `${base_url}/api/form-data`,
          {
            data: dataString,
          },
          config
        );
        console.log(response);
        setTimeout(() => {
          setIsFileDetected(false);
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

  useEffect(() => {
    const newErrorFields = Object.keys(formik.errors);
    setErrorFields(newErrorFields);
  }, [formik.errors]);

  const pageTitle = SettingData?.data
    .filter((item) => item.key === 'register_page_meta_title')
    ?.map((item) => item.value);
  const pageDescription = SettingData?.data
    ?.filter((item) => item.key === 'register_page_meta_description')
    .map((item) => item.value);
  const { translate, Language } = useTranslation();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {isLoading ? <LoadingOverlay /> : null}
      {visible ? <Service ServiceCategoryData={ServiceCategoryData} /> : null}
      <div className="container max-w-[937px] mx-auto  py-10 register">
        <h3 className="text-[40px] text-center text-[#5B2D90] font-semibold tracking-[0.3px] inter max-md:text-[20px]">
          {translate('Welcome_to_Azeronline', Language)}
        </h3>
        <p className="text-[16px] text-[#94A2B3] text-center mb-5 mt-2">
          {translate('Registration_form', Language)}
        </p>
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
                  type="text"
                  name={item.name}
                  className="border p-2 bg-[#F4F4F4] rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0"
                  onChange={(e) => handleTextChange(e, item.name)}
                  onBlur={formik.handleBlur}
                  value={formik.values[item.name]}
                />
              </div>
            ))}

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
                  className="border-none p-2 bg-[#F4F4F4] rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0"
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
                    formik.errors[item.name] ? 'border-red-500' : ''
                  }  justify-space p-2 bg-[#F4F4F4] rounded-xl w-full h-[50px] gap-5  `}
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
                          className={`p-2 border-2  bg-[#F4F4F4] rounded-xl w-4 max-sm:w-full h-4 focus:ring-0`}
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
                    formik.errors[item.name] ? 'border-red-500' : ''
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
                            onChange={(event) =>
                              handleCheckboxChange(event, item.name, value)
                            }
                            onBlur={formik.handleBlur}
                            value={value}
                            checked={formik.values[item.name] === value}
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
                  {item.required && showTextErrors[item.name] && (
                    <span className="text-[#ED1C24]">*</span>
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
                          className={`w-[442px] h-[189px] max-xl:w-11/12 ${
                            formik.errors[item.name] ? 'border-red-500' : ''
                          }     bg-[#F4F4F4] rounded-lg flex justify-center items-center`}
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
                  className={`w-[920px] p-3 max-xl:w-full  ${
                    formik.errors[item.name] ? 'border-red-500' : ''
                  }  bg-[#F4F4F4] rounded-xl`}
                  name={item.name}
                  cols="10"
                  rows="8"
                  onChange={(event) => handleTextareaChange(event, item.name)}
                  onBlur={formik.handleBlur}
                  value={formik.values[item.name]}
                ></textarea>
                <div className="flex justify-start   items-center gap-2 mt-8">
                  <input type="checkbox" className="rounded" name="" id="" />
                  <p className="text-[12px] text-[#5E5E5E]">
                    Şərtlərlə tanış oldum
                  </p>
                </div>
              </div>
            ))}

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
    </>
  );
};

export default registration;
