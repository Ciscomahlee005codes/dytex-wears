import { motion } from "framer-motion";
import "./Hero.css";

import img1 from "../../assets/Adire-f4.jpeg";
import img2 from "../../assets/Adire-7.jpeg";
import img3 from "../../assets/Adire-2.jpeg";

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
          <span className="badge">Handcrafted • Authentic • Adire •</span>
          <h1>
            Wear Culture.<br /> Wear <span>Adire</span>.
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

        {/* Images */}
        <motion.div
          className="hero-images"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="img-card">
            <img src={img1} alt="Adire fabric design 1" />
          </div>

          <div className="img-card">
            <img src={img2} alt="Adire fabric design 2" />
          </div>

          <div className="img-card img-wide">
            <img src={img3} alt="Adire fabric design 3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
