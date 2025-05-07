import React from 'react';
import LGContainer from '../LGContainer';
import { supportAndMaintenance } from '../../utils/servicesData';

const SupportAndMaintenance = () => {
    const { services, whyChoose, benefits, industriesWeServe } =
        supportAndMaintenance;

    return (
        <LGContainer>
            <div className='px-6 lg:px-0'>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-accent font-bold pb-4'>
                        Support and Maintenance
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-700 pb-8 text-justify leading-relaxed'>
                        In today’s rapidly evolving technological environment,
                        maintaining the integrity and performance of your IT
                        infrastructure is crucial. Our comprehensive Support and
                        Maintenance services are designed to ensure your systems
                        are always up-to-date, secure, and running at peak
                        efficiency. At RCC Colab Solutions, we offer tailored
                        support and maintenance solutions that provide peace of
                        mind and allow you to focus on your core business
                        activities.
                    </p>
                </div>
                <div className='flex flex-col gap-4 py-4 h-fit '>
                    <h1 className='text-2xl uppercase text-orange-600 font-semibold'>
                        Our Support and Maintenance Services
                    </h1>
                    {services?.map(({ title, content }, i) => (
                        <div key={i}>
                            <h1 className='text-lg uppercase text-gray-700 font-bold pb-2'>
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
                
                <div className='flex flex-col gap-4 py-4 h-fit '>
                    <h1 className='text-2xl uppercase text-orange-600 font-semibold'>
                        Benefits of Our Support and Maintenance Services
                    </h1>
                    <ul className='flex flex-col list-disc pl-6'>
                        {benefits?.map(({ title, content }, i) => {
                            return (
                                <li
                                    key={i}
                                    className='text-md text-gray-700 text-medium leading-relaxed text-justify'
                                >
                                    <b>{title}:</b> {content}
                                </li>
                            );
                        })}
                    </ul>
                </div>
               
            </div>
        </LGContainer>
    );
};

export default SupportAndMaintenance;
