import { MdAccessTime, MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { PiGlobe } from "react-icons/pi";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/RCCLogo-White.svg";
import dpoLogo from "../assets/dpo.png"; // Make sure to import the DPO logo

const Footer = () => {
  return (
    <div className="w-full bg-accent mt-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 px-6 lg:px-0 bg-accent max-w-screen-xl w-full mx-auto pt-20 pb-16 text-white/90">
        <div className="lg:col-span-4 flex flex-col">
          <Link to={"/"} className="mb-4">
            <div className="flex items-center gap-2 pb-4 h-20">
              <img className="h-full brightness-200" src={logo} alt="" />
              <h1 className="hidden text-xl lg:block mt-3 font-semibold text-white p-1 ml-2">
                RCC Colab Solutions
              </h1>
            </div>
          </Link>
          <p className="text-sm leading-6 pr-12 mb-4">
            Your trusted partner for personalized IT software and consulting
            solutions, delivering excellence in innovation, quality, and
            service.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-col mt-auto">
            <p className="text-sm font-medium mb-2">Data Privacy Certified</p>
            <div className="flex items-center">
              <img
                src={dpoLogo}
                alt="DPO/DPS Registered"
                className="h-52 object-contain bg-white/90 p-2 rounded-md hover:scale-105 transition-all duration-300"
                title="National Privacy Commission Registered"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="pb-2 text-lg font-semibold cursor-default border-b border-white/20 mb-4">
            Office Address
          </p>
          <ul>
            <li className="leading-7 text-balance flex items-center gap-2">
              7/F Ascott Makati Glorietta 4, Ayala Center San Lorenzo, Makati
              City
            </li>
          </ul>
          <div className="mt-6 pb-1 text-lg font-semibold cursor-default border-b border-white/20 mb-4">
            Social Media
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/company/rcc-colab-solutions-inc/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl leading-7 hover:text-cyan-500 cursor-pointer transition-all duration-300"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61567286702449"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl leading-7 hover:text-cyan-500 cursor-pointer transition-all duration-300"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3 text-nowrap">
          <p className="pb-2 text-lg font-semibold cursor-default border-b border-white/20 mb-4">
            Contact Us
          </p>
          <ul className="text-md">
            <li className="leading-9 flex items-center hover:text-cyan-500 cursor-pointer transition-all duration-300 gap-2">
              <MdOutlinePhone className="text-2xl text-cyan-400" />
              <a href="tel:+632 8651 6572" className="text-md">
                +632 8651 6572
              </a>
            </li>
            <li className="leading-9 flex items-center hover:text-cyan-500 cursor-pointer transition-all duration-300 gap-2">
              <MdOutlineEmail className="text-2xl text-cyan-400" />
              <a href="mailto:info@rcccolabsolutions.com" className="text-md">
                info@rcccolabsolutions.com
              </a>
            </li>
            <li className="leading-9 flex items-center hover:text-cyan-500 cursor-pointer transition-all duration-300 gap-2">
              <PiGlobe className="text-2xl text-cyan-400" />
              <a href="https://rcccolabsolutions.com" className="text-md">
                rcccolabsolutions.com
              </a>
            </li>
            <li className="leading-9 flex items-center gap-2">
              <MdAccessTime className="text-2xl text-cyan-400" />
              <p className="text-md">
                Mon to Fri{" "}
                <span className="text-white/70">(8:00AM-5:00PM)</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-accent/90 backdrop-blur-sm">
        <div className="max-w-screen-xl flex flex-col md:flex-row justify-between items-center text-white/80 cursor-pointer mx-auto border-t md:border-t-2 border-white/20 w-11/12 lg:w-full py-6 px-4">
          <ul className="hidden lg:flex gap-6 mb-4 md:mb-0">
            <li className="hover:underline hover:text-cyan-400 transition-all duration-200">
              <Link to={"termsofuse"}>Terms of Use</Link>
            </li>
            <li className="hover:underline hover:text-cyan-400 transition-all duration-200">
              <Link to={"privacypolicy"}>Privacy Policy</Link>
            </li>
          </ul>
          <p className="text-center md:text-right">
            © 2025 RCC Colab Solutions, Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
