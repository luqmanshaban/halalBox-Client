import React from 'react'
import Orders from './orders'
import AllOrders from './allOrders'
import Payment from './payment'
import Menus from './menus'
import Messages from './messages'

const Home = () => {
  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <section className='flex items-center gap-x-20 py-10'>
        <Orders />
        <AllOrders />
        <Payment />
        <Menus />
      </section>
      <section className='my-10'>
        <Messages />
      </section>
    </div>
  )
}

export default Home