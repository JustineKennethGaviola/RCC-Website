import { CgTrees } from "react-icons/cg";
import { LuShieldCheck } from "react-icons/lu";
import { PiMedal } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi2";
import aboutBG from "../assets/aboutus-bg.jpg";
import mvBG from "../assets/mission-and-vision-bg.jpg";
import AboutHelmet from "../components/Helmet/AboutHelmet";
import LGContainer from "../components/LGContainer";
import XLContainer from "../components/XLContainer";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { FaChevronDown } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <AboutHelmet />

      {/* Hero Section */}
      <div
        className="bg-accent bg-no-repeat bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${aboutBG})`,
          clipPath: "polygon(100% 1%, 100% 85%, 50% 100%, 0 85%, 0 0)",
        }}
      >
        {/* Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/85 to-accent/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        <XLContainer>
          <div className="flex flex-col items-center justify-center pt-48 pb-48 h-fit relative z-10">
            <Zoom>
              <div className="text-center relative">
                <h1 className="text-white/95 text-5xl lg:text-7xl font-bold pb-4 leading-tight">
                  About Us
                </h1>

                {/* Add this button */}
                <div className="pt-8">
                  <button
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                    onClick={() =>
                      document
                        .getElementById("about-content")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Learn About Us
                    <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Zoom>
          </div>
        </XLContainer>
      </div>

      {/* Who We Are Section */}
      <div
        id="about-content"
        className="bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
      >
        <LGContainer>
          <div className="flex flex-col text-accent py-24 px-6 lg:px-0 relative z-10">
            <Fade direction="up" delay={200} triggerOnce>
              <div className="text-center mb-20">
                <h1 className="text-4xl lg:text-5xl font-bold text-accent mb-6">
                  Who We Are
                </h1>
                <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                  Leading the future of digital transformation with innovation,
                  expertise, and dedication
                </p>
              </div>
            </Fade>

            <div className="space-y-16">
              <Slide direction="left" triggerOnce>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-blue-700 rounded-full mb-6">
                      <HiOutlineSparkles className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-4">
                      Innovation First
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Driving digital transformation through cutting-edge
                      technology solutions
                    </p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
                      <span className="font-bold text-accent text-2xl">
                        RCC Colab Solutions
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        is an IT solutions provider driven by a deep commitment
                        to driving digital transformation and operational
                        excellence for businesses across various industries. We
                        offer end-to-end personalized services with a
                        solution-driven approach to helping companies unlock
                        their full potential through innovative and tailored
                        solutions to match your needs.
                      </span>
                    </p>
                  </div>
                </div>
              </Slide>

              <Slide direction="right" triggerOnce delay={200}>
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
                  <div className="lg:w-1/3 text-center lg:text-right">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-blue-700 rounded-full mb-6">
                      <RiTeamLine className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-4">
                      Expert Team
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Dedicated professionals with extensive corporate
                      experience
                    </p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed text-justify">
                      Our team is a group of dedicated professionals with
                      extensive experience and unparalleled expertise in
                      cutting-edge technologies. This expertise is not just
                      theoretical but has been honed through years of corporate
                      experience and exposure. We are committed to delivering
                      excellent service in every project we undertake,
                      empowering our clients to thrive in a dynamic and
                      ever-evolving digital world to achieve greater efficiency,
                      agility, and profitability.
                    </p>
                  </div>
                </div>
              </Slide>

              <Slide direction="left" triggerOnce delay={400}>
                <div className="text-center bg-gradient-to-r from-gray-50 to-white p-12 lg:p-16 rounded-3xl border border-gray-100">
                  <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-blue-700 rounded-full mb-8">
                      <PiMedal className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-6">
                      Our Commitment
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                      We aim to serve a clientele across various industries to
                      tackle their most challenging projects so we can deliver
                      the right technology solutions for our clients.
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </LGContainer>
      </div>

      {/* Mission & Vision Section */}
      <div
        className="bg-accent bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${mvBG})`,
          clipPath: "polygon(0 5%, 50% 0, 100% 5%, 100% 95%, 50% 100%, 0 95%)",
        }}
      >
        <div className="bg-gradient-to-br from-accent/85 via-blue-800/90 to-blue-900/95">
          <LGContainer>
            <div className="pt-40 pb-52 h-fit px-6 lg:px-0">
              <div className="grid lg:grid-cols-2 gap-20 h-fit">
                <Fade direction="left" triggerOnce>
                  <div className="relative">
                    <div className="absolute -top-8 -left-8 w-16 h-16 border-l-4 border-t-4 border-orange-400/50 rounded-tl-3xl"></div>
                    <div className="mb-8">
                      <h1 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 pb-4">
                        Mission
                      </h1>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <div className="w-6 h-1 bg-orange-400/60 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-light">
                      Our mission is to empower businesses and individuals by
                      delivering scalable, cutting-edge technology solutions
                      that drive innovation, transform industries, and create
                      lasting value. We are committed to making a positive
                      impact on our people, clients, communities, and the
                      environment, fostering a future where technology enables
                      sustainable growth and meaningful progress.
                    </p>
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-4 border-b-4 border-orange-400/50 rounded-br-3xl"></div>
                  </div>
                </Fade>

                <Fade direction="right" triggerOnce delay={300}>
                  <div className="relative">
                    <div className="absolute -top-8 -left-8 w-16 h-16 border-l-4 border-t-4 border-cyan-400/50 rounded-tl-3xl"></div>
                    <div className="mb-8">
                      <h1 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 pb-4">
                        Vision
                      </h1>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                        <div className="w-6 h-1 bg-cyan-400/60 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-light">
                      We aspire to become one of the global leaders in digital
                      transformation, recognized for pioneering innovative
                      solutions that empower businesses to thrive in a rapidly
                      evolving world where technology drives economic growth,
                      fosters positive societal change, and contributes to a
                      sustainable society.
                    </p>
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-4 border-b-4 border-cyan-400/50 rounded-br-3xl"></div>
                  </div>
                </Fade>
              </div>
            </div>
          </LGContainer>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        <LGContainer>
          <div className="pt-24 pb-32 px-6 lg:px-0 relative z-10">
            <Fade direction="up" triggerOnce>
              <div className="text-center mb-20">
                <h1 className="text-4xl lg:text-6xl text-accent font-bold mb-6">
                  Our Core Values
                </h1>
                <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                  The fundamental principles that guide our work and define our
                  commitment to excellence
                </p>
              </div>
            </Fade>

            <div className="space-y-16">
              <Slide direction="left" triggerOnce>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
                  <div className="lg:w-1/4 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent to-blue-700 text-white text-4xl rounded-full mb-6 hover:scale-110 transition-transform duration-300">
                      <LuShieldCheck />
                    </div>
                    <h1 className="font-bold text-2xl lg:text-3xl text-accent uppercase tracking-wide">
                      Accountability
                    </h1>
                  </div>
                  <div className="lg:w-3/4">
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-6"></div>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center lg:text-left">
                      We take ownership of responsibilities, honoring
                      commitments, and delivering results and value with
                      integrity and dedication. Our accountability drives us to
                      exceed expectations and build lasting trust with every
                      client we serve.
                    </p>
                  </div>
                </div>
              </Slide>

              <Slide direction="right" triggerOnce delay={200}>
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 py-8">
                  <div className="lg:w-1/4 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-400 text-white text-4xl rounded-full mb-6 hover:scale-110 transition-transform duration-300">
                      <RiTeamLine />
                    </div>
                    <h1 className="font-bold text-2xl lg:text-3xl text-accent uppercase tracking-wide">
                      Collaboration
                    </h1>
                  </div>
                  <div className="lg:w-3/4">
                    <div className="h-1 w-full bg-gradient-to-r from-orange-500/20 to-orange-500/20 rounded-full mb-6"></div>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center lg:text-right">
                      Our team embraces teamwork and open communication to
                      achieve common goals. We believe that the best solutions
                      emerge when diverse perspectives unite toward a shared
                      vision of success.
                    </p>
                  </div>
                </div>
              </Slide>

              <Slide direction="left" triggerOnce delay={400}>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
                  <div className="lg:w-1/4 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent to-blue-700 text-white text-4xl rounded-full mb-6 hover:scale-110 transition-transform duration-300">
                      <PiMedal />
                    </div>
                    <h1 className="font-bold text-2xl lg:text-3xl text-accent uppercase tracking-wide">
                      Excellence
                    </h1>
                  </div>
                  <div className="lg:w-3/4">
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-full mb-6"></div>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center lg:text-left">
                      We are committed to continuously improving to surpass
                      expectations and set the bar for quality and innovation.
                      Excellence is not just our goal, it's our standard in
                      everything we deliver.
                    </p>
                  </div>
                </div>
              </Slide>

              <Slide direction="right" triggerOnce delay={600}>
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 py-8">
                  <div className="lg:w-1/4 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-400 text-white text-4xl rounded-full mb-6 hover:scale-110 transition-transform duration-300">
                      <CgTrees />
                    </div>
                    <h1 className="font-bold text-2xl lg:text-3xl text-accent uppercase tracking-wide">
                      Sustainability
                    </h1>
                  </div>
                  <div className="lg:w-3/4">
                    <div className="h-1 w-full bg-gradient-to-r from-orange-500/20 to-orange-500/20 rounded-full mb-6"></div>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center lg:text-right">
                      We integrate sustainable practices into everyday
                      operations to become a socially and environmentally
                      responsible organization, ensuring our growth contributes
                      positively to the world around us.
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </LGContainer>
      </div>

      {/* What Makes Us Different Section */}
      <div className="lg:pt-15 pb-20 px-6 lg:px-0 lg:pb-32">
        <XLContainer>
          <Zoom triggerOnce>
            <div className="flex flex-col items-center bg-gradient-to-br from-accent to-blue-700 py-20 px-6 lg:px-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h1 className="text-white/95 font-bold text-center text-3xl lg:text-4xl mb-6 lg:mb-8">
                  What Makes Us{" "}
                  <span className="text-transparent bg-clip-text bg-orange-400">
                    Different
                  </span>
                  ?
                </h1>

                <p className="text-justify lg:text-center lg:px-20 leading-relaxed text-white/90 text-lg lg:text-xl max-w-4xl">
                  RCC Colab Solutions' competitive edge in the IT and Consulting
                  Services industry lies in our capability to deliver integrated
                  innovation and seamless solutions to our clients. Our
                  organization is designed to be agile and responsive to fulfill
                  our commitment to the utmost measurable impact for our
                  clients. This allows us to adjust to market shifts and
                  implement new solutions quickly as we understand that each
                  business is unique, with its specific goals and challenges.
                </p>
              </div>
            </div>
          </Zoom>
        </XLContainer>
      </div>
    </div>
  );
};

export default AboutUs;
