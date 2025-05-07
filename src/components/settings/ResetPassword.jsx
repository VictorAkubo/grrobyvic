import React from 'react'
import "../../styles/settings/ResetPor2Fa.css"
const ResetPassword = ({ header }) => {
    return (
        <div className='resetpasswordor2fa'>
            <h2>Reset {header}</h2>
            <div className="textandresetbtn">
                <p>{header === "Password" ? "Reset users password, by sending a mail prompt for user to change password" : "Reset users two factor authentication"}</p>
                <div className='actionbtnforreset'>Reset {header}</div>
            </div>
        </div>
    )
}

export default ResetPassword