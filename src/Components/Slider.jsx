import React, { useRef } from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='slider-container'
      >
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='slide-content'
            >
              <motion.img
                src='https://www.nanotek.lk/storage/home-slider/k7xAe2OM6c42RPtbXQLVi1sYmACZVXRuWvvzRR9z.webp'
                alt=''
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='slide-content'
            >
              <motion.img
                src='https://www.nanotek.lk/storage/home-slider/ZaI1poDeA2F18EjJGXGibNjlvyOllcLFX1z7FgcV.webp'
                alt=''
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='slide-content'
            >
              <motion.img
                src='https://www.nanotek.lk/storage/home-slider/MkeI8k09JNsJ4Jp0U9dKBn5IuLpUzBaHIwbnajJh.webp'
                alt=''
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='slide-content'
            >
              <motion.img
                src='https://www.nanotek.lk/storage/home-slider/XuTKAjpEZUCeNlW0RaiP1Y5a89ZufHNRmRmKvMwW.webp'
                alt=''
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='slide-content'
            >
              <motion.img
                src='https://www.nanotek.lk/storage/home-slider/5WUpGBySMvlTkrqz6WAgtIsT3vYjo2sjC8EGlaaf.webp'
                alt=''
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='slide-content'
            >
              <motion.img
                src='https://www.nanotek.lk/storage/home-slider/xkIXZX64tsukEQYFC7Btc5WW04KWCjGXrRkDtKjX.webp'
                alt=''
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='slide-content'
            >
              <motion.img
                src='https://www.nanotek.lk/storage/home-slider/mqfUE2GRdvwFMssUr4D2nfRgqJg13wpPda5VZSeW.webp'
                alt=''
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </SwiperSlide>

          <motion.div
            className='autoplay-progress'
            slot='container-end'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.svg
              viewBox='0 0 48 48'
              ref={progressCircle}
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.circle
                cx='24'
                cy='24'
                r='20'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              ></motion.circle>
            </motion.svg>
            <motion.span
              ref={progressContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            ></motion.span>
          </motion.div>
        </Swiper>
      </motion.div>
    </>
  );
}
