import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import MostPopularSection from "./components/MostPopularSection";
import AboutSection from "./components/AboutSection";
import BusinessesSection from "./components/BusinessesSection";
import NewsSection from "./components/NewsSection";
import IndianOilOverseasSection from "./components/IndianOilOverseasSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import FindStation from "./components/FindStation";
import AboutIOCL from "./components/AboutIOCL";
import Refineries from "./components/Refineries";
import Indane from "./components/Indane";
import Careers from "./components/Careers";

// Main homepage component - handles smooth scrolling to sections when navigating from navbar
const Home = () => {
  const location = useLocation();
  
  // This effect handles the smooth scrolling when users click navbar links
  // It tries to find the target section and scrolls to it with navbar offset
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      let attempts = 0;
      const maxAttempts = 10;
      const scrollToSection = () => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          const navbarHeight = 120;
          const elementPosition = section.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
          window.history.replaceState({}, document.title);
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(scrollToSection, 100);
        }
      };
      scrollToSection();
    }
  }, [location.state]);

  return (
    <main className="flex flex-col relative">
      <HeroSection />
      <div className="relative z-15">
        <MostPopularSection />
      </div>
      <div className="relative z-25">
        <BusinessesSection />
      </div>
      <div className="relative z-35">
        <NewsSection />
      </div>
      <div className="relative z-40">
        <IndianOilOverseasSection />
      </div>
      <div className="relative z-45">
        <ContactSection />
      </div>
    </main>
  );
};

// Handles all the routing logic and decides when to show/hide navbar
function AppRoutes({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  // Hide navbar on login/register pages since they have their own headers
  const hideNavbar = ["/login", "/register"].includes(location.pathname);
  return (
    <div className={`bg-[#f5f7fa] min-h-screen flex flex-col dark:bg-[#18181b] dark:text-white`}>
      {!hideNavbar && <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-station" element={<FindStation />} />
        <Route path="/about-iocl" element={<AboutIOCL />} />
        <Route path="/refineries" element={<Refineries />} />
        <Route path="/indane" element={<Indane />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
}

// Main app component - handles dark mode state and persistence
const App = () => {
  // Initialize dark mode from localStorage if available, otherwise default to light
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  // Update DOM classes and localStorage whenever dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <AppRoutes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </Router>
  );
};

export default App;