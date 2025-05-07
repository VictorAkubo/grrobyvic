import React from 'react'
import "../../styles/products/ProductDelete.css"

const ProductDelete = () => {
    return (
        <div className='productdelete'>
            <div className="productdeleteimg">
                <img src="/close.svg" />
            </div>
            <div className="productdeletedetails">
                <div className='productdeletetitleanddetail'>
                    <h3>You are about to delete a product</h3>
                    <p>This will delete the menue item, Are you sure you want to proceed?</p>
                </div>
                <div className='productdeleteconfirmationbtn'>
                    <div className='confirm'>Cancel</div>
                    <div className='decline'>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDelete;