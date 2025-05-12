import { Helmet } from 'react-helmet-async';

const AboutHelmet = () => {
    return (
        <Helmet>
            <title>About Us | RCC Colab Slolutions, Inc.</title>
            <meta
                name='description'
                content='RCC Colab Solutions is an IT solutions provider driven by a deep commitment to driving digital transformation and operational excellence for businesses across various industries. '
            />
            <link rel='canonical' href='https://rcccolabsolutions.com/aboutus' />
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
