//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./Widget.scss";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/widget1.png";
import img2 from "../../assets/images/widget2.png";
import img3 from "../../assets/images/widget3.png";

function Widget() {
  return (
    <div className="widget_section">
      <h2 className="section_title">Mes Prestations</h2>
      <div className="widget_content">
                  <Link to="/prestations" className="widget">
            <img src={img3} alt="Widget 3" className="widget_img" />

            <h3 className="widget_title">Bien-être </h3>
            <p className="widget_text">Mes accompagnements pour favoriser votre bien-être</p>
          </Link>

        <Link to="/naturopathie" className="widget">
          <img src={img1} alt="Widget 1" className="widget_img" />
          <h3 className="widget_title">Naturopathie</h3>
          <p className="widget_text">Méthodes naturelles pour amélioré votre santé</p>
        </Link>
        <Link to="/reflexologie" className="widget">
          <img src={img2} alt="Widget 2" className="widget_img" />

          <h3 className="widget_title">Réflexologie</h3>
          <p className="widget_text">Relâchez vos tensions, retrouvez l’équilibre</p>
        </Link>
      </div>
    </div>
  );
}

export default Widget;
