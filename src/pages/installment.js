import React, { useEffect, useState } from 'react';
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

export async function getServerSideProps() {
  try {
    const Faqsresponse = await axios.get(`${base_url}/api/faqs`, config);
    const Settingresponse = await axios.get(`${base_url}/api/settings`, config);
    const ServiceCategoryresponse = await axios.get(
      `${base_url}/api/service-categories`,
      config
    );

    return {
      props: {
        FaqsData: Faqsresponse.data,
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
  name: yup.string().required('*'),
  phone: yup.string().required('*'),
  question: yup.string().required('*'),
});

const faq = ({ FaqsData, SettingData, ServiceCategoryData }) => {
  const [faqItems, setFaqItems] = useState(FaqsData?.data?.map(() => false));

  const toggleContent = (index) => {
    const updatedFaqItems = faqItems.map((item, i) =>
      i === index ? !item : false
    );
    setFaqItems(updatedFaqItems);
  };

  const { visible, setVisible } = useVisibleContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setVisible(router.pathname === '/a');
  }, [router, setVisible]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      phone: '',
      question: '',
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      if (values.phone.length < 13) {
        formik.setFieldError('phone', 'Nömrəni doğru daxil edin');
        return;
      }

      try {
        await axios.post(`${base_url}/api/faq-forms`, values, config);
        setTimeout(() => {
          setIsFileDetected(false);
        }, 100);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 10000);
        formik.resetForm();
      } catch (error) {}
    },
  });

  const [showNameError, setShowNameError] = useState(true);
  const [showPhoneError, setShowPhoneError] = useState(true);
  const [showQuestionError, setShowQuestionError] = useState(true);
  const { isOpen, toggleMenu } = useVisibleContext();

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
  const handleQuestionChange = (e) => {
    const inputValue = e.target.value;
    formik.handleChange(e);
    setShowQuestionError(inputValue.trim() === '');
  };

  const pageTitle = SettingData?.data
    .filter((item) => item.key === 'faq_page_meta_title')
    ?.map((item) => item.value);
  const pageDescription = SettingData?.data
    ?.filter((item) => item.key === 'faq_page_meta_description')
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
      <div className="max-xl:relative absolute max-xl:z-[-1] w-full  ">
        {' '}
        <Image
          src="/assets/home1.png"
          width={500}
          height={300}
          className=" h-[535px]  top-32 w-full  max-sm:h-[200px] max-md:h-[300px] max-xl:h-[300px] max-xxl:h-[300px] max-xl:top-14"
          alt=""
        />
      </div>
      <div className=" max-w-[1100px] max-xl:w-3/4  mx-auto">
        <div className="h-[450px] max-xxl:h-auto  ">
          {' '}
          <h3 className="h3  text-[40px] max-xl:absolute relative text-white  font-bold text-center max-sm:text-[16px] max-xl:text-[30px] max-xxl:text-white ">
            {translate('Installment', Language)}
          </h3>
          <div className="absolute  z-[1] max-xl:z-[-1]  right-0 top-20  max-sm:top-10 max-xxl:top-20">
            {' '}
            <Image
              src="/assets/taksit.png"
              width={454}
              height={355}
              className="w-[600px] h-[600px]  mr-24 mt-10 max-lg:mr-5  max-xl:w-[192px] max-xl:h-[152px] max-xxl:w-[282px] max-xxl:h-[252px]"
              alt=""
            />
          </div>
        </div>

        <div className="w-[988px] max-xl:w-full max-xl:mx-5 mx-auto flex flex-col gap-10 justify-center items-center mt-0 max-xxl:mt-40  py-20 max-xl:py-10">
          <div
            className={`${
              isOpen ? 'z-[-1]' : 'z-0'
            } flex flex-col max-xl:justify-center max-xl:items-center`}
          >
            {' '}
            <h3 className="text-[40px] max-md:text-[20px] max-xxl:text-[30px] w-full max-xl:w-full mx-auto overflow-hidden  text-[#5B2D90] font-bold text-center ">
              {translate('What_installment', Language)}
            </h3>
            <p className="text-[20px] font-light mt-32  text-[#6A7583] border-b-[1px] pb-20 border-b-[#D0D5DD]">
              Abunəçilərimiz üçün internet ödənişlərini 12 aya hissə-hissə ödəmə
              imkanı verən əlverişli taksit planını təklif edirik.Bu xidmətdən
              istifadə etməklə siz, pulsuz qoşulma, hədiyyə modem və internetdən
              1 ay ödənişsiz istifadə imkanı əldə edəcəksiniz.Hissəli ödənişlər
              Birkart, Ukart və Albalı kartları vasitəsilə edilə bilər.Elə indi
              qoşulun, güzəştli şərtlərlə sürətli internet istifadəçisinə
              çevrilin.
            </p>
            <h3 className=" max-xl:text-center mt-20 mb-7 text-[36px] max-md:text-[16px] max-xxl:text-[26px] w-full max-xl:w-full mx-auto   text-[#5B2D90] font-bold  ">
              {translate('Existing_subscriber', Language)}
            </h3>
            <button
              type="submit"
              className="w-[250px]  h-[58px] bg-[#5B2D90] text-white rounded-full text-[16px]"
            >
              <Link href="/continuepay">
                {' '}
                {translate('Continue', Language)}
              </Link>
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
              const requiredFields = ['name', 'phone', 'question'];
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
            className="grid grid-cols-2 max-xl:grid-cols-1 gap-5  justify-items-between py-10 max-xl:mx-5"
          >
            <div className="w-full flex flex-col  justify-center gap-2">
              <label
                htmlFor=""
                className="text-black flex gap-2 items-center  text-[16px] font-medium"
              >
                {translate('Name', Language)}
                {showNameError && <span className="text-[#ED1C24]">*</span>}
                <div className="error text-white">
                  {formik.touched.name && formik.errors.name}
                </div>
              </label>
              <input
                type="text"
                className={`border ${
                  formik.touched.name && formik.errors.name
                    ? 'border-[#ED1C24]'
                    : 'border-[#5B2D90]'
                } bg-white p-2 rounded-md w-[460px] h-[58px] max-xl:w-full focus:ring-0`}
                name="name"
                onChange={handleNameChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              {' '}
              <label
                htmlFor=""
                className="text-black flex gap-2 items-center  text-[16px] font-medium"
              >
                {translate('Phone', Language)}{' '}
                {showPhoneError && <span className="text-[#ED1C24]">*</span>}
                <div className="error text-white">
                  {formik.touched.phone && formik.errors.phone}
                </div>
              </label>
              <input
                type="tel"
                className={`border  ${
                  formik.touched.phone && formik.errors.phone
                    ? 'border-[#ED1C24]'
                    : 'border-[#5B2D90]'
                }   bg-white rounded-lg w-[464px] h-[58px] max-xl:w-full p-2 focus:ring-0`}
                placeholder="+994 _ _  _ _ _  _ _  _ _"
                name="phone"
                onChange={handlePhoneChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </div>
            <div className="w-full flex flex-col col-span-2 max-xl:col-span-1 justify-center gap-2">
              <label
                htmlFor=""
                className="text-black flex gap-2 items-center  text-[16px] font-medium"
              >
                {translate('Question', Language)}
                {showQuestionError && <span className="text-[#ED1C24]">*</span>}
                <div className="error text-white">
                  {formik.touched.question && formik.errors.question}
                </div>
              </label>
              <textarea
                className={`border ${
                  formik.touched.question && formik.errors.question
                    ? 'border-[#ED1C24]'
                    : 'border-[#5B2D90]'
                } w-[980px] p-3 max-xl:w-full  bg-white rounded-xl`}
                cols="30"
                rows="8"
                name="question"
                onChange={handleQuestionChange}
                onBlur={formik.handleBlur}
                value={formik.values.question}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[250px] h-[58px] bg-[#5B2D90] text-white rounded-full text-[16px]"
            >
              {translate('Complete_registration', Language)}
            </button>
          </form>
          {showSuccessAlert && (
            <div
              class="p-4 mb-4 text-sm text-white rounded-lg bg-[#5B2D90] flex justify-center items-center  "
              role="alert"
            >
              <span class="font-medium"></span>{' '}
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
