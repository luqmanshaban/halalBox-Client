import React, { useState } from 'react'
import Logo from '../components/Logo'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BiCartAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)
  return (
    <nav className='bg-white p-5 font-sans flex justify-between items-center shadow-md fixed w-full md:flex md:justify-between md:items-center md:shadow-md md:fixed md:w-full md:px-20'>
        <Logo />
        <ul className={`md:flex md:justify-between md:flex-row md:items-center md:gap-x-10 hidden`}>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/menu'>Menu</Link>
            </li>
            <li>
            <Link to='/contact'>Contact Us</Link>
            </li>
        </ul>
        <ul className={`md:flex md:justify-between md:flex-row md:items-center md:gap-x-10 hidden`}>
            <li><BiCartAlt size={30}/></li>
            <li>Login</li>
            <li>Sign Up</li>
        </ul>

        <div className={`md:hidden transition-transform text-lg  ${!nav ? 'fixed left-[100%] ease-in-out duration-[0.7s]' : 'fixed left-0 top-[80px] px-2 py-20 bg-black text-white w-[80%] shadow-lg ease-in-out duration-[0.7s] h-full'}`}>
        <ul>
           <li>
               <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/menu'>Menu</Link>
               </li>
               <li>
               <Link to='/contact'>Contact Us</Link>
            </li>
        </ul>
        <ul>
        <li className='fixed top-6 right-16'><BiCartAlt size={30} color='black'/></li>
            <li>Login</li>
            <li>Sign Up</li>
        </ul>
        </div>

        <div onClick={toggleNav} className='block md:hidden'>
            {
                nav ? <AiOutlineClose size={20} cursor ='pointer'/> : <AiOutlineMenu size={20} cursor='pointer'/>
            }
        </div>
    </nav>
  )
}

export default Navbar