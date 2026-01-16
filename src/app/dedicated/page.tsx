import type { Metadata } from "next";
import Dedicated from "./Dedicated";

/* ================================
   STATIC SEO CONFIG
================================ */
export const metadata: Metadata = {
  title:
    "Dedicated Server Hosting Plans in India | Linux, Windows Dedicated Server Hosting",
  description:
    "Choose the best dedicated server hosting plans including Linux Dedicated Server,Windows Dedicated Server Hosting with high performance and 24/7 support.",
  keywords: [
    "linux dedicated server hosting",
    "windows dedicated server hosting",
    "dedicated server",
    "linux dedicated",
    "windows dedicated",
  ],
};

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  return <Dedicated />;
}
