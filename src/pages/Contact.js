import React, { useState, useRef } from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { db, collection, addDoc } from "../services/firebase";
import useScrollRestoration from '../hooks/useScrollRestoration';

const Contact = () => {
  const containerRef = useScrollRestoration('contact');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "kt_contact"), formData);
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

  return (
    <div className="relative min-h-screen bg-black text-white" ref={containerRef}>
      {/* Background Element */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black to-gray-900"
        style={{
          opacity: 0.9,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          
          {/* Left Column */}
          <div className="text-white md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300 mb-8">
              Want to get in touch? We'd love to hear from you. Here's how you can reach us.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#18CB96]" />
                <a href="tel:+919588746232" className="text-gray-300 hover:text-white transition-colors">
                  +91 9588746232
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#18CB96]" />
                <a href="mailto:info@kraftechnologies.com" className="text-gray-300 hover:text-white transition-colors">
                  info@kraftechnologies.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#18CB96]" />
                <a href="https://maps.app.goo.gl/jkSKJQPSfYv9Nznm9?g_st=ac" className="text-gray-300 hover:text-white transition-colors">
                  11/2, Tech Park, Mohali, Punjab, 160055
                </a>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-6 mt-8">
              <a href="https://www.linkedin.com/company/kraftechnologies/?viewAsMember=true" className="text-gray-400 hover:text-[#18CB96] transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Kraf-Technologies" className="text-gray-400 hover:text-[#18CB96] transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://instagram.com/kraftechnologies" className="text-gray-400 hover:text-[#18CB96] transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-1/2 w-full mt-8 md:mt-0">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-2">Raise a ticket</h2>
              <p className="text-gray-400 mb-6">We will get back to you in 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] h-12 rounded-lg text-white px-4 placeholder-gray-500"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] h-12 rounded-lg text-white px-4 placeholder-gray-500"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] h-12 rounded-lg text-white px-4 placeholder-gray-500"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] h-12 rounded-lg text-white px-4 placeholder-gray-500"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={5} 
                    className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18CB96] rounded-lg text-white p-4 placeholder-gray-500"
                    placeholder="Type a message here"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-[#18CB96] hover:bg-[#16b585] text-black font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
                
                {successMessage && (
                  <div className="mt-4 p-3 bg-[#18CB96]/10 border border-[#18CB96]/30 rounded-lg text-[#18CB96] text-center">
                    {successMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;