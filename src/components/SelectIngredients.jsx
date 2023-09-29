import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ingredient from "./Ingredient";
import "./SelectIngredients.css";
import PriceCalculator from "./PriceCalculator";
import OrderSummaryModal from "./OrderSummaryModal";
import OrderButton from "./OrderButton";

export default function SelectIngredients({
  isLogin,
  ingredients,
  ingredientCounts,
  setIngredientCounts,
  removeAllIngredients,
}) {
  const addIngredient = (ingredient) => {
    setIngredientCounts({
      ...ingredientCounts,
      [ingredient]: ingredientCounts[ingredient] + 1,
    });
  };
  const removeIngredient = (ingredient) => {
    if (ingredientCounts[ingredient] > 0) {
      setIngredientCounts({
        ...ingredientCounts,
        [ingredient]: ingredientCounts[ingredient] - 1,
      });
    }
  };

  const getCounter = (ingredient) => {
    // console.log("Counter called " + ingredient);
    return ingredientCounts[ingredient];
  };

  useEffect(() => {
    console.log("BurgerBuilderBase use effect called");
  });
  return (
    <React.Fragment>
      <div className="ingredients-section">
        <p style={{ margin: "16px 0px" }}>
          {" "}
          Current Price: <strong>$</strong>
          <PriceCalculator ingredientCounts={ingredientCounts}>
            {" "}
          </PriceCalculator>
        </p>
        {ingredients.map((ingredient) => (
          <Ingredient
            name={ingredient}
            removeIngredient={removeIngredient}
            addIngredient={addIngredient}
            getCounter={getCounter}
          />
        ))}
        <div>
          <button className="button-style" onClick={removeAllIngredients}>
            REMOVE ALL INGREDIENTS
          </button>
        </div>
        <div>
          <OrderButton
            isLogin={isLogin}
            ingredientCounts={ingredientCounts}
            ingredients={ingredients}
          >
            {" "}
          </OrderButton>
        </div>
      </div>
    </React.Fragment>
  );
}
