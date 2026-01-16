import type { Metadata } from "next";
import About from "./About";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title: "About HostingBlue | Affordable & Reliable Web Hosting Company",
  description:
    "Learn more about HostingBlue, a trusted web hosting company providing affordable, secure, and high-performance hosting solutions with 100% uptime guarantee.",
  keywords: [
    "about hostingblue",
    "hostingblue company",
    "web hosting company india",
    "affordable web hosting",
    "hanarad hosting provider",
    "secure hosting services",
    "hostingblue about us",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <About />;
}
