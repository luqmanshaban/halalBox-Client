import React, { useContext, useEffect } from 'react'
import { MenuContext } from '../../store/MenuContext'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const AllMenus = () => {
    const { getMenus, category, addToCart, handleAdd, handleMinus, itemCount  } = useContext(MenuContext)
    
    useEffect(() => {
        getMenus()
},[])
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.all && category.all.map((menu: any,id: number) => (
            <article key={id} className='px-3 border flex flex-col justify-center items-center gap-y-2 md:w-[200px] w-[300px] my-5'>
                <img src={menu.img} alt={menu.name} className='h-28 w-28 rounded-full h-'/>
                <h2 className='uppercase font-semibold text-center'>{menu.name}</h2>
                <p className='font-medium'>ksh {menu.price}</p>
                <figure className='flex gap-x-3 items-center justify-center'>
                  <button onClick={() => handleAdd(menu.name)} disabled={((itemCount[menu.name]) >= 5)} className='bg-orange-600 p-2 flex justify-center items-center rounded-full'>
                    <AiOutlinePlus color='white' size={15}/>
                  </button>
                  <p>{itemCount[menu.name] || 0}</p>
                  <button onClick={() => handleMinus(menu.name)} disabled={(itemCount[menu.name] || 0 ) === 0} className='bg-orange-600  p-2 flex justify-center items-center rounded-full'>
                    <AiOutlineMinus color='white' size={15}/>
                  </button>
                </figure>
                <button onClick={() => addToCart(menu.name, menu.price, menu.img,)} className='bg-black text-white px-5 py-2 w-full'>Add To Cart</button>
            </article>
           ))
        
        }
    </div>
  )
}

export default AllMenus