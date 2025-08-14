// Login / Signup
document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  window.location.href = "dashboard.html";
});
document.getElementById("signupForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUsername").value;
  localStorage.setItem("username", username);
  window.location.href = "dashboard.html";
});

// Dashboard greeting
window.addEventListener("load", () => {
  const user = localStorage.getItem("username") || "Utilisateur";
  const greeting = document.getElementById("greeting");
  if(greeting) greeting.textContent = "Bonjour, " + user;
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

// Calcul budget
document.getElementById("calculate")?.addEventListener("click", () => {
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
