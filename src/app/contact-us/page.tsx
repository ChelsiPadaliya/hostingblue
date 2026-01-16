import type { Metadata } from "next";
import Contact from "./Contact";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title: "Contact HostingBlue | Get Support, Sales & Hosting Assistance",
  description:
    "Contact HostingBlue for sales inquiries, technical support, or hosting assistance. Reach our expert team for reliable and fast web hosting support.",
  keywords: [
    "contact hostingblue",
    "hostingblue contact details",
    "web hosting support india",
    "hosting technical support",
    "hosting customer service",
    "contact hosting provider",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Contact />;
}
