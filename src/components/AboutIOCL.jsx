import React from "react";
import AboutImg from "../assets/about.png";
import rankImg from "../assets/about-images/rank.png";
import revenueImg from "../assets/about-images/revenue.png";
import profitImg from "../assets/about-images/profit.png";
import refiningImg from "../assets/about-images/refining.png";
import pipeliningImg from "../assets/about-images/pipelining.png";
import outletsImg from "../assets/about-images/outlets.jpg";
import employeesImg from "../assets/about-images/employees.png";
import netZeroImg from "../assets/about-images/net-zero.png";

const stats = [
  { label: "Fortune Global 500 Rank", value: "#94 (2024)", icon: rankImg, alt: "Global Rank" },
  { label: "Revenue (FY24)", value: "₹8.66 lakh crore", icon: revenueImg, alt: "Revenue" },
  { label: "Net Profit (FY24)", value: "₹39,619 crore", icon: profitImg, alt: "Net Profit" },
  { label: "Refining Capacity", value: "80.8 MMTPA", icon: refiningImg, alt: "Refining Capacity" },
  { label: "Pipeline Network", value: "~19,700 km", icon: pipeliningImg, alt: "Pipeline Network" },
  { label: "Retail Outlets", value: "~37,472", icon: outletsImg, alt: "Retail Outlets" },
  { label: "Employees (2024)", value: "30,321", icon: employeesImg, alt: "Employees" },
  { label: "Net-Zero Target", value: "2046", icon: netZeroImg, alt: "Net Zero Target" },
];

const AboutIOCL = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white dark:from-[#18181b] dark:to-[#23272f]">
      {/* Section 1: Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002060] dark:text-orange-400 mb-6">
              About IOCL
            </h1>
            <div className="h-1 w-32 bg-orange-400 mx-auto rounded mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Indian Oil Corporation Limited (IOCL) is India's largest commercial enterprise and the country's flagship national oil company, playing a pivotal role in meeting India's energy needs. As of 2024, IOCL ranks #94 on the Fortune Global 500, with revenue of ₹8.66 lakh crore ($106.9 billion) and net profit of ₹39,619 crore in FY24. IOCL operates 11 refineries with a combined refining capacity of 80.8 million metric tonnes per annum (MMTPA), and manages a pipeline network of approximately 19,700 km, the largest in India. With around 37,472 retail outlets and 30,321 employees, IOCL is committed to energy access, innovation, and sustainability, targeting net-zero emissions by 2046.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Image */}
      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
        <img
          src={AboutImg}
          alt="About Indian Oil"
              className="w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-2xl border-4 border-orange-400/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
        />
      </div>
        </div>
      </section>

      {/* Section 3: Key Statistics */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002060] dark:text-orange-400 mb-4">
              Key Statistics
            </h2>
            <div className="h-1 w-48 bg-orange-400 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
            <div
              key={stat.label}
                className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-orange-400/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              style={{
                backgroundImage: `url(${stat.icon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Blue background overlay */}
                <div className="absolute inset-0 bg-[#002060]/80 dark:bg-black/80 transition-all duration-300 group-hover:bg-black/20"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center p-6 h-32 transition-all duration-300 group-hover:opacity-0">
                  <span className="font-bold text-white text-lg md:text-xl drop-shadow-lg text-center mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-orange-100 text-center drop-shadow">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Key Highlights */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#18181b] rounded-2xl shadow-xl border border-gray-200 dark:border-orange-400/30 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002060] dark:text-orange-400 mb-4">
                Key Highlights
              </h2>
              <div className="h-1 w-32 bg-orange-400 mx-auto rounded"></div>
            </div>
            
            <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Ranked <strong>#94</strong> in the Fortune Global 500 (2024).</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Revenue of <strong>₹8.66 lakh crore</strong> ($106.9 billion) and net profit of <strong>₹39,619 crore</strong> in FY24.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Refining capacity of <strong>80.8 MMTPA</strong> across 11 refineries.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Pipeline network of approximately <strong>19,700 km</strong>, the largest in India.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>About <strong>37,472 retail outlets</strong> and <strong>30,321 employees</strong> (2024).</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Net-zero emissions target by <strong>2046</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Company Overview */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#18181b] rounded-2xl shadow-xl border border-gray-200 dark:border-orange-400/30 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002060] dark:text-orange-400 mb-4">
                Company Overview
              </h2>
              <div className="h-1 w-32 bg-orange-400 mx-auto rounded"></div>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              IOCL operates 11 refineries with a combined refining capacity of 80.8 million metric tonnes per annum (MMTPA), and manages a pipeline network of approximately 19,700 km, the largest in India. With around 37,472 retail outlets and 30,321 employees, IOCL is committed to energy access, innovation, and sustainability, targeting net-zero emissions by 2046.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold text-[#002060] dark:text-orange-400 mb-4">Vision & Mission</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">Vision:</span>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">To be the Energy of India and a globally admired company.</p>
          </div>
          <div>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">Mission:</span>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">To provide reliable energy solutions, foster sustainable development, and create value for stakeholders through operational excellence and innovation.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#002060] dark:text-orange-400 mb-4">Core Values</h3>
                <ul className="space-y-2">
                  {['Care', 'Innovation', 'Passion', 'Trust', 'Nation-First'].map((value, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                      {value}
                    </li>
                  ))}
            </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Sustainability & Innovation */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-400/10 dark:to-blue-400/10 rounded-2xl p-8 border border-orange-200 dark:border-orange-400/30 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#002060] dark:text-orange-400 mb-6">
                Sustainability & Innovation
              </h3>
              <div className="h-1 w-48 bg-orange-400 mx-auto rounded mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          IOCL is committed to sustainability, investing in renewable energy, green hydrogen, and advanced biofuels. The company aims for net-zero emissions by 2046 and is a leader in environmental stewardship and social responsibility.
        </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#18181b] rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-bold text-[#002060] dark:text-orange-400 mb-3">Environmental Initiatives</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Renewable energy investments
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Green hydrogen development
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Advanced biofuels research
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Carbon footprint reduction
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-[#18181b] rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-bold text-[#002060] dark:text-orange-400 mb-3">Innovation Focus</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Digital transformation
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Smart technologies
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    R&D investments
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Operational excellence
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Global Presence */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-400/10 dark:to-orange-400/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-400/30 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#002060] dark:text-orange-400 mb-6">
                Global Presence
              </h3>
              <div className="h-1 w-48 bg-orange-400 mx-auto rounded mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              IOCL has a growing international footprint, with subsidiaries and joint ventures in countries such as Sri Lanka, Mauritius, the UAE, and the USA. The company continues to expand its global presence through strategic partnerships and investments.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['Sri Lanka', 'Mauritius', 'UAE', 'USA'].map((country, index) => (
                <div key={index} className="bg-white dark:bg-[#18181b] rounded-xl p-4 text-center shadow-md">
                  <h4 className="font-bold text-[#002060] dark:text-orange-400">{country}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Operations</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
          <a
            href="https://iocl.com/about-indianoil"
            target="_blank"
            rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-1 rounded-lg bg-orange-400 text-white font-semibold text-base shadow-lg hover:bg-white hover:text-orange-400 border-2 border-orange-400 transition-all duration-300 hover:scale-105"
          >
            Learn More at iocl.com
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
    </main>
);
};

export default AboutIOCL; 