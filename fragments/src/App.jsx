import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./FoodItems";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";
import "./App.css";
import FoodInput from "./FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setFoodItems] = useState([
    "Pulses",
    "Salad",
    "Vegetables",
    "Milk",
  ]);

  const handleInput = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      console.log("Food item entered is " + newFoodItem);
      setFoodItems(newItems);
    }
  };

  return (
    <Container>
      <h1 className="foodHeading">Healthy Food Items</h1>
      <ErrorMessage item={foodItems}></ErrorMessage>
      <FoodInput handleInput={handleInput} />
      <FoodItems item={foodItems} />
    </Container>
  );
}

export default App;
