import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectIngredients from "./SelectIngredients";
import BurgerImage from "./BurgerImage";
import OrderSummaryModal from "./OrderSummaryModal";
import "./OrderProcess.css";
import Form from "./Form";
import GreenButton from "./GreenButton";
import BrownButton from "./BrownButton";

export default function OrderProcess({
  ingredients,
  ingredientCounts,
  removeAllIngredients,
  updateOrderList,
}) {
  let navigate = useNavigate();
  const openBurgerBuilderPage = () => {
    removeAllIngredients();
    let path = `/`;
    navigate(path);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsVisible(true); // Toggle visibility when a button is clicked
  };

  const confirmOrder = () => {
    //let path = `/Orders`;
    updateOrderList();
    openBurgerBuilderPage();
  };

  useEffect(() => {
    console.log("OrderProcess use effect called");
    console.log(ingredients);
    console.log(ingredientCounts);
  }, [ingredients, ingredientCounts]);

  return (
    <React.Fragment>
      <div className="order-process-container">
        <h1>
          <strong>We hope it tastes well!</strong>
        </h1>
        <BurgerImage
          ingredients={ingredients}
          ingredientCounts={ingredientCounts}
        ></BurgerImage>
        <div>
          <BrownButton
            buttonName="Cancel"
            onClickhandler={openBurgerBuilderPage}
          ></BrownButton>
          <GreenButton
            buttonName="Continue"
            onClickhandler={toggleFormVisibility}
          ></GreenButton>
        </div>
        <div
          className="border-container"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <h4> Enter Your Contact Data</h4>
          <Form> </Form>
          <GreenButton
            buttonName="ORDER"
            onClickhandler={confirmOrder}
          ></GreenButton>
        </div>
      </div>
    </React.Fragment>
  );
}
