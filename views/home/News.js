import React from 'react'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import { ListNews } from '@/public/data';
import {FaCalendarAlt} from 'react-icons/fa';
import Link from 'next/link';

const cx = classNames.bind(style);

const News = () => {
  return (
    <div className={cx('news-container')}>
        <h2>Tin tức mới nhất
            <hr/>
        </h2>
        <div className={cx('news-list')}>
            {ListNews.slice(0,3).map((d,i)=>
            <Link href='/news/1' className={cx('news-item')} key={i}>
                <div className={cx('img')}>
                <Image src={d.img} width='500' height='500' alt={d.title}/>
                </div>
                <h6>{d.title}</h6>
                <div className={cx('space')}/>
                <p className={cx('news-des')}>{d.description}</p>
                <p className={cx('news-date')}>
                    <FaCalendarAlt/>
                    {d.date}
                </p>
            </Link>
            )}
        </div>
    </div>
  )
}

export default News