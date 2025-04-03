import React from "react";
import OrderNav from "../components/OrderNav";
import OrderTable from "../components/orders/OrderTable";

const Orders = () => {
  let sampleData = [
    {
      id: 1,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
      purchaseType: "Mixed",
      businessName: "Business",
      date: "12 Nov 2023",
      status: "Delivered",
    },
    {
      id: 2,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
      purchaseType: "Bulk",
      businessName: "Business",
      date: "12 Nov 2023",
      status: "Declined",
    },
    {
      id: 3,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
      purchaseType: "Mixed",
      businessName: "Business",
      date: "12 Nov 2023",
      status: "Pending",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <OrderNav header="Manage Orders" />
      <OrderTable data={sampleData} rowsPerPage={7} />
    </div>
  );
};

export default Orders;