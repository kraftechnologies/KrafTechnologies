import React, { useState, useRef, useEffect } from 'react';
import { Instagram, Linkedin, Github, Phone, Mail, MapPin, ChevronDown, ChevronUp, User, MessageSquare, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across multiple sectors including finance, healthcare, e-commerce, education, and logistics. Our team adapts to industry-specific requirements to deliver tailored solutions."
    },
    {
      question: "How quickly do you respond to support requests?",
      answer: "Our standard response time is within 24 hours for all support requests. For critical issues, we provide emergency support with response times under 4 hours."
    },
    {
      question: "Do you offer ongoing maintenance packages?",
      answer: "Yes, we offer tiered maintenance packages that include regular updates, security patches, performance monitoring, and priority support. Packages start at $299/month."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity. Small projects typically take 4-6 weeks, medium projects 8-12 weeks, and enterprise solutions 16+ weeks. We provide detailed timelines during the proposal phase."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security practices including encryption, secure coding standards, regular security audits, and compliance with GDPR and other data protection regulations."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechNova",
      content: "Kraf Technologies delivered our enterprise platform ahead of schedule. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Director at FinSecure",
      content: "Working with Kraf was a game-changer for our mobile app development. They brought innovative solutions to complex technical challenges.",
      rating: 4
    },
    {
      name: "Emma Rodriguez",
      role: "Operations Manager at HealthFirst",
      content: "The custom CRM solution they built has streamlined our operations by 40%. Their support team is responsive and knowledgeable.",
      rating: 5
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccessMessage("Message sent successfully! We will get back to you soon.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="py-24 px-4 text-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch With Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or ready to start your next project? Our team is here to help you achieve your digital goals.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl h-full">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#18CB96]/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#18CB96]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:+919588746232" className="text-gray-300 hover:text-white transition-colors block mt-1">
                      +91 9588746232
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#18CB96]/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#18CB96]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:info@kraftechnologies.com" className="text-gray-300 hover:text-white transition-colors block mt-1">
                      info@kraftechnologies.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#18CB96]/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#18CB96]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <a href="https://maps.app.goo.gl/jkSKJQPSfYv9Nznm9?g_st=ac" className="text-gray-300 hover:text-white transition-colors block mt-1">
                      400-A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai Commercial Complex, New Delhi 110016, Near Green Park Metro Station Exit-2
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/kraftechnologies/?viewAsMember=true" className="bg-gray-700 hover:bg-[#18CB96] p-3 rounded-full transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/Kraf-Technologies" className="bg-gray-700 hover:bg-[#18CB96] p-3 rounded-full transition-colors" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://instagram.com/kraftechnologies" className="bg-gray-700 hover:bg-[#18CB96] p-3 rounded-full transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-400">Have a question or want to work together? Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      id="firstName"
                      value={formData.firstName} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] focus:ring-1 focus:ring-[#18CB96] h-12 rounded-lg text-white px-4 placeholder-gray-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      id="lastName"
                      value={formData.lastName} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] focus:ring-1 focus:ring-[#18CB96] h-12 rounded-lg text-white px-4 placeholder-gray-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email"
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] focus:ring-1 focus:ring-[#18CB96] h-12 rounded-lg text-white px-4 placeholder-gray-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone"
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] focus:ring-1 focus:ring-[#18CB96] h-12 rounded-lg text-white px-4 placeholder-gray-500 transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                  <textarea 
                    name="message" 
                    id="message"
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={5} 
                    className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] focus:ring-1 focus:ring-[#18CB96] rounded-lg text-white p-4 placeholder-gray-500 transition-colors"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-gradient-to-r from-[#18CB96] to-[#0f9] hover:from-[#16b585] hover:to-[#0d8] text-black font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center"
                >
                  {loading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {loading ? "Sending..." : "Send Message"}
                </button>
                
                {successMessage && (
                  <div className="mt-4 p-4 bg-[#18CB96]/10 border border-[#18CB96]/30 rounded-lg text-[#18CB96] text-center">
                    <div className="font-medium">{successMessage}</div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 max-w-4xl mx-auto relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-gradient-to-br from-[#18CB96] to-[#0f9] p-1 rounded-full w-24 h-24 flex-shrink-0">
                <div className="bg-gray-900 rounded-full w-full h-full flex items-center justify-center">
                  <User className="text-[#18CB96] w-10 h-10" />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-xl italic mb-4">"{testimonials[currentTestimonial].content}"</p>
                
                <div>
                  <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="bg-gray-700 hover:bg-[#18CB96] p-2 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-[#18CB96]' : 'bg-gray-600'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="bg-gray-700 hover:bg-[#18CB96] p-2 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services, processes, and support.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-700/30 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="text-[#18CB96] w-5 h-5" />
                  ) : (
                    <ChevronDown className="text-gray-400 w-5 h-5" />
                  )}
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Let's discuss how we can help you achieve your business goals with our technical expertise.
          </p>
          <a 
            href="#contact-form" 
            className="inline-block bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-24 w-full h-[500px] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
        <iframe 
          src="https://maps.app.goo.gl/hn5sAjSeahk8rg9f8"
          width="100%" 
          height="100%" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale"
        ></iframe>
        
        <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-sm p-6 rounded-xl max-w-sm border border-gray-700 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-6 w-6 text-[#18CB96]" />
            <h3 className="text-xl font-bold">Our Office</h3>
          </div>
          <p className="text-gray-300">
            11/2, Tech Park, Mohali, Punjab, 160055
          </p>
          <p className="text-gray-400 mt-2">
            Open Monday to Friday, 9:00 AM to 6:00 PM
          </p>
        </div>
      </div>
      
     
    </div>
  );
}

export default Contact;
