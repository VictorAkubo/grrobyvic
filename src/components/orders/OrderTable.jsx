import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/orders/OrdersTable.css"
import DeclineOrder from "./DeclineOrder";
import SelectDriver from "./SelectDriver";
const OrderTable = ({ data, rowsPerPage }) => {
    const navigate = useNavigate()
    const [status, setStatus] = useState("All Orders");
    const [activeActionIndex, setActiveActionIndex] = useState(false);
    const [cancelOrderAction, setCancelOrderAction] = useState(false);
    const totalPages = Math.ceil(data.length / rowsPerPage);
    /*  
  
  
     // Get current page data
  
  
     
     const [currentPage, setCurrentPage] = useState(1);
     
     const indexOfLastRow = currentPage * rowsPerPage;
     const indexOfFirstRow = indexOfLastRow - rowsPerPage;
     let currentData = data.slice(indexOfFirstRow, indexOfLastRow); */

    const [currentPage, setCurrentPage] = useState(() => {
        return Number(localStorage.getItem("currentPage")) || 1
    });
    const [filter, setFilter] = useState("All Orders"); // Default: Show all


    // Handle page change
    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    // Filter data based on selected status
    const filteredData = filter === "All Orders" ? data : data.filter(item => item.status === filter);
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
                <div className="customertablesort">
                    <p className={filter === "All Orders" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("All Orders")}>All Orders</p>
                    <p className={filter === "Pending" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("Pending")}>Pending Orders</p>
                    <p className={filter === "Delivered" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("Delivered")}>Delivered Orders</p>
                    <p className={filter === "Declined" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("Declined")}>Declined Orders</p>

                </div>
            </div>
            <div className="customercustomertablesortandtable">
                <div className="customertable-container">
                    <div className="customertable-containerheader">
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
                        <div className="Business">
                            <h2>Business Name </h2>
                            <img src="dropIcon.svg" />
                        </div>
                        <div className="Date">
                            <h2>Date</h2>
                            <img src="dropIcon.svg" />
                        </div>
                        <div className="Status">
                            <h2>Status</h2>
                            <img src="dropIcon.svg" />
                        </div>
                        <div className="Action">
                            <h2>Actions</h2>
                            <img src="dropIcon.svg" />
                        </div>
                    </div>
                    <div className="customertable-containerbody">
                        {currentRows.length > 0 ? (
                            currentRows.map((row, index) => (
                                <div className="customertable-containerrow" key={row.id}>
                                    <div className="id">
                                        {currentPage <= 1 ? index + 1 : indexOfFirstRow + index + 1}
                                    </div>
                                    <div className="Items" onClick={() => navigate("/orders/1")}>
                                        {useTruncate(row.items, 65)}
                                    </div>
                                    <div className="Purchase">
                                        {row.purchaseType}
                                    </div >
                                    <div className="Business">
                                        <img src="/download.jpg" alt="" />
                                        <span>{row.businessName}</span>
                                    </div>
                                    <div className="Date">
                                        {row.date}
                                    </div >
                                    <div className="Status">
                                        <p className={`${row.status === "Delivered" ? "delivered" : row.status === "Declined" ? "declined" : row.status === "Pending" ? "pending" : ""}`}>{row.status}</p>
                                    </div >
                                    <div className="Action">
                                        <img src="/ellipsis.svg" alt=""
                                            onClick={() =>
                                                setActiveActionIndex(
                                                    activeActionIndex === index ? null : index
                                                )}
                                        />
                                        { /*  onClick={() => setActiveActionIndex(true)}  */}
                                        {activeActionIndex === index && (
                                            <ul className="dashboardaction">
                                                <li className="normal underline">
                                                    <img src="/vieworder.svg" /> View Order
                                                </li>
                                                <li className="normal underline">
                                                    <img src="/trackorder.svg" /> Track Order
                                                </li>
                                                <li className="normal underline">
                                                    <img src="/approveorder.svg" /> Approve Order
                                                </li>
                                                <li className="normal underline">
                                                    <img src="/cancelorder.svg" onClick={() => setCancelOrderAction(true)} />Cancel Order
                                                </li>
                                                {/*  <li className="normal delete">
                                                    <img src="/delete.svg" />
                                                    Delete Product
                                                </li> */}

                                            </ul>
                                        )}

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
                {cancelOrderAction && (
                    <>
                        <div className="modal-backdrop" onClick={() => setCancelOrderAction(false)} />
                        < DeclineOrder />
                    </>
                )}
                {/* Pagination Controls */}
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
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(data.length / rowsPerPage)))}
                        disabled={indexOfLastRow >= data.length}
                    >
                        Next
                        <img src="/assets/Vector.svg" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderTable