import React, { useState } from 'react'
import "../../styles/forgottenpassword/Forgotten.css"
import { useNavigate } from "react-router-dom";

const Forgotten = () => {
    const [activeforgotpassword, setActiveforgotpassword] = useState(false)
    const navigate = useNavigate();
    const verifyOTP = () => {
        navigate("/setnewpassword")
    }
    return (
        <body className='forgottenpasswordandotp'>
            <div className="loginlogo">
                <img src="/GRRO.svg" alt="Logo" />
            </div>
            <div className="forgot-password-container">
                <div className="forgot-password-box" >
                    <div className="left">
                        <div className="forgot-back-button" onClick={() => navigate("/login")}><img src='/left.svg' /> Back</div>
                        <div className='forgotpasswordanddescription'>
                            <h2>Forgot Password</h2>
                            <p>You will receive an email with your verification code</p>
                        </div>
                        <div className={` ${activeforgotpassword ? "forgotactive" : "greenlabelemailandinput"}`} >
                            {
                                activeforgotpassword && <label for="email">Email Address</label>
                            }
                            <input type="email" id="email" onClick={() => setActiveforgotpassword(true)} placeholder="Enter Email Address" className="email-input" readonly />
                        </div>
                        <div className="submitbuttonemail" onClick={() => navigate("/forgottenpasswordotp")}>Submit Email</div>
                    </div>
                    <div className="right">
                        <img src="woman.png" alt="Smiling woman" className="image" />
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p className="reserved">© 2024 Grro Fresh. All rights reserved.</p>
                <p className='contactus'>Contact Us @ info@groafresh.com</p>
                <div className="social-icons">
                    <img src="/Facebook.svg" />
                    <img src="/Instagram.svg" />
                    <img src="/X.svg" />
                    <img src="/LinkedIn.svg" />
                    <img src="/Youtube.svg" />
                </div>
            </footer>
        </body>
    )
}

export default Forgotten;