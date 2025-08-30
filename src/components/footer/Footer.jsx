import "./Footer.scss";
import instaIcon from "../../assets/icons/instagram.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";

function Footer() {
  // tableau des réseaux avec icône + url
  const socialLinks = [
    {
      name: "Instagram",
      icon: instaIcon,
      url: "https://www.instagram.com/essma_assma?igsh=MXM4eTM2c2lvZm4zaw==",
    },
    {
      name: "WhatsApp",
      icon: whatsappIcon,
      //url: "https://wa.me/33", // format: 33612345678 (sans + et espaces)
    },
  ];

  return (
    <footer className="fm-footer">
      <p className="copyright">FM Naturopathe_Réflexologue© 2025 All rights reserved</p>

      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            <img src={link.icon} alt={link.name} className="social-icon" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
