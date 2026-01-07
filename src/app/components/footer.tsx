"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const scrollTop = document.getElementById("scrolltop");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollTop?.classList.add("show");
      } else {
        scrollTop?.classList.remove("show");
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    scrollTop?.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollTop?.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      {/* footer */}
      <footer className="footer-bg">
        {/* footer-upper */}
        <div className="footer-upper pt-50 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="footer-content-item">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image
                        src="/assets/images/hostingbluew.png"
                        className="blue-logo logo1 desktop-logo"
                        width={240}
                        height={80}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="footer-details">
                    <p>
                      B3, Goyal Tower, University Road, Panjrapol, Ahmedabad -
                      380009
                    </p>

                    <p>
                      Email:{" "}
                      <a href="mailto:live@hostingblue.in">
                        live@hostingblue.in
                      </a>
                    </p>
                    <p>
                      Phone: <a href="tel:+919909005055">+91 99090 05055</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8">
                <div className="footer-right pl-80">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="footer-content-list footer-content-item">
                        <div className="footer-content-title">
                          <h3>Get Support</h3>
                        </div>
                        <ul className="footer-details footer-list">
                          <li>
                            <Link href="/shared-hosting">Shared Hosting</Link>
                          </li>
                          <li>
                            <Link href="/wordpress-hosting">
                              WordPress Hosting
                            </Link>
                          </li>
                          <li>
                            <Link href="/cloud-hosting">Cloud Hosting</Link>
                          </li>
                          <li>
                            <Link href="/vps-hosting">VPS Hosting</Link>
                          </li>
                          <li>
                            <Link href="/dedicated-hosting">
                              Dedicated Hosting
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="footer-content-list footer-content-item">
                        <div className="footer-content-title">
                          <h3>Company</h3>
                        </div>
                        <ul className="footer-details footer-list">
                          <li>
                            <Link href="/about-us">About Us</Link>
                          </li>
                          <li>
                            <Link href="/contact-us">Contact Us</Link>
                          </li>
                          <li>
                            <Link href="/pricing">Pricing</Link>
                          </li>
                          <li>
                            <Link href="/news-default">News</Link>
                          </li>
                          <li>
                            <Link href="/affiliate">Affiliate</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="footer-content-list footer-content-item">
                        <div className="footer-content-title">
                          <h3>Solutions</h3>
                        </div>
                        <ul className="footer-details footer-list">
                          <li>
                            <Link href="/terms-conditions">
                              Terms &amp; Conditions
                            </Link>
                          </li>
                          <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link href="/authentication">Authentication</Link>
                          </li>
                          <li>
                            <Link href="/pricing">Pricing</Link>
                          </li>
                          <li>
                            <Link href="/faqs">FAQ's</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-lower */}
        <div className="footer-lower">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-sm-12 col-lg-5">
                <div className="footer-lower-item-inner footer-lower-item-left">
                  {/* social link */}
                  <div className="footer-lower-content">
                    <h3>@Hostingblue</h3>
                    <div className="footer-social-logo">
                      <ul className="footer-social-list">
                        <li className="social-btn social-btn-fb">
                          <a href="https://www.facebook.com/hostingblues">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li className="social-btn social-btn-tw">
                          <a href="https://twitter.com/hostingBLUES?lang=en">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li className="social-btn social-btn-google">
                          <a
                            href="https://plus.google.com/u/2/112451586543808220624"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bx bxl-google-plus" />
                          </a>
                        </li>

                        <li className="social-btn social-btn-lin">
                          <a
                            href="https://in.linkedin.com/in/hostingblue"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-7">
                <div className="footer-lower-item-inner footer-lower-item-right justify-content-lg-end">
                  {/* info */}
                  <div className="footer-lower-text text-lg-end">
                    <p className="footer-text-copy">
                      © Copyright 2013 - HostingBLUE India - Inc All Rights
                      Reserved.
                      {/* <a href="https://hibootstrap.com/" target="_blank">
                         HiBootstrap
                      </a> */}
                    </p>
                    <p className="footer-text-gen">
                      Terms &amp; Conditions May Apply.{" "}
                      <Link href="/terms-conditions" target="_blank">
                        Click Here
                      </Link>
                    </p>
                  </div>
                  {/* refer button
                  <div className="footer-lower-button">
                    <button className="btn btn-pill">Refer A Friend</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* .end footer */}
      {/* scroll-top */}
      <div className="scroll-top" id="scrolltop" style={{ cursor: "pointer" }}>
        <div className="scroll-top-inner">
          <span>
            <i className="flaticon-up-arrow" />
          </span>
        </div>
      </div>
      {/* .end scroll-top */}
    </>
  );
};

export default Footer;
