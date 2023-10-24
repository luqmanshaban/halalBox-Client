import React, { useContext, useState } from 'react'
import Logo from '../components/Logo'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BiCartAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { MenuContext } from '../store/MenuContext'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)
    const { count } = useContext(MenuContext)
  return (
    <nav className='bg-white p-5 font-sans flex justify-between items-center shadow-md fixed w-full md:flex md:justify-between md:items-center  z-10 md:shadow-md md:fixed md:w-full md:px-20'>
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
            <li>
            <Link to='/order'>Orders</Link>
            </li>
            <li className=' bg-black rounded-3xl text-white px-5 py-2 flex justify-center items-center'>
                <Link to='/cart' className='flex justify-center items-center gap-x-2'>
                  <BiCartAlt size={30}/>
                  {count !== 0 && <span className='text-white font-bold fixed top-[20px] right-[90px]'>{count}</span>}
                  <span className='text-medium font-semibold'>cart</span>
                </Link>
            </li>
        </ul>

        <div className={`md:hidden transition-transform text-lg  ${!nav ? 'fixed left-[100%] ease-in-out duration-[0.7s]' : 'fixed left-0 top-[80px] px-2 py-20 bg-black text-white w-[80%] shadow-lg ease-in-out duration-[0.7s] h-full'}`}>
        <ul className='flex flex-col gap-y-5 text-lg'>
           <li onClick={toggleNav}>
               <Link to='/'>Home</Link>
            </li>
            <li onClick={toggleNav}>
                <Link to='/menu'>Menu</Link>
            </li>
            <li onClick={toggleNav}>
               <Link to='/contact'>Contact Us</Link>
            </li>
            <li onClick={toggleNav}>
               <Link to='/order'>Orders</Link>
            </li>
            <li className='fixed top-7 right-16'>
                <Link to='/cart'>
                {count !== 0 && <span className='text-black font-bold fixed top-[10px] right-[70px]'>{count}</span>}
                  <BiCartAlt size={30} color='black'/>
                </Link>
            </li>
        </ul>
        {/* <ul>
            <li>Login</li>
            <li>Sign Up</li>
        </ul> */}
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