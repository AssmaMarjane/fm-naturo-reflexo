import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../api/adminApi";
import { loginSuccess } from "../../store/authSlice";

import "../../style/main.scss";
import "./LoginPage.scss";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginAdmin(username, password, rememberMe);

      dispatch(loginSuccess(res.user));

      //alert("Connecté !");

      navigate("/gestion");
    } catch (err) {
      setError(err.message || "Identifiants incorrects");
      //alert("Identifiants incorrects");
    }
  };

  return (
        <div className="login-container">

    <section className="login-form-section">
      <h2 className="login-title">Connexion Ablam</h2>

      <form onSubmit={handleLogin} className="login-form">
        {error && <p className="error">{error}</p>}

        <div className="input-wrapper">
          <label htmlFor="identifiant">Identifiant</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Identifiant"
            required
            autoComplete="username"
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            autoComplete="current-password"
          />
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          <label htmlFor="remember-me">Se souvenir de moi</label>
        </div>

        <button type="submit" className="login-button">
          Connexion
        </button>
      </form>
    </section>
    </div>
  );
}

export default LoginPage;

/**
 * import "../../style/main.css";
import "./Formulaire.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";


 * Form component for user sign-in.
 *
 * This component provides a form for users to enter their email,
 * password, and optionally remember their credentials.
 * It handles form submission, authentication, and redirects
 * based on the authentication status.
 *
 * @component
 * @example
 * return (
 *   <Form />
 * )
 *
function Form() {
  const [email, setEmail] = useState(""); // State for user email input
  const [password, setPassword] = useState(""); // State for user password input
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember me" checkbox
  const navigate = useNavigate(); // Hook for navigating programmatically
  const dispatch = useDispatch(); // Hook for dispatching actions to Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Selects authentication status from Redux store
  const error = useSelector((state) => state.auth.error); // Selects authentication error message from Redux store

  // Effect to redirect to profile page if user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, rememberMe));
  };

  //console.log("isauth", isAuthenticated);

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" autoComplete="current-email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <p className="error-message">Utilisateur introuvable</p>}
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
}

export default Form;
 */


      /**
 *       // Sauvegarder token dans localStorage si rememberMe
      if (rememberMe) {
        localStorage.setItem("adminToken", JSON.stringify(res.user));
      } else {
        sessionStorage.setItem("adminToken", JSON.stringify(res.user));
      }
 */
