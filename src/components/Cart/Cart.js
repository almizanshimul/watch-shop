import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, img } = props.cart;
    return (
        <div>
            <div className='cart-product'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <button className='signal-product-clear'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const Item = (props) => {
    // console.log(props);
    const { name, img } = props.item;
    return (
            <div className='cart-product'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <button className='signal-product-clear'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
    );
};

export { Cart, Item};