export const API_CONTACT = import.meta.env.VITE_API_URL;
export const API_DISPO = import.meta.env.VITE_API_DISPO_URL;
export const API_ADMIN = import.meta.env.VITE_API_ADMIN_URL;

// Récupérer les dispo
export const getDispo = async () => {
  try {
    const res = await fetch(API_DISPO);
    if (!res.ok) throw new Error("Erreur récupération créneaux");
    return res.json();
  } catch (err) {
    console.error("Erreur récupération créneaux :", err);
    return {};
  }
};

// Envoyer le formulaire contact
export const sendContactForm = async (formData) => {
  try {
    const res = await fetch(API_CONTACT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.error("Erreur envoi formulaire :", err);
    throw err;
  }
};

// Ajouter un créneau côté admin

export const addCreneauAdmin = async (date, heure, password) => {
  const res = await fetch(API_ADMIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, heure, password }),
  });
  if (!res.ok) throw new Error("Erreur lors de l'ajout du créneau");
  return res.json();
};
