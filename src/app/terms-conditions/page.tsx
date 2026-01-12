"use client";

import React, { useState, useEffect } from "react";

const TermsConditionsPage = () => {
  const [loading, setLoading] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <section className="terms-page-section pb-100 -mt-[100px]">
          <div className="container">
            <div className="terms-privacy">
              <div className="h-8 bg-gray-200 rounded w-64 mb-6 animate-pulse"></div>
              <ul className="terms-privacy-list">
                {[...Array(5)].map((_, i) => (
                  <li key={i}>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                  </li>
                ))}
              </ul>
              <div className="h-6 bg-gray-200 rounded w-48 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-6 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-40 mb-4 animate-pulse"></div>
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
              <div className="col-sm-12 col-md-12 col-lg-7 pb-30">
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
      {/* terms-page-section */}
      <section className="terms-page-section pb-100 -mt-[100px]">
        <div className="container">
          <div className="terms-privacy">
            <div className="sub-section-title">
              <h3>Our Terms &amp; Conditions</h3>
            </div>
            <ul className="terms-privacy-list">
              <li>
                <p>
                  <strong>01.</strong>By using Hostingblue services, you agree
                  that all information provided on our website is governed by
                  these terms and conditions. You acknowledge that Hostingblue
                  may update or modify services, features, and pricing at any
                  time without prior notice.
                </p>
              </li>
              <li>
                <p>
                  <strong>02.</strong>Hostingblue provides web hosting, domain
                  registration, email hosting, and related services to customers
                  worldwide. Services must be used only for lawful purposes and
                  in compliance with applicable laws and regulations.
                </p>
              </li>
              <li>
                <p>
                  <strong>03.</strong>All account holders are responsible for
                  maintaining the confidentiality of their login credentials and
                  for all activities that occur under their accounts.
                  Hostingblue is not responsible for losses due to unauthorized
                  access or misuse of your login details.
                </p>
              </li>
              <li>
                <p>
                  <strong>04.</strong>Payments for hosting plans, domain
                  registrations, or other services are non-refundable unless
                  otherwise stated. Late or failed payments may result in
                  suspension or termination of services without prior warning.
                </p>
              </li>
              <li>
                <p>
                  <strong>05.</strong>Hostingblue strives for the highest
                  possible uptime and network stability. However, Hostingblue
                  does not guarantee uninterrupted service and is not liable for
                  downtime due to maintenance, security updates, or issues
                  beyond our control.
                </p>
              </li>
            </ul>
            <div className="sub-section-title">
              <h3>Changes To The Terms</h3>
            </div>
            <p>
              Hostingblue reserves the right to change, revise, or update these
              Terms & Conditions at any time, with or without notice. Continued
              use of any services after such changes constitutes acceptance of
              the revised terms and policies.
            </p>
            <div className="sub-section-title">
              <h3>Additional Terms</h3>
            </div>
            <p>
              All users agree that Hostingblue’s liability is limited to the
              maximum extent permitted by law. Hostingblue is not responsible
              for indirect, incidental, special, or consequential damages
              arising out of or in connection with the use or inability to use
              our services.
            </p>
            <p>
              Users also agree to comply with all applicable local, national,
              and international laws while using Hostingblue services. Any
              breach of these terms may result in immediate suspension or
              termination of services without compensation.
            </p>
          </div>
        </div>
      </section>
      {/* .end terms-page-section */}
      {/* faq-section */}
      <section className="faq-section pt-100 pb-70 blue-gradient-with-opacity">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>What Would You Like To Know?</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-5 pb-30">
              <div className="faq-accordion">
                {[
                  {
                    title: " What types of hosting do you offer?",
                    content: "Hostingblue offers Linux and Windows Shared Hosting,Linux and Windows Reseller Hosting, VPS Hosting, and other web hosting solutions designed to meet different business requirements."
                  },
                  {
                    title: "Can I upgrade my hosting plan later?",
                    content: "Absolutely. You can upgrade or downgrade your hosting plan at any time based on your requirements. Our support team will assist you during the transition to ensure minimal downtime."
                  },
                  {
                    title: "Do you provide customer support?",
                    content: "Yes. Hostingblue offers customer support through email and ticket-based systems. Our support team is available to help with technical issues, account queries, and service-related questions."
                  },
                  {
                    title: "Are there any hidden charges?",
                    content: " No. Hostingblue believes in transparent pricing. All features and pricing details are clearly mentioned on our website. Any additional charges will be communicated in advance."
                  }
                ].map((faq, index) => (
                  <div key={index} className={`faq-accordion-item bg-white ${activeAccordion === index ? 'faq-accordion-item-active' : ''}`}>
                    <div className="faq-accordion-header" onClick={() => setActiveAccordion(activeAccordion === index ? null : index)} style={{ cursor: 'pointer' }}>
                      <h3 className="faq-accordion-title">
                        {faq.title}
                      </h3>
                      {activeAccordion !== index && <div className="faq-accordion-header-overlay" />}
                    </div>
                    <div className="faq-accordion-body" style={{ display: activeAccordion === index ? 'block' : 'none' }}>
                      <div className="faq-accordion-body-inner">
                        <p className="faq-accordion-para">
                          {faq.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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

export default TermsConditionsPage;
