import React ,{useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Ingredient from './Ingredient';
import './SelectIngredients.css';
import PriceCalculator from './PriceCalculator';

export default function BuildBurger({ingredientCounts, setIngredientCounts}){
    const ingredients = [
        'Lettuce',
        'Cheese',
        'Bacon',
        'Meat',
    ];
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
    // Function to decrement the count for a specific ingredient
    const removeAllIngredients = () => {
    console.log("remove All ingredients called ");
    for(let ingredient of Object.keys(ingredientCounts)){
      console.log(ingredient  + " : " + ingredientCounts[ingredient]);
      setIngredientCounts((prevCounts) => ({
        ...prevCounts,
        [ingredient]: 0,
      }));
      
      console.log(ingredient  + " : " + ingredientCounts[ingredient]);
     }
  };
  const getCounter = (ingredient) => {
    console.log("Counter called " + ingredient);
    return ingredientCounts[ingredient];
  }
    let navigate = useNavigate(); 
  const openLoginPage = () =>{ 
    let path = `/Login`; 
    navigate(path);
  }
  useEffect( () => {
    console.log("BurgerBuilderBase use effect called");
    console.log(ingredientCounts);
  });
    return ( 
    <React.Fragment>
            <div className='ingredients-section'>
            <PriceCalculator ingredientCounts={ingredientCounts} > </PriceCalculator>
            {ingredients.map((ingredient) => ( <Ingredient name={ingredient} removeIngredient = {removeIngredient} addIngredient = {addIngredient}  getCounter={getCounter}/> ))}
            <div> 
            <button className='reset-burger-btn'
                    onClick={removeAllIngredients}>
                       REMOVE ALL INGREDIENTS
            </button>
          </div>
          <div > 
            <button className='sign-up-order-btn'
                    onClick={openLoginPage}>
                       SIGN UP TO ORDER
            </button>
        </div>
            </div>
    </React.Fragment>
    );
}