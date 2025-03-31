import React, { useState, useRef } from 'react';
import { Phone, Mail, MessageSquare, Trophy, Users, Building2, Rocket, Heart, Upload, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../services/supabaseClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

function BookFreeConsultation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    phone: '',
    brief: '',
    files: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const sanitizeFileName = (fileName) =>
    fileName
      .replace(/[^a-zA-Z0-9.-]/g, '_')
      .replace(/\s+/g, '_')
      .replace(/_+/g, '_');

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (fileInputRef.current) {
      fileInputRef.current.files = files;
      setFormData((prev) => ({ ...prev, files }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData((prev) => ({ ...prev, files }));
  };

  const sendConfirmationEmail = async () => {
    const emailParams = {
      to_email: formData.email,
      full_name: formData.fullName,
      country: formData.country,
      phone: formData.phone,
      project_brief: formData.brief,
    };

    try {
      const result = await emailjs.send('service_oh34q42', 'template_lr3cssi', emailParams, 'FG0nWkLd_43JaXqVE');
      console.log('EmailJS response:', result);
      toast.success('Confirmation email sent successfully!');
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send confirmation email: ' + error.text);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const requiredFields = ['fullName', 'email', 'country', 'phone', 'brief'];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      toast.error(`Please fill all required fields: ${missingFields.join(', ')}`);
      setSubmitting(false);
      return;
    }

    let fileUrl = '';
    if (formData.files && formData.files.length > 0) {
      setUploading(true);
      const file = formData.files[0];
      const sanitizedFileName = sanitizeFileName(file.name);
      const filePath = `consultation/${Date.now()}_${sanitizedFileName}`;

      try {
        const { error: uploadError } = await supabase.storage.from('consultation').upload(filePath, file);
        if (uploadError) {
          throw new Error(`File upload failed: ${uploadError.message}`);
        }
        fileUrl = supabase.storage.from('consultation').getPublicUrl(filePath).data.publicUrl;
      } catch (error) {
        console.error('Upload error:', error);
        toast.error(error.message);
        setUploading(false);
        setSubmitting(false);
        return;
      }
      setUploading(false);
    }

    const submissionData = {
      full_name: formData.fullName,
      email: formData.email,
      country: formData.country,
      phone: formData.phone,
      project_brief: formData.brief,
      file_url: fileUrl || null,
      submitted_at: new Date().toISOString(),
    };

    try {
      const { error: insertError } = await supabase.from('consultations').insert([submissionData]);
      if (insertError) {
        throw new Error(`Submission failed: ${insertError.message}`);
      }
      await sendConfirmationEmail();
      toast.success('Consultation request submitted successfully!');
      setFormData({ fullName: '', email: '', country: '', phone: '', brief: '', files: null });
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <ToastContainer position="top-right" autoClose={5000} />
      {/* Left Panel */}
      <div className="w-full md:w-5/12 bg-gradient-to-b from-black to-[#18cb96]/10 p-6 md:p-8 text-white flex flex-col min-h-screen md:min-h-0">
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mb-8 md:mb-12">
          <a href="tel:+919670269295" className="flex items-center space-x-2 hover:text-[#18cb96] transition-colors underline decoration-dotted">
            <Phone className="w-5 h-5" />
            <span>Book A Call</span>
          </a>
          <a href="https:a.me/919670269295" className="flex items-center space-x-2 hover:text-[#18cb96] transition-colors underline decoration-dotted" target="_blank">
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
          <a href="mailto:info@kraftechnologies.com" className="flex items-center space-x-2 hover:text-[#18cb96] transition-colors underline decoration-dotted">
            <Mail className="w-5 h-5" />
            <span>Email Us</span>
          </a>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mb-6">Trusted by Industry Leaders</h2>

        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
          <div className="flex items-start space-x-4 group">
            <Trophy className="w-8 md:w-10 h-8 md:h-10 p-2 bg-[#18cb96]/20 rounded-lg group-hover:bg-[#18cb96]/30 transition-colors" />
            <div>
              <h3 className="text-lg md:text-xl font-bold">3+ Years of Excellence</h3>
              <p className="text-gray-200 text-sm md:text-base">Providing cutting-edge solutions for businesses of all sizes.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 group">
            <Users className="w-8 md:w-10 h-8 md:h-10 p-2 bg-[#18cb96]/20 rounded-lg group-hover:bg-[#18cb96]/30 transition-colors" />
            <div>
              <h3 className="text-lg md:text-xl font-bold">250+ Satisfied Clients</h3>
              <p className="text-gray-200 text-sm md:text-base">Serving startups and enterprises with innovation and precision.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 group">
            <Building2 className="w-8 md:w-10 h-8 md:h-10 p-2 bg-[#18cb96]/20 rounded-lg group-hover:bg-[#18cb96]/30 transition-colors" />
            <div>
              <h3 className="text-lg md:text-xl font-bold">80+ Expert Professionals</h3>
              <p className="text-gray-200 text-sm md:text-base">A highly skilled team committed to driving success.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 group">
            <Rocket className="w-8 md:w-10 h-8 md:h-10 p-2 bg-[#18cb96]/20 rounded-lg group-hover:bg-[#18cb96]/30 transition-colors" />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Innovative & Scalable Solutions</h3>
              <p className="text-gray-200 text-sm md:text-base">Empowering businesses with technology-driven growth.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 group">
            <Heart className="w-8 md:w-10 h-8 md:h-10 p-2 bg-[#18cb96]/20 rounded-lg group-hover:bg-[#18cb96]/30 transition-colors" />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Client-Centric Approach</h3>
              <p className="text-gray-200 text-sm md:text-base">Delivering customized solutions tailored to your unique needs.</p>
            </div>
          </div>
        </div>

        <div className="mt-auto text-center md:text-left">
          <p className="text-sm md:text-base text-gray-300" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Powered By Department of Research and Innovation - KT
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-7/12 p-6 md:p-8 bg-[#121212] text-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Book a Free Consultation</h1>
          <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">Get a response within 1 business hours.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-[#18cb96] transition-all peer"
                  placeholder=" "
                />
                <label
                  htmlFor="fullName"
                  className="absolute left-3 -top-2.5 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#18cb96]"
                >
                  Full Name*
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-[#18cb96] transition-all peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-2.5 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#18cb96]"
                >
                  Email Address*
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-[#18cb96] transition-all peer"
                  placeholder=" "
                />
                <label
                  htmlFor="country"
                  className="absolute left-3 -top-2.5 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#18cb96]"
                >
                  Country*
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-[#18cb96] transition-all peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 -top-2.5 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#18cb96]"
                >
                  Phone Number*
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="brief"
                name="brief"
                rows={4}
                value={formData.brief}
                onChange={handleInputChange}
                className="w-full bg-[#1e1e1e] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-[#18cb96] transition-all peer"
                placeholder=" "
              />
              <label
                htmlFor="brief"
                className="absolute left-3 -top-2.5 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#18cb96]"
              >
                Project Brief*
              </label>
            </div>

            <div
              className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center cursor-pointer hover:border-[#18cb96] transition-all bg-[#1e1e1e]"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-400">
                {uploading
                  ? 'Uploading...'
                  : formData.files
                  ? `${formData.files.length} file(s) selected`
                  : 'Drag and drop files here or click to browse (Optional)'}
              </p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple
                disabled={uploading || submitting}
              />
            </div>

            <button
              type="submit"
              disabled={submitting || uploading}
              className="w-full bg-[#18cb96] text-black py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#16b585] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting || uploading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Enquire Now</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookFreeConsultation;

