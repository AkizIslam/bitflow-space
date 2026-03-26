import { useEffect, useState } from "react";

export default function RecentTrades(){

const [trades,setTrades] = useState([]);

useEffect(()=>{

const interval = setInterval(()=>{

setTrades(prev=>[

{

user:"User"+Math.floor(Math.random()*1000),

profit:(Math.random()*10).toFixed(2)

},

...prev

].slice(0,6))

},2000)

return ()=>clearInterval(interval)

},[])


return(

<div>

<h3>Recent Trades</h3>

{trades.map((t,i)=>(

<div key={i}>

{t.user} earned ${t.profit}

</div>

))}

</div>

)

}