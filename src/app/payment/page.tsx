import type { Metadata } from "next";
import Payment from "./Payment";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title: "Payment Options | Secure & Flexible Payments at HostingBlue",
  description:
    "Explore HostingBlue payment options including UPI, Credit Card, Debit Card, Net Banking, and secure online payment methods for web hosting services.",
  keywords: [
    "hostingblue payment options",
    "hosting payment methods",
    "secure hosting payments",
    "upi payment hosting",
    "credit card hosting payment",
    "debit card hosting payment",
    "net banking hosting payment",
    "online hosting payment india",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Payment />;
}
