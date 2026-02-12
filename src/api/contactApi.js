//front/contactapi

import { API_CONTACT , API_CONTACT_GET , API_CONTACT_POST } from "./config.js";

// Envoyer le formulaire simple (sans RDV)
export const sendContactForm = async (formData) => {
  try {
    const res = await fetch(`${API_CONTACT_POST}/simple`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),

    });
    return res.json();
  } catch (err) {
    console.error("Erreur envoi formulaire simple :", err);
    throw err;
  }
};

// Envoyer le formulaire contact
export const sendRdvForm = async (formData) => {
  try {
    const res = await fetch(API_CONTACT_POST, {
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

// Récupérer les messages de contact
export const getContacts = async () => {
  try {
    const res = await fetch( API_CONTACT_GET, { credentials: "include" });
    if (!res.ok) throw new Error("Erreur récupération contacts");
    return res.json();
  } catch (err) {
    console.error("Erreur récupération contacts :", err);
    return [];
  }
};

// Supprimer un contact
export const deleteContact = async (id) => {
  const res = await fetch(`${API_CONTACT}/admin/delete/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Erreur suppression contact");
  return res.json();
};


// Marquer un contact comme lu
export const markContactAsRead = async (id) => {
  try {
  const res = await fetch(`${API_CONTACT}/admin/read/${id}`, {
    method: "POST",
    credentials: "include",
  });
    if (!res.ok) throw new Error("Impossible de marquer le contact comme lu");
    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};


/**
 * 
 * 
 * 
 * // frontend/src/api/contactApi.js
import { API_CONTACT_GET, API_CONTACT_POST } from "./config.js";

/**
 * GET /api/contact
 
export const getContacts = async () => {
  try {
    const res = await fetch(`${API_CONTACT_GET}`, { credentials: "include" });
    if (!res.ok) throw new Error("Erreur récupération contacts");
    return res.json();
  } catch (err) {
    console.error("Erreur récupération contacts :", err);
    return [];
  }
};

/**
 * POST /api/contact/simple  (message sans rdv)
 
export const sendContactForm = async (formData) => {
  const res = await fetch(`${API_CONTACT_POST}/simple`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Erreur envoi formulaire simple");
  }
  return res.json();
};

/**
 * POST /api/contact  (message + réservation)
 
export const sendRdvForm = async (formData) => {
  const res = await fetch(`${API_CONTACT_POST}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Erreur envoi formulaire RDV");
  }
  return res.json();
};

/**
 * DELETE /api/contact/admin/delete/:id
 
export const deleteContact = async (id) => {
  const res = await fetch(`${API_CONTACT_POST}/admin/delete/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Erreur suppression contact");
  return res.json();
};

/**
 * POST /api/contact/admin/read/:id
 
export const markContactAsRead = async (id) => {
  try {
    const res = await fetch(`${API_CONTACT_POST}/admin/read/${id}`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) throw new Error("Impossible de marquer le contact comme lu");
    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

 */

/**
 * // Login admin
export const loginAdmin = async (username, password) => {
  const res = await fetch(`${API_ADMIN}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error("Identifiants invalides");
  return res.json();
};

export const loginAdminWithToken = async (token) => {
  const res = await fetch(`${API_ADMIN}/me`, { // endpoint qui retourne le user depuis token
    method: "GET",
    headers: { "Authorization": `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Token invalide");
  return res.json();
};

// Logout admin
export const logoutAdmin = async () => {
  const res = await fetch(`${API_ADMIN}/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Erreur logout");
  return res.json();
};

 */

/**
 * // Récupérer les dispo
export const getDispo = async () => {
  try {
    const res = await fetch(API_DISPO, { credentials: "include" });
    if (!res.ok) throw new Error("Erreur récupération créneaux");
    return res.json();
  } catch (err) {
    console.error("Erreur récupération créneaux :", err);
    return {};
  }
};


 */

/**
 * // Ajouter un créneau côté admin

export const addCreneauAdmin = async (date, heure ) => {
  const res = await fetch(`${API_ADMIN}/dispo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ date, heure }),
  });
  if (!res.ok) throw new Error("Erreur lors de l'ajout du créneau");
  return res.json();
};

// Modifier un créneau côté admin
export const editCreneauAdmin = async (id, date, oldHeure, newHeure) => {
  const res = await fetch(`${API_ADMIN}/dispo/edit/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, oldHeure, newHeure }),
  });
  if (!res.ok) throw new Error("Erreur lors de la modification du créneau");
  return res.json();
};

// Supprimer un créneau côté admin
export const deleteCreneauAdmin = async (id, date) => {
  const res = await fetch(`${API_ADMIN}/dispo/delete/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date }),
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression du créneau");
  return res.json();
};

 */
/**
 * // Récupérer tous les RDV
export const getRdv = async () => {
  try{
  const res = await fetch(API_RDV, { credentials: "include" });
  if (!res.ok) throw new Error("Erreur récupération RDV");
  return res.json();
  }catch (err) {
    console.error("Erreur récupération rdv :", err);
    return {};
  }

};

// Ajouter un RDV
export const addRdvAdmin = async (rdv) => {
  const res = await fetch(`${API_ADMIN}/rdv`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(rdv),
  });
  if (!res.ok) throw new Error("Erreur ajout RDV");
  return res.json();
};

// Modifier un RDV
export const editRdvAdmin = async (rdv) => {
  const res = await fetch(`${API_ADMIN}/rdv/edit/${rdv.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(rdv),
  });
  if (!res.ok) throw new Error("Erreur modification RDV");
  return res.json();
};

// Supprimer un RDV
export const deleteRdvAdmin = async (id) => {
  const res = await fetch(`${API_ADMIN}/rdv/delete/${id}`,  {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Erreur suppression RDV");
  return res.json();
};

 */