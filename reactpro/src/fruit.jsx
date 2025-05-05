export default function Fruit({emoji,name,price}){
    // const low_cost_fruit=[];
   return( <div >
    {/* {emoji}
    {name+ " "}
    {"$ "+price} */}

    {price>10?
    (<li>{emoji} {name} {price}</li>)
    :(
        ""
    )}
    </div>)
}