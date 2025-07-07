import React, { useState } from "react";
import refineriesImg from "../assets/Our Business/refineries.png";
import pipelinesImg from "../assets/Our Business/pipelines.png";
import rndImg from "../assets/Our Business/R&D.png";
import marketingImg from "../assets/Our Business/Marketing.png";
import petrochemicalsImg from "../assets/Our Business/PC.png";
import naturalGasImg from "../assets/Our Business/Naturalgas.png";
import epImg from "../assets/Our Business/E&P.png";
import explosivesImg from "../assets/Our Business/Explosives.png";
import cryogenicImg from "../assets/Our Business/Cryogenics.png";
import businessDefaultImg from "../assets/Our Business/business-default.png";

const businesses = [
  { title: "Refineries", desc: "Operating India's largest network of refineries, producing fuels and petrochemicals for the nation.", img: refineriesImg },
  { title: "Pipelines", desc: "Managing a vast pipeline infrastructure for safe and efficient transport of crude oil and petroleum products.", img: pipelinesImg },
  { title: "R&D", desc: "Driving innovation with cutting-edge research in fuels, lubricants, and alternative energy.", img: rndImg },
  { title: "Marketing", desc: "Delivering petroleum products to every corner of India through an extensive retail network.", img: marketingImg },
  { title: "Petrochemicals", desc: "Supplying a wide range of petrochemical products for diverse industries.", img: petrochemicalsImg },
  { title: "Natural Gas", desc: "Expanding natural gas infrastructure and providing clean energy solutions.", img: naturalGasImg },
  { title: "E&P", desc: "Exploration & Production: Upstream activities for oil and gas resources.", img: epImg },
  { title: "Explosives", desc: "Manufacturing and supplying industrial explosives for various sectors.", img: explosivesImg },
  { title: "Cryogenics", desc: "Expertise in cryogenic technology for storage and transport of gases.", img: cryogenicImg },
];

const BusinessCard = ({ title, onHover, onLeave, isActive }) => {
  return (
    <div
      className={`relative bg-[#002060] dark:bg-[#23272f] border border-white border-opacity-60 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 ease-in-out focus:outline-none group overflow-hidden ${isActive ? 'border border-orange-400 shadow-[0_0_0_1px_#f97316,0_0_8px_1px_#f97316] z-10' : 'border'} `}
      style={{ minHeight: 130, minWidth: 130, height: 140, width: '100%', padding: '1rem 0.75rem' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      tabIndex={0}
    >
      {/* Orange overlay on hover */}
      <div className={`absolute inset-0 z-10 pointer-events-none transition-all duration-300 ease-in-out ${isActive ? 'bg-orange-400/20' : 'bg-transparent'}`}></div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="w-10 h-10 mb-2 bg-orange-100 rounded-full flex items-center justify-center text-2xl font-bold text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
          {title[0]}
        </div>
        <h3 className={`font-semibold text-lg md:text-xl leading-tight transition-all duration-300 ${isActive ? 'text-[#f97316]' : 'text-white'}`}>{title}</h3>
      </div>
    </div>
  );
};

const BusinessesSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(-1);
  const [prevHoveredIdx, setPrevHoveredIdx] = useState(-1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleHover = (idx) => {
    if (idx !== hoveredIdx) {
      setPrevHoveredIdx(hoveredIdx);
      setHoveredIdx(idx);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  const handleLeave = () => {
    setPrevHoveredIdx(hoveredIdx);
    setHoveredIdx(-1);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <section id="businesses" className="relative w-full pt-16 pb-20 bg-[#002060] dark:bg-[#18181b] text-white z-30 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-0 text-center w-full inline-block">
        <span className="text-[#f97316]">Our</span> <span className="text-[#f97316]">Business</span>
      </h2>
      <div className="h-0.5 w-[220px] bg-[#f97316] mx-auto rounded mb-8" />
      <div className="shadow-2xl border-t-4 border-b-4 border-orange-400 flex flex-col md:flex-row overflow-hidden w-full relative z-10">
        {/* Left: Cards grid, slightly bigger, width ~45% */}
        <div className="w-full md:w-[45%] p-4 grid grid-cols-2 md:grid-cols-3 gap-0 place-items-stretch">
          {businesses.map((biz, idx) => (
            <BusinessCard
              key={biz.title}
              {...biz}
              isActive={hoveredIdx === idx}
              onHover={() => handleHover(idx)}
              onLeave={handleLeave}
            />
          ))}
        </div>
        {/* Right: Image display, width ~55% */}
        <div
          className="hidden md:flex w-[55%] items-center justify-center p-6 relative overflow-hidden"
          style={{
            background: `url(${hoveredIdx === -1 ? businessDefaultImg : businesses[hoveredIdx]?.img || businessDefaultImg}) center center / cover no-repeat`,
            transition: 'background-image 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Previous image layer for dissolve effect */}
          {isTransitioning && prevHoveredIdx !== -1 && (
            <div
              className="absolute inset-0"
              style={{
                background: `url(${businesses[prevHoveredIdx]?.img || businessDefaultImg}) center center / cover no-repeat`,
                opacity: 0,
                animation: 'dissolveOut 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards'
              }}
            />
          )}
          {/* Dim black overlay, more dim in dark mode */}
          <div className="absolute inset-0 bg-black opacity-25 dark:opacity-40 pointer-events-none" />
          {/* No foreground image */}
        </div>
      </div>
      {/* Orange separator line */}
      <div className="w-full h-1 bg-orange-400 absolute bottom-0 left-0 z-20"></div>
    </section>
  );
};

export default BusinessesSection; 