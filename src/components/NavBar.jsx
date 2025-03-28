import React from 'react'
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="/src/img/logo.png" alt="Logo" height="30" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <CartWidget mobile={true} />

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>

                <CartWidget />
                
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}

export default NavBar