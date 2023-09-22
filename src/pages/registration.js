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
        FormsData: Formresponse.data,
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
const registration = ({ FormsData }) => {
  const [isFileDetected, setIsFileDetected] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();

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
  const schemaFields = {};

  FormsData?.data?.forEach((field) => {
    let fieldSchema;

    switch (field.type) {
      case 'string':
        fieldSchema = yup.string();
        break;
      case 'number':
        fieldSchema = yup.number();
        break;
      // Diğer türleri ekleyebilirsiniz
      default:
        fieldSchema = yup.mixed(); // Varsayılan olarak bir şema
        break;
    }

    if (field.required) {
      fieldSchema = fieldSchema.required(`${field.name} alanı zorunludur.`);
    }

    schemaFields[field.name] = fieldSchema;
  });

  const schema = yup.object().shape(schemaFields);
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      const dataString = JSON.stringify(values);
      console.log(dataString);
      try {
        const response = await axios.post(
          `${base_url}/api/form-data`,
          {
            data: dataString,
          },
          config
        );
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
          {FormsData?.data?.map((item) => (
            <div
              className={`w-[442px] max-sm:w-full 
               justify-center gap-2`}
              key={item.id}
            >
              {item.type == 1 && (
                <>
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}
                    <div className="error text-white">
                      {formik.touched[item.name] && formik.errors[item.name]}
                    </div>
                  </label>
                  <input
                    type="text"
                    name={item.name}
                    className="border-none p-2 bg-[#F4F4F4] rounded-xl w-[442px] max-sm:w-full h-[50px] focus:ring-0"
                    onChange={(e) => handleTextChange(e, item.name)}
                    onBlur={formik.handleBlur}
                    value={formik.values[item.name]}
                  />
                </>
              )}
              {item.type == 2 && (
                <>
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}{' '}
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
                </>
              )}
              {item.type == 3 && (
                <>
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}{' '}
                  </label>
                  <div className="flex flex-row gap-5 items-center ">
                    {item.data
                      .toString()
                      .split('|')
                      .map((value, index) => (
                        <div className="flex gap-2 items-center" key={index}>
                          <label htmlFor={value}>{value}</label>
                          <input
                            type="radio"
                            name={item.name}
                            className="border-none p-2 bg-[#F4F4F4] rounded-xl w-4 max-sm:w-full h-4 focus:ring-0"
                            onChange={(event) =>
                              handleRadioChange(event, item.name)
                            }
                            onBlur={formik.handleBlur}
                            value={value}
                            checked={formik.values[item.name] === value}
                            key={index}
                          />
                        </div>
                      ))}
                  </div>
                </>
              )}
              {item.type == 4 && (
                <>
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}{' '}
                  </label>
                  <div className="flex flex-row gap-5 items-center ">
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
                              className="border-none p-2 bg-[#F4F4F4] rounded-xl w-4 max-sm:w-full h-4 focus:ring-0"
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
                </>
              )}

              {item.type == 5 && (
                <>
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    <span className="text-[#ED1C24]">*</span>
                  </label>
                  <Dropzone
                    onDrop={(acceptedFiles) => onDrop(acceptedFiles, item.name)}
                  >
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
                </>
              )}
              {item.type == 6 && (
                <>
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    <span className="text-[#ED1C24]">*</span>
                  </label>
                  <select
                    name={item.name}
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
                </>
              )}
              {item.type == 7 && (
                <>
                  <label htmlFor="" className="text-[#637381] text-[20px]">
                    {item.label}
                    {showTextErrors[item.name] && (
                      <span className="text-[#ED1C24]">*</span>
                    )}{' '}
                  </label>
                  <textarea
                    className="border border-[#5B2D90]
                 w-[980px] p-3 max-xl:w-full  bg-white rounded-xl "
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
                </>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="col-span-2 w-[240px] h-[56px] max-sm:w-[160px] max-sm:h-[44px] max-sm:text-[12px] bg-[#5B2D90] text-white rounded-full"
          >
            Qeydiyyatı tamamla
          </button>
        </form>
        {showSuccessAlert && (
          <div
            className="p-4 mb-4 text-sm text-white rounded-lg bg-[#5B2D90] flex justify-center items-center  "
            role="alert"
          >
            <span className="font-medium"></span> Müraciətiniz göndərildi
            tezliklə sizə geri dönüş ediləcək
          </div>
        )}
      </div>
    </>
  );
};

export default registration;
