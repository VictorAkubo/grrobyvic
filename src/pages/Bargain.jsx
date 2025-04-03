import React, { useState } from "react";
import OrderNav from '../components/OrderNav';
import BargainTable from '../components/bargain/BargainTable';

const Bargain = () => {
  return (
    <div>
      <OrderNav header="Manage Bargains"/>
      <BargainTable />
    </div>
  );
};

export default Bargain;
