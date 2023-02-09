import { useState } from 'react';

import UserCard from './components/UserInput/UserCard';
import './App.css';

function App() {
  
  const [users, setUsers] = useState([])

  const onAddUser = (data)=>{
    setUsers((prevUsers)=>{
      return [data, ...prevUsers]
    })
    console.log(users)
  }
  
  return (
    <div className="App">
       <h1>here</h1>
       <UserCard onAddUser = {onAddUser}/>
    </div>
  );
}

export default App;
