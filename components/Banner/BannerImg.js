import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import Bnimg from '@/public/banner/bn2.jpg';
import Link from 'next/link';
import {IoIosArrowForward} from 'react-icons/io';

const cx = classNames.bind(style);

const BannerImg = ({title}) => {
  return (
    <div className={cx('bn-container')}>
        <Image src={Bnimg} width='2000' height='1000' alt='docto-yhct'/>
        <div className={cx('bn-text')}>
            <h1>{title}</h1>
            <div className={cx('crum')}>
               <Link href='/'>Trang chủ </Link>
               <IoIosArrowForward/>
               <span>{title}</span>
            </div>
        </div>
    </div>
  )
}

export default BannerImg