import cart from "./assets/cart.svg"

const CartWidget = () => {
    return (
        <div className="d-flex">
            <img style={{ height: "1.5rem", paddingRight: "5px" }} src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget