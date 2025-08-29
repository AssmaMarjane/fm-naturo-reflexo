import { Link } from "react-router-dom";
import "./Presentation.scss";

function Presentation({ data }) {
      const { title, sections, cta, classPrefix } = data;

  return (
    <section className={`presentation ${classPrefix}`}>
      <h2 className="presentation-title">{title}</h2>

      {sections.map((sec, index) => (
        <div key={index} className={`presentation-section ${index % 2 === 0 ? "left" : "right"}`}>
          <div className="text">
            <h3 className="presentation-subtitle">{sec.subtitle}</h3>
            <p className="presentation-text">{sec.paragraph}</p>
          </div>
          {sec.image && (
            <div className="image-container">
              <img src={sec.image} alt={sec.subtitle} />
            </div>
          )}
        </div>
      ))}

          <div className={`${classPrefix}-cta`}>
            {cta.map((item, index) => (
              <Link key={index} to={item.link} className={`cta-${classPrefix}-button`}>
                {item.text}
              </Link>
            ))}
          </div>
    </section>
  );
}

export default Presentation;
