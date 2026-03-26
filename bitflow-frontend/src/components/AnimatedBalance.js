import { useEffect, useState } from "react";

export default function AnimatedBalance({balance}){

const [display,setDisplay] = useState(0);

useEffect(()=>{

let start = 0;

const interval = setInterval(()=>{

start += balance/20;

if(start >= balance){

start = balance;

clearInterval(interval);

}

setDisplay(start);

},50)

},[balance])


return(

<h2>

Balance : ${display.toFixed(2)}

</h2>

)

}