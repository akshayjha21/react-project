import Hello from "./hello.jsx"
import ConditionComponent from "./conditionalcomponenent.jsx"
function App() {
  // const seatNumber=[1,2,3,4,5]//passing as an array
  //passing as an object
 const person={
    name:"akshay",
    message:"hello there",
    emoji:"😊",
   seat:[1,2,3,4,5],
  }
  return <div className="App" >
    {/* <Hello name="akshay" message="hello there" emoji="👍" seatNumber={seatNumber}/> */}
    <Hello person={person}/>
    <ConditionComponent/>
    </div>
}

export default App
