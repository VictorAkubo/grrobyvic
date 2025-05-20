import React from 'react'
import "../../styles/settings/Suspend.css"
const Suspend = () => {

    const handleSelfSuspend = async () => {
        const token = localStorage.getItem('access_token');
        console.log("account suspended")
        try {
            await axios.put(
                'https://grro-130ba33f07e0.herokuapp.com/api/v1/authorization/suspend_user/',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('Your account has been suspended');
            localStorage.removeItem('access_token');
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to suspend account');
        }
    };
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
                    <div className="suspendordelete" onClick={handleSelfSuspend} >Suspend User</div>
                </div>
            </div>
        </div>
    )
}

export default Suspend