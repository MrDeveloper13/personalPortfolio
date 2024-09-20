import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import openMenuIcon from "../../assets/menu_open.svg";
import closeMenuIcon from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [visible, setVisible] = useState(false); // Sidebar visibility state

  return (
    <div className="navbar-container">
      {/* Logo */}
      <a href="#hero" className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
      </a>

      {/* Desktop Navigation for Larger Screens */}
      <ul className="nav-menu">
        <li>
          <AnchorLink href="#hero" className="nav-link" offset={100}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#services" className="nav-link" offset={-30}>
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" className="nav-link">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" className="nav-link">
            Contact
          </AnchorLink>
        </li>
      </ul>

      {/* Mobile Menu Icon for Smaller Screens */}
      <div className="mobile-menu-toggle">
        <img
          onClick={() => setVisible(true)} // Show sidebar
          src={openMenuIcon}
          className="menu-icon"
          alt="Open Menu"
        />
      </div>

      {/* Sidebar for Small Screens */}
      <div className={`sidebar ${visible ? "sidebar-visible" : ""}`}>
        <div className="sidebar-content">
          {/* Close Button */}
          <div
            onClick={() => setVisible(false)} // Close sidebar
            className="sidebar-close"
          >
            <img src={closeMenuIcon} className="close-icon" alt="Close Menu" />
          </div>

          {/* Sidebar Links */}
          <AnchorLink
            href="#hero"
            className="sidebar-link"
            offset={100}
            onClick={() => setVisible(false)}
          >
            Home
          </AnchorLink>

          <AnchorLink
            href="#services"
            className="sidebar-link"
            onClick={() => setVisible(false)}
          >
            Services
          </AnchorLink>

          <AnchorLink
            href="#about"
            className="sidebar-link"
            onClick={() => setVisible(false)}
          >
            About
          </AnchorLink>
          <AnchorLink
            href="#contact"
            className="sidebar-link"
            onClick={() => setVisible(false)}
          >
            Contact
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
