import React from "react";
import { Link } from "react-router-dom";

// Footer component with copyright info, navigation links, and social media icons
const Footer = () => (
  <footer className="relative w-full bg-[#002060] dark:bg-[#18181b] text-white pt-12 pb-6 z-60 overflow-hidden">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
      <div className="text-sm text-center md:text-left">
        © {new Date().getFullYear()} Indian Oil Corporation Ltd. All rights reserved.
      </div>
      <nav className="flex gap-4 flex-wrap justify-center">
        <Link to="/about-iocl" className="hover:text-orange-400 transition">About</Link>
        <a href="#businesses" className="hover:text-orange-400 transition">Businesses</a>
        <a href="#news" className="hover:text-orange-400 transition">News</a>
        <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
      </nav>
      <div className="flex gap-4 justify-center">
        <a href="https://twitter.com/IndianOilcl" aria-label="Twitter" className="hover:text-orange-400 transition" target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .386.045.763.127 1.124C7.728 8.89 4.1 6.89 1.671 3.905c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89-.386.104-.793.16-1.213.16-.297 0-.583-.028-.862-.08.584 1.822 2.28 3.15 4.29 3.187A9.868 9.868 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
        </a>
        <a href="https://www.facebook.com/IndianOilCorpLimited" aria-label="Facebook" className="hover:text-orange-400 transition" target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.408.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.408 24 22.674V1.326C24 .592 23.403 0 22.675 0"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/indian-oil-corporation-limited/" aria-label="LinkedIn" className="hover:text-orange-400 transition" target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 