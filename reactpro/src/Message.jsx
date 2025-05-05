export default function Message(){
    let count=0;
    function handleClick(){
        count=count+1;
        // console.log("hello world")
        console.log(count)
    }
    return(
        <div>
            <button onClick={handleClick}>Click To See The Count{handleClick}</button>
            {/* <h3>{handleClick}</h3> */}
            
        </div>
    )
}