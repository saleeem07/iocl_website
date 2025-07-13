import React, { useState } from "react";
import RhinoImg from '../assets/rhino.png';

const Indane = () => {
  // Form data state for the LPG booking form
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    consumerNumber: "",
    city: "",
    state: "",
    address: ""
  });

  // Mouse tracking state for the interactive ripple effect
  const [ripple, setRipple] = useState({ x: 0, y: 0, active: false });

  // Handle input changes in the booking form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission - currently just shows an alert
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Booking request submitted!");
  };

  // Mouse tracking for the interactive ripple effect on the booking form
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => setRipple({ ...ripple, active: false });

  // List of Indian states for the dropdown
  const states = [
    "Select State",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white dark:from-[#18181b] dark:to-[#23272f]">
      {/* Section 1: Header Overview */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002060] dark:text-orange-400 mb-6">
              Indane – India's Trusted Cooking Gas
            </h1>
            <div className="h-1 w-32 bg-orange-400 mx-auto rounded mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With a customer base of over 14.8 crore, Indane is one of the largest packed-LPG brands globally. Owned by IndianOil, Indane meets the cooking gas needs of millions with safety, convenience, and reach across the nation. Our commitment to quality, safety, and customer satisfaction has made Indane the preferred choice for households and businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Smart Booking Image */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002060] dark:text-orange-400 mb-4">
              Smart Booking Modes
            </h2>
            <div className="h-1 w-48 bg-orange-400 mx-auto rounded"></div>
          </div>
          <div className="relative">
            <img 
              src="https://iocl.com/images/static/smart_booking_modes.jpg" 
              alt="Indane Smart Booking Modes"
              className="w-full h-auto shadow-lg hover:shadow-xl transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Section 3: 3 Banner Images */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002060] dark:text-orange-400 mb-4">
              Indane Services
            </h2>
            <div className="h-1 w-32 bg-orange-400 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white dark:bg-[#18181b] shadow-lg overflow-hidden border border-gray-200 dark:border-orange-400/30">
            <div className="relative">
              <img 
                src="https://iocl.com/images/static/pmyu-tollfree.jpg" 
                alt="PMYU Toll Free"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">PMYU Toll Free</h3>
                <p className="text-sm">24/7 Customer Support</p>
              </div>
            </div>
            
            <div className="relative border-l border-gray-200 dark:border-orange-400/30">
              <img 
                src="https://iocl.com/images/static/lpg-help-line.jpg" 
                alt="LPG Help Line"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">LPG Help Line</h3>
                <p className="text-sm">Emergency Support</p>
              </div>
            </div>
            
            <div className="relative border-l border-gray-200 dark:border-orange-400/30">
              <img 
                src="https://iocl.com/images/static/banner-3.jpg" 
                alt="Indane Services"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">Indane Services</h3>
                <p className="text-sm">Comprehensive Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: LPG Gas Booking Form */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div 
            className="bg-[#002060] shadow-xl rounded-2xl overflow-hidden border border-orange-400 relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Blur effect */}
            {ripple.active && (
              <span
                className="pointer-events-none absolute z-0 bg-[#f97316]"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  filter: 'blur(32px)',
                  opacity: 0.40,
                  transform: 'translate(-50%, -50%)',
                  transition: 'left 0.08s, top 0.08s',
                }}
              />
            )}
            <div className="flex flex-col md:flex-row relative z-10">
              {/* Left: Rhino Ji */}
              <div className="md:w-1/2 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-8">
                <img
                  src={RhinoImg}
                  alt="Indian Oil Rhino"
                  className="w-72 h-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl"
                />
              </div>

              {/* Right: Booking Form */}
              <div className="md:w-1/2 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Book Your Indane LPG Cylinder
                  </h2>
                  <div className="h-1 w-48 bg-orange-400 mx-auto rounded"></div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-[#002060] transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mobileNumber" className="block text-sm font-semibold text-white mb-2">
                        Registered Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-[#002060] transition-colors duration-200"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="consumerNumber" className="block text-sm font-semibold text-white mb-2">
                        Consumer Number *
                      </label>
                      <input
                        type="text"
                        id="consumerNumber"
                        name="consumerNumber"
                        value={formData.consumerNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-[#002060] transition-colors duration-200"
                        placeholder="Enter consumer number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-white mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-[#002060] transition-colors duration-200"
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-white mb-2">
                      State *
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-[#002060] transition-colors duration-200"
                    >
                      {states.map((state, index) => (
                        <option key={index} value={state} disabled={index === 0}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-white mb-2">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-[#002060] transition-colors duration-200 resize-none"
                      placeholder="Enter your complete address"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-400 text-white font-bold py-4 px-6 rounded-lg hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Additional Info */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-400/10 dark:to-blue-400/10 rounded-2xl p-8 border border-orange-200 dark:border-orange-400/30 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#002060] dark:text-orange-400 mb-4">
                Important Note
              </h3>
              <div className="h-1 w-24 bg-orange-400 mx-auto rounded mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Note: This is a prototype booking form. For official bookings, pleasecall your local distributor or visit the Indane portal (Link provided below) .
              </p>
              <a
                href="https://iocl.com/pages/indane-cooking-gas-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-1 rounded-lg bg-orange-400 text-white font-semibold text-base shadow-lg hover:bg-white hover:text-orange-400 border-2 border-orange-400 transition-all duration-300 hover:scale-105"
              >
                Learn More About Indane
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

export default Indane; 