import styles from "./Error.module.css";
const ErrorMessage = ({ item }) => {
  return (
    <>
      {item.length === 0 ? (
        <h3 className={styles.error}>I am still hungry. </h3>
      ) : null}
    </>
  );
};

export default ErrorMessage;
