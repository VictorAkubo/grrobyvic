import React, { useState, useEffect } from "react";
import "../styles/reviews/Reviews.css"; // Import CSS
import { useNavigate } from "react-router-dom";
import OrderNav from "../components/OrderNav";

const dummyData = [
  { menuitems: "Mango", user: "Lorem ipsum dolor sit", date: "15/10/2020 6:20PM", rating: 5, review: "amet consectetur adipisicing elit." },
  { menuitems: "Beans", user: "Lorem ipsum dolor sit", date: "15/10/2020 6:20PM", rating: 5, review: "amet consectetur adipisicing elit." },
  { menuitems: "Rice ", user: "Lorem ipsum dolor sit", date: "15/10/2020 6:20PM", rating: 5, review: "amet consectetur adipisicing elit." },
  { menuitems: "Beans ", user: "Lorem ipsum dolor sit", date: "15/10/2020 6:20PM", rating: 4.5, review: "amet consectetur adipisicing elit." },
  { menuitems: "Beans", user: "Lorem ipsum dolor sit", date: "15/10/2020 6:20PM", rating: 5, review: "amet consectetur adipisicing elit." },
  { menuitems: "Lemon", user: "Lorem ipsum dolor sit", date: "15/10/2020 6:20PM", rating: 5, review: "amet consectetur adipisicing elit." },
  { menuitems: "Flour", user: "Lorem ipsum dolor sit", date: "15/10/2020 6:20PM", rating: 5, review: "amet consectetur adipisicing elit." },
];

const Reviews = () => {
  const navigate = useNavigate();
  const rowsPerPage = 6;
  const [status, setStatus] = useState("All Bargains");
  const [activeActionIndex, setActiveActionIndex] = useState(null);



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
    <>
      <OrderNav header="Reviews" />
      <div className="reviewtabletruediv">
        <div className="review-orders-table-maindivover">
          <table className="review-orders-table">
            <thead>
              <tr>
                <th className="review-orders-tables Menuitem">
                  <p>Product </p>
                  <div>
                    <p></p>
                  </div>
                </th>
                <th className="review-orders-tables Category">
                  <p>User</p>
                </th>
                <th className="review-orders-tables Status">
                  <p>Review</p>
                </th>
                <th className="review-orders-tables Price">
                  <p> Rating</p>
                </th>
                <th className="review-orders-tables Date">
                  <p>Date Added</p>
                  <img src="/arrowdownward.svg" />
                </th>
                <th className="review-orders-tables Action">
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr key={row.id}>
                  <td onClick={() => navigate("/product/item")} className="Menuitem MenuitemandImage review-orders-tablebody">
                    <img className="itemimage" src="/Octocat.png" />
                    {row.menuitems}
                  </td>
                  <td className="Category review-orders-tablebody">{useTruncate(row.user, 15)}</td>
                  <td className="Category review-orders-tablebody">
                    <div>{useTruncate(row.review, 15)}</div>
                  </td>
                  <td className="Price review-orders-tablebody">{/* {row.rating}.00 */}
                    <img src="/star.svg" />
                    <img src="/star.svg" />
                    <img src="/star.svg" />
                    <img src="/star.svg" />
                    <img src="/star.svg" />
                    <img src="/emptystar.svg" />
                  </td>
                  <td className="Date review-orders-tablebody">{row.date}</td>
                  <td className="modalareaaction Action review-orders-tablebody">
                    <p
                      className="cursorellipsis"
                      onClick={() =>
                        setActiveActionIndex(
                          activeActionIndex === index ? null : index
                        )
                      }
                    >
                      View
                    </p>
                    {activeActionIndex === index && (
                      <>
                        <div className="modal-backdrop" />
                        <div className="reviewsrating">
                          <div className="innerdiv">
                            <div className="titleandclosebtn">
                              <h2>Reviews/Rating</h2>
                              <img src="/close.svg" onClick={() => setActiveActionIndex(null)} />
                            </div>
                            <div className="imageandviewproductbtn">
                              <img src="/Octocat.png" />
                              <div className="itemnameandviewproduct">
                                <h3>Golden Penny Rice</h3>
                                <p>View product</p>
                              </div>
                            </div>
                            <div className="spacingstarratingandcomment">
                              <div className="ratingstaranddate">
                                <div className="sixstars">
                                  <img src="/star.svg" />
                                  <img src="/star.svg" />
                                  <img src="/star.svg" />
                                  <img src="/star.svg" />
                                  <img src="/star.svg" />
                                  <img src="/emptystar.svg" />
                                </div>
                                <p>10/10/2024</p>
                              </div>
                              <p className="reviewcomment">Lorem ipsum categ irytr , stttsuy suya odiya osiayt ysstrsa uuddee attwwwtd eddyysg tdg syydhhh yywjbdgs, hwhhhgsyy.sdggg.wstsuek.</p>
                            </div>
                            <button className="closebtn" onClick={() => setActiveActionIndex(null)} >Close</button>
                          </div>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </>
  );
};

export default Reviews;


