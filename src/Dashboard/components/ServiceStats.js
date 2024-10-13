import React from 'react';
import './ServiceStats.css'; // Custom CSS for extra styling
import Lottie from 'lottie-react';
import animation from '../images/animation.json'; // Your Lottie animation
import webImage from '../images/web.png';
import gameImage from '../images/game.png';
import iotImage from '../images/iot.jpg';
import reviewImage from '../images/review.jpg';
import awardsImage from '../images/awards.jpg';
import employeesImage from '../images/employees.jpg';

const statsData = [
  { icon: webImage, value: '3+', label: 'Years of Experience' },
  { icon: gameImage, value: '4500+', label: 'Restaurants' },
  { icon: iotImage, value: '220K+', label: 'Orders Placed' },
  { icon: reviewImage, value: '4.9', label: 'Rating' },
  { icon: awardsImage, value: '110M', label: 'App Downloads' },
  { icon: employeesImage, value: '24/7', label: 'Customer Support' },
];

function ServiceStats(){
  return (
    <div className="container my-5">
      {/* Heading */}
      <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingBottom: '5px', color:'#ae87e1' }}>
            Why To Use Our Menu App
            </h1>

      <div className="row align-items-center">
        {/* Left-side Lottie Animation */}
        <div className="col-md-6 d-flex justify-content-center mb-4">
          <Lottie animationData={animation} loop={true} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        {/* Right-side stats */}
        <div className="col-md-6">
          <div className="row text-center">
            {statsData.map((stat, index) => (
              <div key={index} className="col-6 mb-4">
                <div className="stat-box">
                  <img src={stat.icon} alt={stat.label} className="stat-icon" />
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStats;
