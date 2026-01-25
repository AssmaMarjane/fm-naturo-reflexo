import "./Header.scss";
import fmLogo from "../../assets/logos/logofm_2p.png";
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
          <img src={fmLogo} className="logo-fm" alt="FM logo" />
            <h1 className="fm">
              Fm
            </h1>
          <h2 className="title-fm">Naturopathe x Réflexologue</h2>
          <Link to="/" className="fm-logo-link"/>
        <Link to="/" className="logo-overlay" />
       
      {/* Burger */}
      <button
        className="burger"
        aria-label="Ouvrir le menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu mobile */}

        <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="home-link" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
        </nav>
    </header>
  );
}

export default Header;

/**
 *       {/* Menu desktop }
      <nav className="menu_section desktop-menu">
        {links.map((link) => (
          <Link key={link.path} to={link.path} className="home-link">
            {link.name}
          </Link>
        ))}
      </nav>

 */
