import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
    const { pathname } = useLocation();
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setSideBarIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (sideBarIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [sideBarIsOpen]);

    return (
        <main className='h-fit cursor-default'>
            <Toaster />
            <SideBar
                sideBarIsOpen={sideBarIsOpen}
                setSideBarIsOpen={setSideBarIsOpen}
                pathname={pathname}
            />
            <NavBar pathname={pathname} setSideBarIsOpen={setSideBarIsOpen} />
            <Outlet />
            <Footer />
        </main>
    );
}

export default App;
