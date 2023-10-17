import React from 'react'
import { BiCartAdd } from 'react-icons/bi'

const FoodCards = () => {
  return (
    <div className='flex md:flex-row flex-col gap-x-5 font-sans'>
        <article className='bg-slate-100 flex gap-0 text-black shadow-2xl rounded-md w-[200px] h-full'>
            <img src="https://d1ralsognjng37.cloudfront.net/0755a605-67a4-4904-b0cd-ecf8d0a0ea1f" className='h-20 rounded-sm' alt="Arosto Pilau" />
                <button className='relative top-[-60px] right-[-60px]'>
                    <BiCartAdd size={30} />
                </button>
            <figure>
                <h2 className='font-semibold'>Arosto Pilau</h2>
                <p className='text-orange-900'>800</p>
            </figure>
        </article>
        <article className='bg-slate-100 flex gap-0 text-black shadow-2xl rounded-md w-[200px] h-full'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlmpNv9QhLfG9_TbuxdtiHvP7ULnSmQd2dg&usqp=CAU" className='h-20 rounded-sm' alt="Arosto Pilau" />
                <button className='relative top-[-60px] right-[-60px]'>
                    <BiCartAdd size={30} />
                </button>
            <figure>
                <h2 className='font-semibold'>Shawarma combo</h2>
                <p className='text-orange-900'>650</p>
            </figure>
        </article>
        <article className='bg-slate-100 flex gap-0 text-black shadow-2xl rounded-md w-[200px] h-full'>
            <img src="https://d1ralsognjng37.cloudfront.net/f277e5f2-9d86-4d62-be6f-97637aadd7ae" className='h-20 rounded-sm' alt="Arosto Pilau" />
                <button className='relative top-[-60px] right-[-60px]'>
                    <BiCartAdd size={30} />
                </button>
            <figure>
                <h2 className='font-semibold'>Chicken Biryani</h2>
                <p className='text-orange-900'>850</p>
            </figure>
        </article>
    </div>
  )
}

export default FoodCards