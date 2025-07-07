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

const Home = () => (
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

function AppRoutes({ darkMode, toggleDarkMode }) {
  const location = useLocation();
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
      </Routes>
      <Footer />
    </div>
  );
}

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

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