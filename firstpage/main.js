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
//დროებით მეხსიერებაში მონაცემების შენახვა
const sessionStore = {
  set(key, value) { //მონაცემების შენახვა  JSON ფორმატში
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const item = sessionStorage.getItem(key); //მონაცემებს იღებს  და json ფორმატიდან ნამდვილ ობიქეტად გარდაქმნა
    return item ? JSON.parse(item) : null;
  },

  remove(key) {
    sessionStorage.removeItem(key);
  },

  clear() {
    sessionStorage.clear();
  }
};

function showNotification(message, type = "info") {
  alert(`${type.toUpperCase()}: ${message}`);
}

function handleSignIn(e) {
  e.preventDefault();

  const email = document.getElementById('email_input')?.value.trim();
  const password = document.getElementById('password_input')?.value.trim();

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

  sessionStore.set('currentUser', userData);
  sessionStore.set('isAuthenticated', true);

  showNotification('Login successful!', 'success');
  
  setTimeout(() => {
    window.location.href = '../ThirdPage/index.html';
  }, 500);
}

document.getElementById("signinbutton2_id")?.addEventListener("click", handleSignIn);

document.getElementById("signup_id")?.addEventListener("click", () => {
  window.location.href = "../secondpage/index.html";
});