//Imports the necessary styles and components for the Home page.
import "./Reflexologie.scss";
import "../../style/main.scss";
import Article from "../../components/article/Article";
import { articles } from "../../data/articleData";


function Reflexologie() {
  return (
    <main>
      <div className="reflexo-container">
        <Article data={articles.reflexologie} />;
      </div>
    </main>
  );
}

export default Reflexologie;
