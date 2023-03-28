import React from 'react'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import { ListNews } from '@/public/data';
import {FaCalendarAlt} from 'react-icons/fa';
import Link from 'next/link';
import Newscard from '@/components/Newscard/Newscard';

const cx = classNames.bind(style);

const News = () => {
  return (
    <div className={cx('news-container')}>
        <h2>Tin tức mới nhất
            <hr/>
        </h2>
        <div className={cx('news-list')}>
            {ListNews.slice(0,3).map((d,i)=>
            <div className={cx('news-item-container')} key={i} >
             <Newscard data={d}/>
            </div>
            )}
        </div>
    </div>
  )
}

export default News