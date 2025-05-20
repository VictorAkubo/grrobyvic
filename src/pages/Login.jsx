import React, { useEffect, useState } from 'react'
import "../styles/Login.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState("")
    const [email, setEmail] = useState("");
    const [sign, setSign] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const authenticated = localStorage.getItem("access_token")
    useEffect(() => {
        authenticated && navigate("/")
    }, [])
    const HandleLogin = async () => {
        try {
            console.log(password)
            setSign(true)
            const response = await axios.post("https://grro-130ba33f07e0.herokuapp.com/api/v1/authorization/login/", {
                email,
                password
            });
            const access = response.data.auth.access;
            console.log(access)
            // Store tokens in localStorage (or sessionStorage)
            localStorage.setItem("access_token", access);
            console.log("Logged in and tokens saved!");

            navigate("/")
        } catch (error) {
            setError(error.response?.data.status_code);
            setSign(false)
        }
    }



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
                    <input type="email" id="email" placeholder="Enter Email Address" onChange={(e) => setEmail(e.target.value)} className="email" />
                </div>
                <div onClick={() => setInput("inputpassword")} className={` ${input === "inputpassword" ? "activepassword" : "passwordinput"}`} >
                    <div>
                        {
                            input === "inputpassword" && <label for="email">Password</label>
                        }
                        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="password" />
                    </div>
                    <h3>Show</h3>
                </div>
                <h5 className="forgotpassword" onClick={() => navigate("/forgottenpassword")}> Forgot Password ?</h5>
                <div className={sign ? "loading" : "registerbtn"} onClick={HandleLogin}>{sign && <span className="spinner"></span>}Sign in</div>
                {error &&
                    <div className={`delete-modal  ${error ? "slide-in" : "slide-out"}`}>
                        <div className="successanddeleteimagedivforlogin">
                            <p>
                                !
                            </p>
                        </div>
                        <div className="modal-content-forsuccessanddelete">
                            <h3>Error!</h3>
                            <p>{error}</p>
                        </div>

                        <div className="closesuccessanddeletemodal">

                            <img
                                src="/cancel.svg"
                                alt="Close"
                                className="close-btn"
                                onClick={() => setError(null)}
                            />
                        </div>

                    </div>
                }
            </div>
            <img className='sideimage' src="/logingreenimage.png" alt='' />
        </div>
    )
}

export default Login