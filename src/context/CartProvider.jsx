import { useState } from "react";
import CartContext from "./CartContext";
import propTypes from 'prop-types';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCartItem = (product, quantity) => {

        if (isInCart(product.id)) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    };
                }

                return item;
            });
            setCart(newCart);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const removeCartItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        const itemInCart = cart.find((item) => item.id === id);
        return !!itemInCart;
    };

    const getCartQuantity = () => { 
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getCartTotal = () => { 
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    return (
        <CartContext.Provider value={{cart, addCartItem, removeCartItem, clearCart, isInCart, getCartQuantity, getCartTotal}}>
            {children}
        </CartContext.Provider >
    );
}

CartProvider.propTypes = {
    children: propTypes.node
}

export default CartProvider;