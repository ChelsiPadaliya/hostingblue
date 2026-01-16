import type { Metadata } from "next";
import Faq from "./Faq";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title: "FAQ | HostingBlue Help Center & Common Hosting Questions",
  description:
    "Find answers to frequently asked questions about HostingBlue services, web hosting plans, billing, technical support, and account management.",
  keywords: [
    "hostingblue faq",
    "web hosting faq",
    "hosting questions and answers",
    "hostingblue help center",
    "common hosting questions",
    "hosting support faq",
    "web hosting help india",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Faq />;
}
