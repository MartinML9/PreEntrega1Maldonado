import { getProductsById } from "../../services/productService";
import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ItemDetails from "./ItemDetails";
import cartContext from "../../context/CartContext";

const ItemDetailsContainer = () => {

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { addCartItem, removeCartItem, isInCart} = useContext(cartContext);
  const navigate = useNavigate(-1); 

  const goBack = () => {
    navigate(-1); // Navegar a la ruta anterior
  };

  useEffect(() => {
    getProductsById(id).then((product) => {
      setItem(product);
      setIsLoading(false);
    })
  }, [id]);
  

  return <ItemDetails item={item} isLoading={isLoading} isInCart={isInCart(item ? item.id : null)} addItem={addCartItem} removeItem={removeCartItem} goBack={goBack}/>
}

export default ItemDetailsContainer
