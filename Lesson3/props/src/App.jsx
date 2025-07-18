import Student from './Student.jsx';


function App() {
  return (
    <>
    <Student name = "Spongebob" age = {25} isStudent = {true}/>
    <Student name = "Patrick" age = {22} isStudent = {false}/>
    <Student name = "Squidward" age = {30} isStudent = {false}/>
    <Student name = "Sandy" age = {24} isStudent = {true}/>
    </>
  );
}

export default App
