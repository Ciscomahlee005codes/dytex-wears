// Navbar.jsx
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <span>Dytex Wears</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
           <a href="#testimonials">Testimonials</a>
          <a href="#contact" className="cta">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <span className={open ? "line open" : "line"}></span>
          <span className={open ? "line open" : "line"}></span>
          <span className={open ? "line open" : "line"}></span>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="mobile-nav">
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#gallery" onClick={() => setOpen(false)}>
            Gallery
          </a>
          <a href="#process" onClick={() => setOpen(false)}>
            Process
          </a>
          <a href="#contact" className="cta" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
