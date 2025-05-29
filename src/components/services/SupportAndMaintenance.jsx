import LGContainer from "../LGContainer";
import { supportAndMaintenance } from "../../utils/servicesData";
import { FaTools, FaShieldAlt, FaChartLine } from "react-icons/fa";

const SupportAndMaintenance = () => {
  const { services, whyChoose, benefits, industriesWeServe } =
    supportAndMaintenance;

  return (
    <LGContainer>
      <div className="px-6 lg:px-0">
        <div>
          <h1 className="text-3xl lg:text-4xl text-accent font-bold pb-4">
            Support and Maintenance
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 pb-8 text-justify leading-relaxed">
            In today's rapidly evolving technological environment, maintaining
            the integrity and performance of your IT infrastructure is crucial.
            Our comprehensive Support and Maintenance services are designed to
            ensure your systems are always up-to-date, secure, and running at
            peak efficiency. At RCC Colab Solutions, we offer tailored support
            and maintenance solutions that provide peace of mind and allow you
            to focus on your core business activities.
          </p>

          <div className="bg-gradient-to-r from-accent to-blue-700 text-white rounded-lg p-6 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <FaShieldAlt className="text-4xl mr-4 text-yellow-300" />
              <div>
                <h2 className="text-2xl font-bold">
                  Proactive IT Support & Maintenance
                </h2>
                <p className="mt-2">
                  Don't wait for systems to fail. Our proactive approach
                  identifies and resolves issues before they impact your
                  business.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-yellow-300">99.9%</div>
                <div className="mt-2 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="mt-2 text-sm">Monitoring & Support</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-yellow-300">
                  30-60min
                </div>
                <div className="mt-2 text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-4 h-fit">
          <h1 className="text-2xl uppercase text-orange-600 font-semibold flex items-center">
            <FaTools className="mr-2" />
            Our Support and Maintenance Services
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

        <div className="flex flex-col gap-4 py-8 h-fit">
          <h1 className="text-2xl uppercase text-orange-600 font-semibold flex items-center">
            <FaChartLine className="mr-2" />
            Benefits of Our Support and Maintenance Services
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
                  <p className="text-sm text-gray-600 text-justify">
                    {content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LGContainer>
  );
};

export default SupportAndMaintenance;
