import { Link } from "react-router-dom";

function Article({ data }) {
  const { title, sections, cta, classPrefix } = data;

  return (
        <div className={`${classPrefix}-content`}>
          <h1 className={`${classPrefix}-title`}>{title}</h1>

          {sections.map((section, index) => (
            <div key={index}>
              {section.subtitle && <h2 className={`${classPrefix}-subtitle`}>{section.subtitle}</h2>}
              <p className={`${classPrefix}-text`}>{section.paragraph}</p>
            </div>
          ))}

          <div className={`${classPrefix}-cta`}>
            {cta.map((item, index) => (
              <Link key={index} to={item.link} className={`cta-${classPrefix}-button`}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
  );
}

export default Article;
