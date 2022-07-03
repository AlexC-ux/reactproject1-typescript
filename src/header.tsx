import React from 'react';

function ReactComponent() {
  return (
      <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
          <div className='container-fluid'>
              <a className="navbar-brand" href="/">Актив МКТ</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end text-white bg-dark" tabIndex={-1} id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
                  <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">Навигация</h5>
                      <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                          <li className="nav-item">
                              <a className="nav-link" aria-current="page" href="/">Главная</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/login">Личный кабинет</a>
                          </li>
                      </ul></div>
              </div>
          </div>
      </nav>
  );
}

export default ReactComponent;