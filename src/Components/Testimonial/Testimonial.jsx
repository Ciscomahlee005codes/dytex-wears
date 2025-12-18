import React, { useState, useEffect, useRef } from "react";
import './Testimonial.css';
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

const Testimonial = ({ isStandalone }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);
  const totalSlides = 5;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timerRef.current);
  }, [currentSlide]);

  const testimonials = [
    {
      name: "Okwuibe Chinedu",
      text: "I love the authentic Adire pieces! The colors and patterns are stunning.",
      stars: 5,
      image: "./src/assets/Adire-1.jpeg"
    },
    {
      name: "Emmanuel John",
      text: "Every piece feels unique and handcrafted. Truly wearable art!",
      stars: 5,
      image: "./src/assets/Adire-4.jpeg"
    },
    {
      name: "Sarah Umeh",
      text: "Perfect blend of tradition and modern style. I get compliments every time!",
      stars: 4.5,
      image: "./src/assets/Adire-6.jpeg"
    },
    {
      name: "Obafemi Bolawatife",
      text: "High quality, detailed patterns, and really well-made fabrics.",
      stars: 4.5,
      image: "./src/assets/Adire-2.jpeg"
    },
    {
      name: "Ifemelu Obinze",
      text: "I finally found Adire pieces that feel luxurious yet traditional.",
      stars: 5,
      image: "./src/assets/Adire-8.jpeg"
    },
  ];

  return (
    <section className={`testimonial-section ${isStandalone ? "standalone" : ""}`} id="testimonials">
      <div className="testimonial-wrap">
        <h1 className="over-head">What Our Customers Say</h1>

        <span className="arrow left" onClick={prevSlide}><FaChevronLeft /></span>
        <span className="arrow right" onClick={nextSlide}><FaChevronRight /></span>

        <ul className="dots">
          {testimonials.map((_, index) => (
            <li
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></li>
          ))}
        </ul>

        <div className="content-test">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={
                currentSlide === index
                  ? "active"
                  : index === (currentSlide - 1 + totalSlides) % totalSlides
                  ? "inactive"
                  : ""
              }
            >
              <div className="test-img">
                <img src={testimonial.image} alt={testimonial.name} className="customer-pics" />
              </div>
              <h2 className="customer-name">{testimonial.name}</h2>
              <p className="test-text">
                <FaQuoteLeft style={{ marginRight: 5 }} />
                {testimonial.text}
                <FaQuoteRight style={{ marginLeft: 5 }} />
              </p>
              <div className="star-box">
                {Array.from({ length: 5 }).map((_, i) => {
                  const rating = testimonial.stars;
                  return (
                    <span key={i}>
                      {rating >= i + 1 ? (
                        <FaStar />
                      ) : rating >= i + 0.5 ? (
                        <FaStarHalfAlt />
                      ) : (
                        <FaRegStar />
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
