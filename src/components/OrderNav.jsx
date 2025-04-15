import React from "react";
import "../styles/OrderNav.css";
import { useNavigate } from "react-router-dom";
const OrderNav = ({ header }) => {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="ordernav">
        <h1>{header}</h1>
        <p>Handle your orders efficiently from one location.</p>
      </div>
      <div className="profile">
        <img
          className="searchandnotifyicon"
          src="/search.svg"
          alt=""
        />
        <img
        onClick={()=>navigate("/dashboard/notification")}
          className="searchandnotifyicon"
          src="/notification.svg"
          alt=""
        />
        <div className="profileandpicture">
          <img className="profilepicture" src="/Octocat.png" alt="" />
          <div className="username">
            <h3>Dexter Olaniyi</h3>
            <p>DexterOlaniyi@gmail.com</p>
          </div>
        </div>
        <img className="profiledropdown" src="/assets/downarrow.svg" alt="" />
      </div>
    </nav>
  );
};

export default OrderNav;
