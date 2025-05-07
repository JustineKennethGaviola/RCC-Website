import LGContainer from '../LGContainer';
import { appModernization } from '../../utils/servicesData';

const AppModernization = () => {
    return (
        <LGContainer>
            <div className='px-6 lg:px-0'>
                <div>
                    <h1 className='text-3xl lg:text-4xl text-accent font-bold pb-4'>
                        Application Modernization
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-700 text-justify leading-relaxed'>
                        Moving legacy applications onto a modern infrastructure
                        empowers businesses to reduce IT spending and convert
                        savings into a competitive advantage. Our team will use
                        the following strategy to modernize the application
                        depending on each client's current and future business
                        needs.
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 gap-14 py-10 lg:h-80 '>
                    {appModernization?.map(({ title, abbr, content }, i) => (
                        <div className='' key={i}>
                            <h1 className='text-xl uppercase text-orange-600 font-semibold pb-2'>
                                {abbr ? (
                                    <abbr
                                        className='cursor-pointer no-underline'
                                        title={abbr}
                                    >
                                        {title}
                                    </abbr>
                                ) : (
                                    title
                                )}
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

export default AppModernization;
