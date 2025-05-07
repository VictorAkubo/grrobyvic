import React from 'react'
import "../../styles/products/ProductItem.css"
import OrderNav from '../OrderNav'
const ProductItem = () => {
  return (
    <>
      <OrderNav header="Product - (Fresh Lettuces)" />
      <div class="productitem-main-content">
        <div class="left-section">
          <div class="main-image-div">
            <img class="main-image" src="/download.jpg" alt="" />
          </div>
          <div className="nameanddescriptionandstatus">
            <div className="nameanddescription">
              <h3>Fresh Letters</h3>
              <div className="locationandpostedby">
                <p class="location">Alagbado,  Lagos State</p>
                <p className="postedby"><span>Posted by</span> Victor Akubo on Dec 28 2021</p>
              </div>
            </div>
            <p className="status"><p>Available</p></p>
          </div>

          <div class="variation">
            <h3>Details</h3>
            <div className="info">
              <div className="labelandvaluediv">
                <p className="label">Category</p>
                <p className="label">Business</p>
                <p className="label">Business Phone</p>
                <p className="label">Units of Measurement</p>
              </div>
              <div className="labelandvaluediv">
                <p className="value">Vegetable</p>
                <p className="value">Bam farm house, Kuje - Abuja</p>
                <p className="value">+234 810 080 8039</p>
                <p className="value">Gram, Bag, Basket</p>
              </div>
            </div>
          </div>
          <div class="variation">
            <h3>Variation</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Selling Price</th>
                  <th>Bargain Threshold</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="imageandsize"> <img src="/download.jpg" />
                    25kg Sacks Bag</td>
                  <td className="thickquantity">18</td>
                  <td className="thickprice">$30.00</td>
                  <td className="thickprice">$30.00</td>
                </tr>
                <tr>
                  <td class="imageandsize"> <img src="/download.jpg" />25kg Sacks Bag</td>
                  <td className="thickquantity">19</td>
                  <td className="thickprice">$10.00</td>
                  <td className="thickprice">$10.00</td>
                </tr>
                <tr>
                  <td class="imageandsize"> <img src="/download.jpg" />
                    25kg Sacks Bag</td>
                  <td className="thickquantity">22</td>
                  <td className="thickprice">$10.00</td>
                  <td className="thickprice">$10.00</td>
                </tr>
                <tr>
                  <td class="imageandsize"> <img src="/download.jpg" />
                    25kg Sacks Bag</td>
                  <td className="thickquantity">3</td>
                  <td className="thickprice">$30.00</td>
                  <td className="thickprice">$30.00</td>
                </tr>
                <tr>
                  <td class="imageandsize"> <img src="/download.jpg" />
                    25kg Sacks Bag</td>
                  <td className="thickquantity">1,000</td>
                  <td className="thickprice">$3.50</td>
                  <td className="thickprice">$3.50</td>
                </tr>
                <tr>
                  <td class="imageandsize"> <img src="/download.jpg" />
                    25kg Sacks Bag</td>
                  <td className="thickquantity">700</td>
                  <td className="thickprice">$15.00</td>
                  <td className="thickprice">$15.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="variation">
            <h3>Description</h3>
            <p className="variationdescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
          </div>
        </div>
        <div class="right-section">
          <div class="top-content">
            <div class="thumbnail-grid">
              <img src="/download.jpg" className='activeimage' alt="Thumbnail 1" />
              <img src="/download.jpg" alt="Thumbnail 2" />
              <img src="/download.jpg" alt="Thumbnail 3" />
              <img src="/download.jpg" alt="Thumbnail 4" />
            </div>
            <div class="price">$2.00 /<span>gram</span> </div>
          </div>

          <div class="bottom-buttons">
            <button class="button delete">Delete Product</button>
            <button class="button edit">Edit Product</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem