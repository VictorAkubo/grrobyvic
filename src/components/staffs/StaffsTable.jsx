import React, { useEffect, useState } from "react";
import "../../styles/staffs/StaffsTable.css";
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
  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  // Handle filter change and reset pagination
  const handleFilterChange = (status) => {
    setFilter(status);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  return (
    <div className="tablesortandtable">
      <div className="add_driver">
        <img src="/assets/add.svg" alt="" />
        <p>Add New Driver</p>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Date Joined</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, index) => (
                <tr>
                  <td>
                    {" "}
                    {currentPage <= 1 ? index + 1 : indexOfFirstRow + index + 1}
                  </td>
                  <td className="businessandlogo">
                    {" "}
                    <img src={row["Profile Picture"]} alt="" />{" "}
                    <span>{row.user}</span>
                  </td>
                  <td className="items">{row.email}</td>
                  <td>
                    <p>{row.date}</p>
                  </td>
                  <td>{row["Phone Number"]}</td>
                  <td className="actionandmessage">
                    <img src="/assets/ellipsis.svg" alt="" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-data">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="pagination">
        <div
          className="previous"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img src="/assets/Vector.svg" alt="" />
          Back
        </div>
        <div className="numbering">
          {Array.from({ length: totalPages }, (_, i) => (
            <div
              className={`allpagebutton ${
                currentPage === i + 1 ? "pagebuttonactive" : "pagebutton"
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
          <img src="/assets/Vector.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default StaffsTable;
