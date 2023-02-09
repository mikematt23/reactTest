import { useState } from "react"

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
      <div>
        <h2>here</h2>
      </div>
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