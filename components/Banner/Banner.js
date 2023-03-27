import React from 'react'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import Bn0 from '@/public/banner/doctor.jpeg';
import {FaCalendarAlt} from 'react-icons/fa';
import {BsFillSendFill} from 'react-icons/bs';

const cx = classNames.bind(style);

const Banner = () => {
  return (
    <div className={cx('container')}>
        <Image src={Bn0} alt='banner-thanhthang' width={1500} height={1000} className={cx('img-banner')}/>

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