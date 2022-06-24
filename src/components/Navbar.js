import './Navbar.css'

import logo from '../imgs/logo.png'
function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
        <img src={logo} class="d-inline-block align-top" alt="Logo da educativa consultoria"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#courses">
                Cursos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacts">
                Contato
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
