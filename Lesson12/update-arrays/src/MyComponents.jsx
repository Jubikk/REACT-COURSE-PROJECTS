import React, { useState } from 'react';

function MyComponent() {

  const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(prevFoods => [...foods, newFood]);
  }

  function handleRemoveFood(index) {

    setFoods(foods.filter(( _,i) => i !== index));

  }



  return (<> 
  <div>
    <h2>List of Food</h2>
    <ul >
      {foods.map ((food, index) => 
      <li className= "remove-food" key={index} onClick= {() =>handleRemoveFood(index)}>{food}</li>) }
    </ul>

    <input type="text" id="foodInput" placeholder="Enter food"/>
    <button onClick= {handleAddFood}> Add Food</button>
  </div>
  </>
  
);

}

export default MyComponent