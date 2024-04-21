import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar({ setShowMenu }) {
  function scroller(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <nav className="mx_custom my-[30px] flex justify-between ">
      <div className="flex items-center">
        <img src="logo.webp" alt="Logo" className="w-[10vw]" />
      </div>
      <img
        src="hamburger.svg"
        alt="Menu"
        className="block lg:hidden w-[3vw]"
        role="button"
        onClick={() => setShowMenu(true)}
      />
      <div className="hidden lg:flex gap-16">
        <ul className="flex items-center gap-10 text-paragraph">
          <NavLink to="/" className="hover_li">
            Home
          </NavLink>
          <li className="hover_li" onClick={() => scroller("about")}>
            About me
          </li>
          <NavLink to="/portfolio" className="hover_li">
            Portfolio
          </NavLink>
          <li className="hover_li" onClick={() => scroller("contact")}>
            Contact me
          </li>
        </ul>
        <Button onClick={() => scroller("contact")}>Hire me</Button>
      </div>
    </nav>
  );
}

export default Navbar;
