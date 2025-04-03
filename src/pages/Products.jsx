import React, { useState } from "react";
import OrderNav from '../components/OrderNav';
import ProductsTable from '../components/products/ProductsTable';

const Bargain = () => {
  return (
    <div>
      <OrderNav header="Manage Bargains"/>
      <ProductsTable />
    </div>
  );
};

export default Bargain;
