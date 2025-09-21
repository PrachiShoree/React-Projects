import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems1 from "./Components/ToDoItems1";
import ToDoItems2 from "./Components/ToDoItems2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="items-container">
        <ToDoItems1 />
        <ToDoItems2 />
      </div>
    </center>
  );
}

export default App;
