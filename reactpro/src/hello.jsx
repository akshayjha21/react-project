// function Hello(){
//     return <h1>Hello There !! How are you? </h1>
// }


//concept of props

// function Hello(props){
//     console.log(props.name);
//     return(
//         <div>
//             <h1>hello there!! {props.name}</h1>
//         </div>
//     );
// }

//destructuring the props

function Hello(props){
    return(
        <div>
            {/* <h2>
                {message} {emoji} {name} {seatNumber}
            </h2> */}
            <h2>
               {props.person.message}
            </h2>
        </div>
    )
}
export default Hello

//props are immutable 
//we can destructure the props