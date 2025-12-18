/* Hero.jsx */
import { motion } from "framer-motion";
import "./Hero.css";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const imageVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Text */}
        <motion.div
          className="hero-text"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="badge">Handcrafted • Authentic • Adire</span>
          <h1>
            Wear Culture.<br />
            Wear <span>Adire</span>.
          </h1>
          <p>
            Premium handmade Adire pieces crafted with tradition,
            creativity, and modern style. Every pattern tells a story.
          </p>

          <div className="hero-actions">
            <a href="#collection" className="hero-btn primary">View Collection</a>
            <a href="#contact" className="hero-btn secondary">Contact Us</a>
          </div>
        </motion.div>

        {/* Product Showcase */}
        <motion.div
          className="hero-images"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="img-card"></div>
          <div className="img-card"></div>
          <div className="img-card"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
