const validators = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,

  validateEmail(email) {
    return this.email.test(email);
  },

  validatePassword(password) {
    return this.password.test(password);
  }
};

function showNotification(message, type = "info") {
  alert(`${type.toUpperCase()}: ${message}`);
}

function handleSignUp(e) {
  e.preventDefault();

  const firstName = document.querySelector('#fullname_id_div input:first-child')?.value.trim();
  const lastName = document.querySelector('#fullname_id_div input:last-child')?.value.trim();
  const username = document.getElementById('username_input')?.value.trim();
  const email = document.getElementById('email_input')?.value.trim();
  const password = document.getElementById('password_input')?.value;
  const confirmPassword = document.getElementById('confirmpassword_input')?.value;

  if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
    showNotification("Please fill in all fields", "error");
    return;
  }

  if (!validators.validateEmail(email)) {
    showNotification("Invalid email format", "error");
    return;
  }

  if (!validators.validatePassword(password)) {
    showNotification("Password must be at least 8 characters with letters and numbers", "error");
    return;
  }

  if (password !== confirmPassword) {
    showNotification("Passwords do not match", "error");
    return;
  }

  showNotification("Account created successfully!", "success");
  
  setTimeout(() => {
    window.location.href = '../ThirdPage/index.html';
  }, 500);
}

document.getElementById('signin_id')?.addEventListener('click', () => {
  window.location.href = '../firstpage/index.html';
});

document.getElementById('signup_id')?.addEventListener('click', handleSignUp);

document.getElementById('createbutton_id')?.addEventListener('click', handleSignUp);