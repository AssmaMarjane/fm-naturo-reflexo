import "../../style/main.scss";
import "./FormContact.scss";
//import dispoData from "../../data/dispo.json";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import prestations from "../../data/prestations.json";
import { sendContactForm, getDispo } from "../../api/contactApi.js";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function FormContact() {
  const location = useLocation();
  const preselection = location.state?.prestation || ""; // récupère la prestation si on vient de Prestations

  const [dispoState, setDispoState] = useState({});
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    prestation: preselection,
    date: "",
    heure: "",
    message: "",
  });

  console.log(location.state);

  const formatDate = (date) => date.toLocaleDateString("fr-CA");

  // Récupérer les créneaux depuis le backend
  useEffect(() => {
    const fetchDispo = async () => {
      try {
        const data = await getDispo();
        setDispoState(data);
      } catch (err) {
        console.error("Erreur récupération créneaux :", err);
      }
    };
    fetchDispo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);

    try {
      await sendContactForm(formData); // fetch vers backend
      alert("Réservation envoyée !");

      // Mettre à jour les créneaux après réservation
      const newDispo = await getDispo();
      setDispoState(newDispo);

      setFormData({
        nom: "",
        prenom: "",
        telephone: "",
        prestation: "",
        date: "",
        heure: "",
        message: "",
      });
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  // Vérifie si une date a des créneaux dispos
  const hasDispo = (date) => {
    const localDate = formatDate(date); // ✅ en local, pas UTC
    return dispoState[localDate] && dispoState[localDate].length > 0;
  };

  return (
    <section className="contact-form-section">
      <h2 className="form-title">Contact / Réservation</h2>
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

        <div className="input-wrapper">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>

        {/* Nouveau select pour les prestations */}
        <div className="input-wrapper">
          <label htmlFor="prestation">Sélectionnez une prestation</label>
          <select id="prestation" name="prestation" value={formData.prestation} onChange={handleChange}>
            <option value="">Choisir une prestation </option>
            {prestations.map((p, index) => (
              <option key={index} value={p.nom}>
                {p.nom} ({p.duree} | {p.prix})
              </option>
            ))}
          </select>
        </div>

        {/* Disponibilité avec toggle calendrier */}
        <div className="input-wrapper">
          <label>Disponibilité</label>
          <button type="button" className="calendar-toggle" onClick={() => setShowCalendar((prev) => !prev)}>
            {formData.date
              ? `📅 ${new Date(formData.date).toLocaleDateString("fr-FR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}`
              : "Choisir une date"}
          </button>

          {showCalendar && (
            <Calendar
              onClickDay={(date) => {
                setFormData((prev) => ({
                  ...prev,
                  date: formatDate(date),
                  heure: "",
                }));
                setShowCalendar(false); // referme le calendrier après choix
              }}
              tileClassName={({ date }) => (hasDispo(date) ? "dispo-day" : "not-dispo-day")}
              tileDisabled={({ date }) => !hasDispo(date)}
            />
          )}
        </div>

        {/* Créneaux horaires */}
        {formData.date && (
          <div className="input-wrapper">
            <label htmlFor="heure">Créneau horaire</label>
            <select name="heure" value={formData.heure} onChange={handleChange} required>
              <option value="">-- Choisir un créneau --</option>
              {dispoState[formData.date]?.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>
        )}

        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default FormContact;
