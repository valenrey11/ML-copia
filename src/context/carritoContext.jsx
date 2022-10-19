import React, { useState } from "react";

const Context = React.createContext([])

export function ProducstIdFromCarrito({ children }) {
    const [productId, setProductId] = useState([])
    return <Context.Provider value={{ productId, setProductId }}>
        {children}
    </Context.Provider>
}

export default Context