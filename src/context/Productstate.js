import React, { useState } from "react";
import ProductContext from "./productContext";

const Productstate = (props) => {

    const [totalAmount, setTotalAmount] = useState(0);

    let products = [
        {
            id: 1,
            name: 'Product 1',
            price: 20
        },
        {
            id: 2,
            name: 'Product 2',
            price: 40
        },
        {
            id: 3,
            name: 'Product 3',
            price: 50
        }
    ]

    const totalPrice = (amount) => {
        setTotalAmount(totalAmount + amount);
        // console.log(totalAmount);
    }



    return (
        <ProductContext.Provider value={{ products, totalPrice, totalAmount }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Productstate;