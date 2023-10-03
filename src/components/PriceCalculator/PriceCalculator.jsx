import React, { useEffect, useState } from "react";

export default function PriceCalculator({ ingredientCounts }) {
  const prices = {
    burger: 3.0,
    Lettuce: 0.5,
    Cheese: 0.7,
    Bacon: 0.4,
    Meat: 1.3,
  };
  const [price, setPrice] = useState(prices["burger"].toFixed(2));
  const updatePrice = () => {
    let ingredientPrice = 0;
    let breadPrice = prices["burger"];
    for (let ingredient of Object.keys(ingredientCounts)) {
      // console.log(ingredient  + " : " + ingredientCounts[ingredient]);
      ingredientPrice = prices[ingredient] * ingredientCounts[ingredient];
      // console.log(ingredient  + " price is " + ingredientPrice);
      breadPrice = breadPrice + ingredientPrice;
    }
    setPrice(breadPrice.toFixed(2));
  };

  useEffect(() => {
    console.log("Price Calculator use effect called");
    updatePrice();
  }, [ingredientCounts]);

  return (
    <React.Fragment>
      <b>{price}</b>
    </React.Fragment>
  );
}
