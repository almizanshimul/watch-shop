import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const handleAddToCart = (product) => {
        if (cart.length < 4) {
            const newCart = [...cart, product]
            setCart(newCart);
        }
    }
    const clearCart=()=>{
        setCart([]);
    }
    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Select Apple watch</h2>
                {
                    cart.map(item => <Cart key={item.id} cart={item}></Cart>)
                }
                {/* <Cart cart={cart}></Cart> */}
                <button className='clear-cart'>Choose one for me</button>
                <button onClick={clearCart} className='review-order'>Clear</button>
            </div>
        </div>
    );
};

export default Shop;