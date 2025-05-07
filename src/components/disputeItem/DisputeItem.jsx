import React, { useEffect, useState } from 'react';
import "../../styles/dispute/DisputeItem.css";
import { useNavigate } from 'react-router-dom';
import OrderNav from '../OrderNav'
const dataProfile = [
    {
        name: "Victor Akubo",
        email: "victorugbede89@gmail.com",
        phone: "08159894732",
        userName: "VictorDash",
        role: "SuperUser",
        datejoined: "Aug 21st,2023|12:55AM"

    }
]
const DisputeItem = () => {
    return (
        <>
            <OrderNav header="Dispute" />
            <div className="disputeitem">
                <div className="userprofilediv">
                    <h2 className="titleuserprofile">User Profile</h2>
                    <p className="borderbottom"></p>
                    <div className="userProfile">
                        <ul className="leftsectionprofiledata">
                            <li>Full Name</li>
                            <li>Email</li>
                            <li>Phone Number</li>
                            <li>UserName</li>
                            <li>Role</li>
                            <li>Date Joined</li>
                        </ul>
                        {
                            dataProfile.map(data => (
                                <ul className="rightsectionprofiledata">
                                    <li>{data.name}</li>
                                    <li>{data.email}</li>
                                    <li>{data.phone}</li>
                                    <li>{data.userName}</li>
                                    <li>{data.role}</li>
                                    <li>{data.datejoined}</li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
                <div className="responseandinput">
                    <div className="userresponse">
                        I am writing to request access to the following public records under the Freedom of Information Act. [Specify the documents or informatI am writing to request access to the following public records under the Freedom of Information Act. [Specify the documents or information you're seeking, e.g., meeting minutes, financial reports, emails, etc.]. Please provide these records in an electronic format if possible. Thank you.ion you're seeking, e.g., meeting minutes, financial reports, emails, etc.]. Please provide these records in an electronic format if possible. Thank youI am writing to request access to the following public records under the Freedom of Information Act. [Specify the documents or information you're seeking, e.g., meeting minutes, financial reports, emails, etc.]. Please provide these records in an electronic format if possible. Thank you.
                    </div>
                    <h2 className="headercalledresponse" >Response</h2>
                    <textarea placeholder="Enter Message" />
                    <div className="disputeprofilebtn">
                        <button className="raiseticket">Raise Ticket</button>
                        <button className="post">Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisputeItem;