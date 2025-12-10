const courseItems = document.querySelectorAll('.course-item');

console.log("course titles:");
for (let i = 0; i < courseItems.length; i++) {
    const title = courseItems[i].querySelector('.course-title').innerText;
    console.log(`${i + 1}. ${title}`);
}

let colorFlag = false;

const orderBox = document.querySelector('.order-box');

const intervalId = setInterval(() => {
    orderBox.style.backgroundColor = colorFlag ? "#f9f9f9" : "#e0f7fa";
    colorFlag = !colorFlag;
}, 2000);



const removeButtons = document.querySelectorAll('.course-actions a:nth-child(2)');
removeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const courseItem = btn.closest('.course-item');
        courseItem.style.display = 'none';
        console.log("Course removed from cart!");
    });
});
const checkoutBtn = document.querySelector('.checkout-btn');

checkoutBtn.addEventListener('click', () => {
    window.location.href = '../FifthPage/index.html';
});