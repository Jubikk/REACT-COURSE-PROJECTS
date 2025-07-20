import React, { useState } from 'react';

function MyComponent() {

  const [count, setCount] = useState(0);


  function handleIncrement() {
    setCount(prevCount => prevCount + 1);
  }

  function handleDecrement() {
    setCount(prevCount => prevCount - 1);
  }
  
  function handleReset() {
    setCount(0);
  }



  return (
    <div>
      <h1>Counter: {count}</h1>
      <div className="button-group">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );


}

export default MyComponent