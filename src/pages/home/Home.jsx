//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./Home.scss";
import Banner from "../../components/banner/Banner";
import Intro from "../../components/intro/Intro";
import Widget from "../../components/widgets/Widget";
import FAQSection from "../../components/faqsection/FAQSection";
function Home() {
  return (
    <main>
      <div className="home-container">
        <Banner />
        <Intro />
        <Widget />
        <FAQSection />
      </div>
    </main>
  );
}

export default Home;
