import { Routes, Route } from "react-router-dom"
import Home from "../containers/home"
import Profile from "../containers/profile"
import Friends from "../containers/friends"
import Login from "../containers/auth/login";
import Register from "../containers/auth/register";
import ResetPassword from "../containers/auth/resetPassword";

const UserRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/friends" element={ <Friends/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/resetpassword" element={ <ResetPassword/> } />
      </Routes>
    </div>
  )
}

export default UserRoutes