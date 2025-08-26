//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./Questions.scss";
import Collapse from "../../components/collapse/Collapse";
import questionsData from "../../data/questionsData";

function Questions() {
  return (
    <main>
      <h2 className="questions-title">Questions fréquentes</h2>

      <div className="questions-collapses">
        {questionsData.map((q, index) => (
          <Collapse key={index} title={q.title} content={q.content} />
        ))}
      </div>
    </main>
  );
}

export default Questions;
