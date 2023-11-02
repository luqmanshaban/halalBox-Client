import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const PaymentContext = createContext()

const PaymentProvider = ({ children }) => {
    const [payments, setPayments] = useState([])

    const getPayments = async() => {
        try {
            const response = await axios.get('https://halalbox.cyclic.app/api/payments')
            setPayments(response.data.payment)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPayments()
    },[])

    const context = {
        payments,
        getPayments
    }
    return(
        <PaymentContext.Provider value={context}>
            {children}
        </PaymentContext.Provider>
    )
}

export default PaymentProvider