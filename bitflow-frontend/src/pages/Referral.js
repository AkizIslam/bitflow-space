import { useEffect, useState } from "react"
import api from "../api"

export default function Referral(){

const [data,setData] = useState(null)

useEffect(()=>{

api.get("/api/user/referral")
.then(res=>{

setData(res.data)

})

},[])

if(!data) return <h2>Loading...</h2>

return(

<div style={{padding:"30px"}}>

<h2>Referral</h2>

<p>Your Link</p>

<input
value={data.link}
readOnly
style={{width:"100%"}}
/>

<br/><br/>

<h3>Total Referrals : {data.total}</h3>

</div>

)

}