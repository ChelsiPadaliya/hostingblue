"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone_number") as string;
    const subject = formData.get("msg_subject") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:live@hostingblue.in?subject=${encodeURIComponent(`Contact Form: ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    setSubmitMessage("Your email application has opened with the message. Please click Send in your email client to complete.");
    setSubmitting(false);
  };

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
                        {/* <li>
                          <i className="flaticon-chat" />
                          <a className="link-us" href="http://hostingblue.in/">
                            Hostingblue.in
                          </a>
                        </li> */}
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

      {/* comment-section */}
      {/* <div className="comment-section pt-100 pb-70 blue-gradient-with-opacity">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-4 pb-30">
              <div className="comment-content-item">
                <div className="about-content-image image-margin-left desk-pad-right-20">
                  <img src="assets/images/support-2.png" alt="support" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-8 pb-30">
              <div className="comment-content-item">
                <div className="comment-area bg-white">
                  <div className="sub-section-title">
                    <h3>Leave A Message</h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <div className="comment-input-area mt-30">
                    <form id="contactForm" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group mb-20">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-user" />
                                </span>
                              </div>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                required
                                data-error="Please enter your name"
                                placeholder="Name*"
                              />
                            </div>
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group mb-20">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-user" />
                                </span>
                              </div>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                required
                                data-error="Please enter your email"
                                placeholder="Email*"
                              />
                            </div>
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group mb-20">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-phone-call" />
                                </span>
                              </div>
                              <input
                                type="text"
                                name="phone_number"
                                id="phone_number"
                                required
                                data-error="Please enter your phone number"
                                className="form-control"
                                placeholder="Phone*"
                              />
                            </div>
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group mb-20">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-book" />
                                </span>
                              </div>
                              <input
                                type="text"
                                name="msg_subject"
                                id="msg_subject"
                                className="form-control"
                                required
                                data-error="Please enter your subject"
                                placeholder="Subject*"
                              />
                            </div>
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <div className="form-group mb-20">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="flaticon-envelope" />
                                </span>
                              </div>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                rows={5}
                                required
                                data-error="Please write your message"
                                placeholder="Your Message*"
                                defaultValue={""}
                              />
                            </div>
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <div className="form-check agree-label">
                              <input
                                name="gridCheck"
                                defaultValue="I agree to the terms and privacy policy."
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridCheck"
                              >
                                Accept{" "}
                                <a href="terms-conditions.html">
                                  Terms &amp; Conditions
                                </a>{" "}
                                And{" "}
                                <a href="privacy-policy.html">Privacy Policy</a>
                              </label>
                              <div className="help-block with-errors gridCheck-error" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <button className="btn btn-gradient" type="submit" disabled={submitting}>
                            {submitting ? "Sending..." : "Send Message"}
                          </button>
                          <div id="msgSubmit">{submitMessage}</div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* .end comment-section */}

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
