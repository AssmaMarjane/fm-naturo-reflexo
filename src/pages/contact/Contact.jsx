//Imports the necessary styles and components for the Home page.
import "../../style/main.scss";
import "./Contact.scss";
import FormContact from "../../components/formContact/Formcontact";

function Contact() {
  return (
    <main>
      <div className="contact-container">
        <FormContact />
      </div>
    </main>
  );
}

export default Contact;
