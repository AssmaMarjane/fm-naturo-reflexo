//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Prestations.scss";
import prestations from "../../data/prestations.json";

function Prestations() {
  const [selected, setSelected] = useState(null);

  const openModal = (index) => setSelected(index);
  const closeModal = () => setSelected(null);

  return (
    <main>
      <div className="presta-container">
        <section className="prestations-section">
          <h2 className="prestations-title">Mes Prestations</h2>
          <div className="prestations-grid">
            {prestations.map((p, i) => (
              <button key={i} type="button" className="prestation-widget" onClick={() => openModal(i)}>
                <h3 className="widget-title">{p.nom}</h3>
                <p className="widget-text">
                  {p.duree} | {p.prix}
                </p>
              </button>
            ))}
          </div>

          {selected !== null && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3 className="modal-title">{prestations[selected].nom}</h3>
                <p className="modal-text">
                  <strong>Durée :</strong> {prestations[selected].duree}
                </p>
                <p className="modal-text">
                  <strong>Prix :</strong> {prestations[selected].prix}
                </p>
                <p className="modal-text">{prestations[selected].description}</p>
                <button onClick={closeModal} className="presta-button">
                  Fermer
                </button>
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
