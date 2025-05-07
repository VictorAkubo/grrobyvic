import React, { useCallback, useState } from 'react'
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/forgottenpassword/ForgottenPasswordOTP.css"


const ForgottenPasswordOTP = () => {
  const [active, setActive] = useState(false)
  const navigate = useNavigate();
  const verifyOTP = () => {
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
    <body className='forgottenpasswordandotp'>
      <div className='loginlogo'><img src="/GRRO.svg" /></div>
      <div className="forgot-password-container">
        <div className="forgot-password-box" >
          <div className="left">
            <div className="forgot-back-button" onClick={() => navigate("/forgottenpassword")}><img src='/left.svg' /> Back</div>
            <div className='forgotpasswordanddescription'>
              <h2>Email verification</h2>
              <p>An OTP code has been sent to your email <br /> <span className="emailentered">Joetobaj@demo.com</span></p>
            </div>
            <div className="otp-inputs">
              <div className='otpboxes'>
                {[...Array(5)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    onClick={() => setActive(index)}
                    maxlength="1"
                    className={`otp-box ${active === index ? "activesingleinput" : "otp-box"}`}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onInput={(e) => { handleInput(e, index); setActive(index) }}
                  />
                ))}
              </div>
              <p className="resend-text">Didn't receive any code? <a href="#" className="resend-link">Resend</a> </p>
            </div>
            <div className="submitbuttonemail" onClick={verifyOTP}>Submit Number</div>
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
  );



}

export default ForgottenPasswordOTP