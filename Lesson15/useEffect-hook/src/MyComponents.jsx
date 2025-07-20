import React, { useState, useEffect } from 'react';

function MyComponent() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Red");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count]);

  
  function addCount () {
    setCount(prevCount => prevCount + 1);
  }

  function subtractCount () {
    setCount(prevCount => prevCount - 1);
  }

  function changeColor () {
    setColor(prevColor => prevColor === "Red" ? "Green" : "Red");
  }


  return (<> 
    <p style = {{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button> <br/>
    <button onClick={changeColor}> Change Color</button>
    
    

  </>
);

}

export default MyComponent