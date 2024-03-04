import Logo from "../assets/images/logo.svg";
import DownArr from "../assets/images/down-arr.svg";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        <img src={Logo} alt="Asad Synt" />
      </div>

      <ul className={styles.ul}>
        <li className={styles.active}>Home</li>
        <li className={styles.li}>About me</li>
        <li className={styles.li}>
          Portfolio
          <span className={styles.span}>
            <img src={DownArr} alt="Angle Down" />
          </span>
        </li>
        <li className={styles.li}>Contact me</li>
        <li className={styles.li}>
          <button className={styles.button}>Hire me</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
