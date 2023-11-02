import React, { useContext } from 'react'
import { PaymentContext } from '../../../store/PaymentContext'
import { MdPayment } from 'react-icons/md'

const Payment = () => {
    const { payments } = useContext(PaymentContext)
    const amounts = payments.map((payment: any) => payment.amount);

    // Use reduce to calculate the total of all amounts
    const totalAmount = amounts.reduce((accumulator: any, currentAmount: any) => accumulator + currentAmount, 0);

  return (
    <div className='flex items-start justify-start flex-col gap-y-2 p-3 shadow-lg h-40 w-60 bg-slate-200 rounded-md'>
    <div className='flex items-center gap-x-2 mt-3'>
        <MdPayment color='orange' />
        <p>Total Revenue</p>
    </div>
    <div className='text-center flex justify-center items-center bg-white p-5 w-full rounded-md'>
        <p className='text-center text-orange-700 font-bold'>ksh {totalAmount}</p>
    </div>
</div>
  )
}

export default Payment