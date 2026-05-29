import { useEffect, useState } from "react";
import "./dashboard.css";
import axios from "axios";
import {

LineChart,
CartesianGrid,Legend,
Line,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer,
Cell,PieChart,Pie


}

from "recharts"
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Dashboard() {

const [page,setPage]=useState(localStorage.getItem("page") || "dashboard")
const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
const [priority,setPriority]=useState("Medium")
const [tasks,setTasks]=useState([])
const [editId, setEditId] = useState(null);
const navigate = useNavigate();
const changePage = (newPage) => {   
  setPage(newPage);
  localStorage.setItem("page", newPage);
};

async function handleSubmit(e){

e.preventDefault()

if(!title || !description){

toast.error("Fill all fields")

return;

}

if (editId) {
  await axios.put(
    `http://localhost:5000/api/task/update/${editId}`,
    {
      title,
      description,
      priority
    },
    {
      withCredentials: true
    }
  );

  setEditId(null);
  fetchTasks();
  changePage("task");
  return;
}

const task={

title,

description,

priority,


}
try{

const res=

await axios.post(

"http://localhost:5000/api/task/create",

task,  {
    withCredentials: true
  }


)
setTasks(

[

...tasks,

res.data

]

)

fetchTasks()


toast.success("Task Added")

setTitle("")
setDescription("")
setPriority("Medium")

}

catch(error){

console.log(error)

toast.error("API Error")

}

}
const handleLogout = async () => {
  await axios.get(
    "http://localhost:5000/api/auth/logout",
    
    { withCredentials: true }
  );

  localStorage.removeItem("user");  
  localStorage.removeItem("page");


  navigate("/login");
};
async function fetchTasks(){

try{

const res=

await axios.get(

"http://localhost:5000/api/task/get",  {
    withCredentials: true
  }


)

setTasks(

res.data

)

}

catch(error){

console.log(error)

}

}

const overviewData=[

{
day:"Mon",
completed:4,
pending:6
},

{
day:"Tue",
completed:7,
pending:3
},

{
day:"Wed",
completed:5,
pending:5
},

{
day:"Thu",
completed:8,
pending:2
},

{
day:"Fri",
completed:6,
pending:4
},

{
day:"Sat",
completed:9,
pending:1
},

{
day:"Sun",
completed:7,
pending:3
}

]

const statusData=[

{

name:"Completed",

value:

tasks.filter(

task=>

task.status==="Completed"

).length

},

{

name:"Pending",

value:

tasks.filter(

task=>

task.status==="Pending"

).length

}

]

const COLORS=[

"#22c55e",

"#f59e0b"

]
async function deleteTask(id){

try{

await axios.delete(

`http://localhost:5000/api/task/delete/${id}`,  {
    withCredentials: true
  }


)

fetchTasks()

}

catch(error){

console.log(error)

}

}

useEffect(()=>{
  fetchTasks()
},[])
async function toggleStatus(

id,

currentStatus

){

try{

const newStatus=

currentStatus==="Pending"

?

"Completed"

:

"Pending"

await axios.put(

`http://localhost:5000/api/task/update/${id}`,
  

{

status:newStatus

},{
    withCredentials: true
  }

)

fetchTasks()

}

catch(error){

console.log(error)

}

}
const user = JSON.parse(
localStorage.getItem("user")
)
return(

<div className="container">

{/* Sidebar */}

<div className="sidebar">

<h2>TaskFlow</h2>

<div onClick={()=>
changePage("dashboard")
}>
Dashboard
</div>

<div onClick={()=>
changePage("task")
}>
Task
</div>

<div onClick={()=>
changePage("add")
}>
Add Task
</div>

<div className="completedMenu"
 onClick={()=>
changePage("completed")
}>
Completed
</div>
<button className="Logout"onClick={handleLogout} 
 >
Logout
</button>

</div>

{/* Main */}

<div className="main">

{/* DASHBOARD */}

{

page==="dashboard"

&&

<>
<div className="topBar"><div className="profile"  style={{color:"white"}}>

👤 {user?.name}

</div></div>


<div className="cards" >

<div className="card blue" >

<div className="cardTop">

<div className="iconBox">

📋

</div>



</div>

<p>

Total Tasks

</p>

<h1>

{tasks.length}


</h1>



</div>

<div className="card green">

<div className="cardTop">

<div className="iconBox">

✅

</div>



</div>

<p>

Completed

</p>

<h1>

{

tasks.filter(

task=>

task.status==="Completed"

).length

}



</h1>


</div>

<div className="card orange">

<div className="cardTop">

<div className="iconBox">

⏰

</div>



</div>

<p>

In Progress

</p>

<h1>

{

tasks.filter(

task=>

task.status==="Pending"

).length

}

</h1>



</div>

</div>

<div className="chartsContainer">

{/* LINE CHART */}

<div className="chartCard">

<div className="chartHeader">

<h2>

Task Overview

</h2>

</div>

<ResponsiveContainer
width="100%"
height={300}
>

<LineChart
data={overviewData}
>

<CartesianGrid
strokeDasharray="3 3"
stroke="#1e293b"
/>

<XAxis
dataKey="day"
stroke="#94a3b8"
/>

<YAxis
stroke="#94a3b8"
/>

<Tooltip />

<Legend />

<Line

type="monotone"

dataKey="completed"

stroke="#22c55e"

strokeWidth={3}

dot={false}

/>

<Line

type="monotone"

dataKey="pending"

stroke="#8b5cf6"

strokeWidth={3}

dot={false}

/>

</LineChart>

</ResponsiveContainer>

</div>

{/* PIE CHART */}

<div className="chartCard">

<h2>

Task Status

</h2>

<ResponsiveContainer
width="100%"
height={300}
>

<PieChart>

<Pie

data={statusData}

cx="50%"

cy="50%"

outerRadius={100}

dataKey="value"

label

>

{

statusData.map(

(entry,index)=>

<Cell

key={index}

fill={COLORS[index % COLORS.length]}

/>

)

}

</Pie>

<Tooltip />

<Legend />

</PieChart>

</ResponsiveContainer>

</div>

</div>


<div className="bottomGrid" style={{  marginTop: "2vw"}}>

<div className="upcomingBox">

<h2>

Upcoming Tasks

</h2>

{

tasks.slice(0,4).map(task=>

<div
className="taskItem"
key={task._id}
>

<h4>

{task.title}

</h4>

<p>

{task.priority} Priority

</p>

</div>

)

}

</div>
<div className="activityBox" style={{color:"white"}}>

<h2>

Recent Activity

</h2>

<div className="activityItem">

✅ Task Completed

</div>

<div className="activityItem">

📌 New Task Added

</div>

<div className="activityItem">

🗑 Task Deleted

</div>

</div>

</div>

</>

}

{/* TASK */}

{

page==="task"

&&

<div className="tasks">

<h2>

All Tasks

</h2>

<table>

<thead>

<tr>

<th style={{paddingLeft:"2vw"}}>
Task
</th>
<th>

Description

</th>
<th style={{paddingLeft:"4vw"}}>
Priority
</th>

<th style={{paddingLeft:"6vw"}}>
Status
</th>
<th  style={{paddingLeft:"5vw"}}>
Action
</th>

</tr>

</thead>

<tbody>

{

tasks.map(

task=>

<tr
key={task._id}
>

<td>

{task.title}

</td>
<td>

{task.description}

</td>

<td>

{task.priority}

</td>


<td>

{

task.status==="Pending"

?

"🟠 Pending"

:

"🟢 Completed"

}

</td>

<td>

<div className="actionButtons">

<button
className="toggleBtn" onClick={()=>{toggleStatus(task._id,

task.status)}}
>

{

task.status==="Pending"

?

"✓ Complete"

:

"↩ Pending"

}

</button>

<button
className="editBtn"
  onClick={() => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setEditId(task._id);
    changePage("add");
  }}>

✏️

</button>

<button
className="deleteBtn"onClick={()=>

deleteTask(task._id)

}
>

🗑

</button>

</div>

</td>

</tr>

)

}

</tbody>

</table>

</div>

}

{/* ADD TASK */}

{

page==="add"

&&

<div>
<div className="addTaskBox">

<h2>

Add Task

</h2>

<form
onSubmit={handleSubmit}
>

<input

type="text"

placeholder="Task Title"

value={title}

onChange={(e)=>

setTitle(
e.target.value
)

}

/>

<textarea

placeholder="Task Description"

value={description}

onChange={(e)=>

setDescription(
e.target.value
)

}

/>

<select

value={priority}

onChange={(e)=>

setPriority(
e.target.value
)

}

>

<option>

Low

</option>

<option>

Medium

</option>

<option>

High

</option>

</select>

<button type="submit">

Add Task

</button>

</form>

</div>

</div>

}

{/* COMPLETED */}

{

page==="completed"

&&

<div style={{color:"white"}}>

<h2 >

Completed Task

</h2>

{

tasks

.filter(

task=>

task.status==="Completed"

)

.map(

task=>

<p
key={task._id}
>

{task.title}

</p>

)

}

</div>

}

</div>

</div>

)

}