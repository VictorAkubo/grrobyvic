import { useState } from "react";
import "../../styles/forgottenpassword/SetNewPassword.css";

export default function SetNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div class="set-password-container">
      <header class="header">
        <img src="logo.png" alt="Logo" class="logo" />
      </header>

      <div class="set-password-box">
        <div class="left">
          <button class="back-button">�� Back</button>
          <h2>Set new Password</h2>
          <p>Input a strong password you can easily remember</p>

          <div class="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              class="password-input"
            />
            <span
              class="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show
            </span>
          </div>

          <div class="input-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter Password"
              class="password-input"
            />
            <span
              class="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              Show
            </span>
          </div>

          <button class="submit-button">Reset Password</button>
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
