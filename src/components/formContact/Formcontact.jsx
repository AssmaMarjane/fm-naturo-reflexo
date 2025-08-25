import "../../style/main.scss";
import "./FormContact.scss";
import dispoData from "../../data/dispo.json";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const prestations = [
  { nom: "Séance Naturopathie", duree: "1h", prix: "60€" },
  { nom: "Séance Réflexologie Main", duree: "1h", prix: "50€" },
  { nom: "Séance Réflexologie Pied", duree: "1h", prix: "50€" },
  { nom: "Combo Main & Pied", duree: "2h", prix: "90€" },
  { nom: "Séance Combo Naturopathie et Réflexologie", duree: "2h", prix: "90€" },
];

function FormContact() {
  const location = useLocation();
  const preselection = location.state?.prestation || ""; // récupère la prestation si on vient de Prestations
  const [dispoState, setDispoState] = useState(dispoData);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    prestation: preselection,
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);

 if (formData.prestation && formData.date && formData.heure) {
    // Retirer le créneau réservé
    setDispoState((prev) => ({
      ...prev,
      [formData.date]: prev[formData.date].filter((h) => h !== formData.heure),
    }));
  }

    // Ici tu peux envoyer les données vers ton backend ou API
    alert("Formulaire envoyé !");
    setFormData({
      nom: "",
      prenom: "",
      telephone: "",
      prestation: "",
      date: "",
      heure: "",
      message: "",
    });
  };

  return (
    <section className="contact-form-section">
      <h1>Contact / Réservation</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="telephone">Numéro de portable</label>
          <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </div>

        {/* Nouveau select pour les prestations */}
        <div className="input-wrapper">
          <label htmlFor="prestation">Sélectionnez une prestation</label>
          <select id="prestation" name="prestation" value={formData.prestation} onChange={handleChange}>
            <option value="">-- Choisissez une prestation --</option>
            {prestations.map((p, index) => (
              <option key={index} value={p.nom}>
                {p.nom} ({p.duree} | {p.prix})
              </option>
            ))}
          </select>
        </div>

        <div className="input-wrapper">
          <label htmlFor="disponibilite">Disponibilité</label>
          {/* Sélection date et heure */}
          <select name="date" value={formData.date} onChange={handleChange} required={!!formData.prestation}>
            <option value="">-- Choisir une date --</option>
            {Object.keys(dispoState).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {formData.date && (
            <select name="heure" value={formData.heure} onChange={handleChange} required={!!formData.prestation}>
              <option value="">-- Choisir un créneau --</option>
              {dispoState[formData.date]?.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          )}{" "}
        </div>

        <div className="input-wrapper">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default FormContact;
