import React from 'react'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import Bn0 from '@/public/banner/bn0.jpg';
import Bn1 from '@/public/banner/bn1.jpg';
import {FaCalendarAlt} from 'react-icons/fa';
import {BsFillSendFill} from 'react-icons/bs';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cx = classNames.bind(style);


const Banner = () => {
  const ListBanner = [Bn0,Bn1];
  return (
    <div className={cx('container')}>
      <Swiper
                modules={[ Autoplay]}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className={cx('wrapper')}
            >
                {ListBanner?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image className={cx('img-banner')} src={img} width='2000' height='1000'/>
                    </SwiperSlide>
                ))}

            </Swiper>
        {/* <Image src={Bn0} alt='banner-thanhthang' width={1500} height={1000} className={cx('img-banner')}/> */}

        <div className={cx('form')}>
            <div className={cx('left')}>
                <FaCalendarAlt/>
                Để lại nhu cầu khám
            </div>
            <div className={cx('main')}>
                <input placeholder='Họ tên'/>
                <input placeholder='Số điện thoaị'/>
                <input placeholder='Ngày sinh'/>
                <input placeholder='Khu vực'/>
            </div>
            <button className={cx('right')}><BsFillSendFill/></button>
        </div>
    </div>
  )
}

export default Banner