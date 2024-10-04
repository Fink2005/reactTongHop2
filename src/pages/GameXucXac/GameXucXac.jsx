import React, { useState } from "react";
import backGround from "./asset/bgGame.png";
import XucXac from "./XucXac";
import KetQua from "./KetQua";
import "./index.css";
export let Tai = "Tài";
export let Xiu = "Xỉu";

export default function GameXucXac() {
  const [mangXucXac, setMangXucXac] = useState([1, 6, 1]);
  const [luaChon, setLuaChon] = useState();
  // usf
  const [soBanThang, setSoBanThang] = useState();
  const [soLuotChoi, setsoLuotChoi] = useState();
  const [ketQua, setKetQua] = useState();

  let handlePlayGame = () => {
    // >=11 => Tài
    let newMangXucXac = [];
    console.log("YES");
    // random 3 con xuc xac mới
    // random giá trị từ 1 đến 6
    let tongDiem = 0;
    mangXucXac.forEach(() => {
      let newValue = Math.floor(Math.random() * 6) + 1;
      newMangXucXac.push(newValue);
      tongDiem += newValue;
    });
    if (
      (tongDiem >= 11 && luaChon === Tai) ||
      (tongDiem < 11 && luaChon === Xiu)
    ) {
      setSoBanThang(soBanThang + 1);
      setKetQua("Thắng");
    } else {
      setKetQua("Thua");
    }
    // cập nhật lại state
    setMangXucXac(newMangXucXac);
    setsoLuotChoi(soLuotChoi + 1);
  };
  return (
    <div
      className="game-xuc-xac"
      style={{
        backgroundImage: `url(${backGround})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "contain",
      }}
    >
      <XucXac mangXucXac={mangXucXac} setLuaChon={setLuaChon} />
      <KetQua
        soLuotChoi={soLuotChoi}
        soBanThang={soBanThang}
        ketQua={ketQua}
        luaChon={luaChon}
        handlePlayGame={handlePlayGame}
        mangXucXac={mangXucXac}
      />
    </div>
  );
}
