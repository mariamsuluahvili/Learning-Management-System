const courseItems = document.querySelectorAll('.course-item');
courseItems.forEach((item, i) => {
  const title = item.querySelector('.course-title')?.innerText;
  if (title) console.log(`${i + 1}. ${title}`);
});

let colorFlag = false;
const orderBox = document.querySelector('.order-box');

if (orderBox) {
  setInterval(() => {
    orderBox.style.backgroundColor = colorFlag ? "#f9f9f9" : "#e0f7fa";
    colorFlag = !colorFlag;
  }, 2000);
}

//ითვლის რამდენი კურსია კალათაში და ანახლებს ტექსტს შესაბამისად
function updateCartCount() {
  const visibleCourses = document.querySelectorAll('.course-item:not([style*="display: none"])');
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    cartCount.textContent = `${visibleCourses.length} Course${visibleCourses.length !== 1 ? 's' : ''} in cart`;
  }
}
//შლის კურსს კალათიდან და კონსოლში ბეჭდავს რამდენი კურსი წაიშალა
const removeButtons = document.querySelectorAll('.course-actions a:nth-child(2)');
removeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const courseItem = btn.closest('.course-item');
    if (courseItem) {
      courseItem.style.display = 'none';
      console.log("Course removed from cart!");
      updateCartCount();
    }
  });
});



const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn?.addEventListener('click', () => {
  window.location.href = '../FifthPage/index.html';
});