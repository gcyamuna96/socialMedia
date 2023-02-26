import { Routes, Route } from "react-router-dom"
import Home from "../containers/home/home"
import Login from "../containers/auth/login";
import Register from "../containers/auth/register";
import ResetPassword from "../containers/auth/resetPassword";

const UserRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/resetpassword" element={ <ResetPassword/> } />
      </Routes>
    </div>
  )
}

export default UserRoutes