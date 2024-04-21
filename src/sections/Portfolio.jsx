import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

const fakeData = new Array(20)
  .fill(undefined)
  .map(
    (_, index) =>
      `./fakeData/${index >= 10 ? (index = index - 9) : index + 1}-thumb.webp`
  );
function Portfolio() {
  return (
    <>
      {/* <Modal /> */}
      <section className="mt-64" id="portfolio">
        <SectionHeading vanguard="PORTFOLIO">UI/UX DESIGNING</SectionHeading>
        <img
          src="glow.webp"
          alt="Glow Effect"
          className="absolute left-1/2 -translate-x-1/2 translate-y-[-40%] -z-10"
        />
        <div className="lg:overflow-hidden mt-0 md:mt-12 overflow-scroll slider">
          <div className="flex overflow-x-scroll">
            {fakeData.map((imageSrc, index) => {
              return (
                <div
                  key={index}
                  className="lg:min-w-96 lg:ml-12 md:min-w-80 min-w-60 ml-7 ml:mx-10"
                >
                  <Link to="/portfolio">
                    <img
                      src={imageSrc}
                      alt={`Portfolio ${index}`}
                      loading="lazy"
                      className="rounded-lg"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <Link
          to="/portfolio"
          className="flex justify-center mt-16 scale-[0.8] 600:scale-[1] "
        >
          <Button type="secondary" size="mid">
            Check all UI/UX Designs
          </Button>
        </Link>
      </section>
    </>
  );
}

export default Portfolio;
