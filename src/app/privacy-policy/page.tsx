import type { Metadata } from "next";
import Privacy from "./Privacy";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title: "Privacy Policy | HostingBlue Data Protection & User Privacy",
  description:
    "Read HostingBlue's Privacy Policy to learn how we collect, use, protect, and manage your personal data while using our web hosting services.",
  keywords: [
    "hostingblue privacy policy",
    "web hosting privacy policy",
    "data protection hosting",
    "user data privacy",
    "hostingblue data security",
    "privacy policy hosting services",
    "information security policy",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Privacy />;
}
