// --- Utilisateurs ---
function signup() {
  const user = document.getElementById('signupUser').value.trim();
  const pass = document.getElementById('signupPass').value.trim();
  if(!user || !pass) return alert("Veuillez remplir tous les champs.");

  let users = JSON.parse(localStorage.getItem('users')) || {};
  if(users[user]) return alert("Nom d’utilisateur déjà utilisé");

  users[user] = { password: pass, budget: { revenus: [], depenses: [] } };
  localStorage.setItem('users', JSON.stringify(users));
  alert("Inscription réussie !");
  localStorage.setItem('currentUser', user);
  window.location.href = "dashboard.html";
}

function login() {
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  let users = JSON.parse(localStorage.getItem('users')) || {};
  if(users[user] && users[user].password === pass){
    localStorage.setItem('currentUser', user);
    window.location.href = "dashboard.html";
  } else alert("Nom d’utilisateur ou mot de passe incorrect.");
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = "index.html";
}

// --- Dashboard ---
let currentUser = localStorage.getItem('currentUser');
if(!currentUser && window.location.pathname.includes("dashboard.html")) logout();

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Afficher le nom utilisateur
if(currentUser){
  const hello = document.getElementById("helloUser");
  if(hello) hello.innerText = "Bonjour, " + currentUser;
}

function saveBudget(){
  let users = JSON.parse(localStorage.getItem('users')) || {};
  const revenus = Array.from(document.querySelectorAll("#revenusTable .montant")).map(i=>parseFloat(i.value)||0);
  const depenses = Array.from(document.querySelectorAll("#depensesTable .montant")).map(i=>parseFloat(i.value)||0);
  users[currentUser].budget = { revenus, depenses };
  localStorage.setItem('users', JSON.stringify(users));
}

function loadBudget(){
  let users = JSON.parse(localStorage.getItem('users')) || {};
  const budget = users[currentUser]?.budget;
  if(!budget) return;
  const revenusInputs = document.querySelectorAll("#revenusTable .montant");
  const depensesInputs = document.querySelectorAll("#depensesTable .montant");
  budget.revenus.forEach((v,i)=>{if(revenusInputs[i]) revenusInputs[i].value=v;});
  budget.depenses.forEach((v,i)=>{if(depensesInputs[i]) depensesInputs[i].value=v;});
}

function calculerBudget(){
  const revenusInputs = document.querySelectorAll("#revenusTable .montant");
  const depensesInputs = document.querySelectorAll("#depensesTable .montant");

  let totalR=0; revenusInputs.forEach(i=>totalR+=parseFloat(i.value)||0);
  let totalD=0; depensesInputs.forEach(i=>totalD+=parseFloat(i.value)||0);

  document.getElementById("totalRevenus").innerText=totalR.toFixed(2);
  document.getElementById("diffRevenus").innerText=totalR.toFixed(2);
  document.getElementById("totalDepenses").innerText=totalD.toFixed(2);
  document.getElementById("diffDepenses").innerText=totalD.toFixed(2);

  const solde = totalR - totalD;
  const soldeElem=document.getElementById("solde");
  soldeElem.innerText=solde.toFixed(2);
  soldeElem.style.color=solde>=0?"green":"red";

  saveBudget();
}

window.addEventListener("DOMContentLoaded",()=>{
  if(window.location.pathname.includes("dashboard.html")) loadBudget();
});
