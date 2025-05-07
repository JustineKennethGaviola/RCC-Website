import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import menuItems from '../utils/menuItems';

const SideBar = ({ sideBarIsOpen, setSideBarIsOpen, pathname }) => {
    return (
        <div
            id='sidebar'
            className={`lg:hidden py-6 fixed top-0 right-0 h-screen shadow-lg transition-all duration-300 px-8 bg-gray-100 backdrop-blur-sm w-8/12 md:w-3/12 z-40 ${
                !sideBarIsOpen ? 'translate-x-full' : 'translate-x-0'
            }`}
        >
            <div>
                <button
                    onClick={() => setSideBarIsOpen(false)}
                    className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                >
                    <GrFormClose className='text-xl' />
                </button>
            </div>
            <ul className='flex pt-10 gap-6 flex-col'>
                {menuItems.map(({ path, label }, i) => (
                    <li
                        key={i}
                        className={` font-semibold ${
                            pathname === path
                                ? 'text-cyan-600'
                                : 'text-slate-900'
                        }`}
                    >
                        <Link to={path}>{label}</Link>
                    </li>
                ))}
                <li
                        className={` font-semibold ${
                            pathname === '/contactus'
                                ? 'text-cyan-600'
                                : 'text-slate-900'
                        }`}
                    >
                        <Link to={'/contactus'}>Contact Us</Link>
                    </li>
            </ul>
        </div>
    );
};

export default SideBar;
