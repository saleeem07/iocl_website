import React from "react";

const features = [
  { icon: "🌏", title: "Nationwide Presence", desc: "Serving millions across India with an extensive network." },
  { icon: "⚡", title: "Innovation Driven", desc: "Pioneering energy solutions and sustainable practices." },
  { icon: "🤝", title: "Trusted Partner", desc: "Empowering communities and industries for decades." },
  { icon: "🌱", title: "Sustainability", desc: "Committed to a greener, cleaner future." },
];

const AboutSection = () => (
  <section id="about" className="relative w-full py-16 bg-white dark:bg-[#23272f] text-[#002060] dark:text-white z-20 overflow-hidden scroll-mt-20">
    <div className="container mx-auto px-4 flex flex-col items-center gap-8 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About IndianOil</h2>
      <p className="mb-8 text-lg md:text-xl text-center max-w-2xl">
        IndianOil is India's largest commercial enterprise, energizing the nation with world-class petroleum products, innovative solutions, and a commitment to sustainability. With a vast network and a legacy of trust, we fuel progress and empower communities across the country.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center bg-[#f5f7fa] dark:bg-[#18181b] rounded-lg p-6 shadow hover:shadow-lg transition">
            <span className="text-3xl mb-3">{f.icon}</span>
            <h3 className="font-semibold text-lg mb-1 text-[#002060] dark:text-orange-400">{f.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection; 