import React from 'react';
import './Ingredient.css';

export default function Ingredients({name,removeIngredient,
    addIngredient,getCounter }){
    const lessbtn = "Less";
    const morebtn = "More";
    
       return (
        <React.Fragment>  
             <div className='ingredients-block'>
                <p className='ingredient-name'>{name}</p>
                <button className="less-btn" 
                        onClick={() => removeIngredient(name)}
                        disabled={getCounter(name) ? false : true}>
                          {lessbtn}
               </button>
                <button className='more-btn' 
                        onClick={() => addIngredient(name)}>
                           {morebtn} 
                </button>
                <p className='ingredient-name'>{getCounter(name)}</p>
             </div>
            </React.Fragment>
       );
    }