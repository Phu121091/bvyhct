import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./style.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Footer = () => {
  return (
    <div>
      <footer class="bg-dark  text-white">
        <div class="container p-4">
          <section className={cx('container')} >
            <div class="row">

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">About</h5>
                <hr />
                <p>Bệnh viện Y Học Cổ Truyền Hà Đông là bệnh viện hạng II trực thuộc Sở Y tế Thành phố Hà Nội.</p>
                <p> Bệnh viện thực hiện nhiệm vụ khám chữa bệnh nội trú, ngoại trú và chăm sóc sức khoẻ bằng các phương pháp y học cổ truyền, kết hợp y học cổ truyền với y học hiện đại cho nhân dân thủ đô và các tỉnh lân cận.</p>
                <a href="#!" className={cx('know-more')}>XEM THÊM</a>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Các trang</h5>
                <hr />
                <ul class="list-unstyled mb-0">
                  <li class="mb-4">
                    <a href="#!" class="text-white ">Trang chủ</a>
                  </li>
                  <li class="mb-4">
                    <a href="#!" class="text-white ">Chuyên khoa</a>
                  </li>
                  <li class="mb-4">
                    <a href="#!" class="text-white ">Bác sĩ</a>
                  </li>
                  <li class="mb-4">
                    <a href="#!" class="text-white">Tuyển dụng</a>
                  </li>
                  <li class="mb-4">
                    <a href="#!" class="text-white">Tin tức</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

                <h5 class="text-uppercase">Liên hệ</h5>
                <hr />
                <ul class="list-unstyled mb-0">

                  <li class="mb-4">
                    <div className={cx('item-contact')}>
                      <FiMapPin className={cx('icon-footer')} />
                      <div className={cx('text-contact')}>
                        <p class="text-white">23 và 99 Nguyễn Viết Xuân, Quang Trung, Hà Đông, Hà Nội.</p>
                      </div>
                    </div>

                  </li >

                  <li class="mb-4">
                    <div className={cx('item-contact')}>
                      <FiPhone className={cx('icon-footer')} />
                      <div className={cx('text-contact')}>
                        <p class="text-white">0243 359.8363 - Phòng trực: 02433.822.766</p>
                      </div>
                    </div>
                  </li>

                  <li class="mb-4">
                    <div className={cx('item-contact')}>
                      <FiClock className={cx('icon-footer')} />
                      <div className={cx('text-contact')}>
                        <p class="text-white">
                          Thứ 2 - Thứ 6: 07:30 - 17:00.<br />
                          Thứ 7: 07:30 - 12:00
                        </p>
                      </div>
                    </div>
                  </li>

                  <li class="mb-4">
                    <div className={cx('item-contact')}>
                      <FiMail className={cx('icon-footer')} />
                      <div className={cx('text-contact')}>
                        <p class="text-white">bvdkyhcthn@hanoi.gov.vn</p>
                      </div>
                    </div>
                  </li>

                </ul>

              </div>


              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Đặt lịch hẹn</h5>
                <hr />

                <form action="" className={cx('form-footer')}>

                  <div  className={cx('input-box')}>
                    <input type="email" id="" aria-describedby="emailHelp" placeholder="Tên" />
                    {/* <div className={cx('icon-box')}>
                    </div> */}
                  </div>

                  <div className={cx('input-box')}>
                    <input type="password"  id="" placeholder="Số điện thoại" />
                  </div>

                  <div className={cx('input-box')}>
                    <input type="text"  id="" placeholder="Lời nhắn" />
                  </div>

                  <button type="submit" >
                    Gửi
                  </button>

                </form>

              </div>

            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Footer