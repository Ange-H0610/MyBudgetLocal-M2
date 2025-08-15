// Sauvegarde utilisateurs
const users = JSON.parse(localStorage.getItem('users')) || [];

// Signup
if (document.getElementById('signupForm')) {
  document.getElementById('signupForm').addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (users.some(user => user.username === username)) {
      alert("Nom déjà utilisé");
      return;
    }
    users.push({ username, password, incomes: [], expenses: [] });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'dashboard.html';
  });
}

// Login
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      alert("Identifiants incorrects");
      return;
    }
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'dashboard.html';
  });
}

// Dashboard
if (document.getElementById('dashboard')) {
  const loggedUser = localStorage.getItem('loggedInUser');
  if (!loggedUser) window.location.href = 'index.html';

  const user = users.find(u => u.username === loggedUser);
  document.getElementById('welcomeUser').textContent = `Bonjour ${loggedUser}`;

  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
  });

  document.getElementById('addIncome').addEventListener('click', () => {
    const amount = parseInt(document.getElementById('incomeAmount').value);
    const desc = document.getElementById('incomeDesc').value;
    user.incomes.push({ amount, desc });
    localStorage.setItem('users', JSON.stringify(users));
    renderList('incomeList', user.incomes);
  });

  document.getElementById('addExpense').addEventListener('click', () => {
    const amount = parseInt(document.getElementById('expenseAmount').value);
    const desc = document.getElementById('expenseDesc').value;
    user.expenses.push({ amount, desc });
    localStorage.setItem('users', JSON.stringify(users));
    renderList('expenseList', user.expenses);
  });

  document.getElementById('calculateBalance').addEventListener('click', () => {
    const totalIncome = user.incomes.reduce((sum, i) => sum + i.amount, 0);
    const totalExpense = user.expenses.reduce((sum, e) => sum + e.amount, 0);
    const balance = totalIncome - totalExpense;
    document.getElementById('balanceDisplay').textContent = `Solde : ${balance.toLocaleString()} Ariary`;
  });

  function renderList(listId, data) {
    const ul = document.getElementById(listId);
    ul.innerHTML = '';
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.desc} - ${item.amount.toLocaleString()} AR`;
      ul.appendChild(li);
    });
  }

  renderList('incomeList', user.incomes);
  renderList('expenseList', user.expenses);
}

// Theme toggle
if (document.getElementById('themeToggle')) {
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
  });
}
