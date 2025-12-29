import React from "react";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* About */}
          <div className="footer-about">
            <h2>Dytex Wears</h2>
            <p>
              Bringing authentic Adire fashion to life. Handcrafted, vibrant, and
              inspired by tradition with a modern twist.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>+234 803 644 1504</p>
            <p>info@dytexwears.com</p>

            <div className="social-icons">
              <a
                href="https://wa.me/2348036441504"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dytex Wears. All Rights Reserved.</p>
        </div>
      </footer>

      {/* 👇 Credit Section */}
      <div className="footer-credit">
        Designed & Built by <span>MegTech</span>
      </div>
    </>
  );
};

export default Footer;
