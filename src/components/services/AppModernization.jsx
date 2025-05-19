// AppModernization.jsx
import LGContainer from "../LGContainer";
import { appModernization } from "../../utils/servicesData";
import { FaArrowRight, FaTools, FaCloud, FaCode } from "react-icons/fa";

const AppModernization = () => {
  return (
    <LGContainer>
      <div className="px-6 lg:px-0">
        <div>
          <h1 className="text-3xl lg:text-4xl text-accent font-bold pb-4">
            Application Modernization
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 text-justify leading-relaxed">
            Moving legacy applications onto a modern infrastructure empowers
            businesses to reduce IT spending and convert savings into a
            competitive advantage. Our team will use the following strategy to
            modernize the application depending on each client's current and
            future business needs.
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl text-blue-700 font-semibold">
              Why Modernize Your Applications?
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <FaArrowRight className="text-blue-600 mt-1.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Reduced Costs:</strong> Modernized applications
                  typically reduce operational costs by 30-50% through efficient
                  resource utilization and lower maintenance requirements.
                </span>
              </li>
              <li className="flex items-start">
                <FaArrowRight className="text-blue-600 mt-1.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Enhanced Security:</strong> Legacy systems often lack
                  critical security features, making them vulnerable to modern
                  threats and compliance issues.
                </span>
              </li>
              <li className="flex items-start">
                <FaArrowRight className="text-blue-600 mt-1.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Improved Performance:</strong> Modern applications
                  deliver better performance, supporting growing workloads and
                  user expectations.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-14 py-10">
          {appModernization?.map(({ title, abbr, content }, i) => (
            <div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 border-t-4 border-orange-600"
              key={i}
            >
              <div className="flex items-center mb-4">
                {i === 0 && (
                  <FaCloud className="text-orange-600 text-3xl mr-3" />
                )}
                {i === 1 && (
                  <FaCode className="text-orange-600 text-3xl mr-3" />
                )}
                {i === 2 && (
                  <FaTools className="text-orange-600 text-3xl mr-3" />
                )}
                <h1 className="text-xl uppercase text-orange-600 font-semibold">
                  {abbr ? (
                    <abbr className="cursor-pointer no-underline" title={abbr}>
                      {title}
                    </abbr>
                  ) : (
                    title
                  )}
                </h1>
              </div>
              <p className="text-md text-gray-700 text-medium leading-relaxed text-justify">
                {content}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="text-gray-800 font-semibold mb-2">
                  Key Benefits:
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  {i === 0 && (
                    <>
                      <li>Reduced infrastructure costs</li>
                      <li>Improved scalability and reliability</li>
                      <li>Enhanced security posture</li>
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <li>Improved user experience</li>
                      <li>Better cross-platform compatibility</li>
                      <li>Easier future updates and maintenance</li>
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <li>Faster time-to-market for new features</li>
                      <li>Reduced development complexity</li>
                      <li>Improved code quality and reliability</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl text-accent font-bold mb-4">
            Our Modernization Process
          </h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-800">Assessment</h3>
              <p className="text-sm text-gray-600 mt-2">
                Evaluate existing systems and define modernization goals
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-800">Strategy</h3>
              <p className="text-sm text-gray-600 mt-2">
                Develop a roadmap with prioritized modernization targets
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-800">Implementation</h3>
              <p className="text-sm text-gray-600 mt-2">
                Execute modernization with minimal business disruption
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-800">Optimization</h3>
              <p className="text-sm text-gray-600 mt-2">
                Continuous improvement and refinement of modernized systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </LGContainer>
  );
};

export default AppModernization;
