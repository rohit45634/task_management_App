import { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {

const navigate=useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

async function handleLogin(e){

e.preventDefault()

if(!email || !password){

toast.error("Fill all fields")

return

}

try{

const res=

await axios.post(

"http://localhost:5000/api/auth/login",

{

email,

password

},{
  withCredentials:true
}

)

const user = res.data.user
console.log("User:", user);


localStorage.setItem(
"user",
JSON.stringify(user)
)
console.log(
  localStorage.getItem("user")
);


toast.success("Login Success")

navigate("/dashboard")

}

catch(error){

console.log(error)

toast.error(    error.response?.data?.message || "Login Failed"
)

}

}

return(

<div className="loginPage">

<div className="loginCard">

<h1>

Welcome Back 👋

</h1>

<p>

Login to manage your tasks efficiently

</p>

<form
onSubmit={handleLogin}
>

<input

type="email"

placeholder="Enter Email"

value={email}

onChange={(e)=>

setEmail(e.target.value)

}

/>

<input

type="password"

placeholder="Enter Password"

value={password}

onChange={(e)=>

setPassword(e.target.value)

}

/>

<button type="submit">

Login

</button>

</form>

<div className="bottomText">

Don't have an account?

<span
onClick={()=>
navigate("/register")
}
>

 Register

</span>

</div>

</div>

</div>

)

}