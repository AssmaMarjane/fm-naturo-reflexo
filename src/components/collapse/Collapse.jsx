import React, { useState } from "react";
import arrowDown from "../../assets/icons/arrow_down_green.png"; // adapte le chemin selon ton projet
import "../collapse/Collapse.scss";

function Collapse({ title, content, className }) {
  const [toggle, setToggle] = useState(false);
  const arrowClass = toggle ? "toggleActive" : "";
  return (
    <div className={`fm-collapse ${className}`}>
      <div className="collapse-toggle" onClick={() => setToggle(!toggle)}>
        <h2 className="collapse-title">{title}</h2>
        <img src={arrowDown} alt={title} className={"arrow-toggle " + arrowClass} />
      </div>
      {toggle && (
        <div className={"collapse-content"}>
          <p className="collapse-text">{content}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
