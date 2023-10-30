import React from 'react'
import { OrderProvider } from '../../../store/OrderContext'
import ActiveOrders from './ActiveOrders'

const Orders = () => {
  
  return (
    <OrderProvider>
      <div>Orders</div>
      <ActiveOrders />
    </OrderProvider>
  )
}

export default Orders