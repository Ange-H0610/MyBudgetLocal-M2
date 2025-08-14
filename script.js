// Afficher le nom de l'utilisateur
window.addEventListener("load", () => {
  const user = localStorage.getItem("username") || "Utilisateur";
  const greeting = document.getElementById("greeting");
  greeting.textContent = "Bonjour, " + user;
});

// Déconnexion
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "index.html";
});

// Changement de thème
document.getElementById("themeSelect").addEventListener("change", function(){
  document.body.className = this.value;
});

// Calculer le solde au clic
document.getElementById("calculate").addEventListener("click", () => {
  // Revenus
  const totalIncome = 
    Number(document.getElementById("incomeSalary").value) +
    Number(document.getElementById("incomeSocial").value) +
    Number(document.getElementById("incomeOther").value);

  // Dépenses
  const totalExpense = 
    Number(document.getElementById("expenseRent").value) +
    Number(document.getElementById("expenseUtilities").value) +
    Number(document.getElementById("expenseFood").value) +
    Number(document.getElementById("expenseTransport").value) +
    Number(document.getElementById("expenseOther").value);

  const balance = totalIncome - totalExpense;
  document.getElementById("result").textContent = "Solde total : €" + balance;
});
