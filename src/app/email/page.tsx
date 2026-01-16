import type { Metadata } from "next";
import Email from "./Email";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title:
    "Email Hosting Plans in India | Webmail, Google-workspace, Microsoft-office-365, Zoho-email Hosting",
  description:
    "Choose the best Email hosting plans including Webmail, Google-workspace, Microsoft-office-365, Zoho-email Hosting with high performance and 24/7 support.",
  keywords: [
    "email hosting",
    "webmail hosting",
    "google workspace hosting",
    "micro office 365 hosting",
    "zoho email hosting",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Email />;
}
