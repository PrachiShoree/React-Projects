const ErrorMessage = ({ todoThings }) => {
  return <>{todoThings.length === 0 ? <h3>Enjoy Your Day!</h3> : null}</>;
};

export default ErrorMessage;
