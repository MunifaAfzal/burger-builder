import React from "react";
import "./Orders.css";
import PrintOrder from "./PrintOrder";

export default function Orders({ ingredients, orderList }) {
  return (
    <React.Fragment>
      <div style={{ paddingTop: "30px" }}>
        {orderList.map((ingredientCounts) => (
          <PrintOrder
            ingredients={ingredients}
            ingredientCounts={ingredientCounts}
          ></PrintOrder>
        ))}
      </div>
    </React.Fragment>
  );
}
