import { useState } from "react";
import { addCreneauAdmin } from "../../api/contactApi"; 

function AdminPage() {
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addCreneauAdmin(date, heure, password);
      alert("Créneau ajouté !");
      setDate("");
      setHeure("");
      setPassword("");
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  return (
    <section className="admin-section">
      <h2>Page Admin - Ajouter un créneau</h2>
      <form onSubmit={handleAdd}>
        <div className="input-wrapper">
          <label>Date :</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div className="input-wrapper">
          <label>Heure :</label>
          <input type="time" value={heure} onChange={(e) => setHeure(e.target.value)} required />
        </div>

        <div className="input-wrapper">
          <label>Mot de passe admin :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Ajouter créneau</button>
      </form>

      
    </section>
  );
}

export default AdminPage;
