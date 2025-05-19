// Services.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
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
import {
  FaRocket,
  FaCode,
  FaChartLine,
  FaRobot,
  FaUserPlus,
  FaTools,
} from "react-icons/fa";

const Services = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const sname = params.get("s");

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
          <>
            <div>
              <LGContainer>
                <div className="flex flex-col h-fit text-accent py-5 px-6 lg:px-0">
                  <Fade direction="up" delay={200} triggerOnce>
                    <h1 className="text-4xl w-full text-center font-semibold pb-12">
                      What We Do
                    </h1>
                  </Fade>
                  <div className="flex flex-col gap-5 text-gray-700 leading-9 text-justify text-lg lg:text-xl">
                    <p>
                      Our comprehensive services encompass{" "}
                      <span className="font-semibold text-orange-600">
                        Application Modernization
                      </span>
                      ,{" "}
                      <span className="font-semibold text-orange-600">
                        Software Development
                      </span>
                      ,{" "}
                      <span className="font-semibold text-orange-600">
                        IT Strategy and Consulting
                      </span>
                      ,{" "}
                      <span className="font-semibold text-orange-600">
                        Robotics Process Automation (RPA)
                      </span>
                      ,{" "}
                      <span className="font-semibold text-orange-600">
                        Staff Augmentation
                      </span>
                      , and{" "}
                      <span className="font-semibold text-orange-600">
                        Support and Maintenance
                      </span>
                      . Our dedicated team is committed to delivering innovative
                      and customized solutions to help businesses meet the
                      evolving needs of customers and markets.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <a href="?s=appmodernization" className="group">
                      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition-all transform group-hover:scale-105">
                        <div className="flex items-center mb-4">
                          <FaRocket className="text-accent text-2xl mr-3" />
                          <h2 className="text-base font-bold text-gray-800">
                            Application Modernization
                          </h2>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Transform legacy applications into modern, cloud-ready
                          solutions to improve performance.
                        </p>
                        <div className="mt-4 text-orange-600 font-semibold text-sm flex items-center">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href="?s=softwaredevelopment" className="group">
                      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition-all transform group-hover:scale-105">
                        <div className="flex items-center mb-4">
                          <FaCode className="text-accent text-2xl mr-3" />
                          <h2 className="text-base font-bold text-gray-800">
                            Software Development
                          </h2>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Custom software solutions tailored to your unique
                          business needs and challenges.
                        </p>
                        <div className="mt-4 text-orange-600 font-semibold text-sm flex items-center">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href="?s=itstrategyconsulting" className="group">
                      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition-all transform group-hover:scale-105">
                        <div className="flex items-center mb-4">
                          <FaChartLine className="text-accent text-2xl mr-3" />
                          <h2 className="text-base font-bold text-gray-800">
                            IT Strategy & Consulting
                          </h2>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Strategic technology planning and roadmaps aligned
                          with your business objectives.
                        </p>
                        <div className="mt-4 text-orange-600 font-semibold text-sm flex items-center">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href="?s=roboticsprocessautomation" className="group">
                      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition-all transform group-hover:scale-105">
                        <div className="flex items-center mb-4">
                          <FaRobot className="text-accent text-2xl mr-3" />
                          <h2 className="text-base font-bold text-gray-800">
                            RPA
                          </h2>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Automate repetitive tasks to improve efficiency,
                          accuracy, and free up valuable human resources.
                        </p>
                        <div className="mt-4 text-orange-600 font-semibold text-sm flex items-center">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href="?s=staffaugmentation" className="group">
                      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition-all transform group-hover:scale-105">
                        <div className="flex items-center mb-4">
                          <FaUserPlus className="text-accent text-2xl mr-3" />
                          <h2 className="text-base font-bold text-gray-800">
                            Staff Augmentation
                          </h2>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Flexible talent solutions to scale your team with
                          specialized skills when you need them most.
                        </p>
                        <div className="mt-4 text-orange-600 font-semibold text-sm flex items-center">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href="?s=supportandmaintenance" className="group">
                      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition-all transform group-hover:scale-105">
                        <div className="flex items-center mb-4">
                          <FaTools className="text-accent text-2xl mr-3" />
                          <h2 className="text-base font-bold text-gray-800">
                            Support & Maintenance
                          </h2>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Ensure your IT systems run smoothly with comprehensive
                          support services and proactive maintenance.
                        </p>
                        <div className="mt-4 text-orange-600 font-semibold text-sm flex items-center">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </LGContainer>
            </div>
          </>
        );
    }
  };

  return (
    <div>
      <ServicesHelmet />
      <div
        className="bg-accent bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutBG})`,
          clipPath: "polygon(100% 1%, 100% 85%, 50% 100%, 0 85%, 0 0)",
        }}
      >
        <div className="bg-accent/80 ">
          <XLContainer>
            <div className="flex flex-col items-center justify-center pt-48 pb-48 h-fit">
              <Zoom>
                <h1 className="text-white/90 text-5xl lg:text-7xl font-medium pb-1">
                  Our Services
                </h1>
              </Zoom>
            </div>
          </XLContainer>
        </div>
      </div>

      <div className="grid gap-16 py-20">{renderSection(sname)}</div>
    </div>
  );
};

export default Services;
