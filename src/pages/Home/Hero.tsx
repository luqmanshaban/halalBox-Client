import React from 'react'
import hero from '../../assets/hero.png'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTelephonePlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='md:flex md:justify-center md:flex-row md:gap-x-80 md:items-center md:px-20 md:mt-5 md:py-10 font-sans flex flex-col-reverse items-center gap-y-0'>
        <article className='flex flex-col gap-y-3 p-3 md:py-0 pt-20'>
            <h1 className='md:text-5xl text-3xl font-semibold text-orange-950'>Meet, Eat & Enjoy The true <br className='hidden md:block'/> taste of Swahili Cuisine</h1>
            <p className='text-gray-800'>A restaurant that offers an authentic taste of Swahili cuisine. From aromatic biryanis <br className='md:block hidden'/>and pilaus to succulent grilled meats and seafood<span className='md:inline hidden'>, each dish is prepared with the <br className='md:block hidden'/>perfect blend of spices and ingredients to tantalize your taste buds.</span></p>
            <Link to='/menu' className='p-2 bg-black text-white rounded-sm font-medium md:w-[22%] w-[37%]'>Explore Menu!</Link>
            <figure className='flex gap-x-5 items-center py-10'>
                <a href="https://www.facebook.com/swahiliplate/" target='_blank' rel='noreferrer'>
                    <BsFacebook size={25} color='black'/>
                </a>
                <a href="https://www.instagram.com/swahiliplate/" target='_blank' rel='noreferrer'>
                    <BsInstagram size={25} color='black'/>
                </a>
                <a href="tel:0772435765" target='_blank' rel='noreferrer'>
                    <BsTelephonePlus size={24} color='black'/>
                </a>
            </figure>
        </article>
        <img src={hero} alt="" className='h-40 w-40 mt-3 md:h-80 md:w-80  md:block'/>
    </div>
  )
}

export default Hero