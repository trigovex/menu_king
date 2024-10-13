import React from 'react';
import './Footer.css'; // Include the Footer.css for the styles

function Footer() {
  return (
    <footer className="footer bg-dark-custom text-white py-4">
      <div className="container-fluid">
        <div className="row">
          {/* Company Location Section */}
          <div className="col-md-3 col-sm-12 mb-4">
            <h5>Scan2Order</h5>
            <p>
              Location: Church Road, Above Royal Sweets, Panja Center,<br />
              Narsapuram, Andhra Pradesh 534275
            </p>
          </div>

          {/* Services Section */}
          <div className="col-md-3 col-sm-12 mb-4">
            <h5>Steps</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Scan</li>
              <li className="mb-2">Browse Order</li>
              <li className="mb-2">Place Order</li>
              <li className="mb-2">Complete Order</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 col-sm-12 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Home</li>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Our Customers</li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-3 col-sm-12 mb-4">
            <h5>Contact Info</h5>
            <p>
              Mail Us: contact@trigovex.com<br />
              Contact: 7995534388, 7799001866
            </p>
            <div>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://facebook.com" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 bg-light" />

        <div className="text-center">
          <p className="mb-0">
            Copyright © 2024 All Rights Reserved by Trigovex Technologies Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
