import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/productService";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setItems([]);

    getProducts(categoryId)
      .then((products) => {
        setItems(products);
      })
      .catch((error) => {
        setErrorMessage(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      {isLoading && <p>Cargando productos...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {items ? <ItemList items={items} /> : <p>{errorMessage}</p>}
    </>
  );
};

export default ItemListContainer;
