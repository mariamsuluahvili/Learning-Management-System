$(document).ready(function() {

    $("#filter-button").on("click", function () {
        $(".sidebar .filter-section").slideToggle(300);
    });
});
const SITE_NAME = "Byway Learning Platform";
let currentPage = 1; 
const itemsPerPage = 3; 

const coursesData = [
    { id: 1, title: "JavaScript Basics", author: "John Doe", price: 149.9 },
    { id: 2, title: "Advanced CSS", author: "Jane Smith", price: 199.9 },
    { id: 3, title: "Python Fundamentals", author: "Alice Johnson", price: 99.9 },
    { id: 4, title: "React for Beginners", author: "Bob Brown", price: 179.9 },
    { id: 5, title: "Node.js Essentials", author: "Clara White", price: 159.9 }
];


let cart = [];
let visitedCourses = [];


function showNotification(message) {
    console.log('NOTIFICATION:', message);
}


function saveCourseToLocal(course) {
    localStorage.setItem('selectedCourse', JSON.stringify(course));
}

function getCourseFromLocal() {
    const stored = localStorage.getItem('selectedCourse');
    return stored ? JSON.parse(stored) : null;
}


function trackVisitedCourse(courseId) {
    if (!visitedCourses.includes(courseId)) visitedCourses.push(courseId);
    console.log('Visited courses:', visitedCourses);
}


function addToCart(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!cart.includes(course)) cart.push(course);
    showNotification(`${course.title} added to cart. Total items: ${cart.length}`);
}

function searchCourses(keyword) {
    const results = coursesData.filter(c => c.title.toLowerCase().includes(keyword.toLowerCase()));
    console.log(`Search results for "${keyword}":`, results.map(c => c.title));
    return results;
}


function sortCourses(criteria) {
    let sorted = [...coursesData];
    if (criteria === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (criteria === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    if (criteria === 'title-asc') sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (criteria === 'title-desc') sorted.sort((a, b) => b.title.localeCompare(a.title));

    console.log('Sorted courses:', sorted.map(c => c.title));
    return sorted;
}


function getPage(pageNumber) {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = coursesData.slice(start, end);
    console.log(`Page ${pageNumber}:`, pageItems.map(c => c.title));
    return pageItems;
}


function enrollInCourse(courseId, studentId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return console.log('Course not found.');
    const enrollment = { studentId, courseId, enrolledAt: new Date().toISOString() };
    console.log('Enrolled:', enrollment);
    showNotification(`Student ${studentId} enrolled in ${course.title}`);
}


function init() {
    console.log('='.repeat(50));
    console.log(`${SITE_NAME} Logic Initialized`);
    console.log('='.repeat(50));

    const lastCourse = getCourseFromLocal();
    if (lastCourse) console.log('Last viewed course:', lastCourse.title);

    
    getPage(1);             
    searchCourses('python'); 
    sortCourses('price-asc'); 
    addToCart(3);             
    enrollInCourse(2, 'student_001'); 
}

init();
const cartIcon = document.querySelector('.cart-icon');

cartIcon.addEventListener('click', function() {
    window.location.href = '../fourthpage/indx.html';
});


