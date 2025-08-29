import React, { useState } from "react";
import arrowDown from "../../assets/icons/arrow_down_green.png"; // adapte le chemin selon ton projet
import "../collapse/Collapse.scss";
import '../../style/main.scss';

function Collapse({ title, content, className }) {
  const [toggle, setToggle] = useState(false);
  const arrowClass = toggle ? "toggleActive" : "";
  return (
    <div className={`fm-collapse ${className}`}>
<button
  type="button"
  className="collapse-toggle"
  onClick={() => setToggle(!toggle)}
>
  <h3 className="collapse-title">{title}</h3>
  <img
    src={arrowDown}
    alt={title}
    className={"arrow-toggle " + arrowClass}
  />
</button>
      {toggle && (
        <div className={"collapse-content"}>
          <p className="collapse-text">{content}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
