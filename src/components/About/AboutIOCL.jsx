import React from "react";
import AboutImg from "../assets/about.png";

const stats = [
  { label: "Fortune Global 500 Rank", value: "#94 (2024)", icon: "🌍" },
  { label: "Revenue (FY24)", value: "₹8.66 lakh crore ($106.9B)", icon: "💰" },
  { label: "Net Profit (FY24)", value: "₹39,619 crore", icon: "📈" },
  { label: "Refining Capacity", value: "80.8 MMTPA", icon: "🛢️" },
  { label: "Pipeline Network", value: "~19,700 km", icon: "🛤️" },
  { label: "Retail Outlets", value: "~37,472", icon: "⛽" },
  { label: "Employees (2024)", value: "30,321", icon: "👷" },
  { label: "Net-Zero Target", value: "2046", icon: "🌱" },
];

const AboutIOCL = () => (
  <section className="min-h-screen w-full bg-gradient-to-br from-[#002060]/80 via-[#003366]/60 to-[#ff6f3c]/30 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#18181b] flex flex-col items-center pt-24 pb-12 px-4">
    <div className="max-w-3xl w-full flex flex-col items-center mx-auto">
      <div className="w-full flex justify-center mb-6">
        <img
          src={AboutImg}
          alt="About Indian Oil"
          className="w-full rounded-2xl shadow-xl object-cover border-4 border-orange-100"
          style={{ aspectRatio: '16/7', background: '#f5f7fa', maxWidth: '100%' }}
        />
      </div>
      <div className="bg-white/90 dark:bg-[#23272f]/90 rounded-2xl shadow-2xl p-8 border-2 border-orange-400 w-full">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#002060] dark:text-orange-400 mb-2 text-center tracking-tight drop-shadow">About Indian Oil Corporation Limited (IOCL)</h1>
        <div className="flex flex-wrap justify-center gap-4 my-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center bg-[#002060]/70 rounded-xl px-4 py-3 shadow min-w-[120px]">
              <span className="text-xl mb-1 text-orange-400">{stat.icon}</span>
              <span className="font-bold text-white text-sm">{stat.value}</span>
              <span className="text-xs text-orange-100">{stat.label}</span>
            </div>
          ))}
        </div>
        <hr className="my-6 border-orange-200 dark:border-orange-900" />
        <p className="text-[#002060] dark:text-white/90 mb-4 text-base leading-relaxed">
          Indian Oil Corporation Limited (IOCL) is India's largest commercial enterprise and the country's flagship national oil company, playing a pivotal role in meeting India's energy needs. As of 2024, IOCL ranks #94 on the Fortune Global 500, with revenue of ₹8.66 lakh crore ($106.9 billion) and net profit of ₹39,619 crore in FY24. IOCL operates 11 refineries with a combined refining capacity of 80.8 million metric tonnes per annum (MMTPA), and manages a pipeline network of approximately 19,700 km, the largest in India. With around 37,472 retail outlets and 30,321 employees, IOCL is committed to energy access, innovation, and sustainability, targeting net-zero emissions by 2046.
        </p>
        <h2 className="text-lg font-bold text-orange-400 mb-2 mt-8">Key Highlights</h2>
        <ul className="list-disc pl-6 text-[#002060] dark:text-white/80 mb-4 space-y-2 text-sm">
          <li>Ranked #94 in the Fortune Global 500 (2024).</li>
          <li>Revenue of ₹8.66 lakh crore ($106.9 billion) and net profit of ₹39,619 crore in FY24.</li>
          <li>Refining capacity of 80.8 MMTPA across 11 refineries.</li>
          <li>Pipeline network of approximately 19,700 km, the largest in India.</li>
          <li>About 37,472 retail outlets and 30,321 employees (2024).</li>
          <li>Net-zero emissions target by 2046.</li>
        </ul>
        <hr className="my-6 border-orange-200 dark:border-orange-900" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-base font-bold text-orange-400 mb-2 mt-4">Vision & Mission</h2>
            <p className="mb-2 text-[#002060] dark:text-white/80 text-sm">
              <span className="font-semibold">Vision:</span> To be the Energy of India and a globally admired company.
            </p>
            <p className="mb-2 text-[#002060] dark:text-white/80 text-sm">
              <span className="font-semibold">Mission:</span> To provide reliable energy solutions, foster sustainable development, and create value for stakeholders through operational excellence and innovation.
            </p>
          </div>
          <div>
            <h2 className="text-base font-bold text-orange-400 mb-2 mt-4">Core Values</h2>
            <ul className="list-disc pl-6 text-[#002060] dark:text-white/80 mb-2 space-y-1 text-sm">
              <li>Care</li>
              <li>Innovation</li>
              <li>Passion</li>
              <li>Trust</li>
              <li>Nation-First</li>
            </ul>
          </div>
        </div>
        <h2 className="text-base font-bold text-orange-400 mb-2 mt-8">Sustainability & Innovation</h2>
        <p className="mb-4 text-[#002060] dark:text-white/80 text-sm">
          IOCL is committed to sustainability, investing in renewable energy, green hydrogen, and advanced biofuels. The company aims for net-zero emissions by 2046 and is a leader in environmental stewardship and social responsibility.
        </p>
        <h2 className="text-base font-bold text-orange-400 mb-2 mt-6">Global Presence</h2>
        <p className="mb-4 text-[#002060] dark:text-white/80 text-sm">
          IOCL has a growing international footprint, with subsidiaries and joint ventures in countries such as Sri Lanka, Mauritius, the UAE, and the USA.
        </p>
        <div className="mt-8">
          <a
            href="https://iocl.com/about-indianoil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-md bg-orange-500 text-white font-semibold text-sm shadow hover:bg-white hover:text-orange-500 border-2 border-orange-400 transition"
          >
            Learn More at iocl.com
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutIOCL; 