import Fruit from "./fruit.jsx"
export default function Fruits(){
// const fruits=["apple","banana","watermelon","pineapple"]//
//array with the objects inside it
const fruits=[
    {
        name:"Apple",
        price:10,
        emoji:"🍎"
    },
    {
        name:"Banana",
        price:20,
        emoji:"🍌"
    },
    {
        name:"Pineapple",
        price:30,
        emoji:"🍍"
    },
]

// to present those with price less than 10 or just use ternary operator
// const low_cost_fruit=[]
// for(let i=0;i<fruits.length;i++){
//     if(fruits[i].price>10){
//         low_cost_fruit.push(fruits[i]);
//     }
// }
return <ul>
        {
            fruits.map((fruit)=>(
              <Fruit key={fruit.name} name= {fruit.name} emoji={fruit.emoji} price={fruit.price}/>
            )) 
        }
    
</ul>
}