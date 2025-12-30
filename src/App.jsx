import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Gallery from "./Components/Gallery/Gallery"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Testimonial from "./Components/Testimonial/Testimonial"
import Loader from "./Components/Loader/Loader"
import { useState, useEffect } from "react"

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
   if (loading) return <Loader />;
  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Gallery />
     <Testimonial />
     <Contact />
     <Footer />
    </>
  )
}

export default App
