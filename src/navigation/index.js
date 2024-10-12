// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Loading from './Loading';
import Main from '../Dashboard';
import Dashboard from '../Dashboard/DasboardPage';
import LoginPage from '../Dashboard/LoginPage';
function MainNavigation(){

    
  return (
    <Router>
       

      <Routes>
        
        <Route path="/" element={<Loading />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/landing_page" element={<Main />} />
         <Route path="/login_page" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default MainNavigation;
