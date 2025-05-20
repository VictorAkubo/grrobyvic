import React, { useState } from 'react'
import "../../styles/settings/Delete.css"
const Delete = () => {
    const [message, setMessage] = useState(null)
    const handleDelete = async () => {
        const token = localStorage.getItem("access_token")
        if (!window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
            return;
        }
        console.log("account deleted")
        try {
            const response = await axios.delete('https://grro-130ba33f07e0.herokuapp.com/api/v1/authorization/delete_user/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMessage(response.data.message || 'Account deleted successfully');
            localStorage.removeItem('access_token');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Failed to delete account');
        }
    };

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
                    <div className="suspendordelete" onClick={handleDelete/*  setAccountDeleted(true) */}>Delete User</div>
                </div>
            </div>
        </div>
    )
}

export default Delete