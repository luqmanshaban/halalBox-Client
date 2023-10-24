import React, { FormEventHandler, useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import axios from 'axios'
import Processing from '../components/Processing'
import { FcProcess, FcShipped } from 'react-icons/fc'
import { AiFillMedicineBox } from 'react-icons/ai'
import { RiUserReceived2Fill } from 'react-icons/ri'
import { TiTickOutline } from 'react-icons/ti'
import { ImCancelCircle } from 'react-icons/im'
import Delivery from '../components/Delivery'
import { Link } from 'react-router-dom'

interface Order {
  transaction_id: string,
  status: string
}

const TrackOrder = () => {
  const [order, setOrder] = useState<Order>({
    transaction_id: '',
    status: ''
  })
  const [userOrderIDInput, setUserOrderIDInput] = useState('')
  const orderId = localStorage.getItem('order_id')
  const orderToFetch = userOrderIDInput ?? orderId

  
  const getOrderById = async() => {
    if (typeof orderToFetch === 'string' && orderToFetch.trim() !== '') {
      try {
        const response = await axios.get(`https://halalbox.cyclic.app/api/order/${orderToFetch}`);
        setOrder(response.data);
        if (response.data.status === 'COMPLETED') {
          localStorage.removeItem('order_id');
        }
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      // Handle the case where orderToFetch is an empty string or not a string
      console.error('Invalid order ID');
    }
  }
 
  const handleChange = (event: any) => {
    setUserOrderIDInput(event.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    getOrderById()
  } 

  const form = (
    <form onSubmit={handleSubmit} className='md:m-0 mx-3 mt-10 md:w-[50%] w-full'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white bg-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search"  className="block  w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-200 focus:border-slate-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-slate-200 dark:focus:border-slate-200" placeholder="Enter your Order Id. . ." value={userOrderIDInput} onChange={handleChange} required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-slate-200 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:bg-slate-600 dark:focus:ring-slate-200">Search</button>
    </div>
   </form>
  )
  

  
  useEffect(() => {
    getOrderById()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main className='pt-24'>
         {order && order.status !== '' && <section className='flex justify-center md:flex-row flex-col items-center gap-x-2'>
            <article className='flex justify-center items-center flex-col opacity-50'>
              <AiFillMedicineBox size={50} color='#FB923C'/>
              <p>Confirmed</p>
              <TiTickOutline size={25} color='green'/>
            </article>

            <article  className={`flex justify-center items-center flex-col gap-y-3 ${order.status !== 'ACTIVE' ? 'opacity-50' : 'opacity-100'}`}>
              <p className='text-sm'><span className='font-bold'>Order</span> {orderToFetch}</p>
              <div className='md:w-[300px] h-2 bg-orange-400'></div>
              <span>Proccessing</span>
            </article>
            <article className={`flex justify-center items-center flex-col gap-y-3 ${order.status !== 'ACTIVE' ? 'opacity-50' : 'opacity-100'}`}>
            <FcProcess size={50} />
            {order.status === 'ACTIVE' && <Processing />}
            {order.status !== 'ACTIVE' && <TiTickOutline size={25} color='green'/>}
            {/* {order.status === 'ACTIVE' && <ImCancelCircle size={25} color='red'/>} */}
            </article>

            <article className={`flex justify-center items-center flex-col ${order.status !== 'DELIVERING' ? 'opacity-50' : 'opacity-100'}`}>
              <span className='text-white'>delivering</span>
              <div className='md:w-[300px] h-2 bg-orange-400'></div>
              <p>Delivering</p>
            </article>
            <article className={`flex justify-center items-center flex-col gap-y-3 ${order.status !== 'DELIVERING' ? 'opacity-50' : ' opacity-100'}`}>
              <FcShipped color='purple' size={50}/>
             {order.status === 'DELIVERING' && <Delivery />}
              {order.status === 'COMPLETED' && <TiTickOutline size={25} color='green'/>}
              {order.status !== 'DELIVERING' && <ImCancelCircle size={25} color='red'/>}
            </article>

            <article className={`flex justify-center items-center flex-col ${order.status === 'COMPLETED' && 'opacity-40'}`}>
              <span className='text-white'>delivering</span>
              <div className='md:w-[300px] h-2 bg-orange-400'></div>
              <p>COMPLETED</p>
            </article>
            <article className={`flex justify-center items-center flex-col gap-y-3 ${order.status !== 'COMPLETED' ? 'opacity-40' : 'opacity-100'}`}>
              <RiUserReceived2Fill color='black' size={50}/>
              {order.status === 'COMPLETED' && <TiTickOutline size={25} color='green'/>}
              {order.status !== 'COMPLETED' && <ImCancelCircle size={25} color='red'/>}
            </article>
          </section>}

          {(!order || order.status === '') && <section className='pt-20 py-20 flex md:flex-row flex-col px-10 gap-y-5 gap-x-0 justify-center items-center text-white bg-black'>
            <article className='md:m-0 mx-3 mt-10 md:w-[50%] w-full'>
              {form}
            </article>
            <article className='flex flex-col'>
              <h1>You Don't have any active orders</h1>
              <Link to='/menu' className='bg-white text-center my-2 text-black p-2 rounded-lg md:w-[100px]'>Go to Menu</Link>
            </article>
           </section>}
        </main>
    </div>
  )
}

export default TrackOrder