import { useState } from "react"

export default function Form(){
    // const [value,setValue]=useState("")// for the single input
    const [name,setValue]=useState({firstName:"",lastName:""})// for the multiple input 
    // console.log(name.firstName)

    //one way of doing this 
    // function handleInput(e){
    //     // console.log("text appeared")
    //     setValue(e.target.value)
        
    // }

    //prevent the default save as if we click the any button in the form tag it will render everything and it will remove everything that will be given as input so to prevent it we use

    function handleClick(e){
        e.preventDefault();
        console.log(name)
    }

    return (
        <div>
            {name.firstName} - {name.lastName}
            <form>
                {/* <input onChange={(e)=>handleInput(e)} type="text" value={value}></input> */}
                <input onChange={(e)=>setValue({...name,firstName:e.target.value})} type="text" value={name.firstName}></input>
                <br/>
                <input onChange={(e)=>setValue({...name,lastName:e.target.value})} type="text" value={name.lastName}></input>
                <button onClick={(e)=>handleClick(e)}>Submit</button>
            </form>
        </div>
    )
    //since we have to make the function call as a reference not the just the function calling so we have to make the function a callback function 
}