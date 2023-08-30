import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

const ItemList = ({items}) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="card w-50 ms-3 my-3">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <NavLink to={`/item/${item.id}`} className="custom-link btn btn-outline-secondary">Detalles</NavLink>
              </div>
          </li>
          // <li key={item.id}>
          //   <Link to={`/item/${item.id}`}>
          //     <h3></h3>
          //     <p>${item.price}</p>
          //     <p>{item.category}</p>
          //   </Link>
          // </li>
        ))}
      </ul>
    </div>
  )
}

ItemList.propTypes = {
  items: propTypes.array.isRequired
}

export default ItemList