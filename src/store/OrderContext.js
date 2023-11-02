import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
    const [activeOrders, setActiveOrders] = useState([])
    const [orders, setOrders] = useState()

    const getOrders = async() => {
        try {
          const response = await axios.get('https://halalbox.cyclic.app/api/all-orders')
          setOrders(response.data)
          console.log(response.data);
        } catch (error) {
          console.error(error);
          
        }
      }

    const OrderReceived = async (id) => {
        try {
            await axios.post(`https://halalbox.cyclic.app/api/update-order-status/${id}`, {status: 'COMPLETED'})
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    }

    const getActiveOrders = async() => {
        try {
            const response = await axios.get('https://halalbox.cyclic.app/api/processing-orders')
            setActiveOrders(response.data)
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        getActiveOrders()
        getOrders()
    }, [])

    const context = {
        activeOrders,
        OrderReceived,
        orders
    }
    return(
        <OrderContext.Provider value={context}>
            {children}
        </OrderContext.Provider>
    )
}