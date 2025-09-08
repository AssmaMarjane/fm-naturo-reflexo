import "./Header.scss";
import fmLogo from "../../assets/logos/logofm.png";
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
        <div className="title-section">
          <Link to="/" className="fm-logo-link">
            <h1 className="fm">
              <span>F</span>m
            </h1>
          </Link>

          <h2 className="title-fm">Naturopathe & Réflexologue</h2>
        </div>
      </div>
      <div className="menu_section">
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
        </nav>
      </div>
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
