import React, { useState } from 'react'
import Logo from '../components/Logo'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoginAnimation from '../components/LoginAnimation'

interface User {
    username: string 
    password: string
}

const Login = () => {
    const [user, setUser] = useState<User>({username: '', password: ''})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(user);
        setLoading(true)
        
        try {
            const response = await axios.post('https://halalbox.cyclic.app/api/login', user)
            console.log(response);
            
            if(response.status === 200) {
                localStorage.setItem('token', response.data.token)
                navigate('/admin')
            }
        } catch (error: any) {
            console.log(error);
            
            if(error.status === 401){
                setError(true)
                setTimeout(() => {
                    setError(false)
                },3000)
            }else if(error.status === 500) {
                setServerError(true)
                setTimeout(() => {
                    setServerError(false)
                },3000)
            }
        }finally {
            setLoading(false)
        }
    }
  return (
    <div className='flex justify-center items-center flex-col py-20 px-10 gap-y-10'>
        <Logo />
        <form onSubmit={handleSubmit} className='flex justify-center items-center md:w-[500px] flex-col gap-y-5 bg-black text-white py-5 px-3 w-full shadow-md'>
            <h1 className='text-xl font-bold'>Login</h1>
            <div className='flex justify-center items-start flex-col'>
                <label>UserName:</label>
                <input className='text-black p-2 rounded-lg' type="text" name="username" id="username" value={user.username} onChange={handleChange}/>
            </div>
            <div className='flex justify-center items-start flex-col'>
                <label htmlFor="password">Password:</label>
                <input className='text-black p-2 rounded-lg' type="password" name="password" id="password" value={user.password} onChange={handleChange}/>
            </div>
            <div className='flex justify-center items-center flex-col'>
                {error && <p className='font-bold font-mono text-red-700'>Invalid Username or Password</p>}
                {serverError && <p className='font-bold font-mono text-red-700'>Server Error</p>}
            </div>
            <div className='flex justify-center items-center flex-col'>
                {loading && <LoginAnimation/>}
            </div>
            <div className='w-[56%]'>
                <button className='bg-black border border-white text-white py-2 w-[100%] font-bold rounded-lg'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login