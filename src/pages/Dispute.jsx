import React, { useEffect, useState } from 'react';
import "../styles/dispute/Dispute.css";
import { useNavigate } from 'react-router-dom';
import OrderNav from '../components/OrderNav';




const disputes = [
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    },
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    },
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    },
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    },
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    },
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    },
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    },
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    },
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    },
    {
        "name": "Akubo Victor Ugbede",
        "date": "2021-10-70",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis, quos laborum.Doloribus cumque reprehenderit provident architecto quis! Quas, recusandae voluptas nam porro saepe ab, facere libero eum natus ex earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reiciendis,qu",
        "response": "No Responses"
    }
]
const Dispute = () => {

    const navigate = useNavigate();
    const rowsPerPage = 4;
    const [status, setStatus] = useState("All Bargains");
    const [activeActionIndex, setActiveActionIndex] = useState(null);



    const totalPages = Math.ceil(disputes.length / rowsPerPage);
    const useTruncate = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "..."
    }
    /*  
  
  
     // Get current page disputes
  
  
     
     const [currentPage, setCurrentPage] = useState(1);
     
     const indexOfLastRow = currentPage * rowsPerPage;
     const indexOfFirstRow = indexOfLastRow - rowsPerPage;
     let currentData = disputes.slice(indexOfFirstRow, indexOfLastRow); */

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
    // Filter disputes based on selected status
    const filteredData = filter === "All Bargains" ? disputes : disputes.filter(item => item.status === filter);
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
        <>
            <OrderNav header="Dispute" />
            <div className="tablesortandtable">
                <div className="dispute-orders-table-maindiv">
                    <div className="dispute-orders-table">
                        {currentRows.map((dispute) => (
                            <div className="disputes" onClick={() => navigate("/disputeitem")}>
                                <div className="headerimageandnameanddate">
                                    <div className="headerimageandname">
                                        <img src="/Octocat.png" />
                                        <h2>{dispute.name}</h2>
                                    </div>
                                    <div className="dsiputedate"><p>{dispute.date}</p></div>
                                </div>
                                <p className="description">{dispute.description}</p>
                                <h3 className="response">{dispute.response}</h3>
                            </div>
                        )
                        )
                        }
                    </div>

                    <div className="pagination">
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
                        <div className={indexOfLastRow >= disputes.length ? "disabled" : "next"}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(disputes.length / rowsPerPage)))}
                            disabled={indexOfLastRow >= disputes.length}
                        >
                            Next
                            <img src="/right.svg" alt="" />
                        </div>
                    </div>
                </div>
                {/* Pagination */}
            </div >
        </>
    );
};

export default Dispute;