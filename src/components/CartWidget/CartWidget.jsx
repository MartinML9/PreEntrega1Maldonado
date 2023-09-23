import cartIcon from "./assets/cart.svg"
import { useContext } from "react"
import cartContext from "../../context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {getCartQuantity} = useContext(cartContext);
    const quantity = getCartQuantity();
    return (
        <Link to="/cart" className="d-flex align-items-center fs-4 nav-link" >
            <img style={{ height: "1.7rem", paddingRight: "5px" }} src={cartIcon} alt="cart-widget" />
            {!!quantity && quantity}
        </Link>
    )
}

export default CartWidget
