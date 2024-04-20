import { Link } from "react-router-dom";

function Menu({ setShowMenu }) {
  function scroller(id) {
    setShowMenu(false);
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className=" bg-[#0b0c13] z-40 fixed inset-0">
      <img
        src="glow.svg"
        alt="Glow"
        className="absolute -translate-y-2/3 opacity-45 -z-10"
      />
      <img
        src="glow.svg"
        alt="Glow"
        className="absolute opacity-45 bottom-0 translate-y-2/3 -z-10"
      />
      <img
        src="exit.svg"
        alt="Exit"
        className="absolute right-8 top-8"
        role="button"
        onClick={() => setShowMenu(false)}
      />
      <ul className=" z-50 flex flex-col gap-6 ml-5 h-full justify-center ">
        <Link className="menu_link" to="/" onClick={() => setShowMenu(false)}>
          HOME
        </Link>
        <li className="menu_link" onClick={() => scroller("about")}>
          ABOUT ME
        </li>
        <Link className="menu_link" onClick={() => scroller("portfolio")}>
          PORTFOLIO
        </Link>
        <li className="menu_link" onClick={() => scroller("contact")}>
          CONTACT ME
        </li>
      </ul>
    </div>
  );
}

export default Menu;
