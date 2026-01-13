"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <>
        <section className="contact-us-section pb-70 -mt-[50px]">
          <div className="container">
            <div className="row">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="box-card fluid-height">
                    <div className="box-card-inner full-height default-box-shadow">
                      <div className="box-card-content text-center">
                        <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded w-24 mx-auto mb-3 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-32 mx-auto mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-28 mx-auto animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      {/* contact-us-section */}
      <section className="contact-us-section pb-70 -mt-[50px]">
        <div className="container">
          <div className="row">
            {/* Send Mail */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="box-card fluid-height">
                <div className="box-card-inner box-card-black full-height default-box-shadow">
                  <div className="box-card-content text-center">
                    <div className="box-card-icon blue-gradient">
                      <i className="flaticon-email" />
                    </div>
                    <div className="box-card-details">
                      <h3>Send Mail</h3>
                      <ul className="box-card-list">
                        <li>
                          <i className="flaticon-email" />
                          <Link
                            className="link-us"
                            href="mailto:live@hostingblue.in"
                            target="_blank"
                          >
                            live@hostingblue.in
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Make A Call */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="box-card fluid-height">
                <div className="box-card-inner blue-gradient full-height default-box-shadow">
                  <div className="box-card-content text-center">
                    <div className="box-card-icon bg-white">
                      <i className="flaticon-phone-call-1" />
                    </div>
                    <div className="box-card-details">
                      <h3>Make A Call</h3>
                      <ul className="box-card-list">
                        <li>
                          <i className="flaticon-phone" />
                          <a href="tel:+91 990 900 5055">+91 990 900 5055</a>
                        </li>
                        <li>
                          <i className="flaticon-email" />
                          <a href="tel:+91 760 001 8145">+91 760 001 8145</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Find Us */}
            <div className="col-sm-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0">
              <div className="box-card fluid-height">
                <div className="box-card-inner bg-white full-height default-box-shadow">
                  <div className="box-card-content text-center">
                    <div
                      className="box-card-icon blue-gradient"
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.854393106739!2d72.54393277516472!3d23.029117879169192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8571910c733d%3A0x622caa419da409fd!2sHostingBLUE%20India!5e0!3m2!1sen!2sin!4v1767856017628!5m2!1sen!2sin",
                          "_blank"
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <i className="flaticon-pin" />
                    </div>

                    <div className="box-card-details">
                      <h3>Find Us</h3>
                      <p>
                        B3, Goyal Tower, University Road, Panjrapol, Ahmedabad -
                        380009
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact-us-section */}

      {/* map-section */}
      <div className="map-section">
        <div className="map-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.854393106739!2d72.54393277516472!3d23.029117879169192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8571910c733d%3A0x622caa419da409fd!2sHostingBLUE%20India!5e0!3m2!1sen!2sin!4v1767856017628!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* .end map-section */}
    </>
  );
};

export default Page;
