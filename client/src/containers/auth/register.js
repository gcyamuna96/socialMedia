import React from 'react'
import './auth.css'

function Register(){
    return(
        <div className="form">
            <form className="infoForm">
                <h2>Create an Account</h2>
                <div>
                    <input type="text" placeholder="First Name" className="infoInput" name="firstname"/><br/>
                    <input type="text" placeholder="Last Name" className="infoInput" name="lastname"/><br/>
                    <input type="text" placeholder="User Name" className="infoInput" name="username"/><br/>
                    <input type="text" placeholder="Email Id" className="infoInput" name="email"/><br/>
                    <input type="text" placeholder="Password" className="infoInput" name="password"/><br/>
                    <input type="text" placeholder="Reset Password" className="infoInput" name="confirmpassword"/>

                </div>
                <div>
                    <span>Already have an account. Login</span>
                </div>
                <button className="button">Register</button>
            </form>
        </div>
    )
}

const Auth = () => {
    return(
        <div className="Auth">
            <Register/>
        </div>
    )
}
export default Auth;