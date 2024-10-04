// rfc
import React, { useEffect, useState } from "react";
import ChildElement from "./ChildElement";
// [state,setState] = useState(initialState)
export default function LearnHook() {
  let [number, setNumber] = useState(10);
  let handleUp = () => {
    setNumber(number + 1); // ~ this.setState
  };
  // useEffect : mount, update, unmount
  useEffect(() => {
    let time = 300;
    let myInterval = setInterval(() => {
      // console.log(time--);
      setNumber((number) => number + 1);
    }, 1000);
    console.log("UE1:  chỉ chạy 1 lần duy nhất nếu [ ] rỗng");

    return () => {
      console.log(" scẽ chạy khi component bị xóa khỏi DOM");
      clearInterval(myInterval);
    };
  }, []);
  useEffect(() => {
    console.log("UE2: sẽ được chạy khi number thay đổi");
  }, [number]);
  // useEffect ( arrow function, [dependencies] )
  // dependencies : [] ~ componentDidMount
  // dependencies : [value] ~ componentDidUpdate => chạy lại arrow function nằm trong useEffect khi value thay đổi
  return (
    <div>
      <h2>LearnHook</h2>

      <h1>{number}</h1>
      <button className="btn btn-danger" onClick={handleUp}>
        Up
      </button>
      <ChildElement setNumber={setNumber} />
    </div>
  );
}
