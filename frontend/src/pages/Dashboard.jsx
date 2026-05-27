import { useState } from "react";
import "./dashboard.css";

export default function Dashboard() {

const [page,setPage]=useState("dashboard")

const tasks=[

{
id:1,
title:"Learn React",
priority:"High",
status:"Pending"
},

{
id:2,
title:"Task Manager",
priority:"Medium",
status:"Completed"
}

]

return(

<div className="container">

{/* Sidebar */}

<div className="sidebar">

<h2>TaskFlow</h2>

<div onClick={()=>
setPage("dashboard")
}>
Dashboard
</div>

<div onClick={()=>
setPage("task")
}>
Task
</div>

<div onClick={()=>
setPage("add")
}>
Add Task
</div>

<div onClick={()=>
setPage("completed")
}>
Completed
</div>

</div>

{/* Main */}

<div className="main">

{/* DASHBOARD */}

{

page==="dashboard"

&&

<>

<div className="top">

<h1>

Good Morning Rohit 👋

</h1>

</div>

<div className="cards">

<div className="card">

<h4>

Total Task

</h4>

<h1>

128

</h1>

</div>

<div className="card">

<h4>

Completed

</h4>

<h1>

86

</h1>

</div>

<div className="card">

<h4>

Progress

</h4>

<h1>

32

</h1>

</div>

<div className="card">

<h4>

Overdue

</h4>

<h1>

10

</h1>

</div>

</div>

<div className="chartBox">

<h2>

Task Overview Chart

</h2>

</div>

<div className="bottomGrid">

<div className="barChart">

Project Chart

</div>

<div className="activity">

Recent Activity

</div>

</div>

</>

}

{/* TASK */}

{

page==="task"

&&

<div>

<h2>

All Tasks

</h2>

<table>

<thead>

<tr>

<th>
Task
</th>

<th>
Priority
</th>

<th>
Status
</th>

</tr>

</thead>

<tbody>

{

tasks.map(

task=>

<tr
key={task.id}
>

<td>

{task.title}

</td>

<td>

{task.priority}

</td>

<td>

{task.status}

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

<h2>

Add Task

</h2>

<input

placeholder="Task Name"

/>

<button>

Add

</button>

</div>

}

{/* COMPLETED */}

{

page==="completed"

&&

<div>

<h2>

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
key={task.id}
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