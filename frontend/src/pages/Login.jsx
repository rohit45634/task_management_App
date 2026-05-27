import {
useState
}
from "react";

import axios
from "axios";

import {
useNavigate
}
from "react-router-dom";

function Login(){

const navigate=
useNavigate();

const[data,setData]=
useState({

email:"",
password:""

})

const handleChange=
(e)=>{

setData({

...data,

[e.target.name]:
e.target.value

})

}

const handleSubmit=
async(e)=>{

e.preventDefault();

const result=
await axios.post(

"http://localhost:5000/api/auth/login",

data

)

localStorage.setItem(

"token",

result.data.token

)

navigate(
"/dashboard"
)

}

return(

<div>

<h1>
Login
</h1>

<form
onSubmit={
handleSubmit
}
>

<input

name="email"

placeholder="Email"

onChange={
handleChange
}

/>

<input

type="password"

name="password"

placeholder="Password"

onChange={
handleChange
}

/>

<button>

Login

</button>

</form>

</div>

)

}

export default Login;