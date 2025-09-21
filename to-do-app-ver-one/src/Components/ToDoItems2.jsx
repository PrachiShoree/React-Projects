function ToDoItems2() {
  let ToDoItem = "Go To College";
  let ToDoDate = "25/07/25";
  return (
    <>
      <div class="container">
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

export default ToDoItems2;
