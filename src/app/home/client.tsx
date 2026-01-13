import Image from "next/image";

const Client = () => {
  return (
    <>
      {/* platform-section */}
      <div className="platform-section pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="about-content-item">
                <div className="about-content-image image-margin-left">
                  <Image
                    src="/assets/images/support-1.png"
                    alt="support"
                    width={500}
                    height={400}
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="about-content-item">
                <div className="about-content-data">
                  <div className="about-text">
                    <h3>Dedicated Client-End Support</h3>
                    <p>
                      Our dedicated support team is always available to help you
                      manage, optimize, and grow your hosting environment with
                      confidence.
                    </p>
                  </div>

                  <ul className="about-list">
                    <li>
                      <div className="about-list-check about-list-check-off-white">
                        <i className="flaticon-tick" />
                      </div>
                      <div className="about-list-content">
                        <h3>Security and faster Server</h3>
                        <p>
                          Our servers are protected with advanced security
                          measures and optimized performance to deliver fast
                          loading speeds and reliable uptime.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="about-list-check about-list-check-off-white">
                        <i className="flaticon-tick" />
                      </div>
                      <div className="about-list-content">
                        <h3>24/7 Online &amp; Offline Support</h3>
                        <p>
                          Our support team is available 24/7 to assist you
                          anytime, ensuring reliable help whenever you need it.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="about-list-check about-list-check-off-white">
                        <i className="flaticon-tick" />
                      </div>
                      <div className="about-list-content">
                        <h3>Better Speed With Full Panel</h3>
                        <p>
                          Manage your server efficiently with a full-featured
                          control panel designed for speed, stability, and ease
                          of use.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end platform-section */}
    </>
  );
};

export default Client;
