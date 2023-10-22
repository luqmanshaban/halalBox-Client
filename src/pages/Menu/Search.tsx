import React, { FormEventHandler, useContext, useState } from 'react'
import { MenuContext } from '../../store/MenuContext';

type Props = {
    // active: boolean;
    toggleMenus: (param: number) => void,
    searchedFood: (param: any) => void,
}

const Search: React.FC<Props> = ({ toggleMenus, searchedFood }) => {
    const [food, setFood] = useState('')
    const handleChange = (event:any) => {
        setFood(event.target.value);
        toggleMenus(6)
        let result = category.all.filter((item: any) => item.name.toLowerCase().includes(food))
        searchedFood(result)
      };
      
      const { category } = useContext(MenuContext)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        let result = category.all.filter((item: any) => item.name.toLowerCase().includes(food))
        searchedFood(result)
    }
    
    
  return (
    <form onSubmit={handleSubmit} className='md:m-0 mx-3 mt-10 md:w-[50%] w-full'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white bg-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" onChange={handleChange} value={food} className="block  w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-200 focus:border-slate-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-slate-200 dark:focus:border-slate-200" placeholder="Search for food . . ." required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-slate-200 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:bg-slate-200 dark:focus:ring-slate-200">Search</button>
    </div>
   </form>
  )
}

export default Search