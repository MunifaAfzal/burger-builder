import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummaryModal from "./OrderSummaryModal";
import "./OrderButton.css";

export default function OrderButton({
  isLogin,
  ingredientCounts,
  ingredients,
}) {
  let navigate = useNavigate();
  const openLoginPage = () => {
    let path = `/auth`;
    navigate(path);
  };

  const [buttonStatus, setButtonStatus] = useState(true);
  const [buttonText, setButtonText] = useState("SIGN UP TO ORDER");

  const updateButtonText = () => {
    let text;
    if (isLogin) {
      text = "ORDER NOW";
    } else {
      text = "SIGN UP TO ORDER";
    }
    setButtonText(text);
  };

  const anyIngredients = () => {
    console.log("any Ingredients called");
    for (let prop of Object.keys(ingredientCounts)) {
      if (ingredientCounts[prop] !== 0) {
        console.log("any Ingredients returns true");
        return true;
      }
    }
    console.log("any Ingredients returns false");
    return false;
  };

  const isbuttonEnabled = () => {
    console.log("isButtonEnabled Called");
    console.log("button Status : " + buttonStatus);
    anyIngredients()
      ? setButtonStatus((status) => (status = false))
      : setButtonStatus((status) => (status = true));
    console.log("button Status : " + buttonStatus);
  };

  const [buttonClassName, setButtonClassName] = useState(
    "button-style-disabled"
  );

  const updateButtonClassName = () => {
    const CName = "button-style";
    console.log(buttonClassName);
    anyIngredients()
      ? setButtonClassName((style) => (style = "button-style-enabled"))
      : setButtonClassName((style) => (style = "button-style-disabled"));
    console.log(buttonClassName);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("OrderButton use effect called");
    console.log(ingredientCounts);
    updateButtonText();
    isbuttonEnabled();
    updateButtonClassName();
  }, [isLogin, ingredientCounts]);

  return (
    <React.Fragment>
      <button
        className={buttonClassName}
        onClick={isLogin ? showModal : openLoginPage}
        disabled={buttonStatus}
      >
        {buttonText}
      </button>
      <OrderSummaryModal
        ingredientCounts={ingredientCounts}
        ingredients={ingredients}
        showModal={isModalOpen}
        closeModal={closeModal}
      />
    </React.Fragment>
  );
}
