//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./FAQSection.scss";
import { Link } from "react-router-dom"; // Pour le lien vers la page FAQ
import Collapse from "../collapse/Collapse";

function FAQSection() {
  return (
    <section className="faq-section">
      <h1 className="faq-title">Questions fréquentes</h1>

      <div className="faq-collapses">
        <Collapse
          title="Quels sont les bienfats de la naturopathie ?"
          content="La naturopathie aide à mieux gérer son stress, à renforcer ses défenses naturelles, à améliorer son énergie et sa digestion, et encourage de bonnes habitudes de vie grâce à des méthodes naturelles."
        />
        <Collapse
          title="Quelle est la durée d'une séance de réflexologie ?"
          content="Une séance dure en moyenne entre 45min à 1h."
        />
      </div>
      <Link to="/faq" className="faq-link">
        Voir toutes les questions
      </Link>
    </section>
  );
}

export default FAQSection;
