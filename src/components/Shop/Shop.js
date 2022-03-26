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
            alert("You cannot select more than 4 watch");
        }
    }
    // Choose one for me 
    const chooseOne = () => {
        if (cart.length !== 0) {
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
        <div>
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
            <div className='ans-and-q'>
                <h3>Answer and Question</h3>
                <div>
                    <h4>1. How React Works?</h4>
                    <p><strong>Ans: </strong>This is client side applications. it not a programing language. It is actual runs using js. The most popular JavaScript library run and executes codes using declarative code. When the state of a component changes, React creates another virtual DOM and compares it with the previous virtual DOM, and where needs to update, React just updates there and renders data. It's called diff algorithm. When react knows which object is changed in virtual DOM, only those objects React update in real DOM. React also uses keys so that the changes can quickly be identified. In a React Project components are well organized</p>
                </div>
                <div>
                    <h4>2. The difference between props and state.</h4>
                    <p><strong>Ans: </strong>props and state
                        <ul>
                            <li>Props are used to pass data from one component to another component and State data is passed inside the component only.</li>
                            <li>You can only read Props, but States can be both read and written.</li>
                            <li>Props is passed as an attribute or key from an component to other, and State can be declared using useState hook in functional component</li>
                            <li>props are public and State is private</li>
                            <li>props are immutable but states are mutable.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Shop;