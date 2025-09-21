import { useState, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./AddToDo.module.css";

function AddToDo({ onNewItem }) {
  const itemValElement = useRef();
  const selectedDateElement = useRef();

  const handleOnClick = () => {
    const itemVal = itemValElement.current.value;
    const selectedDate = selectedDateElement.current.value;
    console.log(`name: ${itemVal} due on: ${selectedDate}`);
    itemValElement.current.value = "";
    selectedDateElement.current.value = "";
    onNewItem(itemVal, selectedDate);
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-sm-6">
          <input
            ref={itemValElement}
            type="text"
            placeholder="Enter ToDo Here"
          />
        </div>
        <div className="col-sm-4">
          <input ref={selectedDateElement} type="date" />
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className={styles.addButton}
            onClick={handleOnClick}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
