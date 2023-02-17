import { useState } from 'react';
import User from './components/Users/Users';
import UserCard from './components/UserInput/UserCard';
import './App.css';

function App() {
  
  const [users, setUsers] = useState([])

  const onAddUser = (data)=>{
    setUsers((prevUsers)=>{
      console.log(data)
      return [data, ...prevUsers]
    })
  }
  
  return (
    <div className="App">
       <UserCard onAddUser = {onAddUser}/>
       <User users = {users}/>
    </div>
  );
}

export default App;
