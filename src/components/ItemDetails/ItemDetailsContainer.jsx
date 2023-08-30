import { getProductsById } from "../../services/services";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetails from "./ItemDetails"; 

const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductsById(id).then((product) => {
      setItem(product);
    })
  }, [id]);

  return <ItemDetails item = {item} />
}

export default ItemDetailsContainer
