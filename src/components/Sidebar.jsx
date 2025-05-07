import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Dashboard", path: "/", icon: "/grroicons/dashboard.svg", iconActive: "/active/dashboardactive.svg" },
    { name: "Product", path: "/product", icon: "/grroicons/product.svg", iconActive: "/active/productactive.svg" },
    { name: "Dispute", path: "/dispute", icon: "/grroicons/dispute.svg", iconActive: "/active/disputeactive.svg" },
    { name: "Orders", path: "/orders", icon: "/grroicons/orders.svg", iconActive: "/active/ordersactive.svg" },
    { name: "Bargain", path: "/bargain", icon: "/grroicons/bargain.svg", iconActive: "/active/bargainactive.svg" },
    { name: "Review", path: "/review", icon: "/grroicons/review.svg", iconActive: "/active/reviewactive.svg" },
    { name: "Settings", path: "/settings", icon: "/grroicons/settings.svg", iconActive: "/active/settingsactive.svg" },
    { name: "Customers", path: "/customers", icon: "/grroicons/customers.svg", iconActive: "/active/customersactive.svg" },
    { name: "Staff", path: "/staff", icon: "/grroicons/staff.svg", iconActive: "/active/staffactive.svg" },
    /* { name: "Driver", path: "/driver", icon: "/grroicons/drivers.svg", iconActive: "/active/driveractive.svg" }, */
  ];

  return (
    <div className='sidebar' >
      <div className="sidebar-header">
        <img src="/GRRO.svg" className="logo" />
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item) => {
          // For the home route ("/"), use an exact match.
          // For all other routes, check if the current pathname starts with the item path.
          const isActive =
            item.path === "/"
              ? location.pathname === item.path
              : location.pathname.startsWith(item.path);
          return (
            <li key={item.name} className={`wholeroutes ${isActive ? "active" : ""}`}>
              <Link to={item.path}>
                <img src={isActive ? item.iconActive : item.icon} className={item.name === "Dispute" ? "disputeclass" : ""} />
                <h3>{item.name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div >
  );
};

export default Sidebar;