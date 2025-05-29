// RoboticsProcessAutomation.jsx
import LGContainer from "../LGContainer";
import { RPA } from "../../utils/servicesData";
import {
  FaRobot,
  FaChartLine,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const RoboticsProcessAutomation = () => {
  const {
    RCCColabSolutionsforRPA,
    industriesWeServe,
    services,
    trainingAndChangeManagement,
  } = RPA;
  return (
    <LGContainer>
      <div className="px-6 lg:px-0">
        <div>
          <h1 className="text-3xl lg:text-4xl text-accent font-bold pb-4">
            Robotics Process Automation (RPA)
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 pb-4 text-justify leading-relaxed">
            In today's fast-paced and competitive business environment,
            organizations constantly seek ways to streamline operations and
            reduce costs. Robotics Process Automation (RPA) has emerged as a
            powerful solution to achieve these goals by automating repetitive
            and rule-based tasks.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 pb-8 text-justify leading-relaxed">
            We offer comprehensive RPA services designed to help your business
            unlock the full potential of automation.
          </p>

          <div className="bg-gradient-to-r from-accent to-blue-700 text-white rounded-lg p-6 shadow-lg mb-8">
            <div className="flex items-center">
              <FaRobot className="text-4xl mr-4" />
              <div>
                <h2 className="text-2xl font-bold">
                  Transform Your Business with RPA
                </h2>
                <p className="mt-2">Companies implementing RPA see up to:</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-yellow-300">40-75%</div>
                <div className="mt-2 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-yellow-300">3-10x</div>
                <div className="mt-2 text-sm">Faster Processing</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-yellow-300">100%</div>
                <div className="mt-2 text-sm">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4 h-fit">
          <h1 className="text-2xl uppercase text-orange-600 font-semibold flex items-center">
            <FaRobot className="mr-2" />
            What is RPA?
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 text-justify leading-relaxed">
              Robotics Process Automation (RPA) is a game-changer. It involves
              using software robots or 'bots' to automate highly repetitive and
              routine tasks that human workers usually perform. These tasks
              include data entry, transaction processing, and complex
              decision-making processes. RPA enables businesses to improve
              accuracy, increase efficiency, and free up employees to focus on
              more strategic and value-added activities.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-accent">Rule-Based</h3>
                <p className="text-sm mt-2">
                  Automates processes with clear, defined rules and minimal
                  exceptions
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-accent">Non-Invasive</h3>
                <p className="text-sm mt-2">
                  Works with existing systems without requiring complex
                  integrations
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-accent">High ROI</h3>
                <p className="text-sm mt-2">
                  Delivers rapid returns with minimal upfront investment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4 h-fit">
          <h1 className="text-2xl uppercase text-orange-600 font-semibold flex items-center">
            <FaBriefcase className="mr-2" />
            Our RPA Services
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {services?.map(({ title, content }, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md h-full">
                <h1 className="text-xl uppercase text-accent font-bold pb-4 border-b border-gray-200">
                  {title}
                </h1>
                <ul className="flex flex-col list-disc pl-6 space-y-4 mt-4 text-justify">
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
            <FaGraduationCap className="mr-2" />
            Training and Change Management
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4 text-justify">
              Successful RPA implementation requires more than just
              technology—it requires effectively managing the human side of
              change. Our comprehensive training and change management services
              ensure a smooth transition to automated processes:
            </p>
            <ul className="grid md:grid-cols-2 gap-6">
              {trainingAndChangeManagement.map(({ title, content }, i) => {
                return (
                  <li key={i} className="flex p-4 bg-gray-50 rounded-lg">
                    <div className="mr-3 text-orange-600 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{title}</div>
                      <div className="text-gray-600 text-sm mt-1 text-justify">
                        {content}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl text-accent font-bold mb-4 flex items-center">
            <FaChartLine className="mr-2" />
            RPA Implementation Results
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-800 mb-3">
                Financial Services
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Automated loan processing reduced processing time from 3 days to
                10 minutes with 100% accuracy.
              </p>
              <div className="text-accent font-semibold">
                96% Time Reduction
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-800 mb-3">Healthcare</h3>
              <p className="text-sm text-gray-600 mb-3">
                Streamlined insurance claims processing, reducing manual effort
                by 85% and errors by 99%.
              </p>
              <div className="text-accent font-semibold">68% Cost Savings</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-800 mb-3">
                Manufacturing
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Automated order processing and inventory management, reducing
                fulfillment time by 75%.
              </p>
              <div className="text-accent font-semibold">
                40% Productivity Increase
              </div>
            </div>
          </div>
        </div>
      </div>
    </LGContainer>
  );
};

export default RoboticsProcessAutomation;
