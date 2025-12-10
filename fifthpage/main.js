function showNotification(message, type = "success") {
    alert(`${type.toUpperCase()}: ${message}`);
}


function validateCheckoutForm() {
    const country = document.querySelector('.checkout-form input[placeholder="Enter Country"]').value.trim();
    const state = document.querySelector('.checkout-form input[placeholder="Enter State"]').value.trim();
    const cardName = document.querySelector('.checkout-form input[placeholder="Name of card"]').value.trim();
    const cardNumber = document.querySelector('.checkout-form input[placeholder="Card Number"]').value.trim();
    const expiry = document.querySelector('.checkout-form input[placeholder="enter date"]').value.trim();
    const cvc = document.querySelector('.checkout-form input[placeholder="enter cvc"]').value.trim();

    if (!country || !state || !cardName || !cardNumber || !expiry || !cvc) {
        showNotification("Please fill in all fields", "error");
        return false;
    }

    const cardNumberPattern = /^\d{13,19}$/; 
    const cvcPattern = /^\d{3,4}$/;          

    if (!cardNumberPattern.test(cardNumber)) {
        showNotification("Invalid Card Number", "error");
        return false;
    }

    if (!cvcPattern.test(cvc)) {
        showNotification("Invalid CVC/CVV", "error");
        return false;
    }

    return true;
}
const checkoutBtn = document.querySelector('.checkout-btn');

checkoutBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateCheckoutForm()) {
        showNotification("Checkout successful! Redirecting to confirmation page...");
        window.location.href = '../sixthpage/index.html';
    }
});