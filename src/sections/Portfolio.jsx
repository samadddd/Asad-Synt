import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const fakeData = new Array(30)
  .fill(undefined)
  .map(
    (_, index) =>
      `./fakeData/portfolio${index > 14 ? (index = index - 14) : index + 1}.svg`
  );
function Portfolio() {

  return (
    <section className="mt-64" id="portfolio">
      <SectionHeading vanguard="PORTFOLIO">UI/UX DESIGNING</SectionHeading>
      <img
        src="glow.svg"
        alt="Glow Effect"
        className="absolute left-1/2 -translate-x-1/2 translate-y-[-40%] -z-10"
      />
      <div className="lg:overflow-hidden mt-0 md:mt-12 overflow-scroll slider">
        <div className="flex slides">
          {fakeData.map((imageSrc, index) => {
            return (
              <div
                key={index}
                className="lg:min-w-96 lg:ml-12 md:min-w-80 min-w-60 ml-7 ml:mx-10"
              >
                <Link to="/portfolio">
                  <img src={imageSrc} alt={`Portfolio ${index}`} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-16 scale-[0.8] 600:scale-[1] ">
        <Button type="secondary" size="mid">
          Check all UI/UX Designs
        </Button>
      </div>
    </section>
  );
}

export default Portfolio;
