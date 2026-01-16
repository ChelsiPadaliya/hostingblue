import type { Metadata } from "next";
import Hosting from "./Hosting";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title: "Web Hosting Plans in India | Linux, Windows Hosting",
  description:
    "Choose the best web hosting plans including  Linux & Windows Shared, Linux & Windows Reseller Hosting with high performance and 24/7 support.",
  keywords: [
    "web hosting",
    "linux shared hosting",
    "windows shared hosting",
    "linux reseller hosting",
    "windows reseller hosting",
    "windows hosting",
    "linux hosting",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Hosting />;
}
