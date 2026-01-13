import Choose from "./choose";
import Features from "./features";
import Client from "./client";
import LogoSection from "./logoSection";
import Testimonial from "./tesimonial";
import HomeHero from "./HomeHero";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Choose />
      <Features />
      <Client />
      <LogoSection />
      <Testimonial />
    </>
  );
};

export default HomePage;
