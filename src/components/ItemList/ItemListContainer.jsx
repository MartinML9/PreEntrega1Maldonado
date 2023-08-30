import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/services";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
      getProducts(categoryId).then((products) => {
        setItems(products);
      });
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
