import { Helmet } from 'react-helmet-async';

const HomeHelmet = () => {
    return (
        <Helmet prioritizeSeoTags>
            <title>Welcome to RCC Colab Solutions, Inc.</title>

            <meta
                name='description'
                content='RCC Colab Solutions is an IT software development provider and consulting services firm, offering end-to-end personalized services. Our solution-driven approach helps businesses unlock their full potential with innovative and tailored solutions. Our experienced team is dedicated to delivering excellent service across small, medium, and large-scale businesses, empowering clients to thrive in the dynamic digital world. Serving various industries, we tackle challenging projects to deliver the right technology solutions.'
            />
            <meta name="keywords" content="RCC Colab Solutions, IT software development, consulting services, personalized services, solution-driven approach, innovative solutions, tailored solutions, business technology, digital transformation, experienced professionals, corporate experience, technology solutions, small business, medium business, large-scale business, dynamic digital world, industry solutions, project management, technology consulting, end-to-end services, business potential, digital innovation, custom software, enterprise solutions, IT consulting, business consulting, tech solutions, digital services, software consulting, IT provider, business growth, software development, business consulting services, digital strategy, tech consulting, IT support, software innovation, digital consulting, business technology solutions, corporate training, project solutions, tech experts, business services, technology development, digital business, IT expertise, consulting expertise, tech-driven solutions, business empowerment, innovative technology, digital transformation services, business IT solutions, tailored tech solutions, professional consulting, technology professionals, IT service provider, software expertise, IT strategy, business optimization, tech consulting services, software solutions, IT consulting services, business digitalization, tech innovation, IT projects, technology integration, business process improvement, IT strategy consulting, digital growth, tech consulting firm, custom IT solutions, software development services, business technology consulting, digital solutions, IT project management, consulting firm, software provider, technology consultancy, business process automation, IT services, business innovation, digital expertise, software consulting services, enterprise IT solutions, IT consulting firm, tech consultancy, business consulting firm, technology services, IT solutions provider, digital transformation consulting, tech professionals, software services, business technology provider, technology-driven solutions" />
            <meta name="author" content="Developed by JRK Tech Solution" />
            <link rel='canonical' href='https://rcccolabsolutions.com/' />

            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://rcccolabsolutions.com/' />
            <meta property='og:title' content='RCC Colab Solutions, Inc.' />
            <meta
                property='og:description'
                content='Your trusted partner for personalized IT software and
                consulting solutions, delivering excellence in
                innovation, quality, and service.'
            />
           <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "RCC Colab Solutions, Inc.",
                    "alternateName": "RCC Colab Solutions",
                    "url": "https://rcccolabsolutions.com",
                    "description": "RCC Colab Solutions is an IT software development provider and consulting services firm, offering end-to-end personalized services. Our solution-driven approach helps businesses unlock their full potential with innovative and tailored solutions.",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://rcccolabsolutions.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    },
                    "hasPart": [
                        {
                            "@type": "WebPage",
                            "name": "Home",
                            "url": "https://rcccolabsolutions.com/",
                            "mainEntityOfPage": "https://rcccolabsolutions.com/"
                        },
                        {
                            "@type": "WebPage",
                            "name": "About Us",
                            "url": "https://rcccolabsolutions.com/aboutus",
                            "mainEntityOfPage": "https://rcccolabsolutions.com/aboutus"
                        },
                        {
                            "@type": "WebPage",
                            "name": "Services",
                            "url": "https://rcccolabsolutions.com/services",
                            "mainEntityOfPage": "https://rcccolabsolutions.com/services"
                        },
                        {
                            "@type": "WebPage",
                            "name": "Contact Us",
                            "url": "https://rcccolabsolutions.com/contactus",
                            "mainEntityOfPage": "https://rcccolabsolutions.com/contactus"
                        },
                        {
                            "@type": "WebPage",
                            "name": "Privacy Policy",
                            "url": "https://rcccolabsolutions.com/privacypolicy",
                            "mainEntityOfPage": "https://rcccolabsolutions.com/privacypolicy"
                        },
                        {
                            "@type": "WebPage",
                            "name": "Terms of Service",
                            "url": "https://rcccolabsolutions.com/termsofuse",
                            "mainEntityOfPage": "https://rcccolabsolutions.com/termsofuse"
                        }
                    ]
                })}
                </script>

        </Helmet>
    );
};

export default HomeHelmet;
