import Code from "./code.jsx";
export default function ConditionComponent(){
const display=true;
// if(display){
//     return <div>
//         <h3>not good</h3>
//     </div>}
//     else{
//         return <div>
//             <h3>good</h3>
//         </div>
//     }

//if you want to display the code component if the condition is false
// if(display){
//     return (
//         <Code/>
//     )
    
// }
//in javascript or let's just day in react component returning only one is the good practise so we use the term of *ELEMENT* variable here where we can store the values of html or the other component and then return it single time
let message;
if(display){
    message=<Code/>
}
else{
    message="blahhh"
}
return message;

}