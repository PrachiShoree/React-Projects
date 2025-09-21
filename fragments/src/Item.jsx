const Item = ({ foodItems, bought, handleBuyButtonClick }) => {
  return (
    <li className={`list-group-item kg-item ${bought && "active"}`}>
      <span className="kg-span">{foodItems}</span>
      <button
        type="button"
        className="btn btn-light"
        onClick={handleBuyButtonClick}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
