import "../../style/main.scss";
import "./FormContact.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import prestations from "../../data/prestations.json";
import { sendContactForm, sendRdvForm, getDispo } from "../../api/contactApi.js";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { validateName, validatePrenom, validateTelephone, formatName } from "../../utils/models/formRules.js";

function FormContact() {
  const location = useLocation();
  const preselection = location.state?.prestation || ""; // récupère la prestation si on vient de Prestations

  const [dispoState, setDispoState] = useState({});
  const [showCalendar, setShowCalendar] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

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
  const toLocalIso = (date) => {
    if (!(date instanceof Date)) return null; // sécurité
    return date.toLocaleDateString("en-CA"); // YYYY-MM-DD
  };

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
    // Validation
    if (!validateName(formData.nom)) {
      alert("Nom invalide (doit commencer par une majuscule et contenir seulement lettres et tirets).");
      return;
    }
    if (!validatePrenom(formData.prenom)) {
      alert("Prénom invalide (doit commencer par une majuscule et contenir seulement lettres et tirets).");
      return;
    }
    if (!validateTelephone(formData.telephone)) {
      alert("Téléphone invalide (doit contenir 10 chiffres).");
      return;
    }

    // Si case cochée → il faut aussi valider la réservation
    if (isBooking) {
      if (!formData.prestation) {
        alert("Veuillez choisir une prestation.");
        return;
      }
      if (!formData.date) {
        alert("Veuillez choisir une date.");
        return;
      }
      if (!formData.heure) {
        alert("Veuillez choisir un créneau horaire.");
        return;
      }
    }

    // Formater nom et prénom
    let formattedData = {
      ...formData,
      nom: formatName(formData.nom),
      prenom: formatName(formData.prenom),
    };

    // 🔹 Si ce n’est pas une réservation → on ajoute date/heure actuelles
    if (!isBooking) {
      const now = new Date();
      formattedData = {
        ...formattedData,
        date: now.toLocaleDateString("fr-FR"), // format "29/09/2025"
        heure: now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }), // format "14:32"
      };
    }

    console.log("Données du formulaire :", formattedData);

    try {
      if (isBooking) {
        // → RDV
        await sendRdvForm(formattedData);
        alert("Votre rendez-vous a été réservé !");
      } else {
        // → Contact simple
        await sendContactForm(formattedData);
        alert("Votre message a été envoyé !");
      }

      // Mise à jour des dispos si RDV
      if (isBooking) {
        const newDispo = await getDispo();
        setDispoState(newDispo);
      }

      setFormData({
        nom: "",
        prenom: "",
        telephone: "",
        prestation: preselection || "",
        date: "",
        heure: "",
        message: "",
      });
      setIsBooking(false);
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  // Vérifie si une date a des créneaux dispos
  const hasDispo = (date) => {
    return dispoState[toLocalIso(date)]?.length > 0;
  };

  return (
    <section className="contact-form-section">
      <h2 className="form-title">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="prenom" className="form-label">
            Prénom
          </label>
          <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="telephone" className="form-label">
            Numéro de portable
          </label>
          <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <div className="input-wrapper">
          <label>
            <input type="checkbox" checked={isBooking} onChange={(e) => setIsBooking(e.target.checked)} className="form-label" />
            Réserver un RDV
          </label>
        </div>

        {isBooking && (
          <>
            {/*  select pour les prestations */}
            <div className="input-wrapper">
              <label htmlFor="prestation">Sélectionnez une prestation</label>
              <select
                className="presta-select"
                id="prestation"
                name="prestation"
                value={formData.prestation}
                onChange={handleChange}
                required={isBooking}
              >
                <option className="presta-option" value="">
                  Choisir une prestation{" "}
                </option>
                {prestations.map((p, index) => (
                  <option className="presta-option" key={index} value={p.nom}>
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
                  ? `📅 ${new Date(formData.date + "T00:00:00").toLocaleDateString("fr-FR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}`
                  : "Choisir une date"}
              </button>

              {showCalendar && (
                <Calendar
                  view="month"
                  maxDetail="year"
                  minDetail="month"
                  onClickDay={(date) => {
                    setFormData((prev) => ({
                      ...prev,
                      date: toLocalIso(date),
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
          </>
        )}
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default FormContact;
