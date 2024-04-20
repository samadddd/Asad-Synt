import { lazy } from "react";

import Hero from "../sections/Hero";
import Navbar from "../ui/Navbar";
const About = lazy(() => import("../sections/About"));
const Portfolio = lazy(() => import("../sections/Portfolio"));
const Testimonials = lazy(() => import("../sections/Testimonials"));
const Faq = lazy(() => import("../sections/Faq"));
const Contact = lazy(() => import("../sections/Contact"));
const Footer = lazy(() => import("../sections/Footer"));

function LandinPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default LandinPage;
