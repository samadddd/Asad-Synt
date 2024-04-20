import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

const fakeData = [
  {
    question: "What design services do you offer?",
    answer:
      "I specialize in UI/UX design, logo design, poster design, and more. Feel free to explore my portfolio for a comprehensive view of my work.",
  },
  {
    question: "How do I start a design project with you?",
    answer:
      "Initiating a project is easy. Simply reach out through the contact form, and we can discuss your project requirements, goals, and timelines.",
  },
  {
    question: "What's your design process like?",
    answer:
      "My design process involves understanding your vision, research, ideation, creation, and refinement. I prioritize collaboration and feedback to ensure the final design meets your expectations.",
  },
  {
    question: "How long does it take to complete a design project?",
    answer:
      "Project timelines vary based on complexity and scope. I aim to deliver high-quality designs promptly. We'll discuss timelines during our initial consultation.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes, I work with clients globally, offering remote design services. I communicate regularly via email, video calls, and messaging platforms to keep you updated on progress.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="relative mt-80">
      <SectionHeading vanguard="F.A.Q">FREQ. ASKED QUES.</SectionHeading>
      <img src="glow.svg" alt="Glow" className="absolute left-[-45rem] top-0" />
      <img
        src="glow.svg"
        alt="Glow"
        className="absolute right-[-45rem] top-0"
      />
      <img
        src="glow.svg"
        alt="Glow Effect"
        className="block lg:hidden absolute -z-10 left-1/2 -translate-x-1/2 translate-y-[-40%] opacity-65"
      />
      <div className="flex flex-col gap-6 max-w-5xl mt-5 mx-auto px-[4vw]">
        {fakeData.map((data, index) => (
          <Accordion
            data={data}
            index={index + 1}
            key={index}
            setActiveIndex={setActiveIndex}
            active={activeIndex == index + 1}
          />
        ))}
      </div>
    </section>
  );
}

function Accordion({ data, index, setActiveIndex, active }) {
  const { question, answer } = data;
  return (
    <div
      className={`duration-300 relative py-2.5 px-[15px] 600:py-[15px] lg:px-[25px] backdrop-blur-xl ${!active ? "bg-[#ffffff09]" : "bg-gradient box_shadow"} hover:bg-[#2B2B31] cursor-pointer duration-300 rounded-xl`}
      onClick={() => setActiveIndex((prev) => (prev == index ? null : index))}
    >
      <div>
        <h5
          className={`${!active ? "text-paragraph" : "text-[#0B0C13] font-semibold "} text-sm 600:text-lg line-clamp-1 `}
        >
          {question}
        </h5>
        <p
          className={`${!active && "hidden"} text-[#0B0C13] text-sm 600:text-lg mt-5`}
        >
          {answer}
        </p>
      </div>
      <img
        src="arrow-down.svg"
        alt="Arrow Down"
        className={`absolute top-2 600:top-4 right-4 duration-300 ${active && "rotate-180 brightness-0"}`}
      />
    </div>
  );
}

export default Faq;
