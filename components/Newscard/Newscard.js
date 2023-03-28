import React from 'react'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import {FaCalendarAlt} from 'react-icons/fa';
import Link from 'next/link';

const cx = classNames.bind(style);

const Newscard = ({data}) => {
  return (
    <Link href="/news/1" className={cx("news-item")} >
      <div className={cx("img")}>
        <Image src={data.img} width="500" height="500" alt={data.title} />
      </div>
      <h6>{data.title}</h6>
      <div className={cx("space")} />
      <p className={cx("news-des")}>{data.description}</p>
      <p className={cx("news-date")}>
        <FaCalendarAlt />
        {data.icon && data.icon}
        {data.date}
      </p>
    </Link>
  );
};

export default Newscard;
