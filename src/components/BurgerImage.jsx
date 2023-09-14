import React , {useState,useEffect} from 'react';
import './BurgerImage.css';

import burgerBreadTop from './images/burger-bread-top.png';
import burgerBreadBottom from './images/burger-bread-bottom.png';
import burgerLettuce from './images/burger-lettuce.png';
import burgerBacon from './images/burger-bacon.png';
import burgerCheese from './images/burger-cheese.png';
import burgerMeat from './images/burger-meat.png';

export default function BurgerImage({ingredientCounts}){

    
    const[isDisplayNoIngredient,setIsDisplayNoIngredient] = useState(true);

    //#region Function to check if any ingredient is present 
    const anyIngredients = () => {
    console.log("any Ingredients called");
       for(let prop of Object.keys(ingredientCounts)){
        console.log(prop  + " : " + ingredientCounts[prop]);
          if(ingredientCounts[prop]!==0){
            return true;
          }
       }
       return false;
  }
  //#endregion

    const setIsDisplayNoIngredientStatus = () => {
        console.log(" setIsDisplayNoIngredientStatus called");
        if(!anyIngredients()){
          console.log("ingredient not present");
          setIsDisplayNoIngredient(true);
        }else{
          console.log("ingredient present");
          setIsDisplayNoIngredient(false);
        }
      }

      const Lettuce = 'Lettuce';
      const Bacon = 'Bacon';
      const Cheese = 'Cheese';
      const Meat = 'Meat';

      const [lettuceImage, setLettuceImage] = useState([]); 
      const [baconImage, setBaconImage] = useState([]); 
      const [cheeseImage, setCheeseImage] = useState([]); 
      const [meatImage, setMeatImage] = useState([]);

      const addIngredientImage = (ingredient,counter) => {
        let imagePath;
        let setMethod;
        let ingredientImage=[];
        if(ingredient===Lettuce){
            imagePath=burgerLettuce;
            setMethod=setLettuceImage;
          }else if(ingredient===Cheese){
            imagePath=burgerCheese;
            setMethod=setCheeseImage;
          }else if(ingredient===Bacon){
            imagePath=burgerBacon;
            setMethod=setBaconImage;
          }else if(ingredient===Meat){
            imagePath=burgerMeat;
            setMethod=setMeatImage;
          }
          for(let i = 0 ; i < counter ; i++){
            ingredientImage.push(imagePath);
          }
          console.log(ingredientImage);
          setMethod(ingredientImage);
      }


      const updateImage = () => {
        for(let ingredient of Object.keys(ingredientCounts)){
            console.log(ingredient  + " : " + ingredientCounts[ingredient]);
              addIngredientImage(ingredient,ingredientCounts[ingredient])
           }
      };

      const removeAllIngredientImages = () => {
        setLettuceImage([]);
        setBaconImage([]);
        setCheeseImage([]);
        setMeatImage([]);
      };

    useEffect( () => {
        console.log("Burger image use effect called");
        console.log(ingredientCounts);
        setIsDisplayNoIngredientStatus();
        removeAllIngredientImages();
        if(anyIngredients()){
            updateImage();
        }
      } ,[ingredientCounts]);

    return (
        <React.Fragment>
        <div className='burger-container'>
        <div className="burger"> 
            <img className='burger-parts' src={burgerBreadTop}  alt="Burger Bread Top"/>

            {lettuceImage.map((part, index) => (
           <img className='burger-parts' key={index} src={part} alt={`Burger Part ${index}`} />
        ))} 
        {baconImage.map((part, index) => (
           <img className='burger-parts' key={index} src={part} alt={`Burger Part ${index}`} />
        ))} 
        {cheeseImage.map((part, index) => (
           <img className='burger-parts' key={index} src={part} alt={`Burger Part ${index}`} />
        ))} 
        {meatImage.map((part, index) => (
           <img className='burger-parts' key={index} src={part} alt={`Burger Part ${index}`} />
        ))}
            {isDisplayNoIngredient  &&
        <p className='no-ingredients'>
             No Ingredients Added 
        </p> }
            <img src={burgerBreadBottom}  alt="Burger Bread Bottom"/>  
            </div>
        </div>
        </React.Fragment>
    );

}
/*

<div className='burger-container'>
      <div className="burger"> 
        <img className='burger-parts' src={burgerBreadTop}  alt="Burger Bread Top"/> 
        
		    
        {lettuceImage.map((part, index) => (
           <img className='burger-parts' key={index} src={part} alt={`Burger Part ${index}`} />
        ))} 
        {baconImage.map((part, index) => (
           <img className='burger-parts' key={index} src={part} alt={`Burger Part ${index}`} />
        ))} 
        {cheeseImage.map((part, index) => (
           <img className='burger-parts' key={index} src={part} alt={`Burger Part ${index}`} />
        ))} 
        {meatImage.map((part, index) => (
           <img className='burger-parts' key={index} src={part} alt={`Burger Part ${index}`} />
        ))} 

        {isDisplayNoIngredient  &&
        <p className='no-ingredients'>
             No Ingredients Added 
        </p> }
        
       <img src={burgerBreadBottom}  alt="Burger Bread Bottom"/> 
      </div>
      
    </div>


*/