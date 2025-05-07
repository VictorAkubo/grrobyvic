import React from 'react'
import "../../styles/products/Outofstock.css"

const Outofstock = () => {
    return (
        <div className='outofstockmodal'>
            <div className="outofstockmodalimg">
                <img src="/close.svg" />
            </div>
            <div className="outofstockmodaldetails">
                <div className='outofstockmodaltitleanddetail'>
                    <h3>Product Out of Stock</h3>
                    <p>you about to turn this product out of stock</p>
                </div>
                <div className='outofstockmodalconfirmationbtn'>
                    <div className='confirm'>Confirm</div>
                    <div className='decline'>Decline</div>
                </div>
            </div>
        </div>
    )
}

export default Outofstock