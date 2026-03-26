import { useEffect, useState } from "react";
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";

export default function TradingChart(){

const [data,setData] = useState([]);

useEffect(()=>{

const interval = setInterval(()=>{

setData(prev=>[

...prev,

{
time: new Date().toLocaleTimeString(),
profit: Math.random()*100
}

].slice(-10))

},3000)

return ()=>clearInterval(interval)

},[])


return(

<div style={{height:"300px"}}>

<h3>Live Trading Chart</h3>

<ResponsiveContainer width="100%" height="100%">

<LineChart data={data}>

<XAxis dataKey="time"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="profit"
stroke="#00c853"
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}