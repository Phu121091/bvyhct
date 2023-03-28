import React from 'react'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import Link from 'next/link';
import {RiSearchLine} from 'react-icons/ri';
import {Categories} from '@/public/data.js';
import { ListNews } from '@/public/data.js';

const cx = classNames.bind(style);


const Rightbar = () => {
  return (
    <div className={cx('container')}>
        <div className={cx('search')}>
            <input placeholder='Tìm kiếm'/>
            <RiSearchLine/>
        </div>
        <div className={cx('categories')}>
            <h5>Danh mục</h5>
          {Categories.map((item,index)=>
          <p key={index}>{item.title} <span>({item.amount})</span></p>
          )}
        </div>
        <div className={cx('posts')}>
            <h5>Tin nổi bật</h5>
          {ListNews.slice(0,3).map((item,index)=>
          <div className={cx('item-post')} key={index}>
            <Image src={item.img} width='80' height='80' alt={item.title}/>
            <div className={cx('text-post')}>
                <Link href='/news/1' >{item.title}</Link>
                <p>{item.date}</p>
            </div>
          </div>
          )}
        </div>
    </div>
  )
}

export default Rightbar