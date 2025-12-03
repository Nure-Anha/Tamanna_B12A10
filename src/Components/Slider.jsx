import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import React, { useRef, useState } from 'react';


const Slider = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div>
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='brightness-50' src="/my_assets/img4.jpg" alt="" />

          <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
            <p className='text-6xl font-bold text-center'>Find Your <br /> Perfect Paw-Partner <br /> Today</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='brightness-50' src="/my_assets/img6.jpg" alt="" />

          <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
            <p className='text-6xl font-bold text-center'>Life Is Better <br /> With a Furry Friend</p>
          </div>
          </SwiperSlide>

        <SwiperSlide>
          <img className='brightness-50' src="/my_assets/img5.jpg" alt="" />

          <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
            <p className='text-6xl font-bold text-center'>Every Pet <br /> Deserves a Loving <br /> Home</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='brightness-50' src="/my_assets/img7.jpg" alt="" />

          <div className='absolute inset-0 text-white flex flex-col justify-center items-center'>
            <p className='text-6xl font-bold text-center'>Adopt a Friend, <br /> Save a Life</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;