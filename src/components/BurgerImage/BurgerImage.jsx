import React, { useState, useEffect } from "react";
import "./BurgerImage.css";
import burgerBreadTop from "../images/burger-bread-top.png";
import burgerBreadBottom from "../images/burger-bread-bottom.png";
import burgerLettuce from "../images/burger-lettuce.png";
import burgerBacon from "../images/burger-bacon.png";
import burgerCheese from "../images/burger-cheese.png";
import burgerMeat from "../images/burger-meat.png";

export default function BurgerImage({ ingredients, ingredientCounts }) {
  const Lettuce = "Lettuce";
  const Bacon = "Bacon";
  const Cheese = "Cheese";
  const Meat = "Meat";
  const [isDisplayNoIngredient, setIsDisplayNoIngredient] = useState(true);
  const [previousImageCount, setPreviousImageCount] = useState({
    Lettuce: 0,
    Bacon: 0,
    Cheese: 0,
    Meat: 0,
  });

  const [burgerpartsImages, setBurgerPartsImages] = useState({
    Lettuce: [],
    Bacon: [],
    Cheese: [],
    Meat: [],
  });

  const burgerPartClasses = {
    Lettuce: "burger-parts-lettuce",
    Bacon: "burger-parts",
    Cheese: "burger-parts-Cheese",
    Meat: "burger-parts",
  };

  const updatePreviousImageCount = () => {
    for (let ingredient of Object.keys(ingredientCounts)) {
      if (ingredientCounts[ingredient] !== previousImageCount[ingredient]) {
        setPreviousImageCount((previousImageCount) => ({
          ...previousImageCount,
          [ingredient]: ingredientCounts[ingredient],
        }));
      }
    }
  };

  const updateBurgerImage = () => {
    console.log("Update Burger Images");
    for (let ingredient of Object.keys(previousImageCount)) {
      console.log(
        "Current Counts " + ingredient + " : " + ingredientCounts[ingredient]
      );
      console.log(
        "Previous Counts " + ingredient + " : " + previousImageCount[ingredient]
      );
      if (ingredientCounts[ingredient] !== previousImageCount[ingredient]) {
        console.log(
          "updating   " +
            ingredient +
            "  image : " +
            ingredientCounts[ingredient]
        );
        updateIngredientImage(ingredient, ingredientCounts[ingredient]);
      }
    }
  };

  const updateIngredientImage = (ingredient, counter) => {
    console.log("updateIngredientImage called");
    let ingredientImage = [];
    let imagePath;
    switch (ingredient) {
      case Lettuce:
        imagePath = burgerLettuce;
        break;
      case Cheese:
        imagePath = burgerCheese;
        break;
      case Bacon:
        imagePath = burgerBacon;
        break;
      case Meat:
        imagePath = burgerMeat;
        break;
      default:
        imagePath = "no path";
        break;
    }
    //  console.log("After switch image path :" + imagePath);
    for (let i = 0; i < counter; i++) {
      ingredientImage.push(imagePath);
    }
    setBurgerPartsImages((burgerpartsImages) => ({
      ...burgerpartsImages,
      [ingredient]: ingredientImage,
    }));
  };
  //#region No ingredient methods
  const setIsDisplayNoIngredientStatus = () => {
    !anyIngredients()
      ? setIsDisplayNoIngredient(true)
      : setIsDisplayNoIngredient(false);
  };

  const anyIngredients = () => {
    for (let prop of Object.keys(ingredientCounts)) {
      //  console.log(prop  + " : " + ingredientCounts[prop]);
      if (ingredientCounts[prop] !== 0) {
        return true;
      }
    }
    return false;
  };
  //#endregion

  useEffect(() => {
    console.log("Burger image use effect called");
    console.log(ingredientCounts);
    setIsDisplayNoIngredientStatus();
    updatePreviousImageCount();
    updateBurgerImage();
  }, [ingredientCounts, previousImageCount]);

  return (
    <React.Fragment>
      <div className="burger-container">
        <div className="burger">
          <img
            className="burger-parts"
            src={burgerBreadTop}
            alt="Burger Bread Top"
          />
          {ingredients.map((ingredient) =>
            burgerpartsImages[ingredient].map((part, index) => (
              <img
                className={burgerPartClasses[ingredient]}
                key={index}
                src={part}
                alt={`Burger Part ${index}`}
              />
            ))
          )}
          {isDisplayNoIngredient && (
            <p className="no-ingredients">No Ingredients Added</p>
          )}
          <img
            className="burger-parts"
            src={burgerBreadBottom}
            alt="Burger Bread Bottom"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
