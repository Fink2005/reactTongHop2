import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { http } from "../../service/config";

export default function DetailPage() {
  let params = useParams();
  // ush
  const [detail, setDetail] = useState({});
  // useParams ~ lấy tham số từ url
  console.log("params:", params);
  // useNavigate ~ chuyển hướng trang
  let navigate = useNavigate();
  useEffect(() => {
    // gọi api lấy chi tiết phim
    http
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${params.id}`)
      .then((result) => {
        setDetail(result.data.content);
      })
      .catch((err) => {
        alert("Không tìm thấy phim");
      });
    // thenc
  }, []);
  let handleGoBack = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  return (
    <div className="p-5">
      <h2>{detail.tenPhim}</h2>
      <img src={detail.hinhAnh} alt="" height={400} />
      <p>{detail.moTa}</p>
      {/* <NavLink to="/" className="btn  btn-dark">
        Go Back
      </NavLink> */}
      <button className="btn btn-danger" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}
