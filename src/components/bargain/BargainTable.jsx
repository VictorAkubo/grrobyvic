import React, { useState, useEffect } from "react";
import "../../styles/bargain/BargainTable.css"; // Import CSS

const dummyData = [
  { id: 1, items: "Mango (10kg Bag), Tomatoes (35kg), Onion (1kg)", type: "Bulk sale", original: 400, bargained: 330, date: "12 Nov 2023", status: "approved" },
  { id: 2, items: "Beans (6kg), Oranges (35kg), Melon (10pcs)", type: "Mixed sale", original: 400, bargained: 119, date: "12 Nov 2023", status: "declined" },
  { id: 3, items: "Rice (60kg), Tin tomatoes (9), Eggs (20)", type: "Bulk sale", original: 400, bargained: 334, date: "12 Nov 2023", status: "approved" },
  { id: 4, items: "Groundnut oil (30kg), Soya Beans (60kg)", type: "Pieces sale", original: 400, bargained: 389, date: "12 Nov 2023", status: "declined" },
  { id: 5, items: "Beans (6kg), Oranges (35kg), Melon (10pcs)", type: "Mixed sale", original: 400, bargained: 399, date: "12 Nov 2023", status: "approved" },
  { id: 6, items: "Lemon (10kg), Tomatoes (35kg), Onion (1kg)", type: "Pieces sale", original: 400, bargained: 376, date: "12 Nov 2023", status: "declined" },
  { id: 7, items: "Flour (60kg), Tin tomatoes (9), Eggs (20)", type: "Pieces sale", original: 400, bargained: 389, date: "12 Nov 2023", status: "approved" },
];

const BargainTable = () => {
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

  const useTruncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "..."
  }

  return (
    <div className="tablesortandtable">
      <div className="bargaintablesortdiv">
        <div className="bargainedtablesort">
          <p className={filter === "All Bargains" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("All Bargains")}>All Bargains</p>
          <p className={filter === "approved" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("approved")}>Approved Bargains</p>
          <p className={filter === "declined" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("declined")}>Declined Bargains</p>

        </div>
      </div>
      <div className="bargainbargaintablesortandtable">
        <div className="bargaintable-container">
          <div className="bargaintable-containerheader">
            <div className="id">
              <h2>ID</h2>
              <img src="dropIcon.svg" />
            </div>
            <div className="Items">
              <h2>Items Purchased</h2>
              <img src="dropIcon.svg" />
            </div>
            <div className="Purchase">
              <h2>Purchase Type</h2>
              <img src="dropIcon.svg" />
            </div>
            <div className="Original">
              <h2>Original Price</h2>
              <img src="dropIcon.svg" />
            </div>
            <div className="Bargained">
              <h2>Bargained Price</h2>
              <img src="dropIcon.svg" />
            </div>
            <div className="Date">
              <h2>Date</h2>
              <img src="dropIcon.svg" />
            </div>
            <div className="Approved">
            </div>
            <div className="Delivered">
            </div>
          </div>
          <div className="bargaintable-containerbody">
            {currentRows.length > 0 ? (
              currentRows.map((row, index) => (
                <div className="bargaintable-containerrow" key={row.id}>
                  <div className="id">
                    {currentPage <= 1 ? index + 1 : indexOfFirstRow + index + 1}
                  </div>
                  <div className="Items">
                    {useTruncate(row.items, 65)}
                  </div>
                  <div className="Purchase">
                    {row.type}
                  </div >
                  <div className="Original">
                    ${row.original}
                  </div>
                  <div className="Bargained">
                    ${row.bargained}
                  </div >
                  <div className="Date">
                    <p>{row.date}</p>
                  </div >
                  {
                    filter === "approved" ? (
                      <div className="Approved">
                        <button className="approvedblur">Approved</button>
                      </div >

                    ) : filter === "declined" ? (
                      <div className="Declined">
                        <button className="declinedblur">Declined</button>
                      </div >
                    ) : (
                      <>
                        <div className="Approved">
                          <button className="approved">Approved</button>
                        </div >
                        <div className="Declined">
                          <button className="declined">Declined</button>
                        </div >
                      </>

                    )
                  }
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


    </div>
  );
};

export default BargainTable;


