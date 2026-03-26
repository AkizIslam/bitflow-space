import { useEffect, useState } from "react";
import api from "../api";

export default function LiveStats(){

const [stats,setStats] = useState({

users:0,
totalProfit:0,
trades:0

})


const fetchStats = ()=>{

api.get("/api/live/stats")

.then(res=>{

setStats(res.data)

})

}


useEffect(()=>{

fetchStats()

const interval = setInterval(()=>{

fetchStats()

},5000)

return ()=>clearInterval(interval)

},[])


return(

<div
style={{

display:"flex",
gap:"20px",
marginTop:"30px"

}}
>

<div
style={{

border:"1px solid #ddd",
padding:"20px",
borderRadius:"10px",
flex:1

}}
>

<h3>Active Users</h3>

<h2>{stats.users}</h2>

</div>


<div
style={{

border:"1px solid #ddd",
padding:"20px",
borderRadius:"10px",
flex:1

}}
>

<h3>Total Profit</h3>

<h2>${stats.totalProfit.toFixed(2)}</h2>

</div>


<div
style={{

border:"1px solid #ddd",
padding:"20px",
borderRadius:"10px",
flex:1

}}
>

<h3>Total Trades</h3>

<h2>{stats.trades}</h2>

</div>


</div>

)

}