import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ item }) => {
  let [activeItems, SetActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    SetActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Item
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClick={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
