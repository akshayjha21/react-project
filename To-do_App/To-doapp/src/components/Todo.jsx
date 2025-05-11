import { useState } from "react"
import Todolist from "./Todolist.jsx";

export function Todo(){
    const[todo,setTodo]=useState("")//for the normal input of only one task
    //for creating the list of todos 
    const [todos,setTodos]=useState([])
    function handlesubmit(e){
        e.preventDefault();
        if(todo.trim()==="") return;
        const newTodo = {
        id: Date.now(),  // unique ID
        text: todo
    };

        // setTodos([todo]);//this will only just print the current value of the component since react doesn't take any prev records

        //if we want to keep the prev value of the component we use spread operator "..."
        
        setTodos([...todos,newTodo])
        //now once we give the todos item we have to clear the input form do we just set the value of input form to be ""

        setTodo("");

        
    }
    // function 
    return (<div className='bg-'>
        <form onSubmit={handlesubmit}>
            <input onChange={(e)=>setTodo(e.target.value.trim())} type="text" value={todo} placeholder="Add a new task">
                </input>
            <button >Add</button>
        </form>
       {
        todos.map((item)=>
            
            <Todolist key={item.id} items={item.text}/>
        )
       }
       {console.log(todos)}
    </div>)
}