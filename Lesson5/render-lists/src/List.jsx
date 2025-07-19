
function List() {

  const fruits = [{id:1, name:"banana", calories: 60}, 
                  {id:2, name:"apple", calories: 75}, 
                  {id:3, name:"orange", calories: 54}, 
                  {id:4, name:"kiwi", calories: 105}, 
                  {id:5, name:"mango", calories: 150}];

  //fruits.sort((a, b) => a.name.localeCompare(b.name));// sort by name
  //fruits.sort((a, b) => a.calories - b.calories);// sort by calories

  //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);// filter fruits with less than 100 calories
  //const highCalFruits = fruits.filter(fruit => fruit.calories > 100);// filter fruits with more than 100 calories

  const listItems = highCalFruits.map(highCalFruits => <li key={highCalFruits.id}> 
                                                                   {highCalFruits.name} : &nbsp; 
                                                                <b>{highCalFruits.calories}</b></li>);


  return (<ol>{listItems}</ol>);


}



export default List