import { motion } from "framer-motion";
import "./About.css";

import imgMain from "../../assets/Adire-f5.jpeg";
import imgOverlay from "../../assets/Adire-f3.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Images */}
        <motion.div
          className="about-images"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="about-img main">
            <img src={imgMain} alt="Adire handcrafted fabric" />
          </div>

          <div className="about-img overlay">
            <img src={imgOverlay} alt="Adire traditional pattern" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="about-badge">Our Story</span>

          <h2>
            Rooted in Tradition.<br />
            Crafted for <span>Today</span>.
          </h2>

          <p>
            We create authentic Adire pieces using time-honored dyeing
            techniques passed down through generations. Every fabric is
            handmade, carefully patterned, and infused with culture.
          </p>

          <p className="muted">
            Our designs blend Yoruba heritage with modern silhouettes,
            allowing you to wear culture boldly and confidently.
          </p>

          <div className="about-stats">
            <div>
              <h3>100%</h3>
              <span>Handmade</span>
            </div>
            <div>
              <h3>Tradition</h3>
              <span>Inspired</span>
            </div>
            <div>
              <h3>Modern</h3>
              <span>Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
