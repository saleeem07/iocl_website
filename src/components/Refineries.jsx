import React from "react";

const Refineries = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white dark:from-[#18181b] dark:to-[#23272f]">
      {/* Section 1: Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002060] dark:text-orange-400 mb-6">
              Refining
            </h1>
            <div className="h-1 w-32 bg-orange-400 mx-auto rounded mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Born from the vision of achieving self-reliance in oil refining and marketing for the nation, IndianOil has gathered a luminous legacy of over six decades of trust and excellence. Today, IndianOil operates 11 refineries with a combined refining capacity of 80.75 MMTPA (Million Metric Tonnes Per Annum), including the subsidiary Chennai Petroleum Corporation Ltd. (CPCL). Our refineries are strategically located across the country and are equipped with state-of-the-art technology to produce a wide range of petroleum products meeting international quality standards. We are committed to sustainable refining practices, energy efficiency, and environmental protection while ensuring energy security for the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Image */}
      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <img 
              src="https://iocl.com/uploads/IndianOilgr20012022.jpg" 
              alt="Map of IOCL Refineries"
              className="w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-2xl border-4 border-orange-400/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Table */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002060] dark:text-orange-400 mb-4">
              IndianOil Refining – Installed Capacity
            </h2>
            <div className="h-1 w-48 bg-orange-400 mx-auto rounded"></div>
          </div>
          
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-xl rounded-2xl border border-gray-200 dark:border-orange-400/30">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-orange-400/30">
                  <thead className="bg-[#002060] dark:bg-[#23272f]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm md:text-base font-bold text-white dark:text-orange-400 uppercase tracking-wider">
                        Refinery
                      </th>
                      <th className="px-6 py-4 text-right text-sm md:text-base font-bold text-white dark:text-orange-400 uppercase tracking-wider">
                        MMTPA
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#18181b] divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        Digboi Refinery
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        0.65
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        Guwahati Refinery
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        1.20
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        Barauni Refinery
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        6.00
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        Gujarat Refinery
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        13.70
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        Haldia Refinery
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        8.00
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        Bongaigaon Refinery
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        2.70
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        Mathura Refinery
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        8.00
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        Panipat Refinery & Petrochemical
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        15.00
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        Paradip Refinery
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        15.00
                      </td>
                    </tr>
                    <tr className="bg-orange-100 dark:bg-orange-400/20 border-t-2 border-orange-400">
                      <td className="px-6 py-4 text-sm md:text-base text-[#002060] dark:text-orange-400 font-bold">
                        Total
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-[#002060] dark:text-orange-400 text-right font-bold">
                        70.25
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        CPCL, Chennai
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        10.50
                      </td>
                    </tr>
                    <tr className="bg-blue-100 dark:bg-blue-400/20 border-t-2 border-blue-400">
                      <td className="px-6 py-4 text-sm md:text-base text-[#002060] dark:text-blue-400 font-bold">
                        Group Total (Including CPCL)
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-[#002060] dark:text-blue-400 text-right font-bold">
                        80.75
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 dark:hover:bg-orange-400/10 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 font-medium">
                        National Refining Capacity
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-gray-900 dark:text-gray-300 text-right font-semibold">
                        258.1
                      </td>
                    </tr>
                    <tr className="bg-green-100 dark:bg-green-400/20 border-t-2 border-green-400">
                      <td className="px-6 py-4 text-sm md:text-base text-[#002060] dark:text-green-400 font-bold">
                        IOCL Share (%)
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base text-[#002060] dark:text-green-400 text-right font-bold">
                        31.29%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Safety & Sustainability Note */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-400/10 dark:to-blue-400/10 rounded-2xl p-8 border border-orange-200 dark:border-orange-400/30 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#002060] dark:text-orange-400 mb-6">
                Safety & Sustainability
              </h3>
              <div className="h-1 w-24 bg-orange-400 mx-auto rounded mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                All IndianOil refineries comply with statutory environmental norms and adopt advanced safety measures like AI-enabled CCTV, smart helmets, SURAKSHA RATH mobile units, and more to ensure workplace safety.
              </p>
              <a
                href="https://iocl.com/pages/Refining-Overview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-1 rounded-lg bg-orange-400 text-white font-semibold text-base shadow-lg hover:bg-white hover:text-orange-400 border-2 border-orange-400 transition-all duration-300 hover:scale-105"
              >
                Learn More About Refining
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

export default Refineries; 