import { useEffect, useState } from "react";
import api from "../api";

export default function Deposit(){

const [crypto,setCrypto] = useState([]);
const [selected,setSelected] = useState("");
const [amount,setAmount] = useState("");

useEffect(()=>{

api.get("/api/user/crypto")
.then(res=>setCrypto(res.data))

},[])


const deposit = async () => {

await api.post("/api/user/deposit",{

crypto:selected,
amount

})

alert("Deposit Submitted")

}


return(

<div style={{padding:"30px"}}>

<h2>Deposit</h2>

<select onChange={(e)=>setSelected(e.target.value)}>

<option>Select Crypto</option>

{crypto.map(item=>(

<option
key={item._id}
value={item.name}
>

{item.name}

</option>

))}

</select>

<br/><br/>

<input

placeholder="Amount"
onChange={(e)=>setAmount(e.target.value)}

/>

<br/><br/>

<button onClick={deposit}>
Submit Deposit
</button>

<br/><br/>

{selected && (

<div>

<h3>Deposit Address</h3>

{

crypto
.filter(c=>c.name === selected)
.map(c=>(
<p key={c._id}>
{c.address}
</p>
))

}

</div>

)}

</div>

)

}