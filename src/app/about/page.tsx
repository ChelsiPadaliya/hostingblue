"use client";

import React, { useState, useEffect } from "react";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="about-us-section pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="section-title section-title-two section-title-left desk-pad-right-10 m-0">
                <div className="h-4 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="about-content-data">
                <div className="about-text text-center text-lg-start">
                  <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      {/* about-us-section */}
      <section className="about-us-section pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="section-title section-title-two section-title-left desk-pad-right-10 m-0">
                <small>About HostingBlue</small>
                <h2>
                  Meet With Our Exceptional Services For Involvement Of
                  Development
                </h2>
                <button className="btn btn-gradient btn-pill">
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="about-content-data">
                <div className="about-text text-center text-lg-start">
                  <p>
                    Hostingblue.in has been Providing Affordable, Reliable
                    Solutions to Individuals and Small to Medium Sized Companies
                    and Business. We Place a Lot of Emphasis on Emphasis On
                    Customer Satisfaction By Providing the Safest Environment
                    For Your Website and the Highest Server Uptime Possible
                    Which Translates to a Higher Uptime for Your Website.We
                    Provide 100% Network Uptime Guarantee On All Our Hosting
                    Packages.Keeping this in View We have Servers in the World&apos;s
                    Safest and Best Data Centers so that Your Website Stays up
                    at all Times.As a Web Hosting Company And Service Provider
                    it is our Commitment to make our Services Affordabale For
                    Everyone and Therfore Have Kept Our Prices at an All Time
                    Low So that Our Services are Within Reach Of Everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* .end about-us-section */}
    </>
  );
};

export default AboutPage;
