const H1 = ({ children }) => {
    return (
        <h1 className='text-xl lg:text-2xl font-semibold uppercase pb-4 text-accent'>
            {children}
        </h1>
    );
};

const DataPrivacyPolicy = () => {
    return (
        <div className='w-full bg-slate-50 pt-28 lg:pt-16 pb-28'>
            <div className='max-w-screen-lg w-full mx-auto px-6 lg:px-0 h-fit'>
                <h1 className='text-2xl lg:text-4xl text-gray-900 text-center font-bold lg:font-semibold pb-8  lg:pb-16'>
                    Data Privacy Policy
                </h1>
                <div className='flex flex-col leading-relaxed text-gray-800 lg:text-lg font-medium text-justify '>
                    <H1>INTRODUCTION</H1>
                    <div className='flex flex-col gap-4 lg:pt-8 pb-20'>
                        <p>
                            We, <b>RCC Colab Solutions Inc.</b>, hold the
                            confidentiality of the personal data you have
                            entrusted us with in the highest regard. This
                            Privacy Policy is not just a document but a
                            testament to our unwavering commitment to value and
                            protect your personal data, ensuring it is
                            safeguarded in accordance with the Data Privacy Act
                            of 2012 (DPA), National Privacy Commission (NPC),
                            and other relevant laws of the Philippines. We are
                            not just dedicated, but deeply committed to ensuring
                            your data is secure and always protected.
                        </p>

                        <p>
                            <b>RCC Colab Solutions Inc.</b>'s policy is not just
                            about data privacy; it's about our unwavering
                            commitment to respecting and upholding your data
                            privacy rights. We ensure that all personal data
                            collected from our data subjects—clients, employees,
                            and other third parties—is processed strictly to the
                            general principles of transparency, legitimate
                            purpose, and proportionality espoused in the Data
                            Privacy Act. Our commitment to you and your data is
                            a testament to our respect for your privacy and data
                            rights.
                        </p>

                        <p>
                            As a personal data processor, the Company is
                            committed to implementing fair information
                            practices, integral to our dedication to service
                            quality. This Privacy Policy is not just a set of
                            rules; it's a guide to how we handle your personal
                            data. It's designed to empower you with knowledge of
                            the steps you can take if you wish to modify our use
                            of your personal data or if you want us to cease
                            using it altogether, giving you full control over
                            your data.
                        </p>
                    </div>

                    <H1>OBJECTIVES</H1>
                    <div className='pb-12'>
                        <p>The policy is hereby adopted to:</p>
                        <ul className='flex flex-col pt-4 gap-1 list-disc pl-4 lg:pl-12 text-justify'>
                            <li className='pl-3'>
                                Ensure fair and lawful processing of the
                                personal data of data subjects, including
                                employees, clients, customers, shareholders, and
                                other individuals;
                            </li>
                            <li className='pl-3'>
                                Ensure the confidentiality, integrity, and
                                availability of personal data under the control
                                of the company;
                            </li>
                            <li className='pl-3'>
                                Comply with the statutory obligations set forth
                                under the Data Privacy Act and the regulations
                                of the National Privacy Commission (NPC).
                            </li>
                        </ul>
                    </div>
                    <H1>Scope</H1>
                    <p className='pb-16'>
                        All personnel of RCC Colab Solutions, regardless of the
                        type of employment or contractual arrangement, are bound
                        by the terms set out in this Policy. This policy also
                        extends to consultants or employees of third parties who
                        have a contractual obligation with the Company,
                        including sub-contracting and outsourcing arrangements.
                    </p>
                    <H1>Definitions</H1>
                    <div className='lg:pt-8 pb-10'>
                        <p className='pb-8'>
                            The Data Privacy Act of 2012, or DPA, refers to
                            Republic Act No. 10173. A data subject is an
                            individual whose personal, sensitive, or privileged
                            information is processed.
                        </p>
                        <p>The company refers to RCC Colab Solutions Inc.</p>
                        <ol className='flex flex-col pt-6 gap-6 pl-4 lg:pl-12 list-[lower-alpha]'>
                            <li className='pl-3'>
                                <b>Personal Data</b> collectively refers to
                                Personal, Sensitive, and Privileged Information.
                            </li>
                            <li className='pl-3'>
                                <b>Personal Information</b> refers to any
                                information, whether recorded in a material form
                                or not, from which an individual's identity.
                            </li>
                            <li className='pl-3'>
                                <b>Personal data breach</b> refers to a security
                                breach that would lead to the accidental or
                                unlawful destruction, loss, alteration,
                                unauthorized disclosure of, or access to
                                personal data transmitted, stored, or otherwise
                                processed.
                            </li>
                            <li className='pl-3'>
                                <b>Processing</b> refers to any operation or set
                                of operations performed upon Personal Data,
                                including, but not limited to, the collection,
                                recording, organization, storage, updating or
                                modification, retrieval, consultation, use,
                                consolidation, blocking, erasure, or destruction
                                of data. Processing may be performed through
                                automated or manual processing if the personal
                                data are contained or are intended to be
                                contained in a filing system.
                            </li>
                            <li className='pl-3'>
                                A <b>Security Incident</b> is an event or
                                occurrence that tends to affect data protection
                                or may compromise the availability, integrity,
                                and confidentiality of Personal Data. It
                                includes incidents resulting in a personal data
                                breach if not for safeguards put in place.
                            </li>
                            <li className='pl-3'>
                                <b>Sensitive Personal Information</b> refers to
                                Personal Data;
                            </li>
                            <li className='pl-3'>
                                <b>Information and communications systems</b>{' '}
                                generate, send, receive, store, or otherwise
                                process electronic data messages or documents.
                                It includes the computer system or other similar
                                device by which data is recorded, transmitted,
                                or stored and any procedure related to the
                                recording, transmitting, or storing of
                                electronic data, electronic messages, or
                                electronic documents.
                            </li>
                        </ol>
                    </div>
                    <H1>Policies</H1>
                    <p className='pb-20'>
                        The company shall establish a regulatory-compliant
                        organic framework to protect the rights of its data
                        subjects and maintain the confidentiality, integrity,
                        and availability of personal data. This framework shall
                        ensure that the company's personal data processing
                        systems are reasonably secured, protected, selectively
                        accessible, and processed or utilized for valid purposes
                        only with internal measures for detecting and monitoring
                        breaches and security incidents.
                    </p>
                    <H1>Organizational Security Measures</H1>
                    <div className='pb-12'>
                        <ol className='flex flex-col pt-6 gap-6 lg:pl-8 pb-4 marker:font-bold list-inside list-[lower-alpha]'>
                            <li className='pl-3'>
                                <b>Management Oversight</b> <br />
                                The Senior Management shall have overall
                                oversight on the compliance with the Act and the
                                implementation of this Policy and other related
                                policies of the company to ensure the provision
                                of the necessary support and allocation of
                                essential resources to effectively and
                                efficiently operationalize a data privacy
                                framework within the company. The VP for
                                Operations shall incorporate compliance into
                                daily operations and supervise the Data
                                Protection Officer.
                            </li>
                            <li className='pl-3'>
                                <b>Data Protection Officer</b> <br />
                                The Data Protection Officer (DPO) is a key
                                figure in ensuring the Company’s compliance with
                                applicable laws and regulations and enforcing
                                this policy to protect data privacy and
                                security. The DPO serves as a primary point of
                                contact for data subjects, ensuring their
                                concerns are addressed and their rights are
                                protected.
                            </li>
                        </ol>
                    </div>
                    <H1>Data Privacy Principles</H1>
                    <div className='pb-12'>
                        <p>
                            All Processing of Personal Data within the Company
                            should be conducted in compliance with the following
                            data privacy principles as espoused in the Data
                            Privacy Act:
                        </p>
                        <ol className='flex flex-col pt-6 gap-6 pl-4 lg:pl-12 list-[lower-alpha]'>
                            <li className='pl-3'>
                                <b>Transparency.</b> The Data Subject must be
                                aware of the nature, purpose, and extent of the
                                Processing of his or her Personal Data by the
                                Company, including the risks and safeguards
                                involved, the identity of persons and entities
                                engaged in Processing his or her Personal Data,
                                his or her rights as a Data Subject, and how
                                these can be exercised.
                            </li>
                            <li className='pl-3'>
                                <b>Fair and Lawful Processing.</b> The Company's
                                Processing of Personal Data shall be wellmatched
                                with a declared and specified purpose that must
                                not be contrary to law, morals, or public
                                policy. Personal data must not be misused, and
                                processing must be done in accordance with the
                                declared and specified purposes. Appropriate
                                measures shall be implemented to prevent misuse
                                of personal data that can harm a data subject.
                            </li>
                            <li className='pl-3'>
                                <b>Proportionality.</b> The Processing of
                                Personal Data shall be sufficient, relevant,
                                necessary, and not excessive for a declared and
                                specified purpose. Personal Data shall be
                                processed by the Company only if the purpose of
                                the processing cannotreasonably be fulfilled by
                                other means.
                            </li>
                        </ol>
                    </div>
                    <H1>Data Processing Records</H1>
                    <div className='pb-12'>
                        <p>
                            The Company’s Personal Data Processing activities
                            shall always be maintained. With the cooperation and
                            assistance of all the concerned business and service
                            units involved in Processing Personal Data, the DPO
                            shall ensure that these records are kept up to date.
                            These records shall include, at the minimum:
                        </p>
                        <ol className='flex flex-col gap-4 list-[lower-alpha] pl-4 lg:pl-12 pt-4'>
                            <li className='pl-3'>
                                Information about the purpose of processing
                                personal data, including any intended future
                                processing or data sharing;
                            </li>

                            <li className='pl-3'>
                                A description of all categories of Data
                                Subjects, Personal Data, and recipients of such
                                Personal Data that will be involved in the
                                processing;
                            </li>

                            <li className='pl-3'>
                                A general description of the organizational,
                                physical, and technical security measures in
                                place within the Company; and
                            </li>

                            <li className='pl-3'>
                                A description of the information flow from the
                                point of the collection up to the disposal of
                                personal data, including any processing done in
                                between, as well as the manner and extent of
                                processing.
                            </li>
                            <li className='pl-3'>
                                Personal data will be kept in our facilities in
                                the Philippines after five (5) years from the
                                contract period unless you request it be deleted
                                immediately from our systems, databases, and
                                hard copies. Once deleted, your personal data
                                will no longer be searchable or included in
                                anonymous searches and completely removed from
                                all storage locations.
                            </li>
                        </ol>
                    </div>
                    <H1>Security Measures</H1>
                    <div className='pb-12'>
                        <p>
                            We have taken reasonable and appropriate security
                            measures to maintain personal data availability,
                            integrity, and confidentiality and protect your data
                            against unauthorized access alteration, disclosure,
                            or destruction. These measures include internal
                            reviews of our data collection, storage, processing
                            practices, and physical security measures to protect
                            your information against unauthorized access. To
                            protect your information, we restrict access to
                            personal data to personnel who would need that
                            information to perform their functions.
                        </p>
                    </div>
                    <H1>Data Breaches</H1>
                    <p className='pb-16'>
                        We will comply with the relevant provisions of rules and
                        circulars on handling personal data security breaches,
                        including notifying you or the National Privacy
                        Commission where an unauthorized person has acquired
                        sensitive personal information or information that may
                        be used to enable identity fraud and is likely to give
                        rise to serious harm to the affected data subject. Under
                        applicable law, not all personal data breaches are
                        identifiable.
                    </p>
                    <H1>Breach Reports</H1>
                    <p className='pb-16'>
                        All Security Incidents and Personal Data breaches shall
                        be documented through written reports, including those
                        not covered by the notification requirements. In the
                        case of Personal Data breaches, a report shall include
                        the facts surrounding an incident, the effects of such
                        incident, and the remedial actions taken by the Company.
                        In other security incidents not involving Personal Data,
                        a report containing aggregated data shall constitute
                        sufficient documentation. These reports shall be made
                        available when requested by the National Privacy
                        Commission.
                    </p>
                    <H1>Changes</H1>
                    <p className='pb-16'>
                        This Privacy Policy may be amended and updated from time
                        to time. The amended and updated Privacy Policy will be
                        available on our website.
                    </p>
                    <H1>Rights of the data subject</H1>
                    <p className='pb-16'>
                        To exercise your rights, which include the right to
                        access, modify, erase, and object to processing your
                        personal data within a reasonable time after such
                        request. Should you have any inquiries, feedback on this
                        Privacy Policy, or complaints to RCC Colab, you may
                        reach out to us through a written letter or email.
                    </p>
                    <div>
                        <h1 className='text-accent text-lg lg:text-xl pb-4'>
                            How to contact us
                        </h1>
                        <div>
                            <b>RCC Colab Solutions, Inc.</b>
                            <p>
                                Address: 7th Floor Ascott Makati, Glorietta 4,
                                Ayala Center, Makati City,1224, Philippines
                            </p>
                            <p>
                                Email address:{' '}
                                <span className='text-cyan-600'>
                                    dpo@rcccolabsolutions.com
                                </span>
                            </p>
                            <p>
                                Business hours: 8:00 AM to 5:00 PM, Monday to
                                Friday
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataPrivacyPolicy;
