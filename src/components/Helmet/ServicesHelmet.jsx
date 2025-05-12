import { Helmet } from 'react-helmet-async';

const ServicesHelmet = () => {
    return (
        <Helmet>
            <title>Services | RCC Colab Solutions, Inc.</title>
            <meta
                name='description'
                content='Our dedicated team is committed to delivering innovative and customized solutions to help businesses meet the evolving needs of customers and markets.'
            />
            <link
                rel='canonical'
                href='https://rcccolabsolutions.com/services'
            />
            <meta property='og:type' content='website' />

            <meta
                property='og:url'
                content='https://rcccolabsolutions.com/services'
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

export default ServicesHelmet;
