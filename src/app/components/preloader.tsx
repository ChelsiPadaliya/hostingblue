"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Preloader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="preloader blue-gradient">
          <div className="preloader-wrapper">
            <div className="preloader-img">
              <Image
                src="/assets/images/loader.gif"
                alt="preloader"
                width={80}
                height={80}
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
