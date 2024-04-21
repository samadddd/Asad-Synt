import { useState } from "react";
import Button from "../ui/Button";
function Hero() {
  const [hoveredImg, setHoveredImg] = useState(null);
  function scroller(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header>
      {/* MAIN HEADING */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-vanguard leading-[1] stroke text-[15vw] text-transparent">
          UI UX DESIGNER
        </h1>

        <h2 className="absolute bg-clip-text bg-gradient font-monument text-[1.7vw] tracking-[1vw] translate-y-1/2 text-transparent text_shadow_custom">
          HI, MY NAME IS
        </h2>
      </div>
      {/* ASAD SYNT HEADING */}
      <h1 className="asad_synt font-vanguard leading-[1] text-[12.5vw] text-center text-white">
        ASAD SYNT
      </h1>

      {/* ICONS MAIN IMAGE AND BUTTONS   */}
      <div className="mt-0 md:mt-8">
        {/* ICONS */}
        <div className="absolute hidden md:flex flex-col gap-[35px] -translate-y-1/2 ml_custom">
          <a href="https://www.instagram.com/asadsynt/">
            <img
              src={
                hoveredImg === "instagram"
                  ? "instagram-hover.svg"
                  : "instagram.svg"
              }
              alt="Instagram"
              role="button"
              className="opacity-45 hover:opacity-100 icon_hover"
              onMouseOver={() => setHoveredImg("instagram")}
              onMouseLeave={() => setHoveredImg(null)}
            />
          </a>
          <a href="https://dribbble.com/AsadSynt/">
            <img
              src={
                hoveredImg === "dribble" ? "dribble-hover.svg" : "dribble.svg"
              }
              alt="Dribble"
              role="button"
              className="opacity-45 hover:opacity-100 icon_hover "
              onMouseOver={() => setHoveredImg("dribble")}
              onMouseLeave={() => setHoveredImg(null)}
            />
          </a>
          <a href="https://pk.linkedin.com/in/asadsynt">
            <img
              src={
                hoveredImg === "linkedin"
                  ? "linkedin-hover.svg"
                  : "linkedin.svg"
              }
              alt="Linked In"
              role="button"
              className="opacity-45 hover:opacity-100 icon_hover  "
              onMouseOver={() => setHoveredImg("linkedin")}
              onMouseLeave={() => setHoveredImg(null)}
            />
          </a>
        </div>

        <div className="flex justify-around">
          <div className="scale-[0.5] 600:scale-[0.6] md:scale-[0.8] lg:scale-[1] z-10">
            <Button type="secondary" onClick={() => scroller("portfolio")}>
              View Portfolio
            </Button>
          </div>
          <img
            src="asad.webp"
            alt="Asad Synt"
            className="absolute translate-y-[-34%] w-[58vw]"
            loading="eager"
          />
          <img
            src="glow.webp"
            alt="Glow"
            className="absolute -translate-y-1/2 -z-10"
            loading="eager"
          />
          <div className="scale-[0.5] 600:scale-[0.6] md:scale-[0.8] lg:scale-[1] z-10">
            <Button type="secondary" onClick={() => scroller("contact")}>
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
