import { MdAccessTime, MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { PiGlobe } from "react-icons/pi";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/RCCLogo-White.svg";

const Footer = () => {
  return (
    <div className="w-full bg-accent mt-auto  ">
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8  px-6 lg:px-0 bg-accent max-w-screen-xl w-full mx-auto pt-20 pb-16 text-white/90">
        <Link to={"/"} className="lg:col-span-4">
          <div className="flex items-center gap-2 pb-4 h-20">
            <img className="h-full brightness-200" src={logo} alt="" />
            <h1 className="hidden text-xl lg:block mt-3 font-semibold text-white p-1 ml-2">
              RCC Colab Solutions
            </h1>
          </div>
          <p className="text-sm leading-6 pr-12">
            Your trusted partner for personalized IT software and consulting
            solutions, delivering excellence in innovation, quality, and
            service.
          </p>
         
        </Link>
        <div className="lg:col-span-2">
          <p className="pb-2 text-lg font-semibold cursor-default">
            Quick Links
          </p>
          <ul className="text-md">
            <li className="leading-8 hover:text-cyan-500 cursor-pointer transition-all duration-200">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="leading-8 hover:text-cyan-500 cursor-pointer transition-all duration-200">
              <Link to={"aboutus"}>About Us</Link>
            </li>
            <li className="leading-8 hover:text-cyan-500 cursor-pointer transition-all duration-200">
              <Link to={"services"}>Services</Link>
            </li>
           
            <li className="leading-8 hover:text-cyan-500 cursor-pointer transition-all duration-200">
              <Link to={"contactus"}>Contact</Link>
            </li>
            <li className="lg:hidden block leading-8 hover:text-emerald-500 cursor-pointer transition-all duration-200">
              <Link to={"termsofuse"}>Terms of Use</Link>
            </li>
            <li className="lg:hidden block leading-8 hover:text-emerald-500 cursor-pointer transition-all duration-200">
              <Link to={"privacypolicy"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="pb-2 text-lg font-semibold cursor-default">
            Office Address
          </p>
          <ul>
            <li className="leading-7 text-balance flex items-center gap-2">
              7/F Ascott Makati Glorietta 4, Ayala Center San Lorenzo, Makati
              City
            </li>
          </ul>
          <div className="mt-4 pb-1 text-lg font-semibold cursor-default">
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
          <p className="pb-2 text-lg font-semibold cursor-default">
            Contact Us
          </p>
          <ul className="text-md">
            <li className="leading-9 flex items-center hover:text-cyan-500 cursor-pointer transition-all duration-300 gap-2">
              <MdOutlinePhone className="text-2xl" />
              <a href="tel:+632 8651 6572" className="text-md">
                +632 8651 6572
              </a>
            </li>
            <li className="leading-9 flex items-center hover:text-cyan-500 cursor-pointer transition-all duration-300 gap-2">
              <MdOutlineEmail className="text-2xl" />
              <a href="emailto: info@rccglass-aluminum.com" className="text-md">
                info@rcccolabsolutions.com
              </a>
            </li>
            <li className="leading-9 flex items-center hover:text-cyan-500 cursor-pointer transition-all duration-300 gap-2">
              <PiGlobe className="text-2xl" />
              <a href="info@rcccolabsolutions.com" className="text-md">
                rcccolabsolutions.com
              </a>
            </li>
            <li className="leading-9 flex items-center gap-2">
              <MdAccessTime className="text-2xl" />
              <p className="text-md">
                Mon to Fri{" "}
                <span className="text-white/70">(8:00AM-5:00PM)</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xl flex justify-between text-white/80 cursor-pointer mx-auto border-t md:border-t-2 border-white/50 w-11/12 lg:w-full text-center md:text-left py-6">
        <ul className="hidden lg:flex gap-6">
          <li className="hover:underline">
            <Link to={"termsofuse"}>Terms of Use</Link>
          </li>
          <li className="hover:underline">
            <Link to={"privacypolicy"}>Privacy Policy</Link>
          </li>
        </ul>
        <p> © 2024 RCC Colab Solutions, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
