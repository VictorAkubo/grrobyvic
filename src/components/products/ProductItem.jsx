import React from 'react'
import "../../styles/products/ProductItem.css"
const ProductItem = () => {
  return (
    <body>
  <div class="product-itemcontainer">
    <div class="main-content">
      
      <div class="left-section">
        <img class="main-image" src="./mail-dynamic-color.png" alt="Main Product Image" />
        <h3>Fresh Letters</h3>
        <p class="product-subtitle">Seasonal, crisp, and organic fresh lettuces grown on local farms.</p><div class="details-section">
      <h3>Details</h3>
      <div class="info">
        <p class="label">Category:</p>
        <p class="value">Vegetable</p>
        <p class="label">Business:</p>
        <p class="value">Bam farm house, Kuje - Abuja</p>
        <p class="label">Phone:</p>
        <p class="value">+234 810 080 8039</p>
        <p class="label">Units:</p>
        <p class="value">Gram, Bag, Basket</p>
      </div>
    </div>

    <div class="variation">
      <h3>Variation</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Tag Price</th>
            <th>Bargain Threshold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
               <td class="imageandsize"> <img class="item-img" src="./mail-dynamic-color.png" alt="Main Product Image" />
    25kg Sacks Bag</td>
            <td>18</td>
            <td>$30.00</td>
            <td>$30.00</td>
          </tr>
          <tr>
                              <td class="imageandsize"> <img class="item-img" src="./mail-dynamic-color.png" alt="Main Product Image" />
    25kg Sacks Bag</td>
            <td>19</td>
            <td>$10.00</td>
            <td>$10.00</td>
          </tr>
          <tr>
               <td class="imageandsize"> <img class="item-img" src="./mail-dynamic-color.png" alt="Main Product Image" />
    25kg Sacks Bag</td>
            <td>22</td>
            <td>$10.00</td>
            <td>$10.00</td>
          </tr>
          <tr>
                       <td class="imageandsize"> <img class="item-img" src="./mail-dynamic-color.png" alt="Main Product Image" />
    25kg Sacks Bag</td>
            <td>3</td>
            <td>$30.00</td>
            <td>$30.00</td>
          </tr>
          <tr>
                              <td class="imageandsize"> <img class="item-img" src="./mail-dynamic-color.png" alt="Main Product Image" />
    25kg Sacks Bag</td>
            <td>1,000</td>
            <td>$3.50</td>
            <td>$3.50</td>
          </tr>
          <tr>
                         <td class="imageandsize"> <img class="item-img" src="./mail-dynamic-color.png" alt="Main Product Image" />
    25kg Sacks Bag</td>
            <td>700</td>
            <td>$15.00</td>
            <td>$15.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="description">
          <h3>Description</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>

  
  <div class="right-section">
    <div class="top-content">
      <div class="thumbnail-grid">
        <img src="./mail-dynamic-color.png" alt="Thumbnail 1" />
        <img src="./mail-dynamic-color.png" alt="Thumbnail 2" />
        <img src="./mail-dynamic-color.png" alt="Thumbnail 3" />
        <img src="./mail-dynamic-color.png" alt="Thumbnail 4" />
      </div>
      <div class="price">$2.00 /<span>gram</span> </div>
    </div>

    <div class="bottom-buttons">
      <button class="button delete">Delete Product</button>
      <button class="button edit">Edit Product</button>
    </div>
  </div>
</div>

  </div>
</body>
  )
}

export default ProductItem