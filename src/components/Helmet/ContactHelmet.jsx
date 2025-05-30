import { Helmet } from 'react-helmet-async';

const ContactHelmet = () => {
    return (
        <Helmet>
            <title>Contact Us | RCC Colab Solutions, Inc.</title>
            <meta
                name='description'
                content='Get in touch with us for personalized IT software and consulting solutions. We are here to help you achieve your'
            />
            <link
                rel='canonical'
                href='https://rcccolabsolutions.com/contactus'
            />
            <meta property='og:type' content='website' />
            <meta
                property='og:url'
                content='https://rcccolabsolutions.com/contactus'
            />
            <meta property='og:title' content='RCC Colab Solutions, Inc.' />
            <meta
                property='og:description'
                content='Your trusted partner for personalized IT software and
                consulting solutions, delivering excellence in
                innovation, quality, and service.'
            />
        </Helmet>
    );
};

export default ContactHelmet;
