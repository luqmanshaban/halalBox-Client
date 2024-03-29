import React, { useContext, useState } from 'react'
import Navbar from '../../layout/Navbar'
import { MenuContext } from '../../store/MenuContext'
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from 'react-icons/ai'
import PayPalService from '../../services/PayPalService'
import Loading from '../../components/Loading'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { total, items, handleAdd, handleMinus, itemCount, removeFromCart, specialNote, handleChange, onPaymentBtnClick, PaymentClicked } = useContext(MenuContext)
    const [clicked, setClicked] = useState(false)
    // const [onPaymentBtnClick, setOnPaymentBtnClick] = useState(false)
    const [transaction_id, setTransaction_id] = useState('')

    // const PaymentClicked = () => setOnPaymentBtnClick(!onPaymentBtnClick)
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main className='pt-20 flex justify-center items-center font-sans'>
            {
            items.length !== 0 && 
            <section className='flex flex-col shadow-xl gap-y-4 border bg-white p-5 mt-20'>
            <div className='md:h-auto md:w-auto shadow-xl border bg-white flex flex-col gap-y-3 justify-start items-center my-10'>
                      {items && items.map((menu: any, id: number) => (
                          <article key={id} className='p-3 flex justify-between items-center shadow-md gap-x-5'>
                              <h1 className='text-lg font-bold'>{menu.name}</h1>
                              <p>ksh {menu.price}</p>
                              <span>x {itemCount[menu.name] || 0}</span>
                              <button onClick={() => handleAdd(menu.name)} disabled={((itemCount[menu.name]) >= 5)} className='bg-black text-white  p-2 flex justify-center items-center rounded-full'>
                                  <AiOutlinePlus />
                              </button>
                              <button onClick={() => handleMinus(menu.name)}  disabled={(itemCount[menu.name] || 0 ) === 1} className='bg-black text-white  p-2 flex justify-center items-center rounded-full'>
                                  <AiOutlineMinus color='white' />
                              </button>
                              <button onClick={() => removeFromCart(menu.name)}>
                                  <AiFillDelete color='red' size={30} />
                              </button>
                          </article>
                      ))}
            </div>
                <article className='flex flex-col bg-slate-300 p-2'>
                    <div className='flex justify-between items-center bg-slate-300 p-2' onClick={() => setClicked(!clicked)}>
                        <article>
                            <h1 className='text-lg font-bold'>Add an order note</h1>
                            <p className='text-slate-500'>Utensils, special instructions, etc.</p>
                        </article>
                        <button><AiOutlinePlus color='gray' size={30}/></button>
                    </div>
                    {clicked && <div className="mb-3">
                           <textarea
                             rows={4}
                             name="message"
                             id="message"
                             onChange={handleChange}
                             value={specialNote}
                             placeholder="Type your message"
                             className="w-full resize-none rounded-md border border-[#0a0303] bg-slate-300 py-3 px-6 text-base font-medium text-black outline-none focus:border-[#030207] focus:shadow-md"
                           ></textarea>
                       </div>
                    }
                </article>

                <article className='flex flex-col gap-y-2'>
                    <p className='text-lg font-bold text-blue-950'>Total: <span className='text-gray-500 italic'>{total} ksh</span></p>
                    {/* <button onClick={checkoutWithPaypal} className='bg-blue-500 px-5 py-2 rounded-md text-black font-bold flex justify-center items-center gap-x-2'>
                        Checkout With PayPal 
                        <BsPaypal color='white' size={30}/>
                    </button> */}
                    <figure onClick={PaymentClicked}>
                      <PayPalService total={total} items={items} setTransaction_id={setTransaction_id}/>
                    </figure>
                    {onPaymentBtnClick && <Loading />}
                </article>
            </section>
            }
            {
              items.length === 0 && <div>
                <div className='mt-20 md:h-[400px] md:w-[700px] md:py-2 py-52 flex flex-col justify-center items-center text-center shadow-xl border bg-white'>
                 <p className='text-2xl font-bold'>Cart Is Empty</p>
                 <Link to='/menu' className='w-[120px] p-2 bg-black  text-white font-bold rounded-lg'>Go To Menu</Link>
                </div>
                {transaction_id !== '' && <article className='my-10 text-center'>
                    <p className='italic'>Copy Your transaction ID and track your order <Link to='/order' className='text-blue-700 font-bold'>HERE</Link></p>
                    <p>Transaction ID: <span className='font-bold'>{transaction_id}</span></p>
                </article>}
              </div>
            }
        </main>
    </div>
  )
}

export default Cart