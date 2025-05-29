import {
  MdAccessTime,
  MdOutlineEmail,
  MdOutlinePhone,
  MdLocationOn,
} from "react-icons/md";
import { PiGlobe } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/RCCLogo-White.svg";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-accent mt-auto relative">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaChevronUp size={20} />
        </button>
      )}

      {/* Main footer content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 px-6 lg:px-0 bg-accent max-w-screen-xl w-full mx-auto pt-20 pb-16 text-white/90">
        {/* Company Info Section */}
        <div className="lg:col-span-4">
          <Link to={"/"} className="group">
            <div className="flex items-center gap-2 pb-4 h-20">
              <img
                className="h-full brightness-200 transition-transform duration-300 group-hover:scale-105"
                src={logo}
                alt="RCC Colab Solutions Logo"
              />
              <h1 className="hidden text-xl lg:block mt-3 font-semibold text-white p-1 ml-2 transition-colors duration-300 group-hover:text-cyan-400">
                RCC Colab Solutions
              </h1>
            </div>
          </Link>
          <p className="text-sm leading-6 pr-12 mb-6 text-justify">
            Your trusted partner for personalized IT software and consulting
            solutions, delivering excellence in innovation, quality, and
            service.
          </p>

          {/* Newsletter Signup */}
          <div className="mt-6">
            <h3 className="text-md font-semibold mb-3">Stay Updated</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-gray-900 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Email for newsletter"
              />
              <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="lg:col-span-2">
          <h3 className="pb-2 text-lg font-semibold cursor-default">
            Quick Links
          </h3>
          <nav>
            <ul className="text-md space-y-1">
              <li>
                <Link
                  to={"/"}
                  className="leading-8 hover:text-cyan-400 cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"aboutus"}
                  className="leading-8 hover:text-cyan-400 cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"services"}
                  className="leading-8 hover:text-cyan-400 cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"contactus"}
                  className="leading-8 hover:text-cyan-400 cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
              <li className="lg:hidden block">
                <Link
                  to={"termsofuse"}
                  className="leading-8 hover:text-cyan-400 cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Terms of Use
                </Link>
              </li>
              <li className="lg:hidden block">
                <Link
                  to={"privacypolicy"}
                  className="leading-8 hover:text-cyan-400 cursor-pointer transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Office Address & Social Media Section */}
        <div className="lg:col-span-3">
          <h3 className="pb-2 text-lg font-semibold cursor-default">
            Office Address
          </h3>
          <address className="not-italic mb-6">
            <div className="leading-7 text-balance flex items-start gap-2">
              <MdLocationOn className="text-xl mt-1 text-cyan-400 flex-shrink-0" />
              <span>
                7/F Ascott Makati Glorietta 4, Ayala Center San Lorenzo, Makati
                City, Philippines
              </span>
            </div>
          </address>

          <div className="mt-6">
            <h3 className="pb-3 text-lg font-semibold cursor-default">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/rcc-colab-solutions-inc/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl leading-7 hover:text-cyan-400 cursor-pointer transition-all duration-300 hover:scale-110 p-2 hover:bg-white/10 rounded-full"
                aria-label="Visit our LinkedIn page"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="lg:col-span-3">
          <h3 className="pb-2 text-lg font-semibold cursor-default">
            Get In Touch
          </h3>
          <ul className="text-md space-y-3">
            <li>
              <a
                href="tel:+63286516572"
                className="leading-9 flex items-center hover:text-cyan-400 cursor-pointer transition-all duration-300 gap-3 group"
              >
                <MdOutlinePhone className="text-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-md">+632 8651 6572</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@rcccolabsolutions.com"
                className="leading-9 flex items-center hover:text-cyan-400 cursor-pointer transition-all duration-300 gap-3 group"
              >
                <MdOutlineEmail className="text-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-md break-all">
                  info@rcccolabsolutions.com
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://rcccolabsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-9 flex items-center hover:text-cyan-400 cursor-pointer transition-all duration-300 gap-3 group"
              >
                <PiGlobe className="text-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-md">rcccolabsolutions.com</span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MdAccessTime className="text-xl text-cyan-400" />
              <div className="text-md">
                <div className="font-medium">Business Hours</div>
                <div className="text-white/70 text-sm">
                  Mon - Fri: 8:00 AM - 7:00 PM
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-screen-xl flex flex-col md:flex-row justify-between items-center text-white/80 mx-auto px-6 lg:px-0 py-6 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-sm">
              © 2025 RCC Colab Solutions, Inc. All rights reserved.
            </p>
            <nav className="hidden lg:block">
              <ul className="flex gap-6 text-sm">
                <li>
                  <Link
                    to={"termsofuse"}
                    className="hover:text-cyan-400 hover:underline transition-colors duration-200"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to={"privacypolicy"}
                    className="hover:text-cyan-400 hover:underline transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
