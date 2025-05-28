import { useLocation, useNavigate } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import aboutBG from "../assets/aboutus-bg.jpg";
import ServicesHelmet from "../components/Helmet/ServicesHelmet";
import LGContainer from "../components/LGContainer";
import XLContainer from "../components/XLContainer";
import RoboticsProcessAutomation from "../components/services/RoboticsProcessAutomation";
import ITStrategyConsulting from "../components/services/ITStrategyConsulting";
import SoftwareDevelopment from "../components/services/SoftwareDevelopment";
import AppModernization from "../components/services/AppModernization";
import StaffAugmentation from "../components/services/StaffAugmentation";
import SupportAndMaintenance from "../components/services/SupportAndMaintenance";
import ApplicationSVG from "../assets/Application.svg";
import DevelopmentSVG from "../assets/Development.svg";
import ConsultingSVG from "../assets/Consulting.svg";
import RoboticsSVG from "../assets/Robotics.svg";
import MaintenanceSVG from "../assets/Maintenance.svg";
import AugmentationSVG from "../assets/Augmentation.svg";
import {
  FaArrowRight,
  FaRobot,
  FaRocket,
  FaTools,
  FaChevronDown,
  FaCheckCircle,
} from "react-icons/fa";
import { HiLightBulb, HiUsers, HiCode } from "react-icons/hi";

