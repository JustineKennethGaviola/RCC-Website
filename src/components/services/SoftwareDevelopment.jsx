// SoftwareDevelopment.jsx
import LGContainer from "../LGContainer";
import { softwareDev } from "../../utils/servicesData";
import {
  FaCode,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaDesktop,
} from "react-icons/fa";

const SoftwareDevelopment = () => {
  return (
    <LGContainer>
      <div className="px-6 lg:px-0">
        <div>
          <h1 className="text-3xl lg:text-4xl text-accent font-bold pb-4">
            Software Development
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 text-justify leading-relaxed">
            In the digital age, we believe that having a good software system is
            no longer a choice but a necessity for businesses across all
            industries. It enables companies to operate more efficiently,
            respond to customers promptly, and adapt to market changes rapidly.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent">
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
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent">
              <div className="flex items-center mb-4">
                <FaCloud className="text-accent text-2xl mr-3" />
                <h2 className="text-xl font-bold text-gray-800">
                  Technologies We Excel In
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-gray-800 font-semibold">
                    Frontend Application
                  </h3>
                  <p className="text-sm text-gray-600">
                    React, HTML5, CSS3, JavaScript, Figma
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold">
                    Backend / API Integration
                  </h3>
                  <p className="text-sm text-gray-600">
                    Node.js, Python, ASP.NET, Swagger, Postman, Laravel
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold">
                    Mobile Application
                  </h3>
                  <p className="text-sm text-gray-600">
                    Kotlin, Flutter, React Native, Android, iOS
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold">Databases</h3>
                  <p className="text-sm text-gray-600">
                    SQL Server, PostgreSQL, MariaDB, MongoDB, Firebase, Oracle
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold">
                    Code Repository
                  </h3>
                  <p className="text-sm text-gray-600">
                    GitHub, GitLab, Bitbucket
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold">
                    Code Quality Review
                  </h3>
                  <p className="text-sm text-gray-600">SonarQube, Fortify</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-800 font-semibold pt-10">
            Key steps of our development team in the software development
            process.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 py-10 h-fit">
          {softwareDev?.map(({ title, content }, i) => (
            <div
              className="bg-white p-6 rounded-lg shadow-md relative border-l-4 border-orange-600"
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
                  <p className="text-md text-gray-700 text-medium leading-relaxed text-justify">
                    {content}
                  </p>

                  {i === 0 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
                      <strong className="text-blue-700">Our approach:</strong>{" "}
                      We combine deep industry knowledge with technical
                      expertise to understand your business challenges and
                      define clear objectives.
                    </div>
                  )}
                  {i === 1 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
                      <strong className="text-blue-700">Our approach:</strong>{" "}
                      We create detailed specifications and utilize rapid
                      prototyping to validate concepts early in the process.
                    </div>
                  )}
                  {i === 2 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
                      <strong className="text-blue-700">Our approach:</strong>{" "}
                      We use agile methodologies with 2-week sprints to ensure
                      transparency and regular client feedback throughout
                      development.
                    </div>
                  )}
                  {i === 3 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
                      <strong className="text-blue-700">Our approach:</strong>{" "}
                      We employ automated testing frameworks and comprehensive
                      QA processes to ensure reliability and performance.
                    </div>
                  )}
                  {i === 4 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
                      <strong className="text-blue-700">Our approach:</strong>{" "}
                      We provide thorough documentation and training to ensure a
                      smooth transition and user adoption.
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl text-accent font-bold mb-4">
            Software Development Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-blue-500 flex flex-col h-full">
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
            <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-green-500 flex flex-col h-full">
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
            <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-purple-500 flex flex-col h-full">
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
      </div>
    </LGContainer>
  );
};

export default SoftwareDevelopment;
