import UserGreeting from "./UserGreeting.jsx";


function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="B1Kjuu" />
      <UserGreeting isLoggedIn={false} username="Sir Deo"/>
      <UserGreeting />
    </>
  );
}

export default App
