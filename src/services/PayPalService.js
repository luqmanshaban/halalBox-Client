import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import axios from 'axios';
import React, { useState } from 'react'


function Message({ content }) {
    return <p>{content}</p>
}

const PayPalService = ({ total, items }) => {
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
      const [message, setMessage] = useState('')
  return (
    <div>
       <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
          }}
          createOrder={async () => {
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

                throw new Error(errorMessage);
              }
            } catch (error) {
              console.error(error);
              setMessage(`Could not initiate PayPal Checkout...${error}`);
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
                alert('Order created')
                const transaction =
                  orderData.purchase_units[0].payments.captures[0];
                setMessage(
                  `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
                );
                console.log(
                  "Capture result",
                  orderData,
                  JSON.stringify(orderData, null, 2),
                );
              }
            } catch (error) {
              console.error(error);
              setMessage(
                `Sorry, your transaction could not be processed...${error}`,
              );
            }
          }}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  )
}

export default PayPalService