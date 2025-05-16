import React from 'react';

const CloudInfra = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-1">
          Cloud Infrastructure Solutions
          <br />
          <span className="text-[#18CB96]">for Modern Enterprises</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Scalable, secure, and cost-effective cloud infrastructure.
          <br />
          Leverage AWS, Azure, and GCP for your business transformation.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium">
            Get Free Consultation
          </button>
          <button className="px-8 py-3.5 border-2 border-gray-700 rounded-lg hover:bg-gray-900 transition-all font-medium">
            Explore Solutions
          </button>
        </div>
        
        {/* Small links under buttons */}
        <div className="flex justify-center mt-10 gap-8 text-xs text-gray-500">
          <span>• High Availability</span>
          <span>• Cost Optimization</span>
          <span>• Security Compliance</span>
          <span>• Expert Support</span>
        </div>
      </section>

      {/* Why Choose Our Cloud Solutions */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Why Choose Our <span className="text-[#18CB96]">Cloud Solutions</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Our cloud expertise spans across major platforms, helping you leverage the best technologies for your unique business requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold">Accelerated Innovation</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Reduce time-to-market with automated CI/CD pipelines, containerization, and microservices architecture.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold">Cost Optimization</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Pay only for what you use with auto-scaling, reserved instances, and comprehensive cost analysis tools.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold">Enhanced Security</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Enterprise-grade security with encryption, IAM, compliance controls, and automated threat detection.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold">Global Scalability</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Instantly scale resources up or down to meet demand with global regions and edge locations.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Major Cloud Platforms */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Leading <span className="text-[#18CB96]">Cloud Platforms</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We offer specialized expertise across all major cloud providers, helping you choose the best fit for your requirements.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AWS */}
            <div className="bg-gradient-to-b from-orange-950/80 to-orange-900/30 p-8 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="flex items-center mb-6">
                <div className="text-3xl text-orange-400 mr-3">☁️</div>
                <h3 className="text-2xl font-semibold text-white">Amazon Web Services</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Industry-leading cloud platform with the broadest and deepest set of services and global reach.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                <li>• EC2 & Elastic Beanstalk</li>
                <li>• S3 & Glacier Storage</li>
                <li>• RDS & DynamoDB</li>
                <li>• Lambda Serverless</li>
                <li>• CloudFormation & EKS</li>
              </ul>
              <a href="#" className="text-[#18CB96] inline-block py-2 px-4 border border-[#18CB96] rounded-lg hover:bg-[#18CB96] hover:text-black transition-all text-sm font-medium">AWS Solutions</a>
            </div>

            {/* Azure */}
            <div className="bg-gradient-to-b from-blue-950/80 to-blue-900/30 p-8 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="flex items-center mb-6">
                <div className="text-3xl text-blue-400 mr-3">☁️</div>
                <h3 className="text-2xl font-semibold text-white">Microsoft Azure</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Enterprise-focused cloud platform with seamless integration with Microsoft tools and technologies.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                <li>• Virtual Machines</li>
                <li>• Azure Storage & Blob</li>
                <li>• SQL Database & Cosmos DB</li>
                <li>• Azure Functions</li>
                <li>• Azure DevOps & AKS</li>
              </ul>
              <a href="#" className="text-[#18CB96] inline-block py-2 px-4 border border-[#18CB96] rounded-lg hover:bg-[#18CB96] hover:text-black transition-all text-sm font-medium">Azure Solutions</a>
            </div>

            {/* GCP */}
            <div className="bg-gradient-to-b from-red-950/80 to-red-900/30 p-8 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="flex items-center mb-6">
                <div className="text-3xl text-red-400 mr-3">☁️</div>
                <h3 className="text-2xl font-semibold text-white">Google Cloud Platform</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Leading in AI, machine learning, and data analytics with cutting-edge container technologies.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                <li>• Compute Engine</li>
                <li>• Cloud Storage</li>
                <li>• BigQuery & Spanner</li>
                <li>• Cloud Functions</li>
                <li>• Kubernetes Engine & Anthos</li>
              </ul>
              <a href="#" className="text-[#18CB96] inline-block py-2 px-4 border border-[#18CB96] rounded-lg hover:bg-[#18CB96] hover:text-black transition-all text-sm font-medium">GCP Solutions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Cloud Services */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Core <span className="text-[#18CB96]">Cloud Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We implement and manage these essential cloud services to power your digital transformation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Compute */}
            <div className="bg-gradient-to-b from-emerald-950/80 to-emerald-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-emerald-400 mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Compute</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Virtual Machines</li>
                <li>• Container Services</li>
                <li>• Serverless Functions</li>
                <li>• Auto-scaling</li>
                <li>• Load Balancing</li>
              </ul>
            </div>

            {/* Storage */}
            <div className="bg-gradient-to-b from-indigo-950/80 to-indigo-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-indigo-400 mb-4">💾</div>
              <h3 className="text-xl font-semibold text-white mb-4">Storage</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Object Storage</li>
                <li>• Block Storage</li>
                <li>• File Systems</li>
                <li>• Archive Storage</li>
                <li>• Data Lakes</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="bg-gradient-to-b from-blue-950/80 to-blue-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-blue-400 mb-4">🗄️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Databases</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Relational Databases</li>
                <li>• NoSQL Databases</li>
                <li>• In-memory Caching</li>
                <li>• Data Warehousing</li>
                <li>• Database Migration</li>
              </ul>
            </div>

            {/* Networking */}
            <div className="bg-gradient-to-b from-teal-950/80 to-teal-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-teal-400 mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-4">Networking</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Virtual Networks</li>
                <li>• Content Delivery</li>
                <li>• DNS Management</li>
                <li>• VPN & Direct Connect</li>
                <li>• Traffic Management</li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-gradient-to-b from-amber-950/80 to-amber-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-amber-400 mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">Security</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Identity & Access Management</li>
                <li>• Data Encryption</li>
                <li>• Threat Detection</li>
                <li>• Security Assessment</li>
                <li>• Compliance Controls</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="bg-gradient-to-b from-green-950/80 to-green-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-green-400 mb-4">♾️</div>
              <h3 className="text-xl font-semibold text-white mb-4">DevOps</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• CI/CD Pipelines</li>
                <li>• Infrastructure as Code</li>
                <li>• Monitoring & Logging</li>
                <li>• Containerization</li>
                <li>• Automation</li>
              </ul>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-gradient-to-b from-purple-950/80 to-purple-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-purple-400 mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-4">AI & Machine Learning</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• ML Services</li>
                <li>• AI APIs</li>
                <li>• Data Processing</li>
                <li>• Model Training</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>

            {/* Serverless */}
            <div className="bg-gradient-to-b from-cyan-950/80 to-cyan-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-cyan-400 mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Serverless</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Functions as a Service</li>
                <li>• Event-driven Architecture</li>
                <li>• API Gateways</li>
                <li>• Serverless Databases</li>
                <li>• Edge Computing</li>
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
            Our cloud infrastructure solutions deliver transformative advantages for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Benefit 1 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">📈</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Business Agility</h3>
              <p className="text-gray-400 text-center text-sm">
                Rapidly deploy new applications and services to meet changing market demands and stay ahead of competitors.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Reduced TCO</h3>
              <p className="text-gray-400 text-center text-sm">
                Lower capital expenses, predictable operational costs, and improved resource utilization with pay-as-you-go models.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">🔄</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Elastic Scalability</h3>
              <p className="text-gray-400 text-center text-sm">
                Scale resources up or down based on demand without the need to over-provision or worry about capacity constraints.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Advanced Security</h3>
              <p className="text-gray-400 text-center text-sm">
                Leverage enterprise-level security protocols, compliance frameworks, and automated threat detection systems.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">🔧</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Innovation Enablement</h3>
              <p className="text-gray-400 text-center text-sm">
                Access cutting-edge technologies like AI, ML, and IoT without heavy investment in research and development.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex justify-center mb-6">
                <div className="text-[#18CB96] text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Global Reach</h3>
              <p className="text-gray-400 text-center text-sm">
                Deploy applications closer to your users with edge locations and regional data centers for improved performance.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-gray-900/30 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">99.99%</h3>
              <p className="text-gray-400 text-sm">Uptime SLA</p>
            </div>
            
            <div className="bg-gray-900/30 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">60%</h3>
              <p className="text-gray-400 text-sm">Average Cost Savings</p>
            </div>
            
            <div className="bg-gray-900/30 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">200+</h3>
              <p className="text-gray-400 text-sm">Successful Migrations</p>
            </div>
            
            <div className="bg-gray-900/30 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#18CB96] mb-2">24/7</h3>
              <p className="text-gray-400 text-sm">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-gray-900/50 rounded-xl overflow-hidden">
          <div className="md:w-2/3 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure</h2>
            <p className="text-gray-400 mb-6">
              Schedule a consultation with our cloud experts to explore how we can help you leverage the power of AWS, Azure, and GCP.
            </p>
            <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium">
              Book Your Consultation
            </button>
          </div>
          <div className="md:w-1/3 bg-gray-800 p-8">
            <h3 className="text-xl font-bold mb-4">Migration Process</h3>
            <ul className="text-sm text-gray-300 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#18CB96]">1.</span>
                <span>Assessment & Planning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#18CB96]">2.</span>
                <span>Architecture Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#18CB96]">3.</span>
                <span>Migration Execution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#18CB96]">4.</span>
                <span>Optimization & Management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfra;
