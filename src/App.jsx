import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BurgerBuilderBase from "./components/BurgerBuilderBase/BurgerBuilderBase";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import { useEffect, useState } from "react";
import OrderProcess from "./components/OrderProcess/OrderProcess";
import NoPageFound from "./components/NoPageFound/NoPageFound";

export default function App() {
  const [orderList, setOrderList] = useState([]);
  const [isLogin, setIsLogin] = useState(false); // will be false initially
  const ingredients = ["Lettuce", "Bacon", "Cheese", "Meat"];
  const [ingredientCounts, setIngredientCounts] = useState({
    Lettuce: 0,
    Bacon: 0,
    Cheese: 0,
    Meat: 0,
  });

  // Function to decrement the count for a specific ingredient
  const removeAllIngredients = () => {
    for (let ingredient of Object.keys(ingredientCounts)) {
      setIngredientCounts((prevCounts) => ({
        ...prevCounts,
        [ingredient]: 0,
      }));
    }
  };

  const updateOrderList = () => {
    let prevOrder = [...orderList];
    prevOrder.push(ingredientCounts);
    setOrderList((orders) => (orders = [...prevOrder]));
  };

  useEffect(() => {
    console.log("App useEffect called");
  }, [isLogin, ingredients, ingredientCounts, orderList]);

  return (
    <BrowserRouter>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route
          path="/"
          element={
            <BurgerBuilderBase
              isLogin={isLogin}
              ingredients={ingredients}
              ingredientCounts={ingredientCounts}
              setIngredientCounts={setIngredientCounts}
              removeAllIngredients={removeAllIngredients}
            />
          }
        />
        <Route
          path="/BurgerBuilderBase"
          element={
            <BurgerBuilderBase
              isLogin={isLogin}
              ingredients={ingredients}
              ingredientCounts={ingredientCounts}
              setIngredientCounts={setIngredientCounts}
              removeAllIngredients={removeAllIngredients}
            />
          }
        />
        <Route path="/auth" element={<Login setIsLogin={setIsLogin} />} />
        <Route
          path="/Orders"
          element={<Orders ingredients={ingredients} orderList={orderList} />}
        />
        <Route
          path="/checkout"
          element={
            <OrderProcess
              ingredients={ingredients}
              ingredientCounts={ingredientCounts}
              removeAllIngredients={removeAllIngredients}
              updateOrderList={updateOrderList}
            />
          }
        />
        <Route path="*" element={NoPageFound} />
      </Routes>
    </BrowserRouter>
  );
}
