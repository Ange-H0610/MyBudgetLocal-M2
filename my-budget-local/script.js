// Login / Signup simple
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  window.location.href = "dashboard.html";
});

document.getElementById("signupForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const username = document.getElementById("newUsername").value;
  localStorage.setItem("username", username);
  window.location.href = "dashboard.html";
});

// Dashboard greeting
window.addEventListener("load", function(){
  const user = localStorage.getItem("username") || "Utilisateur";
  const greeting = document.getElementById("greeting");
  if(greeting) greeting.textContent = "Bonjour, " + user;
});

// Logout
document.getElementById("logout")?.addEventListener("click", function(){
  localStorage.removeItem("username");
  window.location.href = "index.html";
});

// Calcul budget
document.getElementById("calculate")?.addEventListener("click", function(){
  const income = Number(document.getElementById("income").value);
  const expense = Number(document.getElementById("expense").value);
  const result = income - expense;
  document.getElementById("result").textContent = "Solde total : €" + result;
});
