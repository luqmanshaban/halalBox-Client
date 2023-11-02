import React, { useContext } from 'react'
import { MenuContext } from '../../../store/MenuContext'
import { MdFastfood } from 'react-icons/md';

const Menus = () => {
    const { category } = useContext(MenuContext)
    const length = category.all.length
  return (
    <div className='flex items-start justify-start flex-col gap-y-2 p-3 shadow-lg h-40 w-60 bg-orange-200 rounded-md'>
    <div className='flex items-center gap-x-2 mt-3'>
        <MdFastfood color='red' size={30}/>
        <p>Total Menus</p>
    </div>
    <div className='text-center flex justify-center items-center bg-white p-5 w-full rounded-md'>
        <p className='text-center text-orange-700 font-bold'>{length} menus</p>
    </div>
</div>
  )
}

export default Menus