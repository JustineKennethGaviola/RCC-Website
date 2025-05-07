import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';
import Home from './views/Home';
import Services from './views/Services';
import { HelmetProvider } from 'react-helmet-async';
import PageNotFound from './views/PageNotFound';
import TermsOfUse from './views/TermsOfUse';
import DataPrivacyPolicy from './views/DataPrivacyPolicy';

const RouterComponents = () => {
    const helmetContext = {};
    return (
        <HelmetProvider context={helmetContext}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<Home />} />
                        <Route path='aboutus' element={<AboutUs />} />
                        <Route path='services' element={<Services />} />
                        <Route path='contactus' element={<ContactUs />} />
                        <Route path='termsofuse' element={<TermsOfUse />} />
                        <Route path='privacypolicy' element={<DataPrivacyPolicy />} />
                    </Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default RouterComponents;
