import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../assets/Adire-1.jpeg"
import Image2 from "../../assets/Adire-2.jpeg"
import Image3 from "../../assets/Adire-3.jpeg"
import Image4 from "../../assets/Adire-4.jpeg"
import Image5 from "../../assets/Adire-5.jpeg"
import Image6 from "../../assets/Adire-6.jpeg"
import Image7 from "../../assets/Adire-7.jpeg"
import Image8 from "../../assets/Adire-8.jpeg"
import "./Gallery.css";

const images = [
  Image1,
  Image2,
  Image3,
  Image4, Image5, Image6, Image7, Image8
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery-title">Our Collection</h2>
      
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            className="carousel-slide"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <img src={images[current]} alt={`Adire ${current + 1}`} />
          </motion.div>
        </AnimatePresence>

        <button className="carousel-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="carousel-pagination">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? "dot active" : "dot"}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
