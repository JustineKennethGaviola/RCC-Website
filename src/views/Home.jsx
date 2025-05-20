import { useRef } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import APPModernization from '../assets/app-modernization.jpg';
import rcchome from '../assets/home-bg.jpg';
import ITStrategy from '../assets/it-strategy.jpg';
import Maintenance from '../assets/maintenance.jpg';
import RPA from '../assets/rpa.webp';
import SoftwareDev from '../assets/software-development.jpg';
import StaffAugmentation from '../assets/staff-augmentation.jpg';
import HomeHelmet from '../components/Helmet/HomeHelmet';
import XLContainer from '../components/XLContainer';
import MultiSysLogo from '../assets/msys-logo.png';
import YalamChili from '../assets/yalamanchili.png';
import SemiraraCorp from '../assets/semirara.png';

const Home = () => {
    const navigate = useNavigate();
    const getStartedRef = useRef();

    const getStarted = () => {
        if (getStartedRef.current) {
            getStartedRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='flex flex-col scroll-smooth bg-gray-100 h-fit w-full'>
            <HomeHelmet />
            <div
                className='flex items-center bg-no-repeat bg-cover bg-center overflow-hidden bg-gradient-to-tr'
                style={{
                    backgroundImage: `url(${rcchome})`,
                    clipPath:
                        'polygon(100% 0, 100% 100%, 50% 91%, 0 100%, 0 0)',
                }}
            >
                <div className='w-full bg-accent/90 pt-20 px-8 lg:pt-14 md:pb-44 h-[130vh] md:h-fit'>
                    <div className=' max-w-screen-xl cursor-default mx-auto'>
                        <div className='text-center'>
                            <Fade direction='down' duration={600}>
                                <div className='text-3xl md:text-4xl lg:text-5xl font-semibold pt-24 pb-2 lg:pb-0'>
                                    <h1 className=' text-white/90'>
                                        Transform your Ideas into
                                    </h1>
                                    <h1 className=' text-cyan-400 pt-4'>
                                        Powerful Software Solutions
                                    </h1>
                                </div>
                            </Fade>
                            <Fade direction='up'>
                                <p className='mt-6 max-w-screen-md clip font-normal mx-auto text-sm lg:text-md leading-7 text-white/90 text-justify'>
                                    RCC Colab Solutions will collaborate to turn
                                    your ideas into innovative, scalable
                                    software solutions. By combining
                                    cutting-edge solutions and deep industry
                                    expertise, we can help keep your
                                    organization efficient and productive and
                                    ensure customer satisfaction.
                                </p>
                            </Fade>
                        </div>
                        <div className='mt-16 roun flex items-center justify-center'>
                            <Fade direction='up' delay={300}>
                                <button
                                    onClick={getStarted}
                                    className='text-white border-2 border-orange-500 font-medium md:text-xl hover:scale-95 transition-all duration-200 tracking-wider bg-transparent rounded-r-full rounded-l-full px-8 py-2'
                                >
                                    Get Started
                                </button>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={getStartedRef} className='bg-gray-100'>
                <XLContainer>
                    <div className='flex flex-col items-center pt-24 pb-40 px-6 lg:px-12'>
                        <Fade direction='up' duration={300} triggerOnce>
                            <h1 className='text-2xl lg:text-4xl text-accent text-center  font-bold lg:font-semibold pb-12'>
                                What RCC Colab Solutions
                                <br className='md:hidden' /> Does?
                            </h1>
                        </Fade>
                        <div className='flex flex-col gap-8 text-gray-700 leading-9 text-justify lg:px-14 text-xl'>
                            <Fade
                                direction='up'
                                cascade
                                damping={0.3}
                                delay={200}
                                duration={300}
                                triggerOnce
                            >
                                <p>
                                    <span className='text-accent font-semibold'>
                                        RCC Colab Solutions Inc.
                                    </span>{' '}
                                    offers end-to-end personalized business
                                    solutions, understanding that each company
                                    has unique needs and goals. We are here to
                                    help businesses unlock their full potential
                                    through emerging and cutting-edge solutions.
                                </p>
                                <p>
                                    Whether you're a startup or an established
                                    company, RCC Colab Solutions is eager to
                                    hear about your business initiative and help
                                    enhance your digital presence, streamline
                                    operations, and improve customer engagement
                                    through our innovative software solutions.
                                </p>
                                <p>
                                    We are thrilled to collaborate with your
                                    team and identify the best IT services and
                                    solutions to create significant value for
                                    your organization.
                                </p>
                            </Fade>
                        </div>
                    </div>
                </XLContainer>
            </div>

            <div
                className='bg-accent h-fit'
                style={{
                    clipPath:
                        'polygon(50% 0%, 100% 2%, 100% 100%, 50% 98%, 0 100%, 0 2%)',
                }}
            >
                <XLContainer>
                    <div className='flex flex-col items-center pt-32 pb-32 lg:pb-52 px-6 lg:px-12'>
                        <Fade direction='up' duration={300} triggerOnce>
                            <h1 className='text-4xl text-white font-semibold pb-12'>
                                Our Services
                            </h1>
                        </Fade>

                        <div className='w-full h-fit flex flex-col lg:px-10 gap-24 lg:gap-52 pt-8 lg:pt-28'>
                            {/* App Modernization */}
                            <div className='grid md:pr-20 lg:pr-0 lg:grid-cols-2 gap-28 lg:min-h-[50vh]'>
                                <div className='text-white/90'>
                                    <Fade
                                        direction='left'
                                        cascade
                                        damping={0.2}
                                        duration={300}
                                        triggerOnce
                                    >
                                        <h1 className='font-semibold w-full text-2xl lg:text-3xl pb-6'>
                                            Application Modernization
                                        </h1>
                                        <p className='text-lg lg:text-xl font-light text-justify leading-relaxed'>
                                            RCC Colab Solutions believes that
                                            businesses should consider
                                            modernizing and simplifying older
                                            versions of applications to stay
                                            competitive in today&apos;s rapidly
                                            evolving digital landscape.
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    '/services?s=appmodernization'
                                                )
                                            }
                                            className='flex group items-center gap-3 mt-8 lg:mt-12 text-accent font-medium ring-4 ring-cyan-400/20 rounded-lg text-lg md:text-md lg:text-lg px-6 py-2 tracking-wider bg-cyan-400'
                                        >
                                            Learn more
                                            <FaArrowRightLong className='group-hover:scale-125 group-hover:translate-x-1 transition-all ease-out' />
                                        </button>
                                    </Fade>
                                </div>
                                <Fade direction='right' triggerOnce>
                                    <div className='hidden lg:block relative h-80 overflow-hidden rounded-xl'>
                                        <img
                                            className='w-full hover:scale-125 transition-all ease-in-out absolute bottom-0'
                                            src={APPModernization}
                                            alt='Application Modernization'
                                        />
                                    </div>
                                </Fade>
                            </div>
                            {/* Software Development */}
                            <div className='grid md:pr-20 lg:pr-0 lg:grid-cols-2 gap-28 lg:min-h-[50vh]'>
                                <Fade direction='left' triggerOnce>
                                    <div className='relative hidden lg:block h-80 overflow-hidden rounded-xl'>
                                        <img
                                            className='w-full hover:scale-125 transition-all ease-in-out absolute bottom-0'
                                            src={SoftwareDev}
                                            alt='Software Development'
                                        />
                                    </div>
                                </Fade>

                                <div className='text-white/90'>
                                    <Fade
                                        direction='right'
                                        cascade
                                        damping={0.2}
                                        duration={300}
                                        triggerOnce
                                    >
                                        <h1 className='font-semibold lg:text-right w-full text-2xl lg:text-3xl pb-6'>
                                            Software Development
                                        </h1>
                                        <p className=' text-lg lg:text-xl font-light text-justify  leading-relaxed'>
                                            We customize software solutions
                                            tailored to businesses' specific
                                            needs, including web applications,
                                            mobile apps, and enterprise
                                            software.
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    '/services?s=softwaredevelopment'
                                                )
                                            }
                                            className='flex group lg:ml-auto items-center gap-3 mt-8 lg:mt-12 text-accent font-medium ring-4 ring-cyan-400/20 rounded-lg text-lg md:text-md lg:text-lg px-6 py-2 tracking-wider bg-cyan-400'
                                        >
                                            Learn more
                                            <FaArrowRightLong className='group-hover:scale-125 group-hover:translate-x-1 transition-all ease-out' />
                                        </button>
                                    </Fade>
                                </div>
                            </div>
                            {/* IT Strategy and Consulting */}
                            <div className='grid md:pr-20 lg:pr-0 lg:grid-cols-2 gap-28 lg:min-h-[50vh]'>
                                <div className='text-white/90'>
                                    <Fade
                                        direction='left'
                                        cascade
                                        damping={0.2}
                                        duration={300}
                                        triggerOnce
                                    >
                                        <h1 className='font-semibold w-full text-2xl lg:text-3xl pb-6'>
                                            IT Strategy and Consulting
                                        </h1>
                                        <p className='text-lg lg:text-xl font-light text-justify leading-relaxed'>
                                            We offer strategic guidance on how
                                            technology can help business
                                            objectives, including IT road
                                            mapping outlining your existing IT
                                            environment and the actions you
                                            shouldt take to reduce risks and
                                            reach their goals.
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    '/services?s=itstrategyconsulting'
                                                )
                                            }
                                            className='flex group items-center gap-3 mt-8 lg:mt-12 text-accent font-medium ring-4 ring-cyan-400/20 rounded-lg text-lg md:text-md lg:text-lg px-6 py-2 tracking-wider bg-cyan-400'
                                        >
                                            Learn more
                                            <FaArrowRightLong className='group-hover:scale-125 group-hover:translate-x-1 transition-all ease-out' />
                                        </button>
                                    </Fade>
                                </div>
                                <Fade direction='right' triggerOnce>
                                    <div className='hidden lg:block relative h-80 overflow-hidden rounded-xl'>
                                        <img
                                            className='w-full hover:scale-125 transition-all ease-in-out absolute bottom-0'
                                            src={ITStrategy}
                                            alt='IT Strategy and Consulting'
                                        />
                                    </div>
                                </Fade>
                            </div>
                            {/* Robotics Process Automation */}
                            <div className='grid md:pr-20 lg:pr-0 lg:grid-cols-2 gap-28 lg:min-h-[50vh]'>
                                <Fade direction='left' triggerOnce>
                                    <div className='hidden lg:block relative h-80 overflow-hidden rounded-xl'>
                                        <img
                                            className='w-full hover:scale-125 transition-all ease-in-out absolute bottom-0'
                                            src={RPA}
                                            alt='Robotics Process Automation'
                                        />
                                    </div>
                                </Fade>
                                <div className='text-white/90'>
                                    <Fade
                                        direction='right'
                                        cascade
                                        damping={0.2}
                                        duration={300}
                                        triggerOnce
                                    >
                                        <h1 className='font-semibold lg:text-right w-full text-2xl lg:text-3xl pb-6'>
                                            Robotics Process Automation
                                        </h1>
                                        <p className=' text-lg lg:text-xl font-light text-justify  leading-relaxed'>
                                            In today’s fast-paced and
                                            competitive business environment,
                                            organizations constantly seek ways
                                            to streamline operations and reduce
                                            costs. Robotics Process Automation
                                            (RPA) has emerged as a powerful
                                            solution to achieve these goals by
                                            automating repetitive and rule-based
                                            tasks. At RCC Colab Solutions, we
                                            offer comprehensive RPA services
                                            designed to help your business
                                            unlock the full potential of
                                            automation.
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    '/services?s=roboticsprocessautomation'
                                                )
                                            }
                                            className='flex group lg:ml-auto items-center gap-3 mt-8 lg:mt-12 text-accent font-medium ring-4 ring-cyan-400/20 rounded-lg text-lg md:text-md lg:text-lg px-6 py-2 tracking-wider bg-cyan-400'
                                        >
                                            Learn more
                                            <FaArrowRightLong className='group-hover:scale-125 group-hover:translate-x-1 transition-all ease-out' />
                                        </button>
                                    </Fade>
                                </div>
                            </div>
                            {/* Staff Augmentation */}
                            <div className='grid md:pr-20 lg:pr-0 lg:grid-cols-2 gap-28 lg:min-h-[50vh]'>
                                <div className='text-white/90'>
                                    <Fade
                                        direction='left'
                                        cascade
                                        damping={0.2}
                                        duration={300}
                                        triggerOnce
                                    >
                                        <h1 className='font-semibold w-full text-2xl lg:text-3xl pb-6'>
                                            Staff Augmentation
                                        </h1>
                                        <p className='text-lg lg:text-xl font-light text-justify leading-relaxed'>
                                            In today's dynamic business
                                            environment, having the right talent
                                            at the right time is crucial for
                                            maintaining a competitive edge. Our
                                            Staff Augmentation services give
                                            your organization the flexibility
                                            and expertise to meet project
                                            demands, fill skill gaps, and drive
                                            growth. At RCC Colab Solutions, we
                                            offer comprehensive staff
                                            augmentation solutions that align
                                            with your specific requirements and
                                            business objectives.
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    '/services?s=staffaugmentation'
                                                )
                                            }
                                            className='flex group items-center gap-3 mt-8 lg:mt-12 text-accent font-medium ring-4 ring-cyan-400/20 rounded-lg text-lg md:text-md lg:text-lg px-6 py-2 tracking-wider bg-cyan-400'
                                        >
                                            Learn more
                                            <FaArrowRightLong className='group-hover:scale-125 group-hover:translate-x-1 transition-all ease-out' />
                                        </button>
                                    </Fade>
                                </div>
                                <Fade direction='right' triggerOnce>
                                    <div className='hidden lg:block relative h-80 overflow-hidden rounded-xl'>
                                        <img
                                            className='w-full hover:scale-125 transition-all ease-in-out absolute bottom-0'
                                            src={StaffAugmentation}
                                            alt='Staff Augmentation'
                                        />
                                    </div>
                                </Fade>
                            </div>
                            {/* Support and Maintenance */}
                            <div className='grid md:pr-20 lg:pr-0 lg:grid-cols-2 gap-28 lg:min-h-[50vh]'>
                                <Fade direction='left' triggerOnce>
                                    <div className='hidden lg:block relative h-80 overflow-hidden rounded-xl'>
                                        <img
                                            className='w-full hover:scale-125 transition-all ease-in-out absolute bottom-0'
                                            src={Maintenance}
                                            alt='Support and Maintenance '
                                        />
                                    </div>
                                </Fade>
                                <div className='text-white/90'>
                                    <Fade
                                        direction='right'
                                        cascade
                                        damping={0.2}
                                        duration={300}
                                        triggerOnce
                                    >
                                        <h1 className='font-semibold lg:text-right w-full text-2xl lg:text-3xl pb-6'>
                                            Support and Maintenance
                                        </h1>
                                        <p className=' text-lg lg:text-xl font-light text-justify leading-relaxed'>
                                            In today’s rapidly evolving
                                            technological environment,
                                            maintaining the integrity and
                                            performance of your IT
                                            infrastructure is crucial. Our
                                            comprehensive Support and
                                            Maintenance services are designed to
                                            ensure your systems are always
                                            up-to-date, secure, and running at
                                            peak efficiency. At RCC Colab
                                            Solutions, we offer tailored support
                                            and maintenance solutions that
                                            provide peace of mind and allow you
                                            to focus on your core business
                                            activities.
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    '/services?s=supportandmaintenance'
                                                )
                                            }
                                            className='flex group lg:ml-auto items-center gap-3 mt-8 lg:mt-12 text-accent font-medium ring-4 ring-cyan-400/20 rounded-lg text-lg md:text-md lg:text-lg px-6 py-2 tracking-wider bg-cyan-400'
                                        >
                                            Learn more
                                            <FaArrowRightLong className='group-hover:scale-125 group-hover:translate-x-1 transition-all ease-out' />
                                        </button>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </XLContainer>
            </div>
            <div className='bg-gray-100 py-20'>
                <XLContainer>
                    <div className='flex flex-col items-center'>
                        <Fade direction='up' duration={300} triggerOnce>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold text-center pb-12'>
                                Our Clients
                            </h1>
                        </Fade>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 items-center'>
                            {/* Replace these placeholders with actual client logos or names */}
                            <Zoom>
                                <div className='flex justify-center'>
                                    <img
                                        src={MultiSysLogo}
                                        alt='Client 1'
                                        className='h-32 object-contain'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <img
                                        src={YalamChili}
                                        alt='Client 2'
                                        className='h-24 object-contain'
                                    />
                                </div>
                            </Zoom>
                            
                            
                            
                            {/* Add more client logos as needed */}
                        </div>
                    </div>
                </XLContainer>
            </div>
            <div className='h-fit'>
                <XLContainer>
                    <div className='flex flex-col items-center'>
                        <Zoom>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl text-gray-900 text-center font-semibold leading-relaxed px-6 pt-28 pb-10'>
                                The success of our clients <br /> is our success
                                too!
                                <span className='hidden lg:block'>🏆</span>
                            </h1>
                            <p className='text-xl text-gray-700 max-w-screen-md text-center px-6 lg:px-0 leading-8 pb-36'>
                                In this digital era, we have a dedicated team
                                keen to serve our client&apos;s needs and ensure
                                the complexities simplified and flexible.
                            </p>
                        </Zoom>
                    </div>
                </XLContainer>
            </div>
            <div
                className='h-36 w-full border-b-4 border-gray-200 bg-accent'
                style={{
                    clipPath:
                        'polygon(50% 40%, 100% 0,  100% 100%,   0 100%, 0 0)',
                }}
            ></div>
                       
            
           
            
           
        </div>
    );
};

export default Home;
