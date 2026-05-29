import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {

const navigate=useNavigate()

return(

<div className="home">

<div className="overlay">

<nav className="navbar">

<h1>

TaskFlow

</h1>

<div className="navButtons">

<button
onClick={()=>
navigate("/login")
}
>

Login

</button>

<button
onClick={()=>
navigate("/register")
}
>

Register

</button>

</div>

</nav>

<div className="hero">

<h1>

Manage Your Tasks Smarter 🚀

</h1>

<p>

Organize, track and complete your daily tasks with ease.

</p>

<div className="heroButtons">

<button
className="startBtn"
onClick={()=>
navigate("/register")
}
>

Get Started

</button>

<button
className="loginBtn"
onClick={()=>
navigate("/login")
}
>

Login

</button>

</div>

</div>

</div>

</div>

)

}