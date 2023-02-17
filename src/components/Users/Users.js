import Card from "../UI/Card"
import "./Users.css"

const User = (props)=>{
  console.log(props.users)
  return(
   <Card>
     {props.users.map((user)=>{
      return <Card className = "userCard">{user.name}</Card>
     })}
   </Card>
  )
}

export default User