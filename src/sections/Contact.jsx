import toast from "react-hot-toast";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const [hoveredImg, setHoveredImg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    reset();
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/147d0fc1-694d-46a7-8fab-f8baa0d92f2d",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      res.ok && toast.error("Soon, You'll be contacted");
    } catch (err) {
      toast.error("Error sending email");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="mt-48" id="contact">
      <SectionHeading vanguard="CONTACT ME">SEND ME EMAIL</SectionHeading>
      <img
        src="glow.webp"
        alt="Glow"
        className="absolute left-0 translate-x-[-60%] translate-y-[-35%] opacity-70 block lg:hidden -z-10"
      />
      <img
        src="glow.webp"
        alt="Glow"
        className="absolute right-0 translate-x-[60%] translate-y-[-35%] opacity-70 block lg:hidden -z-10"
      />
      {isSubmitting && (
        <div className="h-[4px] w-screen z-40 fixed top-0 loading_bar"></div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col m-auto max-w-fit px-[6vw]">
          <div className="flex gap-7">
            <input
              type="text"
              placeholder="First Name"
              className="input_custom"
              id="first_name"
              {...register("first_name", { required: true })}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input_custom"
              id="last_name"
              {...register("last_name", { required: true })}
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="input_custom mt-11"
            id="email"
            {...register("email", { required: true })}
          />
          <input
            type="text"
            placeholder="Message"
            className="input_custom mt-11"
            id="message"
            {...register("message", { required: true })}
          />
        </div>
        <div className="flex justify-center mt-11 scale-[0.8] 600:scale-[1] ">
          <Button type="secondary">Send Message</Button>
        </div>
      </form>
      <hr className="border-none h-[1px] bg-[#3c3d42] my-[50px] w-16 mx-auto" />
      <div className="flex flex-col items-center gap-7">
        <div className="flex gap-9">
          <a href="https://www.instagram.com/asadsynt/">
            <img
              src={
                hoveredImg === "instagram"
                  ? "instagram-hover.svg"
                  : "instagram.svg"
              }
              alt="Instagram"
              role="button"
              className="opacity-45 hover:opacity-100 icon_hover size-5 600:size-6"
              onMouseOver={() => setHoveredImg("instagram")}
              onMouseLeave={() => setHoveredImg(null)}
            />
          </a>
          <a href="https://dribbble.com/AsadSynt/about">
            <img
              src={
                hoveredImg === "dribble" ? "dribble-hover.svg" : "dribble.svg"
              }
              alt="Dribble"
              role="button"
              className="opacity-45 hover:opacity-100 icon_hover size-5 600:size-6 "
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
              className="opacity-45 hover:opacity-100 icon_hover size-5 600:size-6  "
              onMouseOver={() => setHoveredImg("linkedin")}
              onMouseLeave={() => setHoveredImg(null)}
            />
          </a>
        </div>
        <div className="flex gap-4 text-[#ffffff6e]">
          <p
            className="text-sm 600:text-base"
            role="button"
            onClick={(e) => {
              toast.success("Copied to Clipboard!");
              navigator.clipboard.writeText(e.target.textContent);
            }}
          >
            +92 315 4803448
          </p>
          <span>|</span>
          <p
            className="text-sm 600:text-base"
            role="button"
            onClick={(e) => {
              toast.success("Copied to Clipboard!");
              navigator.clipboard.writeText(e.target.textContent);
            }}
          >
            asadsynt@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
