import React from 'react';

const Ecommerce = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
  {/* Hero Section */}
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      {/* Left Content */}
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="text-3xl font-medium text-[#12cb96]">Ecommerce</h2>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Your products are unique. Your store should be too.
          </h1>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed">
          Push the limits of web design and create unique commerce experiences
          for your customers — all while building a business, creating a new revenue stream,
          and strengthening your brand. Shape the customer experience every step of the way,
          without writing a single line of code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-[#12cb96] hover:bg-teal-600 text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105">
            Get started — It's free
          </button>
          <button className="px-8 py-4 border border-gray-600 hover:border-[#12cb96] text-gray-300 hover:text-[#12cb96] font-medium rounded-lg transition duration-200">
            Learn more about ecommerce
          </button>
        </div>
      </div>

      {/* Right Product Cards */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Product Card 1 */}
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/10 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907"
            alt="Toast Coffee"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-semibold text-white">Toast® Coffee 24 OZ.</h3>
          <p className="text-gray-400 mt-2">African Arabian blend</p>
        </div>

        {/* Product Card 2 */}
        <div className="bg-gradient-to-br from-orange-500 to-[#12cb96] p-6 rounded-2xl hover:shadow-xl transition duration-300">
          <div className="bg-black/10 inline-block px-3 py-1 rounded-full">
            <p className="text-sm font-bold uppercase">Super—Sale</p>
          </div>
          <h3 className="text-xl font-bold mt-4">All-Terrain Comfort Shoes</h3>
          <p className="mt-2">
            From <span className="line-through opacity-75">$170</span>
            <span className="text-2xl font-bold ml-2">$140</span>
          </p>
          <button className="mt-6 w-full bg-black/20 hover:bg-black/30 px-6 py-3 rounded-xl font-medium transition duration-200">
            + Add to cart
          </button>
        </div>

        {/* Product Card 3 */}
        <div className="col-span-1 sm:col-span-2 bg-gradient-to-r from-orange-400 to-orange-500 p-6 rounded-2xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold">6 Months</p>
              <p className="text-lg font-medium mt-2">
                Gym Subscription <span className="text-black/60">Silver</span>
              </p>
            </div>
            <div className="bg-black/20 h-16 w-16 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏋️</span>
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="col-span-1 sm:col-span-2 bg-white/5 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/10 transition duration-300">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Ceremonie Mohair Chair</h3>
              <p className="text-gray-400 mt-3">Faux leather, and dark mahogany...</p>
              <p className="text-2xl font-semibold mt-4">$499</p>
            </div>
            <div className="flex-1">
              <img
                src="https://princeseating.furniture/cdn/shop/products/doohan-20pr956sw-1_580x.jpg?v=1580937230"
                alt="Mohair Chair"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* Section: Design your store */}
    <div className="bg-white text-black py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <h1 className="text-[52px] font-bold leading-tight tracking-tight">Design</h1>
        <h2 className="text-[32px] font-medium leading-snug mt-2">
          your store, your way — <span className="font-bold">without coding</span>
        </h2>

        {/* Two-column layout */}
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Left Text Block */}
          <div>
            <h3 className="text-[28px] font-semibold leading-snug">Create end-to-end customer experiences</h3>
            <p className="text-gray-500 text-[18px] mt-3 leading-relaxed">
              Create pixel-perfect, branded purchase flows for your customers. Our intuitive drag-and-drop builder lets you design beautiful storefronts with ease.
            </p>
            <div className="mt-6">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Start Building
              </button>
            </div>
          </div>

          {/* Right Quote Block */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <p className="text-[18px] font-medium leading-relaxed italic">
              "Our ecommerce platform enabled us to increase sales by 300% in the first quarter. The customization options are endless and the interface is incredibly intuitive."
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#12cb96] to-purple-500"/>
              </div>
              <div>
                <p className="font-semibold text-[15px]">Sarah Chen</p>
                <p className="text-gray-500 text-[14px]">CEO, StyleHub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
              <div className="text-white text-2xl">🎨</div>
            </div>
            <h4 className="font-semibold mb-2">Custom Design</h4>
            <p className="text-gray-500 text-sm">Build your unique brand identity</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
              <div className="text-white text-2xl">📱</div>
            </div>
            <h4 className="font-semibold mb-2">Mobile-First</h4>
            <p className="text-gray-500 text-sm">Optimized for all devices</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
              <div className="text-white text-2xl">⚡</div>
            </div>
            <h4 className="font-semibold mb-2">Fast Loading</h4>
            <p className="text-gray-500 text-sm">Lightning quick performance</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
              <div className="text-white text-2xl">🔒</div>
            </div>
            <h4 className="font-semibold mb-2">Secure</h4>
            <p className="text-gray-500 text-sm">Enterprise-grade security</p>
          </div>
        </div>
      </div>
    </div>

{/* Section: Complete layout control */}
<div className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 md:px-20 font-sans">
  <div className="max-w-7xl mx-auto">
    {/* Headline and Subheading */}
    <h2 className="text-[40px] md:text-[48px] font-bold leading-tight tracking-tight bg-gradient-to-r from-[#12cb96] to-teal-400 bg-clip-text text-transparent">
      Complete Layout Control<br />
      <span className="font-normal">Without Writing Code</span>
    </h2>
    <p className="text-gray-300 text-[18px] mt-4 max-w-xl">
      Create immersive web3-ready storefronts with our intuitive drag-and-drop builder. Full customization with zero coding required.
    </p>

    {/* Grid: Left content & Right quote */}
    <div className="mt-12 grid md:grid-cols-2 gap-10">
      <div className="hidden md:block"></div>

      {/* Testimonial */}
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/10 transition duration-300">
        <p className="text-[18px] font-medium leading-relaxed text-gray-200">
          "The platform enabled us to build a next-gen NFT marketplace with stunning animations and Web3 integrations. The visual builder is revolutionary."
        </p>
        <div className="flex items-center gap-3 mt-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#12cb96] to-teal-500"></div>
          <div>
            <p className="font-semibold text-[15px] text-white">Alex Thompson</p>
            <p className="text-gray-400 text-[14px]">CTO, MetaVerse Labs</p>
          </div>
        </div>
      </div>
    </div>

    {/* Visual Image */}
    <div className="mt-12">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-1">
        <img
          src="https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg"
          alt="Layout Builder Preview"
          className="w-full rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
    </div>
  </div>
</div>

{/* Section: Sell all types of products */}
<div className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 md:px-20 font-sans">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    
    {/* Left Side: Text Content */}
    <div>
      <h2 className="text-[48px] font-bold leading-tight tracking-tight">
        <span className="bg-gradient-to-r from-[#12cb96] to-teal-400 bg-clip-text text-transparent">Sell Digital Assets</span><br />
        <span className="font-normal text-white">& Physical Products</span>
      </h2>

      <div className="mt-10">
        <h3 className="text-[22px] font-semibold text-[#12cb96]">Web3-Ready Commerce Platform</h3>
        <p className="text-gray-300 mt-2 text-[16px] max-w-md">
          From NFTs to physical merchandise — create a seamless shopping experience for both digital and traditional commerce.
        </p>
        <ul className="mt-4 space-y-3">
          {['Smart contract integration', 'Multi-chain support', 'Fiat & crypto payments'].map((item) => (
            <li key={item} className="flex items-center gap-3 text-gray-200">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonial */}
      <div className="mt-10 bg-white/5 backdrop-blur-lg p-6 rounded-xl">
        <p className="text-[17px] text-gray-200 leading-relaxed">
          "The platform's ability to handle both NFT drops and physical merchandise has been game-changing for our brand..."
        </p>
      </div>
    </div>

    {/* Right Side: Product Images */}
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
      <div className="relative bg-black rounded-xl overflow-hidden">
        <img
          src="https://i.pinimg.com/originals/17/10/a6/1710a63f7a539f687538ea729e94d1b6.png"
          alt="Digital Assets Showcase"
          className="w-full transform transition duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </div>
</div>



<div className="bg-gradient-to-b from-gray-50 to-white text-black px-6 py-20 md:px-20 font-sans">
  {/* Header */}
  <div className="max-w-7xl mx-auto">
    <h2 className="text-[40px] md:text-[56px] font-bold mb-4">Platform Comparison</h2>
    <p className="text-gray-600 text-xl mb-12 max-w-2xl">See how we stack up against other ecommerce platforms and find the perfect solution for your business.</p>

    {/* Table container */}
    <div className="overflow-auto rounded-xl border border-gray-200 bg-white shadow-lg">
      <table className="w-full table-auto border-separate border-spacing-y-4 text-left text-[16px]">
        <thead className="bg-gray-50">
          <tr className="text-center">
            <th className="w-[180px] px-6 py-4"></th>
            <th className="px-6 py-4">
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">🛍️</span>
                <span className="text-[#12cb96] font-semibold">Recommended</span>
              </div>
            </th>
            <th className="px-6 py-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl">🏪</span>
                <span>Shopify</span>
              </div>
            </th>
            <th className="px-6 py-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl">⬜</span>
                <span>Squarespace</span>
              </div>
            </th>
            <th className="px-6 py-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl">🛒</span>
                <span>WooCommerce</span>
              </div>
            </th>
            <th className="px-6 py-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl">🏢</span>
                <span>BigCommerce</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 font-semibold">Entry pricing</td>
            <td className="px-6 py-4 text-[#12cb96] font-medium">$29/month</td>
            <td className="px-6 py-4">$29/month</td>
            <td className="px-6 py-4">$26/month</td>
            <td className="px-6 py-4">Depends on hosting</td>
            <td className="px-6 py-4">$29.95/month</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 font-semibold">Transaction fee</td>
            <td className="px-6 py-4 text-[#12cb96] font-medium">0–2%</td>
            <td className="px-6 py-4">0–2%</td>
            <td className="px-6 py-4">0%</td>
            <td className="px-6 py-4">Varies by gateway</td>
            <td className="px-6 py-4">0%</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Feature comparison sections */}
    <div className="mt-12 space-y-4 max-w-4xl mx-auto">
      {[
        {
          label: 'Design and customization',
          description: 'Complete design freedom with responsive layouts and custom animations'
        },
        {
          label: 'Marketing and SEO tools',
          description: 'Built-in SEO tools, email marketing, and social media integration'
        },
        {
          label: 'Payment processing',
          description: 'Support for 100+ payment gateways and cryptocurrencies'
        },
        {
          label: 'Product management',
          description: 'Advanced inventory tracking and variant management'
        },
        {
          label: 'Store administration',
          description: 'Intuitive dashboard with real-time analytics and reporting'
        },
        {
          label: 'Shipping solutions',
          description: 'Integration with major carriers and automated shipping rules'
        },
        {
          label: 'Tax compliance',
          description: 'Automated tax calculations and reporting for global commerce'
        }
      ].map((section, idx) => (
        <div key={idx} 
          className="border border-gray-200 rounded-lg p-6 hover:border-[#12cb96] hover:shadow-md transition-all cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-xl">{section.label}</h3>
              <p className="text-gray-600 mt-1">{section.description}</p>
            </div>
            <span className="text-2xl text-[#12cb96]">→</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </div>
  );
};

export default Ecommerce;
