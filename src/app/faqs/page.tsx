"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const FAQsPage = () => {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <section className="faq-section pt-100 -mt-[150px] pb-70 blue-gradient-with-opacity">
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
      {/* faq-section */}
      <section className="faq-section pt-100 -mt-[150px] pb-70 blue-gradient-with-opacity">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>What Would You Like To Know?</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-5 pb-30">
              <div className="faq-accordion">
                <div
                  className={`faq-accordion-item bg-white ${
                    activeIndex === 0 ? "faq-accordion-item-active" : ""
                  }`}
                >
                  <div
                    className="faq-accordion-header"
                    onClick={() => toggleAccordion(0)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="faq-accordion-title">
                      What types of hosting do you offer?
                    </h3>
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
                <div
                  className={`faq-accordion-item bg-white ${
                    activeIndex === 1 ? "faq-accordion-item-active" : ""
                  }`}
                >
                  <div
                    className="faq-accordion-header"
                    onClick={() => toggleAccordion(1)}
                    style={{ cursor: "pointer" }}
                  >
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
                <div
                  className={`faq-accordion-item bg-white ${
                    activeIndex === 2 ? "faq-accordion-item-active" : ""
                  }`}
                >
                  <div
                    className="faq-accordion-header"
                    onClick={() => toggleAccordion(2)}
                    style={{ cursor: "pointer" }}
                  >
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
                <div
                  className={`faq-accordion-item bg-white ${
                    activeIndex === 3 ? "faq-accordion-item-active" : ""
                  }`}
                >
                  <div
                    className="faq-accordion-header"
                    onClick={() => toggleAccordion(3)}
                    style={{ cursor: "pointer" }}
                  >
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
                <Image
                  src="/assets/images/faq.png"
                  alt="faq"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* .end faq-section */}
    </>
  );
};

export default FAQsPage;
