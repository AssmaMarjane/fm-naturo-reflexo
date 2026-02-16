import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loginSuccess } from "../../store/authSlice";
import { loginAdminWithToken } from "../../api/index";

import LogoutButton from "../../components/admin/logoutButton/LogoutButton";
import AdminCalendar from "../../components/admin/AdminCalendar";
import DispoMenu from "../../components/admin/DispoMenu";
import RdvMenu from "../../components/admin/RdvMenu";
import ContactMenu from "../../components/admin/ContactMenu";

import { useDispoHandlers } from "../../utils/adminHandlers/dispoHandlers";
import { useRdvHandlers } from "../../utils/adminHandlers/rdvHandlers";
import { useContactHandlers } from "../../utils/adminHandlers/contactHandlers";

import "./AdminPage.scss";

function AdminPage() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const dispoHandlers = useDispoHandlers(isLoggedIn);
  const rdvHandlers = useRdvHandlers(isLoggedIn);
  const contactHandlers = useContactHandlers(isLoggedIn);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const token =
      localStorage.getItem("adminToken") ||
      sessionStorage.getItem("adminToken");

    if (token && !isLoggedIn) {
      loginAdminWithToken(token)
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
      <div className="admin-content">
        <h2 className="dashbd-title">Coucou Fatima 🙋🏽‍♀️</h2>
        <h3 className="dashbd-subtitle">
          Ici tu gères ton planning avec sourire et un peu de çay 😎☕
        </h3>

        {activeSection === "home" && (
          <div className="dual-calendar">
            <AdminCalendar data={dispoHandlers.dispo} mode="dispo" />
            <AdminCalendar data={rdvHandlers.rdv} mode="rdv" />
          </div>
        )}

        {activeSection === "dispo" && (
          <DispoMenu dispoHandlers={dispoHandlers} />
        )}

        {activeSection === "rdv" && (
          <RdvMenu rdvHandlers={rdvHandlers} />
        )}

        {activeSection === "contact" && (
          <ContactMenu contactHandlers={contactHandlers} />
        )}
      </div>

      <div className="admin-nav">
        <button onClick={() => setActiveSection("home")}>Accueil</button>
        <button onClick={() => setActiveSection("dispo")}>Disponibilités</button>
        <button onClick={() => setActiveSection("rdv")}>RDV</button>
        <button onClick={() => setActiveSection("contact")}>Messages</button>

        <LogoutButton />
      </div>
      
    </div>
  );
}

export default AdminPage;
