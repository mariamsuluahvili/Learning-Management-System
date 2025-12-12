function showNotification(message, type = "success") {
  alert(`${type.toUpperCase()}: ${message}`);
}

function validateCheckoutForm() {
  const fields = {
    country: document.querySelector('.checkout-form input[placeholder="Enter Country"]'),
    state: document.querySelector('.checkout-form input[placeholder="Enter State"]'),
    cardName: document.querySelector('.checkout-form input[placeholder="Name of card"]'),
    cardNumber: document.querySelector('.checkout-form input[placeholder="Card Number"]'),
    expiry: document.querySelector('.checkout-form input[placeholder="enter date"]'),
    cvc: document.querySelector('.checkout-form input[placeholder="enter cvc"]')
  };

  for (const [fieldName, field] of Object.entries(fields)) {
    if (!field || !field.value.trim()) {
      showNotification("Please fill in all fields", "error");
      return false;
    }
  }

  const cardNumber = fields.cardNumber.value.trim();
  const cvc = fields.cvc.value.trim();

  if (!/^\d{13,19}$/.test(cardNumber)) {
    showNotification("Invalid Card Number", "error");
    return false;
  }

  if (!/^\d{3,4}$/.test(cvc)) {
    showNotification("Invalid CVC/CVV", "error");
    return false;
  }

  return true;
}

const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn?.addEventListener('click', (e) => {
  e.preventDefault();

  if (validateCheckoutForm()) {
    showNotification("Checkout successful! Redirecting to confirmation page...");
    setTimeout(() => {
      window.location.href = '../sixthpage/index.html';
    }, 1000);
  }
});