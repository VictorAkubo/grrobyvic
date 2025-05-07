import React, { useEffect, useState } from 'react'
import OrderNav from '../OrderNav'
import "../../styles/customers/SpecificCustomer.css"
import Updaterolemodal from '../settings/Updaterolemodal';
import Delete from '../settings/Delete';
import Suspend from '../settings/Suspend';
import ResetPassword from '../settings/ResetPassword';
import Addrolemodal from '../settings/Addrolemodal';

const SpecificCustomer = () => {
    const [actionCalledStaff, setActionCalledStaff] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);
    const [remove, setRemove] = useState(false);
    const [suspend, setSuspend] = useState(false);
    const [updateRole, setUpdateRole] = useState(false);
    const [newRole, setNewRole] = useState(false);
    /* const [resetpassword, setResetpassword] = useState(false); */
    const [reset2fa, setreset2fa] = useState(false);


    const dataProfile = [
        {
            name: "Victor Akubo",
            email: "victorugbede89@gmail.com",
            phone: "08159894732",
            staffName: "VictorDash",
            role: "Superstaff",
            datejoined: "Aug 21st,2023|12:55AM"
        }
    ]
    useEffect(() => {
        if (updateRole === true || remove === true || suspend === true) {
            setActionCalledStaff(false)
        }
    }, [updateRole, remove, suspend])
    const activitiesdata = [
        {
            category: "MOBILE",
            phoneName: "Iphone 16pro",
            date: "Jan 1st, 2022",
            action: "User login",
            time: "12:55AM"
        },
        {
            category: "PC",
            phoneName: "Iphone 16pro",
            date: "Jan 1st, 2022",
            action: "User login",
            time: "12:55AM"
        },
        {
            category: "PC",
            phoneName: "Iphone 16pro",
            date: "Jan 1st, 2022",
            action: "User login",
            time: "12:55AM"
        },
        {
            category: "PC",
            phoneName: "Iphone 16pro",
            date: "Jan 1st, 2022",
            action: "User login",
            time: "12:55AM"
        },
        {
            category: "PC",
            phoneName: "Iphone 16pro",
            date: "Jan 1st, 2022",
            action: "User login",
            time: "12:55AM"
        },
        {
            category: "MOBILE",
            phoneName: "Iphone 16pro",
            date: "Jan 1st, 2022",
            action: "User login",
            time: "12:55AM"
        },
        {
            category: "PC",
            phoneName: "Iphone 16pro",
            date: "Jan 1st, 2022",
            action: "User login",
            time: "12:55AM"
        },
        {
            category: "MOBILE",
            phoneName: "Iphone 16pro",
            date: "Jan 1st, 2022",
            action: "User login",
            time: "12:55AM"
        },
    ]
    return (
        <>
            {
                updateRole && (
                    <>
                        <div className="modal-backdrop" onClick={() => setUpdateRole(false)} />
                        <Updaterolemodal setNewRole={setNewRole} header={"Change"} />
                    </>
                ) || remove && (
                    <>
                        <div className="modal-backdrop" onClick={() => setRemove(false)} />
                        <Delete />
                    </>
                ) || suspend && (
                    <>
                        <div className="modal-backdrop" onClick={() => setSuspend(false)} />
                        <Suspend />
                    </>
                ) || resetPassword && (
                    <>
                        <div className="modal-backdrop" onClick={() => setResetPassword(false)} />
                        <ResetPassword header="Password" />
                    </>
                ) || reset2fa && (
                    <>
                        <div className="modal-backdrop" onClick={() => setreset2fa(false)} />
                        <ResetPassword header="2FA" />
                    </>
                ) || newRole && (
                    <>
                        <div className="modal-backdrop" onClick={() => setNewRole(false)} />
                        <Addrolemodal />
                    </>
                )

            }
            <OrderNav header="Customer - Goodluck Victor" />
            <div className='staffitem'>
                <div className='staffprofileandaction'>
                    <div className='staffprofile'>
                        <img src="/download.jpg" />
                        <div className="staffdetails">
                            <h2>Victor Akubo</h2>
                            <p>victorugbede89@gmail.com</p>
                        </div>
                    </div>
                    <div className='staffsellipsis'>
                        <img className="ellips" src="/ellipsis.svg" onClick={() => setActionCalledStaff(!actionCalledStaff)} />
                        {
                            actionCalledStaff && (
                                <div>
                                    <div className="customeractionstaff">
                                        <p onClick={() => setResetPassword(true)}>Reset Account</p>
                                        <p onClick={() => setSuspend(true)} className="delete">Suspend account</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
                <div className='staffpermissionheader'>
                    <h3 className="titlestaffprofile">Admin's Profile</h3>
                </div>
                <div className="staffprofileSettingsdiv">
                    <p className="borderbottom"></p>
                    <div className="staffProfileSettings">
                        <ul className="leftsectionprofiledata">
                            <li>Full Name</li>
                            <li>Email</li>
                            <li>Phone Number</li>
                            <li>staffName</li>
                            <li>Role</li>
                            <li>Date Joined</li>
                        </ul>
                        {
                            dataProfile.map(data => (
                                <ul className="rightsectionprofiledata">
                                    <li>{data.name}</li>
                                    <li>{data.email}</li>
                                    <li>{data.phone}</li>
                                    <li>{data.staffName}</li>
                                    <li>{data.role}</li>
                                    <li>{data.datejoined}</li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
               {/*  <div className='staffpermissionheader'>
                    <h3>Permissions</h3>
                    <img src='/dropIcon.svg' />
                </div>
                <div className='staffagentandpermissions'>
                    <div className='staffaddedpermissions'>
                        <p className='staffpermission'>
                            <p> Permission</p>
                        </p>
                        <p className='staffpermission'>
                            <p> Permission</p>
                        </p>
                        <p className='staffpermission'>
                            <p> Permission</p>
                        </p>
                        <p className='staffpermission'>
                            <p> Permission</p>
                        </p>
                        <p className='staffpermission'>
                            <p> Permission</p>
                        </p>
                        <p className='staffpermission'>
                            <p> Permission</p>
                        </p>
                        <p className='staffpermission'>
                            <p> Permission</p>
                        </p>
                        <p className='staffpermission'>
                            <p> Permission</p>
                        </p>
                    </div>
                </div> */}
                <div className='staffpermissionheader'>
                    <h3>Device Log</h3>
                    <img src='/dropIcon.svg' />
                </div>
                <div className="staffactivitiesinnerdiv">
                    <div className='staffactivitiesinnerdivheaderlog'>
                        <div>
                            <h3>Device</h3>
                        </div>
                        <div>
                            <h3>Time</h3>
                        </div>
                        <div>
                            <h3>Last online</h3>
                        </div>
                        <div>
                            <h3>Location</h3>
                        </div>
                    </div>
                    {
                        activitiesdata.map(data => (
                            <div className="staffactivitiesinnerdivbodylog">
                                <div className="stafffirstactivity">
                                    <img src={data.category === "MOBILE" ? "/mobile.svg" : "/pc.svg"} />
                                    <div>
                                        <h3>{data.category}</h3>
                                        <p>{data.phoneName}</p>
                                    </div>
                                </div>
                                <div className="staffsecondactivity">
                                    <h3>{data.date}</h3>
                                    <p>{data.time}</p>
                                </div>
                                <div className="staffsecondactivity">
                                    <h3>{data.date}</h3>
                                    <p>{data.time}</p>
                                </div>
                                <div className="staffthirdactivitylog">
                                    <p>{data.action}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='staffpermissionheader'>
                    <h3>Activity</h3>
                    <img src='/dropIcon.svg' />
                </div>
                <div className="staffactivitiesinnerdiv">
                    <div className='staffactivitiesinnerdivheader'>
                        <div>
                            <h3>Device</h3>
                        </div>
                        <div>
                            <h3>Time</h3>
                        </div>
                        <div>
                            <h3>Action</h3>
                        </div>
                    </div>
                    {
                        activitiesdata.map(data => (
                            <div className="staffactivitiesinnerdivbody">
                                <div className="stafffirstactivity">
                                    <img src={data.category === "MOBILE" ? "/mobile.svg" : "/pc.svg"} />
                                    <div>
                                        <h3>{data.category}</h3>
                                        <p>{data.phoneName}</p>
                                    </div>
                                </div>
                                <div className="staffsecondactivity">
                                    <h3>{data.date}</h3>
                                    <p>{data.time}</p>
                                </div>
                                <div className="staffthirdactivity">
                                    <p>{data.action}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SpecificCustomer