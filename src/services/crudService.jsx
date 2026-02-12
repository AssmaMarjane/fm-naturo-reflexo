//front/services/crudservice
import {
  addCreneauAdmin,
  getDispo,
  deleteCreneauAdmin,
  editCreneauAdmin,
  getRdv,
  addRdvAdmin,
  deleteRdvAdmin,
  editRdvAdmin,
  getContacts,
  deleteContact,
  markContactAsRead,
} from "../api/index";
import { Dispo } from "../utils/models/modelDispo";
import { Rdv } from "../utils/models/modelRdv";

export const crudService = {
  // ---------- DISPO ----------
fetchDispo: async () => {
  const data = await getDispo();

  const formatted = Object.entries(data)
    .map(([date, heures]) =>
      new Dispo({
        rawDate: date,
        heures,
      })
    )
    .sort((a, b) => new Date(a.rawDate) - new Date(b.rawDate));

  //console.log("✅ Dispos formatées :", formatted);
  return formatted;
},



  addCreneau: async (date, heure) => {
    return await addCreneauAdmin(date, heure);
  },

  deleteCreneau: async (id,rawDate) => {
    return await deleteCreneauAdmin(id,rawDate);
  },

  editCreneau: async (id, date, oldHeure, newHeure) => {
    return await editCreneauAdmin(id, date, oldHeure, newHeure);
  },
  // ---------- RDV ----------
  fetchRdv: async () => {
    const data = await getRdv();
    const formatted = data.map((rdv) => new Rdv(rdv)).sort((a, b) => new Date(`${a.rawDate}T${a.heure}`) - new Date(`${b.rawDate}T${b.heure}`));

    //console.log("✅ RDV triés :", formatted); // <-- log après tri
    return formatted;
  },
  addRdv: async (rdv) => {
    return await addRdvAdmin(rdv);
  },

  deleteRdv: async (id) => {
    return await deleteRdvAdmin(id);
  },

  editRdv: async (rdv) => {
    return await editRdvAdmin(rdv);
  },

    // ---------- CONTACT----------

    fetchContacts: async () => {
    const data = await getContacts();
    // optionnel : trier par date/id si besoin
    const formatted = data.sort((a, b) => b.id - a.id); // plus récent en haut
    //console.log("✅ contacts formtted récupérés :", formatted);

    return formatted;
  },

  deleteContact: async (id) => {
    return await deleteContact(id);
  },
 
   markContactAsRead: async (id) => markContactAsRead(id),
};
  

/**
 *   fetchDispo: async () => {
    const data = await getDispo();
    const formatted = Object.entries(data)
      .map(([date, heures]) => new Dispo(date, heures))
      .sort((a, b) => new Date(a.rawDate) - new Date(b.rawDate));

    console.log("✅ Dispo triées :", formatted); // <-- log après tri
    return formatted;
  },

 */
