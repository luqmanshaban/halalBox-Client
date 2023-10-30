import React, { useContext } from 'react'
import { BiCartAdd } from 'react-icons/bi'
import { MenuContext } from '../../store/MenuContext'

const FoodCards = () => {
    const { category, addToCart, handleAdd } = useContext(MenuContext)
  return (
    <div className='flex md:flex-row flex-col gap-x-10 font-sans'>
        {
            category.topPick.map((menu: any, id: number) => (
                <article key={id} className='bg-slate-100 flex gap-0 text-black shadow-2xl rounded-md w-[200px] h-full'>
                    <img src={menu.img} className='h-20 rounded-sm' alt={menu.name} />
                        <button  onClick={() => addToCart(menu.name, menu.price, menu.img, handleAdd(menu.name))} className='relative top-[-60px] right-[-60px]'>
                            <BiCartAdd size={30} />
                        </button>
                    <figure>
                        <h2 className='font-semibold'>{menu.name}</h2>
                        <p className='text-orange-900'>{menu.price}</p>
                    </figure>
                </article>

            ))
        }
    </div>
  )
}

export default FoodCards