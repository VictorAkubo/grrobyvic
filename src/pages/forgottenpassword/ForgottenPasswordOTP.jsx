import React, { useCallback } from 'react'
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/forgottenpassword/ForgottenPasswordOTP.css"


const ForgottenPasswordOTP = () => {
  const navigate= useNavigate();
  const verifyOTP=()=>{
    navigate("/setnewpassword")
  }
 const inputRefs = useRef([]);



  const handleInput = (e, index) => {
    if (e.target.value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus(); // Move to the next input
    } else if (e.target.value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus(); // Move back if deleted
    }
  };

  return (
    <div class="email-verification-container">
      <header class="header">
        <img src="logo.png" alt="Logo" class="logo" />
      </header>

      <div class="email-verification-box">
        <div class="left">
          <button class="back-button">�� Back</button>
          <h2>Email verification</h2>
          <p>An OTP code has been sent to your email</p>
          <p class="email">Joetobaj@demo.com</p>

          <div class="otp-inputs">
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxlength="1"
                class="otp-box"
                ref={(el) => (inputRefs.current[index] = el)}
                onInput={(e) => handleInput(e, index)}
              />
            ))}
          </div>

          <p class="resend-text">
            Didn��t receive any code? <a href="#" class="resend-link">Resend</a>
          </p>

          <button class="submit-button" onClick={verifyOTP}>Submit Number</button>
        </div>
        <div class="right">
          <img src="female.jpeg" alt="Smiling woman" class="image" />
        </div>
      </div>

      <footer class="footer">
        <p>? 2024 Groa Fresh. All rights reserved.</p>
        <p>Contact Us @ info@groafresh.com</p>
        <div class="social-icons">
          <span>? ? ?</span>
        </div>
      </footer>
    </div>
  );


 
}

export default ForgottenPasswordOTP