import React from 'react';
import { Helmet } from 'react-helmet';

const PaymentGateway = () => {
  return (
    <div className="payment-gateway-page">
      <Helmet>
        <title>Payment Gateway Solutions | Polystic</title>
        <meta name="description" content="Secure, reliable payment gateway solutions for businesses of all sizes. Integrate seamless payment processing with enterprise-grade security." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-[#121212] to-[#1a1a1a] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Secure <span className="text-[#12cb96] hover:text-[#0ea87a] transition-colors duration-300">Payment Gateway</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Streamline your payment processing with our secure, reliable, and scalable payment gateway solutions designed for modern businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#12cb96] hover:bg-[#0ea87a] text-[#121212] font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-[#12cb96]/40 transform hover:-translate-y-1">
                  Get Started
                </button>
                <button className="border border-[#12cb96] text-[#12cb96] hover:bg-[#12cb96]/10 font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-[#12cb96]/30 transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/assets/images/payment-gateway-hero.svg" 
                alt="Secure Payment Gateway" 
                className="w-full h-auto drop-shadow-2xl hover:drop-shadow-[0_10px_15px_rgba(18,203,150,0.3)]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/600x400?text=Secure+Payment+Gateway";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl text-gray-400 mb-8">Trusted by leading companies worldwide</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Visa', 'Mastercard', 'American Express', 'PayPal', 'Stripe'].map((partner, i) => (
              <div key={i} className="text-gray-300 text-xl font-semibold opacity-70 hover:opacity-100 hover:text-[#12cb96] transition-all transform hover:scale-110 cursor-pointer">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white hover:text-[#12cb96] transition-colors duration-300">
              Comprehensive Payment Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our payment gateway provides everything you need to process payments securely and efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Bank-Grade Security",
                description: "PCI DSS Level 1 certified with end-to-end encryption and tokenization to protect sensitive payment data."
              },
              {
                icon: "🌐",
                title: "Global Payment Processing",
                description: "Accept payments in multiple currencies from customers around the world with localized payment methods."
              },
              {
                icon: "⚡",
                title: "Fast Integration",
                description: "Simple API integration with comprehensive documentation and developer support."
              },
              {
                icon: "📊",
                title: "Real-time Analytics",
                description: "Monitor transactions, track performance, and gain insights with our powerful dashboard."
              },
              {
                icon: "🛡️",
                title: "Fraud Prevention",
                description: "Advanced AI-powered fraud detection systems to protect your business and customers."
              },
              {
                icon: "💼",
                title: "Business Solutions",
                description: "Customizable solutions for businesses of all sizes, from startups to enterprises."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 rounded-lg hover:shadow-lg hover:shadow-[#12cb96]/20 transition-all transform hover:-translate-y-2 hover:border-[#12cb96]/30 border border-transparent">
                <div className="text-3xl mb-4 transform hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white hover:text-[#12cb96] transition-colors">{feature.title}</h3>
                <p className="text-gray-400 hover:text-gray-300 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white hover:text-[#12cb96] transition-colors duration-300">
              How Our Payment Gateway Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A seamless process designed for security and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Customer Checkout",
                description: "Customer enters payment details on your secure checkout page"
              },
              {
                step: "2",
                title: "Secure Processing",
                description: "Payment data is encrypted and securely transmitted to our gateway"
              },
              {
                step: "3",
                title: "Verification",
                description: "Transaction is verified and authenticated with fraud checks"
              },
              {
                step: "4",
                title: "Completion",
                description: "Payment is processed and funds are transferred to your account"
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#12cb96]/30 h-full hover:shadow-xl hover:shadow-[#12cb96]/20 transition-all transform hover:-translate-y-2">
                  <div className="bg-[#12cb96] text-[#121212] w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4 transform hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white hover:text-[#12cb96] transition-colors">{step.title}</h3>
                  <p className="text-gray-400 hover:text-gray-300 transition-colors">{step.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-[#12cb96] animate-pulse text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white hover:text-[#12cb96] transition-colors duration-300">
              Supported Payment Methods
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Offer your customers flexibility with a wide range of payment options
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Credit Cards', 'Debit Cards', 'Digital Wallets', 'Bank Transfers', 'Cryptocurrency', 'Mobile Payments', 'Buy Now Pay Later', 'QR Payments', 'UPI', 'Net Banking', 'Gift Cards', 'Loyalty Points'].map((method, i) => (
              <div key={i} className="bg-[#1a1a1a] p-4 rounded-lg text-center hover:bg-[#1a1a1a]/70 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#12cb96]/20 border border-transparent hover:border-[#12cb96]/30">
                <div className="text-2xl mb-2 transform hover:scale-110 transition-transform">💳</div>
                <h3 className="text-sm font-medium text-white hover:text-[#12cb96] transition-colors">{method}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white hover:text-[#12cb96] transition-colors duration-300">
                Enterprise-Grade Security for Your Business
              </h2>
              <p className="text-gray-400 mb-8 hover:text-gray-300 transition-colors">
                Our payment gateway employs multiple layers of security to protect your business and customers from fraud and data breaches.
              </p>
              
              <div className="space-y-4">
                {[
                  "PCI DSS Level 1 Compliance",
                  "End-to-end Encryption",
                  "Tokenization",
                  "3D Secure Authentication",
                  "AI-powered Fraud Detection",
                  "Real-time Monitoring"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 hover:bg-[#1a1a1a]/70 p-2 rounded-md transition-all transform hover:translate-x-2">
                    <div className="text-[#12cb96] animate-pulse">✓</div>
                    <span className="text-white hover:text-[#12cb96] transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#121212] p-8 rounded-lg border border-[#12cb96]/20 hover:shadow-2xl hover:shadow-[#12cb96]/20 transition-all transform hover:-translate-y-2">
                <div className="bg-[#12cb96]/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 hover:bg-[#12cb96]/20 transition-colors transform hover:scale-110">
                  <span className="text-4xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white text-center hover:text-[#12cb96] transition-colors">PCI DSS Level 1 Certified</h3>
                <p className="text-gray-400 text-center hover:text-gray-300 transition-colors">
                  The highest level of payment security certification, ensuring your customers' data is protected with industry-leading standards and practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#222222] p-12 rounded-2xl border border-[#12cb96]/20 hover:shadow-2xl hover:shadow-[#12cb96]/20 transition-all transform hover:-translate-y-1">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white hover:text-[#12cb96] transition-colors duration-300">
                Ready to Transform Your Payment Experience?
              </h2>
              <p className="text-gray-300 mb-8 text-lg hover:text-white transition-colors">
                Join thousands of businesses that trust our secure payment gateway solutions. Get started today and see the difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#12cb96] hover:bg-[#0ea87a] text-[#121212] font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-[#12cb96]/40 transform hover:-translate-y-1">
                  Start Free Trial
                </button>
                <button className="border border-[#12cb96] text-[#12cb96] hover:bg-[#12cb96]/10 font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-[#12cb96]/30 transform hover:-translate-y-1">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white hover:text-[#12cb96] transition-colors duration-300">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about our payment gateway solutions
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How secure is your payment gateway?",
                answer: "Our payment gateway is PCI DSS Level 1 certified, employing end-to-end encryption, tokenization, and advanced fraud detection systems to ensure the highest level of security for all transactions."
              },
              {
                question: "How long does integration take?",
                answer: "Integration time varies depending on your platform and requirements, but most businesses can integrate our payment gateway within 1-3 days using our comprehensive API documentation and developer support."
              },
              {
                question: "What payment methods do you support?",
                answer: "We support a wide range of payment methods including credit/debit cards, digital wallets, bank transfers, cryptocurrency, mobile payments, and more to provide flexibility for your customers."
              },
              {
                question: "How are transaction fees structured?",
                answer: "We offer transparent pricing with competitive transaction fees based on your business volume and requirements. Contact our sales team for a customized quote tailored to your needs."
              },
              {
                question: "Do you provide international payment processing?",
                answer: "Yes, our payment gateway supports international transactions in multiple currencies, allowing you to accept payments from customers worldwide with localized payment methods."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-[#1a1a1a] p-6 rounded-lg hover:shadow-xl hover:shadow-[#12cb96]/20 transition-all transform hover:-translate-y-1 border border-transparent hover:border-[#12cb96]/30">
                <h3 className="text-xl font-bold mb-3 text-white hover:text-[#12cb96] transition-colors">{faq.question}</h3>
                <p className="text-gray-400 hover:text-gray-300 transition-colors">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentGateway;