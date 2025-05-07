import { Fade } from 'react-awesome-reveal';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import logo from '../assets/RCCLogo-Blue.svg';
import menuItems from '../utils/menuItems';

const NavBar = ({ pathname, setSideBarIsOpen }) => {
    return (
        <div className='flex absolute lg:static z-20 w-full bg-gray-50 items-center px-6 lg:px-14 h-24'>
            <Fade direction='down' duration={300}>
                <Link to={'/'} className='flex items-center pb-1'>
                    <img
                        className='h-10 lg:h-16 brightness-100'
                        src={logo}
                        alt=''
                    />
                    <h1 className="hidden text-xl lg:block font-bold text-[rgba(3,20,85,1)] p-1 ml-2">
                        RCC Colab Solutions
                    </h1>

                </Link>
            </Fade>
            <ul className='hidden lg:flex ml-auto items-center font-medium '>
                <Fade direction='down' cascade duration={200}>
                    {menuItems.map(({ path, label }, i) => (
                        <li
                            key={i}
                            className={`px-6 hover:text-accent ${
                                pathname === path
                                    ? 'text-accent'
                                    : 'text-gray-700'
                            }`}
                        >
                            <Link to={path}>{label}</Link>
                        </li>
                    ))}
                <li className='px-6 bg-gradient-to-tr from-cyan-600 hover:ring-4 ring-cyan-400 transition-all to-cyan-400  rounded-lg text-white py-2'>
                    <Link to={'/contactus'}>Contact Us</Link>
                </li>
                </Fade>
            </ul>
            <button
                onClick={() => setSideBarIsOpen(true)}
                className='ml-auto lg:hidden text-gray-700 text-2xl'
            >
                <Fade direction='down' duration={300}>
                    <GiHamburgerMenu />
                </Fade>
            </button>
        </div>
    );
};

export default NavBar;
