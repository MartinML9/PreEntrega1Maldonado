import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand m-0 px-3" style={{boxSizing: "content-box"}}>
          Viena Cafe
        </NavLink>
        <ul className="navbar-nav nav-tabs me-auto mb-lg-0 d-flex flex">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/cafe" className="nav-link px-2">
              Cafe
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/tazas" className="nav-link px-2">
              Tazas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/dulces" className="nav-link px-2">
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
