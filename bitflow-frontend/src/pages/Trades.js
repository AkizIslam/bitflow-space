import { useEffect, useState } from "react";
import api from "../api";

export default function Trades(){

const [trades,setTrades] = useState([]);
const [loading,setLoading] = useState(true);


const fetchTrades = () => {

api.get("/api/user/dashboard")
.then(res=>{

setTrades(res.data.trades)

setLoading(false)

})

.catch(err=>{

console.log(err)

})

}


useEffect(()=>{

fetchTrades()

const interval = setInterval(()=>{

fetchTrades()

},5000)

return () => clearInterval(interval)

},[])


return(

<div style={{padding:"30px"}}>

<h2>Live Trading</h2>

<br/>

{loading && <p>Loading Trades...</p>}


{trades.map(trade=>(

<div
key={trade._id}

style={{

border:"1px solid #ddd",
padding:"15px",
marginBottom:"10px",
borderRadius:"8px",
background:"#f8f8f8"

}}

>

<h3>Trade Running</h3>

<p>Amount : ${trade.amount}</p>

<p>Profit : ${trade.profit.toFixed(2)}</p>

<p>Status : {trade.status}</p>

</div>

))}


</div>

)

}