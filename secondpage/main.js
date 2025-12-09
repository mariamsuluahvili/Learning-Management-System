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

    const firstName = document.getElementById('fullname_id_div').children[0].value.trim();
    const lastName = document.getElementById('fullname_id_div').children[1].value.trim();
    const username = document.getElementById('username_id').children[1].value.trim();
    const email = document.getElementById('email_id').children[1].value.trim();
    const password = document.getElementById('pass_id').children[1].value;
    const confirmPassword = document.getElementById('confrimpass_id').children[1].value;

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
}

document.getElementById('signin_id').addEventListener('click', function() {
    window.location.href = '../firstpage/index.html';
});
document.getElementById('signup_id').addEventListener('click', function() {
    window.location.href = '../ThirdPage/index.html';
});

document.getElementById('createbutton_id').addEventListener('click', handleSignUp);