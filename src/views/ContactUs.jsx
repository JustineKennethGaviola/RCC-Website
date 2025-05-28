import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import {
  MdAccessTime,
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";
import ContactHelmet from "../components/Helmet/ContactHelmet";
import emptyEmail from "../utils/emptyEmail";
import sendEmail from "../utils/sendEmail";
import contactBG from "../assets/contact-bg.jpg";
import { Zoom, Fade, Slide } from "react-awesome-reveal";
import { FaChevronDown } from "react-icons/fa";

const ContactUs = () => {
  const formRef = useRef();
  const [email, setEmail] = useState(emptyEmail);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (formRef.current) {
        await sendEmail(formRef.current);
      }
      toast.success("Email sent successfully!");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setEmail(emptyEmail);
    }
  };

  return (
    <div>
      <ContactHelmet />
      <div
        className="bg-accent bg-no-repeat bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${contactBG})`,
          clipPath: "polygon(100% 1%, 100% 85%, 50% 100%, 0 85%, 0 0)",
        }}
      >
        {/* Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/85 to-accent/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        <div className="flex flex-col items-center justify-center pt-48 pb-48 h-fit">
          <Zoom>
            <div className="text-center relative">
              <h1 className="text-white/95 text-5xl lg:text-7xl font-bold pb-4 leading-tight">
                Contact Us
              </h1>

              <div className="pt-8">
                <button
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                  onClick={() =>
                    document
                      .getElementById("contact-content")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get In Touch
                  <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </Zoom>
        </div>
      </div>

      {/* Enhanced Main Content Section */}
      <div 
        id="contact-content" 
        className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
      >
        {/* Subtle background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-32 pb-32 relative z-10">
          {/* Header Section */}
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-accent mb-6">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? We're here to help you every step of the way.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Contact Information Side */}
            <div className="lg:col-span-5 space-y-8">
              <Slide direction="left" triggerOnce>
                <div className="mb-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you're looking for help with your next big project or want to join our team, 
                    we are ready to answer all your questions.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MdOutlinePhone className="text-white text-2xl" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        Phone Number
                      </h4>
                      <p className="text-gray-600 text-lg">
                        +632 8651 6572
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MdOutlineEmail className="text-white text-2xl" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        Email Address
                      </h4>
                      <p className="text-gray-600 text-lg">
                        info@rcccolabsolutions.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MdOutlineLocationOn className="text-white text-2xl" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        Office Address
                      </h4>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        7/F Ascott Makati Glorietta 4, Ayala Center San Lorenzo, Makati City
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MdAccessTime className="text-white text-2xl" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        Office Hours
                      </h4>
                      <p className="text-gray-600 text-lg">
                        Monday to Friday (8:00AM - 5:00PM)
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>

            {/* Contact Form Side */}
            <div className="lg:col-span-7">
              <Slide direction="right" triggerOnce>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
                  {/* Subtle background pattern for form */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
                  </div>

                  <form
                    ref={formRef}
                    className="relative z-10 space-y-8"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-4">
                        Send us a Message
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          required
                          disabled={loading}
                          onChange={handleChange}
                          value={email.name}
                          autoComplete="off"
                          className="w-full h-14 px-4 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors duration-300 bg-gray-50/50 hover:bg-white"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Company
                        </label>
                        <input
                          required
                          disabled={loading}
                          onChange={handleChange}
                          value={email.company}
                          autoComplete="off"
                          className="w-full h-14 px-4 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors duration-300 bg-gray-50/50 hover:bg-white"
                          type="text"
                          name="company"
                          id="company"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="contactNumber"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Contact Number
                        </label>
                        <input
                          required
                          disabled={loading}
                          onChange={handleChange}
                          value={email.contactNumber}
                          autoComplete="off"
                          className="w-full h-14 px-4 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors duration-300 bg-gray-50/50 hover:bg-white"
                          type="text"
                          name="contactNumber"
                          id="contactNumber"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Work Email
                        </label>
                        <input
                          required
                          disabled={loading}
                          onChange={handleChange}
                          value={email.email}
                          autoComplete="off"
                          className="w-full h-14 px-4 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors duration-300 bg-gray-50/50 hover:bg-white"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        required
                        disabled={loading}
                        onChange={handleChange}
                        value={email.message}
                        autoComplete="off"
                        className="w-full h-40 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors duration-300 bg-gray-50/50 hover:bg-white resize-none"
                        name="message"
                        id="message"
                        placeholder="Tell us about your project or how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      className="w-full h-14 bg-gradient-to-r from-accent to-blue-700 text-white font-bold text-lg rounded-xl hover:from-accent/90 hover:to-blue-700/90 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Message...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;