import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import "./OrderSummaryModel.css";
import PriceCalculator from "../PriceCalculator/PriceCalculator";
import BrownButton from "../BrownButton/BrownButton";
import GreenButton from "../GreenButton/GreenButton";

export default function OrderSummaryModal({
  ingredientCounts,
  ingredients,
  showModal,
  closeModal,
}) {
  let navigate = useNavigate();
  const openOrderProcess = () => {
    let path = `/checkout`;
    navigate(path);
  };

  useEffect(() => {
    console.log("OrderSummaryModal use effect called");
    console.log(ingredientCounts);
    console.log(ingredients);
  }, []);

  return (
    <React.Fragment>
      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Modal"
        ariaHideApp={false} // Prevents a11y issue (required for react-modal)
        className="summaryModal"
        overlayClassName="ReactModal__Overlay"
      >
        <h3 className="title">Your Order Summary:</h3>
        <ul>
          {Object.keys(ingredientCounts).map((ingredient) => (
            <li>
              {ingredient}: {ingredientCounts[ingredient]}{" "}
            </li>
          ))}
        </ul>
        <p>
          <strong>
            Total Price: $
            <PriceCalculator
              ingredientCounts={ingredientCounts}
            ></PriceCalculator>
          </strong>
        </p>
        <p>Continue to Checkout?</p>
        <BrownButton
          buttonName="CANCEL"
          onClickhandler={closeModal}
        ></BrownButton>
        <GreenButton
          buttonName="CONTINUE"
          onClickhandler={openOrderProcess}
        ></GreenButton>
      </ReactModal>
    </React.Fragment>
  );
}
