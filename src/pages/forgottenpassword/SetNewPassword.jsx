import { useState } from "react";
import "../../styles/forgottenpassword/SetNewPassword.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewPassword() {
  const navigate = useNavigate();
  /*  const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false); */
  const [input, setInput] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, SetConfirmNewPassword] = useState("");
  const [isbothPasswordCorrect, setisBothPasswordCorrect] = useState(false)
  const [sign, setSign] = useState(false)
  const [error, setError] = useState(false)
  const handleNewPassword = async () => {
    const finalOtpVerification = localStorage.getItem("verifiedOTP");
    try {
      if (newPassword === confirmNewPassword) {
        console.log(finalOtpVerification, newPassword);
        setSign(true)
        await axios.post("https://grro-130ba33f07e0.herokuapp.com/api/v1/authorization/password_reset/confirm/", {
          password: newPassword,
          token: finalOtpVerification,
        });
        navigate("/login")
        localStorage.removeItem("verifiedOTP");

      } else if (newPassword !== confirmNewPassword) {
        setisBothPasswordCorrect(true);
        console.log("Passwords are not correct");
        setSign(false)
      } else {
        setSign(false)
        setError(true)
      }
    } catch (error) {
      setSign(false)
      setError(true)
    }

  };

  return (
    <body className='forgottenpasswordandotp'>
      <div className="loginlogo">
        <img src="/GRRO.svg" alt="Logo" />
      </div>
      <div className="forgot-password-container">
        <div className="forgot-password-box" >
          <div class="left">
            <div className="forgot-back-button" onClick={() => navigate("/forgottenpasswordotp")}><img src='/left.svg' /> Back</div>
            <div className='forgotpasswordanddescription'>
              <h2>Set new Password</h2>
              <p>Input a strong password you can easily remember</p>
            </div>
            <div className="doublesetpassword">
              <div onClick={() => setInput("inputpassword")} className={` ${input === "inputpassword" ? "newactivepassword" : "newpasswordinput"}`} >
                <div>
                  {
                    input === "inputpassword" && <label for="email" >New Password</label>
                  }
                  <input placeholder="New Password" className="password" onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <h3>Show</h3>
              </div>
              <div onClick={() => setInput("newinputpassword")} className={` ${input === "newinputpassword" ? "newactivepassword" : "newpasswordinput"}`} >
                <div>
                  {
                    input === "newinputpassword" && <label for="email">Re-enter Password</label>
                  }
                  <input placeholder="Re-enter Password" onChange={(e) => SetConfirmNewPassword(e.target.value)} className="password" />
                </div>
                <h3>Show</h3>
              </div>
            </div>
            <div className={sign ? "loadingemailforgot" : "submitbuttonemail"} onClick={handleNewPassword}>{sign && <span className="spinner"></span>}Reset Password</div>
            {isbothPasswordCorrect && (
              <div className={`delete-modal  ${isbothPasswordCorrect ? "slide-in" : "slide-out"}`}>
                <div className="successanddeleteimagedivforlogin">
                  <p>
                    !
                  </p>
                </div>
                <div className="modal-content-forsuccessanddelete">
                  <h3>Error!</h3>
                  <p>Passwords Dont match</p>
                </div>

                <div className="closesuccessanddeletemodal">

                  <img
                    src="/cancel.svg"
                    alt="Close"
                    className="close-btn"
                    onClick={() => setisBothPasswordCorrect(false)}
                  />
                </div>

              </div>
            )}
            {error && (
              <div className={`delete-modal  ${error ? "slide-in" : "slide-out"}`}>
                <div className="successanddeleteimagedivforlogin">
                  <p>
                    !
                  </p>
                </div>
                <div className="modal-content-forsuccessanddelete">
                  <h3>Error!</h3>
                  <p>Unable to reset password</p>
                </div>

                <div className="closesuccessanddeletemodal">

                  <img
                    src="/cancel.svg"
                    alt="Close"
                    className="close-btn"
                    onClick={() => setError(false)}
                  />
                </div>

              </div>
            )}
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
