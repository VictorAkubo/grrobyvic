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
    { name: "Dashboard", path: "/", icon: "path/to/dashboard.png" },
    { name: "Product", path: "/product", icon: "path/to/product.png" },
    { name: "Dispute", path: "/dispute", icon: "path/to/dispute.png" },
    { name: "Orders", path: "/orders", icon: "path/to/orders.png" },
    { name: "Bargain", path: "/bargain", icon: "path/to/bargain.png" },
    { name: "Review", path: "/review", icon: "path/to/review.png" },
    { name: "Settings", path: "/settings", icon: "path/to/settings.png" },
    { name: "Customers", path: "/customers", icon: "path/to/customers.png" },
    { name: "Staff", path: "/staff", icon: "path/to/staff.png" },
    { name: "Driver", path: "/driver", icon: "path/to/driver.png" },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <img src="path/to/logo.png" alt="Logo" className="logo" />
        <button className="toggle-btn" onClick={handleToggle}>
          ☰
        </button>
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
            <li key={item.name} className={isActive ? "active" : ""}>
              <Link to={item.path}>
                <img src={item.icon} alt={item.name} className="icon" />
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;