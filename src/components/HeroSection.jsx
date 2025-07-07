import React from "react";
import Logo from "../assets/iocl-logo.png";
import bgVideo from "../assets/lp-video.mp4";

const HeroSection = () => {
  const scrollToBusinesses = () => {
    const businessesSection = document.getElementById('businesses');
    if (businessesSection) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = businessesSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-end min-h-screen w-full overflow-hidden z-10 pb-4">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002060]/60 via-[#003366]/40 to-[#ff6f3c]/30 dark:from-[#18181b]/70 dark:via-[#23272f]/50 dark:to-[#18181b]/40 z-10" />
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center min-h-screen justify-end pb-16">
        <div className="flex flex-col items-center w-full">
          {/* Company Name & Tagline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-3 tracking-tight animate-fade-in-up">
            Indian Oil
          </h1>
          {/* Headline */}
          <h2 className="text-base md:text-2xl font-bold text-orange-400 mb-4 drop-shadow animate-fade-in-up animation-delay-200">
            Empowering India's Energy Future
          </h2>
          {/* Subheadline */}
          <p className="text-base md:text-xl text-white/90 font-medium mb-6 max-w-2xl animate-fade-in-up animation-delay-400">
            Delivering world-class energy solutions, innovation, and sustainability to millions every day. Join us on our journey to fuel progress and empower communities across the nation.
          </p>
          {/* CTA Buttons */}
          <div className="flex gap-4 mb-8 flex-wrap justify-center animate-fade-in-up animation-delay-600">
            <button 
              onClick={scrollToBusinesses}
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-bold text-lg shadow-md hover:bg-white hover:text-orange-500 transition cursor-pointer"
            >
              Explore Our Services
            </button>
            <a href="#find-station" className="px-8 py-3 rounded-full bg-white text-orange-500 font-bold text-lg shadow-md hover:bg-orange-500 hover:text-white transition">
              Find Nearest Fuel Station
            </a>
          </div>
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 mt-2 justify-center animate-fade-in-up animation-delay-800">
            <div className="text-white/90 text-sm">
              <span className="font-bold text-orange-400 text-lg">1B+</span> Customers Served
            </div>
            <div className="text-white/90 text-sm">
              <span className="font-bold text-orange-400 text-lg">#1</span> Refiner in India
            </div>
            <div className="text-white/90 text-sm">
              <span className="font-bold text-orange-400 text-lg">ISO</span> Certified
            </div>
            <div className="text-white/90 text-sm">
              <span className="font-bold text-orange-400 text-lg">50,000+</span> Employees
            </div>
            <div className="text-white/90 text-sm">
              <span className="font-bold text-orange-400 text-lg">20+</span> Refineries Nationwide
            </div>
          </div>
        </div>
      </div>
      {/* Orange separator line */}
      <div className="w-full h-1 bg-orange-400 absolute bottom-0 z-30"></div>
    </section>
  );
};

export default HeroSection;
