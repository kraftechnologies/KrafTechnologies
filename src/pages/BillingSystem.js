import React from 'react';

const BillingSystem = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-24 lg:py-32">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[#18CB96] via-emerald-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            Unify payments, billing,<br />
            and revenue management
          </h1>
          <p className="text-gray-300 text-xl lg:text-2xl mb-10 max-w-2xl leading-relaxed">
            Improve customer experience, grow recurring revenue, and reduce costs with a single unified platform for payments, subscriptions, invoicing, accounting, tax, and more.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-10 py-4 border-2 border-[#18CB96] rounded-xl hover:bg-[#18CB96]/10 transition-all font-semibold text-base lg:text-lg">
              Contact Sales
            </button>
            <button className="px-10 py-4 bg-gradient-to-r from-[#18CB96] to-emerald-400 text-black rounded-xl hover:opacity-90 transition-all font-semibold text-base lg:text-lg shadow-lg shadow-[#18CB96]/20">
              Start Now
            </button>
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:ml-16 w-full max-w-2xl h-[450px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl flex flex-col p-10 shadow-2xl shadow-black/30 border border-gray-800">
          <div className="mb-4 text-xl font-semibold">Invoice from Kraft Technologies</div>
          <div className="text-sm text-gray-300 mb-8">Billed to Client Name</div>
          <div className="text-3xl font-bold mb-10 text-[#18CB96]">$199.00 due June 1, 2023</div>
          
          <div className="space-y-5">
            <div className="bg-gray-800/80 rounded-xl p-5 text-center hover:bg-gray-800 transition-all cursor-pointer">Card Payment</div>
            <div className="bg-gray-800/30 rounded-xl p-5 text-center text-gray-400 hover:bg-gray-800/50 transition-all cursor-pointer">Bank Transfer</div>
          </div>
          
          <button className="mt-auto w-full py-4 bg-gradient-to-r from-[#18CB96] to-emerald-400 text-black rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-[#18CB96]/20">
            Pay Invoice
          </button>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {['Zoom', 'Atlassian', 'Slack', 'Figma'].map((brand, i) => (
              <div key={i} className="text-center text-2xl font-semibold text-gray-400 hover:text-[#18CB96] transition-colors duration-300 cursor-pointer">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capture Revenue Section */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#18CB96]/10 text-[#18CB96] px-8 py-3 rounded-full text-base mb-10 font-semibold border border-[#18CB96]/20">
            Capture More Revenue
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Power any billing model
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#18CB96]">Launch new plans quickly</h3>
              <p className="text-gray-300 leading-relaxed">
                Collect and store payment details including cards, ACH, and other popular payment methods. Easily send invoices and offer discounts and free trials.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#18CB96]">Support any pricing model</h3>
              <p className="text-gray-300 leading-relaxed">
                Billing logic for everything from per-seat pricing to metered billing is available out of the box. Automate billing and revenue recognition.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#18CB96]">Custom pricing for complex deals</h3>
              <p className="text-gray-300 leading-relaxed">
                Give sales teams the ability to send quotes, negotiate rates, and automate the collection process. Sync billing data with your systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Visual */}
      <section className="py-24 px-4 sm:px-8 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-800 shadow-2xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#18CB96] to-emerald-400 bg-clip-text text-transparent">Choose a plan</h3>
            <p className="text-gray-300 text-lg">Scale from startup to enterprise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                price: "$49",
                features: ["Up to 100 customers", "Basic reporting", "2 team members"]
              },
              {
                title: "Professional",
                price: "$149",
                features: ["Unlimited customers", "Advanced analytics", "10 team members", "Priority support"]
              },
              {
                title: "Enterprise",
                price: "Custom",
                features: ["Global payment methods", "Custom reporting", "Unlimited team members", "Dedicated support"]
              }
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 ${i === 1 ? 'bg-gradient-to-br from-[#18CB96]/20 to-emerald-400/10 border-2 border-[#18CB96]/30' : 'bg-gray-800/50'} hover:transform hover:scale-105 transition-all duration-300`}>
                <h4 className="text-2xl font-bold mb-3">{plan.title}</h4>
                <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-base font-normal text-gray-400">/mo</span></div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="text-base text-gray-300 flex items-center">
                      <span className="mr-3 text-[#18CB96] text-xl">✓</span> {feature}
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-xl font-semibold text-lg transition-all ${i === 1 ? 'bg-gradient-to-r from-[#18CB96] to-emerald-400 text-black hover:opacity-90' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reduce Engineering Section */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#18CB96]/10 text-[#18CB96] px-8 py-3 rounded-full text-base mb-10 font-semibold border border-[#18CB96]/20">
            Reduce Engineering Effort
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Save time and resources spent on billing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get paid more quickly with pre-built invoices</h3>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Our conversion-optimized invoices get paid 3x faster than traditional invoices, making it easy to charge customers around the world.
              </p>
              <button className="px-8 py-4 border-2 border-[#18CB96] rounded-xl hover:bg-[#18CB96]/10 transition-all font-semibold text-lg">
                Try it out
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-800">
              <div className="mb-4 text-xl font-semibold">Invoice from Kraft Technologies</div>
              <div className="text-base text-gray-300 mb-8">Billed to Client Name</div>
              <div className="text-3xl font-bold mb-10 text-[#18CB96]">$199.00 due June 1, 2023</div>
              <button className="w-full py-4 bg-gradient-to-r from-[#18CB96] to-emerald-400 text-black rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-[#18CB96]/20">
                Pay Invoice
              </button>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-800 order-2 lg:order-1">
              <div className="p-6 border-b border-gray-700">
                <h4 className="text-xl font-bold mb-3">Billing Portal</h4>
                <p className="text-gray-300">Update your subscription and payment details</p>
              </div>
              <div className="p-6">
                <div className="mb-8">
                  <h5 className="text-gray-300 mb-3">Current plan</h5>
                  <div className="text-xl font-bold">Professional Plan</div>
                  <div className="text-gray-300">$149.00 per month</div>
                </div>
                <button className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold mb-4 transition-all">
                  Change Plan
                </button>
                <button className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold transition-all">
                  Update Payment Method
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6">Launch a customer portal in minutes</h3>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Let customers change their subscription or update billing details with a secure link to your pre-built customer portal. Tailor it with your brand colors.
              </p>
              <button className="px-8 py-4 border-2 border-[#18CB96] rounded-xl hover:bg-[#18CB96]/10 transition-all font-semibold text-lg">
                Try it out
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Automation */}
      <section className="py-24 px-4 sm:px-8 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Move faster with built-in automation
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Automate with webhooks",
                content: "Programmatically trigger actions based on lifecycle events like upgrades, payments, and cancellations."
              },
              {
                title: "Billing proration",
                content: "Automatically prorate billing when any plan changes occur during a billing cycle."
              },
              {
                title: "Schedule subscriptions",
                content: "Configure rules to easily make changes to subscriptions over time without manual intervention."
              },
              {
                title: "Automatic reminders",
                content: "Maximize your chances of getting paid with automatic email reminders for missed or overdue payments."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-[#18CB96]">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#18CB96]/10 text-[#18CB96] px-8 py-3 rounded-full text-base mb-10 font-semibold border border-[#18CB96]/20">
            Why Choose Our Platform
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Optimize revenue with the power of our platform
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Offer a local experience in every market",
                content: "Support 135+ currencies and dozens of global payment methods to increase conversion rates and expand globally."
              },
              {
                title: "Simplify accounting with automated reporting",
                content: "Automate and configure revenue recognition so you can close your books quickly and accurately, even with complex scenarios."
              },
              {
                title: "Streamline and optimize your business",
                content: "Use revenue and finance automation tools to drive growth, reduce costs, and increase efficiency across all operations."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#18CB96]">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 sm:px-8 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Customer success stories
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 shadow-xl">
              <div className="text-2xl font-bold mb-8 text-[#18CB96]">Enterprise Company</div>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                "Having a billing system that lets you stay nimble to respond to customers' needs is really critical. This platform gives you that flexibility."
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-lg">Sarah Johnson</div>
                  <div className="text-gray-400">Director of Product</div>
                </div>
                <div className="text-xl font-bold text-[#18CB96]">Enterprise Co.</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 shadow-xl">
              <div className="text-2xl font-bold mb-8 text-[#18CB96]">Tech Innovators Inc.</div>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                "It requires zero effort from our side. Complex billing operations are now handled automatically with perfect accuracy."
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-lg">Michael Chen</div>
                  <div className="text-gray-400">CTO</div>
                </div>
                <div className="text-xl font-bold text-[#18CB96]">Tech Innovators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 via-[#18CB96]/10 to-gray-900 rounded-3xl p-16 text-center border border-[#18CB96]/20 shadow-2xl">
          <h3 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Ready to get started?
          </h3>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our billing system, or create an account instantly to get started. You can also contact us to design a custom package for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-4 border-2 border-[#18CB96] rounded-xl hover:bg-[#18CB96]/10 transition-all font-semibold text-lg">
              Contact Sales
            </button>
            <button className="px-10 py-4 bg-gradient-to-r from-[#18CB96] to-emerald-400 text-black rounded-xl hover:opacity-90 transition-all font-semibold text-lg shadow-lg shadow-[#18CB96]/20">
              Start Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillingSystem;