import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "motion/react"
import { Link } from 'react-router';
// import React, { useRef, useState } from 'react';


const Slider = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className='relative'>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full h-[80vh] object-cover"
        >

        <SwiperSlide>
          <motion.div initial={{ scale: 1.5 }} animate={{ scale: 1 , transition: { duration: 1 } }}>
          <img className='brightness-50 object-cover' src="/my_assets/img4.jpg" alt="" />

          <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
            <p className='text-3xl font-bold text-center'>Find Your <br /> Perfect Paw-Partner <br /> Today</p>
          </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='brightness-50 object-cover' src="/my_assets/img6.jpg" alt="" />

          <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
            <p className='text-3xl font-bold text-center'>Life Is Better <br /> With a Furry Friend</p>
          </div>
          </SwiperSlide>

        <SwiperSlide>
          <img className='brightness-50 object-cover' src="/my_assets/img5.jpg" alt="" />

          <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
            <p className='text-3xl font-bold text-center'>Every Pet <br /> Deserves a Loving <br /> Home</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='brightness-50 object-cover' src="/my_assets/img7.jpg" alt="" />

          <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
            <p className='text-3xl font-bold text-center'>Adopt a Friend, <br /> Save a Life</p>
          </div>
        </SwiperSlide>

      </Swiper>
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-200 animate-bounce">
        <img className='w-10' src="/my_assets/arrow.png" alt="" />
      </div>
      
    </div>
  );
};

export default Slider;