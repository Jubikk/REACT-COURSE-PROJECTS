
function List(props) {
  
  const category = props.category;
  const itemList = props.items;

  //fruits.sort((a, b) => a.name.localeCompare(b.name));// sort by name
  //fruits.sort((a, b) => a.calories - b.calories);// sort by calories

  //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);// filter fruits with less than 100 calories
  //const highCalFruits = fruits.filter(fruit => fruit.calories > 100);// filter fruits with more than 100 calories

  const listItems = itemList.map(item => <li key={item.id}> 
                                                 {item.name} : &nbsp; 
                                              <b>{item.calories}</b></li>);
                                                


  return (<><h3 className = "category">{category}</h3>
            <ol className = "items">{listItems}</ol> </>);


}



export default List