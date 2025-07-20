import List from './List.jsx'


function App() {

  const fruits = [{id:1, name:"banana", calories: 60}, 
                  {id:2, name:"apple", calories: 75}, 
                  {id:3, name:"orange", calories: 54}, 
                  {id:4, name:"kiwi", calories: 105}, 
                  {id:5, name:"mango", calories: 150}];
  
  const vegetables = [{id:1, name:"brocolli", calories: 40}, 
                  {id:2, name:"tomatoes", calories: 85}, 
                  {id:3, name:"pechay", calories: 33}, 
                  {id:4, name:"squash", calories: 110}, 
                  {id:5, name:"peas", calories: 15}];                

  return(
    <>
    {fruits.length > 0 && <List items= {fruits} category= "Fruits"/> }
    {vegetables.length > 0 && <List items= {vegetables} category= "Vegetables"/>}
    </>
    );

}

export default App
