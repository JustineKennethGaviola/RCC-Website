const TermsOfUse = () => {
    return (
        <div className='w-full bg-slate-50 pt-28 lg:pt-16 pb-28'>
            <div className='max-w-screen-lg w-full mx-auto h-fit'>
                <h1 className='text-2xl lg:text-4xl text-gray-900 text-center uppercase font-bold lg:font-semibold pb-8  lg:pb-16'>
                    Terms of Use
                </h1>
                <ol className='flex flex-col px-6 lg:px-0 gap-6 lg:gap-10 leading-relaxed font-medium text-gray-800 list-decimal lg:text-lg text-justify list-inside list'>
                    <li>
                        This website is operated by{' '}
                        <span className='font-bold'>
                            RCC Colab Solutions Inc.
                        </span>
                        <span className='font-normal'>
                            {' '}
                            (hereinafter called “the Company”).{' '}
                        </span>
                    </li>
                    <li>
                        Copyrights and any other rights of all texts, graphics,
                        images, logos, etc., included in this website belong to
                        the Company, the original authors, or other rights
                        holders. Duplication, reproduction, modification,
                        deletion, transmission, distribution, etc., of the data
                        on this website without the permission of the Company
                        are prohibited by copyright laws, except in cases that
                        the copyright laws allow.
                    </li>
                    <li>
                        We diligently strive to ensure that the information on
                        this website is accurate and up to date. While we make
                        no guarantees of its completeness, we want you to trust
                        that we are committed to providing reliable information.
                        Also, we assume no responsibility for any incorrect or
                        unlisted details on this website.
                    </li>
                    <li>
                        Please note that we reserve the right to change the
                        contents/use conditions of this website, which may
                        include but are not limited to, adding or removing
                        features, updating or modifying content, or changing the
                        terms of use. We also reserve the right to change,
                        postpone, discontinue, or terminate the
                        products/services on this website without notice.
                    </li>
                    <li>
                        If you would like to link to this website, we have a
                        clear policy in place. Please get in touch with us at 
                        <a href="emailto:info@rcccolabsolutions.com" className="text-blue-600"> info@rcccolabsolutions.com</a> so that we can confirm the
                        purpose and contents of your website. We may decline
                        linking from a website that is deemed inappropriate, as
                        we strive to maintain a safe and respectful online
                        environment.
                    </li>
                    <li>
                        As a general rule, links to this website should be on
                        the home page, “
                        <a href='/' className='font-semibold'>
                            https://www.rcccolabsolutions.com
                        </a>
                        “
                    </li>
                    <li>
                        The Company will not be liable for any links to this
                        website. We assume no responsibility for any damage
                        caused by using information on this site.
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default TermsOfUse;
