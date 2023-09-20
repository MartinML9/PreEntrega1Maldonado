import { getProductsById } from "../../services/productService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetails from "./ItemDetails"; 

const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProductsById(id).then((product) => {
      setItem(product);
      setIsLoading(false);
    })
  }, [id]);

  return (
    <>
      {isLoading && <p>Cargando productos...</p>}
      <ItemDetails item = {item} />
    </>);
}

export default ItemDetailsContainer
