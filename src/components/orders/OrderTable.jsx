import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/orders/OrdersTable.css"
import DeclineOrder from "./DeclineOrder";
import SelectDriver from "./SelectDriver";
import axios from "axios";
import formatDate from "../../functions/DateConverter";
const OrderTable = ({ data, rowsPerPage }) => {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([]);
    const [supplier, setSupplier] = useState([]);
    const [matchedSuppliers, setMatchedSuppliers] = useState([]); // For storing matched supplier objects


    const [status, setStatus] = useState("All Orders");
    const [activeActionIndex, setActiveActionIndex] = useState(false);
    const [cancelOrderAction, setCancelOrderAction] = useState(false);
    const totalPages = Math.ceil(orders.length / rowsPerPage);

    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        const token = localStorage.getItem("access_token");
        try {
            const response = await axios.get(
                "https://grro-130ba33f07e0.herokuapp.com/api/v1/orders/all_orders/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const suppliersRes = await axios.get(
                "https://grro-130ba33f07e0.herokuapp.com/api/v1/product/suppliers/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setOrders(response.data.data);
            setSupplier(suppliersRes.data.data.results);


        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchOrders();
    }, []);


    useEffect(() => {
        if (orders.length > 0 && supplier.length > 0) {
            const supplierMatches = orders.map(order => {
                const supplierId = order?.order_items?.[0]?.product?.supplier;
                const supplierObj = supplier.find(s => s.id === supplierId);
                return supplierObj || null;
            });

            setMatchedSuppliers(supplierMatches);
             
        }
    }, [orders, supplier]);


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
    const filteredData = filter === "All Orders" ? orders : orders.filter(item => item.status === filter);
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
        if (text?.length <= maxLength) return text;
        return text?.slice(0, maxLength) + "..."
    }

    if (orders.length < 1) return <p className="no-data">Loading...</p>;


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
                            currentRows.map((row, index) => {
                                const supplierId = row?.order_items?.[0]?.product?.supplier;
                                const matchedSpecificSupplier = supplier.find(s => s.id === supplierId);
                                return (
                                    <div className="customertable-containerrow" key={row.id}>
                                        <div className="id">
                                            {currentPage <= 1 ? index + 1 : indexOfFirstRow + index + 1}
                                        </div>
                                        <div className="Items" onClick={() => navigate(`/orders/${row.id}`)}>
                                            {useTruncate(row?.order_items?.[0]?.product?.name, 65)}
                                        </div>
                                        <div className="Purchase">
                                            {row?.order_items?.[0]?.product?.sale_type}
                                        </div >
                                        <div className="Business">
                                            <img src="/download.jpg" alt="" />
                                            <span>{matchedSpecificSupplier?.name}</span>
                                        </div>
                                        <div className="Date">
                                            {formatDate(row.order_date)}
                                        </div >
                                        <div className="Status">
                                            <p className={`${row.status === "ORDER PLACED" ? "delivered" : row.status === "Declined" ? "declined" : row.status === "Pending" ? "pending" : ""}`}>{row.status}</p>
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
                                )
                            })
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
                <div className="customerspagination">
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
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(orders.length / rowsPerPage)))}
                        disabled={indexOfLastRow >= orders.length}
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