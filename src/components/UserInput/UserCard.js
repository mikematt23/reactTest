import { useState } from "react"
import Error from "../UI/Error"
import Card from "../UI/Card"
import Form from "./Form"


const UserCard = (props)=>{
  const [controller, setController]= useState(1)

  const onSet = (num)=>{
     setController(num)
  }

  const onAddUser = (data)=>{
     props.onAddUser(data)
  }

  if(controller === 0){
    return (
        <Error onSet = {onSet}></Error>
    )
  }
  return(
    <div>
      <Card>
        <Form onSet = {onSet} onAddUser={onAddUser}/>
      </Card>
    </div>
  )
}

export default UserCard