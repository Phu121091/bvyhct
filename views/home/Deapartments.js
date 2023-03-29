import React, { useState } from 'react'
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Head from 'next/head';
import { departments } from "@/public/data";
import Card from 'react-bootstrap/Card';
import { BsArrowLeftShort,BsArrowRightShort } from "react-icons/bs";

const cx = classNames.bind(style);


function Deapartments() {
    const maxRightP = -804;
    const cardwidth = 268;
    const minrightP = 0;
    const[nextArrowP,setNextArrowP] = useState(minrightP)
    const styles = {
        transform: `translate(${nextArrowP}px)`
    };
    const handleonClickNextArrow = ()=>{
        if(nextArrowP > maxRightP){
          setNextArrowP(nextArrowP - cardwidth)
        }
    }
    const handleonClickPreviousArrow = ()=>{
      if(nextArrowP < minrightP){
        setNextArrowP(nextArrowP + cardwidth)
      }
  }

  const DepartmentLists = departments.map((DepartmentLists) => (
    <div key={DepartmentLists.id} className={cx("p-3","m-2","department-card-container","d-flex flex-column","justify-content-center","align-items-center")}>
      <Card className={cx("departments-card")} style={{ width: "16rem" }} >
          <div className={cx("departments-icon-container","p-3")}>
            {/* <CiStethoscope className={cx("d-icon", "text-center")} /> */}
            {DepartmentLists.icon}
          </div>
          <div className={cx("departments-card-body","my-3")}>
            <Card.Title className={cx("text-center")}>{DepartmentLists.name}</Card.Title>
            <div className={cx("departments-card-description","mx-3")}>
              <Card.Text >
                {DepartmentLists.description.map((items, i) => (
                  <li className={cx("departments-card-item")} key={i}>{items}</li>
                ))}
              </Card.Text>
            </div>

          </div>

      </Card>
      <button variant="primary" className={cx("departments-card-button","mt-3")}>Xem Thêm</button>

    </div>
  ));
  return (
    <div className={cx("Department-container", "mt-5")}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        ></link>

      </Head>
      <div className={cx("container")}>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Các Chuyên Khoa</h1>
          <div>
            <button className={cx("department-previous-arrow-but")}
              onClick={handleonClickPreviousArrow}
            >
              <BsArrowLeftShort
                className={cx("department-previous-arrow-icon")}
              />
            </button>
            <button className={cx("department-next-arrow-but")}
              onClick={handleonClickNextArrow}
            >
              <BsArrowRightShort className={cx("department-next-arrow-icon")} />
            </button>
          </div>
        </div>
        <div className={cx("departments-slider-container")}>
          <div style={styles} className={cx("d-flex", "listcards")}>
            {DepartmentLists}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Deapartments