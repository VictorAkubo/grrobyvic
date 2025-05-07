import React from 'react'
import "../../styles/orders/SelectDriver.css"

const SelectDriver = () => {
    return (
        <div className="selectdrivermodal">
            <div className='selectdrivermodalheader'>
                <h3>Select a Driver</h3>
            </div>
            <div className='selectdriverdiv'>
                <div className='selectdriverimageandname'>
                    <img src="/selectdriver.svg" />
                    <h3></h3>
                </div>
                <p className="selectdriverstatus">Offline</p>
            </div>

        </div>
    )
}

export default SelectDriver