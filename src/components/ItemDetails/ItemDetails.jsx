import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ItemDetails = ({ item }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navegar a la ruta anterior
  };

  if (!item) {
    return null;
  }

  return (
    <div key={item.id} className="card w-50 ms-3 my-3">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
        <p className="card-text">{item.description}</p>
        <button
          onClick={goBack}
          className="custom-link btn btn-outline-secondary"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  item: propTypes.object,
};

export default ItemDetails;
