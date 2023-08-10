import React from 'react';
import { useSwiper } from 'swiper/react';
import Image from 'next/image';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex justify-center items-center gap-5 mt-7">
      {' '}
      <Image
        onClick={() => swiper.slidePrev()}
        className="w-[70px]  prev-arrow"
        src="/assets/left.png"
        width={500}
        height={300}
        alt="Previous"
      />
      <Image
        onClick={() => swiper.slideNext()}
        className="w-[70px] next-arrow"
        src="/assets/right.png"
        width={500}
        height={300}
        alt="Next"
      />
    </div>
  );
};
