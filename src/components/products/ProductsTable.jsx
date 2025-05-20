import React, { useState, useEffect } from "react";
import "../../styles/products/ProductsTable.css"; // Import CSS
import { useNavigate } from "react-router-dom";
import Outofstock from "./Outofstock";
import ProductAvailable from "./ProductAvailable";
import ProductDelete from "./ProductDelete";
import axios from "axios";
import formatDate from "../../functions/DateConverter";

const dummyData = [
  { menuitems: "Mango", category: "Bulk ", date: "15/10/2020 6:20PM", price: 50, status: "Draft" },
  { menuitems: "Beans", category: "Mixed ", date: "15/10/2020 6:20PM", price: 55, status: "Out of Stock" },
  { menuitems: "Rice ", category: "Bulk ", date: "15/10/2020 6:20PM", price: 50, status: "Available" },
  { menuitems: "Groundnut oil ", category: "Pieces ", date: "15/10/2020 6:20PM", price: 100, status: "Out of Stock" },
  { menuitems: "Beans", category: "Mixed ", date: "15/10/2020 6:20PM", price: 55, status: "Available" },
  { menuitems: "Lemon", category: "Pieces ", date: "15/10/2020 6:20PM", price: 50, status: "Out of Stock" },
  { menuitems: "Flour", category: "Pieces ", date: "15/10/2020 6:20PM", price: 55, status: "Available" },
];

const ProductsTable = () => {
  const navigate = useNavigate();
  const rowsPerPage = 6;
  const [status, setStatus] = useState("All Bargains");
  const [activeActionIndex, setActiveActionIndex] = useState(null);
  const [outofstock, setOutofstock] = useState(false);
  const [productAvailable, setProductAvailable] = useState(false);
  const [productDelete, setProductDelete] = useState(false);



  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("access_token");
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://grro-130ba33f07e0.herokuapp.com/api/v1/product/products/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Access the 'data' object inside the response
      const productsData = response.data.data;

      // Save to state or use directly
      setProducts(response.data.data.results);
      console.log(products)
      console.log(token)

    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();

  }, []);




  const totalPages = Math.ceil(dummyData.length / rowsPerPage);
  const useTruncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "..."
  }
  /*  


   // Get current page dummyData


   
   const [currentPage, setCurrentPage] = useState(1);
   
   const indexOfLastRow = currentPage * rowsPerPage;
   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
   let currentData = dummyData.slice(indexOfFirstRow, indexOfLastRow); */

  const [currentPage, setCurrentPage] = useState(() => {
    return Number(localStorage.getItem("currentPage")) || 1
  });
  const [filter, setFilter] = useState("All Bargains"); // Default: Show all


  // Handle page change
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  // Filter dummyData based on selected status
  /*   const products = filter === "All Bargains" ? dummyData : dummyData.filter(item => item.status === filter); */
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);

  }, [currentPage])
  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = products.slice(indexOfFirstRow, indexOfLastRow);

  // Handle filter change and reset pagination
  const handleFilterChange = (status) => {
    setFilter(status);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  if (products.length < 1) return <p className="no-data">Loading...</p>;

  return (
    <div className="producttablesortandtable">
      {
        outofstock && (
          <>
            <div className="modal-backdrop" onClick={() => setOutofstock(false)} />
            <Outofstock setOutofstock={setOutofstock} />
          </>
        ) || productAvailable && (
          <>
            <div className="modal-backdrop" onClick={() => setProductAvailable(false)} />
            <ProductAvailable />
          </>

        )
        || productDelete && (
          <>
            <div className="modal-backdrop" onClick={() => setProductDelete(false)} />
            <ProductDelete outofstock={setOutofstock} />
          </>
        )
      }
      <div className="add_productbuttonnowdiv">
        <div onClick={() => navigate("/product/add_new_product")} className="add_productbuttonnow">
          <img src="/bigplus.svg" alt="" />
          <p>Add New Menu</p>
        </div>
      </div>
      <div className="product-orders-table-maindiv">
        <table className="product-orders-table">
          <thead>
            <tr>
              <th className="product-orders-tables Menuitem">
                <p>Menu Items </p>
                <div>
                  <p></p>
                </div>
              </th>
              <th className="product-orders-tables Category">
                <p>Caregory</p>
              </th>
              <th className="product-orders-tables Date">
                <p>Date Added</p>
                <img src="/arrowdownward.svg" />
              </th>
              <th className="product-orders-tables Status">
                <p>Status</p>
              </th>
              <th className="product-orders-tables Price">
                <p> Price</p>
              </th>
              <th className="product-orders-tables Action">
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={row.id}>
                <td onClick={() => navigate(`/product/${row.id}`)} className="Menuitem MenuitemandImage product-orders-tablebody">
                  <img className="itemimages" src="/Octocat.png" />
                  {row.name}
                </td>
                <td className="Category product-orders-tablebody">{row.category.name}</td>
                <td className="Date product-orders-tablebody">{formatDate(row.created_at)}</td>
                <td className="Status product-orders-tablebody">
                  <div className={row.status === "Available" ? "available" : row.status === "Out of Stock" ? "outofstockstatus" : !row.status ? "available" : "draft"}>{row.status ? row.status : "Available"}</div>
                </td>
                <td className="Price product-orders-tablebody">${row.price}.00</td>
                <td className="modalareaaction Action product-orders-tablebody">
                  <p
                    className="cursorellipsis"
                    onClick={() =>
                      setActiveActionIndex(
                        activeActionIndex === index ? null : index
                      )
                    }
                  >
                    <img src="/ellipsis.svg" />
                  </p>
                  {activeActionIndex === index && (
                    <ul className="productaction">
                      <li className="normal underline">
                        <img src="/vieworder.svg" /> View Product
                      </li>
                      <li className="normal underline">
                        <img src="/edit.svg" /> Edit Product
                      </li>
                      <li className="normal underline" onClick={() => setProductAvailable(true)}>
                        <img src="/approveorder.svg" /> Available
                      </li>
                      <li className="normal underline" onClick={() => setOutofstock(true)}>
                        <img src="/cancelorder.svg" /> Out of Stock
                      </li>
                      <li className="normal delete" onClick={() => setProductDelete(true)}>
                        <img src="/trash.svg" /> Delete Product
                      </li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="productpagination">
          <div className={currentPage === 1 ? "disabled" : "previous"}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <img src="/left.svg" alt="" />
            Back
          </div>
          <div className="numbering">

            {Array.from({ length: totalPages }, (_, i) => (
              <div
                className={`allpagebutton ${currentPage === i + 1 ? "pagebuttonactive" : "pagebutton"}`}
                key={i + 1}
                onClick={() => changePage(i + 1)}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className={indexOfLastRow >= dummyData.length ? "disabled" : "next"}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(dummyData.length / rowsPerPage)))}
            disabled={indexOfLastRow >= dummyData.length}
          >
            Next
            <img src="/right.svg" alt="" />
          </div>
        </div>
      </div>
      {/* Pagination */}
    </div >
  );
};

export default ProductsTable;


