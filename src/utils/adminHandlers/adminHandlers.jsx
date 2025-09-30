import { useState, useEffect } from "react";
import { crudService } from "../../services/crudService";
import { validateName, validatePrenom, validateTelephone, formatName } from "../models/formRules";

export function useAdminHandlers(isLoggedIn) {
  // -------------------- STATES DISPO --------------------
  const [dispoDate, setDispoDate] = useState("");
  const [dispoHeure, setDispoHeure] = useState("");
  const [dispo, setDispo] = useState([]);

  // -------------------- STATES RDV --------------------
  const [rdv, setRdv] = useState([]);
  const [rdvDate, setRdvDate] = useState("");
  const [rdvHeure, setRdvHeure] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [prestation, setPrestation] = useState("");

  // -------------------- STATES edit RDV  --------------------
  const [editRdv, setEditRdv] = useState(null);
  const [showRdvModal, setShowRdvModal] = useState(false);
  const [showEditRdvModal, setShowEditRdvModal] = useState(false);
  const [selectedRdv, setSelectedRdv] = useState(null);

  // -------------------- STATES EDIT DISPO --------------------
  const [editDispo, setEditDispo] = useState("");
  const [oldDispoHeure, setOldDispoHeure] = useState("");
  const [newDispoHeure, setNewDispoHeure] = useState("");

  // -------------------- STATES CONTACT --------------------
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentContactPage, setCurrentContactPage] = useState(1);
  const contactsPerPage = 8;

  // -------------------- MODALES DISPO --------------------
  const [selectedDispo, setSelectedDispo] = useState(null);
  const [showDispoModal, setShowDateModal] = useState(false);
  const [showEditDispoModal, setShowEditModal] = useState(false);

  // -------------------- PAGINATION --------------------
  const [currentDispoPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [currentRdvPage, setCurrentRdvPage] = useState(1);
  const rdvPerPage = 8;

  // -------------------- FETCH INIT --------------------
  useEffect(() => {
    if (isLoggedIn) {
      fetchDispo();
      fetchRdv();
      fetchContacts();
    }
  }, [isLoggedIn]);

  // -------------------- CRUD DISPO --------------------
  const fetchDispo = async () => {
    try {
      const data = await crudService.fetchDispo();
      console.log("✅ dispo triés dans handlers :", data); // <-- log après tri

      setDispo(data); // ✅ déjà formaté et trié
    } catch (err) {
      console.error("Erreur fetch dispo :", err);
    }
  };

  const handleAddDispo = async (e) => {
    e.preventDefault();
    try {
      await crudService.addCreneau(dispoDate, dispoHeure);
      alert("Créneau ajouté !");
      setDispoDate("");
      setDispoHeure("");
      fetchDispo();
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  const handleDeleteDispo = async (rawDate, heure) => {
    try {
      await crudService.deleteCreneau(rawDate, heure);
      alert("Créneau supprimé !");
      fetchDispo();
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  const startEditDispo = (rawDate, heure) => {
    setEditDispo(rawDate);
    setOldDispoHeure(heure);
    setNewDispoHeure(heure);
    setShowEditModal(true);
  };

  const handleEditDispo = async (e) => {
    e.preventDefault();
    if (!newDispoHeure) return;
    try {
      await crudService.editCreneau(editDispo, oldDispoHeure, newDispoHeure);
      alert("Créneau modifié !");
      resetEditDispoModal();
      fetchDispo();
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };
  // -------------------- CRUD RDV --------------------
  const fetchRdv = async () => {
    try {
      const data = await crudService.fetchRdv();
      setRdv(data); // ✅ déjà formaté et trié
      console.log("✅ RDV triés dans handlers :", data); // <-- log après tri
    } catch (err) {
      console.error("Erreur fetch RDV :", err);
    }
  };

  const handleAddRdv = async (e) => {
    e.preventDefault();
    // validations
    if (!validateName(nom)) return alert("Nom invalide : première lettre majuscule, uniquement lettres");
    if (!validatePrenom(prenom)) return alert("Prénom invalide : première lettre majuscule, uniquement lettres");
    if (!validateTelephone(telephone)) return alert("Téléphone invalide : 10 chiffres uniquement");
    const formattedNom = formatName(nom);
    const formattedPrenom = formatName(prenom);

    try {
      await crudService.addRdv({
        date: rdvDate,
        heure: rdvHeure,
        nom: formattedNom,
        prenom: formattedPrenom,
        telephone,
        prestation,
      });
      alert("RDV ajouté !");
      setRdvDate("");
      setRdvHeure("");
      setNom("");
      setPrenom("");
      setTelephone("");
      setPrestation("");
      fetchRdv();
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  const handleDeleteRdv = async (id) => {
    try {
      await crudService.deleteRdv(id);
      alert("RDV supprimé !");
      closeRdvModal();
      fetchRdv();
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  const startEditRdv = (rdv) => {
    setEditRdv(rdv);
    setShowEditRdvModal(true);
  };

  const handleEditRdv = async (e) => {
    e.preventDefault();
    try {
      const updatedRdv = await crudService.editRdv(editRdv);
      alert("RDV modifié !");

      // Mettre à jour la liste
      fetchRdv();

      // 🔹 Mettre à jour la modale ouverte si elle correspond
      if (selectedRdv && selectedRdv.id === updatedRdv.id) {
        setSelectedRdv(updatedRdv);
      }

      resetEditRdvModal();
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  // -------------------- CRUD CONTACT --------------------
  const fetchContacts = async () => {
    try {
      const data = await crudService.fetchContacts();
      setContacts(data);
      console.log("✅ contacts récupérés :", data);
    } catch (err) {
      console.error("Erreur fetch contacts :", err);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await crudService.deleteContact(id);
      alert("Contact supprimé !");
      closeContactModal();
      fetchContacts();
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  const contactAsRead = async (contact) => {
    if (!contact.read) {
      // si pas encore lu
      try {
        await crudService.markContactAsRead(contact.id); // call backend
        // mettre à jour localement pour que la liste reflète l'état lu
        setContacts((prev) => prev.map((c) => (c.id === contact.id ? { ...c, read: true } : c)));
      } catch (err) {
        console.error("Erreur marquage comme lu :", err);
      }
    }
  };

  // -------------------- MODALES --------------------
  const openDispoModal = (rawDate) => {
    setSelectedDispo(rawDate);
    setShowDateModal(true);
  };

  const closeDispoModal = () => {
    setSelectedDispo(null);
    setShowDateModal(false);
  };

  const resetEditDispoModal = () => {
    setEditDispo("");
    setOldDispoHeure("");
    setNewDispoHeure("");
    setShowEditModal(false);
  };

  const openRdvModal = (rdv) => {
    setSelectedRdv(rdv);
    setShowRdvModal(true);
  };

  const closeRdvModal = () => {
    setSelectedRdv(null);
    setShowRdvModal(false);
  };

  const resetEditRdvModal = () => {
    setEditRdv(null);
    setShowEditRdvModal(false);
  };

  const openContactModal = (contact) => {
    setSelectedContact(contact);
    setShowContactModal(true);
    contactAsRead(contact);
  };

  const closeContactModal = () => {
    setSelectedContact(null);
    setShowContactModal(false);
  };
  // -------------------- PAGINATION --------------------
  const totalDispoPages = Math.ceil(dispo.length / itemsPerPage);
  const startIndex = (currentDispoPage - 1) * itemsPerPage;
  const currentDispo = dispo.slice(startIndex, startIndex + itemsPerPage);

  const totalRdvPages = Math.ceil(rdv.length / rdvPerPage);
  const rdvStartIndex = (currentRdvPage - 1) * rdvPerPage;
  const currentRdv = rdv.slice(rdvStartIndex, rdvStartIndex + rdvPerPage);

  const nextDispoPage = () => {
    if (currentDispoPage < totalDispoPages) setCurrentPage((p) => p + 1);
  };

  const prevDispoPage = () => {
    if (currentDispoPage > 1) setCurrentPage((p) => p - 1);
  };

  const nextRdvPage = () => {
    if (currentRdvPage < totalRdvPages) setCurrentRdvPage((p) => p + 1);
  };

  const prevRdvPage = () => {
    if (currentRdvPage > 1) setCurrentRdvPage((p) => p - 1);
  };
  // -------------------- PAGINATION CONTACT --------------------
  const totalContactPages = Math.ceil(contacts.length / contactsPerPage);
  const contactStartIndex = (currentContactPage - 1) * contactsPerPage;
  const currentContacts = contacts.slice(contactStartIndex, contactStartIndex + contactsPerPage);

  const nextContactPage = () => {
    if (currentContactPage < totalContactPages) setCurrentContactPage((p) => p + 1);
  };

  const prevContactPage = () => {
    if (currentContactPage > 1) setCurrentContactPage((p) => p - 1);
  };

  return {
    // dispo
    dispo,
    dispoDate,
    setDispoDate,
    dispoHeure,
    setDispoHeure,
    editDispo,
    setEditDispo,
    oldDispoHeure,
    newDispoHeure,
    setNewDispoHeure,
    selectedDispo,
    showDispoModal,
    showEditDispoModal,

    // rdv
    rdv,
    rdvDate,
    setRdvDate,
    rdvHeure,
    setRdvHeure,
    nom,
    setNom,
    prenom,
    setPrenom,
    telephone,
    setTelephone,
    prestation,
    setPrestation,
    editRdv,
    setEditRdv,
    selectedRdv,
    showRdvModal,
    showEditRdvModal,

    // contacts
    contacts,
    selectedContact,
    showContactModal,

    // handlers dispo
    handleAddDispo,
    handleDeleteDispo,
    handleEditDispo,
    startEditDispo,
    openDispoModal,
    closeDispoModal,
    resetEditDispoModal,

    // handlers rdv
    handleAddRdv,
    handleDeleteRdv,
    handleEditRdv,
    startEditRdv,
    openRdvModal,
    closeRdvModal,
    resetEditRdvModal,

    // handlers contacts
    fetchContacts,
    handleDeleteContact,
    openContactModal,
    closeContactModal,

    // pagination dispo
    currentDispo,
    currentDispoPage,
    totalDispoPages,
    nextDispoPage,
    prevDispoPage,

    // pagination rdv
    currentRdv,
    currentRdvPage,
    totalRdvPages,
    nextRdvPage,
    prevRdvPage,

    // pagination contacts
    currentContacts,
    currentContactPage,
    totalContactPages,
    nextContactPage,
    prevContactPage,
  };
}
