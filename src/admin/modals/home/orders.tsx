import React, { useContext } from 'react'
import { FcEngineering } from 'react-icons/fc'
import { OrderContext } from '../../../store/OrderContext'

const Orders = () => {
    const { activeOrders } = useContext(OrderContext)
  return (
    <div className='flex items-start justify-start flex-col gap-y-2 p-3 shadow-lg h-40 w-60 bg-black rounded-md'>
        <div className='flex items-center gap-x-2 mt-3 text-white'>
            <FcEngineering />
            <p>active orders</p>
        </div>
        <div className='text-center flex justify-center items-center bg-white p-5 w-full rounded-md'>
            <p className='text-center text-orange-700 font-bold'>{activeOrders.length} orders</p>
        </div>
    </div>
  )
}

export default Orders