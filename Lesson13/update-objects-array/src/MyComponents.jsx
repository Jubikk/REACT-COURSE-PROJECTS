import React, { use, useState } from 'react';

function MyComponent() {

  const[cars, setCars] = useState([]);
  const[carYear, setcarYear] = useState(new Date().getFullYear());
  const[carMake, setcarMake] = useState("");
  const[carModel, setCarModel] = useState("");



  function handleAddCar () {
    const newCar = {year: carYear, make: carMake, model: carModel};
    

    setCars(prevCars => [...cars, newCar]);

    setcarYear(new Date().getFullYear());
    setcarMake("");
    setCarModel("");

  }

  function handleRemoveCar (index) {
    setCars(prevCars => prevCars.filter((car, i) => i !== index));

  }

  function handleYearChange(event){
    setcarYear(event.target.value);

  }

  function handleMakeChange(event){
    setcarMake(event.target.value);
  
  }

  function handleModelChange(event){
    setCarModel(event.target.value);
  
  }

  return (
  <div>
    <h2> List of Car Objects</h2>
    <ul>
      {cars.map((car, index) => <li className= "remove-car" key ={index} onClick = {() => handleRemoveCar(index)}> {car.year} {car.make} {car.model} </li>)}
    </ul>
    <div className= "input-field">
    <input type= "number" value = {carYear} onChange={handleYearChange}/> <br/>
    <input type= "text" value = {carMake} onChange={handleMakeChange} placeholder= " Enter Car Make"/> <br/>
    <input type= "string" value = {carModel} onChange={handleModelChange} placeholder= " Enter Car Model"/> <br/>
    <button onClick = {handleAddCar} >Add Car</button>
    </div>
  </div>
  
  
);

}

export default MyComponent