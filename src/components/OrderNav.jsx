import React from "react";
import "../styles/OrderNav.css";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
const OrderNav = ({ header, subheader }) => {
  const location = useLocation();
  const navigate = useNavigate()
  const useTruncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "..."
  }
  /* const isActive = location.pathname === "/notification" */ /* && location.pathname === "/notificatiob" */
  /*  : location.pathname.startsWith(item.path); */
  return (
    <nav className="navbar">
      <div className="ordernav">
        <h1>{header}</h1>
        <p>{subheader ? subheader : "Handle your orders efficiently from one location."}</p>
      </div>
      <div className="profile">
        <img
          className="searchandnotifyicon"
          src="/search.svg"
          alt=""
        />
        <img
          onClick={() => navigate("/orders/notification")}
          className="searchandnotifyicon"
          src="/notification.svg"
          alt=""
        />
        <div className="profileandpicture">
          <img className="profilepicture" src="/Octocat.png" alt="" />
          <div className="username">
            <h3>Dexter Olaniyi</h3>
            <p>DexterOla@gmail.com</p>
          </div>
          <img className="profiledropdown" src="/dropdown.svg" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default OrderNav;
