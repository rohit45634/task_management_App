import {
 BrowserRouter,
 Routes,
 Route,Navigate
} from "react-router-dom";

import Login from "./pages/Login.jsx";

import Register from "./pages/Register.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx"
function App(){
            const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );


return(

<BrowserRouter>

<Routes>
<Route
path="/"
element={<Home/>}
/>
<Route
path="/login"
element={<Login/>}
/>

<Route
path="/register"
element={<Register/>}
/>



<Route
  path="/dashboard"

  element={
    user
      ? <Dashboard />
      : <Navigate to="/" replace />
  }
/>

</Routes>

</BrowserRouter>

)

}

export default App;