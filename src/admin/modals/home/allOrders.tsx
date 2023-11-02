import React, { useContext } from 'react'
import { OrderContext } from '../../../store/OrderContext'
import { FcMediumPriority } from 'react-icons/fc'

const AllOrders = () => {
  const { orders } = useContext(OrderContext)
  const length = orders?.length ? orders.length : 0;
  return (
    <div className='flex items-start justify-start flex-col gap-y-2 p-3 shadow-lg h-40 w-60 bg-orange-500 rounded-md'>
    <div className='flex items-center gap-x-2 mt-3 text-white'>
        <FcMediumPriority />
        <p>all orders</p>
    </div>
    <div className='text-center flex justify-center items-center bg-white p-5 w-full rounded-md'>
        <p className='text-center text-orange-700 font-bold'>{length} orders</p>
    </div>
</div>
  )
}

export default AllOrders