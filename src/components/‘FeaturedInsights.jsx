import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const articles = [
  {
    category: 'Digital Marketing',
    title: 'How AI is Transforming Influencer Marketing for Maximum Reach',
    description:
      'Nearly 48.7% of brands use AI tools to enhance their influencer marketing campaigns. Discover how AI is revolutionizing brand-audience connections.',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Sarah Lee', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  },
  {
    category: 'eCommerce',
    title: 'Chatbots vs Generative AI: Which is Better for Your eCommerce App?',
    description:
      'About 23% of businesses use chatbots for customer service. Find out which AI solution best fits your eCommerce needs.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
    author: { name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  },
  {
    category: 'Digital Marketing',
    title: 'How to Power Your SEO Content With AI',
    description:
      "SEO is crucial for online success. Learn how AI can supercharge your SEO strategy.",
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Emily Chen', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
  },
  {
    category: 'Technology',
    title: 'The Future of AI in Software Development',
    description:
      'AI is reshaping coding practices. Explore its impact on the future of software engineering.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Michael Brown', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
  },
  {
    category: 'Business',
    title: 'Scaling Startups with Open Innovation',
    description:
      'Collaboration drives growth. See how open innovation can scale your startup.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Lisa Patel', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
  },
  {
    category: 'eCommerce',
    title: 'Personalization in eCommerce: The AI Advantage',
    description:
      'AI-driven personalization boosts sales. Learn how to implement it effectively.',
    image: 'https://images.unsplash.com/photo-1556740738-6b4d6b6b6b6b?auto=format&fit=crop&q=80&w=800',
    author: { name: 'David Kim', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
  },
  {
    category: 'Digital Marketing',
    title: 'Leveraging AI for Social Media Success',
    description:
      'AI tools enhance social media strategies. Discover the latest trends and techniques.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Rachel Adams', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
  },
  {
    category: 'Technology',
    title: 'AI and Cybersecurity: A New Frontier',
    description:
      'AI is transforming cybersecurity. Explore how it protects businesses in the digital age.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Tom Wilson', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
  },
];

function FeaturedInsights() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-jost">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 203, 150, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(24, 203, 150, 0.1) 1px, transparent 1px)`,
            backgroundSize: '2rem 2rem',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400 mb-4 tracking-tight">
              Featured Insights
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Explore Kraf Technologies’ insights on leveraging tech and talent to turn your vision
              into reality.
            </p>
          </div>
          <motion.a
            href="#"
            className="hidden md:flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Over 1000 articles on tech and talent
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>

        {/* Scrollable Articles */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                className="flex-none w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] rounded-xl overflow-hidden bg-gray-900/70 backdrop-blur-md border border-teal-500/30 hover:shadow-teal-500/40 transition-all duration-500"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(24, 203, 150, 0.15), rgba(0, 0, 0, 0.9))',
                }}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-teal-500/90 rounded-full text-sm font-medium text-white">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3 line-clamp-2 group-hover:text-teal-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      src={article.author.image}
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full mr-3 border border-teal-500/50"
                    />
                    <span className="text-gray-300 text-sm font-medium">
                      {article.author.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-teal-500/80 rounded-full shadow-lg hover:bg-teal-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </motion.button>
          <motion.button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-teal-500/80 rounded-full shadow-lg hover:bg-teal-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedInsights;