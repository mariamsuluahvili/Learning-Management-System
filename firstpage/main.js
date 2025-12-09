const validators = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,

  validateEmail(email) {
    return this.email.test(email);
  },
   

  validatePassword(password) {
    return this.password.test(password);
  },

  validateForm(formData) {
    const errors = [];
    if (!this.validateEmail(formData.email)) {
      errors.push('Invalid email format');
    }
    if (!this.validatePassword(formData.password)) {
      errors.push('Password must be at least 8 characters with letters and numbers');
    }
    return errors;
  }
};

// მხოლოდ Session Storage
const sessionStore = {
  set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
};

function handleSignIn(e) {
  e.preventDefault();

  const email = document.getElementById('email_input')?.value;
  const password = document.getElementById('password_input')?.value;

  // ვალიდაცია
  if (!email || !password) {
    showNotification('Please fill in all fields', 'error');
    return;
  }

  if (!validators.validateEmail(email)) {
    showNotification('Invalid email format', 'error');
    return;
  }

  const userData = {
    email: email,
    name: email.split('@')[0],
    loginTime: new Date().toISOString(),
  };

  // მხოლოდ დროებითი შენახვა
  sessionStore.set('currentUser', userData);
  sessionStore.set('isAuthenticated', true);

  showNotification('Login successful!', 'success');
}

function showNotification(message, type = "info") {
  alert(`${type.toUpperCase()}: ${message}`);
}

document.getElementById("signinbutton2_id")
  .addEventListener("click", handleSignIn);

  document.getElementById("signup_id").addEventListener("click", () => {
    window.location.href = "../secondpage/index.html";
})

