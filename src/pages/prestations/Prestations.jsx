//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Prestations.scss";

const prestations = [
    {
    nom: "Séance Naturopathie : 1ère consultation",
    duree: "1h",
    prix: "85€",
    description: "Bilan et conseils personnalisés pour votre bien-être.",
  },

  {
    nom: "Séance Naturopathie : suivi",
    duree: "45min",
    prix: "65€",
    description: "Bilan et conseils personnalisés pour votre bien-être.",
  },
  {
    nom: "Séance Réflexologie Main",
    duree: "1h",
    prix: "65€",
    description: "Relaxation et stimulation des points réflexes des mains.",
  },
  {
    nom: "Séance Réflexologie Pied",
    duree: "1h",
    prix: "65€",
    description: "Relaxation et stimulation des points réflexes des pieds.",
  },
  {
    nom: "Séance réflexologie Combo Main & Pied",
    duree: "2h",
    prix: "90€",
    description: "Séance complète pour un bien-être total.",
  },
  {
    nom: "Séance Combo Naturopathie et Réflexologie",
    duree: "2h",
    prix: "110€",
    description: "Bilan et conseils personnalisés pour votre bien-être et Relaxation et stimulation des points réflexes.",
  },
];

function Prestations() {
  const [selected, setSelected] = useState(null);

  const openModal = (index) => setSelected(index);
  const closeModal = () => setSelected(null);

  return (
    <main>
      <div className="presta-container">
        <section className="prestations-section">
          <h1>Mes Prestations</h1>
          <div className="prestations-grid">
            {prestations.map((p, i) => (
              <div key={i} className="prestation-widget" onClick={() => openModal(i)}>
                <h3>{p.nom}</h3>
                <p>
                  {p.duree} | {p.prix}
                </p>
              </div>
            ))}
          </div>

          {selected !== null && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{prestations[selected].nom}</h2>
                <p>
                  <strong>Durée :</strong> {prestations[selected].duree}
                </p>
                <p>
                  <strong>Prix :</strong> {prestations[selected].prix}
                </p>
                <p>{prestations[selected].description}</p>
                <button onClick={closeModal} className="presta-button">Fermer</button>
                <Link to="/contact" className="presta-button" state={{ prestation: prestations[selected].nom }}>
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Prestations;
