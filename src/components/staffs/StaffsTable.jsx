import React, { useEffect, useState } from "react";
import "../../styles/staffs/StaffsTable.css";
import { useNavigate } from "react-router-dom";
const StaffsTable = ({ data, rowsPerPage }) => {
  const [status, setStatus] = useState("All Orders");
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const [currentPage, setCurrentPage] = useState(() => {
    return Number(localStorage.getItem("currentPage")) || 1;
  });
  const [filter, setFilter] = useState("All Orders"); // Default: Show all

  // Handle page change
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  // Filter data based on selected status
  const filteredData =
    filter === "All Orders"
      ? data
      : data.filter((item) => item.status === filter);
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);
  // customerspagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  // Handle filter change and reset customerspagination
  const handleFilterChange = (status) => {
    setFilter(status);
    setCurrentPage(1); // Reset to first page when filter changes
  };
  const navigate = useNavigate()

  return (
    <div className="stafftablesortandtable">

      <div className="stafftable-container">
        <div className="stafftable-containerheader">
          <div className="id">
            <h2>ID</h2>
            <img src="dropIcon.svg" />
          </div>
          <div className="User">
            <h2>User</h2>
            <img src="dropIcon.svg" />
          </div>
          <div className="Email">
            <h2>Email</h2>
            <img src="dropIcon.svg" />
          </div>
          <div className="Date">
            <h2>Date Joined</h2>
            <img src="dropIcon.svg" />
          </div>
          <div className="Phone">
            <h2>Phone Number</h2>
            <img src="dropIcon.svg" />
          </div>
          <div className="Action">
            <h2>Action</h2>
          </div>
        </div>
        <div className="stafftable-containerbody">
          {currentData.length > 0 ? (
            currentData.map((row, index) => (
              <div className="stafftable-containerrow">
                <div className="id">
                  {currentPage <= 1 ? index + 1 : indexOfFirstRow + index + 1}
                </div>
                <div className="User" onClick={()=>navigate("/staff/specificstaff")}>
                  <img src={row["Profile Picture"]} alt="" />
                  <span>{row.user}</span>
                </div>
                <div className="Email">
                  {row.email}
                </div>
                <div className="Date">
                  {row.date}
                </div >
                <div className="Phone">
                  {row["Phone Number"]}
                </div >
                <div className="Action">
                  <img src="/ellipsis.svg" alt="" />
                </div >
              </div >
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-data">
                No data available
              </td>
            </tr>
          )}
        </div>
      </div >
      {/* customerspagination Controls */}
      < div className="customerspagination" >
        <div
          className="previous"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img src="/left.svg" alt="" />
          Back
        </div>
        <div className="numbering">
          {Array.from({ length: totalPages }, (_, i) => (
            <div
              className={`allpagebutton ${currentPage === i + 1 ? "pagebuttonactive" : "pagebutton"
                }`}
              key={i + 1}
              onClick={() => changePage(i + 1)}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div
          className="next"
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(data.length / rowsPerPage))
            )
          }
          disabled={indexOfLastRow >= data.length}
        >
          Next
          <img src="/right.svg" alt="" />
        </div>
      </div >
    </div >
  );
};

export default StaffsTable;
