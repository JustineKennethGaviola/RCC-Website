import LGContainer from '../LGContainer';
import { softwareDev } from '../../utils/servicesData';

const SoftwareDevelopment = () => {
    return (
        <LGContainer>
            <div className='px-6 lg:px-0'>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-accent font-bold pb-4'>
                        Software Development
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-700 text-justify leading-relaxed'>
                        In the digital age, we believe that having a good
                        software system is no longer a choice but a necessity
                        for businesses across all industries. It enables
                        companies to operate more efficiently, respond to
                        customers promptly, and adapt to market changes rapidly.
                    </p>
                    <p className='text-xl text-gray-800 font-semibold pt-10'>
                        Key steps of our development team in the software
                        development process.
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-10 py-10 h-fit '>
                    {softwareDev?.map(({ title, content }, i) => (
                        <div key={i}>
                            <h1 className='text-xl uppercase text-orange-600 font-semibold pb-2'>
                                {i + 1 + '. '}
                                {title}
                            </h1>
                            <p className='text-md text-gray-700 text-medium leading-relaxed text-justify'>
                                {content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </LGContainer>
    );
};

export default SoftwareDevelopment;
