"use client";

import Link from "next/link";
import Image from "next/image";
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
                          href="/"
                          className={`nav-link ${
                            isActive("/") ? "active" : ""
                          }`}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          className={`nav-link dropdown-toggle ${
                            pathname?.startsWith("/dedicated-hosting") ||
                            pathname?.startsWith("/shared-hosting") ||
                            pathname?.startsWith("/vps-hosting") ||
                            pathname?.startsWith("/wordpress-hosting") ||
                            pathname?.startsWith("/cloud-hosting") ||
                            pathname?.startsWith("/domain-name")
                              ? "active"
                              : ""
                          }`}
                        >
                          Hosting
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/hosting?category=linux-shared"
                              className={`nav-link ${
                                isActive("/dedicated-hosting") ? "active" : ""
                              }`}
                            >
                              linux shared hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/hosting?category=windows-shared"
                              className={`nav-link ${
                                isActive("/shared-hosting") ? "active" : ""
                              }`}
                            >
                              windows shared hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/hosting?category=linux-reseller"
                              className={`nav-link ${
                                isActive("/vps-hosting") ? "active" : ""
                              }`}
                            >
                              linux reseller hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/hosting?category=windows-reseller"
                              className={`nav-link ${
                                isActive("/wordpress-hosting") ? "active" : ""
                              }`}
                            >
                              windows reseller hosting
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          className={`nav-link dropdown-toggle ${
                            pathname?.startsWith("/dedicated-hosting") ||
                            pathname?.startsWith("/shared-hosting") ||
                            pathname?.startsWith("/vps-hosting") ||
                            pathname?.startsWith("/wordpress-hosting") ||
                            pathname?.startsWith("/cloud-hosting") ||
                            pathname?.startsWith("/domain-name")
                              ? "active"
                              : ""
                          }`}
                        >
                          Cloud
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/cloud?category=hanarad-cloud"
                              className={`nav-link ${
                                isActive("/cloud") ? "active" : ""
                              }`}
                            >
                              Hanarad Cloud VPS Hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/cloud?category=affordable-cloud"
                              className={`nav-link ${
                                isActive("/cloud") ? "active" : ""
                              }`}
                            >
                              Affordable Cloud VPS Hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/cloud?category=premium"
                              className={`nav-link ${
                                isActive("/cloud") ? "active" : ""
                              }`}
                            >
                              Premium
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/cloud?category=dedicated"
                              className={`nav-link ${
                                isActive("/cloud") ? "active" : ""
                              }`}
                            >
                              Dedicated
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          className={`nav-link dropdown-toggle ${
                            pathname?.startsWith("/dedicated-hosting") ||
                            pathname?.startsWith("/shared-hosting") ||
                            pathname?.startsWith("/vps-hosting") ||
                            pathname?.startsWith("/wordpress-hosting") ||
                            pathname?.startsWith("/cloud-hosting") ||
                            pathname?.startsWith("/domain-name")
                              ? "active"
                              : ""
                          }`}
                        >
                          Dedicated Server
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/dedicated?category=linux-dedicated"
                              className={`nav-link ${
                                isActive("/dedicated") ? "active" : ""
                              }`}
                            >
                              Linux Dedicated Server
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/dedicated?category=windows-dedicated"
                              className={`nav-link ${
                                isActive("/dedicated") ? "active" : ""
                              }`}
                            >
                              Windows Dedicated Server
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          className={`nav-link dropdown-toggle ${
                            pathname?.startsWith("/dedicated-hosting") ||
                            pathname?.startsWith("/shared-hosting") ||
                            pathname?.startsWith("/vps-hosting") ||
                            pathname?.startsWith("/wordpress-hosting") ||
                            pathname?.startsWith("/cloud-hosting") ||
                            pathname?.startsWith("/domain-name")
                              ? "active"
                              : ""
                          }`}
                        >
                          Email Hosting
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/email?category=webmail"
                              className={`nav-link ${
                                isActive("/email") ? "active" : ""
                              }`}
                            >
                              Webmail Hosting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/email?category=google-workspace"
                              className={`nav-link ${
                                isActive("/email") ? "active" : ""
                              }`}
                            >
                              Google Workspace
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/email?category=microsoft-office-365"
                              className={`nav-link ${
                                isActive("/email") ? "active" : ""
                              }`}
                            >
                              Microsoft Office 365
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/email?category=zoho"
                              className={`nav-link ${
                                isActive("/email") ? "active" : ""
                              }`}
                            >
                              Zoho Email
                            </Link>
                          </li>

                         
                        </ul>
                        
                      </li>
                       <li className="nav-item">
                            <Link
                              href="#"
                              className={`nav-link dropdown-toggle ${
                                pathname?.startsWith("/dedicated-hosting") ||
                                pathname?.startsWith("/shared-hosting") ||
                                pathname?.startsWith("/vps-hosting") ||
                                pathname?.startsWith("/wordpress-hosting") ||
                                pathname?.startsWith("/cloud-hosting") ||
                                pathname?.startsWith("/domain-name")
                                  ? "active"
                                  : ""
                              }`}
                            >
                              Storage
                            </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link
                                  href="/storage?category=cloud-storage"
                                  className={`nav-link ${
                                    isActive("/storage")
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Cloud Storage
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/storage?category=object-storage"
                                  className={`nav-link ${
                                    isActive("/storage") ? "active" : ""
                                  }`}
                                >
                                  Object Storage
                                </Link>
                              </li>
                            </ul>
                          </li>

                       <li className="nav-item">
                        <Link
                          href="#"
                          className={`nav-link dropdown-toggle ${
                            pathname?.startsWith("/dedicated-hosting") ||
                            pathname?.startsWith("/shared-hosting") ||
                            pathname?.startsWith("/vps-hosting") ||
                            pathname?.startsWith("/wordpress-hosting") ||
                            pathname?.startsWith("/cloud-hosting") ||
                            pathname?.startsWith("/domain-name")
                              ? "active"
                              : ""
                          }`}
                        >
                          Pages
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/about"
                              className={`nav-link ${
                                isActive("/dedicated-hosting") ? "active" : ""
                              }`}
                            >
                              About
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/terms-conditions"
                              className={`nav-link ${
                                isActive("/shared-hosting") ? "active" : ""
                              }`}
                            >
                              Terms and Condition
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/privacy-policy"
                              className={`nav-link ${
                                isActive("/vps-hosting") ? "active" : ""
                              }`}
                            >
                              Privacy Policy
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/contact-us"
                              className={`nav-link ${
                                isActive("/vps-hosting") ? "active" : ""
                              }`}
                            >
                              Contact
                            </Link>
                          </li>
                           <li className="nav-item">
                            <Link
                              href="/faqs"
                              className={`nav-link ${
                                isActive("/vps-hosting") ? "active" : ""
                              }`}
                            >
                              FAQ's
                            </Link>
                          </li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                  {/* navbar-option */}
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
