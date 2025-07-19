
function List() {

  const fruits = ["banana", "apple", "orange", "kiwi", "mango"];

  const listItems = fruits.map(fruit => <li> {fruit}</li>);

  return (<ol>{listItems}</ol>);

}

export default List