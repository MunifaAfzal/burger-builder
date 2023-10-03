import React from "react";
import PriceCalculator from "../PriceCalculator/PriceCalculator";
import "./PrintOrder.css";

export default function PrintOrder({ ingredients, ingredientCounts }) {
  return (
    <React.Fragment>
      <div className="order-container">
        <p>
          Ingredients:
          {ingredients.map((ingredient) => (
            <span className="order-ingredient">
              {ingredient} ({ingredientCounts[ingredient]})
            </span>
          ))}
        </p>
        <p>
          Price{" "}
          <strong>
            USD{" "}
            <PriceCalculator
              ingredientCounts={ingredientCounts}
            ></PriceCalculator>
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
}
