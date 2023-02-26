import React from 'react'
import './auth.css'

function Login(){
    return(
        <div className="form">
            <form className="infoForm">
                <h2>Log into your Account</h2>
                <div>
                    <input type="text" placeholder="User Name" className="infoInput" name="username"/><br/>
                    <input type="text" placeholder="Password" className="infoInput" name="password"/>

                </div>
                <div>
                    <span>Don't have an account. Register Here</span>
                </div>
                <button className="button">Login</button>
            </form>
        </div>
    )
}

const Auth = () => {
    return(
        <div className="Auth">
            <Login/>
        </div>
    )
}
export default Auth;