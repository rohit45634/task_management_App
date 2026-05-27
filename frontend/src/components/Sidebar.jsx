import {

MdDashboard

}
from "react-icons/md"

import {

FaTasks

}
from "react-icons/fa"

import {

BiLogOut

}
from "react-icons/bi"

function Sidebar(){

return(

<div

style={{

width:"250px",

background:"#09142B",

height:"100vh",

padding:"20px",

color:"white"

}}

>

<h3>

Task Manager

</h3>

<div
className="mt-5"
>

<p>

<MdDashboard/>

Dashboard

</p>

<p>

<FaTasks/>

All Tasks

</p>

<p>

+ Add Task

</p>

<p>

✓ Completed

</p>

<p>

⭐ Important

</p>

</div>

<div
style={{

position:"absolute",

bottom:"20px"

}}
>

<BiLogOut/>

Logout

</div>

</div>

)

}

export default Sidebar