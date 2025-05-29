// StaffAugmentation.jsx
import { staffAugmentation } from "../../utils/servicesData";
import LGContainer from "../LGContainer";
import {
  FaUserPlus,
  FaChartLine,
  FaPuzzlePiece,
  FaUsers,
} from "react-icons/fa";

const StaffAugmentation = () => {
  const { services, whyChoose, benefits, industriesWeServe } =
    staffAugmentation;

  return (
    <LGContainer>
      <div className="px-6 lg:px-0">
        <div>
          <h1 className="text-3xl lg:text-4xl text-accent font-bold pb-4">
            Staff Augmentation
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 pb-8 text-justify leading-relaxed">
            In today's dynamic business environment, having the right talent at
            the right time is crucial for maintaining a competitive edge. Our
            Staff Augmentation services give your organization the flexibility
            and expertise to meet project demands, fill skill gaps, and drive
            growth. At RCC Colab Solutions, we offer comprehensive staff
            augmentation solutions that align with your specific requirements
            and business objectives.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent">
            <div className="flex items-center mb-4">
              <FaUserPlus className="text-accent text-2xl mr-3" />
              <h2 className="text-xl uppercase text-orange-600 font-semibold">
                What is Staff Augmentation?
              </h2>
            </div>
            <p className="text-gray-700 text-justify leading-relaxed">
              Staff augmentation is a flexible outsourcing strategy that enables
              you to hire skilled IT professionals on a temporary or long-term
              basis. This approach allows you to quickly scale your team with
              specialized talent, ensuring you have the right resources to meet
              project deadlines, implement new technologies, and achieve your
              business goals.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-semibold text-accent">
                  On-Demand Expertise
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Access specialized skills exactly when you need them
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-semibold text-accent">
                  Flexible Scaling
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Quickly scale your team up or down based on project needs
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent to-blue-700 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-yellow-300 text-2xl mr-3" />
              <h2 className="text-xl font-bold">
                Staff Augmentation vs. Traditional Hiring
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold pb-2 border-b border-white/30">
                  Traditional Hiring
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-300 mr-1 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>2-3 months to hire</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-300 mr-1 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Full employment costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-300 mr-1 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Difficult to adjust team size</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold pb-2 border-b border-white/30">
                  Staff Augmentation
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-300 mr-1 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>3-4 weeks to onboard</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-300 mr-1 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Predictable project-based costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-300 mr-1 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Scale up or down as needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-4 h-fit">
          <h1 className="text-2xl uppercase text-orange-600 font-semibold flex items-center">
            <FaPuzzlePiece className="mr-2" />
            Our Staff Augmentation Services
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {services?.map(({ title, content }, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-lg uppercase text-accent font-bold pb-2 mb-4 border-b border-gray-200">
                  {title}
                </h1>
                <ul className="flex flex-col list-disc pl-6 space-y-3 text-justify">
                  {content.map(({ title, content }, j) => {
                    return (
                      <li
                        key={j}
                        className="text-md text-gray-700 text-medium leading-relaxed"
                      >
                        <span className="font-semibold text-gray-900">
                          {title}:
                        </span>{" "}
                        {content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 py-4 h-fit">
          <h1 className="text-2xl uppercase text-orange-600 font-semibold flex items-center">
            <FaUsers className="mr-2" />
            Benefits of Our Staff Augmentation Services
          </h1>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits?.map(({ title, content }, i) => {
              return (
                <div
                  key={i}
                  className="bg-white p-5 rounded-lg shadow-md flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{content}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl text-accent font-bold mb-4">
            Our Staff Augmentation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-800">Assessment</h3>
              <p className="text-sm text-gray-600 mt-2">
                We analyze your needs and skill requirements
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-800">Selection</h3>
              <p className="text-sm text-gray-600 mt-2">
                We match the perfect candidates from our talent pool
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-800">Integration</h3>
              <p className="text-sm text-gray-600 mt-2">
                We ensure seamless onboarding with your team
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-800">Management</h3>
              <p className="text-sm text-gray-600 mt-2">
                We provide ongoing support and performance monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </LGContainer>
  );
};

export default StaffAugmentation;
