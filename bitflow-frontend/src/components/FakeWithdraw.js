import { useEffect, useState } from "react"

export default function FakeWithdraw(){

const [data,setData] = useState([])

useEffect(()=>{

const interval = setInterval(()=>{

setData(prev=>[

{

user:"User"+Math.floor(Math.random()*999),
amount:(Math.random()*500).toFixed(2)

},

...prev

].slice(0,6))

},3000)

return ()=>clearInterval(interval)

},[])


return(

<div>

<h3>Recent Withdraw</h3>

{data.map((d,i)=>(

<div key={i}>

{d.user} withdrew ${d.amount}

</div>

))}

</div>

)

}