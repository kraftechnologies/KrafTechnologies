import React from 'react';

const ERP = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-1">
          Enterprise Resource Planning
          <br />
          <span className="text-[#18CB96]">for the Digital Age</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Streamlined operations, enhanced productivity, and drive growth with ease.
          <br />
          AI-powered ERP solutions tailored for your business.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium">
            Schedule Demo
          </button>
          <button className="px-8 py-3.5 border-2 border-gray-700 rounded-lg hover:bg-gray-900 transition-all font-medium">
            Learn More
          </button>
        </div>
        
        {/* Small links under buttons */}
        <div className="flex justify-center mt-10 gap-8 text-xs text-gray-500">
          <span>• AI-Powered Analytics</span>
          <span>• Seamless Integration</span>
          <span>• Intuitive Interface</span>
          <span>• Cloud-Native</span>
        </div>
      </section>

      {/* Why Choose Our ERP Solution */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Why Choose Our <span className="text-[#18CB96]">ERP Solution</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Our ERP platform integrates cutting-edge technology with intuitive design to deliver a robust system 
            that helps you excel in today's competitive landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold">Centralized Data Management</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Unified data repository with secure access controls, powerful search, and seamless integration platforms.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">🧩</span>
                </div>
                <h3 className="text-xl font-semibold">Modular Architecture</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Customizable framework with plug-and-play functionality for tailored implementation across departments.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold">Advanced Analytics & Reporting</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Intelligent dashboards with real-time metrics, predictive analytics, and customizable data visualizations.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold">Collaborative Workflow</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Cross-departmental process chains with approval hierarchies, task orchestration, and milestone tracking.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive ERP Modules */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Comprehensive <span className="text-[#18CB96]">ERP Modules</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Our ERP solution includes integrated purpose-built modules that can be customized to meet your unique business requirements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Financial Management */}
            <div className="bg-gradient-to-b from-emerald-950/80 to-emerald-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-emerald-400 mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-4">Financial Management</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• General Ledger</li>
                <li>• Accounts Payable</li>
                <li>• Accounts Receivable</li>
                <li>• Budget Management</li>
                <li>• Tax Management</li>
              </ul>
            </div>

            {/* Human Resources */}
            <div className="bg-gradient-to-b from-indigo-950/80 to-indigo-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-indigo-400 mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-4">Human Resources</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Personnel</li>
                <li>• Recruitment</li>
                <li>• Time Management</li>
                <li>• Performance Analysis</li>
                <li>• Professional Development</li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="bg-gradient-to-b from-blue-950/80 to-blue-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-blue-400 mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-white mb-4">Inventory Management</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Stock Control</li>
                <li>• Item Catalog</li>
                <li>• Warehouse Management</li>
                <li>• Barcode Tracking</li>
                <li>• Inventory Forecasting</li>
              </ul>
            </div>

            {/* Supply Chain Management */}
            <div className="bg-gradient-to-b from-teal-950/80 to-teal-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-teal-400 mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-4">Supply Chain Management</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Procurement</li>
                <li>• Vendor Management</li>
                <li>• Order Processing</li>
                <li>• Logistics Control</li>
                <li>• Contract Management</li>
              </ul>
            </div>

            {/* Manufacturing */}
            <div className="bg-gradient-to-b from-amber-950/80 to-amber-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-amber-400 mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Production Planning</li>
                <li>• Quality Control</li>
                <li>• Shop Floor Control</li>
                <li>• Bill of Materials</li>
                <li>• Work Instructions</li>
              </ul>
            </div>

            {/* Business Intelligence */}
            <div className="bg-gradient-to-b from-green-950/80 to-green-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-green-400 mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Business Intelligence</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Data Visualization</li>
                <li>• Strategic KPIs</li>
                <li>• Custom Dashboards</li>
                <li>• Predictive Analytics</li>
                <li>• Executive Reporting</li>
              </ul>
            </div>

            {/* Customer Relationship */}
            <div className="bg-gradient-to-b from-purple-950/80 to-purple-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-purple-400 mb-4">👤</div>
              <h3 className="text-xl font-semibold text-white mb-4">Customer Relationship</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Contact Management</li>
                <li>• Sales Pipeline</li>
                <li>• Customer Support</li>
                <li>• Marketing Campaigns</li>
                <li>• Customer Insights</li>
              </ul>
            </div>

            {/* Asset Management */}
            <div className="bg-gradient-to-b from-cyan-950/80 to-cyan-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-cyan-400 mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-4">Asset Management</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Asset Registry</li>
                <li>• Maintenance</li>
                <li>• Depreciation</li>
                <li>• Digital Twins</li>
                <li>• Asset Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Key <span className="text-[#18CB96]">Benefits</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Our ERP solution offers centralized data management, process automation, and real-time operational intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Benefit 1 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Increased Efficiency</h3>
              <p className="text-gray-400 text-center text-sm">
                Streamlined workflows and automated processes reduce manual effort and minimize operational costs.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">🕒</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Real-Time Visibility</h3>
              <p className="text-gray-400 text-center text-sm">
                Instant access to operational data across departments enables faster, more informed decision-making.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">📈</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Enhanced Productivity</h3>
              <p className="text-gray-400 text-center text-sm">
                Intelligent automation and streamlined processes help teams focus on high-value strategic initiatives.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">🔒</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Robust Security</h3>
              <p className="text-gray-400 text-center text-sm">
                Enterprise-grade data protection with role-based access controls and comprehensive audit trails.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">💹</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Scalable Solution</h3>
              <p className="text-gray-400 text-center text-sm">
                Flexible architecture adapts to your business growth with modular components and seamless integrations.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">📱</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Mobile Accessibility</h3>
              <p className="text-gray-400 text-center text-sm">
                Secure access from anywhere with responsive design optimized for desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-gray-900/30 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">99.9%</h3>
              <p className="text-gray-400 text-sm">System Uptime</p>
            </div>
            
            <div className="bg-gray-900/30 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">40%</h3>
              <p className="text-gray-400 text-sm">Reduction in Processing Time</p>
            </div>
            
            <div className="bg-gray-900/30 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">500+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
            
            <div className="bg-gray-900/30 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">24/7</h3>
              <p className="text-gray-400 text-sm">Technical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-gray-900/50 rounded-xl overflow-hidden">
          <div className="md:w-2/3 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business</h2>
            <p className="text-gray-400 mb-6">
              Schedule a personalized demo to see how our ERP solution can streamline your operations.
            </p>
            <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium">
              Get Started Today
            </button>
          </div>
          <div className="md:w-1/3 bg-gray-800 p-8">
            <h3 className="text-xl font-bold mb-4">Implementation Timeline</h3>
            {/* Timeline content would go here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERP;
