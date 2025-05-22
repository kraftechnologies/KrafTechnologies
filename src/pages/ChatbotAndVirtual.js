import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Bot, Zap, Brain, Shield, BarChart, 
  Clock, Cloud, Server, Lock, Mail, ArrowRight, CheckCircle,
  Terminal, Database, Cpu, Monitor, Smartphone, Phone, ChevronRight
} from 'lucide-react';

const ChatbotPage = () => {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Advanced contextual understanding for human-like conversations"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Omnichannel Support",
      description: "Seamless integration across websites, apps & messaging platforms"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Response",
      description: "24/7 availability with sub-second response times"
    }
  ];

  const integrations = [
    { name: "Slack", icon: <Cloud className="w-12 h-12" /> },
    { name: "WhatsApp", icon: <Smartphone className="w-12 h-12" /> },
    { name: "Web Chat", icon: <Monitor className="w-12 h-12" /> },
    { name: "CRM Systems", icon: <Database className="w-12 h-12" /> }
  ];

  const benefits = [
    {
      title: "30% Cost Reduction",
      description: "Automate routine inquiries and reduce support costs",
      icon: <BarChart className="w-12 h-12" />
    },
    {
      title: "95% Satisfaction",
      description: "Instant resolutions boost customer satisfaction rates",
      icon: <CheckCircle className="w-12 h-12" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-gray-800 px-6 py-2 rounded-full">
              <Bot className="w-5 h-5 text-[#18CB96]" />
              <span className="text-[#18CB96] text-sm">AI Assistant v3.2 Released</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Intelligent <span className="bg-gradient-to-r from-[#18CB96] to-blue-500 bg-clip-text text-transparent">Conversational AI</span><br />
              for Modern Businesses
            </h1>
            <div className="max-w-3xl mx-auto bg-gray-800/50 p-6 rounded-xl">
              <div className="flex gap-4 items-start text-left">
                <Bot className="w-8 h-8 text-[#18CB96] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">How can I help you today?</p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-4 py-2 bg-gray-700 rounded-lg text-sm">Show pricing</span>
                    <span className="px-4 py-2 bg-gray-700 rounded-lg text-sm">Request demo</span>
                    <span className="px-4 py-2 bg-gray-700 rounded-lg text-sm">View features</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-[#18CB96] hover:bg-[#16b585] px-8 py-4 rounded-lg transition-all">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-[#18CB96] text-[#18CB96] hover:bg-[#18CB96]/10 px-8 py-4 rounded-lg transition-all">
                Interactive Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 lg:px-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all group"
              >
                <div className="text-[#18CB96] mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <ChevronRight className="w-6 h-6 text-[#18CB96] mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Platforms */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Seamless Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-gray-900 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-gray-800 transition-all"
              >
                <div className="text-[#18CB96]">{platform.icon}</div>
                <h3 className="text-xl font-semibold">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-gray-900 rounded-xl flex gap-6 items-start"
            >
              <div className="text-[#18CB96] pt-2">{benefit.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Advanced Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-900 rounded-xl border border-[#18CB96]/20"
            >
              <h3 className="text-2xl font-bold mb-4">AI/ML Engine</h3>
              <p className="text-gray-400">Deep learning models trained on millions of conversations</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-900 rounded-xl border border-[#18CB96]/20"
            >
              <h3 className="text-2xl font-bold mb-4">Security Layer</h3>
              <p className="text-gray-400">End-to-end encryption and GDPR compliance</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-900 rounded-xl border border-[#18CB96]/20"
            >
              <h3 className="text-2xl font-bold mb-4">Analytics Suite</h3>
              <p className="text-gray-400">Real-time conversation insights and performance metrics</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-900 rounded-xl"
            >
              <p className="text-gray-300 text-lg mb-4">"The AI assistant reduced our support tickets by 40% while maintaining 98% customer satisfaction."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#18CB96] rounded-full"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-400">CTO at TechCorp</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-900 rounded-xl"
            >
              <p className="text-gray-300 text-lg mb-4">"Implementation was seamless and we saw ROI within the first month of deployment."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#18CB96] rounded-full"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-400">Director of Ops at StartUpX</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Try Our AI Assistant</h2>
                <p className="text-gray-400 mb-8">Experience the power of conversational AI with our interactive demo.</p>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                    <span>Ask about pricing plans</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                    <span>Request feature list</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                    <span>Get implementation guide</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 h-96">
                {/* Chat interface placeholder */}
                <div className="h-full flex items-center justify-center text-gray-400">
                  AI Assistant Interface Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatbotPage;