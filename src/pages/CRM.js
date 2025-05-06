import React from 'react';

const CRM = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-20 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#18CB96] to-blue-400 bg-clip-text text-transparent leading-tight">
            Custom CRM Solutions<br />
            Tailored for Your<br />
            Business Growth
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-2xl">
            Centralize data, integrate securely with existing systems, and scale effortlessly with our intelligent CRM platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 border-2 border-gray-700 rounded-lg hover:bg-gray-900 transition-all font-medium text-sm lg:text-base">
              Start Free Trial
            </button>
            <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium text-sm lg:text-base">
              Get Custom Demo
            </button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-12 w-full max-w-2xl h-96 bg-gray-900 rounded-2xl flex items-center justify-center">
          <div className="text-gray-500 italic">[3D CRM Dashboard Visualization]</div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {[
            {
              title: "Adaptive Growth Architecture",
              content: "Easily scale your CRM platform across multiple locations and integrated systems"
            },
            {
              title: "Intelligent Dashboards",
              content: "Customizable real-time analytics with automated reporting and forecasting"
            },
            {
              title: "Enterprise-Grade Customization",
              content: "Configure complex workflows without coding or IT dependencies"
            },
            {
              title: "Unified Data Ecosystem",
              content: "Centralized cloud database with cross-platform synchronization"
            }
          ].map((feature, index) => (
            <div key={index} className="group p-8 bg-gray-800/30 rounded-2xl hover:bg-gray-800/50 transition-all">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-[#18CB96]">{feature.title}</h3>
              <p className="text-gray-400 text-lg">{feature.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-gray-900 text-[#18CB96] px-6 py-2 rounded-full text-sm mb-8 font-medium">
            Enterprise CRM Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            Comprehensive Customer<br />
            Management Ecosystem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: '📈',
                title: "Advanced Analytics",
                content: "Real-time performance tracking with AI-powered insights"
              },
              {
                icon: '🤖',
                title: "Process Automation",
                content: "Automate workflows across sales, support, and marketing"
              },
              {
                icon: '🔒',
                title: "Security First",
                content: "Enterprise-grade encryption and compliance protocols"
              }
            ].map((item, index) => (
              <div key={index} className="p-8 bg-gray-900/30 rounded-2xl hover:bg-gray-900/50 transition-all">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Seamless Ecosystem Integration</h2>
              <p className="text-gray-400 text-lg">
                Connect with your existing tech stack through our powerful API framework and pre-built connectors
              </p>
              <div className="flex flex-wrap gap-4">
                {['Salesforce', 'HubSpot', 'Zapier', 'Slack'].map((platform, i) => (
                  <span key={i} className="px-6 py-2 bg-gray-800 rounded-full text-sm">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <div className="h-96 bg-gray-800 rounded-xl flex items-center justify-center">
                [Integration Network Visualization]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-[#18CB96]/10 rounded-2xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Customer Relationships
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Start your journey with a personalized platform demo and 30-day free trial
          </p>
          <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium">
            Schedule Demo Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CRM;