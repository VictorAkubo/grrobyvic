import React, { useState, useEffect } from "react";
import "../styles/notification/Notification.css"
const Notification = () => {
  const [filter, setFilter] = useState("all"); 
  const handleFilterChange = (status) => {
    setFilter(status);
  };

  return (
    <div class="notifications-container">
    <h2>Notifications</h2>
    <p>Access our services seamlessly</p>
    <div className="tablesort">
        <p className={filter === "all" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("all")}>All</p>
        <p className={filter === "bargain" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("bargain")}>Bargain</p>
        <p className={filter === "quantityalert" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("quantityalert")}>Quantity Alert</p>
        <p className={filter === "orders" ? "activestatus" : "unactive"} onClick={() => handleFilterChange("orders")}>Orders</p>
      </div>

    <div class="notification-item  unread">
      <div class="notification-content">
      <p></p>
        <div class="icon">
          <img alt="unknown"src="/messages.svg"/>
        </div>
        <div>
          <div class="notification-text">
            <span>Aaron R.</span> Review on Melon seed.
          </div>
          <div class="notification-sub">I love the packaging and the way you delivered speedily.</div>
        </div>
      </div>
      <div class="notification-meta">
        <div class="timestamp">5 mins ago</div>
        <div class="close"><img src="./close.svg"/></div>
      </div>
    </div>

    <div class="notification-item">
      <div class="notification-content">
        <div class="icon"><img alt="unknown"src="/notificationcancel.svg"/></div>
        <div>
          <div class="notification-text">
            New <span>Bargain</span> from Greatness Marshal
          </div>
          <div class="notification-sub">Original Price: $800 | Bargained Price: $750</div>
        </div>
      </div>
      <div class="notification-meta">
        <div class="notification-actions">
          <button class="btn decline">Decline</button>
          <button class="btn accept">Accept</button>
        </div>
        <div class="timestamp">5 mins ago</div>
        <div class="close"><img src="./close.svg"/></div>
      </div>
    </div>

    <div class="notification-item">
      <div class="notification-content">
        <div class="icon"><img alt="unknown"src="/cart!.svg"/></div>
        <div>
          <div class="notification-text">
            <span>Quantity Alert</span> on Gino Tomato has dropped
          </div>
          <div class="notification-sub">Current quantity: 5 units</div>
        </div>
      </div>
      <div class="notification-meta">
        <div class="notification-actions">
          <button class="btn restore">Restock</button>
        </div>
        <div class="timestamp">5 mins ago</div>
        <div class="close"><img src="./close.svg"/></div>
      </div>
    </div>

    <div class="notification-item">
      <div class="notification-content">
        <div class="icon"><img alt="unknown"src="/markedcalender.svg"/></div>
      
        <div>
          <div class="notification-text">
            Order Placed <span>DBA9FI-556I6_SD34V</span>
          </div>
          <div class="notification-sub">4 Mango (10kg Bags), 5 Tomatoes (35kg basket), 4 onion (1kg basket)</div>
        </div>
      </div>
      <div class="notification-meta">
        <div class="timestamp">5 mins ago</div>
              <div class="close"><img src="./close.svg"/></div>
      </div>
    </div>

    <div class="notification-item">
      <div class="notification-content">
        <div class="icon"><img alt="unknown"src="/bell.svg"/></div>
        <div>
          <div class="notification-text">
            Check out your sales breakdown for the week
          </div>
        </div>
      </div>
      <div class="notification-meta">
        <div class="timestamp">5 mins ago</div>
                <div class="close"><img src="./close.svg"/></div>
      </div>
    </div>

  </div>
  )
}

export default Notification