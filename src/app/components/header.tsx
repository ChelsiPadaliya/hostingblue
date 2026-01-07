"use client";

import Link from "next/link";
import Image from "next/image";
import TypingRotate from "./TypingRotate";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* topbar */}
      <div className="topbar bg-off-white-two">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-item">
              <div className="topbar-item-list">
                <div className="topbar-list-thumb">
                  <i className="flaticon-chat" />
                </div>
                <div className="topbar-list-content">
                  <Link href="#">Chat With A Consultant</Link>
                </div>
              </div>
              <div className="topbar-item-list">
                <div className="topbar-list-thumb">
                  <i className="flaticon-phone" />
                </div>
                <div className="topbar-list-content">
                  <Link href="tel:+91 9909005055">+91 9909005055</Link>
                </div>
              </div>
            </div>
            <div className="topbar-item">
              <div className="topbar-item-list">
                <div className="topbar-list-thumb">
                  <i className="flaticon-chat" />
                </div>
                <div className="topbar-list-content">
                  <Link href="mailto:info@blim.com">live@hostingblue.in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .end topbar */}
      {/* header */}
      <header className="header-banner header-padding">
        {/* navbar */}
        <div className="fixed-top">
          <div className="navbar-area">
            {/* mobile menu */}
            <div className="mobile-nav mobile-nav-two">
              <Link href="/" className="mobile-logo">
                <Image
                  src="/assets/images/top-logo.png"
                  alt="logo"
                  className="blue-logo logo1"
                  width={240}
                  height={35}
                  style={{ width: "100%", height: "auto" }}
                  unoptimized
                />
                <Image
                  src="/assets/images/top-logo.png"
                  alt="logo"
                  className="blue-logo logo2"
                  width={240}
                  height={35}
                  style={{ width: "100%", height: "auto" }}
                  unoptimized
                />
              </Link>
              {/* mobile navbar-option */}
              <div className="navbar-option">
                <div className="navbar-option-item navbar-option-dots dropdown">
                  <button
                    type="button"
                    id="dot"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-horizontal-rounded" />
                  </button>
                  <ul className="dropdown-menu navbar-dots-dropdown">
                    <li className="dropdown-item">
                      <div className="navbar-option-item dropdown">
                        <button
                          className="search navbar-option-icon dropdown-toggle"
                          type="button"
                          id="search1"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="navbar-search-zoom">
                            <i className="flaticon-zoom" />
                          </span>
                          <span className="navbar-search-cancel">
                            <i className="flaticon-cancel" />
                          </span>
                        </button>
                        <div
                          className="navbar-search dropdown-menu"
                          aria-labelledby="search1"
                        >
                          <form>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                              />
                              <button className="btn btn-gradient">
                                <span>
                                  <i className="flaticon-loupe" />
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="navbar-option-item">
                        <Link
                          href="/cart"
                          className="shopping-cart navbar-option-icon"
                        >
                          <span>
                            <i className="flaticon-shopping-bags" />
                          </span>
                          <span className="shopping-cart-tooltip">2</span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="navbar-option-item navbar-option-search dropdown mobile-hide">
                  <button
                    className="search navbar-option-icon dropdown-toggle"
                    type="button"
                    id="search3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="navbar-search-zoom">
                      <i className="flaticon-zoom" />
                    </span>
                    <span className="navbar-search-cancel">
                      <i className="flaticon-cancel" />
                    </span>
                  </button>
                  <div
                    className="navbar-search dropdown-menu"
                    aria-labelledby="search3"
                  >
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <button className="btn btn-gradient">
                          <span>
                            <i className="flaticon-loupe" />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="navbar-option-item navbar-option-cart mobile-hide">
                  <Link
                    href="/cart"
                    className="shopping-cart navbar-option-icon"
                  >
                    <span>
                      <i className="flaticon-shopping-bags" />
                    </span>
                    <span className="shopping-cart-tooltip">2</span>
                  </Link>
                </div>
                <div className="navbar-option-item navbar-option-account">
                  <Link href="/authentication" className="navbar-option-icon">
                    <span>
                      <i className="flaticon-user" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* desktop menu */}
            <div className="main-nav main-nav-two bg-white">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light ">
                   <Link href="/">
                  <Image
                    src="/assets/images/top-logo.png"
                    alt="logo"
                    className="blue-logo logo1 desktop-logo"
                    width={240}
                    height={35}
                    unoptimized
                  />
                  </Link>
                  <Link className="navbar-brand" href="/">
                    <Image
                      src="/assets/images/hostingbluew.png"
                      alt="logo"
                      className="blue-logo logo2"
                      width={150}
                      height={40}
                      unoptimized
                    />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                  >
                    <span className="navbar-toggler-icon">
                      <i
                        className={`bx ${
                          isMobileMenuOpen ? "bx-x" : "bx-menu"
                        }`}
                      />
                    </span>
                  </button>

                  {/* nav-list */}
                  <div
                    className={`navbar-collapse mean-menu ${
                      isMobileMenuOpen ? "show" : ""
                    }`}
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link
                          href="#"
                          className={`nav-link dropdown-toggle ${isActive('/') || isActive('/home-2') || isActive('/home-3') ? 'active' : ''}`}
                        >
                          Home
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                              Home Page 1
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/home-2" className={`nav-link ${isActive('/home-2') ? 'active' : ''}`}>
                              Home Page 2
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/home-3" className={`nav-link ${isActive('/home-3') ? 'active' : ''}`}>
                              Home Page 3
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link href="#" className={`nav-link dropdown-toggle ${pathname?.startsWith('/dedicated-hosting') || pathname?.startsWith('/shared-hosting') || pathname?.startsWith('/vps-hosting') || pathname?.startsWith('/wordpress-hosting') || pathname?.startsWith('/cloud-hosting') || pathname?.startsWith('/domain-name') ? 'active' : ''}`}>
                          Hosting
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/dedicated-hosting"
                              className={`nav-link ${isActive('/dedicated-hosting') ? 'active' : ''}`}
                            >
                              Dedicated Hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/shared-hosting" className={`nav-link ${isActive('/shared-hosting') ? 'active' : ''}`}>
                              Shared Hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/vps-hosting" className={`nav-link ${isActive('/vps-hosting') ? 'active' : ''}`}>
                              VPS Hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/wordpress-hosting"
                              className={`nav-link ${isActive('/wordpress-hosting') ? 'active' : ''}`}
                            >
                              WordPress Hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/cloud-hosting" className={`nav-link ${isActive('/cloud-hosting') ? 'active' : ''}`}>
                              Cloud Hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/linux-hosting" className={`nav-link ${isActive('/linux-hosting') ? 'active' : ''}`}>
                              Linux Hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/domain-name" className={`nav-link ${isActive('/domain-name') ? 'active' : ''}`}>
                              Domain Name
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          className={`nav-link dropdown-toggle ${
                            pathname.includes("/email") ||
                            pathname.includes("/ssl") ||
                            pathname.includes("/enterprise") ||
                            pathname.includes("/magento") ||
                            pathname.includes("/gsuite") ||
                            pathname.includes("/iptv") ||
                            pathname.includes("/gaming") ||
                            pathname.includes("/voice") ||
                            pathname.includes("/virtual") ||
                            pathname.includes("/database") ||
                            pathname.includes("/ddos") ||
                            pathname.includes("/about") ||
                            pathname.includes("/faqs") ||
                            pathname.includes("/affiliate") ||
                            pathname.includes("/authentication") ||
                            pathname.includes("/forget") ||
                            pathname.includes("/cart") ||
                            pathname.includes("/checkout") ||
                            pathname.includes("/payment") ||
                            pathname.includes("/configurator") ||
                            pathname.includes("/specials") ||
                            pathname.includes("/search") ||
                            pathname.includes("/terms") ||
                            pathname.includes("/privacy") ||
                            pathname.includes("/404")
                              ? "active"
                              : ""
                          }`}
                        >
                          Pages
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="#" className="nav-link dropdown-toggle">
                              Services
                            </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link
                                  href="/email-security"
                                  className={`nav-link ${
                                    pathname === "/email-security"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Email Security
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/ssl-certificates"
                                  className={`nav-link ${
                                    pathname === "/ssl-certificates"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  SSL Certificates
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/enterprise-email"
                                  className={`nav-link ${
                                    pathname === "/enterprise-email"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Enterprise Email
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/magento-pro"
                                  className={`nav-link ${
                                    pathname === "/magento-pro" ? "active" : ""
                                  }`}
                                >
                                  Magento Pro
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/gsuite-google"
                                  className={`nav-link ${
                                    pathname === "/gsuite-google"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  G Suite Google
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/iptv-services"
                                  className={`nav-link ${
                                    pathname === "/iptv-services"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  IPTV Services
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/gaming-services"
                                  className={`nav-link ${
                                    pathname === "/gaming-services"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Gaming Services
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link dropdown-toggle">
                              Infrastructure
                            </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link
                                  href="/voice-servers"
                                  className={`nav-link ${
                                    pathname === "/voice-servers"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Voice Servers
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/virtual-numbers"
                                  className={`nav-link ${
                                    pathname === "/virtual-numbers"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Virtual Numbers
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/database-services"
                                  className={`nav-link ${
                                    pathname === "/database-services"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Database Services
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/ddos-protections"
                                  className={`nav-link ${
                                    pathname === "/ddos-protections"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  DDoS Protections
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/about-us"
                              className={`nav-link ${
                                pathname === "/about-us" ? "active" : ""
                              }`}
                            >
                              About Us
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/faqs"
                              className={`nav-link ${
                                pathname === "/faqs" ? "active" : ""
                              }`}
                            >
                              FAQ's
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/affiliate"
                              className={`nav-link ${
                                pathname === "/affiliate" ? "active" : ""
                              }`}
                            >
                              Affiliate
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link dropdown-toggle">
                              User
                            </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link
                                  href="/authentication"
                                  className={`nav-link ${
                                    pathname === "/authentication"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Authentication
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/forget-password"
                                  className={`nav-link ${
                                    pathname === "/forget-password"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Forget Password
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link dropdown-toggle">
                              Shop
                            </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link
                                  href="/cart"
                                  className={`nav-link ${
                                    pathname === "/cart" ? "active" : ""
                                  }`}
                                >
                                  Cart
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/checkout"
                                  className={`nav-link ${
                                    pathname === "/checkout" ? "active" : ""
                                  }`}
                                >
                                  Checkout
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/payment-method"
                                  className={`nav-link ${
                                    pathname === "/payment-method"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Payment Method
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/configurator"
                                  className={`nav-link ${
                                    pathname === "/configurator" ? "active" : ""
                                  }`}
                                >
                                  Configurator
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link dropdown-toggle">
                              Others
                            </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link
                                  href="/specials"
                                  className={`nav-link ${
                                    pathname === "/specials" ? "active" : ""
                                  }`}
                                >
                                  Specials{" "}
                                  <span className="badge badge-primary">
                                    New
                                  </span>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/search-page"
                                  className={`nav-link ${
                                    pathname === "/search-page" ? "active" : ""
                                  }`}
                                >
                                  Search Page
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/terms-conditions"
                              className={`nav-link ${
                                pathname === "/terms-conditions" ? "active" : ""
                              }`}
                            >
                              Terms &amp; Conditions
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/privacy-policy"
                              className={`nav-link ${
                                pathname === "/privacy-policy" ? "active" : ""
                              }`}
                            >
                              Privacy Policy
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/404"
                              className={`nav-link ${
                                pathname === "/404" ? "active" : ""
                              }`}
                            >
                              404 Error Page
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link href="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>
                          Pricing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          className={`nav-link dropdown-toggle ${
                            pathname.includes("/news") ? "active" : ""
                          }`}
                        >
                          News
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/news-grid"
                              className={`nav-link ${
                                pathname === "/news-grid" ? "active" : ""
                              }`}
                            >
                              News Grid
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/news-default"
                              className={`nav-link ${
                                pathname === "/news-default" ? "active" : ""
                              }`}
                            >
                              News Default
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/news-details"
                              className={`nav-link ${
                                pathname === "/news-details" ? "active" : ""
                              }`}
                            >
                              News Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/contact-us" className={`nav-link ${isActive('/contact-us') ? 'active' : ''}`}>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* navbar-option */}
                  <div className="navbar-option">
                    <div className="navbar-option-item">
                      <Link
                        href="/cart"
                        className="shopping-cart navbar-option-icon"
                      >
                        <span>
                          <i className="flaticon-shopping-bags" />
                        </span>
                        <span className="shopping-cart-tooltip">2</span>
                      </Link>
                    </div>
                    <div className="navbar-option-item dropdown">
                      <button
                        className="search navbar-option-icon dropdown-toggle"
                        type="button"
                        id="search2"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="navbar-search-zoom">
                          <i className="flaticon-zoom" />
                        </span>
                        <span className="navbar-search-cancel">
                          <i className="flaticon-cancel" />
                        </span>
                      </button>
                      <div
                        className="navbar-search dropdown-menu"
                        aria-labelledby="search2"
                      >
                        <form>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search..."
                            />
                            <button className="btn">
                              <span>
                                <i className="flaticon-loupe" />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="navbar-option-item">
                      <Link
                        href="/authentication"
                        className="btn btn-gradient text-nowrap"
                      >
                        Login / Register
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* .end navbar */}
      
      </header>
      {/* .end header */}
    </>
  );
};

export default Header;
