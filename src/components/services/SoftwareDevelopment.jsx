// SoftwareDevelopment.jsx
import { useState } from "react";
import LGContainer from "../LGContainer";
import { softwareDev } from "../../utils/servicesData";
import {
  FaCode,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaDesktop,
  FaStar,
  FaServer,
  FaVial,
  FaCloudUploadAlt,
} from "react-icons/fa";
import ReactIcon from "../../assets/react.svg";
import HTML5Icon from "../../assets/html5.svg";
import JavaScriptIcon from "../../assets/javascript.svg";
import FigmaIcon from "../../assets/figma.svg";
import NodeIcon from "../../assets/nodejs.svg";
import PythonIcon from "../../assets/python.svg";
import AspNetIcon from "../../assets/aspnet.png";
import LaravelIcon from "../../assets/laravel.svg";
import SwaggerIcon from "../../assets/swagger.svg";
import PostmanIcon from "../../assets/postman.svg";
import KotlinIcon from "../../assets/kotlin.svg";
import FlutterIcon from "../../assets/flutter.svg";
import ReactNativeIcon from "../../assets/react-native.svg";
import IOSIcon from "../../assets/ios.svg";
import AndroidIcon from "../../assets/android.svg";
import SQLServerIcon from "../../assets/sqlserver.svg";
import PostgreSQLIcon from "../../assets/postgresql.svg";
import MariaDBIcon from "../../assets/mariadb.svg";
import MongoDBIcon from "../../assets/mongodb.svg";
import FirebaseIcon from "../../assets/firebase.svg";
import OracleIcon from "../../assets/oracle.svg";
import SeleniumIcon from "../../assets/selenium.svg";
import KatalonIcon from "../../assets/katalon.svg";
import TestNGIcon from "../../assets/testng.png";
import SoapUIIcon from "../../assets/soapui.png";
import JMeterIcon from "../../assets/jmeter.svg";
import GitHubIcon from "../../assets/github.svg";
import DockerIcon from "../../assets/docker.svg";
import KubernetesIcon from "../../assets/kubernetes.svg";
import TerraformIcon from "../../assets/terraform.svg";
import JenkinsIcon from "../../assets/jenkins.svg";
import CloudIcon from "../../assets/cloud.svg";

