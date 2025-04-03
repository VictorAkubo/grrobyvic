import React from 'react';
import "../styles/dispute/Dispute.css";

const Dispute = () => {
    return (
        <div className="manage-orders-container">
            <aside className="sidebar">
                <div className="logo">SRRO</div>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Product</li>
                        <li>Dispute</li>
                        <li className="active">Orders</li>
                        <li>Bargain</li>
                        <li>Review</li>
                        <li>Setting</li>
                        <li>Customers</li>
                        <li>Staff</li>
                        <li>Driver</li>
                    </ul>
                </nav>
            </aside>
            <main className="content">
                <header>
                    <h2>Manage Orders</h2>
                    <p>Handle your orders efficiently from one location.</p>
                    <div className="user-info">
                        <span className="notification-icon">🔔</span>
                        <span className="user-name">Duster Olaniyi</span>
                    </div>
                </header>
                <section className="orders-section">
                    <div className="orders-table-container">
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
                                {[...Array(7)].map((_, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>Sample Product Name</td>
                                        <td>Bulk Sale</td>
                                        <td>Business LLC</td>
                                        <td>12 Nov 2023</td>
                                        <td className="status delivered">Delivered</td>
                                        <td>
                                            <button className="view-order">View Order</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <button className="back">◀ Back</button>
                        <span className="page-number">1 2 3 4</span>
                        <button className="next">Next ▶</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dispute;