import { MdDelete } from "react-icons/md";
import styles from "./ToDoItem.module.css";
function ToDoItem({ ToDoItem, ToDoDate, handleDeleteButton }) {
  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-sm-6">{ToDoItem}</div>
          <div className="col-sm-4">{ToDoDate}</div>
          <div className="col-sm-2">
            <button
              type="button"
              className={styles.deleteButton}
              onClick={() => handleDeleteButton(ToDoItem)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
