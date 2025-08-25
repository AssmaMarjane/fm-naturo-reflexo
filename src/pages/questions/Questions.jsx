//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./Questions.scss";
import Collapse from "../../components/collapse/Collapse";

function Questions() {
  return (
    <main>
      <h2 className="questions-title">Questions fréquentes</h2>

      <div className="questions-collapses">
        <Collapse
          title="Quels sont les bienfats de la naturopathie ?"
          content="La naturopathie aide à mieux gérer son stress, à renforcer ses défenses naturelles, à améliorer son énergie et sa digestion, et encourage de bonnes habitudes de vie grâce à des méthodes naturelles."
        />
        <Collapse
          title="Quelle est la durée d'une séance de réflexologie ?"
          content="Une séance dure en moyenne entre 45min à 1h."
        />
      </div>
    </main>
  );
}

export default Questions;
