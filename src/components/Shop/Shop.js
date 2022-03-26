import React, { useEffect, useState } from 'react';
import { Cart, Item } from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [oneProduct, setOneProduct] = useState([]);
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
        else {
            alert("You cannot select more than 4 laptops");
        }
    }
    // Choose one for me 
    const chooseOne = () => {
        if (cart.length != 0) {
            const randomNumber = Math.random() * cart.length
            const rounded = Math.floor(randomNumber)
            setOneProduct(cart[rounded]);
        }
        else {
            alert('Your cart is empty')
        }
    }
    // Clear Cart 
    const clearCart = () => {
        setCart([]);
        setOneProduct([]);
    }

    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected watch: {cart.length}</h2>
                {
                    cart.map(item => <Cart key={item.id} cart={item}></Cart>)
                }
                <button onClick={chooseOne} className='clear-cart'>Choose one for me</button>
                <Item item={oneProduct}></Item>
                <button onClick={clearCart} className='review-order'>Clear</button>
            </div>
        </div>
    );
};

export default Shop;