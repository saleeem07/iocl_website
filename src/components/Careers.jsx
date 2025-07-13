import React from "react";

// Careers page showcasing job opportunities and company culture at Indian Oil
const Careers = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white dark:from-[#18181b] dark:to-[#23272f]">
      {/* Section 1: Header Overview */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002060] dark:text-orange-400 mb-6">
              Careers at Indian Oil
            </h1>
            <div className="h-1 w-32 bg-orange-400 mx-auto rounded mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join India's largest commercial enterprise and be part of a legacy that powers the nation's growth. At Indian Oil, we offer exciting career opportunities across diverse domains, fostering innovation, excellence, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Banner Image */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <img 
              src="https://iocl.com/images/static/iocl19062023.jpg" 
              alt="Indian Oil Careers"
              className="w-full h-auto shadow-lg hover:shadow-xl transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Content */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002060] dark:text-orange-400 mb-4">
              Why Choose Indian Oil?
            </h2>
            <div className="h-1 w-48 bg-orange-400 mx-auto rounded"></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Indian Oil Corporation Limited (IOCL) is India's largest commercial enterprise, with a turnover of over ₹7.5 lakh crore and a workforce of more than 33,000 employees. As a Maharatna company, we are committed to excellence, innovation, and sustainable development.
            </p>

            <h3 className="text-xl font-bold text-[#002060] dark:text-orange-400 mb-4 mt-8">
              Our Core Values
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li><strong>Excellence:</strong> Striving for the highest standards in everything we do</li>
              <li><strong>Innovation:</strong> Embracing new technologies and creative solutions</li>
              <li><strong>Integrity:</strong> Maintaining the highest ethical standards</li>
              <li><strong>Safety:</strong> Prioritizing the well-being of our people and communities</li>
              <li><strong>Sustainability:</strong> Committed to environmental responsibility</li>
            </ul>

            <h3 className="text-xl font-bold text-[#002060] dark:text-orange-400 mb-4 mt-8">
              Career Opportunities
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Indian Oil offers diverse career opportunities across various domains including:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li><strong>Engineering:</strong> Chemical, Mechanical, Electrical, Civil, and Instrumentation</li>
              <li><strong>Technology:</strong> Information Technology, Digital Transformation, and Automation</li>
              <li><strong>Business:</strong> Marketing, Finance, Human Resources, and Legal</li>
              <li><strong>Operations:</strong> Refinery Operations, Pipeline Management, and Retail</li>
              <li><strong>Research:</strong> R&D, Innovation, and Technology Development</li>
            </ul>

            <h3 className="text-xl font-bold text-[#002060] dark:text-orange-400 mb-4 mt-8">
              Employee Benefits
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              At Indian Oil, we believe in taking care of our employees and their families. Our comprehensive benefits package includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>Competitive salary and performance-based incentives</li>
              <li>Comprehensive health insurance and medical facilities</li>
              <li>Retirement benefits and pension schemes</li>
              <li>Professional development and training programs</li>
              <li>Work-life balance initiatives</li>
              <li>Employee welfare programs and recreational facilities</li>
            </ul>

            <h3 className="text-xl font-bold text-[#002060] dark:text-orange-400 mb-4 mt-8">
              Growth and Development
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Indian Oil provides excellent opportunities for career growth and professional development. We offer:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>Structured career progression paths</li>
              <li>Continuous learning and skill development programs</li>
              <li>Leadership development initiatives</li>
              <li>Cross-functional exposure and job rotations</li>
              <li>Mentoring and coaching programs</li>
              <li>International assignments and global exposure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Second Banner Image */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <img 
              src="https://iocl.com/images/static/iocl1906202311.jpg" 
              alt="Indian Oil Careers Opportunities"
              className="w-full h-auto shadow-lg hover:shadow-xl transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Additional Content */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002060] dark:text-orange-400 mb-4">
              Our Commitment to Diversity and Inclusion
            </h2>
            <div className="h-1 w-48 bg-orange-400 mx-auto rounded"></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Indian Oil is committed to fostering a diverse and inclusive workplace where every employee feels valued, respected, and empowered to reach their full potential. We believe that diversity drives innovation and creates a stronger, more dynamic organization.
            </p>

            <h3 className="text-xl font-bold text-[#002060] dark:text-orange-400 mb-4 mt-8">
              Equal Opportunity Employer
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We are an equal opportunity employer and do not discriminate on the basis of race, color, religion, gender, national origin, age, disability, or any other characteristic protected by law. We actively encourage applications from women, persons with disabilities, and candidates from diverse backgrounds.
            </p>

            <h3 className="text-xl font-bold text-[#002060] dark:text-orange-400 mb-4 mt-8">
              Innovation and Technology
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Indian Oil is at the forefront of technological innovation in the energy sector. Our employees work with cutting-edge technologies and have the opportunity to contribute to groundbreaking projects that shape the future of energy in India.
            </p>

            <h3 className="text-xl font-bold text-[#002060] dark:text-orange-400 mb-4 mt-8">
              Sustainability and Social Responsibility
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              As a responsible corporate citizen, Indian Oil is committed to sustainable development and social responsibility. Our employees have the opportunity to work on projects that make a positive impact on society and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-400/10 dark:to-blue-400/10 rounded-2xl p-8 border border-orange-200 dark:border-orange-400/30 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#002060] dark:text-orange-400 mb-4">
                Ready to Join Indian Oil?
              </h3>
              <div className="h-1 w-24 bg-orange-400 mx-auto rounded mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Explore exciting career opportunities and be part of India's energy future. Join our team of professionals who are committed to excellence, innovation, and sustainable development.
              </p>
              <a
                href="https://iocl.com/latest-job-opening"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-1 rounded-lg bg-orange-400 text-white font-semibold text-base shadow-lg hover:bg-white hover:text-orange-400 border-2 border-orange-400 transition-all duration-300 hover:scale-105"
              >
                Click here for Latest Job Opening
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

export default Careers; 