import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="header">

      <Link to="/" className="logo">FemBrace</Link>

      <nav className="nav-links">
        <Link to="/dashboard/calendar">CALENDAR</Link>
        <Link to="/dashboard/prediction">PCOS PREDICTION</Link>
        <Link to="/dashboard/schemes">GOVERNMENT SCHEMES</Link>
        <Link to="/dashboard/remedies">REMEDIES</Link>
      </nav>

      <div className="profile-section">
        {isAuthenticated ? (
          <button className="profile-btn" onClick={onLogout}>Profile</button>
        ) : (
          <Link to="/login" className="login-btn">LOGOUT</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
