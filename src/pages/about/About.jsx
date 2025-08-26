//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./About.scss";
import { articles } from "../../data/articleData";
import Presentation from "../../components/presentation/Presentation";

function About() {
  return (
    <main>
      <div className="container">
        <Presentation data={articles.about} />;
      </div>
    </main>
  );
}

export default About;
