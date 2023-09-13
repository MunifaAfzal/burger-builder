import "./BurgerBuilder.css";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import burgerBreadTop from './images/burger-bread-top.png';
import burgerBreadBottom from './images/burger-bread-bottom.png';
import burgerLettuce from './images/burger-lettuce.png';
import burgerBacon from './images/burger-bacon.png';
import burgerCheese from './images/burger-cheese.png';
import burgerMeat from './images/burger-meat.png';


const BurgerBuilder = () => {

//#region   state properties  
  const prices = {
    burger:3.00,
    Lettuce: 0.5,
    Cheese: 0.7,
    Bacon: 0.4,
    Meat: 1.3,
  }
  const [price, setPrice]=useState(prices['burger'].toFixed(2));

  const Lettuce = 'Lettuce';
  const Bacon = 'Bacon';
  const Cheese = 'Cheese';
  const Meat = 'Meat';

  const [ingredientCounts, setIngredientCounts] = useState({
    Lettuce: 0,
    Cheese: 0,
    Bacon: 0,
    Meat: 0,
  });

    const [isButtonDisabled, setIsButtonDisabled] = useState({
      Lettuce: true,
      Cheese: true,
      Bacon: true,
      Meat: true,
    });

    const[isDisplayNoIngredient,setIsDisplayNoIngredient] = useState(true);

    const [lettuceImage, setLettuceImage] = useState([]); 
    const [baconImage, setBaconImage] = useState([]); 
    const [cheeseImage, setCheeseImage] = useState([]); 
    const [meatImage, setMeatImage] = useState([]);
 //#endregion   

//#region  Function to add/remove burger part image
    const addIngredientImage = (ingredient, partImage) => {
      if(ingredient===Lettuce){
        console.log("lettuce image is going to add");
          const newBurgerParts = [...lettuceImage, partImage];
          setLettuceImage(newBurgerParts);
      }else if(ingredient===Cheese){
        console.log("Cheese image is going to add");
          const newBurgerParts = [...cheeseImage, partImage];
          setCheeseImage(newBurgerParts);
      }else if(ingredient===Bacon){
        console.log("Bacon image is going to add");
          const newBurgerParts = [...baconImage, partImage];
          setBaconImage(newBurgerParts);
      }else if(ingredient===Meat){
        console.log("Meat image is going to add");
          const newBurgerParts = [...meatImage, partImage];
          setMeatImage(newBurgerParts);
      }
    };

// Function to remove a burger part image
    const removeIngredientImage = (ingredient) => {
      if(ingredient===Lettuce){
        console.log("lettuce image is going to remove");
          const newBurgerParts = [...lettuceImage];
          newBurgerParts.pop();
          setLettuceImage(newBurgerParts);
          console.log(lettuceImage);
      }else if(ingredient===Bacon){
        console.log("Bacon image is going to remove");
          const newBurgerParts = [...baconImage];
          newBurgerParts.pop();
          setBaconImage(newBurgerParts);
          console.log(lettuceImage);
      }else if(ingredient===Cheese){
        console.log("Cheese image is going to remove");
          const newBurgerParts = [...cheeseImage];
          newBurgerParts.pop();
          setCheeseImage(newBurgerParts)
      }else if(ingredient===Meat){
        console.log("Meat image is going to remove");
          const newBurgerParts = [...meatImage];
          newBurgerParts.pop();
          setMeatImage(newBurgerParts);
      }
    };
//#endregion    

//#region Function to increment/decrement the count for a specific ingredient
const addIngredient = (ingredient,imagePath) => {
  setIsDisplayNoIngredient(false);
  addIngredientImage(ingredient,imagePath);
  console.log("Adding ingredient");
  console.log(ingredientCounts);
  setIngredientCounts((prevCounts) => ({
    ...prevCounts,
    [ingredient]: prevCounts[ingredient] + 1,
  }));
  
  console.log(ingredientCounts);
  console.log("Updated ingredient counts");
  console.log(ingredientCounts);
  setIsButtonDisabled((prevConditions) => ({
    ...prevConditions,
    [ingredient]: false,
  }));
  addPrice(ingredient); 
  console.log("Ingredient Added successfully");
};

// Function to decrement the count for a specific ingredient
const removeIngredient = (ingredient) => {
  console.log("Removing ingredient");
  if (ingredientCounts[ingredient] > 0) {
    console.log("more than 0 ingredient");
    console.log(ingredientCounts);
    removeIngredientImage(ingredient)
    setIngredientCounts((prevCounts) => ({
      ...prevCounts,
      [ingredient]: prevCounts[ingredient] - 1,
    }));
    console.log("After decrement ingredient counts");
    console.log(ingredientCounts);
    removePrice(ingredient);  
      
  }
  if(ingredientCounts[ingredient]===0){
    setIsButtonDisabled((prevConditions) => ({
      ...prevConditions,
      [ingredient]: true,
    }));
  }
   
};

const setlessIngredientButtonStatus = () => {
  console.log(" setlessIngredientButtonStatus called");
  for(let prop of Object.keys(ingredientCounts)){
    console.log(prop  + " : " + ingredientCounts[prop]);
    if(ingredientCounts[prop]===0){
      setIsButtonDisabled((prevConditions) => ({
        ...prevConditions,
        [prop]: true,
      }));
    }
   }
}

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

useEffect(() => {
  // This code will run whenever someState changes
  console.log("Use effect called");
  console.log(ingredientCounts);
  setIsDisplayNoIngredientStatus();
  setlessIngredientButtonStatus();
}, [ingredientCounts]);
//#endregion

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

const getCounter = (ingredient) => {
  console.log("Counter called " + ingredient);
  return ingredientCounts[ingredient];
}
//#region   add and remove price Calculation methods
    const addPrice = (ingredient) => {
        let ingredientsPrice = 0;
        const floatPrice= parseFloat(price);
        ingredientsPrice = prices[ingredient];
        setPrice((floatPrice+ingredientsPrice).toFixed(2));
    }

    const removePrice = (ingredient) =>{
      let ingredientsPrice = 0;
      const floatPrice= parseFloat(price);
        ingredientsPrice = prices[ingredient];
        setPrice((floatPrice-ingredientsPrice).toFixed(2));
    }

//#endregion    
    
    const Ingredient = (prop) =>{
      const lessbtn = "Less";
      const morebtn = "More";
     return(
      <>
           <div className='ingredients-block'>
              <p className='ingredient-name'>{prop.name}</p>
              <button className="less-btn" 
                      onClick={() => removeIngredient(prop.name)}
                      disabled={isButtonDisabled[prop.name]}>
                        {lessbtn}
             </button>
              <button className='more-btn' 
                      onClick={() => addIngredient(prop.name,prop.imagePath)}>
                         {morebtn} 
              </button>
              <p className='ingredient-name'>{getCounter(prop.name)}</p>
           </div>
          </>
     );
    }

  let navigate = useNavigate(); 
  const openLoginPage = () =>{ 
    let path = `/Login`; 
    navigate(path);
  }

    return(
      <>
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

      <div className='ingredients-section'>
        <p style={{margin:'16px 0px'}}> Current Price: <b>${price}</b></p>
         <Ingredient name="Lettuce"  imagePath={burgerLettuce}/> 
         <Ingredient name="Bacon" imagePath={burgerBacon}/> 
         <Ingredient name="Cheese"  imagePath={burgerCheese}/> 
         <Ingredient name="Meat" imagePath={burgerMeat}/>
          
         <div > 
            <button className='sign-up-order-btn'
                    onClick={openLoginPage}>
                       SIGN UP TO ORDER
            </button>
          </div>
      </div>
      </>
    );
  };

  

 


 
  
  export default BurgerBuilder;