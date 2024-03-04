import styles from "./Main.module.css";

import leftArr from "../assets/images/left-arr-hover.svg";
import rightArrImg from "../assets/images/right-arr.svg";
import rightArrHover from "../assets/images/right-arr-hover.svg";
import Asad from "../assets/images/asad.svg";
import CheckGlow from "../assets/images/check-glow.svg";
import Insta from "../assets/images/insta.svg";
import Behance from "../assets/images/behance.svg";
import Dribble from "../assets/images/dribble.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import InstaGlow from "../assets/images/insta-glow.svg";
import BehanceGlow from "../assets/images/behance-glow.svg";
import DribbleGlow from "../assets/images/dribble-glow.svg";
import LinkedInGlow from "../assets/images/linkedin-glow.svg";
import { useReducer, useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  console.log(count);
  const reducer = function (state, action) {
    switch (action.type) {
      case "insta":
        return { ...state, insta: action.payload };
      case "behance":
        return { ...state, behance: action.payload };
      case "dribble":
        return { ...state, dribble: action.payload };
      case "linkedin":
        return { ...state, linkedin: action.payload };
      case "right-arr":
        return {
          ...state,
          rightArr: action.payload,
        };
      default:
        throw new Error("Unknown action");
    }
  };

  const initialState = {
    insta: false,
    behance: false,
    dribble: false,
    linkedin: false,
    rightArr: false,
  };
  const [{ insta, behance, dribble, linkedin, rightArr }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.mainHeadings}>
          <h1 className={styles.h1}>UI UX DESIGNER</h1>
          <h2 className={styles.h2}>HI, MY NAME IS</h2>
        </div>
        <div className={styles.name}>ASAD SYNT</div>
        <div className={styles.buttonsContainer}>
          <div className={styles.links}>
            <a href="https://www.instagram.com/asadsynt/">
              <img
                className={styles.link}
                onMouseEnter={() => dispatch({ type: "insta", payload: true })}
                onMouseLeave={() => dispatch({ type: "insta", payload: false })}
                src={insta ? InstaGlow : Insta}
                alt="Instagram"
              />
            </a>
            <a href="https://www.behance.net/asadsynt">
              <img
                className={styles.link}
                onMouseEnter={() =>
                  dispatch({ type: "behance", payload: true })
                }
                onMouseLeave={() =>
                  dispatch({ type: "behance", payload: false })
                }
                src={behance ? BehanceGlow : Behance}
                alt="Behance"
              />
            </a>
            <a href="https://dribbble.com/AsadSynt">
              <img
                className={styles.link}
                onMouseEnter={() =>
                  dispatch({ type: "dribble", payload: true })
                }
                onMouseLeave={() =>
                  dispatch({ type: "dribble", payload: false })
                }
                src={dribble ? DribbleGlow : Dribble}
                alt="Dribble"
              />
            </a>
            <a href="https://pk.linkedin.com/in/asadsynt">
              <img
                className={styles.link}
                onMouseEnter={() =>
                  dispatch({ type: "linkedin", payload: true })
                }
                onMouseLeave={() =>
                  dispatch({ type: "linkedin", payload: false })
                }
                src={linkedin ? LinkedInGlow : LinkedIn}
                alt="Linked In"
              />
            </a>
          </div>
          <button className={styles.mainBtn}>
            <img src={leftArr} alt="Left Arrow" />
            View Portfolio
          </button>
          <img src={Asad} className={styles.asad} alt="Asad" />
          <img src={CheckGlow} className={styles.checkGlow} alt="Effects" />
          <button
            onClick={() => setCount((count) => count + 1)}
            onMouseEnter={() => dispatch({ type: "right-arr", payload: true })}
            onMouseLeave={() => dispatch({ type: "right-arr", payload: false })}
            className="secondaryBtn"
          >
            <p>Get in touch</p>

            <img
              className="arrImg"
              src={rightArr ? rightArrHover : rightArrImg}
              alt="Right Arrow"
            />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
