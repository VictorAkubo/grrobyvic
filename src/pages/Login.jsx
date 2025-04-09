import React, { useState } from 'react'
import "../styles/Login.css"

const Login = () => {
    const [input, setInput] = useState("")
    return (
        <div className='login'>
            <div className="form">
                <h2 className='logo'>GRRO</h2>
                <div className="headingwelcome">
                    <h1 className='welcometext'>Hi, Welcome Back</h1>
                    <p className="instruction">Please fill in your details to get access</p>
                </div>
                <div className="googlebtn">Sign in with Google</div>
                <div className="or">
                    <p></p>
                    <h5>or</h5>
                    <p></p>
                </div>
                <div onClick={() => setInput("inputemail")} className={`email ${input === "inputemail" ? "active" : "notactive"}`} >
                    <p>Email Address</p>
                    <input className={`${input === "inputemail" ? "active" : "notactive"}`} />
                </div>
                <div onClick={() => setInput("inputpassword")} className={`password ${input === "inputpassword" ? "active" : "notactive"}`} >
                    <input className={`${input === "inputpassword" ? "active" : "notactive"}`} />
                    <p>Show</p>
                </div>
                <h5 className="forgotpassword">Forgot Password ?</h5>
                <div className="registerbtn">Sign in</div>
                <p className="">Not Registered Yet? <span>Create an Account</span></p>
                <p>Continue as guest</p>
            </div>
            <img src="./assets/frame.png" alt='' />
        </div>
    )
}

export default Login