import React, { useState, useEffect } from 'react';

function MyComponent() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  window.addEventListener("resize",handleResize);
  console.log("EVENT LISTENER ADDED"); 

  function handleResize () {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

  }

  return(<>

    <p>Window width: {width}px</p>
    <p>Window height: {height}px</p>  

</>);
}

export default MyComponent