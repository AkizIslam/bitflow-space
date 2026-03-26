import { useEffect, useState } from "react";
import api from "../api";

export default function Admin() {

const [transactions, setTransactions] = useState([]);
const [loading, setLoading] = useState(true);

const fetchData = async () => {
try {

const res = await api.get("/api/admin/pending");

setTransactions(res.data);

} catch (error) {

console.log(error);

}

setLoading(false);
};

useEffect(() => {
fetchData();
}, []);


// Approve Deposit

const approveDeposit = async (id) => {

await api.post("/api/admin/approve", {
txId: id
});

fetchData();

};


// Approve Withdraw

const approveWithdraw = async (id) => {

await api.post("/api/admin/approve-withdraw", {
txId: id
});

fetchData();

};


// Reject

const reject = async (id) => {

await api.post("/api/admin/reject", {
txId: id
});

fetchData();

};


return (

<div style={{ padding: "30px" }}>

<h2>Admin Panel</h2>

<br/>

{loading && <p>Loading...</p>}

{transactions.length === 0 && !loading && (

<p>No Pending Transactions</p>

)}

{transactions.map((item) => (

<div
key={item._id}
style={{
border: "1px solid #ddd",
padding: "20px",
marginBottom: "15px",
borderRadius: "8px"
}}
>

<h3>{item.type.toUpperCase()}</h3>

<p><strong>User:</strong> {item.userEmail}</p>
<p><strong>Amount:</strong> ${item.amount}</p>
<p><strong>Crypto:</strong> {item.crypto}</p>
<p><strong>Status:</strong> {item.status}</p>

{item.address && (
<p><strong>Wallet:</strong> {item.address}</p>
)}

<br/>

{item.type === "deposit" ? (

<button
onClick={() => approveDeposit(item._id)}
>
Approve Deposit
</button>

) : (

<button
onClick={() => approveWithdraw(item._id)}
>
Approve Withdraw
</button>

)}

<button
onClick={() => reject(item._id)}
style={{ marginLeft: "10px" }}
>
Reject
</button>

</div>

))}

</div>

);

}