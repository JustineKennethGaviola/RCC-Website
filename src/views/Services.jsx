import React from 'react';
import { useLocation } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';
import aboutBG from '../assets/aboutus-bg.jpg';
import ServicesHelmet from '../components/Helmet/ServicesHelmet';
import LGContainer from '../components/LGContainer';
import XLContainer from '../components/XLContainer';
import RoboticsProcessAutomation from '../components/services/RoboticsProcessAutomation';
import ITStrategyConsulting from '../components/services/ITStrategyConsulting';
import SoftwareDevelopment from '../components/services/SoftwareDevelopment';
import AppModernization from '../components/services/AppModernization';
import StaffAugmentation from '../components/services/StaffAugmentation';
import SupportAndMaintenance from '../components/services/SupportAndMaintenance';

const Services = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const sname = params.get('s');

    const renderSection = (sectionName) => {
        switch (sectionName) {
            case 'appmodernization':
                return <AppModernization />;

            case 'softwaredevelopment':
                return <SoftwareDevelopment />;

            case 'itstrategyconsulting':
                return <ITStrategyConsulting />;

            case 'roboticsprocessautomation':
                return <RoboticsProcessAutomation />;

            case 'staffaugmentation':
                return <StaffAugmentation />;

            case 'supportandmaintenance':
                return <SupportAndMaintenance />;

            default:
                return (
                    <>
                        <div>
                            <LGContainer>
                                <div className='flex flex-col h-fit text-accent py-5 px-6 lg:px-0'>
                                    <Fade
                                        direction='up'
                                        delay={200}
                                        triggerOnce
                                    >
                                        <h1 className='text-4xl w-full text-center font-semibold pb-12'>
                                            What We Do
                                        </h1>
                                    </Fade>
                                    <div className='flex flex-col gap-5 text-gray-700 leading-9 text-justify text-lg lg:text-xl'>
                                        <p>
                                            Our comprehensive services encompass{' '}
                                            <span className='font-semibold text-orange-600'>
                                                Application Modernization
                                            </span>
                                            ,{' '}
                                            <span className='font-semibold text-orange-600'>
                                                Software Development
                                            </span>
                                            ,{' '}
                                            <span className='font-semibold text-orange-600'>
                                                IT Strategy and Consulting
                                            </span>
                                            ,{' '}
                                            <span className='font-semibold text-orange-600'>
                                                Robotics Process Automation
                                                (RPA)
                                            </span>
                                            ,{' '}
                                            <span className='font-semibold text-orange-600'>
                                                Staff Augmentation
                                            </span>
                                            , and{' '}
                                            <span className='font-semibold text-orange-600'>
                                                Support and Maintenance
                                            </span>
                                            . Our dedicated team is committed to
                                            delivering innovative and customized
                                            solutions to help businesses meet
                                            the evolving needs of customers and
                                            markets.
                                        </p>
                                    </div>
                                </div>
                            </LGContainer>
                        </div>
                        <div className='grid gap-10 py-10'>
                            <AppModernization />
                            <SoftwareDevelopment />
                            <ITStrategyConsulting />
                            <RoboticsProcessAutomation />
                            <StaffAugmentation />
                            <SupportAndMaintenance />
                        </div>
                    </>
                );
        }
    };

    return (
        <div>
            <ServicesHelmet />
            <div
                className='bg-accent bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: `url(${aboutBG})`,
                    clipPath:
                        'polygon(100% 1%, 100% 85%, 50% 100%, 0 85%, 0 0)',
                }}
            >
                <div className='bg-accent/80 '>
                    <XLContainer>
                        <div className='flex flex-col items-center justify-center pt-48 pb-48 h-fit'>
                            <Zoom>
                                <h1 className='text-white/90 text-5xl lg:text-7xl font-medium pb-1'>
                                    Our Services
                                </h1>
                            </Zoom>
                        </div>
                    </XLContainer>
                </div>
            </div>

            <div className='grid gap-16 py-20'>{renderSection(sname)}</div>
        </div>
    );
};

export default Services;
