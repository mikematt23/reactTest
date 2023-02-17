import Card from "./Card"


const Error = (props)=>{

  const onSet = ()=>{
    props.onSet(1)
  }

  return (
    <Card>
      <h1>ERROR!</h1>
      <h4>Please enter a name an age</h4>
      <button onClick={onSet} >Close</button>
    </Card>
  )
}

export default Error 