import { useEffect, useState } from "react";
import "./App.css";
import "./Animations.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        setTimeout(() => {
          preloader.classList.add("fadeOut");
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }, 500);
      }
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}

export default App;
