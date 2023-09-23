import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const Cart = ({ items, total, removeItem }) => {
    if (items.length === 0) {
        return (
            <div className="card w-50 ms-3 my-3 p-0">
                <div className="card-body">
                    <h5 className="card-title mb-3">No hay articulos en el carrito</h5>
                    <Link to="/" className="btn btn-outline-secondary">Ver la tienda</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <ul className="card w-50 ms-3 my-3 p-0">
                {items.map((item) => (
                    <li key={item.id} className="card mx-3 my-1">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">${item.price}</p>
                            <p className="card-text">cantidad: {item.quantity}</p>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="btn btn-outline-secondary"
                            >
                                Quitar producto
                            </button>
                        </div>
                    </li>
                ))}
                <li className="card mx-3 my-3">
                    <div className="card-body">
                        <h5 className="card-title">Total de la compra ${total.toFixed(2)}</h5>
                    </div>
                </li>
                <Link to="/checkout" className="btn btn-outline-secondary">Finalizar Compra</Link>
            </ul>
        </div>
    )
};

Cart.propTypes = {
    items: propTypes.array.isRequired,
    total: propTypes.number,
    removeItem: propTypes.func
}

export default Cart;