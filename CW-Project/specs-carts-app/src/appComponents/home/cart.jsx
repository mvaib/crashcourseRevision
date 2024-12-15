import React, { useEffect } from 'react';
import { useMyContext } from "../contextApi/context";

function Cart() {
    const { cart, setCart } = useMyContext();

    const handleRemoveFromCart = (itemToRemove) => {
        const updatedCart = cart.filter(item => item.imageUrl !== itemToRemove.imageUrl);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
    };

    useEffect(() => {
        // Initialize the cart from local storage when the component mounts
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, [setCart]);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.title}</h3>
                                <p>{item.formattedPrice}</p>
                                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h3>Total Items: {cart.length}</h3>
                        <h3>Total Price: {cart.reduce((total, item) => total + parseFloat(item.formattedPrice.replace('$', '')), 0).toFixed(2)}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
