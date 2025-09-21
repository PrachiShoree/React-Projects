function ToDoItems1() {
  let ToDoItem = "Buy Milk";
  let ToDoDate = "21/06/25";

  return (
    <>
      <div className="container">
        <div class="row kg-row">
          <div class="col-sm-6">{ToDoItem}</div>
          <div class="col-sm-4">{ToDoDate}</div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoItems1;
