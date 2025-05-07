import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
import Forgotten from "./pages/forgottenpassword/Forgotten";
import ForgottenPasswordOTP from "./pages/forgottenpassword/ForgottenPasswordOTP";
import SetNewPassword from "./pages/forgottenpassword/SetNewPassword";
import Products from "./pages/Products";
import Dispute from "./pages/Dispute";
import Bargain from "./pages/Bargain";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";
import Customers from "./pages/Customers";
// 




import Staffs from "./pages/Staffs";
import OrderItem from "./components/orders/OrderItem";
import NewProduct from "./pages/NewProduct";
import ProductItem from "./components/products/ProductItem";
import Notification from "./pages/Notification";
import Driver from "./pages/Drivers";
import DisputeItem from "./components/disputeItem/DisputeItem";
import SpecificStaff from "./components/staffs/SpecificStaff";
import SpecificCustomer from "./components/customers/SpecificCustomer";
import ScrollToTop from "./components/ScrollTop";


const App = () => {

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgottenpassword" element={<Forgotten />} />
        <Route
          path="/forgottenpasswordotp"
          element={<ForgottenPasswordOTP />}
        />
        <Route path="/setnewpassword" element={<SetNewPassword />} />

        {/* Wrap all protected pages inside Layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/notification" element={<Notification />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/item" element={<ProductItem />} />
            <Route path="/product/add_new_product" element={<NewProduct />} />
            <Route path="/orders/:id" element={<OrderItem />} />
            <Route path="/dispute" element={<Dispute />} />
            <Route path="/disputeitem" element={<DisputeItem />} />
            <Route path="/bargain" element={<Bargain />} />
            <Route path="/review" element={<Reviews />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/specificcustomer" element={<SpecificCustomer />} />
            <Route path="/staff" element={<Staffs />} />
            <Route path="/staff/specificstaff" element={<SpecificStaff />} />
            <Route path="/driver" element={<Driver />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
