export default function Fruits(){
// const fruits=["apple","banana","watermelon","pineapple"]//
//array with the objects inside it
const fruits=[
    {
        name:"Apple",
        price:"$10",
        emoji:"🍎"
    },
    {
        name:"Banana",
        price:"$20",
        emoji:"🍌"
    },
    {
        name:"Pineapple",
        price:"$30",
        emoji:"🍍"
    },
]
return <ul>
        {
            fruits.map((fruit)=>(
                <li key={fruit}>
                    {fruit.emoji}
                    {fruit.name}
                    {fruit.price}
                    </li>
            ))
           
        }
    
</ul>
}