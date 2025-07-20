import React, {useState, useEffect, useRef} from 'react'

function MyComponent () {
  
  let [number, setNumber] = useState(0);

  useEffect(() => {
      console.log("COMPONENT RENDERED");
  
  });

  function handleClick() {
    setNumber(prevnum => prevnum + 1);
  }

  return (<button onClick={handleClick}>Click me!</button>
  );
}

export default MyComponent