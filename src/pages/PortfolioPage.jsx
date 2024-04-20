import Navbar from "../ui/Navbar";
import SectionHeading from "../ui/SectionHeading";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function PortfolioPage() {
  const fakeData = new Array(30)
    .fill(undefined)
    .map(
      (_, index) =>
        `./fakeData/portfolio${index > 14 ? (index = index - 14) : index + 1}.svg`
    );
  return (
    <>
      <Navbar />
      <SectionHeading vanguard="PORTFOLIO">UI/UX DESIGNING</SectionHeading>
      <img
        src="glow.svg"
        alt="Glow"
        className="absolute left-0 translate-x-[-60%] translate-y-[-35%] opacity-70 "
      />
      <img
        src="glow.svg"
        alt="Glow"
        className="absolute right-0 translate-x-[60%] translate-y-[-35%] opacity-70 "
      />
      <hr className="border-none h-[1px] bg-[#3c3d42] my-14 mx_custom" />
      <div className="grid grid-cols-2 lg:grid-cols-3 mx_custom gap-[3vw] relative">
        <img
          src="glow.svg"
          alt="Glow Center"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        />
        {fakeData.map((imgSrc, index) => (
          <div key={index}>
            <img
              src={imgSrc}
              alt={`Portfolio ${index}`}
              role="button"
              className="w-full"
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
