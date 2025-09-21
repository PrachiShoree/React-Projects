function CurrentTime() {
  let time = new Date();
  return (
    <>
      <h5>
        This is the current time: {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </h5>
    </>
  );
}

export default CurrentTime;
