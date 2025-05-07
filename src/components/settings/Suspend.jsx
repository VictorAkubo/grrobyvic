import React from 'react'
import "../../styles/settings/Suspend.css"
const Suspend = () => {
    return (
        <div className="suspendaccount">
            <h2>Suspend Account</h2>
            <div className='factorauthenticationbtn'>
                <p className='suspendordeletetext'>You are about to suspend “Dexter Olaniyi” this would prevent access to this user’s account,
                    but can be undone by activating it.</p>
                <div className="bothauthbtn">
                    <p>Reason</p>
                    <input placeholder="Enter text here" />
                </div>
                <div className="verifytodeleteorsuspend">
                    <div className="unsuresuspendordelete" onClick={() => set2FAEmailConfirmed(true)} >Suspend?</div>
                    <div className="suspendordelete" onClick={() => set2FAEmailConfirmed(true)} >Suspend User</div>
                </div>
            </div>
        </div>
    )
}

export default Suspend