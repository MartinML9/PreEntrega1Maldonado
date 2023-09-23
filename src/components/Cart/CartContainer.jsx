import { useContext } from "react";
import cartContext from "../../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
    const { cart, getCartTotal, removeCartItem } = useContext(cartContext);

    return (
        <div>
            <Cart items={cart} total={getCartTotal()} removeItem={removeCartItem}>Cart</Cart>
        </div>
    );

};

export default CartContainer;
