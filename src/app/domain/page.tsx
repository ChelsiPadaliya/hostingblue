"use client";
import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      {/* domain-search-area */}
      <section className="domain-search-section-two default-box-shadow max-1000 bg-white margin-minus-box pt-100 pb-80 border-radius-3 mt-100">
        <div className="container">
          <div className="section-title section-title-two text-center">
            <h2>Search perfect domain</h2>
          </div>
          <div className="domain-search domain-search-two">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find Your Domain"
                />
                <div className="input-group-append">
                  <select className="form-control">
                    <option value={1}>.com</option>
                    <option value={2}>.co</option>
                    <option value={3}>.net</option>
                  </select>
                </div>
                <button className="btn btn-gradient" type="button">Search Now</button>
              </div>
            </form>
            <div className="domain-search-category">
              <ul>
                <li>
                  <Link href="#" className="active">
                    .com only $8.88
                  </Link>
                </li>
                <li>
                  <Link href="#">.co only $9.88</Link>
                </li>
                <li>
                  <Link href="#">.info only $6.70</Link>
                </li>
                <li>
                  <Link href="#">.net only $7.80</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* .end domian-search-area */}
    </>
  );
};

export default Page;
