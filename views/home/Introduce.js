import React from 'react'
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Head from 'next/head';
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineDomainAdd } from "react-icons/md";
import { MdOutlineGroupAdd } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiLaserBlast,GiHealthIncrease } from "react-icons/gi";
import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const cx = classNames.bind(style);

const Introduce = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={cx("introduce-container")}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        ></link>
      </Head>

      {/* testing ara */}
      <Carousel
        interval={2000}
        activeIndex={index}
        onSelect={handleSelect}
        className={cx("container", "p-3", "carousel-container")}
      >
        <Carousel.Item>
          <div className={cx("container")}>
            <h3 className="text-success text-center text-white">
              Chúng tôi là ai?
            </h3>
            <h6 className={cx("h6 text-center text-white")}>
            Bệnh viện Y học cổ truyền (YHCT) Hà Đông tiền thân là Bệnh viện Đông y tỉnh Hà Tây thành lập theo Quyết định số 1021/TCCB ngày 20 tháng 5 năm 1968 của Ủy ban Hành chính tỉnh Hà Tây và phát triển với sứ mệnh chăm sóc bằng tài năng, y đức và sự thấu cảm.
            </h6>
            <div className={cx("container", "mt-5")}>
              <div
                className={cx(
                  "introduce-icon-container justify-content-around row"
                )}
              >
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdWorkOutline className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      Hơn 10 năm kinh nghiệm
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdOutlineStarBorderPurple500 className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      Tuyến khám chữa bệnh bằng Y học cổ truyền cao nhất của Thủ đô
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdOutlineDomainAdd className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      hơn 200 giường bệnh thoải mái dành cho quý bệnh nhân gần xa
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdOutlineGroupAdd className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      hơn 175 bác sĩ và thầy thuốc {" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Thành Tựu */}

        <Carousel.Item>
          <div className={cx("container")}>
            <h3 className="text-success text-center text-white">
              Các thành tựu đạt được
            </h3>
            <h6 className={cx("h6 text-center text-white")}>
              Trong xuất quá trình hoạt động bệnh viện đã đạt được nhiều thành
              tựu quan trọng để đóng góp cho nền y học nước nhà và nhận được
              nhiều sự tin tưởng của bệnh nhân trên cả nước
            </h6>
            <div className={cx("container", "mt-5")}>
              <div
                className={cx(
                  "introduce-icon-container justify-content-around row"
                )}
              >
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <AiOutlineSafetyCertificate className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      Bệnh viện đã có hơn 11 khoa và phòng
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdOutlineStarBorderPurple500 className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      Bệnh viện được đạt chuẩn y tế là bệnh viện hạng II
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <GiHealthIncrease className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      Làm chủ nhiều kỹ thuật, áp dụng nhiều phương pháp công nghệ cao trong y học
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <GiLaserBlast className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      Triển khai khoa phục hồi chức năng thực hiện nhiều kỹ thuật mới như: Xung kích điều trị, Laser nội mạch, Laser chiếu ngoài,v..v
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className={cx("introduce-container-overlay")}></div>

      {/* TEST AREA */}

    </div>
  );
}

export default Introduce