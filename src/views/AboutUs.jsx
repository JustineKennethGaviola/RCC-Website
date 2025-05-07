import { CgTrees } from 'react-icons/cg';
import { LuShieldCheck } from 'react-icons/lu';
import { PiMedal } from 'react-icons/pi';
import { RiTeamLine } from 'react-icons/ri';
import aboutBG from '../assets/aboutus-bg.jpg';
import mvBG from '../assets/mission-and-vision-bg.jpg';
import AboutHelmet from '../components/Helmet/AboutHelmet';
import LGContainer from '../components/LGContainer';
import XLContainer from '../components/XLContainer';
import { Fade, JackInTheBox, Zoom } from 'react-awesome-reveal';

const AboutUs = () => {
    return (
        <div>
            <AboutHelmet />
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
                                    About Us
                                </h1>
                            </Zoom>
                        </div>
                    </XLContainer>
                </div>
            </div>
            <div>
                <LGContainer>
                    <div className='flex flex-col h-fit text-accent py-20 px-6 lg:px-0'>
                        <Fade direction='up' delay={200} triggerOnce>
                            <h1 className='text-4xl w-full text-center font-semibold pb-12'>
                                Who We Are
                            </h1>
                        </Fade>
                        <div className='flex flex-col gap-8 text-gray-700 leading-relaxed text-justify text-lg lg:text-xl'>
                            <p>
                                <span className='font-bold text-accent'>
                                    RCC Colab Solutions
                                </span>{' '}
                                    is an IT solutions provider driven by a deep commitment to driving digital transformation and operational excellence for businesses across various industries. We offer end-to-end personalized services with a solution-driven approach to helping companies unlock their full potential through innovative and tailored solutions to match your needs.
                            </p>
                            <p>
                            Our team is a group of dedicated professionals with extensive experience and unparalleled expertise in cutting-edge technologies. This expertise is not just theoretical but has been honed through years of corporate experience and exposure. We are committed to delivering excellent service in every project we undertake, empowering our clients to thrive in a dynamic and ever-evolving digital world to achieve greater efficiency, agility, and profitability.
                            </p>
                            <p>
                            We aim to serve a clientele across various industries to tackle their most challenging project so we can deliver the right technology solutions for our clients.
                            </p>
                        </div>
                    </div>
                </LGContainer>
            </div>
            <div
                className='bg-accent bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: `url(${mvBG})`,
                    clipPath:
                        'polygon(0 5%, 50% 0, 100% 5%, 100% 95%, 50% 100%, 0 95%)',
                }}
            >
                <div className='bg-accent/85'>
                    <LGContainer>
                        <div className='pt-40 pb-52 h-fit px-6 lg:px-0'>
                            <div className='grid gap-16 h-fit'>
                                <div>
                                    <h1 className='text-4xl lg:text-5xl font-semibold text-orange-400 pb-4 lg:pb-8'>
                                        Mission
                                    </h1>
                                    <div className='flex flex-col gap-5'>
                                        <p className='text-lg lg:text-2xl text-justify text-white leading-relaxed'>
                                        Our mission is to empower businesses and individuals by delivering scalable, cutting-edge technology solutions that drive innovation, transform industries, and create lasting value. We are committed to making a positive impact on our people, clients, communities, and the environment, fostering a future where technology enables sustainable growth and meaningful progress.
                                        </p>

                                        
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-4xl lg:text-5xl font-semibold text-orange-400 pb-4 lg:pb-8'>
                                        Vision
                                    </h1>
                                    <p className='text-lg lg:text-2xl text-justify text-white leading-relaxed'>
                                    We aspire to become one of the global leaders in digital transformation, recognized for pioneering innovative solutions that empower businesses to thrive in a rapidly evolving world where technology drives economic growth, fosters positive societal change, and contributes to a sustainable society.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </LGContainer>
                </div>
            </div>
            <div>
                <LGContainer>
                    <div className='bg-white pt-24 pb-32 '>
                        <h1 className='text-4xl lg:text-5xl text-accent font-semibold pb-10 px-6 lg:px-0'>
                            Our Core Values
                            <span className='text-cyan-600'> </span>
                        </h1>
                        <div className='grid grid-cols-1 pl-8 gap-6 h-fit'>
                            <div className='flex gap-8 lg:p-4'>
                                <div className='border-4 border-accent hidden text-6xl h-9/12 p-1 lg:grid place-items-center rounded-full aspect-square'>
                                    <div className='bg-orange-400 text-accent p-3 rounded-full'>
                                        <LuShieldCheck />
                                    </div>
                                </div>
                                <div className='text-cyan-600'>
                                    <h1 className='font-semibold text-xl lg:text-2xl pb-2 uppercase'>
                                        Accountability
                                    </h1>
                                    <p className='text-lg font-medium text-gray-700'>
                                        We take ownership of responsibilities,
                                        honoring commitments, and delivering
                                        results and value with integrity and
                                        dedication.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-8 lg:p-4'>
                                <div className='border-4 border-accent hidden text-6xl h-9/12 p-1 lg:grid place-items-center rounded-full aspect-square'>
                                    <div className='bg-orange-400 text-accent p-3 rounded-full'>
                                        <RiTeamLine />
                                    </div>
                                </div>
                                <div className='text-cyan-600'>
                                    <h1 className='font-semibold text-xl lg:text-2xl pb-2 uppercase'>
                                        Collaboration
                                    </h1>
                                    <p className='text-lg font-medium text-gray-700'>
                                        Our team is embracing teamwork, and open
                                        communication to achieve common goals.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-8 lg:p-4'>
                                <div className='border-4 border-accent hidden text-6xl h-9/12 p-1 lg:grid place-items-center rounded-full aspect-square'>
                                    <div className='bg-orange-400 text-accent p-3 rounded-full'>
                                        <PiMedal />
                                    </div>
                                </div>
                                <div className='text-cyan-600'>
                                    <h1 className='font-semibold text-xl lg:text-2xl pb-2 uppercase'>
                                        Excellence
                                    </h1>
                                    <p className='text-lg font-medium text-gray-700'>
                                        We are committed to continuously
                                        improving to surpass the expectations of
                                        our stakeholders and set the bar for
                                        quality and innovation.
                                    </p>
                                </div>
                            </div>
                            
                            <div className='flex gap-8 lg:p-4'>
                                <div className='border-4 border-accent hidden text-6xl h-9/12 p-1 lg:grid place-items-center rounded-full aspect-square'>
                                    <div className='bg-orange-400 text-accent p-3 rounded-full'>
                                        <CgTrees />
                                    </div>
                                </div>
                                <div className='text-cyan-600'>
                                    <h1 className='font-semibold text-xl lg:text-2xl pb-2 uppercase'>
                                        Sustainability
                                    </h1>
                                    <p className='text-lg font-medium text-gray-700'>
                                        Our team is integrating sustainable
                                        practices into everyday operations to
                                        become a more socially and
                                        environmentally responsible
                                        organization.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </LGContainer>
            </div>
            <div className='lg:pt-15 pb-20 px-6 lg:px-0 lg:pb-32'>  
                <XLContainer>
                    <div className='flex flex-col items-center bg-gradient-to-br from-accent to-blue-900 py-20 px-6 lg:px-10 rounded-xl'>
                        <h1 className='text-white/90 font-semibold text-center text-3xl lg:text-4xl mb-6 lg:mb-4'>
                            What Makes Us{' '}
                            <span className='text-orange-400'>Different</span>?
                        </h1>
                        <p className='text-justify lg:px-20 leading-relaxed text-white text-lg'>
                            RCC Colab Solutions&apos; competitive edge in the IT
                            and Consulting Services industry lies in our
                            capability to deliver integrated innovation and
                            seamless solutions to our clients. Our organization
                            is designed to be agile and responsive to fulfill
                            our commitment to the utmost measurable impact for
                            our clients. This allows us to adjust to market
                            shifts and implement new solutions quickly as we
                            understand that each business is unique, with its
                            specific goals and challenges.
                        </p>
                    </div>
                </XLContainer>
            </div>
        </div>
    );
};

export default AboutUs;
