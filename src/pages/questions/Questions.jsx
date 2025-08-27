//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./Questions.scss";
import Collapse from "../../components/collapse/Collapse";
import questionsData from "../../data/questionsData";

function Questions() {
  return (
    <main>
      <div className="questions-container">
        <h2 className="questions-title">Questions fréquentes</h2>

        <div className="questions-collapses">
          {questionsData.map((question, index) => (
            <Collapse key={index} title={question.title} content={question.content} className={question.classPrefix} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Questions;
