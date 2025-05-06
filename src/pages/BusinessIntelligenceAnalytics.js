import React from 'react';

const BusinessIntelligenceAnalytics = () => {
  return (
    <div className="bg-black text-white">
      {/* Expanded Hero Section */}
      <section className="relative py-32 px-4 sm:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-gray-900 text-[#18CB96] px-6 py-2 rounded-full text-sm mb-6 font-medium">
            AI-Powered Business Intelligence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#18CB96] to-blue-400 bg-clip-text text-transparent">
            Transform Raw Data Into<br />
            Competitive Advantage
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {['95% Prediction Accuracy', 'Real-time Processing', 'Enterprise-Grade Security'].map((stat, i) => (
              <div key={i} className="p-6 border border-gray-800 rounded-2xl hover:border-[#18CB96] transition-all">
                <div className="text-2xl text-[#18CB96] mb-2">▶</div>
                <p className="text-lg">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Pipeline Visualization */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Modern Data Architecture</h2>
          <div className="relative bg-gray-900/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              {['Ingestion', 'Cleaning', 'Storage', 'Analysis', 'Visualization'].map((step, i) => (
                <div key={i} className="group relative text-center p-6 hover:bg-gray-800/50 rounded-xl transition-all">
                  <div className="absolute inset-0 border border-gray-700 rounded-xl group-hover:border-[#18CB96] transition-all" />
                  <div className="text-4xl mb-4 text-[#18CB96]">⏳</div>
                  <h3 className="text-xl font-semibold mb-2">{step}</h3>
                  <p className="text-gray-400 text-sm">AI-optimized data processing pipelines</p>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="animate-pulse-slow w-full max-w-2xl h-64 bg-gradient-to-r from-[#18CB96]/10 to-blue-400/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Showcase */}
      <section className="py-24 px-4 sm:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Real-time Decision Intelligence</h2>
            <p className="text-gray-400 text-lg">
              Leverage streaming analytics and machine learning models to make informed decisions in milliseconds
            </p>
            <div className="space-y-6">
              {['Anomaly Detection', 'Predictive Forecasting', 'Natural Language Querying'].map((feature, i) => (
                <div key={i} className="flex items-start gap-6 p-6 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#18CB96]/10 text-[#18CB96] rounded-lg flex items-center justify-center">
                    {i+1}.
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                    <p className="text-gray-400">AI-powered insights with automated recommendations</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900/30 rounded-2xl p-8">
            <div className="h-96 bg-gradient-to-br from-[#18CB96]/10 to-blue-400/10 rounded-xl flex items-center justify-center">
              [Live Analytics Dashboard]
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Case Studies */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Enterprise Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { company: 'Fortune 500 Retailer', impact: '34% Revenue Increase', industry: 'Retail' },
              { company: 'Global Bank', impact: '60M Fraud Prevented', industry: 'Finance' },
              { company: 'Healthcare Network', impact: '22% Cost Reduction', industry: 'Healthcare' },
            ].map((caseStudy, i) => (
              <div key={i} className="group relative bg-gray-900/30 rounded-2xl p-8 hover:bg-gray-900/50 transition-all">
                <div className="absolute inset-0 border border-gray-800 rounded-2xl group-hover:border-[#18CB96] transition-all" />
                <div className="relative">
                  <div className="text-[#18CB96] text-3xl mb-4">🏆</div>
                  <h3 className="text-2xl font-semibold mb-2">{caseStudy.company}</h3>
                  <div className="text-lg text-[#18CB96] mb-4">{caseStudy.impact}</div>
                  <div className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full inline-block">
                    {caseStudy.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictive Analytics Deep Dive */}
      <section className="py-24 px-4 sm:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI-Driven Forecasting</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Combine historical data and market signals for accurate predictive modeling
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/30 rounded-2xl p-8">
              <div className="h-96 bg-gray-800 rounded-xl flex items-center justify-center">
                [Forecasting Model Visualization]
              </div>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Demand Prediction', accuracy: '98.2%' },
                { title: 'Inventory Optimization', accuracy: '94.7%' },
                { title: 'Customer Lifetime Value', accuracy: '96.5%' },
              ].map((model, i) => (
                <div key={i} className="group p-6 bg-gray-900/50 rounded-xl hover:bg-[#18CB96]/10 transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{model.title}</h3>
                      <p className="text-gray-400">Average prediction accuracy</p>
                    </div>
                    <div className="text-3xl text-[#18CB96]">{model.accuracy}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-step CTA */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900 to-[#18CB96]/20 rounded-2xl p-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Start Your AI Transformation
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo to see our platform in action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium">
                Book Enterprise Demo
              </button>
              <button className="px-8 py-3.5 border-2 border-gray-700 rounded-lg hover:border-[#18CB96] transition-all">
                Download Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligenceAnalytics;