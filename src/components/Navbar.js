import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Include your CSS

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <div className="logo">
          <h2>HackTrack</h2>
        </div>
        <ul className="navbar-links">
          <li className="dropdown">
            Projects
            <div className="dropdown-content">
              <Link to="/ongoing">Ongoing</Link>
              <Link to="/completed">Completed</Link>
            </div>
          </li>
          <li className="dropdown">
            Hackathons
            <div className="dropdown-content">
              <Link to="/upcoming">Upcoming</Link>
              <Link to="/ongoing">Ongoing</Link>
              <Link to="/past">Past</Link>
            </div>
          </li>
          <li className="dropdown">
            Coding
            <div className="dropdown-content">
              <Link to="/challenges">Challenges</Link>
              <Link to="/tutorials">Tutorials</Link>
            </div>
          </li>
          <li className="dropdown">
            Resources
            <div className="dropdown-content">
              <Link to="/guides">Guides</Link>
              <Link to="/tools">Tools</Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." className="search-bar" />
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
