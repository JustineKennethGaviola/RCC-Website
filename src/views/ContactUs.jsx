import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
    MdAccessTime,
    MdOutlineEmail,
    MdOutlineLocationOn,
    MdOutlinePhone,
} from 'react-icons/md';
import ContactHelmet from '../components/Helmet/ContactHelmet';
import emptyEmail from '../utils/emptyEmail';
import sendEmail from '../utils/sendEmail';
import contactBG from '../assets/contact-bg.jpg';
import XLContainer from '../components/XLContainer';
import { Zoom } from 'react-awesome-reveal';

const ContactUs = () => {
    const formRef = useRef();
    const [email, setEmail] = useState(emptyEmail);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (formRef.current) {
                await sendEmail(formRef.current);
            }
            toast.success('Email sent successfully!');
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
            setEmail(emptyEmail);
        }
    };

    return (
        <div>
            <ContactHelmet />
            <div
                className='bg-accent bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: `url(${contactBG})`,
                    clipPath:
                        'polygon(100% 1%, 100% 85%, 50% 100%, 0 85%, 0 0)',
                }}
            >
                <div className='bg-accent/90'>
                    <XLContainer>
                        <div className='flex flex-col items-center justify-center pt-48 pb-48 h-fit'>
                            <Zoom>
                                <h1 className='text-white/90 text-5xl lg:text-7xl font-medium pb-1'>
                                    Contact Us
                                </h1>
                            </Zoom>
                        </div>
                    </XLContainer>
                </div>
            </div>
            <div className='w-full bg-white'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-screen-xl px-6 lg:px-10 pt-12 lg:pt-32 pb-20 mx-auto h-fit w-full'>
                    <div className='hidden lg:grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-1 gap-3 col-span-4 '>
                        <div className=' flex items-center px-6 py-6 bg-white shadow-sm rounded-md'>
                            <div className='grid place-items-center bg-accent/20 h-14 w-14 aspect-square rounded-full'>
                                <MdOutlinePhone className='text-accent/80 text-2xl' />
                            </div>
                            <div className='pl-6 pr-2'>
                                <h1 className='font-semibold text-slate-900 text-lg'>
                                    Phone Number
                                </h1>
                                <p className='text-slate-800 text-sm'>
                                +632 8651 6572
                                </p>
                            </div>
                        </div>
                        <div className=' flex items-center px-6 py-6 bg-white shadow-sm rounded-md'>
                            <div className='grid place-items-center bg-accent/20 h-14 w-14 aspect-square rounded-full'>
                                <MdOutlineEmail className='text-accent/80 text-2xl' />
                            </div>
                            <div className='pl-6 pr-2'>
                                <h1 className='font-semibold text-slate-900 text-lg'>
                                    Email Address
                                </h1>
                                <p className='text-slate-800 text-sm '>
                                    info@rcccolabsolutions.com
                                </p>
                            </div>
                        </div>
                        <div className=' flex items-center px-6 py-6 bg-white shadow-sm rounded-md'>
                            <div className='grid place-items-center bg-accent/20 h-14 min-w-14 aspect-square rounded-full'>
                                <MdOutlineLocationOn className='text-accent/80 text-2xl' />
                            </div>
                            <div className='pl-6 pr-2'>
                                <h1 className='font-semibold text-slate-900 text-lg'>
                                    Office Address
                                </h1>
                                <p className='text-slate-800 text-sm'>
                                  
                                        7/F Ascott Makati Glorietta 4, Ayala Center San Lorenzo, Makati City
                                 
                                </p>
                            </div>
                        </div>
                        <div className=' flex items-center px-6 py-6 bg-white shadow-sm rounded-md'>
                            <div className='grid place-items-center bg-accent/20 h-14 w-14 aspect-square rounded-full'>
                                <MdAccessTime className='text-accent/80 text-2xl' />
                            </div>
                            <div className='pl-6 pr-2'>
                                <h1 className='font-semibold text-slate-900 text-lg'>
                                    Office
                                </h1>
                                <p className='text-slate-800 text-sm'>
                                    Mon to Fri (8:00AM-5:00PM)
                                </p>
                            </div>
                        </div>
                    </div>
                    <form
                        ref={formRef}
                        className='flex gap-7  col-span-8  rounded-md md:px-20 lg:p-6 flex-col w-full'
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <h1 className='text-3xl font-semibold py-1 text-slate-800'>
                                We’d love to hear from you!
                            </h1>
                            <p className='hidden md:block   leading-7 text-sm lg:text-base text-slate-600 pr-10 pb-4'>
                                Whether you're looking for help with your next
                                big project or want to join our team, we are
                                ready to answer all your questions. Please use
                                the form below to reach out to or email us.
                            </p>
                            <p className='md:hidden leading-7 text-sm lg:text-base text-slate-600 pr-10 pb-4'>
                                We're here to help! Fill out the form below, and
                                we'll respond promptly to your inquiries.
                            </p>
                        </div>

                        <div className='grid w-full md:grid-cols-2 place-items-center gap-4'>
                            <div className='flex flex-col w-full'>
                                <label
                                    htmlFor='name'
                                    className='leading-7 font-medium indent-1 text-sm  text-gray-700'
                                >
                                    Name
                                </label>
                                <input
                                    required
                                    disabled={loading}
                                    onChange={handleChange}
                                    value={email.name}
                                    autoComplete='off'
                                    className='w-full h-12 focus:outline-accent/80 focus:outline-none  rounded-md bg-gray-50/10 border px-4 outline-accent'
                                    type='text'
                                    name='name'
                                    id='name'
                                />
                            </div>
                            <div className='flex flex-col w-full    '>
                                <label
                                    htmlFor='company'
                                    className='leading-7 font-medium indent-1 text-sm  text-gray-700'
                                >
                                    Company
                                </label>
                                <input
                                    required
                                    disabled={loading}
                                    onChange={handleChange}
                                    value={email.company}
                                    autoComplete='off'
                                    className='w-full h-12 focus:outline-accent/80 focus:outline-none  rounded-md bg-gray-50/10 border px-4 outline-accent'
                                    type='text'
                                    name='company'
                                    id='company'
                                />
                            </div>
                        </div>
                        <div className='grid w-full md:grid-cols-2 place-items-center gap-4'>
                            <div className='flex flex-col w-full    '>
                                <label
                                    htmlFor='contactNumber'
                                    className='leading-7 font-medium indent-1 text-sm  text-gray-700'
                                >
                                    Contact Number
                                </label>
                                <input
                                    required
                                    disabled={loading}
                                    onChange={handleChange}
                                    value={email.contactNumber}
                                    autoComplete='off'
                                    className='w-full h-12 focus:outline-accent/80 focus:outline-none  rounded-md bg-gray-50/10 border px-4 outline-accent'
                                    type='text'
                                    name='contactNumber'
                                    id='contactNumber'
                                />
                            </div>
                            <div className='flex flex-col w-full    '>
                                <label
                                    htmlFor='email'
                                    className='leading-7 font-medium indent-1 text-sm  text-gray-700'
                                >
                                    Work email
                                </label>
                                <input
                                    required
                                    disabled={loading}
                                    onChange={handleChange}
                                    value={email.email}
                                    autoComplete='off'
                                    className='w-full h-12 focus:outline-accent/80 focus:outline-none  rounded-md bg-gray-50/10 border px-4 active:outline-accent'
                                    type='email'
                                    name='email'
                                    id='email'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col w-full '>
                            <label
                                htmlFor='message'
                                className='leading-7 font-medium indent-1 text-sm  text-gray-700'
                            >
                                Message
                            </label>
                            <textarea
                                required
                                disabled={loading}
                                onChange={handleChange}
                                value={email.message}
                                autoComplete='off'
                                className='w-full h-32 focus:outline-accent/80 focus:outline-none  min-h-12 py-2 rounded-md bg-gray-50/10 border px-4 active:outline-accent'
                                type='text'
                                name='message'
                                id='message'
                            ></textarea>
                        </div>
                        <button
                            className='w-full bg-accent py-3 text-white tracking-wider  rounded-md'
                            disabled={loading}
                            type='submit'
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
