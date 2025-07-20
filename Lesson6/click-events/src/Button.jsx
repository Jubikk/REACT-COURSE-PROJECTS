
function Button () {

  const handleClick = () => console.log('Button clicked!'); 
  const handleClick2 = (name) => console.log(`${name}  Stop Clicking me!!`);


  return (<button onClick={() => handleClick2("B1Kjuu")}> Click me!</button>);

}

export default Button