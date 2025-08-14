// Dashboard greeting
window.addEventListener("load", () => {
  const user = localStorage.getItem("username") || "Utilisateur";
  document.getElementById("greeting").textContent = "Bonjour, " + user;
});

// Logout
document.getElementById("logout")?.addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "index.html";
});

// Theme change
document.getElementById("themeSelect")?.addEventListener("change", function(){
  document.body.className = this.value;
});

// Calculer le solde au clic
document.getElementById("calculate").addEventListener("click", () => {
  let totalIncome = 0;
  let totalExpense = 0;

  // Revenus
  ["incomeSalary","incomePensions","incomeSocial","incomeCapital","incomeOther"].forEach(id => {
    totalIncome += Number(document.getElementById(id).value);
  });

  // Dépenses
  ["expenseRent","expenseLoan","expenseElectricity","expenseGas","expensePhone","expenseFood","expenseHomeInsurance",
  "expenseClothes","expenseFinance","expenseSavings","expenseCredits","expenseOtherInsurance","expenseFurniture",
  "expenseLeisure","expenseAlcohol","expenseVacation","expenseBooks","expenseChildCare","expenseChildOther",
  "expenseCar","expenseTransportOther","expenseIncomeTax","expenseLocalTax"].forEach(id=>{
    totalExpense += Number(document.getElementById(id).value);
  });

  const balance = totalIncome - totalExpense;
  document.getElementById("result").textContent = "Solde total : €" + balance;
});
