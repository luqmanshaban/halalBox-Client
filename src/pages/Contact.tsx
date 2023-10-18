import React, { FormEventHandler, useState } from 'react'
import Navbar from '../layout/Navbar'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTelephonePlus } from 'react-icons/bs'
import { send } from 'emailjs-com';
import Footer from '../layout/Footer'

const Contact = () => {
  const [emailResponse, setEmailResponse] = useState('')
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const from_name = formData.get("names") as string;
    const from_subject = formData.get("subject") as string;
    const from_email = formData.get("email") as string;
    const message = formData.get("message") as string;
  
    send(
      "service_0cf7cob",
      "template_a0dq95n",
      {
        from_name,
        from_subject,
        from_email,
        message,
      },
      "sNSLWQXTeDLQX15HW"
    )
      .then((response) => {
        handleResponse(true)
      })
      .catch((err) => {
        handleResponse(false)
      });
  
    e.currentTarget.reset();
  };

  const handleResponse = (success: boolean) => {
    setEmailResponse(success ? 'Email sent successfully!' : 'Failed to send email.');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
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
                        type="text"
                        name="name"
                        id="name"
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
                        type="email"
                        name="email"
                        id="email"
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
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
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
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      ></textarea>
                    </div>
                    <div>
                   <button
                     className="hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-semibold text-white outline-none"
                   >
                     Submit
                   </button>
                 </div>
               </form>
               {showMessage && (
            <div className={emailResponse.includes('success') ? 'p-3 rounded-md text-white bg-green-500 font-sans font-medium' : 'p-3 rounded-md text-white bg-red-600 font-sans font-medium'}>
              <p>{emailResponse}</p>
            </div>
        )}
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