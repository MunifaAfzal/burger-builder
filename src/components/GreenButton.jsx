import "./GreenButton.css";
import React from "react";

export default function GreenButton({ buttonName, onClickhandler }) {
  return (
    <button className="green-button" onClick={onClickhandler}>
      {buttonName}
    </button>
  );
}
