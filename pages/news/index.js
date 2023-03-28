import React,{useState} from 'react'
import style from "@/views/news/style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import { ListNews } from '@/public/data';
import {FaCalendarAlt} from 'react-icons/fa';
import BannerImg from '@/components/Banner/BannerImg';
import Newscard from '@/components/Newscard/Newscard';
import Rightbar from '@/components/Rightbar/Rightbar';
import Pagination from '@/components/Pagination';

const cx = classNames.bind(style);

const Index = () => {
  const [page, setPage] = useState(1);
  const lastIndex = page * 6
    const firstIndex = lastIndex - 6;
  return (
    <div className={cx('news-container')}>
      <BannerImg title='Tin tức - Sự kiện'/>
      <div className={cx('news-main')}>
        <div className={cx('news-list')}>
          {ListNews.slice(firstIndex, lastIndex).map((item,index)=>
           <div className={cx('news-item-container')} key={index}>
             <Newscard data={item}/>
           </div>
          )}
          <Pagination totalPosts={ListNews.length} postPerPage={6} setPage={setPage} pageIndex={page} />
        </div>

        <div className={cx('right-bar')}>
            <Rightbar/>
        </div>
      </div>
    </div>
  )
}

export default Index