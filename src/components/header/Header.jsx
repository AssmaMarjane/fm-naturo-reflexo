import "./Header.scss";
import fmLogo from "../../assets/logos/logofm_nude.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Accueil", path: "/" },
  { name: "Prestations", path: "/prestations" },
  { name: "Naturopathie", path: "/naturopathie" },
  { name: "Réflexologie", path: "/reflexologie" },
  { name: "FAQ", path: "/faq" },
  { name: "Portrait", path: "/a-propos" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log("Menu ouvert ?", isOpen);

    useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <header className="fm-header">
      {/* logo et titre ici */}
      <div className="logo_section">
        <Link to="/" className="logo-link">
          <img src={fmLogo} className="logo-fm" alt="FM logo" />
        </Link>

        <h1 className="title-fm">
          <span className="fm">F M</span> <br />
          Naturopathe __ Réflexologue
        </h1>
      </div>
      {/* Menu desktop */}
      <nav className="menu_section desktop-menu">
        {links.map((link) => (
          <Link key={link.path} to={link.path} className="home-link">
            {link.name}
          </Link>
        ))}
      </nav>
      {/* Burger pour mobile */}
      <button className="burger" onClick={() => setIsOpen((prev) => !prev)}>
        ☰
      </button>
      {/* Menu mobile */}
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link key={link.path} to={link.path} className="home-link" onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        ))}
      </nav>{" "}
    </header>
  );
}

export default Header;
