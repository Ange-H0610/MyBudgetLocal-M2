// Signup
document.getElementById("signupForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  // Enregistrer utilisateur localement
  localStorage.setItem("username", username);
  localStorage.setItem("password_" + username, password);

  // Rediriger vers dashboard
  window.location.href = "dashboard.html";
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem("password_" + username);
  if(storedPassword && storedPassword === password){
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect");
  }
});
