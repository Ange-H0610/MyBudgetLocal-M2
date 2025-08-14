// =========================
// SIGNUP
// =========================
const signupForm = document.getElementById("signupForm");
if(signupForm){
  signupForm.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value;

    if(username === "" || password === ""){
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Vérifie si l'utilisateur existe déjà
    if(localStorage.getItem("password_" + username)){
      alert("Ce nom d'utilisateur existe déjà.");
      return;
    }

    // Enregistrement
    localStorage.setItem("username", username);
    localStorage.setItem("password_" + username, password);

    // Redirection vers dashboard
    window.location.href = "dashboard.html";
  });
}

// =========================
// LOGIN
// =========================
const loginForm = document.getElementById("loginForm");
if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    const storedPassword = localStorage.getItem("password_" + username);
    if(storedPassword && storedPassword === password){
      localStorage.setItem("username", username);
      window.location.href = "dashboard.html";
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
  });
}
