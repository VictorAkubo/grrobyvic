import React from 'react'
import "../../styles/settings/Delete.css"
const Delete = () => {
    return (
        <div className="suspendaccount">
            <h2>Delete Account</h2>
            <div className='factorauthenticationbtn'>
                <p className='suspendordeletetext'>You are about to delete “Dexter Olaniyi” this would erase this user’s account,
                    It can not be undone.</p>
                <div className="bothauthbtn">
                    <p>Reason</p>
                    <input placeholder="Enter text here" />
                </div>
                <div className="verifytodeleteorsuspend">
                    <div className="unsuresuspendordelete" onClick={() => set2FAEmailConfirmed(true)} >Delete?</div>
                    <div className="suspendordelete" onClick={() => setAccountDeleted(true)} >Delete User</div>
                </div>
            </div>
        </div>
    )
}

export default Delete