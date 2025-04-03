import React from "react";
import "../styles/products/NewProduct.css";

const NewProduct = () => {
  return (
    <div className="container_newproduct">
      <div className="content_newproduct">
        <div className="form-section_newproduct">
          <div className="product-container_newproduct">
            <p className="section-title_newproduct">Create Product</p>

            <div className="input-group_newproduct">
              <label>Product Name</label>
              <input type="text" placeholder="Enter Product Name" />
            </div>

            <div className="input-group_newproduct">
              <label>Product Category</label>
              <select>
                <option>Select Product Category</option>
              </select>
            </div>

            <div className="input-group_newproduct">
              <label>Unit of Measurement</label>
              <select className="full-width_newproduct">
                <option>Select Unit of Measurement</option>
              </select>
            </div>

            <div className="selected-units_newproduct">
              {[
                "Gram (g)",
                "Pound (lbs)",
                "Cup",
                "Kilogram (kg)",
                "Modu",
              ].map((unit) => (
                <span key={unit} className="unit-tag_newproduct">
                  {unit} <span className="remove_newproduct">x</span>
                </span>
              ))}
            </div>

            <div className="input-group_newproduct">
              <label>Product Description</label>
              <textarea placeholder="Enter Product Description"></textarea>
            </div>

            <div className="input-group_newproduct">
              <label>Product Variation</label>
              <button className="add-btn_newproduct">+ Add Variation</button>
            </div>

            <table className="product-table_newproduct">
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
                      <img src="bag-icon.png" className="icon_newproduct" alt="Bag Icon" /> 35kg Sack Bag
                    </td>
                    <td>11</td>
                    <td>$30.00</td>
                    <td>Nil</td>
                  </tr>
                )}
              </tbody>
            </table>

            <p className="optional_newproduct">Optional</p>

            <div className="input-group_newproduct">
              <label>Promo</label>
              <button className="add-btn_newproduct">+ Add Promo</button>
            </div>

            <div className="input-group_newproduct">
              <label>Special Tags</label>
              <select>
                <option>Select Product Category</option>
              </select>
            </div>

            <button className="add-tag_newproduct">+ Add Tag</button>
            <div className="selected-tags_newproduct">
              {["White Rice", "Brown Rice", "Arborio", "Jasmine", "Basmati"].map((tag) => (
                <span key={tag} className="tag_newproduct">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="right-section_newproduct">
          <div className="image-grid_newproduct">
            {["item1.png", "item2.png", "item3.png", "item4.png"].map((img, index) => (
              <img key={index} src={img} className="product-image_newproduct" alt="Product" />
            ))}
          </div>
          <div className="button-group_newproduct">
            <button className="save-draft_newproduct">Save as draft</button>
            <button className="preview_newproduct">Preview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;