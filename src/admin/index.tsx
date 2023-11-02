import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

const Admin = () => {
  const [active, setActive] = useState([true, false, false, false, false])
  const toggleComponent = (index: number) => setActive(active.map((value, i) => i === index))
  
  return (
    <div className='flex justify-start gap-x-28'>
      <header className='bg-black h-[100vh] p-2 py-5 md:w-[15%] w-[30%] fixed'>
        <Sidebar toggleComponent={toggleComponent} active={active}/>
      </header>
      <main className='md:w-[75%] md:ml-72'>
        <Main active={active}/>
      </main>
    </div>
  )
}

export default Admin