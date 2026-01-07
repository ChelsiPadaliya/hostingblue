"use client";

import Image from "next/image";
import Link from "next/link";
import TypingRotate from "../components/TypingRotate";

const HomeHero = () => {
  return (
    <section className="header-banner header-bg-shape-two header-padding -mt-[200px]">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left content */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="header-width header-main-content-two desk-ml-auto">
              <h4 className="header-welcome-text">Welcome To Hostingblue</h4>

              <h1 className="header-main-title">
                Get Premium Web Hosting <br />
                For your{" "}
                <span className="inline-block text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
                  <TypingRotate />
                </span>
              </h1>

              <p>
                Premium, affordable and reliable web infrastructure solutions to
                individuals and small to medium sized companies and businesses
                since last 10 year!
              </p>

              <ul className="section-button">
                <li>
                  <button className="btn btn-gradient">Get Started</button>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=YHq8SWAkzG8"
                    className="btn"
                    id="video-popup"
                  >
                    Play For 1 Min
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right image */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="header-content-image">
              <Image
                src="/assets/images/header-clipart-1.png"
                alt="Hosting Illustration"
                width={500}
                height={400}
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
