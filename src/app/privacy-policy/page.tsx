"use client";

import React, { useState, useEffect } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  if (loading) {
    return (
      <>
        <section className="privacy-page-section pb-100 -mt-[100px]">
          <div className="container">
            <div className="terms-privacy">
              <div className="h-8 bg-gray-200 rounded w-56 mb-6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-72 mb-4 animate-pulse"></div>
              <ul className="terms-privacy-list">
                {[...Array(5)].map((_, i) => (
                  <li key={i}>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4 animate-pulse"></div>
                  </li>
                ))}
              </ul>
              <div className="h-6 bg-gray-200 rounded w-48 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        </section>
        <section className="faq-section pt-100 pb-70 blue-gradient-with-opacity">
          <div className="container">
            <div className="h-8 bg-gray-200 rounded w-80 mx-auto mb-8 animate-pulse"></div>
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-5 pb-30">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white p-4 mb-4 rounded">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1 pb-30">
                <div className="h-80 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      {/* privacy-page-section */}
      <section className="privacy-page-section pb-100 -mt-[100px]">
        <div className="container">
          <div className="terms-privacy">
            <div className="sub-section-title">
              <h3>Our Privacy Policy</h3>
            </div>
            <p>
              At Hostingblue, we are committed to protecting your privacy and
              ensuring that your personal information is collected and used
              responsibly. This policy explains what data we collect, how it is
              used, and the choices you have regarding your information.
            </p>
            <div className="sub-section-title">
              <h3>How We Collect and Use Information</h3>
            </div>
            <ul className="terms-privacy-list">
              <li>
                <p>
                  <strong>01.</strong>Hostingblue collects personal information
                  such as name, email address, phone number, and billing details
                  when users register, purchase services, or contact our support
                  team. This information is used to provide and manage our
                  hosting services efficiently.
                </p>
              </li>
              <li>
                <p>
                  <strong>02.</strong>We automatically collect certain technical
                  information including IP address, browser type, device
                  information, and usage data to monitor website performance,
                  improve user experience, and maintain platform security.
                </p>
              </li>
              <li>
                <p>
                  <strong>03.</strong>Cookies and similar tracking technologies
                  are used to remember user preferences, analyze traffic, and
                  enhance website functionality. Users may choose to disable
                  cookies through their browser settings, though some features
                  may not work properly.
                </p>
              </li>
              <li>
                <p>
                  <strong>04.</strong>Hostingblue uses collected information to
                  process payments, send service-related notifications, provide
                  customer support, and communicate important updates regarding
                  services or policies.
                </p>
              </li>
              <li>
                <p>
                  <strong>05.</strong>We do not sell, rent, or trade personal
                  information to third parties. Information may only be shared
                  with trusted partners such as payment gateways or domain
                  registrars when required to deliver our services or comply
                  with legal obligations.
                </p>
              </li>
            </ul>
            <div className="sub-section-title">
              <h3>Additional Policy</h3>
            </div>
            <p>
              Hostingblue takes reasonable technical and organizational measures
              to protect user data against unauthorized access, loss, or misuse.
              However, no online system is completely secure, and users
              acknowledge that data transmission over the internet carries
              inherent risks.
            </p>
            <p>
              By using Hostingblue’s website and services, users consent to the
              collection and use of information as outlined in this Privacy
              Policy. Hostingblue reserves the right to update or modify this
              policy at any time, and continued use of services after changes
              indicates acceptance of the revised policy.
            </p>
          </div>
        </div>
      </section>
      {/* .end privacy-page-section */}
      {/* faq-section */}
      <section className="faq-section pt-100 pb-70 blue-gradient-with-opacity">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>What Would You Like To Know?</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-5 pb-30">
              <div className="faq-accordion">
                <div className={`faq-accordion-item bg-white ${activeAccordion === 0 ? 'faq-accordion-item-active' : ''}`}>
                  <div className="faq-accordion-header" onClick={() => toggleAccordion(0)}>
                    <h3 className="faq-accordion-title">
                      What types of hosting do you offer?
                    </h3>
                    <div className="faq-accordion-header-overlay" />
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Hostingblue offers Linux and Windows Shared Hosting,
                        Linux and Windows Reseller Hosting, VPS Hosting, and
                        other web hosting solutions designed to meet different
                        business requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`faq-accordion-item bg-white ${activeAccordion === 1 ? 'faq-accordion-item-active' : ''}`}>
                  <div className="faq-accordion-header" onClick={() => toggleAccordion(1)}>
                    <h3 className="faq-accordion-title">
                      Can I upgrade my hosting plan later?
                    </h3>
                    <div className="faq-accordion-header-overlay" />
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Absolutely. You can upgrade or downgrade your hosting
                        plan at any time based on your requirements. Our support
                        team will assist you during the transition to ensure
                        minimal downtime.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`faq-accordion-item bg-white ${activeAccordion === 2 ? 'faq-accordion-item-active' : ''}`}>
                  <div className="faq-accordion-header" onClick={() => toggleAccordion(2)}>
                    <h3 className="faq-accordion-title">
                      Do you provide customer support?
                    </h3>
                    <div className="faq-accordion-header-overlay" />
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Yes. Hostingblue offers customer support through email
                        and ticket-based systems. Our support team is available
                        to help with technical issues, account queries, and
                        service-related questions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`faq-accordion-item bg-white ${activeAccordion === 3 ? 'faq-accordion-item-active' : ''}`}>
                  <div className="faq-accordion-header" onClick={() => toggleAccordion(3)}>
                    <h3 className="faq-accordion-title">
                      Are there any hidden charges?
                    </h3>
                    <div className="faq-accordion-header-overlay" />
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        No. Hostingblue believes in transparent pricing. All
                        features and pricing details are clearly mentioned on
                        our website. Any additional charges will be communicated
                        in advance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1 pb-30">
              <div className="about-content-image">
                <img src="assets/images/faq.png" alt="faq" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* .end faq-section */}
    </>
  );
};

export default page;
