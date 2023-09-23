import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

const ItemList = ({items, isLoading, errorMessage}) => {
  
  if (isLoading) {
    return (
      <div className="card w-50 ms-3 my-3">
        <div className="card-body">
          <h5 className="card-title">Cargando productos...</h5>
        </div>
      </div>
    )
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>
  }

  return (
    <div>
      <ul className="p-0">
        {items.map((item) => (
          <li key={item.id} className="card w-50 ms-3 my-3">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <NavLink to={`/item/${item.id}`} className="btn btn-outline-secondary">Detalles</NavLink>
              </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
  errorMessage: propTypes.string
}

export default ItemList