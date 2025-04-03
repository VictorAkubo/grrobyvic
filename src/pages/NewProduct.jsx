import React from "react";
import "../styles/products/NewProduct.css";

const NewProduct = () => {
  return (
    
    <div className="container">
      <div className="content">
        <div className="form-section">
          <div className="product-container">
            <p className="section-title">Create Product</p>

            <div className="input-group">
              <label>Product Name</label>
              <input type="text" placeholder="Enter Product Name" />
            </div>

            <div className="input-group">
              <label>Product Category</label>
              <select>
                <option>Select Product Category</option>
              </select>
            </div>

            <div className="input-group">
              <label>Unit of Measurement</label>
              <select className="full-width">
                <option>Select Unit of Measurement</option>
              </select>
            </div>

            <div className="selected-units">
              {[
                "Gram (g)",
                "Pound (lbs)",
                "Cup",
                "Kilogram (kg)",
                "Modu",
              ].map((unit) => (
                <span key={unit} className="unit-tag">
                  {unit} <span className="remove">x</span>
                </span>
              ))}
            </div>

            <div className="input-group">
              <label>Product Description</label>
              <textarea placeholder="Enter Product Description"></textarea>
            </div>

            <div className="input-group">
              <label>Product Variation</label>
              <button className="add-btn">+ Add Variation</button>
            </div>

            <table className="product-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Selling Price</th>
                  <th>Bargain Threshold</th>
                </tr>
              </thead>
              <tbody>
                {Array(5).fill(
                  <tr>
                    <td>
                      <img src="bag-icon.png" className="icon" alt="Bag Icon" /> 35kg Sack Bag
                    </td>
                    <td>11</td>
                    <td>$30.00</td>
                    <td>Nil</td>
                  </tr>
                )}
              </tbody>
            </table>

            <p className="optional">Optional</p>

            <div className="input-group">
              <label>Promo</label>
              <button className="add-btn">+ Add Promo</button>
            </div>

            <div className="input-group">
              <label>Special Tags</label>
              <select>
                <option>Select Product Category</option>
              </select>
            </div>

            <button className="add-tag">+ Add Tag</button>
            <div className="selected-tags">
              {["White Rice", "Brown Rice", "Arborio", "Jasmine", "Basmati"].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="image-grid">
            {["item1.png", "item2.png", "item3.png", "item4.png"].map((img, index) => (
              <img key={index} src={img} className="product-image" alt="Product" />
            ))}
          </div>
          <div className="button-group">
            <button className="save-draft">Save as draft</button>
            <button className="preview">Preview</button>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default NewProduct;







