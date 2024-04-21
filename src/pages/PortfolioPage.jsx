import Navbar from "../ui/Navbar";
import SectionHeading from "../ui/SectionHeading";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function PortfolioPage() {
  const fakeData = new Array(20)
    .fill(undefined)
    .map(
      (_, index) =>
        `./fakeData/${index >= 10 ? (index = index - 9) : index + 1}-thumb.webp`
    );
  return (
    <>
      <Navbar />
      <SectionHeading vanguard="PORTFOLIO">UI/UX DESIGNING</SectionHeading>
      <img
        src="glow.webp"
        alt="Glow"
        className="absolute left-0 translate-x-[-60%] translate-y-[-35%] opacity-70 -z-10 "
      />
      <img
        src="glow.webp"
        alt="Glow"
        className="absolute right-0 translate-x-[60%] translate-y-[-35%] opacity-70  -z-10"
      />
      <hr className="border-none h-[1px] bg-[#3c3d42] my-14 mx_custom" />
      <div className="grid grid-cols-2 lg:grid-cols-3 mx_custom gap-[3vw] relative">
        <img
          src="glow.webp"
          alt="Glow Center"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        />
        {fakeData.map((imgSrc, index) => (
          <div key={index}>
            <img
              src={imgSrc}
              alt={`Portfolio ${index}`}
              role="button"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default PortfolioPage;
