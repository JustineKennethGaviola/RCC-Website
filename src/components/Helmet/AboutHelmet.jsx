import { Helmet } from 'react-helmet-async';

const AboutHelmet = () => {
    return (
        <Helmet>
            <title>About Us | RCC Colab Slolutions, Inc.</title>
            <link rel='canonical' href='https://rccglass-aluminum.com/aboutus' />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://rcccolabsolutions.com/aboutus' />
            <meta property='og:title' content='RCC Colab Solutions, Inc.' />
            <meta
                property='og:description'
                content='  Your trusted partner for personalized IT software and
                consulting solutions, delivering excellence in
                innovation, quality, and service.'
            />
        </Helmet>
    );
};

export default AboutHelmet;
