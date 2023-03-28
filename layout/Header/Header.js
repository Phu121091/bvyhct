import React from 'react'
import Introduce from '@/views/home/Introduce'
const Header = () => {
  return (

    <div>

      <Introduce/>
    <div className={cx("header")} >
      <div className={cx("top-container")} id={bgheader}>
      <div className={cx('call-ambulance')}>
        <div className={cx('call')}>
          <Image src={Logo24h} alt='icon-call-24h' width='20' height='20'/>
          Dịch vụ cấp cứu và xe cứu thương trong vòng 24 giờ : 0243 359.8363
        </div>
        <div className={cx('language')}>
           <Image src='/flagvn.jpg' width={30} height={30}/>vn
        </div>
      </div>
      <div className={cx("top-header")} >
        <div className={cx("logo")}>
          <Image src={Logo} width='200' height='200'/>
        </div>
        <div className={cx("item-contact")}>
          <MdPhoneInTalk className={cx("icon-header")}/>
          <div className={cx("text-contact")}>
            <p className={cx("text-title")}>Hotline</p>
            <p className={cx("text-p")}>02433.822.766</p>
          </div>
        </div>

        <div className={cx("item-contact")}>
          <SlLocationPin className={cx("icon-header")}/>
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
     {MenuLink.map((d,i)=>
     d.list?
     <div className={cx("menu-link")}>{d.title}<BiChevronDown/>
     <div className={cx("list-link")}>
      {d.list.map((item,index)=>
      <Link href={item.link}>{item.title}</Link>
      )}
     </div>
     <div className={cx("hr")}/>
     </div>
     :
     <Link href={d.link} className={cx("menu-link")}>{d.title}
     <div className={cx("hr")}/>
     </Link>
     )}
     <button className={cx('book')}><FaCalendarAlt/>Đặt lịch khám</button>
  </div>
    </div>
  )
}

export default Header