// ITStrategyConsulting.jsx
import LGContainer from "../LGContainer";
import { ITStrategyAndConsulting } from "../../utils/servicesData";
import { FaChartLine, FaLightbulb, FaRocket } from "react-icons/fa";

const ITStrategyConsulting = () => {
  return (
    <LGContainer>
      <div className="px-6 lg:px-0">
        <div>
          <h1 className="text-3xl lg:text-4xl text-accent font-bold pb-4">
            IT Strategy and Consulting
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 text-justify leading-relaxed">
            Below is our consultant's step-by-step approach to crafting
            effective IT strategies that drive business growth for our clients.
          </p>
          <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-3">
              <FaChartLine className="text-accent text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-accent">
                How Our IT Strategy Services Transform Your Business
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Technology Alignment
                </h4>
                <p className="text-sm text-gray-600">
                  We ensure your IT investments directly support your business
                  objectives and provide measurable ROI.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Competitive Advantage
                </h4>
                <p className="text-sm text-gray-600">
                  Leverage technology to outperform competitors and capture new
                  market opportunities.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Digital Transformation
                </h4>
                <p className="text-sm text-gray-600">
                  Navigate the complexities of digital transformation with a
                  clear, actionable roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-10 py-10 h-fit">
          {ITStrategyAndConsulting?.map(({ title, content }, i) => (
            <div
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600"
              key={i}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                  {i + 1}
                </div>
                <h1 className="text-xl uppercase text-orange-600 font-semibold">
                  {title}
                </h1>
              </div>
              <p className="text-md text-gray-700 text-medium leading-relaxed text-justify ml-14">
                {content}
              </p>
              {i === 0 && (
                <div className="mt-4 ml-14 p-3 bg-blue-50 rounded text-sm">
                  <strong className="text-accent">Key Deliverable:</strong>{" "}
                  Comprehensive assessment report identifying strengths,
                  weaknesses, opportunities, and threats in your current IT
                  landscape.
                </div>
              )}
              {i === 1 && (
                <div className="mt-4 ml-14 p-3 bg-blue-50 rounded text-sm">
                  <strong className="text-accent">Key Deliverable:</strong>{" "}
                  Strategic IT roadmap aligned with your business goals, with
                  clear milestones and metrics for success.
                </div>
              )}
              {i === 2 && (
                <div className="mt-4 ml-14 p-3 bg-blue-50 rounded text-sm">
                  <strong className="text-accent">Key Deliverable:</strong>{" "}
                  Detailed implementation plan with resource allocation,
                  timeline, and risk mitigation strategies.
                </div>
              )}
              {i === 3 && (
                <div className="mt-4 ml-14 p-3 bg-blue-50 rounded text-sm">
                  <strong className="text-accent">Key Deliverable:</strong>{" "}
                  Performance monitoring framework with KPIs to track the
                  success of your IT strategy implementation.
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gradient-to-r from-accent to-blue-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaLightbulb className="text-yellow-300 text-3xl mr-3" />
            <h2 className="text-2xl font-bold">
              Our IT Strategy & Consulting Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 border-b border-white/30 pb-2">
                Industries
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Financial Services</li>
                <li>Healthcare & Life Sciences</li>
                <li>Manufacturing & Supply Chain</li>
                <li>Retail & E-commerce</li>
                <li>Professional Services</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 border-b border-white/30 pb-2">
                Technology Focus Areas
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cloud Migration & Strategy</li>
                <li>Digital Transformation</li>
                <li>Enterprise Architecture</li>
                <li>IT Governance & Compliance</li>
                <li>Technology Modernization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LGContainer>
  );
};

export default ITStrategyConsulting;
