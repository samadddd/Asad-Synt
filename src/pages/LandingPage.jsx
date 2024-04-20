import About from "../sections/About";
import Faq from "../sections/Faq";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import Navbar from "../ui/Navbar";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

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
