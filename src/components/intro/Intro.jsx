//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./Intro.scss";
import img1 from "../../assets/images/plante1.png";
import img2 from "../../assets/images/plante2.png";
import img3 from "../../assets/images/plante3.png";
import img4 from "../../assets/images/plante4.png";
import img5 from "../../assets/images/plante1.5.png";

function Intro() {
  return (
    <div className="intro_section">
      <div className="decor-section">
        <p className="decor-title">Découvrez mes méthodes naturelles pour retrouver vitalité et harmonie.</p>

        <img src={img1} alt="leaf" className="leaf leaf1" />
        <img src={img2} alt="leaf" className="leaf leaf2" />
        <img src={img3} alt="leaf" className="leaf leaf3" />
        <img src={img4} alt="leaf" className="leaf leaf4" />
        <img src={img5} alt="leaf" className="leaf leaf5" />
      </div>
    </div>
  );
}

export default Intro;
