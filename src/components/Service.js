import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Service = ({ ServiceCategoryData }) => {
  return (
    <div className="home-wrapper-1 container max-w-5xl max-sm:hidden py-10 mx-auto relative overflow-hidden max-xl:hidden">
      <div className="grid grid-cols-3 justify-items-center">
        {ServiceCategoryData?.data?.map((item, index) => {
          console.log(item);
          return (
            <div className="">
              <div className="bg-[#DCC5F6] w-[102px] h-[102px] rounded-3xl flex items-center mx-auto">
                <Image
                  src={item.icon}
                  width={500}
                  height={300}
                  className="w-[56px] h-[56px] mx-auto"
                  alt=""
                />
              </div>
              <div className="">
                <div className="flex justify-center">
                  <h3 className=" font-medium text-[28px] py-4  tracking-[0.5px]">
                    {item.name}
                  </h3>
                </div>
                <ul className="flex flex-col justify-center items-center gap-2 text-[#909090]  font-normal ">
                  {item.services?.map((service, serviceIndex) => {
                    return (
                      <li key={serviceIndex}>
                        <Link href={`services/${service.id}`}>
                          {service.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
