import TradingChart from "../components/TradingChart";
import AnimatedBalance from "../components/AnimatedBalance";
import RecentTrades from "../components/RecentTrades";
import LiveStats from "../components/LiveStats";
import LiveStats from "../components/LiveStats";
import { useEffect, useState } from "react";
import api from "../api";
import FakeWithdraw from "../components/FakeWithdraw"

export default function Dashboard(){

const [data,setData] = useState(null);

useEffect(()=>{

api.get("/api/user/dashboard")
.then(res=>{

setData(res.data)

})
.catch(err=>{

console.log(err)

})

},[])


if(!data){

return <h2>Loading...</h2>

}


return(

<div style={{
padding:"30px",
maxWidth:"1200px",
margin:"auto"
}}>

<h2>Dashboard</h2>

<br/>

<AnimatedBalance balance={data.user.balance}/>

<h3>Total Profit : ${data.totalProfit}</h3>

<LiveStats/>

<br/>

<TradingChart/>

<FakeWithdraw/>

<br/>

<RecentTrades/>

<br/>

<a href="/deposit">
<button>Deposit</button>
</a>

&nbsp;&nbsp;

<a href="/withdraw">
<button>Withdraw</button>
</a>

&nbsp;&nbsp;

<a href="/plans">
<button>Plans</button>
</a>

<a href="/trades">
<button>Live Trading</button>
</a>


<a href="/referral">
<button>Referral</button>
</a>

<br/><br/>

{/* Admin Panel */}

{data?.user?.role === "admin" && (

<>

<a href="/admin">
<button>Admin Panel</button>
</a>

&nbsp;&nbsp;

<a href="/admin-crypto">
<button>Crypto Wallet</button>
</a>

</>

)}


<br/><br/>


<h2>Active Plans</h2>

{data.plans.length === 0 && (

<p>No Active Plans</p>

)}


{data.plans.map(plan=>(

<div key={plan._id}

style={{

border:"1px solid #ddd",
padding:"15px",
marginBottom:"10px",
borderRadius:"8px"

}}

>

<h3>{plan.planName}</h3>

<p>Amount : ${plan.amount}</p>

<p>Daily Profit : ${plan.dailyProfit}</p>

<p>Status : {plan.status}</p>

</div>

))}



</div>

)

}