import React from 'react'
import style from "@/views/news/style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import { ListNews } from '@/public/data';
import {FaCalendarAlt} from 'react-icons/fa';
import BannerImg from '@/components/Banner/BannerImg';
import Newscard from '@/components/Newscard/Newscard';

const cx = classNames.bind(style);

const index = () => {
  return (
    <div className={cx('news-container')}>
      <BannerImg title='Tin tức - Sự kiện'/>
      <div className={cx('news-main')}>
        <div className={cx('news-list')}>
          {ListNews.map((item,index)=>
           <div className={cx('news-item-container')} key={index}>
             <Newscard data={item}/>
           </div>
          )}
        </div>
        <div className={cx('right-bar')}>
            <button>aa</button>
        </div>
      </div>
    </div>
  )
}

export default index