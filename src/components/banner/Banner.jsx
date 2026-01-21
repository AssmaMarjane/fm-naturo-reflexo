import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";

const words = [
  { text: "Fatigue", className: "top-left" },
  { text: "Douleurs dorsales", className: "top-right" },
  { text: "Migraine", className: "left-center" },
  { text: "Alimentation", className: "right-center" },
  { text: "Rééquilibrage hormonal", className: "bottom-center" },
];

function Banner() {
  const [visibleWords, setVisibleWords] = useState(0);
  const [step, setStep] = useState(1);

  // apparition des mots
  useEffect(() => {
    if (step !== 1) return;

    if (visibleWords < words.length) {
      const timer = setTimeout(() => {
        setVisibleWords((v) => v + 1);
      }, 1800); // rythme doux

      return () => clearTimeout(timer);
    } else {
      // quand tous les mots sont visibles → étape 2
      const timer = setTimeout(() => setStep(2), 2000);
      return () => clearTimeout(timer);
    }
  }, [visibleWords, step]);

  // passage à l'étape finale
  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 4500); // temps de lecture phrase
      return () => clearTimeout(timer);
    }
  }, [step]);

  // boucle complète : retour au début après le final
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setVisibleWords(0);
        setStep(1);
      }, 7000); // 7 secondes sur le message final

      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className={`banner cinema step-${step}`}>
      <div className="overlay">
        {/* MOTS */}
        {(step === 1 || step === 2) && (
          <div className={`words ${step === 3 ? "fade-out" : ""}`}>
            {words.slice(0, visibleWords).map((word, i) => (
              <span key={i} className={`word ${word.className}`}>
                {word.text}
              </span>
            ))}
          </div>
        )}

        {/* PHRASE */}
        {step === 2 && <p className="sentence">Je vous accompagne pour retrouver votre équilibre naturel !</p>}

        {/* FINAL */}
        {step === 3 && (
          <div className="final-block">
            <h2 className="fm-banner glow">Fm</h2>

            <h3 className="title-banner">Naturopathe x Réflexologue </h3>
            <p className="subtitle-fm">La santé au coeur du bien-être</p>
              <Link to="/contact" className="contact-btn">
                Prendre rendez-vous
              </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;

/** 
const words = [
  "Douleurs dorsales",
  "Rééquilibrage hormonal",
  "Fatigue",
  "Alimentation",
  "Migraine",
];

function Banner() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delay = step < words.length ? 2600 : 4000;

    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="banner cinema">
      <div className="overlay">

        
        {step < words.length && (
          <h2 key={step} className="cinema-text">
            {words[step]}
          </h2>
        )}

        
        {step === words.length && (
          <p className="cinema-text sentence">
            Naturopathe & Réflexologue, je vous accompagne pour retrouver votre équilibre naturel
          </p>
        )}

     
        {step > words.length && (
          <div className="final-block">
            <h2 className="fm-banner glow">
              FM Naturopathe Réflexologie
            </h2>

            <Link to="/contact" className="contact-btn">
              Prendre rendez-vous
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

export default Banner;
**/
/**
 * 
 * import img1 from "../../assets/images/banner3.jpg";
import img2 from "../../assets/images/arabic-ornament.svg";

 *         <img src={img1} alt="Bannière 1" />
        <img src={img2} alt="Bannière 2" />

 */

/**
         *     <div className="banner">

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

         */
