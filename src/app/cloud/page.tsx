import type { Metadata } from "next";
import Cloud from "./Cloud";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title: "Cloud Hosting Plans in India | VPS, Premium, Dedicated Hosting",
  description:
    "Choose the best cloud hosting plans including Cloud Hosting, VPS Hosting, Premium Hosting with high performance and 24/7 support.",
  keywords: [
    "cloud hosting",
    "hanarad cloud vps hosting",
    "affordable cloud vps hosting",
    "premium hosting",
    "premium",
    "dedicated hosting",
    "dedocated",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Cloud />;
}
