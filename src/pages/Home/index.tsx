import React from 'react'
import Navbar from '../../layout/Navbar'
import Hero from './Hero'
import FoodCards from './FoodCards'

const Home = () => {
  return (
    <header>
        <Navbar />
        <section className='pt-20'>
          <Hero />
        </section>
        <main className='md:flex justify-center items-center flex-col gap-y-10 hidden'>
            <h1 className='text-xl font-semibold font-sans underline'>Top Picks</h1>
            <FoodCards />
        </main>
    </header>
  )
}

export default Home