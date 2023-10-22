import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { LiaFortAwesomeAlt } from 'react-icons/lia'
import { MenuContext } from '../store/MenuContext';


const PayPalService = ({ total, items }) => {
  const { setOnPaymentBtnClick, setItems, setItemCount, setSpecialNote } = useContext(MenuContext)
    const initialOptions = {
        "client-id": "AZlnOA0ymWBH8oExWSu4D_GYPxZmXP_t3LO_Tw3xYfU-X2T1oqv630bIHz_VSJnGrc4V2qGup4jTtBlC",
        "enable-funding": "card",
        "disable-funding": "paylater,venmo",
        "data-sdk-integration-source": "integrationbuilder_sc",
      };
      const cart = [
        {
          amount: total,
          items: items
        }
      ]
      const [SuccesMessage, setSuccessMessage] = useState('')      
      const [ErrorMessage, setErrorMessage] = useState('')      
  return (
    <div>
       <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
          }}
          createOrder={async () => {
            setOnPaymentBtnClick(true)
            try {
              const response = await axios.post("https://halalbox.cyclic.app/api/orders", {cart});

              const orderData = response.data;

              if (orderData.id) {
                return orderData.id;
              } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData);
                setOnPaymentBtnClick(false)

                throw new Error(errorMessage);
              }
            } catch (error) {
              setErrorMessage(`Could not initiate PayPal Checkout`);
              setTimeout(() => {
                setErrorMessage('');
              },10000)
              setOnPaymentBtnClick(false)
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await axios.post(`https://halalbox.cyclic.app/api/orders/${data.orderID}/capture`);

              const orderData = response.data;
              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
              } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`,
                );
              } else {
                const transaction =
                  orderData.purchase_units[0].payments.captures[0];
                  setSuccessMessage(
                    `ORDER ${transaction.status}`,
                  );
                  setOnPaymentBtnClick(false)
                  setTimeout(() => {
                    setSuccessMessage('')
                    setItemCount({})
                    setItems([])
                    setSpecialNote('')
                },5000)
              }
            } catch (error) {
              console.error(error);
              setErrorMessage(
                `Sorry, your transaction could not be processed`,
              );
              setOnPaymentBtnClick(false)
              setTimeout(() => {
                setErrorMessage('')
              },5000)

            }
          }}
        />
      </PayPalScriptProvider>
      
     {SuccesMessage !== '' && <p className='text-center bg-green-600 text-white fixed md:top-10 md:left-[730px]  z-20 p-2 rounded-lg flex justify-center items-center gap-x-2'> <LiaFortAwesomeAlt size={30}/> {SuccesMessage}</p> }
     {ErrorMessage !== '' && <p> {ErrorMessage}</p> }
    </div>
  )
}

export default PayPalService