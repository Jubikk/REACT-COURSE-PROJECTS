import React, { useState } from "react";


function ToDoList (){
  const [task, setTask] = useState(["Eat breakfast", "Take a bath", "Learn more about React"]);
  const [newTask, setNewTask] = useState("");


  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask () {

  }

  function deleteTask (index) {

  }

  function moveTaskUp (index) {

  }

  function moveTaskDown (index) {

  }


  return ( <div className = "to-do-list"> 
    <h1>To-Do-List</h1>

    <div>
      <input type ="text" 
             placeholder = "Enter new task..." 
             value = {newTask} 
             onChange = {handleInputChange}/>
      <button className = "add-button" onClick= {addTask}>Add Task</button>
    </div>
  
  </div>
  );

}

export default ToDoList