import React, { useState, useEffect } from "react";
import "../../styles/products/ProductsTable.css"; // Import CSS
import { useNavigate } from "react-router-dom";

const dummyData = [
  { menuitems :"Mango", category: "Bulk ", date:"15/10/2020", price: 30, status: "Draft" },
  { menuitems: "Beans", category: "Mixed ", date:"15/10/2020", price: 19, status: "Out of Stock" },
  { menuitems: "Rice ", category: "Bulk ", date:"15/10/2020", price: 34, status: "Available" },
  { menuitems: "Groundnut oil ", category: "Pieces ", date:"15/10/2020", price: 89, status: "Out of Stock" },
  { menuitems: "Beans", category: "Mixed ", date:"15/10/2020", price: 99, status: "Available" },
  { menuitems: "Lemon", category: "Pieces ", date:"15/10/2020", price: 76, status: "Out of Stock" },
  { menuitems: "Flour", category: "Pieces ", date:"15/10/2020", price: 89, status: "Available" },
];

const ProductsTable  = () => {
  const navigate = useNavigate()
  const rowsPerPage = 7;
  const [status, setStatus] = useState("All Bargains");
  const totalPages = Math.ceil(dummyData.length / rowsPerPage);
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
  const filteredData = filter === "All Bargains" ? dummyData : dummyData.filter(item => item.status === filter);
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);

  }, [currentPage])
  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle filter change and reset pagination
  const handleFilterChange = (status) => {
    setFilter(status);
    setCurrentPage(1); // Reset to first page when filter changes
  };



  return (
    <div className="tablesortandtable">
      <div onClick={()=>navigate("/product/add_new_product")} className="add_driver">
        <img src="/assets/add.svg" alt="" />
        <p>Add New Menu</p>
      </div>
      <div className="tablecontainerbargain">
        <table>
          <thead>
            <tr>
              <th>Menu Items </th>
              <th>Caregory </th>
              <th>Date Added<span><img src="/assets/downarrow.svg" alt="" /></span></th>
              <th>Status </th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={row.id}>
                <td className="imageanditem"><img className="itemimage" src="mail-dynamic-color.png"/> <span>{row.menuitems}</span></td>
                <td className="items">{row.category}</td>
                <td>{row.date}</td>
                <td><div className={row.status === "Available" ? "approved" : row.status === "Out of Stock" ? "declined" : "draft"}>{row.status}</div></td>
                <td>${row.price}</td>
                <td>--- </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="pagination">
        <div className="previous"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img src="/assets/Vector.svg" alt="" />
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
        <div className="next"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(dummyData.length / rowsPerPage)))}
          disabled={indexOfLastRow >= dummyData.length}
        >
          Next
          <img src="/assets/Vector.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductsTable ;


