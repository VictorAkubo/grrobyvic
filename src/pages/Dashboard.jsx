import OrderNav from "../components/OrderNav";
import React from "react";
import "../styles/dashboard/Dashboard.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Revenue",
        data: [200000, 500000, 300000, 700000],
        fill: true,
        backgroundColor: "rgba(76, 175, 80, 0.1)",
        borderColor: "#4caf50",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `₦${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="dashboardorder">
 <OrderNav header="Dashobard"/>
      <div className="dashboard-container">
        <div className="analytics-cards">
          <div className="card"><h3>32,000</h3><p>Total Orders</p></div>
          <div className="card"><h3>29,000</h3><p>Total Delivered</p></div>
          <div className="card"><h3>120</h3><p>Total Declined</p></div>
          <div className="card"><h3>1,900,000</h3><p>Total Revenue</p></div>
        </div>

        {/* Revenue Chart Placeholder */}
        <div className="chart-section">
          <h4>Revenue</h4>
          <div className="chart-box">
            <Line data={data} options={options} />
          </div>
        </div>

        {/* Recent Orders */}
        <div className="orders-section">
          <div className="orders-header">
            <h4>Recent Orders</h4>
            <a href="#">See all</a>
          </div>
          <table className="orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Items Purchased</th>
                <th>Purchase Type</th>
                <th>Business Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mango, Tomatoes, Onions</td>
                <td>Bulk sale</td>
                <td>Tawk Global LLC</td>
                <td>12 Nov 2023</td>
                <td><span className="status success">Successful</span></td>
                <td><button>---</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Beans, Oranges, Melons</td>
                <td>Mixed sale</td>
                <td>Paysha Nigeria</td>
                <td>12 Nov 2023</td>
                <td><span className="status success">Successful</span></td>
                <td><button>---</button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rice, Tomatoes, Chilli</td>
                <td>Bulk sale</td>
                <td>Grociple LLC</td>
                <td>12 Nov 2023</td>
                <td><span className="status success">Successful</span></td>
                <td><button>---</button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Soya Beans, Bogji</td>
                <td>Pieces sale</td>
                <td>Presile B.</td>
                <td>12 Nov 2023</td>
                <td><span className="status pending">Pending</span></td>
                <td><button>--</button></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Oranges, Pineapples</td>
                <td>Pieces sale</td>
                <td>Victor K.</td>
                <td>12 Nov 2023</td>
                <td><span className="status pending">Pending</span></td>
                <td><button>---</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;