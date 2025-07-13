import React from "react";

const refineries = [
  { name: "Panipat Refinery", cx: 210, cy: 120 },
  { name: "Mathura Refinery", cx: 220, cy: 140 },
  { name: "Gujarat Refinery", cx: 120, cy: 200 },
  { name: "Barauni Refinery", cx: 300, cy: 160 },
  { name: "Haldia Refinery", cx: 370, cy: 220 },
  { name: "Paradip Refinery", cx: 390, cy: 300 },
  { name: "Digboi Refinery", cx: 470, cy: 110 },
  { name: "Bongaigaon Refinery", cx: 440, cy: 140 },
  { name: "Guwahati Refinery", cx: 450, cy: 160 },
  { name: "Chennai Refinery", cx: 250, cy: 350 },
];

const ContactSection = () => (
  <section id="contact" className="relative w-full pt-32 pb-20 bg-orange-500 dark:bg-[#18181b] text-white z-10 overflow-hidden scroll-mt-20">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      {/* Contact Info */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl text-[#002060] dark:text-white font-bold mb-4">Contact Us</h2>
        <div className="flex items-center gap-4">
          <span className="text-2xl">📞</span>
          <span className="font-semibold">Toll FREE Number:</span>
          <a href="tel:18002333555" className="text-[#002060] dark:text-white underline font-semibold">1800-2333-555</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl">📞</span>
          <span className="font-semibold">Commercial LPG Helpline No.:</span>
          <a href="tel:18605991111" className="text-[#002060] dark:text-white underline font-semibold">1860-5991-111</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl">🚨</span>
          <span className="font-semibold">LPG Emergency Helpline:</span>
          <a href="tel:1906" className="text-[#002060] dark:text-white underline font-semibold">1906</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl">✉️</span>
          <span className="font-semibold">Email:</span>
          <a href="mailto:iocl.cocc@indianoil.in" className="text-[#002060] dark:text-white underline font-semibold">iocl.cocc@indianoil.in</a>
        </div>
      </div>
      {/* Contact Form */}
      <form className="bg-white dark:bg-[#23272f] border border-[#002060] dark:border-orange-400 rounded-lg p-8 text-[#002060] dark:text-white shadow-lg space-y-4 relative z-10" aria-label="Contact form">
        <h3 className="font-semibold text-xl mb-2">Send us a message</h3>
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" className="w-full mb-2 p-2 border border-orange-400 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#18181b] dark:border-orange-400 dark:text-white" required />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="w-full mb-2 p-2 border border-orange-400 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#18181b] dark:border-orange-400 dark:text-white" required />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="message">Message</label>
          <textarea id="message" name="message" className="w-full mb-2 p-2 border border-orange-400 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#18181b] dark:border-orange-400 dark:text-white" rows={4} required></textarea>
        </div>
        <button type="submit" className="w-full py-2 rounded bg-orange-500 text-white font-bold hover:bg-orange-600 transition">Send</button>
      </form>
    </div>
    {/* Orange separator line */}
    <div className="w-full h-1 bg-orange-400 absolute bottom-0 left-0 z-20"></div>
  </section>
);

export default ContactSection; 