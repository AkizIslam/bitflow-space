import { useState, useEffect } from "react";
import api from "../api";

export default function AdminCrypto(){

const [name,setName] = useState("");
const [address,setAddress] = useState("");

const [list,setList] = useState([]);

const fetch = async () => {

const res = await api.get("/api/user/crypto");

setList(res.data);

};

useEffect(()=>{

fetch();

},[])


const addCrypto = async () => {

await api.post("/api/admin/add-crypto",{

name,
address

})

setName("");
setAddress("");

fetch();

}


return(

<div style={{padding:"30px"}}>

<h2>Crypto Wallet Admin</h2>

<br/>

<input
placeholder="Crypto Name (BTC)"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Wallet Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
/>

<br/><br/>

<button onClick={addCrypto}>
Add Crypto
</button>

<br/><br/>

<h3>Wallet List</h3>

{list.map(item=>(

<div key={item._id}>

<p>{item.name}</p>

<p>{item.address}</p>

<hr/>

</div>

))}

</div>

)

}