"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import the carousel component with no SSR (to avoid window/jQuery errors)
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// Import styles (adjust path if needed, or use CDN in _document.js if preferred)
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const LogoSection = () => {
  // Optional: Use useEffect to confirm initialization if needed
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Any additional custom init can go here
    }
  }, []);

  const carouselOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 2, margin: 10 },
      480: { items: 3, margin: 15 },
      768: { items: 4, margin: 20 },
      1024: { items: 5, margin: 20 },
    },
  };

  return (
    <>
      {/* logo-section */}
      <div className="logo-section bg-off-white p-tb-50">
        <div className="container">
          <OwlCarousel
            className="logo-slider owl-carousel owl-theme"
            {...carouselOptions}
          >
            <div className="item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
              <Image
                src="/assets/images/ubuntu.png"
                alt="logo"
                width={120}
                height={60}
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
            <div className="item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
              <Image
                src="/assets/images/fedora1.png"
                alt="logo"
                width={120}
                height={60}
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
            <div className="item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
              <Image
                src="/assets/images/debian.png"
                alt="logo"
                width={120}
                height={60}
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
            <div className="item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
              <Image
                src="/assets/images/centos.png"
                alt="logo"
                width={120}
                height={60}
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
            <div className="item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
              <Image
                src="/assets/images/rocky_linux.png"
                alt="logo"
                width={120}
                height={60}
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
            <div className="item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
              <Image
                src="/assets/images/almalinux.png"
                alt="logo"
                width={120}
                height={60}
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
            <div className="item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
              <Image
                src="/assets/images/windows1.png"
                alt="logo"
                width={120}
                height={60}
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* .end logo-section */}
    </>
  );
};

export default LogoSection;
