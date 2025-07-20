import React, { useState } from "react";


function ToDoList (){
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");


  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask () {

    if(newTask.trim() !== ""){
      setTask(prevTask =>[...task, newTask])
      setNewTask("");
    }
  }

  function deleteTask (index) {

    const UpdatedTasks = task.filter((_,i) => i !== index);
    setTask(UpdatedTasks);
  }

  function moveTaskUp (index) {
    if(index > 0 ) {
      const UpdatedTasks = [...task];
      [UpdatedTasks[index], UpdatedTasks[index -1]] = 
      [UpdatedTasks[index - 1],UpdatedTasks[index]];
      setTask(UpdatedTasks);
    }
  }

  function moveTaskDown (index) {
    if(index < task.length - 1 ) {
      const UpdatedTasks = [...task];
      [UpdatedTasks[index], UpdatedTasks[index + 1]] = 
      [UpdatedTasks[index + 1],UpdatedTasks[index]];
      setTask(UpdatedTasks);
    }

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

    <ol>
      {task.map((task,index)=> <li key={index}>
        <span className= "text">{task} </span>

        <button className="delete-button" onClick={ () => deleteTask(index)}> Delete </button>

        <button className="move-button" onClick={ () => moveTaskUp(index)}> ⬆️</button>
        <button className="move-button" onClick={ () => moveTaskDown(index)}> ⬇️</button>
      </li>)}
    </ol>
  
  </div>
  );

}

export default ToDoList