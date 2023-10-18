import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className='md:px-5 md:py-2 px-3 py-2 uppercase border border-black text-black md:w-40 font-sans w-40 font-semibold rounded-md text-center'>
        Halal Box
    </Link>
  )
}

export default Logo