import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="header">

      <Link to="/" className="logo">FemBrace</Link>

      <nav className="nav-links">
        <Link to="/dashboard/calendar">Calendar</Link>
        <Link to="/dashboard/prediction">PCOS Prediction</Link>
        <Link to="/dashboard/schemes">Schemes</Link>
        <Link to="/dashboard/remedies">Remedies</Link>
      </nav>

      <div className="profile-section">
        {isAuthenticated ? (
          <button className="profile-btn" onClick={onLogout}>Profile</button>
        ) : (
          <Link to="/login" className="login-btn"><img src="assets/logo.png" /></Link>
        )}
      </div>
    </header>
  );
};

export default Header;
