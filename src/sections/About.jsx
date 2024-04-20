import SectionHeading from "../ui/SectionHeading";

const longPara =
  "Hello, I'm Asad Synt, a dedicated and versatile graphic designer based in Pakistan. With over 6 years of experience, I specialize in creating captivating visual experiences across diverse media. My expertise lies in Adobe Photoshop, Illustrator, XD, and Figma, enabling me to craft exceptional logos, banners, posters, websites, and more. My passion for design drives me to continuously push boundaries and deliver impactful solutions. I take pride in my ability to translate ideas into stunning designs that resonate with audiences. Let's collaborate and bring your creative visions to life together.";

const statsData = [
  {
    number: "200+",
    title: "Assets Designed",
    para: "After 200+ assets designs my skills now are on prime.",
  },
  {
    number: new Date().getFullYear() - 2018 + "+",
    title: "Years of Experience",
    para: "Hard working and learning of 3+ years makes me suitable.",
  },
  {
    number: "100+",
    title: "Happy Clients",
    para: "I make sure to make every client happy and satisfy.",
  },
  {
    number: "24/7",
    title: "Available Everytime",
    para: "I’m always available and ready to work, just hit me up!",
  },
];

function About() {
  return (
    <section className="mx_custom relative mt-[45vw]" id="about">
      <SectionHeading vanguard="ABOUT ME">WHO AM I?</SectionHeading>
      <div className="flex justify-center">
        <img
          src="glow.svg"
          alt="Glow"
          className="absolute left-0 translate-x-[-70%] translate-y-[-50%]"
        />

        <p className="600:text-lg text-base text-center text-paragraph leading-7 max-w-5xl">
          {longPara}
        </p>
      </div>

      {/* STATS GRID  */}
      <div className="relative grid gap-y-16 gap-x-6 lg:gap-x-0 grid-cols-2 lg:grid-cols-15 mt-12">
        {statsData.map((stat, index) => (
          <Stat key={index} {...stat} index={index} />
        ))}
        <img
          src="glow.svg"
          alt="Glow effect"
          className="absolute right-0 translate-x-[70%] translate-y-[-70%]"
        />
      </div>
    </section>
  );
}

function Stat({ number, title, para, index }) {
  return (
    <>
      <div className="flex flex-col items-center lg:col-span-3">
        <h3 className="stat_number">{number}</h3>
        <h4 className="stat_title">{title}</h4>
        <p className="stat_para">{para}</p>
      </div>
      {index + 1 !== statsData.length && <div className="divider-x"></div>}
    </>
  );
}

export default About;
