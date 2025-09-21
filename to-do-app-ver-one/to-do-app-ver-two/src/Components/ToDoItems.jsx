import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoThings, handleDeleteButton }) => {
  return (
    <>
      <div className="items-container">
        {todoThings.map((item) => (
          <ToDoItem
            key={item.name}
            ToDoItem={item.name}
            ToDoDate={item.dueDate}
            handleDeleteButton={handleDeleteButton}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
