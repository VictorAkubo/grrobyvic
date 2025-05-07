import React from 'react'
import "../../styles/settings/Updaterolemodal.css"

const Updaterolemodal = ({ header,setNewRole }) => {
  return (
    <div className='updaterolemodal'>
      <h2 className="updateroletile">{header ? header : "Update"} Role</h2>
      <div className='generalupdateroleinputs'>
        <div className='headerwithinputupdaterole'>
          <h3 className='headertitleforupdaterole'>Current Role</h3>
          <div className='generalinputdivforupdaterole'>
            <h4 className="greenheaderforupdaterole">Select Role</h4>
            <div className='inputanddropdownforupdaterole'>
              <input value={"User"} />
              <img src='/dropdown.svg' />
            </div>
          </div>
        </div>
        <div className='headerwithinputupdaterole'>
          <h3 className='headertitleforupdaterole'>Privilege/Permission</h3>
          <div className='generalinputdivforupdaterole'>
            <div className='inputanddropdownforupdaterole'>
              <input value={"Select Privileges"} />
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
        {
          header ? (
            <div className='updaterolebtnoptiontocreate'>
              <p className="youdonthavearole">
                <p className="question">Role Not Listed?</p>
                <div className='greenspan'>Create role</div>
              </p>
              <div className="updaterolebtn">Update Role</div>
            </div>

          ) : (
            <div className="updaterolebtn">Update Role</div>
          )
        }
      </div>
    </div >
  )
}

export default Updaterolemodal