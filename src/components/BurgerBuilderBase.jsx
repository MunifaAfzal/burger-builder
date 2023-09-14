import React,{useEffect, useState} from 'react';
import SelectIngredients from './SelectIngredients';
import BurgerImage from './BurgerImage';

export default function BurgerBuilderBase(){
    const [ingredientCounts, setIngredientCounts] = useState({
        Lettuce: 0,
        Cheese: 0,
        Bacon: 0,
        Meat: 0,
      });

      useEffect( () => {
        console.log("BurgerBuilderBase use effect called");
      } ,[ingredientCounts]);

    return(
        <React.Fragment>
            <BurgerImage ingredientCounts={ingredientCounts}> </BurgerImage>
            <SelectIngredients ingredientCounts={ingredientCounts}  setIngredientCounts={setIngredientCounts} > </SelectIngredients>
        </React.Fragment>
    );
}
