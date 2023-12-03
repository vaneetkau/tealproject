import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={{backgroundColor: "#F3F3F3",}}>
        <Link className="navbar-brand" to="/">
          <img src={LogoImg} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon m-0"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between pb-3" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Centered Links */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faqPage">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tandcPage">
                T&C
              </Link>
            </li>
          </ul>
          <div className="nav-item d-flex justify-content-center align-items-center">
            <Link to="/login" className="btn btn-primary rounded-pill">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
