import React from 'react'
import "../../styles/settings/Addrolemodal.css"

const Addrolemodal = () => {
    return (
        <div className='addrolemodal'>
            <h2 className="addroletile">New Role</h2>
            <div className='generaladdroleinputs'>
                <div className='headerwithinputaddrole'>
                    <h3 className='headertitleforaddrole'>Role Title</h3>
                    <div className='generalinputdivforaddrole'>
                        <h4 className="greenheaderforaddrole">Title</h4>
                        <div className='inputanddropdownforaddrole'>
                            <input value={"Marketer"} />
                        </div>
                    </div>
                </div>
                <div className='headerwithinputaddrole'>
                    <h3 className='headertitleforaddrole'>Privilege/Permission</h3>
                    <div className='generalinputdivforaddrole'>
                        <div className='inputanddropdownforaddrole'>
                            <input value={"User"} />
                            <img src='/dropdown.svg' />
                        </div>
                    </div>
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
                <div className="addrolebtn">Create Role</div>
            </div>
        </div>
    )
}

export default Addrolemodal