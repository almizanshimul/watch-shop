import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setproduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproduct(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <Product key={products.id} products={products}></Product>
            </div>
            <div className="cart-container">
        <h1>this is a test</h1>
            </div>
        </div>
    );
};

export default Shop;