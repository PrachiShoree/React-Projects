import styles from "./FoodInput.module.css";

const FoodInput = (props) => {
  return (
    <center>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        className={styles.inputBox}
        onKeyDown={props.handleInput}
      ></input>
    </center>
  );
};

export default FoodInput;
