import { lazy, useState } from "react";

const Hero = lazy(() => import("../sections/Hero"));
const Navbar = lazy(() => import("../ui/Navbar"));
const Menu = lazy(() => import("../ui/Menu"));
const About = lazy(() => import("../sections/About"));
const Portfolio = lazy(() => import("../sections/Portfolio"));
const Testimonials = lazy(() => import("../sections/Testimonials"));
const Faq = lazy(() => import("../sections/Faq"));
const Contact = lazy(() => import("../sections/Contact"));
const Footer = lazy(() => import("../sections/Footer"));

function LandinPage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
      <Navbar setShowMenu={setShowMenu} />
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
