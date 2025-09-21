import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import "./App.css";
import { useState } from "react";
import ErrorMessage from "./Components/ErrorMessage";
import { ToDoItemsContext } from "./Store/todoItems.store";

function App() {
  let InitialtodoThings = [];

  const [todoThings, setToDoThings] = useState(InitialtodoThings);

  const handleNewItem = (itemName, itemDueDate) => {
    setToDoThings((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteButton = (toDoItemName) => {
    const newToDoItems = todoThings.filter(
      (item) => item.name !== toDoItemName
    );
    setToDoThings(newToDoItems);
    console.log(`Item Deleted: ${toDoItemName}`);
  };

  return (
    <ToDoItemsContext.Provider value={todoThings}>
      <center className="todo-container">
        <AppName />
        <AddToDo onNewItem={handleNewItem} />
        <ErrorMessage className="error-message" todoThings={todoThings} />
        <ToDoItems
          todoThings={todoThings}
          handleDeleteButton={handleDeleteButton}
        />
      </center>
    </ToDoItemsContext.Provider>
  );
}

export default App;
