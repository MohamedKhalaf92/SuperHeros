import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header-container">
      <p className="giant">The Giants Club</p>
      <div className="navbar-inks">
        <Link className="links" to="#">
          Home
        </Link>
        <Link className="links" to="#">
          Play Trump Cards
        </Link>
        <Link className="links" to="#">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
