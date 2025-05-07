import { staffAugmentation } from '../../utils/servicesData';
import LGContainer from '../LGContainer';

const StaffAugmentation = () => {
    const { services, whyChoose, benefits, industriesWeServe } =
        staffAugmentation;

    return (
        <LGContainer>
            <div className='px-6 lg:px-0'>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-accent font-bold pb-4'>
                        Staff Augmentation
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-700 pb-8 text-justify leading-relaxed'>
                        In today's dynamic business environment, having the
                        right talent at the right time is crucial for
                        maintaining a competitive edge. Our Staff Augmentation
                        services give your organization the flexibility and
                        expertise to meet project demands, fill skill gaps, and
                        drive growth. At RCC Colab Solutions, we offer
                        comprehensive staff augmentation solutions that align
                        with your specific requirements and business objectives.
                    </p>
                </div>
                <div className='flex flex-col gap-4 py-4 h-fit '>
                    <h1 className='text-2xl uppercase text-orange-600 font-semibold'>
                        What is Staff Augmentation?
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-700 text-justify leading-relaxed'>
                        Staff augmentation is a flexible outsourcing strategy
                        that enables you to hire skilled IT professionals on a
                        temporary or long-term basis. This approach allows you
                        to quickly scale your team with specialized talent,
                        ensuring you have the right resources to meet project
                        deadlines, implement new technologies, and achieve your
                        business goals.
                    </p>
                </div>
                <div className='flex flex-col gap-4 py-4 h-fit '>
                    <h1 className='text-2xl uppercase text-orange-600 font-semibold'>
                        Our Staff Augmentation Services
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
                        Benefits of Our Staff Augmentation Services
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

export default StaffAugmentation;
