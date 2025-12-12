$(document).ready(function() {
  $("#filter-button").on("click", function () {
    $(".sidebar .filter-section").slideToggle(300);
  });
});

const cartIcon = document.querySelector('.cart-icon');
cartIcon?.addEventListener('click', () => {
  window.location.href = '../fourthpage/index.html';
});

//select მნიშვნელობის შეცვლისას გამოიტანს არჩეულ value-ს კონსოლში
const sortSelect = document.querySelector('.sort-select');
sortSelect?.addEventListener('change', (e) => {
  console.log('Sorting by:', e.target.value);
});

//კონსოლში გამოიტანს არჩეული გვერდის ნომერს
const pageButtons = document.querySelectorAll('.page-btn');
pageButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    pageButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    console.log('Page changed to:', btn.textContent);
  });
});