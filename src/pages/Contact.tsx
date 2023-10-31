import React, { FormEvent, useState } from 'react'
import Navbar from '../layout/Navbar'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTelephonePlus } from 'react-icons/bs'
import Footer from '../layout/Footer'
import axios from 'axios'

type EmailType = {
  names: string
  email: string 
  subject: string 
  message: string
}

type ResponseType = {
  success: string,
  error: string
}

const Contact = () => {
  const [emailResponse, setEmailResponse] = useState<ResponseType>({
    success: '',
    error: ''
  })
  const response = emailResponse.success !== '' ? emailResponse.success : emailResponse.error
  const [email, setEmail] = useState<EmailType>({names: '', email: '', subject: '', message: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmail(prev => ({...prev, [name]: value}))
  }

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEmail((prevEmail) => ({ ...prevEmail, [name]: value }));
  }


  const sendEmail = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const response: any = await axios.post('http://localhost:8000/api/messages', email)
      setEmailResponse({
        success: response.data.success,
        error: ''
      })
      setTimeout(() => {
        setEmail({names: '', email: '', subject: '', message: ''})
        setEmailResponse({
          success: '',
          error: ''
        })
      }, 3000)
      
    } catch (error: any) {
      console.log(error.message)
      setEmailResponse({
        success: '',
        error: error.message
      })
      setTimeout(() => {
        setEmailResponse({
          success: '',
          error: ''
        })
      }, 3000)
    }
  };

  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main className='pt-24 flex justify-center items-center flex-col'>
          <h1 className='text-xl font-bold'>Get In Touch</h1>
          <div className="flex items-center justify-center p-5 border border-slate-300 rounded-sm shadow-md mt-10">
                <div className="mx-auto w-full max-w-[550px]">
                  <form onSubmit={sendEmail}>
                    <div className="mb-2">
                      <label
                        htmlFor="name"
                        className="mb-1 block text-base font-medium text-[#07074D]"
                      >
                        Full Name
                      </label>
                      <input
                      required
                        type="text"
                        name="names"
                        id="name"
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="email"
                        className="mb-1 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                      required
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-1">
                      <label
                        htmlFor="subject"
                        className="mb-1 block text-base font-medium text-[#07074D]"
                      >
                        Subject
                      </label>
                      <input
                      required
                        type="text"
                        name="subject"
                        id="subject"
                        onChange={handleChange}
                        placeholder="Enter subject"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="message"
                        className="mb-1 block text-base font-medium text-[#07074D]"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        id="message"
                        onChange={handleMessage}
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      ></textarea>
                    </div>
                    {(emailResponse.error !== '' || emailResponse.success !== '') && <div >
                      <p className={emailResponse.success !== '' ? 'text-center p-3 my-2 rounded-md text-white bg-green-500 font-sans font-medium' : 'text-center p-3 rounded-md text-white bg-red-600 font-sans font-medium'}>{response}</p>
                    </div>}
                    <div>
                   <button
                     className="hover:shadow-form rounded-md w-full bg-black py-3 px-8 text-base font-semibold text-white outline-none"
                   >
                     Send
                   </button>
                 </div>
               </form>
            </div>
          </div>
          {/* <span className='h-[1px] w-[70%] bg-black'></span> */}
          <figure className='flex gap-x-5 items-center py-10'>
                <a href="https://www.facebook.com/swahiliplate/" target='_blank' rel='noreferrer'>
                    <BsFacebook size={25} color='black'/>
                </a>
                <a href="https://www.instagram.com/swahiliplate/" target='_blank' rel='noreferrer'>
                    <BsInstagram size={25} color='black'/>
                </a>
                <a href="tel:0772435765" target='_blank' rel='noreferrer'>
                    <BsTelephonePlus size={24} color='black'/>
                </a>
            </figure>
        </main>
        <footer className='mt-32'>
          <Footer />
        </footer>
    </div>
  )
}

export default Contact