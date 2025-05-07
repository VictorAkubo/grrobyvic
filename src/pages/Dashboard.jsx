import OrderNav from "../components/OrderNav";
import React, { useState } from "react";
import "../styles/dashboard/Dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  const [activeActionIndex, setActiveActionIndex] = useState(null);
  const useTruncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "..."
  }
  const handleExport = () => {
    // Convert the data to CSV format
    const csvContent = generateCSV(metrics);

    // Create a Blob and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "profile_growth_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const orders = [
    {
      id: 1,
      items: "Suya Pineaple Yam Suya Pineaple Yam Eba Beans, Oranges, Melons Eba Mango, Tomatoes, Onions",
      type: "Bulk sale",
      business: "Tawk Global LLC",
      date: "12 Nov 2023",
      status: "Successful",
    },
    {
      id: 2,
      items: "Suya Pineaple Yam Suya Pineaple Yam Eba Beans, Oranges, Melons Eba Beans, Oranges, Melons",
      type: "Mixed sale",
      business: "Paysha Nigeria",
      date: "12 Nov 2023",
      status: "Successful",
    },
    {
      id: 3,
      items: "Suya Pineaple Yam Suya Pineaple Yam Eba Beans, Oranges, Melons Eba Rice, Tomatoes, Chilli",
      type: "Bulk sale",
      business: "Grociple LLC",
      date: "12 Nov 2023",
      status: "Successful",
    },
    {
      id: 4,
      items: "Suya Pineaple Yam Suya Pineaple Yam Eba Beans, Oranges, Melons Eba Soya Beans, Bogji",
      type: "Pieces sale",
      business: "Presile B.",
      date: "12 Nov 2023",
      status: "Pending",
    },
    {
      id: 5,
      items: "Suya Pineaple Yam Suya Pineaple Yam Eba Beans, Oranges, Melons Eba Oranges, Pineapples",
      type: "Pieces sale",
      business: "Victor K.",
      date: "12 Nov 2023",
      status: "Pending",
    },
  ];

  return (
    <div className="dashboardorder">
      <OrderNav header="Dashboard" subheader="Hi Admin, let's get you roling"/>
      <div className="maindashboard-container">
        <div className="analytics-cards">
          <div className="card">
            <div className="cardinfoandicon">
              <img src="/totalorders.svg" className="cardicon" />
              <div>
                <h3>32,000</h3>
                <p>Total Orders</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardinfoandicon">
              <div className="cardicondiv">
                <img src="/totalamountdelivered.svg" className="biggestimage" />
              </div>
              <div>
                <h3>29,000</h3>
                <p>Total Delivered</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardinfoandicon">
              <img src="/totalcountdelivered.svg" className="cardicon" />
              <div>
                <h3>120</h3>
                <p>Total Declined</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardinfoandicon">
              <img src="/totalrevenue.svg" className="cardicon" />
              <div>
                <h3>1,900,000</h3>
                <p>Total Revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="dashboard-container">
          <div className="chart-container">
            <div className="chart-header">
              <div className="chart-title">
                <h2>Revenue</h2>
              </div>
              <div className="chart-buttons">
                <p>This Month</p>
                <img src="/dropdown.svg" />
                {/*   <button className="this-year-btn">This Year</button>
                <button className="export-btn" onClick={handleExport}>
                  Export
                </button> */}
              </div>
            </div>
            <div className="chart">
              <ResponsiveContainer width="95%" height="100%">
                <LineChart className="chart-line" data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    axisLine={{ stroke: 0 }}
                    tickLine={false}
                    dataKey="month"
                  />
                  <YAxis axisLine={{ stroke: 0 }} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Impressions"
                    stroke="#0FC578B5"
                    strokeWidth={4}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="orders-header">
          <h4>Recent Orders</h4>
          <a href="#">See all</a>
        </div>

        <div className="dashboard-orders-table-maindiv">
          <table className="dashboard-orders-table">
            <thead>
              <tr>
                <th className="dashboard-orders-tables ID">
                  <p>ID </p>
                  <img src="/dropdown.svg" />
                </th>
                <th className="dashboard-orders-tables ItemsPurchased">
                  <p>Items Purchased</p>
                  <img src="/dropdown.svg" />
                </th>
                <th className="dashboard-orders-tables PurchaseType">
                  <p> Purchase Type</p>
                  <img src="/dropdown.svg" />
                </th>
                <th className="dashboard-orders-tables BusinessName">
                  <p> Business Name</p>
                  <img src="/dropdown.svg" />
                </th>
                <th className="dashboard-orders-tables Date">
                  <p> Date</p>
                  <img src="/dropdown.svg" />
                </th>
                <th className="dashboard-orders-tables Status">
                  <p> Status</p>
                  <img src="/dropdown.svg" />
                </th>
                <th className="dashboard-orders-tables Action">
                  <p> Action</p>
                  <img src="/dropdown.svg" />
                </th>

              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td className="ID dashboard-orders-tablebody">{order.id}</td>
                  <td className="ItemsPurchased dashboard-orders-tablebody">{useTruncate(order.items, 65)}</td>
                  <td className="PurchaseType dashboard-orders-tablebody">{order.type}</td>
                  <td className="BusinessName dashboard-orders-tablebody">
                    <img src="/download.jpg" />
                    {order.business}
                  </td>
                  <td className="Date dashboard-orders-tablebody">{order.date}</td>
                  <td className="Status dashboard-orders-tablebody">
                    <p
                      className={`status ${order.status.toLowerCase() === "successful"
                        ? "success"
                        : "pending"
                        }`}
                    >
                      {order.status}
                    </p>
                  </td>
                  <td className="modalareaaction Action dashboard-orders-tablebody">
                    <p
                    className="cursorellipsis"
                      onClick={() =>
                        setActiveActionIndex(
                          activeActionIndex === index ? null : index
                        )
                      }
                    >
                      <img src="/ellipsis.svg" />
                    </p>
                    {activeActionIndex === index && (
                      <ul className="dashboardaction">
                        <li className="normal underline">
                          <img src="/vieworder.svg" /> View Order
                        </li>
                        <li className="normal underline">
                          <img src="/trackorder.svg" /> Track Order
                        </li>
                        <li className="normal underline">
                          <img src="/approveorder.svg" /> Approve Order
                        </li>
                        <li className="normal">
                          <img src="/cancelorder.svg" /> Cancel Order
                        </li>
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const metrics = [
  { month: "January", Impressions: 2000, ProfileVisits: 4000 },
  { month: "February", Impressions: 3000, ProfileVisits: 3000 },
  { month: "March", Impressions: 4000, ProfileVisits: 5000 },
  { month: "April", Impressions: 2000, ProfileVisits: 4000 },
  { month: "May", Impressions: 3000, ProfileVisits: 3000 },
  { month: "June", Impressions: 5000, ProfileVisits: 4500 },
  { month: "July", Impressions: 4000, ProfileVisits: 5500 },
  { month: "August", Impressions: 4500, ProfileVisits: 5000 },
  { month: "September", Impressions: 6000, ProfileVisits: 4500 },
  { month: "October", Impressions: 5000, ProfileVisits: 4000 },
  { month: "November", Impressions: 7000, ProfileVisits: 4500 },
  { month: "December", Impressions: 8000, ProfileVisits: 5000 },
];
const generateCSV = (metrics) => {
  const headers = ["Month", "Impressions", "ProfileVisits"];
  const rows = metrics.map((row) => [
    row.month,
    row.Impressions,
    row.ProfileVisits,
  ]);

  // Combine headers and rows
  const csvRows = [headers, ...rows];
  return csvRows.map((row) => row.join(",")).join("\n");
};
export default Dashboard;
