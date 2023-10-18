import React, { useContext } from 'react'
import { MenuContext } from '../../store/MenuContext'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

type Props = {
  menus: Array<Object>
}

const AllMenus = () => {
    const { category, addToCart, handleAdd, handleMinus, itemCount  } = useContext(MenuContext)
    
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
                <button onClick={() => addToCart(menu.name, menu.price, menu.img, itemCount[menu.name])} className='bg-black text-white px-5 py-2 w-full'>Add To Cart</button>
            </article>
           ))
        
        }
    </div>
  )
}
const Meals = () => {
    const { category, addToCart, handleAdd, handleMinus, itemCount  } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.meals && category.meals.map((menu: any,id: number) => (
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
                <button onClick={() => addToCart(menu.name, menu.price, menu.img, itemCount[menu.name])} className='bg-black text-white px-5 py-2 w-full'>Add To Cart</button>
            </article>
           ))
        
        }
    </div>
  )
}
const Top = () => {
    const { category, addToCart, handleAdd, handleMinus, itemCount  } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.topPick && category.topPick.map((menu: any,id: number) => (
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
                <button onClick={() => addToCart(menu.name, menu.price, menu.img, itemCount[menu.name])} className='bg-black text-white px-5 py-2 w-full'>Add To Cart</button>
            </article>
           ))
        
        }
    </div>
  )
}
const Drinks = () => {
    const { category, addToCart, handleAdd, handleMinus, itemCount  } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.drinks && category.drinks.map((menu: any,id: number) => (
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
                <button onClick={() => addToCart(menu.name, menu.price, menu.img, itemCount[menu.name])} className='bg-black text-white px-5 py-2 w-full'>Add To Cart</button>
            </article>
           ))
        
        }
    </div>
  )
}
const Snacks = () => {
    const { category, addToCart, handleAdd, handleMinus, itemCount  } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.snacks && category.snacks.map((menu: any,id: number) => (
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
                <button onClick={() => addToCart(menu.name, menu.price, menu.img, itemCount[menu.name])} className='bg-black text-white px-5 py-2 w-full'>Add To Cart</button>
            </article>
           ))
        
        }
    </div>
  )
}
const SandWiches = () => {
    const { category, addToCart, handleAdd, handleMinus, itemCount  } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           category.shawarma && category.shawarma.map((menu: any,id: number) => (
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
                <button onClick={() => addToCart(menu.name, menu.price, menu.img, itemCount[menu.name])} className='bg-black text-white px-5 py-2 w-full'>Add To Cart</button>
            </article>
           ))
        
        }
    </div>
  )
}
const Searched: React.FC<Props> = ({ menus }) => {
    const { addToCart, handleAdd, handleMinus, itemCount  } = useContext(MenuContext)
    
  return (
    <div className='flex gap-x-10 justify-center flex-wrap font-sans'>
        {
        
           menus && menus.map((menu: any,id: number) => (
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
                <button onClick={() => addToCart(menu.name, menu.price, menu.img, itemCount[menu.name])} className='bg-black text-white px-5 py-2 w-full'>Add To Cart</button>
            </article>
           ))
        
        }
    </div>
  )
}


export { AllMenus, Top, Meals, Drinks, Snacks, SandWiches, Searched}