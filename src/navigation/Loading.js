import React, { useEffect, useState } from 'react';
import './Loading.css'; // Importing CSS for styling
import { useNavigate } from 'react-router-dom';

function Loading() {
  const [hasToken, setHasToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token is present in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setHasToken(true);
      // Redirect to the dashboard if the token exists
      setTimeout(() => {
        console.log("*")
        navigate('/dashboard', { replace: true });
      }, 5000); // 5 seconds delay
    } else {
      // Redirect to the main page if the token doesn't exist
      setTimeout(() => {
         console.log("*")
        navigate('/landing_page', { replace: true });
      }, 5000); // 5 seconds delay
    }
  }, [navigate]); // Empty array ensures the effect runs only on component mount

  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h2 className="loading-text">MenuKing</h2>
    </div>
  );
}

export default Loading;
