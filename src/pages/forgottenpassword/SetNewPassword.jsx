import { useState } from "react";
import "../../styles/forgottenpassword/SetNewPassword.css";
import { useNavigate } from "react-router-dom";

export default function SetNewPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [input, setInput] = useState("")

  return (
    <body className='forgottenpasswordandotp'>
      <div className="loginlogo">
        <img src="/GRRO.svg" alt="Logo" />
      </div>
      <div className="forgot-password-container">
        <div className="forgot-password-box" >
          <div class="left">
            <div className="forgot-back-button"  onClick={() => navigate("/forgottenpasswordotp")}><img src='/left.svg' /> Back</div>
            <div className='forgotpasswordanddescription'>
              <h2>Set new Password</h2>
              <p>Input a strong password you can easily remember</p>
            </div>
            <div className="doublesetpassword">
              <div onClick={() => setInput("inputpassword")} className={` ${input === "inputpassword" ? "newactivepassword" : "newpasswordinput"}`} >
                <div>
                  {
                    input === "inputpassword" && <label for="email">New Password</label>
                  }
                  <input placeholder="New Password" className="password" />
                </div>
                <h3>Show</h3>
              </div>
              <div onClick={() => setInput("newinputpassword")} className={` ${input === "newinputpassword" ? "newactivepassword" : "newpasswordinput"}`} >
                <div>
                  {
                    input === "newinputpassword" && <label for="email">Re-enter Password</label>
                  }
                  <input placeholder="Re-enter Password" className="password" />
                </div>
                <h3>Show</h3>
              </div>
            </div>
            <div className="submitbuttonemail" onClick={() => navigate("/")}>Submit Email</div>
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
