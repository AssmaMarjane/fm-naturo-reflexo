import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../../api/contactApi";
import { logoutSuccess } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import "./LogoutButton.scss"

function LogoutButton() {
  const dispatch = useDispatch();
const navigate = useNavigate();
  const handleLogout = async () => {
    await logoutAdmin();
      localStorage.removeItem("adminToken"); // supprime token localStorage
  sessionStorage.removeItem("adminToken");
    dispatch(logoutSuccess());
    navigate("/admin");
  };

  return <button className="admin-logout"onClick={handleLogout}>Déconnexion</button>;
}

export default LogoutButton;
