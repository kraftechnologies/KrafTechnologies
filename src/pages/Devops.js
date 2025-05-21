import React from 'react';

const Devops = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-1">
          DevOps & CI/CD Solutions
          <br />
          <span className="text-[#18CB96]">for Modern Development</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Streamline your development pipeline with automated testing, 
          <br />
          continuous integration, and deployment solutions.
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
          <span>• Continuous Integration</span>
          <span>• Continuous Deployment</span>
          <span>• Infrastructure as Code</span>
          <span>• Monitoring</span>
        </div>
      </section>

      {/* Why Choose Our DevOps Solutions */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Why Choose Our <span className="text-[#18CB96]">DevOps Solutions</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Our DevOps expertise accelerates your software development lifecycle, improves code quality, and ensures reliable deployments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold">Faster Time-to-Market</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Automate repetitive tasks, streamline workflows, and deploy features faster with our CI/CD pipelines.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Implement automated testing at every stage to catch bugs early and ensure high-quality software delivery.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold">Continuous Improvement</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Monitor performance metrics, collect feedback, and iterate quickly with data-driven development practices.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-400 text-xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold">Security Integration</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Implement DevSecOps practices with automated security scanning and compliance checks throughout the pipeline.
              </p>
              <a href="#" className="text-[#18CB96] text-sm hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD Platform Solutions */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Leading <span className="text-[#18CB96]">CI/CD Platforms</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We provide expertise across all major CI/CD platforms, helping you select and implement the right solutions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Jenkins */}
            <div className="bg-gradient-to-b from-blue-950/80 to-blue-900/30 p-8 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="flex items-center mb-6">
                <div className="text-3xl text-blue-400 mr-3">🔧</div>
                <h3 className="text-2xl font-semibold text-white">Jenkins</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Open-source automation server that enables developers to build, test, and deploy their software reliably.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                <li>• Customizable workflow</li>
                <li>• Extensive plugin ecosystem</li>
                <li>• Distributed builds</li>
                <li>• Pipeline as code</li>
                <li>• Self-hosted control</li>
              </ul>
              <a href="#" className="text-[#18CB96] inline-block py-2 px-4 border border-[#18CB96] rounded-lg hover:bg-[#18CB96] hover:text-black transition-all text-sm font-medium">Jenkins Solutions</a>
            </div>

            {/* GitHub Actions */}
            <div className="bg-gradient-to-b from-purple-950/80 to-purple-900/30 p-8 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="flex items-center mb-6">
                <div className="text-3xl text-purple-400 mr-3">🔄</div>
                <h3 className="text-2xl font-semibold text-white">GitHub Actions</h3>
              </div>
              <p className="text-gray-300 mb-6">
                CI/CD solution that's directly integrated with GitHub repositories for seamless workflow automation.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                <li>• Native GitHub integration</li>
                <li>• YAML-based workflows</li>
                <li>• Matrix builds</li>
                <li>• Reusable actions</li>
                <li>• Built-in secret management</li>
              </ul>
              <a href="#" className="text-[#18CB96] inline-block py-2 px-4 border border-[#18CB96] rounded-lg hover:bg-[#18CB96] hover:text-black transition-all text-sm font-medium">GitHub Actions Solutions</a>
            </div>

            {/* GitLab CI */}
            <div className="bg-gradient-to-b from-orange-950/80 to-orange-900/30 p-8 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="flex items-center mb-6">
                <div className="text-3xl text-orange-400 mr-3">🦊</div>
                <h3 className="text-2xl font-semibold text-white">GitLab CI/CD</h3>
              </div>
              <p className="text-gray-300 mb-6">
                End-to-end DevOps platform with built-in CI/CD, source code management, and monitoring tools.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                <li>• Integrated DevOps platform</li>
                <li>• Auto DevOps</li>
                <li>• Container registry</li>
                <li>• Review apps</li>
                <li>• Kubernetes integration</li>
              </ul>
              <a href="#" className="text-[#18CB96] inline-block py-2 px-4 border border-[#18CB96] rounded-lg hover:bg-[#18CB96] hover:text-black transition-all text-sm font-medium">GitLab CI Solutions</a>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Tools & Technologies */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Essential <span className="text-[#18CB96]">DevOps Tools</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We implement and integrate these vital DevOps tools to power your development pipeline.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Container Orchestration */}
            <div className="bg-gradient-to-b from-blue-950/80 to-blue-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-blue-400 mb-4">🐳</div>
              <h3 className="text-xl font-semibold text-white mb-4">Container Orchestration</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Kubernetes</li>
                <li>• Docker Swarm</li>
                <li>• Amazon ECS/EKS</li>
                <li>• Azure AKS</li>
                <li>• Google GKE</li>
              </ul>
            </div>

            {/* Infrastructure as Code */}
            <div className="bg-gradient-to-b from-emerald-950/80 to-emerald-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-emerald-400 mb-4">📝</div>
              <h3 className="text-xl font-semibold text-white mb-4">Infrastructure as Code</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Terraform</li>
                <li>• AWS CloudFormation</li>
                <li>• Azure Resource Manager</li>
                <li>• Pulumi</li>
                <li>• Ansible</li>
              </ul>
            </div>

            {/* Monitoring & Observability */}
            <div className="bg-gradient-to-b from-indigo-950/80 to-indigo-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-indigo-400 mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Monitoring & Logging</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Prometheus</li>
                <li>• Grafana</li>
                <li>• ELK Stack</li>
                <li>• Datadog</li>
                <li>• New Relic</li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="bg-gradient-to-b from-amber-950/80 to-amber-900/30 p-6 rounded-xl hover:translate-y-[-5px] transition-all">
              <div className="text-2xl text-amber-400 mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">DevSecOps</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• SonarQube</li>
                <li>• OWASP ZAP</li>
                <li>• Snyk</li>
                <li>• GitGuardian</li>
                <li>• HashiCorp Vault</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our DevOps Process */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Our <span className="text-[#18CB96]">DevOps Process</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We follow a proven methodology to implement DevOps practices tailored to your unique requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#18CB96]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="font-bold text-[#18CB96] text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Assessment & Planning</h3>
                <p className="text-gray-400">
                  We evaluate your existing workflows, identify bottlenecks, and create a customized DevOps roadmap aligned with your business goals.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#18CB96]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="font-bold text-[#18CB96] text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Implementation</h3>
                <p className="text-gray-400">
                  Our experts build automated pipelines, set up infrastructure as code, and implement robust monitoring and security practices.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#18CB96]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="font-bold text-[#18CB96] text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Optimization & Support</h3>
                <p className="text-gray-400">
                  We continuously optimize your DevOps practices, provide training, and offer ongoing support to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Client <span className="text-[#18CB96]">Success Stories</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            See how our DevOps solutions have transformed development practices for our clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                  <span className="text-blue-400 text-xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold">E-commerce Platform</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Reduced deployment time from 3 days to 2 hours and decreased production incidents by 78% through CI/CD implementation and automated testing.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <span className="mr-4">• 90% faster deployments</span>
                <span>• 78% fewer incidents</span>
              </div>
              <a href="#" className="text-[#18CB96] hover:underline text-sm">Read full case study →</a>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-purple-900/30 p-3 rounded-lg mr-4">
                  <span className="text-purple-400 text-xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold">Healthcare Provider</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Implemented secure DevOps practices for a healthcare platform, ensuring HIPAA compliance while increasing development velocity by 60%.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <span className="mr-4">• 60% faster development</span>
                <span>• 100% compliance maintained</span>
              </div>
              <a href="#" className="text-[#18CB96] hover:underline text-sm">Read full case study →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-8 mb-16">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 sm:p-12 rounded-2xl border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="text-[#18CB96]">Transform</span> Your Development Process?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our DevOps experts will help you implement efficient CI/CD pipelines and modernize your development practices.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium">
              Schedule a Consultation
            </button>
            <button className="px-8 py-3.5 border-2 border-gray-700 rounded-lg hover:bg-gray-900 transition-all font-medium">
              View Service Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devops;
