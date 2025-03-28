
document.addEventListener("DOMContentLoaded", function () {
const menuButton = document.querySelector("button.md\\:hidden");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle mobile menu
menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

// Mobile Dropdown Toggle
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const arrow = document.getElementById('arrow-' + id);
    dropdown.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
}

// Desktop Dropdowns - Show on Hover
document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const dropdown = item.querySelector(".dropdown");
        if (dropdown) dropdown.classList.remove("hidden");
    });

    item.addEventListener("mouseleave", () => {
        const dropdown = item.querySelector(".dropdown");
        if (dropdown) dropdown.classList.add("hidden");
    });
});

// Mobile Dropdown Buttons
document.querySelectorAll(".mobile-dropdown button").forEach((btn) => {
    btn.addEventListener("click", function () {
        const dropdown = this.nextElementSibling;
        const arrow = this.querySelector("svg");
        dropdown.classList.toggle("hidden");
        arrow.classList.toggle("rotate-180");
    });
});


//SLIDE IN HOMEPAGE

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');

if (n > slides.length) slideIndex = 1;
if (n < 1) slideIndex = slides.length;

slides.forEach(slide => slide.classList.add('hidden'));
dots.forEach(dot => {
    dot.classList.remove('bg-red-600');
    dot.classList.add('bg-white', 'opacity-50');
});

slides[slideIndex-1].classList.remove('hidden');
dots[slideIndex-1].classList.remove('bg-white', 'opacity-50');
dots[slideIndex-1].classList.add('bg-red-600');
}

// Auto advance slides
setInterval(() => {
currentSlide(slideIndex + 1);
}, 5000);


// Initialize tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// Initialize fade animations
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => observer.observe(element));
});
