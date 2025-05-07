import React from 'react'
import "../../styles/products/ProductAvailable.css"

const ProductAvailable = () => {
    return (
        <div className='productavailable'>
            <div className="productavailableimg">
                <img src="/close.svg" />
            </div>
            <div className="productavailabledetails">
                <div className='productavailabletitleanddetail'>
                    <h3>Change Product Availability</h3>
                    <p>you about to make this product available for sale</p>
                </div>
                <div className='productavailableconfirmationbtn'>
                    <div className='confirm'>Confirm</div>
                    <div className='decline'>Decline</div>
                </div>
            </div>
        </div>
    )
}

export default ProductAvailable;