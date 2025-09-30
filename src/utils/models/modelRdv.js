// ./models/Rdv.js
export class Rdv {
  constructor({ id, date, heure, nom, prenom, telephone, prestation }) {
    this.id = id;
    this.rawDate = date; // YYYY-MM-DD
    this.date = this.formatDate(date); // dd/mm/yyyy
    this.heure = heure;
    this.nom = this.capitalizeFirstLetter(nom);
    this.prenom = this.capitalizeFirstLetter(prenom);
    this.telephone = telephone;
    this.prestation = prestation;
  }

  formatDate(date) {
    if (!date) return null;
    const parts = date.includes("-") ? date.split("-") : date.split("/");
    const [year, month, day] = parts;
    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
  }

  capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}
