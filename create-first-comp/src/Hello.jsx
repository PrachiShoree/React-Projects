function Hello(){

  let myName = 'Prachi';
  let fullName = () => {
    return 'Prachi Shoree';
  }

  return <h3>
    Hello, this is me speaking. Ny name is {fullName()}.
  </h3>
}

export default Hello;