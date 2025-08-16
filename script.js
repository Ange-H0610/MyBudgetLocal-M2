// Afficher nom utilisateur
window.addEventListener("load", () => {
  const user = localStorage.getItem("username") || "Utilisateur";
  document.getElementById("greeting").textContent = "Bonjour, " + user;
});

// Déconnexion
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "index.html";
});

// Thèmes (fonctionnel PC + mobile)
const themeSelect = document.getElementById("themeSelect");
themeSelect.addEventListener("change", function(){
  document.body.className = this.value;
  localStorage.setItem("theme", this.value);
});

// Charger thème sauvegardé
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme){
    document.body.className = savedTheme;
    themeSelect.value = savedTheme;
  }
});

// Calcul solde
document.getElementById("calculate").addEventListener("click", () => {
  const totalIncome = Number(document.getElementById("incomeSalary").value) +
                      Number(document.getElementById("incomeSocial").value) +
                      Number(document.getElementById("incomeOther").value);

  const totalExpense = Number(document.getElementById("expenseRent").value) +
                       Number(document.getElementById("expenseUtilities").value) +
                       Number(document.getElementById("expenseFood").value) +
                       Number(document.getElementById("expenseTransport").value) +
                       Number(document.getElementById("expenseOther").value);

  document.getElementById("result").textContent = "Solde total : €" + (totalIncome - totalExpense);
});
