import React from "react";
import OrderNav from "../components/OrderNav";
import OrderTable from "../components/orders/OrderTable";

const Orders = () => {
  /* const [orders, setSampleData] = useState([]);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await axios.get("https://grro-130ba33f07e0.herokuapp.com/api/v1/orders/all_orders/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSampleData(response.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError(err.response?.data || "Something went wrong");
    }
  }; */
  let sampleData = [
    {
      id: 1,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
      purchaseType: "Mixed",
      businessName: "Business",
      date: "12 Nov 2023",
      status: "Delivered",
    },
    {
      id: 2,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
      purchaseType: "Bulk",
      businessName: "Business",
      date: "12 Nov 2023",
      status: "Declined",
    },
    {
      id: 3,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
      purchaseType: "Bulk",
      businessName: "Business",
      date: "12 Nov 2023",
      status: "Declined",
    },
    {
      id: 4,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
      purchaseType: "Bulk",
      businessName: "Business",
      date: "12 Nov 2023",
      status: "Declined",
    },
    {
      id: 5,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
      purchaseType: "Bulk",
      businessName: "Business",
      date: "12 Nov 2023",
      status: "Declined",
    },
    {
      id: 6,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
      purchaseType: "Bulk",
      businessName: "Business",
      date: "12 Nov 2023",
      status: "Declined",
    },
    {
      id: 7,
      items: "Item 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juiceItem 4 mangos and 6 tomatoes with a sardine sauce and 3 floppy juice",
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