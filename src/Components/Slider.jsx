import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='https://www.nanotek.lk/storage/home-slider/k7xAe2OM6c42RPtbXQLVi1sYmACZVXRuWvvzRR9z.webp'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.nanotek.lk/storage/home-slider/ZaI1poDeA2F18EjJGXGibNjlvyOllcLFX1z7FgcV.webp'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.nanotek.lk/storage/home-slider/MkeI8k09JNsJ4Jp0U9dKBn5IuLpUzBaHIwbnajJh.webp'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.nanotek.lk/storage/home-slider/XuTKAjpEZUCeNlW0RaiP1Y5a89ZufHNRmRmKvMwW.webp'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.nanotek.lk/storage/home-slider/5WUpGBySMvlTkrqz6WAgtIsT3vYjo2sjC8EGlaaf.webp'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://images.unsplash.com/photo-1757386117955-c491ad384a26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.nanotek.lk/storage/home-slider/xkIXZX64tsukEQYFC7Btc5WW04KWCjGXrRkDtKjX.webp'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.nanotek.lk/storage/home-slider/mqfUE2GRdvwFMssUr4D2nfRgqJg13wpPda5VZSeW.webp'
            alt=''
          />
        </SwiperSlide>

        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
