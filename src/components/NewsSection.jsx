import React, { useState } from "react";

const news = [
  { 
    title: "IndianOil launches XP100 premium petrol in new cities", 
    date: "2025-06-10", 
    desc: "XP100, India's premium petrol, now available in more cities for enhanced engine performance and better fuel efficiency.", 
    link: "#",
    image: "https://i.ytimg.com/vi/ll_fJ5W35HY/maxresdefault.jpg"
  },
  { 
    title: "IndianOil signs MoU for green hydrogen collaboration", 
    date: "2025-06-08", 
    desc: "IndianOil partners with global leaders to advance green hydrogen initiatives in India, marking a significant step towards sustainable energy.", 
    link: "#",
    image: "https://affairscloud.com/assets/uploads/2020/11/IISc-IOCL-sign-MoU-for-hydrogen-generation-technology.jpg.webp"
  },
  { 
    title: "IndianOil inaugurates new LPG bottling plant", 
    date: "2025-06-05", 
    desc: "A new state-of-the-art LPG bottling plant inaugurated to boost supply and safety standards across the region.", 
    link: "#",
    image: "https://i0.wp.com/asianmail.in/wp-content/uploads/2022/10/1.jpg?w=1080&ssl=1"
  },
  { 
    title: "IndianOil achieves milestone in renewable energy capacity", 
    date: "2025-06-03", 
    desc: "Company reaches 500MW renewable energy capacity, marking significant progress in green energy transition and sustainability goals.", 
    link: "#",
    image: "https://biofuels-news.com/wp-content/uploads/2023/07/IndiaOil-and-Praj-pic-Biofuel-7-7.png"
  },
  { 
    title: "IndianOil introduces new digital payment solutions", 
    date: "2025-06-01", 
    desc: "Enhanced digital payment options launched across all retail outlets for better customer convenience and seamless transactions.", 
    link: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQglyjDqNhCnObwKprOj-McMvt19sYRSSa1A&s"
  },
  { 
    title: "IndianOil wins National Safety Award 2025", 
    date: "2025-05-28", 
    desc: "Recognized for outstanding safety performance and commitment to workplace safety standards across all operations.", 
    link: "#",
    image: "https://iocl.com/images/AandRnew/PA191820241.jpg"
  }
];

const NewsCard = ({ title, date, desc, link, image }) => {
  return (
    <div 
      className="relative shadow-lg p-6 border border-gray-200 dark:border-orange-400 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group w-full max-w-sm flex-shrink-0 overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Card Blue background in light mode, dark background in dark mode */}
      <div className="absolute inset-0 bg-[#002060]/80 dark:bg-black/80 transition-all duration-300 group-hover:bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-start gap-4 transition-all duration-300 group-hover:opacity-0">
        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
          📰
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-orange-500 font-semibold">{date}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
            {desc}
          </p>
        </div>
      </div>
      
      {/* Read More Link - Visible on hover */}
      <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <a 
          href={link}
          className="inline-flex items-center text-white font-semibold text-sm hover:text-orange-300 transition-colors duration-300 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm"
        >
          Read More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex >= news.length - 2 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? news.length - 2 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="news" className="relative w-full pt-12 pb-16 bg-orange-500 dark:bg-[#18181b] text-[#002060] dark:text-white z-40 overflow-hidden scroll-mt-20">
      <div className="w-full px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002060] dark:text-orange-400 mb-0">
            News & Media
          </h2>
          <div className="h-0.5 w-[240px] bg-[#002060] dark:bg-orange-400 mx-auto rounded mb-8"></div>
          <p className="text-[15px] font-bold text-gray-200 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news, innovations, and developments from IndianOil
          </p>
        </div>
        
        {/* Mobile Grid Layout */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-6">
            {news.slice(0, 3).map((item, index) => (
              <NewsCard 
                key={index} 
                {...item} 
              />
            ))}
          </div>
        </div>

        {/* Desktop Slider Layout */}
        <div className="hidden md:block relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-30 bg-white dark:bg-[#23272f] text-orange-500 dark:text-orange-400 p-2 rounded-full shadow-lg hover:bg-orange-100 dark:hover:bg-[#18181b] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous news"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-30 bg-white dark:bg-[#23272f] text-orange-500 dark:text-orange-400 p-2 rounded-full shadow-lg hover:bg-orange-100 dark:hover:bg-[#18181b] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next news"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden relative">
            <div 
              className="flex gap-3 transition-transform duration-500 ease-in-out"
              style={{ 
                width: `${(news.length + 1) * 320}px`,
                transform: `translateX(-${currentIndex * (320 + 12)}px)`
              }}
            >
              {news.map((item, index) => (
                <NewsCard 
                  key={index} 
                  {...item} 
                />
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border border-blue-500 ${
                  index === currentIndex 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Orange separator line */}
      <div className="w-full h-1 bg-orange-400 absolute bottom-0 left-0 z-20"></div>
    </section>
  );
};

export default NewsSection; 