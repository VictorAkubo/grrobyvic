import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/orders/OrdersTable.css"
const OrderTable = ({ data, rowsPerPage }) => {
    const navigate = useNavigate()
    const [status, setStatus] = useState("All Orders");
    const totalPages = Math.ceil(data.length / rowsPerPage);


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


    return (
        <div className="tablesortandtable">
            <div className="tablesort">
                <p className={filter === "All Orders" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("All Orders")}>All Orders</p>
                <p className={filter === "Pending" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("Pending")}>Pending Orders</p>
                <p className={filter === "Delivered" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("Delivered")}>Delivered Orders</p>
                <p className={filter === "Declined" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("Declined")}>Declined Orders</p>

            </div>
            <div className="tablecontainerorders">
                <table >
                    <thead>
                        <tr>
                            <th>ID  <span><img src="/assets/downarrow.svg" alt="" /></span></th>
                            <th>Items Purchased  <span><img src="/assets/downarrow.svg" alt="" /></span></th>
                            <th>Purchase Type  <span><img src="/assets/downarrow.svg" alt="" /></span></th>
                            <th>Business Name  <span><img src="/assets/downarrow.svg" alt="" /></span></th>
                            <th>Date  <span><img src="/assets/downarrow.svg" alt="" /></span></th>
                            <th>Status  <span><img src="/assets/downarrow.svg" alt="" /></span></th>
                            <th>Actions  <span><img src="/assets/downarrow.svg" alt="" /></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.length > 0 ? (
                            currentRows.map((row, index) => (
                                <tr onClick={()=>navigate("/orders/1")} className="tr" key={row.id}>
                                    <td>{currentPage <= 1 ? index + 1 : indexOfFirstRow + index + 1}</td>
                                    <td className="items">{row.items}</td>
                                    <td>{row.purchaseType}</td>
                                    <td className="businessandlogo"> <img src="/assets/product_8.png" alt="" /> <span>{row.businessName}</span></td>
                                    <td>{row.date}</td>
                                    <td ><p className={`${row.status === "Delivered" ? "delivered" : row.status === "Declined" ? "declined" : row.status === "Pending" ? "pending" : ""}`}>{row.status}</p></td>
                                    <td>
                                        <img className="ellipsis"  src="/assets/ellipsis.svg" alt="" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="no-data">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
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
        </div >
    );
};

export default OrderTable