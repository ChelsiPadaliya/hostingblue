import type { Metadata } from "next";
import Terms from "./Terms";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title: "Terms and Conditions | HostingBlue Service Agreement",
  description:
    "Read HostingBlue's Terms and Conditions to understand our service policies, user responsibilities, hosting usage rules, payments, and legal agreements.",
  keywords: [
    "hostingblue terms and conditions",
    "hosting terms of service",
    "web hosting terms",
    "hostingblue service agreement",
    "hosting usage policy",
    "hosting legal terms",
    "terms of service hosting",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Terms />;
}
