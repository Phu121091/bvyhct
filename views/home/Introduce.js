import React from 'react'
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Head from 'next/head';
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineDomainAdd } from "react-icons/md";
import { MdOutlineGroupAdd } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
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
        activeIndex={index}
        onSelect={handleSelect}
        className={cx("container", "p-3", "carousel-container")}
      >
        <Carousel.Item>
          <div className={cx("container")}>
            <h3 className="text-success text-center text-white">
              VinMec là ai?
            </h3>
            <h6 className={cx("h6 text-center text-white")}>
              Bệnh Viện là một hệ thống y tế Hàn Lâm do Vingroup -Tập đoàn kinh
              tế tư nhân đa nghành tại Việt Nam đầu tư và phát triển với sứ mệnh
              Chăm sóc bằng tài năng, y đức và sự thấu cảm.
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
                      Bệnh viện được đạt chuẩn y tế toàn cầu
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdOutlineDomainAdd className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      hơn 10 bệnh viện phòng khám
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdOutlineGroupAdd className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      hơn 400 bác sĩ và chuyên gia trong và ngoài nước{" "}
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
                      Hơn 10 năm kinh nghiệm
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdOutlineStarBorderPurple500 className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      Bệnh viện được đạt chuẩn y tế toàn cầu
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdOutlineDomainAdd className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      hơn 10 bệnh viện phòng khám
                    </p>
                  </div>
                </div>
                <div className={cx("card", "col-sm-12", "col-md-6","col-lg-3")}>
                  <MdOutlineGroupAdd className={cx("icon")} />
                  <div className="card-body">
                    <p className="card-text text-white mt-2">
                      hơn 400 bác sĩ và chuyên gia trong và ngoài nước{" "}
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