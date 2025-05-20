import React, { useState } from 'react'
import "../../styles/forgottenpassword/Forgotten.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Forgotten = () => {
    const [activeforgotpassword, setActiveforgotpassword] = useState(false)
    const [emailforotp, setEmail] = useState("")
    const [sign, setSign] = useState("");
    const navigate = useNavigate();

    const EmailverifyOTP = async (e) => {
        e.preventDefault()
        try {
            setSign(true)
            const response = await axios.post("https://grro-130ba33f07e0.herokuapp.com/api/v1/authorization/password_reset/", {
                email: emailforotp,
            });
            const { status } = response;
            console.log(status)
            // Store tokens in localStorage (or sessionStorage)
            localStorage.setItem("otpemail", emailforotp);
            console.log(response) 
            setSign(false)
            navigate(`/forgottenpasswordotp`)
    } catch (error) {
        console.error("unable to send otp  :", error.response?.data || error.message);
        setSign(false)
    }
};

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
                    <div onClick={() => setActiveforgotpassword(true)} className={` ${activeforgotpassword ? "forgotactive" : "greenlabelemailandinput"}`} >
                        {
                            activeforgotpassword && <label for="email">Email Address</label>
                        }
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" className="email-input" readonly />
                    </div>

                    <div className={sign ? "loadingemailforgot" : "submitbuttonemail"} onClick={EmailverifyOTP}>{sign && <span class="spinner"></span>}Submit Email</div>
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