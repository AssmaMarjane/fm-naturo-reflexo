//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./About.scss";
import Article from "../../components/article/Article";
import { articles } from "../../data/articleData";

function About() {
  return (
    <main>
      <div className="container">
        <Article data={articles.about} />;
      </div>
    </main>
  );
}

export default About;
