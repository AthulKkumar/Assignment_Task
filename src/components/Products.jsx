import React, { useState} from 'react'
import productContext from '../context/productContext'


// const Total = createContext()

const Products = ({product}) => {

    const context = React.useContext(productContext);
    const{totalPrice} = context


    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(product.price);
    const [total, setTotal] = useState(0);


    const handleClick = (e) => {
    //     // console.log(e.target.innerText);
        if(e.target.innerText === '+'){
            setQuantity(quantity+1);
            setPrice(price+product.price);
            totalPrice(total+price);
            
        }else{
            setQuantity(quantity-1);
            setPrice(price-product.price);
            totalPrice(total-price);
        }
    }
    // console.log(total);
    return (
    //    <Total.Provider value={total}> 
        <tr>
                <th scope="row">1</th>
                <td>{product.name}</td>
                <td><button onClick={handleClick} className='btn btn-primary'>+</button> {quantity} <button onClick={handleClick} disabled={quantity<=0} className='btn btn-primary'>-</button></td>
                <td >{price}</td>
            </tr>
        // {/* </Total.Provider> */}
    )
}

export default Products
// export {Total};
