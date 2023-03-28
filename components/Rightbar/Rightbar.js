import React from 'react'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import Link from 'next/link';
import {TfiSearch} from 'react-icons/tf';

const cx = classNames.bind(style);

const Rightbar = () => {
  return (
    <div className={cx('contaner')}>
        <div className={cx('search')}>
            <input placeholder='Tìm kiếm'/>
            <TfiSearch/>
        </div>
    </div>
  )
}

export default Rightbar