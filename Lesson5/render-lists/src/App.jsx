import List from './List.jsx'


function App() {

  const fruits = [{id:1, name:"banana", calories: 60}, 
                  {id:2, name:"apple", calories: 75}, 
                  {id:3, name:"orange", calories: 54}, 
                  {id:4, name:"kiwi", calories: 105}, 
                  {id:5, name:"mango", calories: 150}];
  
  const vegetables = [{id:1, name:"banana", calories: 60}, 
                  {id:2, name:"apple", calories: 75}, 
                  {id:3, name:"orange", calories: 54}, 
                  {id:4, name:"kiwi", calories: 105}, 
                  {id:5, name:"mango", calories: 150}];                

  return(<List items= {fruits} category= "Fruits"/>);
}

export default App
