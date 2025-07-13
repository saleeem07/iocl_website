import React from "react";

const overseasItems = [
  {
    title: "Lanka IOC PLC",
    description: "Lanka IOC PLC, a subsidiary of IndianOil Corporation, is a leading petroleum company in Sri Lanka. We operate over 200 retail outlets, supply aviation fuel to major airports, and maintain strategic storage facilities. Our commitment to quality, safety, and customer service has made us a trusted energy partner in Sri Lanka's development journey.",
    icon: "🇱🇰",
    link: "#",
    image: "https://iocl.com/admin/img/UploadedFiles/MenuHeading/Files/English/89366af64d054986b661debb7fa537ac.jpg"
  },
  {
    title: "IndianOil Mauritius",
    description: "IndianOil Mauritius Ltd. serves as a key energy partner in the Indian Ocean region, providing high-quality petroleum products and lubricants. We operate modern retail outlets, supply marine fuels, and maintain strategic storage infrastructure. Our operations support Mauritius' economic growth while maintaining the highest standards of safety and environmental protection.",
    icon: "🇲🇺",
    link: "#",
    image: "https://iocl.com/admin/img/UploadedFiles/MenuHeading/Files/English/312275c3de7842d6b75b73ce9c2e5147.jpg"
  },
  {
    title: "IOC Middle East FZE",
    description: "IOC Middle East FZE represents IndianOil's strategic presence in the Middle East region. We facilitate crude oil sourcing, maintain trading relationships, and support India's energy security through strategic partnerships. Our Dubai-based operations enable efficient coordination with regional energy markets and strengthen India's energy diplomacy in the Gulf region.",
    icon: "🇦🇪",
    link: "#",
    image: "https://www.biztoday.news/wp-content/uploads/2020/07/RR-Holdings-Ltd.jpg"
  }
];

const OverseasCard = ({ title, description, icon, link, image }) => {
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
      {/* Orange background overlay in light mode, dark background in dark mode */}
      <div className="absolute inset-0 bg-orange-500/100 dark:bg-black/80 transition-all duration-300 group-hover:bg-black/20"></div>
      
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
          Read More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const IndianOilOverseasSection = () => {
  return (
    <section className="relative w-full pt-16 pb-20 bg-[#002060] dark:bg-[#18181b] z-20 overflow-hidden">
      <div className="w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 dark:text-orange-400 mb-0">
            IndianOil Overseas
          </h2>
          <div className="h-0.5 w-[310px] bg-orange-400 mx-auto rounded mb-8"></div>
          <p className="text-[15px] font-bold text-gray-200 dark:text-gray-300 max-w-2xl mx-auto">
            IndianOil's global presence extends across multiple countries, strengthening international partnerships and energy security
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
          {overseasItems.map((item, index) => (
            <OverseasCard key={index} {...item} />
          ))}
        </div>
      </div>
      {/* Orange separator line */}
      <div className="w-full h-1 bg-orange-400 absolute bottom-0 left-0 z-20"></div>
    </section>
  );
};

export default IndianOilOverseasSection; 