import React from 'react'
import Navbar from '../../layout/Navbar'
import MenuProvider from '../../store/MenuContext'
import AllMenus from './AllMenus'

const Menu = () => {
  
  return (
    <div>
      <MenuProvider>
        <header>
            <Navbar />
        </header>
        <main className='pt-20'>
            <AllMenus />
        </main>
      </MenuProvider>
    </div>
  )
}

export default Menu