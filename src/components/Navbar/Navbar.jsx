import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/iocl-logo.png"

const GOOGLE_MAPS_API_KEY = 'AIza...'; // your real key

const Navbar = ({ darkMode, toggleDarkMode }) => { 
  const scrollToBusinesses = () => {
    const businessesSection = document.getElementById('businesses');
    if (businessesSection) {
      const navbarHeight = 120; // Increased navbar height offset
      const elementPosition = businessesSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 120; // Increased navbar height offset
      const elementPosition = contactSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToNews = () => {
    const newsSection = document.getElementById('news');
    if (newsSection) {
      const navbarHeight = 120; // Increased navbar height offset
      const elementPosition = newsSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const navbarHeight = 120; // Increased navbar height offset
      const elementPosition = aboutSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-0 right-0 w-full z-[9999] bg-gradient-to-r from-[#002060]/40 via-[#003366]/40 to-[#004080]/40 shadow-lg border-b-4 border-orange-400 backdrop-blur-sm dark:bg-[#18181b] dark:from-[#18181b] dark:via-[#23272f] dark:to-[#18181b] dark:border-orange-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-2 sm:py-3 gap-y-2">
          {/* Logo and Slogan */}
          <div className="flex items-center gap-3 min-w-0">
            <a href="/" aria-label="Home" className="flex items-center gap-3 min-w-0 focus:outline-none group">
              <img src={Logo} alt="Indian Oil Logo" className="w-12 h-12 rounded-full border-2 border-orange-400 shadow-md bg-white p-1 flex-shrink-0 cursor-pointer group-hover:scale-105 transition-transform duration-200" />
              <span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-wide drop-shadow-md leading-snug truncate cursor-pointer group-hover:text-orange-400 transition-colors duration-200 dark:text-white">
                INDIAN OIL<br />
                <span className="text-orange-400 text-xs sm:text-sm md:text-base font-bold align-top leading-snug">The Energy of India</span>
              </span>
            </a>
        </div>
          {/* Nav Links */}
          <nav className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
            <ul className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4 lg:gap-6 text-sm md:text-base font-semibold">
                <li>
                <Link to="/about-iocl" className="text-white hover:text-orange-400 transition-colors duration-200 border-b-2 border-transparent hover:border-orange-400 pb-1 dark:text-white text-xs md:text-sm">About IOCL</Link>
                </li>
                 <li>
                <button 
                  onClick={scrollToBusinesses}
                  className="text-white hover:text-orange-400 transition-colors duration-200 border-b-2 border-transparent hover:border-orange-400 pb-1 dark:text-white text-xs md:text-sm bg-transparent cursor-pointer"
                >
                  Our Businesses
                </button>
                </li>
                 <li>
                <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200 border-b-2 border-transparent hover:border-orange-400 pb-1 dark:text-white text-xs md:text-sm">Refineries</a>
                </li>
                 <li>
                <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200 border-b-2 border-transparent hover:border-orange-400 pb-1 dark:text-white text-xs md:text-sm">Indane Gas</a>
                </li>
                 <li>
                <button 
                  onClick={scrollToNews}
                  className="text-white hover:text-orange-400 transition-colors duration-200 border-b-2 border-transparent hover:border-orange-400 pb-1 dark:text-white text-xs md:text-sm bg-transparent cursor-pointer"
                >
                  News & Media
                </button>
                </li>
                 <li>
                <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200 border-b-2 border-transparent hover:border-orange-400 pb-1 dark:text-white text-xs md:text-sm">Careers</a>
                </li>
                 <li>
                <button 
                  onClick={scrollToContact}
                  className="text-white hover:text-orange-400 transition-colors duration-200 border-b-2 border-transparent hover:border-orange-400 pb-1 dark:text-white text-xs md:text-sm bg-transparent cursor-pointer"
                >
                  Contact
                </button>
                </li>
            </ul>
          </nav>
          {/* Login Button and Dark Mode Toggle */}
          <div className="flex items-center gap-2 justify-end w-full md:w-auto mt-2 md:mt-0">
            {/* Slide Switch for Dark Mode */}
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="relative inline-flex items-center h-6 px-0.5 w-10 rounded-full transition-colors duration-300 focus:outline-none border border-orange-400 bg-white dark:bg-[#23272f]"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full shadow-md transition-transform duration-300 flex items-center justify-center ${darkMode ? 'translate-x-4 bg-orange-400' : 'translate-x-0 bg-[#002060]'}`}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-yellow-400">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.414-1.414M6.343 6.343L4.929 4.929m12.02 0l-1.414 1.414M6.343 17.657l-1.414 1.414" />
                  </svg>
                )}
              </span>
              <span className="sr-only">Toggle dark mode</span>
            </button>
            <a
              href="/login"
              className="inline-flex items-center justify-center px-5 py-1 rounded-md bg-orange-400 text-white dark:text-black font-bold text-xs shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:text-orange-400 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 active:bg-transparent active:text-orange-400 active:border active:border-orange-400"
            >
              Log in
            </a>
        </div>
        </div>
     </div>
    </div>
  );
};

export default Navbar