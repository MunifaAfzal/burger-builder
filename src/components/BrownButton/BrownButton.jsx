import React from "react";
import "./BrownButton.css";
export default function BrownButton({ buttonName, onClickhandler }) {
  return (
    <button className="brown-button" onClick={onClickhandler}>
      {buttonName}
    </button>
  );
}
