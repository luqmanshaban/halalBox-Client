import React from 'react'
import { MdRecommend, MdNoDrinks } from 'react-icons/md'
import { GiMeal, GiSandwich } from 'react-icons/gi'
import { LuDessert } from 'react-icons/lu'
import { BiSolidBowlingBall } from 'react-icons/bi'

type Props = {
    active: Array<Boolean>,
    handleClick: (param: number) => void
}

const Filter: React.FC<Props> = ({ active, handleClick }) => {    
    
  return (
    <div className='flex items-start gap-x-3 justify-between'>
        <button onClick={() => handleClick(0)} className={`${active[0] ? 'bg-gray-800 text-white': 'bg-slate-100 shadow-md text-black'} md:h-14 md:w-14 h-10 w-10 flex items-center flex-col justify-center rounded-full uppercase`}>
            <BiSolidBowlingBall />
        </button>
        <button onClick={() => handleClick(1)} className={`${active[1] ? 'bg-gray-800 text-white': 'bg-slate-100 shadow-md text-black'} md:h-14 md:w-14 h-10 w-10 flex items-center flex-col justify-center rounded-full uppercase`}>
            <MdRecommend />
        </button>
        <button onClick={() => handleClick(2)} className={`${active[2] ? 'bg-gray-800 text-white': 'bg-slate-100 shadow-md text-black'} md:h-14 md:w-14 h-10 w-10 flex items-center flex-col justify-center rounded-full uppercase`}>
            <GiMeal />
        </button>
        <button onClick={() => handleClick(3)} className={`${active[3] ? 'bg-gray-800 text-white': 'bg-slate-100 shadow-md text-black'} md:h-14 md:w-14 h-10 w-10 flex items-center flex-col justify-center rounded-full uppercase`}>
            <MdNoDrinks />
        </button>
        <button onClick={() => handleClick(4)} className={`${active[4] ? 'bg-gray-800 text-white': 'bg-slate-100 shadow-md text-black'} md:h-14 md:w-14 h-10 w-10 flex items-center flex-col justify-center rounded-full uppercase`}>
            <GiSandwich />
        </button>
        <button onClick={() => handleClick(5)} className={`${active[5] ? 'bg-gray-800 text-white': 'bg-slate-100 shadow-md text-black'} md:h-14 md:w-14 h-10 w-10 flex items-center flex-col justify-center rounded-full uppercase`}>
            <LuDessert />
        </button>
    </div>
  )
}

export default Filter