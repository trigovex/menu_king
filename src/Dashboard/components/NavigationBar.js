// src/components/NavigationBar.js
import React from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for toggle functionality
import logo from '../images/logo1.png'; // Adjust the path to your logo image

function NavigationBar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="TRIGOVEX Logo" className="navbar-logo" /> {/* Use img tag for logo */}
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our Customers</a>
            </li>
          </ul>
          <button className="btn btn-danger">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
