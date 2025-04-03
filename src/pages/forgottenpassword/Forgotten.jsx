import React from 'react'
import "../../styles/forgottenpassword/Forgotten.css"
import { useNavigate } from "react-router-dom";

const Forgotten = () => {
    const navigate = useNavigate();
const verifyOTP = ()=>{
    navigate("/setnewpassword")
}
    return (
        <body>
        <div class="forgot-password-container">
            <header class="header">
                <img src="logo.png" alt="Logo" class="logo" />
            </header>

            <div class="forgot-password-box">
                <div class="left">
                    <button class="back-button">← Back</button>
                    <h2>Forgot Password</h2>
                    <p>You will receive an email with your verification code</p>
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" value="Joetobaj@demo.com" class="email-input" readonly />
                    <button class="submit-button" onClick={()=>navigate("/forgottenpasswordotp")}>Submit Email</button>
                </div>
                <div class="right">
                    <img src="mail-dynamic-color.png" alt="Smiling woman" class="image" />
                </div>
            </div>

            <footer class="footer">
                <p>© 2024 Groa Fresh. All rights reserved.</p>
                <p>Contact Us @ info@groafresh.com</p>
                <div class="social-icons">
                    <span>⚫ 🔵  ⚫ ⚪ 🔵</span>
                </div>
            </footer>
        </div>
</body>                                                                                                                                                                                                                                                                              
 )
}

export default Forgotten;