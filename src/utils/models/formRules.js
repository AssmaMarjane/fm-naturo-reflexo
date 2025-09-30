// src/utils/formRules.js

// Regex pour les champs
export const nameRegex = /^[A-Z][a-zA-Z-]*$/;
export const phoneRegex = /^\d{10}$/;

// Fonctions de validation
export const validateName = (name) => nameRegex.test(name);
export const validatePrenom = (prenom) => nameRegex.test(prenom);
export const validateTelephone = (tel) => phoneRegex.test(tel);

// Fonction pour formater un nom/prénom (majuscule première lettre)
export const formatName = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Ajouter d'autres règles si nécessaire
export const validatePrestation = (presta) => presta && presta.length > 0;
export const validateDate = (date) => !isNaN(new Date(date).getTime()); // date valide
