import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Viena Cafe
        </NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/cafe" className="nav-link">
              Cafe
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/tazas" className="nav-link">
              Tazas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/dulces" className="nav-link">
              Dulces
            </NavLink>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
