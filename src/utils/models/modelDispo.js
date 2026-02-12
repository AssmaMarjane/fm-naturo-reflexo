// ./models/Dispo.js
// ./models/Dispo.js
export class Dispo {
  constructor({ rawDate, heures = [] }) {
    this.rawDate = rawDate; // YYYY-MM-DD
    this.date = this.formatDate(rawDate); // DD/MM/YYYY
    this.heures = heures; // ✅ tableau de strings ["13:53"]
  }

  formatDate(date) {
    if (!date) return null;
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }
}

/** 
export class Dispo {
  constructor({ id, rawDate, heures = [] }) {
    this.id = id || `${rawDate}-${Math.random().toString(36).substr(2, 9)}`; // id unique (backend ou fallback généré)
    this.rawDate = rawDate; // format brut YYYY-MM-DD
    this.date = this.formatDate(rawDate); // format dd/mm/yyyy
    this.heures = heures.map((h) => ({
      id: `${rawDate}_${h}`, // chaque créneau horaire a aussi un id unique
      heure: h,
    }));
  }

  formatDate(date) {
    if (!date) return null;
    const parts = date.includes("-") ? date.split("-") : date.split("/");
    const [year, month, day] = parts;
    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
  }
}

*/