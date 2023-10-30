import React, { useContext } from 'react'
import { MenuContext } from '../../store/MenuContext'
import { AiOutlinePlus } from 'react-icons/ai'
import { GoDotFill } from 'react-icons/go'

type Props = {
  menus: Array<Object>
}

const AllMenus = () => {
    const { category, addToCart, handleAdd } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
      {
        category.all && category.all.map((menu: any,id: number) => (
          <article key={id} className='text-black p-3 shadow-lg bg-slate-100 rounded-lg flex flex-col gap-y-3 md:w-[300px] md:h-[300px] h-[300px] w-full md:mx-0 mx-10 my-10'>
            <img className="h-[50%] rounded-lg" src={menu.img} alt={menu.name} />
            <h1 className='font-bold text-xl'>{menu.name}</h1>
            <p className='flex justify-start items-center gap-x-2 text-gray-500'>
              <span>category</span>
              <GoDotFill color='grey'/>
              <span>{menu.category}</span>
            </p>
            <figure className='flex justify-between items-center text-gray-500'>
              <h1 className='font-bold text-black italic text-lg'>ksh: {menu.price}</h1>
              <button onClick={() => addToCart(menu.name, menu.price, menu.img, handleAdd(menu.name))} className='bg-orange-500 p-3 rounded-full'><AiOutlinePlus color='white' size={20}/></button>
            </figure>
          </article>
        ))
      }
    </div>
  )
}
const Meals = () => {
    const { category, addToCart, handleAdd } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.meals && category.meals.map((menu: any,id: number) => (
            <article key={id} className='text-black p-3 shadow-lg bg-slate-100 rounded-lg flex flex-col gap-y-3 md:w-[300px] md:h-[300px] h-[300px] w-full md:mx-0 mx-10 my-10'>
            <img className="h-[50%] rounded-lg" src={menu.img} alt={menu.name} />
            <h1 className='font-bold text-xl'>{menu.name}</h1>
            <p className='flex justify-start items-center gap-x-2 text-gray-500'>
              <span>category</span>
              <GoDotFill color='grey'/>
              <span>{menu.category}</span>
            </p>
            <figure className='flex justify-between items-center text-gray-500'>
              <h1 className='font-bold text-black italic text-lg'>ksh: {menu.price}</h1>
              <button onClick={() => addToCart(menu.name, menu.price, menu.img,handleAdd(menu.name))} className='bg-orange-500 p-3 rounded-full'><AiOutlinePlus color='white' size={20}/></button>
            </figure>
          </article>
           ))
        
        }
    </div>
  )
}
const Top = () => {
    const { category, addToCart, handleAdd } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.topPick && category.topPick.map((menu: any,id: number) => (
            <article key={id} className='text-black p-3 shadow-lg bg-slate-100 rounded-lg flex flex-col gap-y-3 md:w-[300px] md:h-[300px] h-[300px] w-full md:mx-0 mx-10 my-10'>
            <img className="h-[50%] rounded-lg" src={menu.img} alt={menu.name} />
            <h1 className='font-bold text-xl'>{menu.name}</h1>
            <p className='flex justify-start items-center gap-x-2 text-gray-500'>
              <span>category</span>
              <GoDotFill color='grey'/>
              <span>{menu.category}</span>
            </p>
            <figure className='flex justify-between items-center text-gray-500'>
              <h1 className='font-bold text-black italic text-lg'>ksh: {menu.price}</h1>
              <button onClick={() => addToCart(menu.name, menu.price, menu.img,handleAdd(menu.name))} className='bg-orange-500 p-3 rounded-full'><AiOutlinePlus color='white' size={20}/></button>
            </figure>
          </article>
           ))
        
        }
    </div>
  )
}
const Drinks = () => {
    const { category, addToCart, handleAdd } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.drinks && category.drinks.map((menu: any,id: number) => (
            <article key={id} className='text-black p-3 shadow-lg bg-slate-100 rounded-lg flex flex-col gap-y-3 md:w-[300px] md:h-[300px] h-[300px] w-full md:mx-0 mx-10 my-10'>
            <img className="h-[50%] rounded-lg" src={menu.img} alt={menu.name} />
            <h1 className='font-bold text-xl'>{menu.name}</h1>
            <p className='flex justify-start items-center gap-x-2 text-gray-500'>
              <span>category</span>
              <GoDotFill color='grey'/>
              <span>{menu.category}</span>
            </p>
            <figure className='flex justify-between items-center text-gray-500'>
              <h1 className='font-bold text-black italic text-lg'>ksh: {menu.price}</h1>
              <button onClick={() => addToCart(menu.name, menu.price, menu.img,handleAdd(menu.name))} className='bg-orange-500 p-3 rounded-full'><AiOutlinePlus color='white' size={20}/></button>
            </figure>
          </article>
           ))
        
        }
    </div>
  )
}
const Snacks = () => {
    const { category, addToCart, handleAdd } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.snacks && category.snacks.map((menu: any,id: number) => (
            <article key={id} className='text-black p-3 shadow-lg bg-slate-100 rounded-lg flex flex-col gap-y-3 md:w-[300px] md:h-[300px] h-[300px] w-full md:mx-0 mx-10 my-10'>
            <img className="h-[50%] rounded-lg" src={menu.img} alt={menu.name} />
            <h1 className='font-bold text-xl'>{menu.name}</h1>
            <p className='flex justify-start items-center gap-x-2 text-gray-500'>
              <span>category</span>
              <GoDotFill color='grey'/>
              <span>{menu.category}</span>
            </p>
            <figure className='flex justify-between items-center text-gray-500'>
              <h1 className='font-bold text-black italic text-lg'>ksh: {menu.price}</h1>
              <button onClick={() => addToCart(menu.name, menu.price, menu.img,handleAdd(menu.name))} className='bg-orange-500 p-3 rounded-full'><AiOutlinePlus color='white' size={20}/></button>
            </figure>
          </article>
           ))
        
        }
    </div>
  )
}
const SandWiches = () => {
    const { category, addToCart, handleAdd } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.shawarma && category.shawarma.map((menu: any,id: number) => (
            <article key={id} className='text-black p-3 shadow-lg bg-slate-100 rounded-lg flex flex-col gap-y-3 md:w-[300px] md:h-[300px] h-[300px] w-full md:mx-0 mx-10 my-10'>
            <img className="h-[50%] rounded-lg" src={menu.img} alt={menu.name} />
            <h1 className='font-bold text-xl'>{menu.name}</h1>
            <p className='flex justify-start items-center gap-x-2 text-gray-500'>
              <span>category</span>
              <GoDotFill color='grey'/>
              <span>{menu.category}</span>
            </p>
            <figure className='flex justify-between items-center text-gray-500'>
              <h1 className='font-bold text-black italic text-lg'>ksh: {menu.price}</h1>
              <button onClick={() => addToCart(menu.name, menu.price, menu.img,handleAdd(menu.name))} className='bg-orange-500 p-3 rounded-full'><AiOutlinePlus color='white' size={20}/></button>
            </figure>
          </article>
           ))
        
        }
    </div>
  )
}
const Searched: React.FC<Props> = ({ menus }) => {
    const { addToCart, handleAdd } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           menus && menus.map((menu: any,id: number) => (
            <article key={id} className='text-black p-3 shadow-lg bg-slate-100 rounded-lg flex flex-col gap-y-3 md:w-[300px] md:h-[300px] h-[300px] w-full md:mx-0 mx-10 my-10'>
            <img className="h-[50%] rounded-lg" src={menu.img} alt={menu.name} />
            <h1 className='font-bold text-xl'>{menu.name}</h1>
            <p className='flex justify-start items-center gap-x-2 text-gray-500'>
              <span>category</span>
              <GoDotFill color='grey'/>
              <span>{menu.category}</span>
            </p>
            <figure className='flex justify-between items-center text-gray-500'>
              <h1 className='font-bold text-black italic text-lg'>ksh: {menu.price}</h1>
              <button onClick={() => addToCart(menu.name, menu.price, menu.img,handleAdd(menu.name))} className='bg-orange-500 p-3 rounded-full'><AiOutlinePlus color='white' size={20}/></button>
            </figure>
          </article>
           ))
        
        }
    </div>
  )
}


export { AllMenus, Top, Meals, Drinks, Snacks, SandWiches, Searched}