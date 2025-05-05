import Fruit from "./fruit.jsx"
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
              <Fruit key={fruit.name} name= {fruit.name} emoji={fruit.emoji} price={fruit.price}/>
            )) 
        }
    
</ul>
}