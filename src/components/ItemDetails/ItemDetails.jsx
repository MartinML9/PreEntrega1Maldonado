import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ItemDetails = ({ item, isLoading, addItem, removeItem, isInCart }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Navegar a la ruta anterior
  };

  if (isLoading) {
    return (
      <div className="card w-50 ms-3 mt-5">
        <div className="card-body">
          <h5 className="card-title">Cargando producto...</h5>
        </div>
      </div>
    )
  }

  if (!item) {
    return <h2>Producto no encontrado</h2>
  }

  return (
    <div key={item.id} className="card w-50 ms-3 mt-5">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
        <p className="card-text">{item.description}</p>
        <div className="d-flex justify-content-between">
          <div>
            <button
              onClick={() => addItem(item, 1)}
              className="btn btn-outline-secondary me-2"
            >
              Agregar al carrito
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="btn btn-outline-secondary"
              disabled={!isInCart}
            >
              Quitar del carrito
            </button>
          </div>
          <button
            onClick={goBack}
            className="btn btn-outline-secondary"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
  addItem: propTypes.func,
  removeItem: propTypes.func,
  isInCart: propTypes.bool
};

export default ItemDetails;
