import {useState} from "react"

import "./Form.css"

const Form = (props)=>{

  const [userName,setUserName] = useState('')
  const [age,setAge] = useState('')

  const UserNameHandler = (event)=>{
    setUserName(event.target.value)
  }
  const AgeHandler = (event)=>{
    setAge(event.target.value)
  }
  const formHandler = (e)=>{
    e.preventDefault()
    if(userName.length != 0 && age.length != 0){
      props.onAddUser({name:userName, age: age})
    }else{
      props.onSet(0)
    }
  }

   return(
      <form onSubmit={formHandler} className = "form">
        <div className="form-item">
          <label>User Name</label>
          <input onChange={UserNameHandler} type= 'text'/>
        </div>
        <div className="form-item">
          <label>Age(Years)</label>
          <input onChange={AgeHandler} type= "number"/>
        </div>
        <div className="form-item">
          <button type ="submit">Add User</button>
        </div>
    </form>
   )
}

export default Form