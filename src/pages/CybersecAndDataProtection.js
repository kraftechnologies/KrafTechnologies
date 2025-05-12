import React from 'react';

const CybersecAndDataProtection = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-1">
          Advanced Cybersecurity
          <br />
          <span className="text-[#18CB96]">for the Modern Enterprise</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          End-to-end SaaS security from posture management to threat protection,
          <br />
          all in one powerful platform.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium">
            Get a Demo
          </button>
          <button className="px-8 py-3.5 border-2 border-gray-700 rounded-lg hover:bg-gray-900 transition-all font-medium">
            Read Security Report
          </button>
        </div>
        
        {/* Small links under buttons */}
        <div className="flex justify-center mt-10 gap-8 text-xs text-gray-500">
          <span>• Identity Protection</span>
          <span>• Threat Detection</span>
          <span>• Real-time Monitoring</span>
          <span>• Compliance</span>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            SaaS Identities Are <span className="text-[#18CB96]">The New Frontline</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Individuals, teams, and businesses rely on SaaS every day.
            But, as adoption grows, so does risk.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Challenge 1 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-3xl">81%</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Of Organizations Have Sensitive Data Exposed</h3>
              <p className="text-gray-400 text-center text-sm">
                Unsecured apps are a prime target for threat actors seeking to gain unauthorized access.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-3xl">300%</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Rise in Monthly SaaS Breaches</h3>
              <p className="text-gray-400 text-center text-sm">
                Attackers are taking advantage of gaps in traditional security solutions with increasingly sophisticated methods.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-3xl">85%</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Of SaaS Attacks Target Identities</h3>
              <p className="text-gray-400 text-center text-sm">
                Securing SaaS requires a solution that understands both human and non-human identities across your digital ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            One Platform. <span className="text-[#18CB96]">Complete SaaS Security.</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Break down security and business silos with a unified solution designed for today's complex threat landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Solution 1 */}
            <div className="bg-gradient-to-b from-blue-950/80 to-blue-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-blue-400 mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-4">SaaS Security Posture Management</h3>
              <p className="text-gray-300 mb-4">
                Turn app owners into SaaS security experts reducing posture-related risk, including from non-human identities.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Solution 2 */}
            <div className="bg-gradient-to-b from-emerald-950/80 to-emerald-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-emerald-400 mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Identity Threat Detection and Response</h3>
              <p className="text-gray-300 mb-4">
                Stop identity-based attacks before they become breaches with AI-powered anomaly detection and instant response.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Solution 3 */}
            <div className="bg-gradient-to-b from-purple-950/80 to-purple-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-purple-400 mb-4">🚫</div>
              <h3 className="text-xl font-semibold text-white mb-4">Identity Threat Prevention</h3>
              <p className="text-gray-300 mb-4">
                Prevent breaches at the source—in the browser—with advanced techniques to stop attacks before they start.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            The <span className="text-[#18CB96]">Advantage</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Our platform delivers comprehensive protection with industry-leading threat intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Advantage 1 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold">Real-World Threat Intelligence</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Machine learning models trained on years of SaaS threat data from hundreds of incident responses to stop attacks today and tomorrow.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold">Strategic Partnerships</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Partners inform our platform to ensure best practices are built-in, delivering automated defenses that adapt as your organization grows.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">👁️</span>
                </div>
                <h3 className="text-xl font-semibold">Full Visibility and Protection</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Get a consolidated and normalized view of threat and posture alerts with prioritized remediation steps for immediate action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Trusted by <span className="text-[#18CB96]">Industry Leaders</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-black/30 p-6 rounded-xl border border-gray-800">
              <p className="text-gray-300 italic mb-6">
                "Snowflake has hundreds of SaaS applications — to gain visibility into those SaaS applications could take months. With this solution we were able to do that in days, if not hours."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-gray-700 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Mario Duarte</h4>
                  <p className="text-sm text-gray-400">Vice President of Security, Snowflake</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-black/30 p-6 rounded-xl border border-gray-800">
              <p className="text-gray-300 italic mb-6">
                "Our partnership underscores a joint commitment to offer our customers a secure and unified platform for data, analytics and AI, that empowers fast and powerful insights."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-gray-700 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Heather Akuiyibo</h4>
                  <p className="text-sm text-gray-400">VP Go-To-Market, Databricks</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-black/30 p-6 rounded-xl border border-gray-800">
              <p className="text-gray-300 italic mb-6">
                "Seeing threats across SaaS solutions in a single pane of view is critical to us. This platform promises always-on monitoring and protection, and meets the compliance standards that our members need."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-gray-700 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Øyvind Berget</h4>
                  <p className="text-sm text-gray-400">Chief Technical Officer, Norma Cyber</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Measurable <span className="text-[#18CB96]">Results</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 rounded-xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">80%</h3>
              <p className="text-gray-400">Reduction in Accounts With Excessive Privileges</p>
            </div>
            
            <div className="bg-gray-900/30 rounded-xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">100%</h3>
              <p className="text-gray-400">Advanced Phishing Attacks Stopped</p>
            </div>
            
            <div className="bg-gray-900/30 rounded-xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">85%</h3>
              <p className="text-gray-400">Decrease in SaaS Attack Surface</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-gray-900/50 rounded-xl overflow-hidden">
          <div className="md:w-2/3 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Start Securing Your SaaS Today</h2>
            <p className="text-gray-400 mb-6">
              Get started in minutes and secure your critical SaaS applications with continuous monitoring and data-driven insights.
            </p>
            <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium">
              Get a Demo
            </button>
          </div>
          <div className="md:w-1/3 bg-gradient-to-b from-blue-950/40 to-emerald-900/30 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <p className="text-sm text-gray-300">End-to-end protection for your entire SaaS ecosystem</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecAndDataProtection;
