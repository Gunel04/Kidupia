import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
    const [products] = useContext(ProductContext);
    return (
        <div className='container'>
            <div className="row g-4">
                {products.map((item, index) => (
                    <SingleProduct key={index} productInfo={item} />
                ))}
            </div>
        </div>
    )
}

export default Products