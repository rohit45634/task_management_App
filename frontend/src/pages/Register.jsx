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

function Register(){

const navigate=
useNavigate();

const[data,setData]=
useState({

name:"",
email:"",
password:""

});

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

await axios.post(

"http://localhost:5000/api/auth/register",

data

)

navigate("/")

}

return(

<div>

<h1>
Register
</h1>

<form
onSubmit={
handleSubmit
}
>

<input

name="name"

placeholder="Name"

onChange={
handleChange
}

/>

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

Register

</button>

</form>

</div>

)

}

export default Register;