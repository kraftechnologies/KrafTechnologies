import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import logo from "../assets/favicon.png";
import inGrey from "../assets/ingrey.png"; // Replace with actual path
import { supabase } from "../services/supabaseClient";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const socialMediaLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/kraftechnologies",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/kraftechnologies",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "X (formerly Twitter)",
      href: "https://x.com/kraftechnologies",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/kraftechnologies",
      icon: <Facebook className="w-5 h-5" />,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      setMessage("Please accept the Privacy Policy.");
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      // await addDoc(collection(db, "newsletter_subscriptions"), {
      //   email,
      //   timestamp: new Date(),
      // });

      await supabase.from("newsletter_subscriptions").insert({
        email,
        timestamp: new Date(),
      });

      setMessage("Subscription successful! Thank you for signing up.");
      setEmail("");
      setIsChecked(false);
    } catch (error) {
      setMessage("Error subscribing. Please try again later.");
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black text-[#858585]">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-20 border-b border-[#1f1f1f]">
          {/* Newsletter Section */}
          <div className="lg:col-span-5">
            <h2 className="text-white text-2xl font-light mb-8">
              Subscribe to our newsletter for industry insights and company news!
            </h2>
            <form onSubmit={handleSubmit} className="relative mb-6">
              <input
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b border-[#333] px-0 py-2 focus:border-white focus:ring-0 placeholder:text-[#858585] w-full"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 disabled:opacity-50"
              >
                <Mail className="w-5 h-5 text-[#858585]" />
                <span className="text-2xl text-[#858585]">{loading ? "..." : "→"}</span>
              </button>
            </form>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mt-1.5 border-[#333]"
              />
              <label htmlFor="privacy" className="text-sm">
                I agree to the{" "}
                <Link to="/privacy-policy" className="text-white hover:opacity-80">
                  Privacy Policy
                </Link>{" "}
                and give my permission to process my personal data.
              </label>
            </div>
            {message && <p className="text-white mt-4">{message}</p>}
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-white text-lg">About</h3>
              <nav className="space-y-4">
                <Link to="/about" className="block hover:text-white">About us</Link>
                <Link to="/products" className="block hover:text-white">Products</Link>
                <Link to="/services" className="block hover:text-white">Services</Link>
                <Link to="/portfolio" className="block hover:text-white">Portfolio</Link>
                <div className="flex items-center gap-2">
                  <Link to="/careers" className="block hover:text-white">Careers</Link>
                  <span className="text-xs font-medium bg-[#12cb96] text-black px-2 py-1 rounded">
                    WE'RE HIRING
                  </span>
                </div>
                <Link to="/contact-us" className="block hover:text-white">Contact us</Link>
              </nav>
            </div>
            <div className="space-y-6">
              <h3 className="text-white text-lg">Social Media</h3>
              <nav className="space-y-4">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    {social.icon}
                    {social.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Logo and Description */}
            <div className="space-y-8">
              <Link to="/" className="block">
                <img src={logo} alt="Kraf Technologies Logo" className="w-60" />
              </Link>
              <p className="text-sm text-justify">
                At Kraf Technologies, we deliver cutting-edge SaaS solutions for B2B enterprises.
                Our mission is to empower businesses with tools that solve today’s challenges and unlock tomorrow’s opportunities.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 text-sm">
              <p>
                E-mail:{" "}
                <a href="mailto:info@kraftechnologies.com" className="text-white hover:opacity-80">
                  info@kraftechnologies.com
                </a>
              </p>
              <p>
                Team E-mail:{" "}
                <a href="mailto:team@kraftechnologies.com" className="text-white hover:opacity-80">
                  team@kraftechnologies.com
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:+919670269295" className="text-white hover:opacity-80">
                  +91 9670269295
                </a>
              </p>
              <p>
                HQ Office Address:{" "}
                <span className="text-white">
                  400-A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai Commercial Complex,
                  New Delhi 110016, Near Green Park Metro Station Exit-2.
                </span>
              </p>
            </div>
          </div>

          {/* Footer Bottom Row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            {/* Copyright */}
            
            <div className="flex flex-row items-center gap-4">
              <img className="w-auto h-6" alt="InGrey logo" src={inGrey} />
              <div className="text-xs text-[#ffffffcc] space-y-1">
                <p>All copyrights are the property of their respective owners</p>
                <p>Kraf Technologies, All rights reserved © 2025 InGrey Pvt. Ltd.</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 sm:gap-10">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1b98e0] text-[#ffffffcc] transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}