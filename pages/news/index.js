import React from 'react'
import style from "@/views/news/style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import { ListNews } from '@/public/data';
import {FaCalendarAlt} from 'react-icons/fa';

const cx = classNames.bind(style);

const index = () => {
  return (
    <div className={cx('news-container')}>
        <h2>Tin tức mới nhất</h2>
        <div className={cx('news-list')}>
            {ListNews.slice(0,3).map((d,i)=>
            <div className={cx('news-item')} key={i}>
                <Image src={d.img} width='500' height='500' alt={d.title}/>
                <h6>{d.title}</h6>
                <div/>
                <p className={cx('news-des')}>{d.description}</p>
                <p className={cx('news-date')}>
                    <FaCalendarAlt/>
                    {d.date}
                </p>
            </div>
            )}
        </div>
    </div>
  )
}

export default index