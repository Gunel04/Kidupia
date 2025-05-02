import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://mocki.io/v1/38105daa-1761-49fb-b921-f0493ea6f265")
            .then(res => setProducts(res.data))
    }, [])

    return <ProductContext.Provider value={[products, setProducts]}>{children}</ProductContext.Provider>
}