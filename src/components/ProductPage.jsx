import React from 'react'
import Products from './Products'
import Payment from './Payment'
import productContext from '../context/productContext'

const ProductPage = (props) => {

    const context = React.useContext(productContext);
    const{products} = context

    return (
        <div className='container mt-4'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((product, index) => {
                        // console.log(product);
                        return <Products product = {product} key={index}/>
                    })}

                </tbody>
            </table>
            <button className='btn btn-success'>Checkout</button>

            <Payment />
        </div>
    )
}

export default ProductPage
