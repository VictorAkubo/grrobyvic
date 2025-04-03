import React from "react";
import OrderNav from "../components/OrderNav";
import OrderTable from "./components/OrderTable";
const Order = () => {
  // Example Data
  let sampleData = [
    {
      id: 1,
      items: `Item 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juice`,
      purchaseType: "Mixed",
      businessName: `Business`,
      date: `12 Nov 2023`,
      status: "Delivered",
    },
    {
      id: 2,
      items: `Item 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juice`,
      purchaseType: "Bulk",
      businessName: `Business`,
      date: `12 Nov 2023`,
      status: "Declined",
    },
    {
      id: 3,
      items: `Item 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juice`,
      purchaseType: "Mixed",
      businessName: `Business`,
      date: `12 Nov 2023`,
      status: "Pending",
    },
    {
      id: 4,
      items: `Item 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juice`,
      purchaseType: "Mixed",
      businessName: `Business`,
      date: `12 Nov 2023`,
      status: "Delivered",
    },
    {
      id: 5,
      items: `Item 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juice`,
      purchaseType: "Mixed",
      businessName: `Business`,
      date: `12 Nov 2023`,
      status: "Declined",
    },
    {
      id: 6,
      items: `Item 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juice`,
      purchaseType: "Bulk",
      businessName: `Business`,
      date: `12 Nov 2023`,
      status: "Pending",
    },
    {
      id: 7,
      items: `Item 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juice`,
      purchaseType: "Bulk",
      businessName: `Business`,
      date: `12 Nov 2023`,
      status: "Delivered",
    },
    {
      id: 8,
      items: `Item 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juice`,
      purchaseType: "Bulk",
      businessName: `Business`,
      date: `12 Nov 2023`,
      status: "Declined",
    },
  ];
  /*   const sampleData = Array.from({ length: 25 }, (_, i) => ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          id:1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    items: `Item 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauceand 3floppy juice${i + 1}`,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              purchaseType: ["Bulk", "Mixed", "Pieces"][i % 3],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        businessName: `Business`,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  date: `12 Nov 2023`,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            status: "All Orders",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  })); */

  return (
    <div>
      <OrderNav header="Manage Orders" />
      <OrderTable data={sampleData} rowsPerPage={7} />;
    </div>
  );
};

export default Order;
