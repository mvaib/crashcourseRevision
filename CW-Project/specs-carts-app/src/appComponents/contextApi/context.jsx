import { useState, useContext, useEffect } from "react";
import { createContext } from "react";

const MyContext = createContext();

export const MyProvider = ({children}) => {
    let [cart, setCart] = useState(() => {
        const storedValue = localStorage.getItem("cart");
        return storedValue ? JSON.parse(storedValue) : [];
    })

    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cart)) || []
    },[])
    return (
        <>
            <MyContext.Provider value={{cart,setCart}}>
                {children}
            </MyContext.Provider>
        </>
    )
}

export const useMyContext = () => {
    return useContext(MyContext)
}
