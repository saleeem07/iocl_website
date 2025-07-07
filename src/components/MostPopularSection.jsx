import React from "react";

const popularItems = [
  {
    title: "IndianOil's Green Agenda",
    description: "IndianOil is committed to achieving Net Zero emissions by 2046. Our comprehensive green agenda includes investments in renewable energy, green hydrogen, biofuels, and sustainable practices across all operations. We're leading India's energy transition with innovative solutions and strategic partnerships.",
    icon: "🌱",
    link: "#",
    image: "https://iocl.com/contents/AnnualReportenglish_2022-23/img/intellectual/intellectual23.png"
  },
  {
    title: "HS&E Overview",
    description: "Health, Safety & Environment (HS&E) is at the core of IndianOil's operations. We maintain world-class safety standards, implement rigorous environmental protection measures, and ensure the well-being of our employees, contractors, and communities. Our HS&E framework drives sustainable growth.",
    icon: "🛡️",
    link: "#",
    image: "https://iocl.com/images/logo121012025.jpg"
  },
  {
    title: "Green Fuel Alternatives",
    description: "IndianOil is pioneering green fuel alternatives including biofuels, hydrogen, and electric vehicle infrastructure. We're developing sustainable energy solutions like ethanol-blended fuels, biodiesel, and hydrogen fuel cells to reduce carbon footprint and support India's clean energy goals.",
    icon: "⚡",
    link: "#",
    image: "https://renewable-carbon.eu/news/media/2022/09/pm-modi-inaugurates-2g-ethanol-plant-in-haryana-1-1024x576.jpg"
  }
];

const PopularCard = ({ title, description, icon, link, image }) => {
  return (
    <div 
      className="relative shadow-lg p-6 border border-gray-200 dark:border-orange-400 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Blue background overlay in light mode, dark background in dark mode */}
      <div className="absolute inset-0 bg-[#002060]/100 dark:bg-black/80 transition-all duration-300 group-hover:bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col transition-all duration-300 group-hover:opacity-0">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-bold text-white dark:text-orange-400 group-hover:text-orange-500 dark:group-hover:text-orange-300 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-gray-200 dark:text-gray-300 text-sm leading-relaxed mb-4 text-justify">
          {description}
        </p>
      </div>
      
      {/* Learn More Link - Visible on hover */}
      <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <a 
          href={link}
          className="inline-flex items-center text-white font-semibold text-sm hover:text-orange-300 transition-colors duration-300 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm"
        >
          Learn More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const MostPopularSection = () => {
  return (
    <section className="relative w-full pt-16 pb-20 bg-orange-500 dark:bg-[#18181b] z-20 overflow-hidden">
      <div className="w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002060] dark:text-orange-400 mb-0">
            Most Popular
          </h2>
          <div className="h-0.5 w-[220px] bg-[#002060] dark:bg-orange-400 mx-auto rounded mb-8"></div>
          <p className="text-gray-200 dark:text-gray-300 max-w-2xl mx-auto">
            Discover IndianOil's commitment to sustainability, safety, and innovation in the energy sector
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
          {popularItems.map((item, index) => (
            <PopularCard key={index} {...item} />
          ))}
        </div>
      </div>
      {/* Orange separator line */}
      <div className="w-full h-1 bg-orange-400 absolute bottom-0 left-0 z-20"></div>
    </section>
  );
};

export default MostPopularSection; 