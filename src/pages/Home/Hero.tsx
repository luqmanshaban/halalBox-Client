import React from 'react'
import hero from '../../assets/hero.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTelephonePlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='md:flex md:justify-center md:gap-x-80 md:items-center md:px-20 md:py-10 font-sans'>
        <article className='flex flex-col gap-y-6 p-3 md:py-0 pt-20'>
            <h1 className='md:text-5xl text-3xl font-semibold text-orange-950'>Meet, Eat & Enjoy The true <br className='hidden md:block'/> taste of Swahili Cuisine</h1>
            <p className='text-gray-800'>A restaurant that offers an authentic taste of Swahili cuisine. From aromatic biryanis <br />and pilaus to succulent grilled meats and seafood, each dish is prepared with the <br />perfect blend of spices and ingredients to tantalize your taste buds.</p>
            <Link to='/menu' className='p-2 bg-black text-white rounded-sm font-medium w-[40%]'>Explore Menu!</Link>
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
        <img src={hero} alt="" className='hidden md:block'/>
        <img src={img1} alt="" className='hidden md:block fixed right-0 h-20 left-3'/>
        <img src={img2} alt="" className='hidden md:block fixed right-[600px] rotate-[-45deg] h-32'/>
        <img src={img3} alt="" className='hidden md:block fixed right-0 bottom-52 h-32'/>
    </div>
  )
}

export default Hero