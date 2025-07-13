/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        }
      }
    },
  },
  plugins: [],
}

// Enable smooth scrolling globally
if (typeof document !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

