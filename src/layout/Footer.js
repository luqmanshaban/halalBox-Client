import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTelephonePlus } from 'react-icons/bs'
import axios from 'axios'

const Footer = () => {
    const date = new Date()
    const [email, setEmail] = useState('')
    const [success, setIsSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = e => {
        e.preventDefault()
        setEmail( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))  
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
           await axios.post('http://localhost:8000/api/email', email);
           setTimeout(() => setIsSuccess(true), 10000)
           setIsSuccess(false)
        } catch (error) {
            console.error(error);
            setTimeout(() => setError(true), 10000)
            setError(false)
        }finally {
            setIsSuccess(false)
            setIsSuccess(false)
        }
    }
    
  return (
    <section className='bg-black text-white font-sans p-10 flex justify-center flex-col md:gap-y-5 items-center py-20'>
        <article className='flex justify-evenly items-center md:flex-row flex-col'>
          <div className='md:w-[30%]'>
              <Link to='/' className='text-xl rounded-md border border-white px-5 py-2'>Halal Box</Link>
              <p className='text-slate-300 my-5'>A restaurant that offers an authentic taste of Swahili cuisine.With a menu full of flavorful dishes.
              <a href='https://goo.gl/maps/ewCKjhW536QFsQ6N9' target='_blank' rel='noreferrer' className='uppercase text-blue-600'> Visit us today </a></p>  
          </div>
          <form onSubmit={handleSubmit}>
            <p className='text-slate-300 my-5'>Subscribe to receive discount notifications</p>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input onChange={handleChange} className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-black bg-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              {
                success && <p className='p-2 rounded-md bg-green-600 text-white text-center'>Successfully subscribed</p>
            }
            {error && <p className='p-2 rounded-md text-red-700 -center'>Subscription Failed</p>}
          </form>
          <figure className='flex items-center py-10 flex-col'>
                <h1>Connect With Us</h1>
                <div className='flex gap-x-5 items-center py-3'>
                <a href="https://www.facebook.com/swahiliplate/" target='_blank' rel='noreferrer'>
                    <BsFacebook size={25} color='white'/>
                </a>
                <a href="https://www.instagram.com/swahiliplate/" target='_blank' rel='noreferrer'>
                    <BsInstagram size={25} color='white'/>
                </a>
                <a href="tel:0772435765" target='_blank' rel='noreferrer'>
                    <BsTelephonePlus size={24} color='white'/>
                </a>
                </div>
            </figure>
        </article>
        <article className='flex flex-col'>
            <div className='h-[1px] w-full my-5 md:w-[900px] bg-white'></div>
            <p className='text-center'>&copy; ALL RIGHTS RESERVED | {date.getFullYear()}</p>
            <p className='text-center'>Website created by <a className='text-blue-400' href='https://luqmanshaban.com' target='_blank' rel='noreferrer'>Luqman Shaban</a></p>
        </article>
    </section>
  )
}

export default Footer