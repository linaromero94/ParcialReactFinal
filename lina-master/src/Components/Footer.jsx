import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h4 className='text'>Contacto</h4>
            <ul className='list-unstyled'>
              <li>
                <i className='fas fa-phone-alt me-2'></i>0800-1234-5678
              </li>
              <li>
                <i className='far fa-envelope me-2'></i>contacto@dentistas.com
              </li>
            </ul>
          </div>
          <div className='col-12 col-md-6'>
            <h4 className='text-white'>Enlaces</h4>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' className='text-decoration-none text-white'>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to='/contacto' className='text-decoration-none text-white'>
                  Contacto
                </Link>
              </li>
              <li>
                <Link to='/favs' className='text-decoration-none text-white'>
                  Destacados
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
