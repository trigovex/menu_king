import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for layout
import './Banner1.css'; // Import the separate CSS for Banner1
import S11 from '../images/S11.png';
import { NavLink } from 'react-router-dom';

function Banner1() {
  return (
    <div className="container-fluid app-banner">
      <div className="row align-items-center">
        <div className="col-md-6 text-section text-md-start text-center">
          <div className="new-tag">
            <span>Scan,</span>Choose & Pay Instantly  &rarr;
          </div>
          <h1 className="banner-title">
            Manage Your Menu With <span className="highlighted-text">Easy</span> Way With <span className="highlighted-text">Scan2Order.</span>
          </h1>
          <p className="banner-description">
          A QR-based dining solution that allows customers to scan menus, order items directly from their table, and track orders seamlessly.
          </p>
          <NavLink to="/login_page">
             <button className="btn btn-success download-btn">
            <i className="fab fa-apple"></i> Get Started Now
          </button>
          </NavLink>
        </div>

        <div className="col-md-6 text-center">
          <img src={S11} alt="Phone mockup" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
