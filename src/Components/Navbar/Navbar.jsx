import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`navbar ${open ? "open" : ""}`}>
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
          <a href="#contact" className="cta">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${open ? "show" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
        <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
        <a href="#contact" className="cta" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
