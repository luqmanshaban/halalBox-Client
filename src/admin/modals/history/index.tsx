import axios from 'axios'
import React, { useEffect, useState } from 'react'

type ItemType = {
  name: string
}
type OrderType = {
  _id: string
  items: Array<ItemType>
  email: string
  address: string
  amount: number
  status: string
  name: string
  transaction_id: string
}

const History = () => {
  const [orders, setOrders] = useState<OrderType[]>()

  const getOrders = async() => {
    try {
      const response = await axios.get('https://halalbox.cyclic.app/api/all-orders')
      setOrders(response.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(() => {
    getOrders()
  },[])

  return (
    <div className='p-10'>
      <table className='w-full p-5 border border-black m-5 font-sans'>
        <thead className='w-full border border-gray-500 p-2 rounded-md'>
          <tr>
          <th className='border border-gray-800 p-2'>Id.</th>
            <th className='border border-gray-800 p-2'>Name</th>
            <th className='border border-gray-800 p-2'>Items</th>
            <th className='border border-gray-800 p-2'>Email</th>
            <th className='border border-gray-800 p-2'>Address</th>
            <th className='border border-gray-800 p-2'>Amount</th>
            <th className='border border-gray-800 p-2'>Status</th>
            <th className='border border-gray-800 p-2'>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {
            orders?.map((order, id) => (
              <tr key={id}>
                <td className='border border-gray-800 p-2'>{order._id}</td>
                  <td className='border border-gray-800 p-2'>{order.name}</td>
                  <td className='border border-gray-800 p-2'>{order.items.map((item: ItemType, id:number) => (
                      <p key={id}>{item.name}</p>
                  ))}</td>
                  <td className='border border-gray-800 p-2'>{order.email}</td>
                  <td className='border border-gray-800 p-2'>{order.address}</td>
                  <td className='border border-gray-800 p-2'>{order.amount}</td>
                  <td className='border border-gray-800 p-2'>{order.status}</td>
                  <td className='border border-gray-800 p-2'>{order.transaction_id}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default History