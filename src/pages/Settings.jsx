import React, { useState } from 'react'
import "../styles/settings/Settings.css"
import { DecadeView } from 'react-calendar'
import Rolemodal from '../components/settings/Rolemodal'
import Updaterolemodal from '../components/settings/Updaterolemodal'
import Addrolemodal from '../components/settings/Addrolemodal'
import Suspend from '../components/settings/Suspend'
import Delete from '../components/settings/Delete'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from "../context/AuthContext"
import axios from 'axios'
import formatDate from '../functions/DateConverter'


const Settings = () => {
  const navigate = useNavigate()
  const [editProfile, setEditProfile] = useState(false)
  const [role, setRole] = useState(false)
  const [updaterole, setUpdateRole] = useState(false)
  const [addrole, setAddRole] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [notification, setNotification] = useState(false)
  const [languages, setLanguages] = useState(false)
  const [newLanguage, setNewLanguage] = useState(false)
  const [apiIntegration, setNewAPIIntegration] = useState(false)
  const [newAPI, setNewAPI] = useState(false)
  const [systemCofig, setSystemConfig] = useState(false)
  const [configAction, setConfigAction] = useState(false)
  const [factorA, set2FA] = useState(false)
  const [factorAemail, set2FAEmail] = useState(false)
  const [factorAemailconfirmed, set2FAEmailConfirmed] = useState(false)
  const [suspend, setSuspend] = useState(false)
  const [deleteAccount, setDeleteAccount] = useState(false)



  /* actions api */

  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [reEnterNewPassword, setReEnterNewPassword] = useState("")
  const [message, setMessage] = useState("")
  const [PasswordDontMatch, setPasswordDontMatch] = useState("")
  const { profile, accessToken, setAccessToken } = useAppContext();

  const token = localStorage.getItem('access_token');
  const [patchemail, setPatchEmail] = useState("")
  const [patchphone, setPatchPhone] = useState("")


  /* Ending of api */


  const [FAEnabled, setFAEnabled] = useState(false)
  const [accountDeleted, setAccountDeleted] = useState(false)

  const [factorAQRcode, setFactorAQRcode] = useState(false)
  const [verifyQrOTP, setVerifyQrOTP] = useState(false)
  const [activities, setActivities] = useState(false)
  const [switching, setSwitching] = useState(false)
  const [switching1, setSwitching1] = useState(false)
  const [switching2, setSwitching2] = useState(false)

  const [activeSettingsbar, setActiveSettingsBar] = useState("viewprofile")



  const [authBTN, setAuthBTN] = useState("emailAuth")
  const [selectedCode, setSelectedCode] = useState("+234")
  const [phoneNumber, setPhoneNumber] = useState("")
  const countryCode = [{ name: "Nigeria", code: "NG", dial_code: "+234" }, { name: "United States", code: "US", dial_code: "+1" }, { name: "United Kingdom", code: "UK", dial_code: "+91" }]
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



  /* Functions For Authorization*/


  const handleChangePassword = async () => {
    const token = localStorage.getItem("access_token")
    try {
      if (newPassword === reEnterNewPassword) {
        const response = await axios.put(
          'https://grro-130ba33f07e0.herokuapp.com/api/v1/authorization/changepassword/',
          {
            oldPassword,
            newPassword
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        setChangePassword(false)
        setMessage(response.data.message || 'Password changed successfully');
      } else {
        setPasswordDontMatch(true)
        console.log("passwords dont match")
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error changing password');
    }
  };
  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        'https://grro-130ba33f07e0.herokuapp.com/api/v1/authorization/user_profile/',
        {
          email: email,
          phone_number: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      setMessage(response.data.message || 'Profile updated successfully');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to update profile');
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('access_token');

    try {
      await axios.post(
        'https://grro-130ba33f07e0.herokuapp.com/api/v1/authorization/logout/',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      localStorage.removeItem('access_token');
      navigate("/login")
      alert('Logged out successfully');
      // Optionally redirect:
      // window.location.href = '/login';
    } catch (error) {
      alert(error.response?.data?.message || 'Logout failed');
    }
  };



  return (
    <div className="mainsettingsdiv">
      {
        accountDeleted && (
          <div className={`delete-modal  ${accountDeleted ? "slide-in" : "slide-out"}`}>
            <div className="successanddeleteimagediv">
              <img src="/deleted.svg" alt="Success Icon" className="left-icon" />
            </div>
            <div className="modal-content-forsuccessanddelete">
              <h3>Deleted!</h3>
              <p>2FA Disabled</p>
            </div>

            <div className="closesuccessanddeletemodal">

              <img
                src="/cancel.svg"
                alt="Close"
                className="close-btn"
                onClick={() => setAccountDeleted(false)}
              />
            </div>

          </div>
        )
        ||
        FAEnabled && (
          <div className={`success-modal  ${accountDeleted ? "slide-in" : "slide-out"}`}>
            <div className="successanddeleteimagediv">
              <img src="/success.svg" alt="Success Icon" className="left-icon" />
            </div>
            <div className="modal-content-forsuccessanddelete">
              <h3>Success!</h3>
              <p>2FA Enabled</p>
            </div>
            <div className="closesuccessanddeletemodal">
              <img
                src="/cancel.svg"
                alt="Close"
                className="close-btn"
                onClick={() => setAccountDeleted(false)}
              />
            </div>
          </div>
        )
        || PasswordDontMatch && (
          <div className={`delete-modal  ${PasswordDontMatch ? "slide-in" : "slide-out"}`}>
            <div className="successanddeleteimagedivforlogin">
              <p>
                !
              </p>
            </div>
            <div className="modal-content-forsuccessanddelete">
              <h3>Error!</h3>
              <p>Passwords Dont Match</p>
            </div>

            <div className="closesuccessanddeletemodal">

              <img
                src="/cancel.svg"
                alt="Close"
                className="close-btn"
                onClick={() => setPasswordDontMatch(false)}
              />
            </div>

          </div>
        )
      }
      <div className="backgroundimageandbtnandemailandusername">
        <div className="backgroundimageandbtn">
          <img className="backgroundimage" src="/download.jpg" />
          <button onClick={() => setEditProfile(true)}>Edit Profile</button>
          {
            editProfile && (
              <>
                <div className="modal-backdrop" onClick={() => setEditProfile(false)} />
                <div className="editprofilemodal">
                  <div className='editprofilemodalinnerdiv'>
                    <h3 className='superheader'>Edit Profile</h3>
                    <div className='imageandchangeprofilepicturebtn'>
                      <img className="imageandchangeprofilepicture" src="/download.jpg" />
                      <p className="profileimagebtn">Change Profile picture</p>
                    </div>
                    <div className="changeusersdatainputs">
                      {
                        dataProfile.map(data => (
                          <div className='wholeddata'>
                            <div className="titlewithinputandvalues">
                              <h3>Full name</h3>
                              <div className='inputandgreenheadersettings'>
                                <p>Full name</p>
                                <input value={data.name} />
                              </div>
                            </div>
                            <div className="titlewithinputandvalues">
                              <h3>Email</h3>
                              <div className='inputandgreenheadersettings'>
                                <p>Email</p>
                                <input value={data.email} />
                              </div>
                            </div>
                            <div className="titlewithinputandvalues">
                              <h3>Username</h3>
                              <div className='inputandgreenheadersettings'>
                                <p>Username</p>
                                <input value={data.userName} />
                              </div>
                            </div>
                            <div className="titlewithinputandvaluesandchangenobtn">
                              <h3>Phone number</h3>
                              <div className='inputandgreenheadersettingsnumber '>
                                <p>Phone</p>
                                <div className='dialcodeandnumber'>
                                  <select
                                  className="selectgapping"
                                    value={selectedCode}
                                    onChange={(e) => setSelectedCode(e.target.value)}
                                  >
                                    {countryCode.map(country => (
                                      <option
                                        key={country.code}
                                        value={country.dial_code}
                                      >
                                        {country.dial_code}
                                      </option>
                                    ))}
                                  </select>
                                  <input onChange={() => setEditProfile(e.target.value)} value={data.phone} />
                                </div>
                                <p className="changenumberbtn">Change Phone number</p>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <div className='updateprofilebtnupdated'> Update Profile</div>
                  </div>
                </div>
              </>
            )
          }
        </div>
        <div className="logoimagediv">
          <img src="/download.jpg" className="logoimage" />
        </div>
        <div className="profiledetails">
          <h3>{profile.first_name}{profile.last_name}</h3>
          <p> {profile.email}</p>
        </div>
      </div>
      <div className="userprofileandothersettings">
        <div className="othersettings">
          <div className={activeSettingsbar === "viewprofile" ? "viewprofile" : "specificsetting blur"}>
            <div className="specificsetting">
              <h3>User Profile</h3>
              <p>View profile</p>
            </div>
            {
              activeSettingsbar === "viewprofile" && <img src="/rightarrow.svg" />
            }
          </div>
          <div className={activeSettingsbar === "changepassword" ? "viewprofile" : "specificsetting blur"}>
            <div className="specificsetting" onClick={() => { setChangePassword(true); setActiveSettingsBar("changepassword") }}>
              <h3>Change Password</h3>
              <p>Change account password</p>
            </div>
            {
              activeSettingsbar === "changepassword" && <img src="/rightarrow.svg" />
            }
          </div>
          {
            changePassword === true && (
              <>
                <div className="modal-backdrop" onClick={() => { setChangePassword(false); setActiveSettingsBar("viewprofile") }} />
                <div className="passwordmodal">
                  <p className='changepasswordheader'>Change Password</p>
                  <div className="allchangepasswordinnputs">
                    <div className="passwordlabelandinput">
                      <label>Old Password</label>
                      <div className="enterpasswordandshow">
                        <input onChange={(e) => setOldPassword(e.target.value)} placeholder="Enter Old password" />
                        <p>show</p>
                      </div>
                    </div>
                    <div className="passwordlabelandinput">
                      <label>New Password</label>
                      <div className="enterpasswordandshow">
                        <input onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter New password" />
                        <p>show</p>
                      </div>
                    </div>
                    <div className="passwordlabelandinput">
                      <label>Re-enter New Password</label>
                      <div className="enterpasswordandshow">
                        <input onChange={(e) => setReEnterNewPassword(e.target.value)} placeholder="Re-Enterpassword" />
                        <p>show</p>
                      </div>
                    </div>
                    <div className="resetpasswordandbtn">
                      <p>Reset password</p>
                      <div onClick={handleChangePassword}>Update Password</div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
          <div className={activeSettingsbar === "notification" ? "viewprofile" : "specificsetting blur"}>
            <div className="specificsetting" onClick={() => { setNotification(true); setActiveSettingsBar("notification") }}>
              <h3>Notification</h3>
              <p>Change account password</p>
            </div>
            {
              activeSettingsbar === "notification" && <img src="/rightarrow.svg" />
            }
          </div>
          {
            notification && (
              <>
                <div className="modal-backdrop" onClick={() => { setNotification(false); setActiveSettingsBar("viewprofile") }} />
                <div className="notificationmodal">
                  <h2 className="titleheadernotification">Notifications</h2>
                  <div className='generalspecificnotification'>
                    <div className='specificnotification'>
                      <div className='specificnotificationanddetails'>
                        <h3>Email Notification</h3>
                        <p>Push, Email Notification</p>
                      </div>
                      {
                        switching1 ? (
                          <img className="specificnotificationandbtn" onClick={() => setSwitching1(!switching1)} src="/switchon.svg" />
                        ) : (
                          <img className="specificnotificationandbtn" onClick={() => setSwitching1(!switching1)} src="/switch.svg" />
                        )
                      }
                    </div>
                    <div className='specificnotification'>
                      <div className='specificnotificationanddetails'>
                        <h3>SMS Notification</h3>
                        <p>Push, Email Notification</p>
                      </div>
                      {
                        switching2 ? (
                          <img className="specificnotificationandbtn" onClick={() => setSwitching2(!switching2)} src="/switchon.svg" />
                        ) : (
                          <img className="specificnotificationandbtn" onClick={() => setSwitching2(!switching2)} src="/switch.svg" />
                        )
                      }
                    </div>
                    <div className='specificnotification'>
                      <div className='specificnotificationanddetails'>
                        <h3>Notification Status</h3>
                        <p>Push, Email Notification</p>
                      </div>
                      {
                        switching ? (
                          <img className="specificnotificationandbtn" onClick={() => setSwitching(!switching)} src="/switchon.svg" />
                        ) : (
                          <img className="specificnotificationandbtn" onClick={() => setSwitching(!switching)} src="/switch.svg" />
                        )
                      }
                    </div>
                  </div>
                </div>
              </>
            )
          }
          <div className={activeSettingsbar === "rolesandpermission" ? "viewprofile" : "specificsetting blur"}>
            <div className="specificsetting" onClick={() => { setRole(true); setActiveSettingsBar("rolesandpermission") }}>
              <h3>Roles & permission</h3>
              <p>Change account password</p>
            </div>
            {
              activeSettingsbar === "rolesandpermission" && <img src="/rightarrow.svg" />
            }
          </div>
          {
            role && (
              <>
                <div className="modal-backdrop" onClick={() => { setRole(false); setActiveSettingsBar("viewprofile") }} />
                <Rolemodal setUpdateRole={setUpdateRole} setAddRole={setAddRole} setRole={setRole} />
              </>
            )
          }
          {
            updaterole && (
              <>
                <div className="modal-backdrop" onClick={() => setUpdateRole(false) && setRole(true)} />
                <Updaterolemodal />
              </>
            )
          }
          {
            addrole && (
              <>
                <div className="modal-backdrop" onClick={() => setAddRole(false)/*  && setRole(true) */} />
                <Addrolemodal />
              </>
            )
          }
          <div className={activeSettingsbar === "enable2fa" ? "viewprofile" : "specificsetting blur"}>
            <div className="specificsetting" onClick={() => { set2FA(true); setActiveSettingsBar('enable2fa') }}>
              <h3>Enable 2FA</h3>
              <p>Secure Account with Two-Factor Authentication</p>
            </div>
            {
              activeSettingsbar === "enable2fa" && <img src="/rightarrow.svg" />
            }
          </div>
          {
            factorA && (
              <>
                <div className="modal-backdrop" onClick={() => { set2FA(false); setActiveSettingsBar("viewprofile") }} />
                <div className="factorauthentication">
                  <h2>2 Factor Authentication</h2>
                  <div className='factorauthenticationbtn'>
                    <p className='firstp'>Enable two step authentication to secure your account  from unwanted access</p>
                    <div className="bothauthbtn">
                      <div onClick={() => setAuthBTN('emailAuth')} className={`authenticatorbtn ${authBTN === "emailAuth" ? "activebtn" : "notactivebtn"}`}><img src="/emailauth.svg" /> Email Authentication</div>
                      <div onClick={() => setAuthBTN('appAuth')} className={`authenticatorbtn ${authBTN === "appAuth" ? "activebtn" : "notactivebtn"}`}>Authenticator App</div>
                    </div >
                    <p className="secondp">A mail will be sent to your mail box fro validation </p>
                    <div className="enableauthfactorbtn" onClick={() => authBTN === "emailAuth" && set2FAEmail(true) && set2FA(false) || authBTN === "appAuth" && setFactorAQRcode(true)}>Enable 2FA</div>
                  </div >
                </div >
              </>
            )
          }
          {
            factorAemail && (
              <>
                <div className="modal-backdrop" onClick={() => set2FAEmail(false)} />
                <div className="factorauthentication">
                  <h2>Email Authentication</h2>
                  <div className='factorauthenticationbtn'>
                    <p className='firstp'>Enable two step authentication to secure your account  from unwanted access</p>
                    <div className="bothauthbtn">
                      <p>Enter Email</p>
                      <input placeholder="Enter email" />
                    </div>
                    <p className="secondp">A mail will be sent to your mail box for validation </p>
                    <div className="enableauthfactorbtn" onClick={() => set2FAEmailConfirmed(true)} >Enable 2FA</div>
                  </div>
                </div>
              </>
            )
          }
          {
            factorAemailconfirmed && (
              <>
                <div className="modal-backdrop" onClick={() => set2FAEmailConfirmed(false)} />
                <div className="factorauthenticationconfirm">
                  <h2>2 Factor Authentication</h2>
                  <div className='factorauthenticationbtn'>
                    <p className='firstp'>Two factor authentication is turned on</p>
                    <div className="enableauthfactorbtn">Disable 2FA</div>
                  </div>
                </div>
              </>
            )
          }
          {
            factorAQRcode && (
              <>
                <div className="modal-backdrop" onClick={() => setFactorAQRcode(false)} />
                <div className='qrcodescan'>
                  <h2>Authenticator App</h2>
                  <p className="step1toenable">1. Scan the QR code below with your 2FA app. We recommend <span>Authy</span> or <span>Google Authenticator</span>.</p>
                  <img src="/qrcode.svg" />
                  <p className="advicetoconnect">If you are unable to scan the QR code, you can manually enter this code <br />instead:</p>
                  <div className="copycode"><p>inbxsv2hmq4eorzvgnrdkqswnq</p><img src="/copycode.svg" /></div>
                  <p className="step2toenable">2. Enter the authentication code generated by your 2FA app:</p>
                  <div className="enableqrcodebtn">
                    <input placeholder="Authenticator code" />
                    <p onClick={() => setVerifyQrOTP(true)}>
                      Enable
                    </p>
                  </div>
                </div>
              </>
            )
          }
          {
            verifyQrOTP && (
              <>
                <div className="modal-backdrop" onClick={() => setVerifyQrOTP(false)} />
                <div className="verifyotp">
                  <h2>Verify OTP</h2>
                  <div className="innerdiv">
                    <p className='requesttoenterotp'>Enter the OTP we sent to <span>Johndoe@demo.com</span></p>
                    <div className='inputdiv'>
                      <label>Enter OTP</label>
                      <div className="sixinputs">
                        <input placeholder="-" maxLength={1} />
                        <input placeholder="-" maxLength={1} />
                        <input placeholder="-" maxLength={1} />
                        <input placeholder="-" maxLength={1} />
                        <input placeholder="-" maxLength={1} />
                        <input placeholder="-" maxLength={1} />
                      </div>
                    </div>
                    <p className='askingweitherotpwasrecieved'>Didnt Receive OTP? <span>Resend (09)</span></p>
                    <div className="verifybtn">
                      <p></p>
                      <div>Verify</div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
          <div className={activeSettingsbar === "apiintegrate" ? "viewprofile" : "specificsetting blur"}>
            <div className="specificsetting" onClick={() => { setNewAPIIntegration(true); setActiveSettingsBar("apiintegrate") }} >
              <h3>API integration</h3>
              <p>List of working APIs</p>
            </div>
            {
              activeSettingsbar === "apiintegtrate" && <img src="/rightarrow.svg" />
            }
          </div>
          {
            apiIntegration && (
              <>
                <div className="modal-backdrop" onClick={() => { setNewAPIIntegration(false); setActiveSettingsBar("viewprofile") }} />
                <div className='generalapiintegrationmodal'>
                  <div className='generalapiintegrationheader'>
                    <h2>API Integrations</h2>
                    <div onClick={() => setNewAPI(true)} >+ Add API</div>
                  </div>
                  <div className="generalpickedapiintegrations">
                    <div className="specificapiintegration">
                      <div className='specificapiintegrationtitleandid'>
                        <h3>State In Nigeria</h3>
                        <p>API Link</p>
                      </div>
                      <img src="/ellipsis.svg" />
                    </div>
                    <div className="specificapiintegration">
                      <div className='specificapiintegrationtitleandid'>
                        <h3>Dynamic Languages</h3>
                        <p>API Link</p>
                      </div>
                      <img src="/ellipsis.svg" />
                    </div>
                    <div className="specificapiintegration">
                      <div className='specificapiintegrationtitleandid'>
                        <h3>3RD Party Support Chat</h3>
                        <p>API Link</p>
                      </div>
                      <img src="/ellipsis.svg" />
                    </div>
                  </div>
                </div>
              </>
            )
          }
          {
            newAPI && (
              <>
                <div className="modal-backdrop" onClick={() => setNewAPI(false)} />
                <div className="newlanguagemodal">
                </div>
                <div className='addapimodal'>
                  <h2 className="addapitile">New API</h2>
                  <div className='generaladdapiinputs'>
                    <div className='headerwithinputaddapi'>
                      <h3 className='headertitleforaddapi'>API Title</h3>
                      <div className='generalinputdivforaddapi'>
                        <h4 className="greenheaderforaddapi">Title</h4>
                        <div className='inputanddropdownforaddapi'>
                          <input value={"Marketer"} />
                        </div>
                      </div>
                    </div>
                    <div className='headerwithinputaddapi'>
                      <h3 className='headertitleforaddapi'>API Link</h3>
                      <div className='generalinputdivforaddapi'>
                        <div className='inputanddropdownforaddapi'>
                          <input placeholder='Link here' />
                        </div>
                      </div>
                    </div>

                    <div className="addapibtn">Create API</div>
                  </div>
                </div>
              </>
            )
          }
          <div className={activeSettingsbar === "language" ? "viewprofile" : "specificsetting blur"}>
            <div className="specificsetting" onClick={() => { setLanguages(true); setActiveSettingsBar('language') }}>
              <h3>Language</h3>
              <p>Set and add languages</p>
            </div>
            {
              activeSettingsbar === "language" && <img src="/rightarrow.svg" />
            }
          </div>
          {
            languages && (
              <>
                <div className="modal-backdrop" onClick={() => { setLanguages(false); setActiveSettingsBar("viewprofile") }} />
                <div className='generallanguagemodal'>
                  <div className='generallanguageheader'>
                    <h2>Languages</h2>
                    <div onClick={() => setNewLanguage(true)}>+ Add Language</div>
                  </div>
                  <div className="generalpickedlanguages">
                    <div className="specificlanguage">
                      <h3>English</h3>
                      <img src="/ellipsis.svg" />
                    </div>
                  </div>
                  <div className="generalpickedlanguages">
                    <div className="specificlanguage">
                      <h3>igala</h3>
                      <img src="/ellipsis.svg" />
                    </div>
                  </div>
                  <div className="generalpickedlanguages">
                    <div className="specificlanguage">
                      <h3>yoruba</h3>
                      <img src="/ellipsis.svg" />
                    </div>
                  </div>
                  <div className="generalpickedlanguages">
                    <div className="specificlanguage">
                      <h3>igbo</h3>
                      <img src="/ellipsis.svg" />
                    </div>
                  </div>
                  <div className="generalpickedlanguages">
                    <div className="specificlanguage">
                      <h3>hausa</h3>
                      <img src="/ellipsis.svg" />
                    </div>
                  </div>
                  <div className="generalpickedlanguages">
                    <div className="specificlanguage">
                      <h3>tif</h3>
                      <img src="/ellipsis.svg" />
                    </div>
                  </div>
                </div>
              </>
            )
          }
          {
            newLanguage && (
              <>
                <div className="modal-backdrop" onClick={() => setNewLanguage(false)} />
                <div className="newlanguagemodal">
                </div>
                <div className='addlanguagemodal'>
                  <h2 className="addlanguagetile">New Language</h2>
                  <div className='generaladdlanguageinputs'>
                    <div className='headerwithinputaddlanguage'>
                      <h3 className='headertitleforaddlanguage'>Language Title</h3>
                      <div className='generalinputdivforaddlanguage'>
                        <h4 className="greenheaderforaddlanguage">Title</h4>
                        <div className='inputanddropdownforaddlanguage'>
                          <input value={"Marketer"} />
                        </div>
                      </div>
                    </div>
                    <div className='headerwithinputaddlanguage'>
                      <h3 className='headertitleforaddlanguage'>API Link</h3>
                      <div className='generalinputdivforaddlanguage'>
                        <div className='inputanddropdownforaddlanguage'>
                          <input placeholder='Link here' />
                        </div>
                      </div>
                    </div>

                    <div className="addlanguagebtn">Create Language</div>
                  </div>
                </div>
              </>
            )
          }

          <div className={activeSettingsbar === "activity" ? "viewprofile" : "specificsetting blur"}>
            <div className="specificsetting" onClick={() => { setActivities(true); setActiveSettingsBar("activity") }}>
              <h3>Activities</h3>
              <p>Monitor activities along modules</p>
            </div>
            {
              activeSettingsbar === "activity" && <img src="/rightarrow.svg" />
            }
          </div>
          {
            /* Activities */

            activities && (
              <>
                <div className="modal-backdrop" onClick={() => { setActivities(false); setActiveSettingsBar("viewprofile") }} />
                <div className="activities">
                  <h2>Activities</h2>
                  <div className="activitiesinnerdiv">
                    <div className='activitiesinnerdivheader'>
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
                        <div className="activitiesinnerdivbody">
                          <div className="firstactivity">
                            <img src={data.category === "MOBILE" ? "/mobile.svg" : "/pc.svg"} />
                            <div>
                              <h3>{data.category}</h3>
                              <p>{data.phoneName}</p>
                            </div>
                          </div>
                          <div className="secondactivity">
                            <h3>{data.date}</h3>
                            <p>{data.time}</p>
                          </div>
                          <div className="thirdactivity">
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

          {/* System config */}
          <div className={activeSettingsbar === "configuration" ? "viewprofile" : "specificsetting blur"}>
            <div className="specificsetting" onClick={() => { setSystemConfig(true); setActiveSettingsBar("configuration") }}>
              <h3>System Configuration</h3>
              <p>Logout of User's Account</p>
            </div>
            {
              activeSettingsbar === "configuration" && <img src="/rightarrow.svg" />
            }
          </div>
          {
            systemCofig && (
              <>
                <div className="modal-backdrop" onClick={() => { setSystemConfig(false); setActiveSettingsBar("viewprofile") }} />
                <div className='generalsystemconfigmodal'>
                  <div className='generalsystemconfigheader'>
                    <h2>System Configurations</h2>
                  </div>
                  <div className="generalpickedsystemconfigs">
                    <div className="specificsystemconfig">
                      <div className='specificsystemconfigtitleandid'>
                        <h3>Total Numbers of Comments Allowed</h3>
                        <p>value: <span>32</span></p>
                      </div>
                      <img src="/ellipsis.svg" onClick={() => setConfigAction(true)} />
                      {configAction && (
                        <div className="actiondropdwonforsystemconfig">
                          <p>Edit Config</p>
                          <p className='edit'></p>
                          <p>Delete</p>
                        </div>
                      )
                      }
                    </div>
                    <div className="specificsystemconfig">
                      <div className='specificsystemconfigtitleandid'>
                        <h3>Allow Moderators to Responed</h3>
                        <p>value: <span>Yes</span></p>
                      </div>
                      <img src="/ellipsis.svg" />
                    </div>
                    <div className="specificsystemconfig">
                      <div className='specificsystemconfigtitleandid'>
                        <h3>3RD Party Support</h3>
                        <p>value: <span>Yes</span></p>
                      </div>
                      <img src="/ellipsis.svg" />
                    </div>
                  </div>
                </div>
              </>
            )
          }
          {/* Sign Out */}
          <div className="specificsetting signout" onClick={handleLogout}>
            <h3>Sign Out</h3>
            <p>Logout of User's Account</p>
          </div>
          <div className="specificsetting suspend" onClick={() => setSuspend(true)} >
            <h3>Suspend Account</h3>
            <p>Suspend of User's Account</p>
          </div>
          {
            suspend && (
              <>
                <div className="modal-backdrop" onClick={() => setSuspend(false)} />
                <Suspend />
              </>
            ) || deleteAccount && (
              <>
                <div className="modal-backdrop" onClick={() => setDeleteAccount(false)} />
                <Delete />
              </>
            )
          }
          <div className="specificsetting delete" onClick={() => setDeleteAccount(true)}>
            <h3>Delete Account</h3>
            <p>Delete of User's Account</p>
          </div>
        </div >
        <div className="userprofileSettingsdiv">
          <h2 className="titleuserprofile">User Profile</h2>
          <p className="borderbottom"></p>
          <div className="userProfileSettings">
            <ul className="leftsectionprofiledata">
              <li>Full Name</li>
              <li>Email</li>
              <li>Phone Number</li>
              <li>UserName</li>
              <li>Role</li>
              <li>Date Joined</li>
            </ul>
            {/*  {
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
            } */}
            <ul className="rightsectionprofiledata">
              <li>{profile.first_name} {profile.last_name}</li>
              <li>{profile.email}</li>
              <li>{profile.phone_number}</li>
              <li>{profile.first_name}{profile.last_name}</li>
              <li>{profile.account_type}</li>
              <li>{formatDate(profile.date_joined)}</li>
            </ul>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Settings