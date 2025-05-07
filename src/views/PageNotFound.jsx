import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='grid place-items-center h-screen font-semibold'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-8xl md:text-9xl font-bold text-accent'>
                    404
                </h1>
                <p className='font-semibold py-1 text-sm md:text-base text-gray-500'>
                    Whoops...Page Not Found !!!
                </p>
                <Link
                    className='py-2 px-8 rounded-l-full mt-10 rounded-r-full border-2 border-orange-600 text-orange-600   '
                    to={'/'}
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
