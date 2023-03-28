import React from 'react'
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Head from 'next/head';
import { departments } from "@/public/data";
import Card from 'react-bootstrap/Card';
import { CiStethoscope } from "react-icons/ci";
import { MdAirlineSeatLegroomExtra} from "react-icons/md";
import { GiHeartOrgan,GiTripleNeedle,GiSkeletalHand,GiMedicines} from "react-icons/gi";
import { IoNutritionOutline} from "react-icons/io";

const cx = classNames.bind(style);


function Deapartments() {

  const DepartmentLists = departments.map((DepartmentLists) => (
    <div key={DepartmentLists.id} className={cx("p-3","m-2","department-card-container")}>
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
    <div className={cx("Department-container","mt-5")}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        ></link>
      </Head>
        <div className={cx("container")}>
          <h1 className='text-center'>Các Chuyên Khoa</h1>
          <div className={cx("d-flex","listcards")}>
            {DepartmentLists}
          </div>
        </div>

    </div>
  );
}

export default Deapartments