const Services = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const sname = params.get("s");
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setIsVisible(true);

    if (sname) {
      setTimeout(() => {
        const servicesContent = document.getElementById("services-content");
        if (servicesContent) {
          servicesContent.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [sname]);

  const servicesData = [
    {
      id: "appmodernization",
      title: "Application Modernization",
      shortTitle: "App Modernization",
      image: ApplicationSVG,
      description:
        "Transform legacy applications into modern, cloud-ready solutions that deliver exceptional performance and user experience.",
      detailedDescription:
        "Breathe new life into your existing applications with our comprehensive modernization approach. We migrate legacy systems to cloud-native architectures, implement microservices, and enhance user interfaces for optimal performance.",
      icon: FaRocket,
      color: "orange",
      gradient: "from-accent to-blue-700",
      benefits: [
        "50% faster performance",
        "Cloud-native architecture",
        "Enhanced security",
      ],
    },
    {
      id: "softwaredevelopment",
      title: "Software Development",
      shortTitle: "Software Dev",
      image: DevelopmentSVG,
      description:
        "Custom software solutions built with cutting-edge technologies to solve your unique business challenges.",
      detailedDescription:
        "From concept to deployment, we create bespoke software solutions that align perfectly with your business objectives. Our agile development process ensures rapid delivery without compromising quality.",
      icon: HiCode,
      color: "blue",
      gradient: "from-orange-400 to-orange-500",
      benefits: [
        "Custom-built solutions",
        "Agile development",
        "Scalable architecture",
      ],
    },
    {
      id: "itstrategyconsulting",
      title: "IT Strategy & Consulting",
      shortTitle: "IT Strategy",
      image: ConsultingSVG,
      description:
        "Strategic technology roadmaps and consulting services to align your IT investments with business growth.",
      detailedDescription:
        "Navigate the complex technology landscape with our expert guidance. We develop comprehensive IT strategies that drive digital transformation and sustainable competitive advantage.",
      icon: HiLightBulb,
      color: "yellow",
      gradient: "from-accent to-blue-700",
      benefits: ["Strategic roadmaps", "Cost optimization", "Risk mitigation"],
    },
    {
      id: "roboticsprocessautomation",
      title: "Robotics Process Automation",
      shortTitle: "RPA",
      image: RoboticsSVG,
      description:
        "Automate repetitive tasks and processes to boost efficiency, reduce errors, and free up your team for strategic work.",
      detailedDescription:
        "Revolutionize your operations with intelligent automation. Our RPA solutions eliminate manual processes, reduce human error, and provide 24/7 operational efficiency.",
      icon: FaRobot,
      color: "green",
      gradient: "from-orange-400 to-orange-500",
      benefits: ["90% time savings", "Zero human error", "24/7 automation"],
    },
    {
      id: "staffaugmentation",
      title: "Staff Augmentation",
      shortTitle: "Staff Aug",
      image: AugmentationSVG,
      description:
        "Scale your team quickly with specialized talent that integrates seamlessly with your existing workforce.",
      detailedDescription:
        "Access top-tier talent on demand. Our carefully vetted professionals integrate seamlessly with your team, bringing specialized skills and fresh perspectives to accelerate your projects.",
      icon: HiUsers,
      color: "purple",
      gradient: "from-accent to-blue-700",
      benefits: [
        "Expert talent pool",
        "Flexible scaling",
        "Seamless integration",
      ],
    },
    {
      id: "supportandmaintenance",
      title: "Support & Maintenance",
      shortTitle: "Support",
      image: MaintenanceSVG,
      description:
        "Comprehensive support services to keep your systems running smoothly with proactive monitoring and maintenance.",
      detailedDescription:
        "Ensure optimal system performance with our comprehensive support services. We provide 24/7 monitoring, proactive maintenance, and rapid issue resolution to minimize downtime.",
      icon: FaTools,
      color: "indigo",
      gradient: "from-orange-400 to-orange-500",
      benefits: ["99.9% uptime", "24/7 monitoring", "Proactive maintenance"],
    },
  ];

  const renderSection = (sectionName) => {
    switch (sectionName) {
      case "appmodernization":
        return <AppModernization />;
      case "softwaredevelopment":
        return <SoftwareDevelopment />;
      case "itstrategyconsulting":
        return <ITStrategyConsulting />;
      case "roboticsprocessautomation":
        return <RoboticsProcessAutomation />;
      case "staffaugmentation":
        return <StaffAugmentation />;
      case "supportandmaintenance":
        return <SupportAndMaintenance />;
      default:
        return (
          <div className="relative overflow-hidden">
            {/* Enhanced Services Section */}
            <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-20">
                <Fade direction="up" triggerOnce>
                  <h2 className="text-4xl lg:text-5xl font-bold text-accent mb-6">
                    Our Expertise
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive technology solutions designed to accelerate
                    your digital transformation journey
                  </p>
                </Fade>
              </div>

              <div className="max-w-7xl mx-auto space-y-32">
                {servicesData.map((service, index) => {
                  const IconComponent = service.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <div key={service.id} className="relative">
                      <Fade direction={isEven ? "left" : "right"} triggerOnce>
                        <div
                          className={`flex flex-col ${
                            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                          } items-center gap-16 lg:gap-24`}
                        >
                          {/* Content Side */}
                          <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                              <div
                                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}
                              >
                                <IconComponent className="text-2xl text-white" />
                              </div>
                              <div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-accent">
                                  {service.title}
                                </h3>
                              </div>
                            </div>

                            <p className="text-xl text-gray-600 leading-relaxed">
                              {service.detailedDescription}
                            </p>

                            {/* Benefits */}
                            <div className="space-y-3">
                              {service.benefits.map((benefit, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-3"
                                >
                                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                  <span className="text-gray-700 font-medium">
                                    {benefit}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className="pt-8">
                              <button
                                onClick={() =>
                                  navigate(`/services?s=${service.id}`)
                                }
                                className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-full font-bold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl`}
                              >
                                Explore {service.shortTitle}
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>

                          {/* Visual Side */}
                          <div className="flex-1 relative">
                            <div className="relative group">
                              {/* Service-specific SVG/Image */}
                              <div className="flex items-center justify-center p-8">
                                <img
                                  src={service.image}
                                  alt={service.title}
                                  className="w-full max-w-md h-auto object-contain opacity-90 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-500"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action Section */}
            <LGContainer>
              <div className="relative flex flex-col h-fit text-accent px-6 lg:px-0">
                <Fade direction="up" delay={800} triggerOnce>
                  <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>

                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">
                          Ready to Transform Your Business?
                        </h3>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                          Let's discuss how our services can help you achieve
                          your goals and drive innovation.
                        </p>
                        <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                          Get Started Today
                        </button>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </LGContainer>
          </div>
        );
    }
  };

  return (
    <div className="relative">
      <ServicesHelmet />

      {/* Enhanced Hero Section */}
      <div
        className="relative bg-accent bg-no-repeat bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${aboutBG})`,
          clipPath: "polygon(100% 0%, 100% 85%, 50% 100%, 0 85%, 0 0)",
        }}
      >
        {/* Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/85 to-accent/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        <XLContainer>
          <div className="relative flex flex-col items-center justify-center pt-48 pb-48 text-center space-y-8">
            <Zoom>
              <div className="space-y-6">
                <h1 className="text-white/95 text-5xl lg:text-7xl font-bold leading-tight">
                  Our Services
                </h1>

                <div className="pt-8">
                  <button
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                    onClick={() =>
                      document
                        .getElementById("services-content")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore Our Expertise
                    <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Zoom>
          </div>
        </XLContainer>
      </div>

      <div
        id="services-content"
        className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50"
      >
        <div className="py-20">{renderSection(sname)}</div>
      </div>
    </div>
  );
};

export default Services;
