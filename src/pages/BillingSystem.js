import React from 'react';

const BillingSystem = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-20 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#18CB96] to-blue-400 bg-clip-text text-transparent leading-tight">
            Unify payments, billing,<br />
            and revenue management
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-2xl">
            Improve customer experience, grow recurring revenue, and reduce costs with a single unified platform for payments, subscriptions, invoicing, accounting, tax, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 border-2 border-gray-700 rounded-lg hover:bg-gray-900 transition-all font-medium text-sm lg:text-base">
              Contact Sales
            </button>
            <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium text-sm lg:text-base">
              Start Now
            </button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-12 w-full max-w-2xl h-96 bg-gray-900 rounded-2xl flex flex-col p-8">
          <div className="mb-4 text-lg font-medium">Invoice from Kraft Technologies</div>
          <div className="text-sm text-gray-400 mb-6">Billed to Client Name</div>
          <div className="text-2xl font-bold mb-8">$199.00 due June 1, 2023</div>
          
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 text-center">Card Payment</div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center text-gray-400">Bank Transfer</div>
          </div>
          
          <button className="mt-auto w-full py-3 bg-[#18CB96] text-black rounded-lg font-medium">
            Pay Invoice
          </button>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['Zoom', 'Atlassian', 'Slack', 'Figma'].map((brand, i) => (
              <div key={i} className="text-center text-xl font-medium text-gray-400">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capture Revenue Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-gray-900 text-[#18CB96] px-6 py-2 rounded-full text-sm mb-8 font-medium">
            Capture More Revenue
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            Power any billing model
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-gray-900/30 rounded-2xl p-8 hover:bg-gray-900/50 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-[#18CB96]">Launch new plans quickly</h3>
              <p className="text-gray-400">
                Collect and store payment details including cards, ACH, and other popular payment methods. Easily send invoices and offer discounts and free trials.
              </p>
            </div>
            
            <div className="bg-gray-900/30 rounded-2xl p-8 hover:bg-gray-900/50 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-[#18CB96]">Support any pricing model</h3>
              <p className="text-gray-400">
                Billing logic for everything from per-seat pricing to metered billing is available out of the box. Automate billing and revenue recognition.
              </p>
            </div>
            
            <div className="bg-gray-900/30 rounded-2xl p-8 hover:bg-gray-900/50 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-[#18CB96]">Custom pricing for complex deals</h3>
              <p className="text-gray-400">
                Give sales teams the ability to send quotes, negotiate rates, and automate the collection process. Sync billing data with your systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Visual */}
      <section className="py-20 px-4 sm:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Choose a plan</h3>
            <p className="text-gray-400">Scale from startup to enterprise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div key={i} className={`rounded-xl p-6 ${i === 1 ? 'bg-[#18CB96]/20 border border-[#18CB96]/40' : 'bg-gray-800'}`}>
                <h4 className="text-xl font-medium mb-2">{plan.title}</h4>
                <div className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="text-sm text-gray-400 flex items-center">
                      <span className="mr-2 text-[#18CB96]">✓</span> {feature}
                    </div>
                  ))}
                </div>
                <button className={`w-full py-2 rounded-lg font-medium ${i === 1 ? 'bg-[#18CB96] text-black' : 'bg-gray-700 text-white'}`}>
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reduce Engineering Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-gray-900 text-[#18CB96] px-6 py-2 rounded-full text-sm mb-8 font-medium">
            Reduce Engineering Effort
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            Save time and resources spent on billing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get paid more quickly with pre-built invoices</h3>
              <p className="text-gray-400 text-lg mb-6">
                Our conversion-optimized invoices get paid 3x faster than traditional invoices, making it easy to charge customers around the world.
              </p>
              <button className="px-6 py-3 border-2 border-gray-700 rounded-lg hover:bg-gray-900 transition-all font-medium">
                Try it out
              </button>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="mb-4 text-lg font-medium">Invoice from Kraft Technologies</div>
              <div className="text-sm text-gray-400 mb-6">Billed to Client Name</div>
              <div className="text-2xl font-bold mb-8">$199.00 due June 1, 2023</div>
              <button className="w-full py-3 bg-[#18CB96] text-black rounded-lg font-medium">
                Pay Invoice
              </button>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-900 rounded-2xl p-8 order-2 lg:order-1">
              <div className="p-4 border-b border-gray-800">
                <h4 className="text-lg font-medium mb-2">Billing Portal</h4>
                <p className="text-sm text-gray-400">Update your subscription and payment details</p>
              </div>
              <div className="p-4">
                <div className="mb-6">
                  <h5 className="text-sm text-gray-400 mb-2">Current plan</h5>
                  <div className="text-lg font-medium">Professional Plan</div>
                  <div className="text-sm text-gray-400">$149.00 per month</div>
                </div>
                <button className="w-full py-2 bg-gray-800 text-white rounded-lg font-medium mb-3">
                  Change Plan
                </button>
                <button className="w-full py-2 bg-gray-800 text-white rounded-lg font-medium">
                  Update Payment Method
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold mb-4">Launch a customer portal in minutes</h3>
              <p className="text-gray-400 text-lg mb-6">
                Let customers change their subscription or update billing details with a secure link to your pre-built customer portal. Tailor it with your brand colors.
              </p>
              <button className="px-6 py-3 border-2 border-gray-700 rounded-lg hover:bg-gray-900 transition-all font-medium">
                Try it out
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Automation */}
      <section className="py-20 px-4 sm:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
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
              <div key={i} className="bg-gray-900/50 rounded-2xl p-6 hover:bg-gray-900 transition-all">
                <h3 className="text-xl font-semibold mb-3 text-[#18CB96]">{feature.title}</h3>
                <p className="text-gray-400">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-gray-900 text-[#18CB96] px-6 py-2 rounded-full text-sm mb-8 font-medium">
            Why Choose Our Platform
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
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
              <div key={i} className="bg-gray-900/30 p-8 rounded-2xl hover:bg-gray-900/50 transition-all">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Customer success stories
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="text-xl font-medium mb-6">Enterprise Company</div>
              <p className="text-gray-400 mb-8">
                "Having a billing system that lets you stay nimble to respond to customers' needs is really critical. This platform gives you that flexibility."
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-400">Director of Product</div>
                </div>
                <div className="text-lg font-medium text-gray-400">Enterprise Co.</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="text-xl font-medium mb-6">Tech Innovators Inc.</div>
              <p className="text-gray-400 mb-8">
                "It requires zero effort from our side. Complex billing operations are now handled automatically with perfect accuracy."
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Michael Chen</div>
                  <div className="text-sm text-gray-400">CTO</div>
                </div>
                <div className="text-lg font-medium text-gray-400">Tech Innovators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-[#18CB96]/10 rounded-2xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to get started?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our billing system, or create an account instantly to get started. You can also contact us to design a custom package for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 border-2 border-gray-700 rounded-lg hover:bg-gray-900 transition-all font-medium text-sm lg:text-base">
              Contact Sales
            </button>
            <button className="px-8 py-3.5 bg-[#18CB96] text-black rounded-lg hover:bg-green-400 transition-all font-medium text-sm lg:text-base">
              Start Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillingSystem;
