import React from 'react';

const AiMlSolution = () => {
  return (
    <div className="bg-black text-white">
      {/* Animated Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-float">
            <span className="inline-block bg-green-900/20 text-[#18CB96] px-4 py-2 rounded-full text-xs sm:text-sm mb-6 sm:mb-8 font-medium">
              Enterprise AI/ML Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Transform Business Operations<br className="hidden sm:block"/> 
            with Intelligent Automation
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-20">
            {['Predictive Analytics', 'Computer Vision', 'NLP Systems'].map((feature, index) => (
              <div key={index} className="group relative bg-gray-900/30 rounded-2xl lg:rounded-3xl p-6 sm:p-8 hover:bg-gray-800/50 transition-all duration-300 h-64 sm:h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 sm:mb-6 inline-block rounded-xl bg-green-900/20 p-3 sm:p-4">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">{feature}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Enterprise-grade AI solutions with 99.9% accuracy SLA</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="animate-pulse-slow absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full blur-3xl -top-32 -left-32" />
          <div className="animate-pulse-slow absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-full blur-3xl -bottom-32 -right-32" />
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
                Advanced Machine Learning Framework
              </h2>
              <p className="text-gray-400 text-base sm:text-xl leading-relaxed">
                Our MLOps-powered platform enables continuous learning systems with:
              </p>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  'Real-time model monitoring',
                  'Automated retraining pipelines',
                  'Explainable AI dashboards',
                  'Multi-cloud deployment',
                  'Enterprise security compliance'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-900/20 text-green-400 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Interactive Model Visualization */}
            <div className="bg-gray-900/30 rounded-2xl lg:rounded-3xl p-6 sm:p-8 h-[400px] sm:h-[600px] flex items-center justify-center mt-8 sm:mt-0">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-orbital w-32 h-32 sm:w-48 sm:h-48 border-2 border-green-400/30 rounded-full" />
                  <div className="animate-orbital-delay w-24 h-24 sm:w-32 sm:h-32 border-2 border-purple-400/30 rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-green-400 to-purple-500 w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Case Studies */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI Transformation Stories</h2>
            <p className="text-gray-400 text-base sm:text-xl max-w-3xl mx-auto">
              Measurable business impact through strategic AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            {[
              {
                title: "Predictive Maintenance System",
                impact: "42% reduction in downtime",
                tags: ["IoT", "Time-series Forecasting"],
                img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
              },
              {
                title: "Intelligent Document Processing",
                impact: "10x faster processing",
                tags: ["NLP", "Computer Vision"],
                img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
              },
              {
                title: "Customer Churn Prediction",
                impact: "$18M revenue saved",
                tags: ["Deep Learning", "Big Data"],
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              },
              {
                title: "Automated Quality Control",
                impact: "99.8% detection accuracy",
                tags: ["CV", "Anomaly Detection"],
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl lg:rounded-3xl h-[300px] sm:h-[400px] lg:h-[500px]">
                <img
                  src={caseStudy.img}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6 sm:p-10">
                  <div>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {caseStudy.tags.map((tag, i) => (
                        <span key={i} className="bg-green-900/30 text-green-400 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{caseStudy.title}</h3>
                    <p className="text-green-400 mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg">{caseStudy.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Enterprise AI Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            {[
              'TensorFlow',
              'PyTorch',
              'Kubernetes',
              'AWS SageMaker',
              'Snowflake'
            ].map((tech, index) => (
              <div key={index} className="bg-gray-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-gray-800/50 transition-colors">
                <div className="text-green-400 text-2xl sm:text-4xl mb-2 sm:mb-4">
                  {index % 2 === 0 ? '🤖' : '⚡'}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-medium">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-green-900/40 to-purple-900/40 rounded-3xl sm:rounded-[40px] p-8 sm:p-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Start Your AI Journey</h2>
            <p className="text-gray-300 text-base sm:text-xl mb-8 sm:mb-12">
              Unlock $1M+ potential cost savings with our enterprise AI solutions
            </p>
            <button className="bg-[#18CB96] text-black px-8 py-3 sm:px-14 sm:py-5 rounded-lg sm:rounded-xl hover:bg-green-400 transition-colors text-base sm:text-xl font-bold flex items-center gap-2 sm:gap-4 mx-auto justify-center">
              Schedule AI Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiMlSolution;