import { useState, useEffect } from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";


function Banner() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // change toutes les 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">

      <div className={`slide slide-first ${currentImage === 0 ? "active" : ""}`}>
        <div className="overlay ">
          <h2 className="fm-banner">Fm</h2>
          <h3 className="title-banner">Naturopathe x Réflexologue </h3>
          <p className="subtitle-fm">La santé au coeur du bien-être</p>
        </div>
      </div>

      <div className={`slide slide-second ${currentImage === 1 ? "active" : ""}`}>
        <div className="overlay">
          <h2 className="title-banner-second" >Retrouvez votre bien-être naturel</h2>

          <button className="contact-btn">
            <Link to="/contact" className="banner-link">
              Prendre rendez-vous
            </Link>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Banner;

/**
 * 
 * import img1 from "../../assets/images/banner3.jpg";
import img2 from "../../assets/images/arabic-ornament.svg";

 *         <img src={img1} alt="Bannière 1" />
        <img src={img2} alt="Bannière 2" />

 */