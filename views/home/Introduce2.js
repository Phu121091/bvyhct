import React from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(style);

const Introduce2 = () => {
  return (
    <div className={cx("news-container")}>
      <h2>
        Giới thiệu
        <hr />
      </h2>
      <div className={cx("intro-main")}>
        <div className={cx("video-container")}>
          <video controls className={cx("video")}>
            <source src="http://bvyhoccotruyenhadong.vn/wp-content/uploads/videointro.mp4" type="video/mp4" />
          </video>
          <p>Phóng sự 50 năm bệnh viện y học cổ truyền Hà Đông</p>
        </div>
        Bệnh viện y học cổ truyền Hà Đông là bệnh viện hạng II trực thuộc sở y
        tế TP Hà Nội .Bệnh viện thực hiện nhiệm vụ khám chữa bệnh nội trú ,ngoại
        trú và chăm sóc sức khỏe bằng các phương pháp y học cổ truyền ,kết hợp
        với y học hiện đại cho nhân dân thủ đô và các tỉnh lân cận .Đội ngũ nhân
        viên y tế luôn ân cần niềm nở , có trình độ chuyên môn cao , trang thiết
        bị y tế hiện đại ,đảm bảo ứng dụng tiến bộ khoa học hiện đại trong tư
        vấn tầm soát ,chẩn đoán và điều trị chuyên sâu về một số mặt bệnh hay
        gặp như : Tổn thương dây thần kinh hông to ,thoái hóa cột sống ,hội
        chứng cánh tay cổ , đau dây thần kinh tọa , rối loạn chức năng tiền đình
        , bệnh rễ thần kinh cổ , bệnh mạch máu não khác ,tai biến mạch máu não ,
        trĩ , đái tháo đường không phụ thuộc insulin ...
        <br/><br/>Ngoài ra bệnh viện cũng
        phát triển , điều trị các mặt bệnh : bệnh lí hậu môn , trực tràng ,bệnh
        phụ khoa , da liễu ,thận tiết niệu , cơ xương khớp ,khám và điều trị về
        răng hàm mặt , tai mũi họng ,mắt .Và các kĩ thuật nội soi ,tiệm nội khớp
        , cấy chỉ ...góp phần nâng cao hiệu quả điều trị .
        <br />
        <br />
        Bệnh viện luôn đem sự hài lòng nhất đến với bệnh nhân theo tiêu chí:
        <br />
        <b>Tận tâm - Thân thiện - Trách nhiệm - hiệu quả</b>
      </div>
    </div>
  );
};

export default Introduce2;
