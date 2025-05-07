import React from 'react'
import "../../styles/orders/DeclineOrder.css"
const DeclineOrder = () => {
  return (
    <div className='declineordermodal'>
      <div className='declineordermodalheader'>
        <h3>Reason For Declining Order</h3>
        <img src="/close.svg" />
      </div>
      <textarea placeholder="Fill"/>
      <div className="reaonbtn">Decline Order</div>
    </div>
  )
}

export default DeclineOrder