const SoftwareDevelopment = () => {
  // For the technology stack section
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredTech, setHoveredTech] = useState(null);

  // Technology stacks data
  const techStacksData = {
    frontend: {
      name: "Frontend Development",
      description: "Creating responsive and intuitive user interfaces",
      icon: <FaCode className="text-blue-500" />,
      technologies: [
        {
          name: "React",
          icon: ReactIcon,
        },
        {
          name: "HTML5/CSS3",
          icon: HTML5Icon,
        },
        {
          name: "JavaScript",
          icon: JavaScriptIcon,
        },
        {
          name: "Figma",
          icon: FigmaIcon,
        },
      ],
    },
    backend: {
      name: "Backend & API",
      description: "Building robust server-side applications and services",
      icon: <FaServer className="text-green-500" />,
      technologies: [
        {
          name: "Node.js",
          icon: NodeIcon,
        },
        {
          name: "Python",
          icon: PythonIcon,
        },
        {
          name: "ASP.NET",
          icon: AspNetIcon,
        },
        {
          name: "Laravel",
          icon: LaravelIcon,
        },
        {
          name: "Swagger",
          icon: SwaggerIcon,
        },
        {
          name: "Postman",
          icon: PostmanIcon,
        },
      ],
    },
    mobile: {
      name: "Mobile Applications",
      description: "Developing native and cross-platform mobile experiences",
      icon: <FaMobile className="text-purple-500" />,
      technologies: [
        {
          name: "Kotlin",
          icon: KotlinIcon,
        },
        {
          name: "Flutter",
          icon: FlutterIcon,
        },
        {
          name: "React Native",
          icon: ReactNativeIcon,
        },
        {
          name: "iOS",
          icon: IOSIcon,
        },
        {
          name: "Android",
          icon: AndroidIcon,
        },
      ],
    },
    database: {
      name: "Database Solutions",
      description: "Managing data with optimal storage and retrieval systems",
      icon: <FaDatabase className="text-red-500" />,
      technologies: [
        {
          name: "SQL Server",
          icon: SQLServerIcon,
        },
        {
          name: "PostgreSQL",
          icon: PostgreSQLIcon,
        },
        {
          name: "MariaDB",
          icon: MariaDBIcon,
        },
        {
          name: "MongoDB",
          icon: MongoDBIcon,
        },
        {
          name: "Firebase",
          icon: FirebaseIcon,
        },
        {
          name: "Oracle",
          icon: OracleIcon,
        },
      ],
    },
    testing: {
      name: "QA & Testing",
      description: "Ensuring software quality and performance",
      icon: <FaVial className="text-amber-500" />,
      technologies: [
        {
          name: "Selenium",
          icon: SeleniumIcon,
        },
        {
          name: "Katalon",
          icon: KatalonIcon,
        },
        {
          name: "TestNG",
          icon: TestNGIcon,
        },
        {
          name: "SoapUI",
          icon: SoapUIIcon,
        },
        {
          name: "JMeter",
          icon: JMeterIcon,
        },
      ],
    },
    devops: {
      name: "DevOps",
      description: "Streamlining development operations and deployment",
      icon: <FaCloudUploadAlt className="text-indigo-500" />,
      technologies: [
        {
          name: "GitHub/GitLab",
          icon: GitHubIcon,
        },
        {
          name: "Docker",
          icon: DockerIcon,
        },
        {
          name: "Kubernetes",
          icon: KubernetesIcon,
        },
        {
          name: "Terraform",
          icon: TerraformIcon,
        },
        {
          name: "Jenkins",
          icon: JenkinsIcon,
        },
        {
          name: "AWS/Azure/GCP",
          icon: CloudIcon,
        },
      ],
    },
  };

  const categories = Object.keys(techStacksData);

  return (
    <LGContainer>
      <div className="px-6 lg:px-0">
        {/* Header section */}
        <div>
          <h1 className="text-3xl lg:text-4xl text-accent font-bold pb-4">
            Software Development
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            In the digital age, we believe that having a good software system is
            no longer a choice but a necessity for businesses across all
            industries. It enables companies to operate more efficiently,
            respond to customers promptly, and adapt to market changes rapidly.
          </p>
        </div>

        {/* Services Overview Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <FaCode className="text-accent text-2xl mr-3" />
              <h2 className="text-xl font-bold text-gray-800">
                Custom Software Solutions
              </h2>
            </div>
            <p className="text-gray-700">
              We create tailored software solutions that address your specific
              business challenges and align with your long-term goals.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Web Applications
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Mobile Apps
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                Enterprise Systems
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                APIs & Integrations
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <FaCloud className="text-accent text-2xl mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Why Choose Us</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaStar className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Technical Excellence
                  </h3>
                  <p className="text-sm text-gray-600">
                    Our team consists of certified experts with deep knowledge
                    across multiple technologies
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaStar className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Agile Methodology
                  </h3>
                  <p className="text-sm text-gray-600">
                    We follow iterative development with 2-week sprints for
                    maximum flexibility and transparency
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaStar className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Comprehensive Testing
                  </h3>
                  <p className="text-sm text-gray-600">
                    Rigorous QA processes with automated testing ensure
                    high-quality deliverables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Options */}
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-accent font-bold mb-6">
            Software Development Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border-t-4 border-blue-500 flex flex-col h-full transition-all duration-300 hover:shadow-md hover:bg-white">
              <div className="flex items-center mb-3">
                <FaDesktop className="text-blue-500 text-xl mr-2" />
                <h3 className="font-semibold text-gray-800">
                  Web Applications
                </h3>
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                Responsive, scalable web applications that work seamlessly
                across all devices and browsers.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 text-sm">
                <div className="font-semibold text-gray-700">Ideal for:</div>
                <div className="text-gray-600">
                  Business process automation, customer portals, e-commerce
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border-t-4 border-green-500 flex flex-col h-full transition-all duration-300 hover:shadow-md hover:bg-white">
              <div className="flex items-center mb-3">
                <FaMobile className="text-green-500 text-xl mr-2" />
                <h3 className="font-semibold text-gray-800">
                  Mobile Applications
                </h3>
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                Native and cross-platform mobile apps that deliver exceptional
                user experiences on iOS and Android.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 text-sm">
                <div className="font-semibold text-gray-700">Ideal for:</div>
                <div className="text-gray-600">
                  Field service, customer engagement, mobile commerce
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border-t-4 border-purple-500 flex flex-col h-full transition-all duration-300 hover:shadow-md hover:bg-white">
              <div className="flex items-center mb-3">
                <FaDatabase className="text-purple-500 text-xl mr-2" />
                <h3 className="font-semibold text-gray-800">
                  Enterprise Systems
                </h3>
              </div>
              <p className="text-sm text-gray-600 flex-grow">
                Robust, secure, and scalable enterprise applications that
                integrate with your existing infrastructure.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 text-sm">
                <div className="font-semibold text-gray-700">Ideal for:</div>
                <div className="text-gray-600">
                  ERP, CRM, business intelligence, workflow automation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="mt-16">
          <h2 className="text-2xl text-accent font-bold mb-8">
            Our Technology Expertise
          </h2>

          {/* Category Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                  activeCategory === category
                    ? "bg-accent text-white font-medium shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-lg">{techStacksData[category].icon}</span>
                <span>{techStacksData[category].name}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {techStacksData[activeCategory].name}
              </h3>
              <p className="text-gray-600">
                {techStacksData[activeCategory].description}
              </p>
            </div>

            {/* Technologies Grid with properly sized images */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStacksData[activeCategory].technologies.map(
                (tech, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-50 rounded-lg p-5 transition-all hover:shadow-md hover:bg-gray-100 cursor-pointer text-center"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    {/* Image container with fixed dimensions */}
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 flex items-center justify-center mb-4">
                        <img
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          className="max-h-16 max-w-16 object-contain"
                        />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        {tech.name}
                      </h4>
                    </div>

                    {/* Description if it exists */}
                    {tech.description && (
                      <p className="text-sm text-gray-600 mt-2">
                        {tech.description}
                      </p>
                    )}

                    {/* Info Tooltip */}
                    {hoveredTech === tech.name && (
                      <div className="absolute z-10 top-full left-0 mt-2 p-3 bg-white shadow-lg rounded-md w-64 text-sm text-gray-700 border border-gray-200">
                        {tech.description || `${tech.name} technology`}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Development Process Section */}
        <div className="mt-16">
          <h2 className="text-2xl text-accent font-bold mb-6">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We follow a structured approach to software development that ensures
            quality, transparency, and successful delivery.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {softwareDev?.map(({ title, content }, i) => (
              <div
                className="bg-white p-6 rounded-lg shadow-md relative border-l-4 border-orange-600 hover:shadow-lg transition-all duration-300"
                key={i}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h1 className="text-xl uppercase text-orange-600 font-semibold pb-2">
                      {title}
                    </h1>
                    <p className="text-md text-gray-700 leading-relaxed">
                      {content}
                    </p>

                    {i === 0 && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm border-l-4 border-blue-500">
                        <strong className="text-blue-700 block mb-1">
                          Our approach:
                        </strong>{" "}
                        We combine deep industry knowledge with technical
                        expertise to understand your business challenges and
                        define clear objectives.
                      </div>
                    )}
                    {i === 1 && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm border-l-4 border-blue-500">
                        <strong className="text-blue-700 block mb-1">
                          Our approach:
                        </strong>{" "}
                        We create detailed specifications and utilize rapid
                        prototyping to validate concepts early in the process.
                      </div>
                    )}
                    {i === 2 && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm border-l-4 border-blue-500">
                        <strong className="text-blue-700 block mb-1">
                          Our approach:
                        </strong>{" "}
                        We use agile methodologies with 2-week sprints to ensure
                        transparency and regular client feedback throughout
                        development.
                      </div>
                    )}
                    {i === 3 && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm border-l-4 border-blue-500">
                        <strong className="text-blue-700 block mb-1">
                          Our approach:
                        </strong>{" "}
                        We employ automated testing frameworks and comprehensive
                        QA processes to ensure reliability and performance.
                      </div>
                    )}
                    {i === 4 && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm border-l-4 border-blue-500">
                        <strong className="text-blue-700 block mb-1">
                          Our approach:
                        </strong>{" "}
                        We provide thorough documentation and training to ensure
                        a smooth transition and user adoption.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LGContainer>
  );
};

export default SoftwareDevelopment;
