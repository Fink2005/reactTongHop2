import React from "react";
import { Tai, Xiu } from "./GameXucXac";

export default function XucXac({ mangXucXac, setLuaChon }) {
  let renderMangXucXac = () => {
    return mangXucXac.map((item, index) => {
      let src = `https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/${item}.png`;
      return <img src={src} width={100} alt="" key={index} />;
    });
  };
  return (
    <div className="d-flex justify-content-between pt-5 container align-items-center">
      <button
        onClick={() => {
          setLuaChon(Tai);
        }}
        className="btn btn-dark p-5"
      >
        Tài
      </button>
      <div>{renderMangXucXac()}</div>
      <button
        onClick={() => {
          setLuaChon(Xiu);
        }}
        className="btn btn-danger p-5"
      >
        Xỉu
      </button>
    </div>
  );
}
