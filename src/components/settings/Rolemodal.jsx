import React from 'react'
import "../../styles/settings/Rolemodal.css"
const Rolemodal = ({ setUpdateRole, setAddRole, setRole }) => {
    return (
        <div className="rolemodal">
            <div className='roleheaderandbtn'>
                <h2>Roles</h2>
                <div onClick={() => setAddRole(true) && setRole(false)}>+ New Role</div>
            </div>
            <div className='rolesagentandspecrole'>
                <div className='rolespartitions'>
                    <h3>User</h3>
                    <img className="userdropdown" src='dropdown.svg' />
                </div>
                <div className='agentandpermissions'>
                    <div className='governmentagent'>
                        <h3>Government agent</h3>
                        <img src='dropdown.svg' />
                    </div>
                    <div className='addedpermissions'>
                        <p className='permission'>
                            <p> Permission</p>
                            <img src="/cancelpermission.svg" />
                        </p>
                        <p className='permission'>
                            <p> Permission</p>
                            <img src="/cancelpermission.svg" />
                        </p>
                        <p className='permission'>
                            <p> Permission</p>
                            <img src="/cancelpermission.svg" />
                        </p>
                        <p className='permission'>
                            <p> Permission</p>
                            <img src="/cancelpermission.svg" />
                        </p>
                        <p className='permission'>
                            <p> Permission</p>
                            <img src="/cancelpermission.svg" />
                        </p>
                        <p className='permission'>
                            <p> Permission</p>
                            <img src="/cancelpermission.svg" />
                        </p>
                        <p className='permission'>
                            <p> Permission</p>
                            <img src="/cancelpermission.svg" />
                        </p>
                        <p className='permission'>
                            <p> Permission</p>
                            <img src="/cancelpermission.svg" />
                        </p>
                    </div>
                    <div className="editanddeleteaccount">
                        <div className="editrole" onClick={() => setUpdateRole(true) && setRole(false)}>Edit role</div>
                        <div className="deleterole">Delete account</div>
                    </div>
                </div>
                <div className="specificroles">
                    <div className='role'>
                        <h3>Admin</h3>
                        <img src="/dropdown.svg" />
                    </div>
                    <div className='role'>
                        <h3>Super Admin</h3>
                        <img src="/dropdown.svg" />
                    </div>
                    <div className='role'>
                        <h3>Admin</h3>
                        <img src="/dropdown.svg" />
                    </div>
                    <div className='role'>
                        <h3>Super Admin</h3>
                        <img src="/dropdown.svg" />
                    </div>
                    <div className='role'>
                        <h3>Admin</h3>
                        <img src="/dropdown.svg" />
                    </div>
                    <div className='role roleend'>
                        <h3>Super Admin</h3>
                        <img src="/dropdown.svg" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Rolemodal