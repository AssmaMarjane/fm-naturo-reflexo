import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../../components/admin/logoutButton/LogoutButton";
import { useDispoHandlers } from "../../utils/adminHandlers/dispoHandlers";
import { useRdvHandlers } from "../../utils/adminHandlers/rdvHandlers";
import { useContactHandlers } from "../../utils/adminHandlers/contactHandlers";

import AddCreneauForm from "../../components/adminDispo/AddCreneauForm";
import DispoList from "../../components/adminDispo/DispoList";
import DispoModal from "../../components/adminDispo/DispoModal";
import EditDispoModal from "../../components/adminDispo/EditDispoModal";
import "./AdminPage.scss";
import { useEffect, useState } from "react";
import AdminCalendar from "../../components/admin/AdminCalendar";
import AddRdvForm from "../../components/adminRdv/AddRdvForm";
import RdvList from "../../components/adminRdv/RdvList";
import RdvModal from "../../components/adminRdv/RdvModal";
import EditRdvModal from "../../components/adminRdv/EditRdvModal";
import { loginSuccess } from "../../store/authSlice";
import { loginAdminWithToken } from "../../api/contactApi";
import AdminRdvList from "../../components/admin/AdminRdvList";
import ContactList from "../../components/admin/contactList";
import ContactModal from "../../components/admin/ContactModal";
function AdminPage() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispoHandlers = useDispoHandlers(isLoggedIn);
    const rdvHandlers = useRdvHandlers(isLoggedIn);
  const contactHandlers = useContactHandlers(isLoggedIn);

  const [activeSection, setActiveSection] = useState("dispo-calendar+rdv-calendar");
  // "add-dispo" | "edit-dispo" | "dispo-calendar" | "rdv-calendar" | "dispo-calendar+rdv-calendar"
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken");
    if (token && !isLoggedIn) {
      loginAdminWithToken(token) // fait un call backend pour récupérer user
        .then((user) => dispatch(loginSuccess(user)))
        .catch(() => {
          localStorage.removeItem("adminToken");
          sessionStorage.removeItem("adminToken");
        });
    }
  }, [dispatch, isLoggedIn]);

  if (!isLoggedIn) {
    return <p>⚠️ Accès refusé. Veuillez vous connecter.</p>;
  }

  return (
    <div className="admin-container">
      {/* Contenu principal */}
      <div className="admin-content">
        <h2 className="dashbd-title">Tableau de bord</h2>
        {/* Section active */}
        {activeSection === "dispo-calendar+rdv-calendar" && (
          <div className="dual-calendar">
            <AdminCalendar data={dispoHandlers.dispo} mode="dispo" />
            <AdminCalendar data={rdvHandlers.rdv} mode="rdv" />
          </div>
        )}

        {activeSection === "add-dispo" && (
          <AddCreneauForm
            date={dispoHandlers.dispoDate}
            setDate={dispoHandlers.setDispoDate}
            heure={dispoHandlers.dispoHeure}
            setHeure={dispoHandlers.setDispoHeure}
            onSubmit={dispoHandlers.handleAddDispo}
          />
        )}
        {activeSection === "edit-dispo" && (
          <>
            <DispoList
              currentDates={dispoHandlers.currentDispo}
              openDateModal={dispoHandlers.openDispoModal}
              currentDispoPage={dispoHandlers.currentDispoPage}
              totalDispoPages={dispoHandlers.totalDispoPages}
              prevDispoPage={dispoHandlers.prevDispoPage}
              nextDispoPage={dispoHandlers.nextDispoPage}
            />

            {dispoHandlers.showDispoModal && dispoHandlers.selectedDispo && (
              <DispoModal
                dispo={dispoHandlers.dispo}
                selectedDispo={dispoHandlers.selectedDispo}
                onClose={dispoHandlers.closeDispoModal}
                startEditDispo={dispoHandlers.startEditDispo}
                handleDeleteDispo={dispoHandlers.handleDeleteDispo}
              />
            )}

            {dispoHandlers.showEditDispoModal && dispoHandlers.editDispo && (
              <EditDispoModal
                dispo={dispoHandlers.dispo}
                editDate={dispoHandlers.editDispo}
                oldHeure={dispoHandlers.oldDispoHeure}
                newHeure={dispoHandlers.newDispoHeure}
                setNewHeure={dispoHandlers.setNewDispoHeure}
                handleEdit={dispoHandlers.handleEditDispo}
                resetEditModal={dispoHandlers.resetEditDispoModal}
              />
            )}
          </>
        )}
        {activeSection === "dispo-calendar" && <AdminCalendar data={dispoHandlers.dispo} mode="dispo" />}
        {activeSection === "rdv-calendar" && <AdminCalendar data={rdvHandlers.rdv} mode="rdv" />}
        {activeSection === "add-rdv" && (
          <AddRdvForm
            date={rdvHandlers.rdvDate}
            setDate={rdvHandlers.setRdvDate}
            heure={rdvHandlers.rdvHeure}
            setHeure={rdvHandlers.setRdvHeure}
            nom={rdvHandlers.nom}
            setNom={rdvHandlers.setNom}
            prenom={rdvHandlers.prenom}
            setPrenom={rdvHandlers.setPrenom}
            telephone={rdvHandlers.telephone}
            setTelephone={rdvHandlers.setTelephone}
            prestation={rdvHandlers.prestation}
            setPrestation={rdvHandlers.setPrestation}
            onSubmit={rdvHandlers.handleAddRdv}
          />
        )}
        {activeSection === "edit-rdv" && (
          <>
            <RdvList
              currentRdv={rdvHandlers.currentRdv}
              openRdvModal={rdvHandlers.openRdvModal}
              currentRdvPage={rdvHandlers.currentRdvPage}
              totalRdvPages={rdvHandlers.totalRdvPages}
              prevRdvPage={rdvHandlers.prevRdvPage}
              nextRdvPage={rdvHandlers.nextRdvPage}
            />

            {rdvHandlers.showRdvModal && rdvHandlers.selectedRdv && (
              <RdvModal
                selectedRdv={rdvHandlers.selectedRdv} // ✅ bon nom
                onClose={rdvHandlers.closeRdvModal}
                startEditRdv={rdvHandlers.startEditRdv}
                handleDeleteRdv={rdvHandlers.handleDeleteRdv}
              />
            )}

            {rdvHandlers.showEditRdvModal && rdvHandlers.editRdv && (
              <EditRdvModal
                editRdv={rdvHandlers.editRdv}
                setEditRdv={rdvHandlers.setEditRdv}
                handleEditRdv={rdvHandlers.handleEditRdv}
                resetEditRdvModal={rdvHandlers.resetEditRdvModal}
              />
            )}
          </>
        )}
        {activeSection === "rdv-list" && (
          <AdminRdvList
            allRdv={rdvHandlers.rdv}
            currentRdv={rdvHandlers.currentRdv}
            currentRdvPage={rdvHandlers.currentRdvPage}
            totalRdvPages={rdvHandlers.totalRdvPages}
            prevRdvPage={rdvHandlers.prevRdvPage}
            nextRdvPage={rdvHandlers.nextRdvPage}
          />
        )}

        {activeSection === "contact-list" && (
          <>
            <ContactList
              currentContacts={contactHandlers.currentContacts}
              openContactModal={contactHandlers.openContactModal}
              currentContactPage={contactHandlers.currentContactPage}
              totalContactPages={contactHandlers.totalContactPages}
              prevContactPage={contactHandlers.prevContactPage}
              nextContactPage={contactHandlers.nextContactPage}
            />

            {contactHandlers.showContactModal && contactHandlers.selectedContact && (
              <ContactModal
                contact={contactHandlers.selectedContact}
                onClose={contactHandlers.closeContactModal}
                handleDeleteContact={contactHandlers.handleDeleteContact}
              />
            )}
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="admin-nav">
        <button onClick={() => setActiveSection("dispo-calendar+rdv-calendar")} className={activeSection === "calendar+rdv" ? "active" : ""}>
          Accueil
        </button>
        <button onClick={() => setActiveSection("add-dispo")} className={activeSection === "add" ? "active" : ""}>
          ➕ Ajouter un créneau
        </button>
        <button onClick={() => setActiveSection("edit-dispo")} className={activeSection === "edit" ? "active" : ""}>
          ✏️ Modifier / Supprimer créneaux
        </button>
        <button onClick={() => setActiveSection("dispo-calendar")} className={activeSection === "calendar" ? "active" : ""}>
          📅 Voir disponibilités
        </button>
        <button onClick={() => setActiveSection("rdv-calendar")} className={activeSection === "rdv" ? "active" : ""}>
          📋 Voir RDV
        </button>
        <button onClick={() => setActiveSection("add-rdv")} className={activeSection === "add-rdv" ? "active" : ""}>
          ➕ Ajouter un RDV
        </button>
        <button onClick={() => setActiveSection("edit-rdv")} className={activeSection === "edit-rdv" ? "active" : ""}>
          ✏️ Modifier / Supprimer RDV
        </button>
        <button onClick={() => setActiveSection("rdv-list")} className={activeSection === "rdv-list" ? "active" : ""}>
          📑 Liste RDV / Export PDF
        </button>
        <button onClick={() => setActiveSection("contact-list")} className={activeSection === "contact-list" ? "active" : ""}>
          📬 Messages de contact
        </button>

        <LogoutButton />
      </div>
    </div>
  );
}

export default AdminPage;
