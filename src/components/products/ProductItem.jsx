import React, { useEffect, useState } from 'react'
import "../../styles/products/ProductItem.css"
import OrderNav from '../OrderNav'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import formatDate from '../../functions/DateConverter';
const ProductItem = () => {
  const { id } = useParams(); // This gets the ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://grro-130ba33f07e0.herokuapp.com/api/v1/product/products/?pk=${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });

        setProduct(res.data.data); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    console.log(product)
    fetchProduct();

  }, [id]);

  if (!product) return <p className="productitem-main-content">Loading...</p>;

  return (
    <>
      <OrderNav header={`Product - ${product.name}`} />
      <div className="productitem-main-content">
        <div className="left-section">
          <div className="main-image-div">
            <img className="main-image" src={product.images[0].thumbnail} alt="" />
          </div>
          <div className="nameanddescriptionandstatus">
            <div className="nameanddescription">
              <h3>{product.name}</h3>
              <div className="locationandpostedby">
                <p className="location">{product.supplier.address}</p>
                <p className="postedby"><span>Posted by</span>{product.supplier.name} on {formatDate(product.supplier.created_at)}</p>
              </div>
            </div>
            <p className="status"><p>Available</p></p>
          </div>

          <div className="variation">
            <h3>Details</h3>
            <div className="info">
              <div className="labelandvaluediv">
                <p className="label">Category</p>
                <p className="label">Business</p>
                <p className="label">Business Phone</p>
                <p className="label">Units of Measurement</p>
              </div>
              <div className="labelandvaluediv">
                <p className="value">{product.category.name}</p>
                <p className="value">{product.supplier.address}</p>
                <p className="value">{product.supplier.contact_phone}</p>
                <p className="value">{product.sale_type}</p>
              </div>
            </div>
          </div>
          <div className="variation">
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
                {
                  product.variations.map(variation => (
                    <tr>
                      <td className="imageandsize"> <img src="/download.jpg" />
                        {variation.value}</td>
                      <td className="thickquantity">{variation.quantity_per_piece}</td>                     
                      <td className="thickprice">${variation.price}</td>
                      <td className="thickprice">${variation.bargain_threshold}</td>
                    </tr>
                  ))

                }
                {/*  <tr>
                  <td className="imageandsize"> <img src="/download.jpg" />25kg Sacks Bag</td>
                  <td className="thickquantity">19</td>
                  <td className="thickprice">$10.00</td>
                  <td className="thickprice">$10.00</td>
                </tr>
                <tr>
                  <td className="imageandsize"> <img src="/download.jpg" />
                    25kg Sacks Bag</td>
                  <td className="thickquantity">22</td>
                  <td className="thickprice">$10.00</td>
                  <td className="thickprice">$10.00</td>
                </tr>
                <tr>
                  <td className="imageandsize"> <img src="/download.jpg" />
                    25kg Sacks Bag</td>
                  <td className="thickquantity">3</td>
                  <td className="thickprice">$30.00</td>
                  <td className="thickprice">$30.00</td>
                </tr>
                <tr>
                  <td className="imageandsize"> <img src="/download.jpg" />
                    25kg Sacks Bag</td>
                  <td className="thickquantity">1,000</td>
                  <td className="thickprice">$3.50</td>
                  <td className="thickprice">$3.50</td>
                </tr> */}
                <tr>
                  <td className="imageandsize"> <img src="/download.jpg" />
                    25kg Sacks Bag</td>
                  <td className="thickquantity">700</td>
                  <td className="thickprice">$15.00</td>
                  <td className="thickprice">$15.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="variation">
            <h3>Description</h3>
            <p className="variationdescription">{product.description}</p>
          </div>
        </div>
        <div className="right-section">
          <div className="top-content">
            <div className="thumbnail-grid">
              <img src={product.images[0].image_1} className='activeimage' alt="Thumbnail 1" />
              <img src={product.images[0].image_2} alt="Thumbnail 2" />
              <img src={product.images[0].image_3} alt="Thumbnail 3" />
              <img src={product.images[0].image_4} alt="Thumbnail 4" />
            </div>
            <div className="price">$2.00 /<span>gram</span> </div>
          </div>

          <div className="bottom-buttons">
            <button className="button delete">Delete Product</button>
            <button className="button edit">Edit Product</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem