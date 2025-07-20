import React, {useState} from 'react';


function MyComponent() {

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Spongebob");
  }

  const IncrementAge = () => {
    setAge(age + 1);
  }
  const DecrementAge = () => {
    setAge(age - 1);
  }

  const setEmployed = () => {
    setIsEmployed(isEmployed => !isEmployed);
  }

  return(
    <div>
      <p> Name: {name}</p>
      <button onClick= {updateName}>Set name</button>

      <p> Age: {age}</p>
      <button onClick= {IncrementAge}>Increment Age</button>
      <button onClick= {DecrementAge}>Decrement Age</button>

      <p> is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick= {setEmployed}>Set Employment Status</button>
    </div>
  );

}

export default MyComponent