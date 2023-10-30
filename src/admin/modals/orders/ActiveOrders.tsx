import React, { useContext, useState } from 'react'
import { OrderContext } from '../../../store/OrderContext'
import axios from 'axios'

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
const ActiveOrders = () => {
    const { activeOrders } = useContext(OrderContext)
    const [accept, setAccept] = useState<{ [orderId: string]: boolean }>(
        activeOrders.reduce((acc: any, order: any) => {
            acc[order._id] = true;
            return acc;
        }, {})
    );
    
    const [processing, setProcessing] = useState<{ [orderId: string]: boolean }>(
        activeOrders.reduce((acc: any, order: any) => {
            acc[order._id] = true;
            return acc;
        }, {})
    );
    const [delivering, setDelivering] = useState<{ [orderId: string]: boolean }>(
        activeOrders.reduce((acc: any, order: any) => {
            acc[order._id] = true;
            return acc;
        }, {})
    );

    const AcceptOrder = async (id: string) => {
        try {
            await axios.post(`https://halalbox.cyclic.app/api/update-order-status/${id}`, {status: 'PROCESSING'})
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    }
    const DeliverOrder = async (id: string) => {
        try {
            await axios.post(`https://halalbox.cyclic.app/api/update-order-status/${id}`, {status: 'DELIVERING'})
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    }

    const Accept = (id: string, transaction_id: string) => {
        AcceptOrder(transaction_id)
        setAccept(prevState => ({
            ...prevState,
            [id]: true,
        }));
        setProcessing(prevState => ({
            ...prevState,
            [id]: true
        }))
    };

    const Process = (id: string, transaction_id: string) => {
        DeliverOrder(transaction_id)
        setProcessing(prevState => ({
            ...prevState,
            [id]: false
        }))
        setDelivering(prevState => ({
            ...prevState,
            [id]: true
        }))
    };
    
  return (
    <div>
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
                  <th className='border border-gray-800 p-2'>Update</th>
                </tr>
            </thead>
            <tbody>
                {
                    activeOrders.map((order: OrderType, id: number) => (
                        <tr key={order._id}>
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
                            <td className='border border-gray-800 p-2'>

                                {(order.status === 'ACTIVE' && !accept[order._id]) && <button className='p-2 rounded-xl bg-green-600 text-white font-bold' onClick={() => Accept(order._id, order.transaction_id)}>Accept</button>}

                                {(order.status === 'PROCESSING' || processing[order._id]) && <button className='p-2 rounded-xl bg-orange-500 text-white font-bold' onClick={() => Process(order._id, order.transaction_id)}>Deliver</button>}

                                {(order.status === 'DELIVERING' || delivering[order._id]) && <button className='p-2 rounded-xl bg-gray-100 text-gray-400 font-bold'>Delivering...</button>}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ActiveOrders