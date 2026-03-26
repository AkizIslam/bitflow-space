import { useState } from "react";
import api from "../api";

export default function Withdraw(){

const [amount,setAmount] = useState("")
const [crypto,setCrypto] = useState("")
const [address,setAddress] = useState("")

const withdraw = async () => {

await api.post("/api/user/withdraw",{

amount,
crypto,
address

})

alert("Withdraw Requested")

}

return(

<div style={{padding:"30px"}}>

<h2>Withdraw</h2>

<input 
placeholder="Amount"
onChange={(e)=>setAmount(e.target.value)}
/>

<br/><br/>

<input 
placeholder="Crypto (BTC/USDT)"
onChange={(e)=>setCrypto(e.target.value)}
/>

<br/><br/>

<input 
placeholder="Wallet Address"
onChange={(e)=>setAddress(e.target.value)}
/>

<br/><br/>

<button onClick={withdraw}>
Withdraw
</button>

</div>

)

}