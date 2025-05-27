import { useRef, useState, useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  HiSparkles,
  HiTrendingUp,
  HiShieldCheck,
  HiLightBulb,
  HiUsers,
  HiCode,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import rcchome from "../assets/home-bg.jpg";
import HomeHelmet from "../components/Helmet/HomeHelmet";
import XLContainer from "../components/XLContainer";
import MultiSysLogo from "../assets/msys-logo.png";
import YalamChili from "../assets/yalamanchili.png";
import WorldLinks from "../assets/WorldLinks.png";
import DPOLogo from "../assets/dpo.png";

const Home = () => {
  const navigate = useNavigate();
  const getStartedRef = useRef();
  const [currentStat, setCurrentStat] = useState(0);

  // Enhanced stats with animated counters
  const stats = [
    { number: 100, suffix: "%", label: "Client Satisfaction", icon: HiUsers },
    { number: 5, suffix: "+", label: "Years Experience", icon: HiTrendingUp },
    { number: 50, suffix: "+", label: "Projects Delivered", icon: HiCode },
    {
      number: 24,
      suffix: "/7",
      label: "Support Available",
      icon: HiShieldCheck,
    },
  ];

  // Cycle through stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const getStarted = () => {
    if (getStartedRef.current) {
      getStartedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col scroll-smooth bg-gray-50 h-fit w-full overflow-hidden">
      <HomeHelmet />

      {/* Enhanced Hero Section with floating elements */}
      <div
        className="relative flex items-center bg-no-repeat bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${rcchome})`,
          clipPath: "polygon(100% 0, 100% 100%, 50% 91%, 0 100%, 0 0)",
        }}
      >
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/20 rotate-45 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-cyan-300/30 rotate-12 animate-pulse"></div>
        </div>

        <div className="w-full bg-gradient-to-br from-accent/95 via-accent/90 to-blue-900/85 pt-20 px-8 lg:pt-14 md:pb-44 h-[130vh] md:h-fit relative">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
          </div>

          <div className="max-w-screen-xl cursor-default mx-auto relative z-10">
            <div className="text-center">
              <Fade direction="down" duration={600}>
                <div className="text-3xl md:text-4xl lg:text-6xl font-bold pt-24 pb-2 lg:pb-4">
                  <h1 className="text-white/95 leading-tight">
                    Transform your Ideas into
                  </h1>
                  <h1 className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-300 bg-clip-text text-transparent pt-4 relative">
                    Powerful Software Solutions
                  </h1>
                </div>
              </Fade>

              <Fade direction="up" delay={200}>
                <p className="mt-8 max-w-screen-md mx-auto text-lg lg:text-xl leading-8 text-white/90 text-center px-4">
                  RCC Colab Solutions collaborates with you to turn innovative
                  ideas into scalable software solutions. Combining cutting-edge
                  technology with deep industry expertise to drive efficiency
                  and customer satisfaction.
                </p>
              </Fade>

              {/* Enhanced CTA buttons */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Fade direction="up" delay={400}>
                  <button
                    onClick={getStarted}
                    className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center gap-2">
                      Get Started
                      <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced About Section */}
      <div ref={getStartedRef} className="bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>

        <XLContainer>
          <div className="flex flex-col items-center pt-32 pb-20 px-6 lg:px-12 relative">
            <Fade direction="up" duration={300} triggerOnce>
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl text-accent font-bold mb-4">
                  What RCC Colab Solutions Does?
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-orange-400 mx-auto rounded-full"></div>
              </div>
            </Fade>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl">
              <Fade direction="left" triggerOnce>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p className="text-xl">
                    <span className="text-accent font-bold">
                      RCC Colab Solutions Inc.
                    </span>{" "}
                    offers end-to-end personalized business solutions,
                    understanding that each company has unique needs and goals.
                    We help businesses unlock their full potential through
                    emerging and cutting-edge solutions.
                  </p>
                  <p>
                    Whether you're a startup or an established company, we're
                    eager to enhance your digital presence, streamline
                    operations, and improve customer engagement through
                    innovative software solutions.
                  </p>
                  <p>
                    We collaborate with your team to identify the best IT
                    services and solutions that create significant value for
                    your organization.
                  </p>

                  {/* Trust indicators */}
                  <div className="grid grid-cols-2 gap-4 pt-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <div className="text-sm text-gray-600">
                        Client Satisfaction
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-accent">50+</div>
                      <div className="text-sm text-gray-600">
                        Projects Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>

              <Fade direction="right" triggerOnce>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-orange-400/20 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <HiSparkles className="w-12 h-12 text-cyan-500 mx-auto mb-3" />
                        <h3 className="font-semibold text-accent">
                          Innovation
                        </h3>
                        <p className="text-sm text-gray-600">
                          Cutting-edge solutions
                        </p>
                      </div>
                      <div className="text-center">
                        <HiShieldCheck className="w-12 h-12 text-green-500 mx-auto mb-3" />
                        <h3 className="font-semibold text-accent">
                          Reliability
                        </h3>
                        <p className="text-sm text-gray-600">
                          Trusted partnerships
                        </p>
                      </div>
                      <div className="text-center">
                        <HiUsers className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                        <h3 className="font-semibold text-accent">
                          Collaboration
                        </h3>
                        <p className="text-sm text-gray-600">
                          Team-focused approach
                        </p>
                      </div>
                      <div className="text-center">
                        <HiTrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                        <h3 className="font-semibold text-accent">Growth</h3>
                        <p className="text-sm text-gray-600">
                          Scalable solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </XLContainer>
      </div>

      {/* Enhanced Services Section */}
      <div className="bg-gradient-to-br from-accent via-accent to-blue-900 relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>

        <XLContainer>
          <div className="flex flex-col items-center py-32 px-6 lg:px-12 relative z-10">
            <Fade direction="up" duration={300} triggerOnce>
              <div className="text-center mb-20">
                <h1 className="text-4xl lg:text-5xl text-white font-bold mb-4">
                  Our Services
                </h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Comprehensive solutions designed to transform your business
                  and drive innovation
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-orange-400 mx-auto rounded-full mt-6"></div>
              </div>
            </Fade>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl w-full">
              {/* Application Modernization */}
              <Fade direction="left" triggerOnce>
                <div
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40 cursor-pointer"
                  onClick={() => navigate("/services?s=appmodernization")}
                >
                  <div className="absolute -top-6 left-8 p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HiSparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      Application Modernization
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                      Transform legacy applications into modern, cloud-ready
                      solutions that drive innovation and performance.
                    </p>
                    <div className="flex items-center gap-3 text-cyan-300 group-hover:text-white font-semibold text-lg transition-all duration-300">
                      Learn more
                      <FaArrowRightLong className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </Fade>

              {/* Software Development */}
              <Fade direction="right" triggerOnce>
                <div
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40 cursor-pointer"
                  onClick={() => navigate("/services?s=softwaredevelopment")}
                >
                  <div className="absolute -top-6 left-8 p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HiCode className="w-8 h-8 text-white" />
                  </div>
                  <div className="pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      Software Development
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                      Custom software solutions tailored to your unique business
                      requirements and challenges.
                    </p>
                    <div className="flex items-center gap-3 text-cyan-300 group-hover:text-white font-semibold text-lg transition-all duration-300">
                      Learn more
                      <FaArrowRightLong className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </Fade>

              {/* IT Strategy & Consulting */}
              <Fade direction="left" delay={200} triggerOnce>
                <div
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40 cursor-pointer"
                  onClick={() => navigate("/services?s=itstrategyconsulting")}
                >
                  <div className="absolute -top-6 left-8 p-4 bg-gradient-to-r from-green-500 to-teal-400 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HiLightBulb className="w-8 h-8 text-white" />
                  </div>
                  <div className="pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      IT Strategy & Consulting
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                      Strategic technology planning and roadmaps aligned with
                      your business objectives and growth plans.
                    </p>
                    <div className="flex items-center gap-3 text-cyan-300 group-hover:text-white font-semibold text-lg transition-all duration-300">
                      Learn more
                      <FaArrowRightLong className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </Fade>

              {/* Robotics Process Automation */}
              <Fade direction="right" delay={200} triggerOnce>
                <div
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40 cursor-pointer"
                  onClick={() =>
                    navigate("/services?s=roboticsprocessautomation")
                  }
                >
                  <div className="absolute -top-6 left-8 p-4 bg-gradient-to-r from-orange-500 to-red-400 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HiTrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      Robotics Process Automation
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                      Automate repetitive tasks to boost efficiency, accuracy,
                      and free up valuable human resources.
                    </p>
                    <div className="flex items-center gap-3 text-cyan-300 group-hover:text-white font-semibold text-lg transition-all duration-300">
                      Learn more
                      <FaArrowRightLong className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </Fade>

              {/* Staff Augmentation */}
              <Fade direction="left" delay={300} triggerOnce>
                <div
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40 cursor-pointer"
                  onClick={() => navigate("/services?s=staffaugmentation")}
                >
                  <div className="absolute -top-6 left-8 p-4 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HiUsers className="w-8 h-8 text-white" />
                  </div>
                  <div className="pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      Staff Augmentation
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                      Flexible talent solutions to scale your team with
                      specialized skills when you need them most.
                    </p>
                    <div className="flex items-center gap-3 text-cyan-300 group-hover:text-white font-semibold text-lg transition-all duration-300">
                      Learn more
                      <FaArrowRightLong className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </Fade>

              {/* Support & Maintenance */}
              <Fade direction="right" delay={300} triggerOnce>
                <div
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40 cursor-pointer"
                  onClick={() => navigate("/services?s=supportandmaintenance")}
                >
                  <div className="absolute -top-6 left-8 p-4 bg-gradient-to-r from-pink-500 to-rose-400 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HiShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      Support & Maintenance
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                      Comprehensive support services to ensure your IT systems
                      run smoothly and efficiently.
                    </p>
                    <div className="flex items-center gap-3 text-cyan-300 group-hover:text-white font-semibold text-lg transition-all duration-300">
                      Learn more
                      <FaArrowRightLong className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </Fade>
            </div>
          </div>
        </XLContainer>
      </div>

      {/* Enhanced Clients & Partners Section */}
      <div className="bg-white py-32">
        <XLContainer>
          <div className="flex flex-col items-center z-10 relative">
            {/* Clients Section */}
            <div className="w-full mb-20 relative">
              <Fade direction="up" triggerOnce>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl text-accent font-bold mb-4">
                    Trusted by Industry Leaders
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-orange-400 mx-auto rounded-full"></div>
                </div>
              </Fade>

              <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto items-center">
                <Zoom cascade damping={0.2} triggerOnce>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="flex justify-center h-20 mb-4">
                      <img
                        src={MultiSysLogo}
                        alt="MultiSys"
                        className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-800">
                        MultiSys Technologies
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Technology Partner
                      </p>
                    </div>
                  </div>
                </Zoom>

                <Zoom cascade damping={0.2} delay={200} triggerOnce>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="flex justify-center h-16 mb-4">
                      <img
                        src={YalamChili}
                        alt="Yalamanchili"
                        className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-800">
                        Yalamanchili
                      </h3>
                      <p className="text-gray-600 text-sm">Strategic Client</p>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>

            {/* Strategic Partners Section */}
            <div className="w-full mb-20 relative">
              <Fade direction="up" triggerOnce>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl text-accent font-bold mb-4">
                    Strategic Partnership
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-orange-400 mx-auto rounded-full"></div>
                </div>
              </Fade>

              <div className="flex justify-center">
                <Zoom cascade damping={0.1} delay={300} triggerOnce>
                  <div className="group bg-gradient-to-br from-accent/5 to-blue-50 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-accent/10">
                    <div className="flex justify-center h-48 mb-6">
                      <img
                        src={WorldLinks}
                        alt="WorldLinks"
                        className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-accent mb-2">
                        WorldLinks
                      </h3>
                      <p className="text-gray-600">
                        Global Technology Alliance
                      </p>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>

            {/* Certificate Section */}
            <div className="w-full relative">
              <Fade direction="up" triggerOnce>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl text-accent font-bold mb-4">
                    Certified Excellence
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-orange-400 mx-auto rounded-full"></div>
                </div>
              </Fade>

              <div className="flex justify-center">
                <Zoom cascade damping={0.1} delay={300} triggerOnce>
                  <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="flex justify-center h-80 mb-4">
                      <img
                        src={DPOLogo}
                        alt="DPO Certificate"
                        className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-accent">
                        Data Protection Officer
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Certified Compliance
                      </p>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </XLContainer>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-gray-100 py-20 relative overflow-hidden">
        <XLContainer>
          <div className="flex flex-col items-center relative z-10">
            <Zoom>
              <div className="text-center max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-accent font-bold leading-tight mb-6">
                  The success of our clients
                  <br />
                  <span className="text-accent">is our success too!</span>
                  <span className="text-4xl ml-4">🏆</span>
                </h1>
                <p className="text-xl text-gray-700 leading-8 mb-12 px-6">
                  In this digital era, we have a dedicated team ready to serve
                  our client's needs and ensure complexities are simplified and
                  solutions are flexible.
                </p>
              </div>
            </Zoom>
          </div>
        </XLContainer>
      </div>
    </div>
  );
};

export default Home;
