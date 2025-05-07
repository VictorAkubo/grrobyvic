import React, { useState } from "react";
import "../../styles/orders/OrderItem.css"
import OrderNav from "../OrderNav";
const OrderItem = () => {
  const [status, setStatus] = useState("AwaitingAfterDriverScheduled");
  const [track, setTrack] = useState(false);
  return (
    <>
      <OrderNav header="Manage Order(DBJFA_J555_DGFEA)" />
      {
        track ? (
          <div className="ordertableitem">
          </div>
        ) : (
          <div className="ordertableitem">
            <div className="ordertableiteminnerdiv">
              <div className="ordertableitemdetails">
                <h2 className="goodsrequested">
                  4 Beans (4kg bag), 3 Oranges (35 baskets), 10 Melons (Pieces),4 Beans
                  (4kg bag), 3 Oranges (35 baskets), 10 Melons (Pieces){" "}
                </h2>
                <div className="costandstatus">
                  <h1>$60.00</h1>
                  {status === "Awaiting" ? (
                    <p className="awaiting">Awaiting</p>
                  ) : status === "AwaitingAfterDriverScheduled" ? (
                    <p className="awaitingafterdriverscheduled">Awaiting Delivery</p>
                  ) : (
                    <p className="pending">Pending</p>
                  )}

                </div>
                <p className="description">
                  Experience West African comfort in a bowl with our Egusi Soup. Rich melon seed base, vibrant veggies, and your choice of protein, all seasoned to perfection. A delicious journey in every swallow.
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
                <p className="note">
                  User Left a note, user Left a note, user Left a note, user Left a note, user Left a note, user Left a note, user Left a note
                </p>
                {status === "Awaiting" ? (
                  <div className="awaitingconfirm">
                    <p>Assign to Rider</p>
                  </div>
                ) : status === "AwaitingAfterDriverScheduled" ? (
                  <div onClick={() => setTrack(true)} className="awaitingconfirm">
                    <p>Track Delivery</p>
                  </div>
                ) : (
                  <div className="confirmationbuttons">
                    <div className="confirm">Confirm Order</div>
                    <div className="decline">Decline Order</div>
                  </div>
                )}
              </div>
              <div className="ordertableitempicture">
                <img src="/download.jpg" alt="" />
              </div>
            </div>
          </div>

        )
      }

    </>
  );
};

export default OrderItem;
