import React, { useState } from "react";
import "../styles/OrderItem.css";
const OrderItem = () => {
  const [status, setStatus] = useState("AwaitingAfterDriverScheduled");
  return (
    <div className="tableitem">
      <div className="tableitemdetails">
        <h2 className="goodsrequested">
          4 Beans (4kg bag), 3 Oranges (35 baskets), 10 Melons (Pieces),4 Beans
          (4kg bag), 3 Oranges (35 baskets), 10 Melons (Pieces){" "}
        </h2>
        <div className="costandstatus">
          <h1>$60</h1>
          <p className="pending">Pending</p>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          vero ad eum incidunt molestias. Neque nisi praesentium laborum a atque
          quia ducimus quaerat repellat, repudiandae cum quam, libero
          consectetur? Modi?
        </p>
        <h5>Product Sizing</h5>
        <div className="sizes">
          <p>Pack(10kg)-100</p>
          <p>Basket(35kg)-20</p>
          <p>Mudu(1.13kg)-11</p>
          <p>Bag(60kg)-3</p>
        </div>
        <div className="recieversdetails">
          <div className="recieversdetailsleft">
            <p>Order Code</p>
            <p>Reciever</p>
            <p>Reciever Phone</p>
            <p>Order Date</p>
            <p>Address</p>
          </div>
          <div className="recieversdetailsright">
            <p>DBAR-7FGDY-YGDSS</p>
            <p>Victor Akubo</p>
            <p>+2348159894732</p>
            <p>10/10/2024 06:25pm</p>
            <p>No 23 Ali Obaje Street Nigeria Kogi State</p>
          </div>
        </div>
        <h5>Note</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          vero ad eum incidunt molestias.
        </p>
        {status === "Awaiting" ? (
          <div className="awaitingconfirm">
            <p>Assign to Rider</p>
          </div>
        ) : status === "AwaitingAfterDriverScheduled" ? (
          <div className="awaitingconfirm">
            <p>Track Delivery</p>
          </div>
        ) : (
          <div className="confirmationbuttons">
            <div className="confirm">Confirm Order</div>
            <div className="decline">Decline Order</div>
          </div>
        )}
      </div>
      <div className="tableitempicture">
        <img src="/assets/product_12.png" alt="" />
      </div>
    </div>
  );
};

export default OrderItem;
