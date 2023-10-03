import React, { useEffect } from "react";
import SelectIngredients from "../SelectIngredients/SelectIngredients";
import BurgerImage from "../BurgerImage/BurgerImage";

export default function BurgerBuilderBase({
  isLogin,
  ingredients,
  ingredientCounts,
  setIngredientCounts,
  removeAllIngredients,
}) {
  useEffect(() => {
    console.log("BurgerBuilderBase use effect called");
    console.log("login status: " + isLogin);
    removeAllIngredients();
  }, []);

  return (
    <React.Fragment>
      <BurgerImage
        ingredients={ingredients}
        ingredientCounts={ingredientCounts}
      >
        {" "}
      </BurgerImage>
      <SelectIngredients
        isLogin={isLogin}
        ingredients={ingredients}
        ingredientCounts={ingredientCounts}
        setIngredientCounts={setIngredientCounts}
        removeAllIngredients={removeAllIngredients}
      ></SelectIngredients>
    </React.Fragment>
  );
}
