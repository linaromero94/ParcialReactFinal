import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Nav } from "./styles/Navbar";

const Navbar = () => {
  const { dispatch, favorites, state } = useContext(AppContext);
  const { theme } = state;
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  console.log(state);
  return (
    <Nav>
      <nav className={`navbar navbar-expand-lg navbar-${theme}`}>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            DentistApp
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contacto'>
                  Contacto
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/favs'>
                  Destacados ({state.favorites.length})
                </Link>
              </li>
              <li className='nav-item'>
                <button className='btn btn-link nav-link' onClick={toggleTheme}>
                  {theme === "light" ? "Dark" : "Light"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Nav>
  );
};

export default Navbar;
