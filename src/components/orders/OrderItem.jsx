import React, { useEffect, useState } from "react";
import "../../styles/orders/OrderItem.css"
import OrderNav from "../OrderNav";
import { useParams } from "react-router-dom";
import axios from "axios";
import formatDate from "../../functions/DateConverter";
const OrderItem = () => {
  const [status, setStatus] = useState("AwaitingAfterDriverScheduled");
  const [track, setTrack] = useState(false);
  const { id } = useParams(); // This gets the ID from the URL
  const [order, setOrder] = useState([]);
  const [specificOrder, setSpecificOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {

      try {
        const res = await axios.get(`https://grro-130ba33f07e0.herokuapp.com/api/v1/orders/orders/?order_id=${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });

        setOrder(res.data.data); // Adjust based on your API response structure 
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };
    console.log(order)
    fetchOrder();
  }, [id]);

  useEffect(() => {
    if (order.length > 0) {
      const orderObj = order.find(s => s.id === id);
      setSpecificOrder(orderObj)
    }
    console.log(specificOrder)
  }, [order]);

  return (

    <>
      <OrderNav header={`Manage Order(${id})`} />
      {
        track ? (
          <div className="ordertableitem">
            
          </div>
        ) : (
          <div className="ordertableitem">
            <div className="ordertableiteminnerdiv">
              <div className="ordertableitemdetails">
                <h2 className="goodsrequested">
                  {specificOrder?.order_items?.[0]?.product?.name}
                  4 Beans (4kg bag), 3 Oranges (35 baskets), 10 Melons (Pieces),4 Beans
                </h2>
                <div className="costandstatus">
                  <h1>$ {specificOrder?.total_price}</h1>
                  {status === "Awaiting" ? (
                    <p className="awaiting">Awaiting</p>
                  ) : status === "AwaitingAfterDriverScheduled" ? (
                    <p className="awaitingafterdriverscheduled">Awaiting Delivery</p>
                  ) : (
                    <p className="pending">Pending</p>
                  )}

                </div>
                <p className="description">
                  {specificOrder?.order_items?.[0]?.product?.description}  {specificOrder?.order_items?.[0]?.product?.extra}
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
                    <p>{specificOrder?.address?.first_name} {specificOrder?.address?.last_name} </p>
                    <p>{specificOrder?.address?.phone_number}</p>
                    <p> {formatDate(specificOrder?.created_on)}</p>
                    <p>{specificOrder?.address?.address}</p>
                  </div>
                </div>
                <h5>Note</h5>
                <p className="note">
                  {specificOrder?.order_items?.[0]?.product?.dietry_information}
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
