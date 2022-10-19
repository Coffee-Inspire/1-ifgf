import React from "react";

function DashText(props) {
  return (
    <div className="pt-3">
      <h4
        className={
          props.colorWhite ? "text-white text-capitalize" : "text-capitalize"
        }
      >
        <b>{props.word}</b>
      </h4>
    </div>
  );
}

export default DashText;
