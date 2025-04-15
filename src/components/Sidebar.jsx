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
    { name: "Dashboard", path: "/" , icon: "/dashboard.svg" },
    { name: "Product", path: "/product", icon: "/products.svg" },
    { name: "Dispute", path: "/dispute", icon: "/disputes.svg" },
    { name: "Orders", path: "/orders", icon: "/orders.svg" },
    { name: "Bargain", path: "/bargain", icon: "/bargains.svg" },
    { name: "Review", path: "/review", icon: "/reviews.svg" },
    { name: "Settings", path: "/settings", icon: "/settings.svg" },
    { name: "Customers", path: "/customers", icon: "/customers.svg" },
    { name: "Staff", path: "/staff", icon: "/staffs.svg" },
   /*  { name: "Driver", path: "/driver", icon: "/driver.svg" }, */
  ];

  return (
    <div className={`sidebar`}>
      <div className="sidebar-header">
        <img src="GRRO.svg"  className="logo" />
        {/* <button className="toggle-btn" onClick={handleToggle}>
          ☰
        </button> */}
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
              <Link  className={isActive ? "active" : "unactive"} to={item.path}>
                <img src={item.icon} className="sidebaricon" />

                <h3 className={isActive ? "active" : ""}>{item.name}</h3>
              
              </Link>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;