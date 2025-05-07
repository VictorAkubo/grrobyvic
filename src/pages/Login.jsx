import React, { useState } from 'react'
import "../styles/Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    return (
        <div className='login'>
            <h2 className='loginlogo'><img src="/GRRO.svg" /></h2>
            <div className="form">
                <div className="headingwelcome">
                    <h1 className='welcometext'>Hi, Welcome Back</h1>
                    <p className="instruction">Please fill in your details to get access</p>
                </div>
                <div onClick={() => setInput("inputemail")} className={` ${input === "inputemail" ? "emailactive" : "emailnotactive"}`} >
                    {
                        input === "inputemail" && <label for="email">Email Address</label>
                    }
                    <input type="email" id="email" onClick={() => setActiveforgotpassword(true)} placeholder="Enter Email Address" className="email" readonly />
                </div>
                <div onClick={() => setInput("inputpassword")} className={` ${input === "inputpassword" ? "activepassword" : "passwordinput"}`} >
                    <div>
                        {
                           input === "inputpassword" && <label for="email">Password</label>
                        }
                        <input placeholder="Password" className="password" />
                    </div>
                    <h3>Show</h3>
                </div>
                <h5 className="forgotpassword" onClick={() => navigate("/forgottenpassword")}>Forgot Password ?</h5>
                <div className="registerbtn">Sign in</div>
            </div>
            <img className='sideimage' src="/logingreenimage.png" alt='' />
        </div>
    )
}

export default Login