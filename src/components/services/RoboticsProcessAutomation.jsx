import LGContainer from '../LGContainer';
import { RPA } from '../../utils/servicesData';

const RoboticsProcessAutomation = () => {
    const {
        RCCColabSolutionsforRPA,
        industriesWeServe,
        services,
        trainingAndChangeManagement,
    } = RPA;
    return (
        <LGContainer>
            <div className='px-6 lg:px-0'>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-accent font-bold pb-4'>
                        Robotics Process Automation (RPA)
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-700 pb-8 text-justify leading-relaxed'>
                        In today’s fast-paced and competitive business
                        environment, organizations constantly seek ways to
                        streamline operations and reduce costs. Robotics Process
                        Automation (RPA) has emerged as a powerful solution to
                        achieve these goals by automating repetitive and
                        rule-based tasks. We offer comprehensive RPA services designed to help your
                        business unlock the full potential of automation.
                    </p>
                </div>
                <div className='flex flex-col gap-4 py-4 h-fit '>
                    <h1 className='text-2xl uppercase text-orange-600 font-semibold'>
                        What is RPA?
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-700 text-justify leading-relaxed'>
                        Robotics Process Automation (RPA) is a game-changer. It
                        involves using software robots or 'bots' to automate
                        highly repetitive and routine tasks that human workers
                        usually perform. These tasks include data entry,
                        transaction processing, and complex decision-making
                        processes. RPA enables businesses to improve accuracy,
                        increase efficiency, and free up employees to focus on
                        more strategic and value-added activities.
                    </p>
                </div>
                <div className='flex flex-col gap-4 py-4 h-fit '>
                    <h1 className='text-2xl uppercase text-orange-600 font-semibold'>
                        Our RPA Services
                    </h1>
                    <div className='flex flex-col gap-3'>
                        {services?.map(({ title, content }, i) => (
                            <div key={i}>
                                <h1 className='uppercase text-gray-700 font-bold pb-2'>
                                    {title}
                                </h1>
                                <ul className='flex flex-col list-disc pl-6'>
                                    {content.map(({ title, content }, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className='text-md text-gray-700 text-medium leading-relaxed text-justify'
                                            >
                                                <span className='font-semibold'>
                                                    {title}:
                                                </span>{' '}
                                                {content}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4 py-4 h-fit '>
                    <h1 className='text-2xl uppercase text-orange-600 font-semibold'>
                        Training and Change Management
                    </h1>
                    <ul className='flex flex-col list-disc pl-6'>
                        {trainingAndChangeManagement.map(
                            ({ title, content }, i) => {
                                return (
                                    <li
                                        key={i}
                                        className='text-md text-gray-700 text-medium leading-relaxed text-justify'
                                    >
                                        <b>{title}:</b> {content}
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
                
                
            
            </div>
        </LGContainer>
    );
};

export default RoboticsProcessAutomation;
