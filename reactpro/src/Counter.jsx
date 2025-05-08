//The useState hook in React is used to create and manage state inside function components. It's one of the most important hooks, enabling your components to remember values between renders and trigger re-renders when the state changes.

import { useState } from "react"

/*
const [stateVariable, setStateFunction] = useState(initialValue);
stateVariable: The current value of the state.

setStateFunction: A function you call to update the state.//it's return type is UNDEFINED

initialValue: The default/initial value of the state.
*/

export default function Counter(){
    const [count,setCount]=useState(0);//giving the value of count=0
    const [incrementby,setIncrement]=useState(1);//giving the value of count=0
    const [decrementby,setDecrement]=useState(2);//giving the value of count=0
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    function IncrementBy(){
        let inc=parseInt(prompt("by what number you want to increment"))
        setIncrement(inc)
        setCount(count+inc);
    }
    function DecrementBy(){
        let dec=parseInt(prompt("by what number you want to decrement"))
        setDecrement(dec)
        // console.log(typeof(decv))
        setCount(count-dec)
    }


    return <div>
        <h2>Count value is: {count}</h2> 
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>

        <h2>We are incrementing the value by : {incrementby}</h2>
        <button onClick={IncrementBy}>input</button>
        <h2>We are decrementing the value by : {decrementby}</h2>
        <button onClick={DecrementBy}>input</button>
        </div>
}