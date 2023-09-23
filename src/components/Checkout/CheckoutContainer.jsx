import { useContext, useState } from "react"
import cartContext from "../../context/CartContext"
import { createOrder } from "../../services/ordersService";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
    const { cart, clearCart, getCartTotal } = useContext(cartContext);
    const [validate, setValidate] = useState(false);
    const [formState, setFormState] = useState({
        Nombre: '',
        Email: '',
        Teléfono: '',
    });

    const total = getCartTotal();
    const navigate = useNavigate();

    const mapCartToOrderItems = (cart) => {
        return cart.map((item) => ({
            id: item.id,
            price: item.price,
            quantity: item.quantity,
            name: item.name,
        }));
    };

    const handleCheckout = () => {
        const items = mapCartToOrderItems(cart);

        createOrder(formState, items, total)
            .then((mesagge) => {
                alert(mesagge);
                clearCart();
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        setValidate(false);
    };

    const onChange = (event) => {
        
        setFormState((prevState) => {
            const newState = {
                ...prevState,
                [event.target.name]: event.target.value,
            }

            let isItValid = Object.values(newState).reduce((resultado, valor) => {
                return resultado && valor !== "";
            }, true); 
            isItValid = (isItValid) && (total.toFixed(2) !== 0);

            setValidate(isItValid);
            return newState;
        });
    };
    

    return <Checkout formState={formState} onSubmit={handleCheckout} onChange={onChange} valid={validate}/>
    
};

export default CheckoutContainer;
