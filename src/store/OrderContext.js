import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
    const [activeOrders, setActiveOrders] = useState([])

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
    }, [])

    const context = {
        activeOrders
    }
    return(
        <OrderContext.Provider value={context}>
            {children}
        </OrderContext.Provider>
    )
}