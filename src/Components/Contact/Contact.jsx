import React from "react";
import "./Contact.css";
import { FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or want to collaborate? Reach out to us and we’ll
            get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <div>
              <FiPhone className="icon" />
              <span>+234 801 234 5678</span>
            </div>
            <div>
              <FiMail className="icon" />
              <span>info@dytexwears.com</span>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
