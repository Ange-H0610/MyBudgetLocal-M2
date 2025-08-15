// Gestion du nom utilisateur
const username = localStorage.getItem("username") || "Utilisateur";
document.getElementById("username-display").textContent = "Bonjour, " + username;

// Thème clair/sombre
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Charger le thème sauvegardé
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "login.html";
});

// Ajout revenus
document.getElementById("add-revenu").addEventListener("click", () => {
  const tbody = document.getElementById("revenus-body");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="text" placeholder="Autre revenu"></td>
    <td><input type="number" placeholder="0"></td>
  `;
  tbody.appendChild(row);
});

// Ajout dépenses
document.getElementById("add-depense").addEventListener("click", () => {
  const tbody = document.getElementById("depenses-body");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="text" placeholder="Autre dépense"></td>
    <td><input type="number" placeholder="0"></td>
  `;
  tbody.appendChild(row);
});

// Calcul du solde
document.getElementById("calculer-solde").addEventListener("click", () => {
  const revenus = document.querySelectorAll("#revenus-body input[type='number']");
  const depenses = document.querySelectorAll("#depenses-body input[type='number']");
  
  let totalRevenus = 0;
  let totalDepenses = 0;

  revenus.forEach(r => totalRevenus += Number(r.value) || 0);
  depenses.forEach(d => totalDepenses += Number(d.value) || 0);

  const solde = totalRevenus - totalDepenses;
  document.getElementById("solde-affiche").textContent = `Solde restant : ${solde.toLocaleString()} AR`;
});
