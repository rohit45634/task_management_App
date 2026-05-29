import { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {

const navigate=useNavigate()

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

async function handleRegister(e){

e.preventDefault()

if(!name || !email || !password){

toast.error("Fill all fields")

return

}

try{


await axios.post(

"http://localhost:5000/api/auth/register",

{

name,

email,

password

}

)

toast.success("Register Success")

navigate("/login")

}

catch(error){

console.log(error)

toast.error("User Already Exists")

}

}

return(

<div className="registerPage">

<div className="registerCard">

<h1>

Create Account 🚀

</h1>

<p>

Register to start managing your tasks

</p>

<form
onSubmit={handleRegister}
>

<input

type="text"

placeholder="Enter Name"

value={name}

onChange={(e)=>

setName(e.target.value)

}

/>

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

Register

</button>

</form>

<div className="bottomText">

Already have an account?

<span
onClick={()=>
navigate("/login")
}
>

 Login

</span>

</div>

</div>

</div>

)

}