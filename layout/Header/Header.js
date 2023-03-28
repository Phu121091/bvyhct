import React, { useEffect, useState } from "react";
import { GiHospital } from "react-icons/gi";
import { MdPhoneInTalk } from "react-icons/md";
import { BiSearchAlt, BiChevronDown } from "react-icons/bi";
import { SlLocationPin } from 'react-icons/sl';
import { FaCalendarAlt } from 'react-icons/fa';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import { MenuLink } from "@/public/data";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/public/logo.png';
import Logo24h from '@/public/logo24h.png';

const cx = classNames.bind(style);

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [bgheader, setbgheader] = useState('');

  useEffect(() => {
    const handelScroll = () => {

      if (window.scrollY > 70) {
        setbgheader('act')
      }
      if (window.scrollY == 0) {
        setbgheader('');
      }
    };

    window.addEventListener('scroll', handelScroll);

    return () => {
      window.removeEventListener('scroll', handelScroll);
    };
  }, [showMenu]);

  return (
    <div className={cx("header")} >
      <div className={cx("top-container")} id={bgheader}>
        <div className={cx('call-ambulance')}>
          <div className={cx('call')}>
            <Image src={Logo24h} alt='icon-call-24h' width='20' height='20' />
            Dịch vụ cấp cứu và xe cứu thương trong vòng 24 giờ : 0243 359.8363
          </div>
          <div className={cx('language')}>
            <Image src='/flagvn.jpg' width={30} height={30} alt='icon' />vn
          </div>
        </div>
        <div className={cx("top-header")} >
          <div className={cx("logo")}>
            <Image src={Logo} width='200' height='200' alt='icon' />
          </div>
          <div className={cx("item-contact")}>
            <MdPhoneInTalk className={cx("icon-header")} />
            <div className={cx("text-contact")}>
              <p className={cx("text-title")}>Hotline</p>
              <p className={cx("text-p")}>02433.822.766</p>
            </div>
          </div>

          <div className={cx("item-contact")}>
            <SlLocationPin className={cx("icon-header")} />
            <div className={cx("text-contact")}>
              <p className={cx("text-title")}>23 - 99 Nguyễn Viết Xuân</p>
              <p className={cx("text-p")}>Quang Trung, Hà Đông, Hà Nội</p>
            </div>
          </div>

          <div className={cx("search")}>
            <input type="text" placeholder="--Tìm kiếm" />
            <BiSearchAlt />
          </div>
        </div>
      </div>
      <div className={cx("bot-header")}>
        {MenuLink.map((d, i) =>
          d.list ?
            <div className={cx("menu-link")} key={i}>{d.title}<BiChevronDown />
              <div className={cx("list-link")}>
                {d.list.map((item, index) =>
                  <Link href={item.link} key={index}>{item.title}</Link>
                )}
              </div>
              <div className={cx("hr")} />
            </div>
            :
            <Link href={d.link} className={cx("menu-link")} key={i}>{d.title}
              <div className={cx("hr")} />
            </Link>
        )}
        <button className={cx('book')}><FaCalendarAlt />Đặt lịch khám</button>
      </div>
    </div>
  );
};

export default Header;
