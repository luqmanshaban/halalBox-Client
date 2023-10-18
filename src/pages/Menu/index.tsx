import React, { useState } from 'react'
import Navbar from '../../layout/Navbar'
import Search from './Search'
import Filter from './Filter'
import FoodMenus from './FoodMenus'
import Footer from '../../layout/Footer'

const Menu = () => {
  const [active, setActive] = useState([true, false, false, false, false, false, false])
  const [searchedFood, setSearchedFood] = useState([])
  const handleClick = (index: number) => setActive(active.map((value, i) => i === index))
  
  
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main className='pt-20'>
          <section className='flex items-center justify-center md:flex-row flex-col gap-x-5 my-10 px-2'>
            <Filter active={active} handleClick={handleClick} />
            <Search searchedFood={setSearchedFood} toggleMenus={handleClick}/>
          </section>
          <FoodMenus searched={searchedFood} active={active}/>
        </main>
      <footer className='mt-20'>
        <Footer />
      </footer>
    </div>
  )
}

export default Menu