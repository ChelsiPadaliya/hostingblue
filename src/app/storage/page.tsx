import type { Metadata } from "next";
import Storage from "./Storage";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title: "Storage Hosting Plans in India | Cloud, Object Storage Hosting",
  description:
    "Choose the best web hosting plans including Cloud, Object Storage Hosting with high performance and 24/7 support.",
  keywords: [
    "storage hosting",
    "cloud storage hosting",
    "object storage hosting",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Storage />;
}
