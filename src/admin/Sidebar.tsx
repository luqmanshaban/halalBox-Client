import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineHome, AiOutlineHistory, AiFillMessage } from 'react-icons/ai'
import { PiCookingPotBold } from 'react-icons/pi'
import { GiMeal } from 'react-icons/gi'
import { MdExitToApp } from 'react-icons/md'

type Props = {
    toggleComponent: (index: number) => void,
    active: Array<boolean>
}

const Sidebar: React.FC<Props> = ({ toggleComponent, active }) => {
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <div className='bg-black flex flex-col items-center'>
        <Link to='/admin' className='p-2 bg-black border border-white rounded-lg text-white text-center hidden md:block'>HalaBox</Link>
        <ul className='flex flex-col items-center justify-center gap-y-10 md:my-5  md:mt-10 w-full'>
            <li className={`text-white flex items-center justify-center gap-x-2 cursor-pointer ${active[0] ? 'bg-gray-500 rounded-xl w-full p-2' : ''}`} onClick={() => toggleComponent(0)}>
                <AiOutlineHome color='white' size={30} />
                <p>Home</p>
            </li>
            <li className={`text-white flex items-center justify-center gap-x-2 cursor-pointer ${active[1] ? 'bg-gray-500 rounded-xl w-full p-2' : ''}`} onClick={() => toggleComponent(1)}>
                <PiCookingPotBold color='white' size={30} />
                <p>Menus</p>
            </li>
            <li className={`text-white flex items-center justify-center gap-x-2 cursor-pointer ${active[2] ? 'bg-gray-500 rounded-xl w-full p-2' : ''}`} onClick={() => toggleComponent(2)}>
                <GiMeal color='white' size={30} />
                <p>Menus</p>
            </li>
            <li className={`text-white flex items-center justify-center gap-x-2 cursor-pointer ${active[3] ? 'bg-gray-500 rounded-xl w-full p-2' : ''}`} onClick={() => toggleComponent(3)}>
                <AiOutlineHistory color='white' size={30}/>
                <p>History</p>
            </li>
            <li className={`text-white flex items-center justify-center gap-x-2 cursor-pointer ${active[4] ? 'bg-gray-500 rounded-xl w-full p-2' : ''}`}  onClick={() => toggleComponent(4)}>
                <AiFillMessage color='white' size={30} />
                <p>Messages</p>
            </li>
            <li className='cursor-pointer' onClick={Logout}>
                <MdExitToApp color='red' size={30} />
            </li>
        </ul>
    </div>
  )
}

export default Sidebar