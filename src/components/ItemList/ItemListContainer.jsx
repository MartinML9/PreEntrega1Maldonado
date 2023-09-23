import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/productService";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { categoryId } = useParams();

  useEffect(() => {

    getProducts(categoryId)
      .then((products) => {
        setItems(products);
        setIsLoading(false);
      })
      .catch((error)=>{
        setErrorMessage(error);
      })
  }, [categoryId]);

  return <ItemList items={items} isLoading={isLoading} errorMessage={errorMessage}/>

};

export default ItemListContainer;
