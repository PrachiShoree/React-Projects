import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function Calculator() {
  const [calVal, setVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setVal("");
    } else if (buttonText === "=") {
      setVal(eval(calVal));
    } else {
      const newDisplayValue = calVal + buttonText;
      setVal(newDisplayValue);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default Calculator;
