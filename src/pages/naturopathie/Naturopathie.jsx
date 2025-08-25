//Imports the necessary styles and components for the Home page.
import "./Naturopathie.scss";
import Article from "../../components/article/Article";
import { articles } from "../../data/articleData";

function Naturopathie() {
  return (
    <main>
      <div className="naturo-container">
        <Article data={articles.naturopathie} />;
      </div>
    </main>
  );
}

export default Naturopathie;

/**
 * adapter les polices pr media queries et aussi responsive formulaire
 * 
 */