import React from "react";
import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [selectedOption, setSelectedOption] = useState("Fastest"); // Initialize the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className="form-container">
      <div className="form-element">
        <input type="text" placeholder="Your Name"></input>
      </div>
      <div className="form-element">
        <input type="text" placeholder="Street"></input>
      </div>
      <div className="form-element">
        <input type="text" placeholder="Zip Code"></input>
      </div>
      <div className="form-element">
        <input type="text" placeholder="Country"></input>
      </div>
      <div className="form-element">
        <input type="text" placeholder="E-mail"></input>
      </div>
      <div className="form-element">
        <select
          className="form-select-element"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="Fastest">Fastest</option>
          <option value="Cheapest">Cheapest</option>
        </select>
      </div>
    </form>
  );
}
