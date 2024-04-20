import { useState } from "react";

function Button({ children, type = "primary", size, onClick }) {
  const [btnType, setBtnType] = useState(type);
  return (
    <>
      <button
        onMouseEnter={() => setBtnType("primary")}
        onMouseLeave={() => setBtnType(type)}
        onClick={onClick}
        style={
          size === "mid" ? { paddingRight: "2rem", paddingLeft: "2rem" } : {}
        }
        className={btnType === "secondary" ? "btn_secondary" : "btn_primary"}
      >
        <span
          className={
            btnType === "secondary"
              ? "btn_secondary_label"
              : "btn_primary_label"
          }
        >
          {children}
        </span>
      </button>
    </>
  );
}

export default Button;
