import React from "react";
import { Tai, Xiu } from "./GameXucXac";
export default function KetQua({
  handlePlayGame,
  luaChon,
  soLuotChoi,
  soBanThang,
  ketQua,
}) {
  //   let renderThangThua = () => {
  //     // duyệt mảng đếm điểm
  //     // nếu trên 11 && user chọn tài => thắng
  //     //   nếu dưới 11 && user chọn xỉu => thắng
  //     let tongDiem = 0;
  //     mangXucXac.forEach((value) => {
  //       tongDiem = tongDiem + value;
  //     });
  //     if (tongDiem >= 11 && luaChon == Tai) {
  //       return "Win";
  //     }
  //     if (tongDiem < 11 && luaChon == Xiu) {
  //       return "Win";
  //     }
  //     return "Lose";
  //   };
  return (
    <div className="d-flex flex-column justify-align-content-center align-items-center">
      <button onClick={handlePlayGame} className="btn btn-warning">
        Play Game
      </button>
      {luaChon && <h1>Lựa chọn :{luaChon}</h1>}
      <h1>soLuotChoi :{soLuotChoi}</h1>
      <h1>ket qua : {ketQua}</h1>
      <h1>so ban thang :{soBanThang}</h1>
    </div>
  );
}
