"use client";

import React from "react";
import Link from "next/link";
import Features from "../home/features";

const Page = () => {
  return (
    <>
      {/* pricing-section */}
      <section className="pricing-section -mt-[100px] pb-70">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>Price &amp; plans</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="pricing-item pricing-item-two">
                <div className="pricing-secondary-header">
                  <div className="pricing-header-title">
                    <h3 className="pricing-header-title-text">Regular</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
                  </div>
                  <div className="pricing-item-amount">
                    <p>Starting at</p>
                    <h4 className="pricing-item-amount-number">
                      <small>$</small>5.99<span>/Month</span>
                    </h4>
                  </div>
                </div>

                <div className="pricing-item-body">
                  <ul className="pricing-body-list pricing-body-list-two">
                    <li>CPU <span>(1 Core)</span></li>
                    <li>Bandwidth <span>(100 GB)</span></li>
                    <li>Website <span>(1)</span></li>
                    <li>RAM <span>(1 GB)</span></li>
                    <li>Setup <span>(Paid)</span></li>
                    <li>Setup Two <span>(Free)</span></li>
                    <li>Disk Space <span>(100 GB)</span></li>
                    <li>IP <span>(Upto 1)</span></li>
                    <li>IP Two <span>(Upto 1)</span></li>
                  </ul>

                  <Link href="/cart" className="btn btn-gradient">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="pricing-item pricing-item-two">
                <div className="pricing-secondary-header">
                  <div className="pricing-header-title">
                    <h3 className="pricing-header-title-text">Starter</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
                  </div>
                  <div className="pricing-item-amount">
                    <p>Starting at</p>
                    <h4 className="pricing-item-amount-number">
                      <small>$</small>13.99<span>/Month</span>
                    </h4>
                  </div>
                </div>

                <div className="pricing-item-body">
                  <ul className="pricing-body-list pricing-body-list-two">
                    <li>CPU <span>(2 Cores)</span></li>
                    <li>Bandwidth <span>(500 GB)</span></li>
                    <li>Website <span>(2)</span></li>
                    <li>RAM <span>(2 GB)</span></li>
                    <li>Setup <span>(Paid)</span></li>
                    <li>Setup Two <span>(Free)</span></li>
                    <li>Disk Space <span>(450 GB)</span></li>
                    <li>IP <span>(Upto 3)</span></li>
                    <li>IP Two <span>(Upto 2)</span></li>
                  </ul>

                  <Link href="/cart" className="btn btn-gradient">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="pricing-item pricing-item-two">
                <div className="pricing-secondary-header">
                  <div className="pricing-header-title">
                    <h3 className="pricing-header-title-text">Enterprise</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
                  </div>
                  <div className="pricing-item-amount">
                    <p>Starting at</p>
                    <h4 className="pricing-item-amount-number">
                      <small>$</small>30.99<span>/Month</span>
                    </h4>
                  </div>
                </div>

                <div className="pricing-item-body">
                  <ul className="pricing-body-list pricing-body-list-two">
                    <li>CPU <span>(3 Cores)</span></li>
                    <li>Bandwidth <span>(1000 GB)</span></li>
                    <li>Website <span>(5)</span></li>
                    <li>RAM <span>(5 GB)</span></li>
                    <li>Setup <span>(Paid)</span></li>
                    <li>Setup Two <span>(Free)</span></li>
                    <li>Disk Space <span>(500 GB)</span></li>
                    <li>IP <span>(Upto 6)</span></li>
                    <li>IP Two <span>(Upto 5)</span></li>
                  </ul>

                  <Link href="/cart" className="btn btn-gradient">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="pricing-item pricing-item-two">
                <div className="pricing-secondary-header">
                  <div className="pricing-header-title">
                    <h3 className="pricing-header-title-text">Business</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
                  </div>
                  <div className="pricing-item-amount">
                    <p>Starting at</p>
                    <h4 className="pricing-item-amount-number">
                      <small>$</small>40.39<span>/Month</span>
                    </h4>
                  </div>
                </div>

                <div className="pricing-item-body">
                  <ul className="pricing-body-list pricing-body-list-two">
                    <li>CPU <span>(5 Cores)</span></li>
                    <li>Bandwidth <span>(2000 GB)</span></li>
                    <li>Website <span>(10)</span></li>
                    <li>RAM <span>(16 GB)</span></li>
                    <li>Setup <span>(Free)</span></li>
                    <li>Setup Two <span>(Free)</span></li>
                    <li>Disk Space <span>(600 GB)</span></li>
                    <li>IP <span>(Upto 10)</span></li>
                    <li>IP Two <span>(Upto 58)</span></li>
                  </ul>

                  <Link href="/cart" className="btn btn-gradient">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* .end pricing-section */}
      <Features/>
    </>
  );
};

export default Page;
