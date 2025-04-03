import { Outlet } from "react-router-dom";
import "../styles/Layout.css";
import OrderNav from "./OrderNav";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <div className="layout">
      <Sidebar className="sidebar"/>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;