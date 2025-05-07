import LGContainer from '../LGContainer';
import {
    ITStrategyAndConsulting
} from '../../utils/servicesData';


const ITStrategyConsulting = () => {
    return (
        <LGContainer>
            <div className='px-6 lg:px-0'>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-accent font-bold pb-4'>
                        IT Strategy and Consulting
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-700 text-justify leading-relaxed'>
                        Below is our consultant's step-by-step approach to
                        crafting effective IT strategies that drive business
                        growth for our clients.
                    </p>
                </div>
                <div className='grid gap-10 py-10 h-fit '>
                    {ITStrategyAndConsulting?.map(({ title, content }, i) => (
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

export default ITStrategyConsulting;
