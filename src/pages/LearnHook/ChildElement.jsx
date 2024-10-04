import React, { memo, useEffect } from "react";

function ChildElement({ setNumber }) {
  console.log("child render");
  // useEffect : mount, update, unmount
  return (
    <div className="p-5 bg-primary">
      ChildElement
      <br />
      <button
        onClick={() => {
          setNumber(0);
        }}
        className="btn btn-danger"
      >
        Reset
      </button>
    </div>
  );
}

export default memo(ChildElement);

// memo ~ PureComponent : nếu props không thay đổi thì không render lại
